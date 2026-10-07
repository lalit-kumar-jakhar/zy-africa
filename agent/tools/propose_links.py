"""Propose contextual internal links for every live post.

Design notes that matter:

* **The raw HTML is never re-parsed and re-serialized.** BeautifulSoup decodes
  `&nbsp;` to `\\xa0`, and `Post.save()` injects heading ids via a raw substring
  test (`if str(tag) in self.description`), so a round-trip through a parser
  silently strips the ids off any heading containing an entity and takes its TOC
  entries with it. Everything here is offset-based splicing on the original
  string, so bytes outside the inserted anchors are untouched.

* **Links only land in body prose.** Text inside headings, existing anchors,
  tables and image captions is off limits.

* Links must be absolute `https://zyneto.com/...` or the backend adds
  `rel="nofollow"`, which would waste the whole exercise.
"""
import json
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from link_map import (BRIDGES, CLUSTER_OF, PHRASES, ROLE_PHRASES,  # noqa: E402
                      ROLES, WEAK)
from zy_paths import zy  # noqa: E402

INV = zy("Blog/reports/link-inventory.json")
OUT = zy("Blog/reports/link-proposals.json")

MAX_PER_POST = 12
MIN_PER_POST = 6
MAX_PER_PARA = 2
# Hard ceiling on how many NEW inbound links one page may collect. Without it
# "user experience" alone sent 47 of 100 posts to the same design article,
# which is templated linking rather than editorial. Capping makes a post fall
# through to its next-best target, which raises diversity and per-post count
# at the same time.
MAX_NEW_INBOUND = 28
TAG = re.compile(r"<(/?)([a-zA-Z0-9]+)[^>]*>")

# Contexts where a link must never be inserted.
FORBIDDEN = {"a", "h1", "h2", "h3", "h4", "h5", "h6", "table", "thead", "tbody",
             "tr", "td", "th", "code", "pre", "figcaption", "script", "style"}


def text_spans(html):
    """Yield (start, end, para_index) for text runs that are safe to link.

    Safe means: inside a <p>, and not inside any FORBIDDEN element.
    """
    stack, spans = [], []
    pos, para = 0, -1
    for m in TAG.finditer(html):
        if m.start() > pos:
            inside_p = "p" in stack
            blocked = any(t in FORBIDDEN for t in stack)
            if inside_p and not blocked:
                spans.append((pos, m.start(), para))
        closing, name = m.group(1), m.group(2).lower()
        if closing:
            for i in range(len(stack) - 1, -1, -1):
                if stack[i] == name:
                    del stack[i:]
                    break
        elif name not in ("br", "img", "hr", "input", "meta", "link"):
            if name == "p":
                para += 1
            stack.append(name)
        pos = m.end()
    return spans


# Targets that are not Active yet. Linking to them now would point live,
# indexed pages at a 404 for up to three weeks, since the public queryset
# hard-filters on status='Active'. They get a second pass once published.
LIVE_ONLY_SKIP = set()


def phrase_table(source_slug):
    """Every (phrase -> target) pair applicable to this source post.

    Layer 1 is global. Layer 2 resolves role phrases against the source's own
    cluster, so the same phrase points somewhere different depending on where
    it is written.
    """
    table = {}
    for target, phrases in PHRASES.items():
        for ph in phrases:
            table.setdefault(ph, set()).add((target, "global"))
    for target, phrases in BRIDGES.items():
        for ph in phrases:
            table.setdefault(ph, set()).add((target, "bridge"))
    cluster = CLUSTER_OF.get(source_slug)
    for role, target in ROLES.get(cluster, {}).items():
        for ph in ROLE_PHRASES.get(role, []):
            table.setdefault(ph, set()).add((target, "role"))
    return table


def find_matches(html, source_slug):
    """All phrase occurrences in linkable prose."""
    spans = text_spans(html)
    hits = []
    for ph, targets in phrase_table(source_slug).items():
        pat = re.compile(r"(?<![\w-])" + re.escape(ph) + r"(?![\w-])",
                         re.IGNORECASE)
        for target, layer in targets:
            if target == source_slug or target in LIVE_ONLY_SKIP:
                continue
            for s, e, para in spans:
                for m in pat.finditer(html, s, e):
                    hits.append({
                        "target": target, "phrase": ph, "layer": layer,
                        "weak": ph in WEAK and layer == "global",
                        "start": m.start(), "end": m.end(),
                        "text": html[m.start():m.end()], "para": para,
                    })
    # Longest match wins. "React" and "React Native" both match the same text,
    # and if the shorter one outranks the longer one the anchor is spliced
    # mid-phrase, leaving " Native" dangling outside the link. Dropping any hit
    # strictly contained in another makes that structurally impossible rather
    # than relying on the scorer to get it right.
    return [h for h in hits if not any(
        o["start"] <= h["start"] and h["end"] <= o["end"]
        and (o["end"] - o["start"]) > (h["end"] - h["start"])
        for o in hits)]


def score(hit, src_cluster, inbound_now, orphan, scheduled):
    t = hit["target"]
    s = len(hit["phrase"].split()) * 2.0
    if hit["layer"] == "role":
        s += 12          # same-cluster by construction, and the strongest signal
    elif hit["layer"] == "bridge":
        s += 4           # real but cross-topic, so below a same-cluster link
    if CLUSTER_OF.get(t) == src_cluster:
        s += 10
    if t in orphan:
        s += 8
    if hit["weak"]:
        # A bare brand or tech word is spam in an unrelated post but a genuinely
        # useful link inside its own cluster: "Tinder" in a dating article
        # should point at the Tinder clone guide; in a music article it should
        # not exist at all.
        s -= 6 if CLUSTER_OF.get(t) == src_cluster else 20
    # Spread. Without a strong penalty "user experience" alone sends 46 links to
    # one design article, which concentrates authority instead of distributing
    # it and reads as templated linking.
    s -= inbound_now.get(t, 0) * 1.4
    s -= hit["para"] * 0.05               # mild preference for earlier prose
    return s


def pick(hits, src_cluster, inbound_now, orphan, scheduled, gained):
    """Greedy selection under the per-post, per-target and per-para caps."""
    ranked = sorted(hits, key=lambda h: -score(h, src_cluster, inbound_now,
                                               orphan, scheduled))
    chosen, used_targets, per_para, occupied = [], set(), {}, []
    used_anchors = set()
    for h in ranked:
        if len(chosen) >= MAX_PER_POST:
            break
        if h["target"] in used_targets:
            continue
        if gained.get(h["target"], 0) >= MAX_NEW_INBOUND:
            continue
        # The same visible anchor text must never point at two different pages
        # in one article - it reads as a mistake and splits the signal.
        if h["text"].lower() in used_anchors:
            continue
        if per_para.get(h["para"], 0) >= MAX_PER_PARA:
            continue
        if any(h["start"] < e and s < h["end"] for s, e in occupied):
            continue                       # overlaps a link already chosen
        if h["weak"] and score(h, src_cluster, inbound_now, orphan,
                               scheduled) < 0:
            continue
        chosen.append(h)
        used_targets.add(h["target"])
        used_anchors.add(h["text"].lower())
        per_para[h["para"]] = per_para.get(h["para"], 0) + 1
        occupied.append((h["start"], h["end"]))
    return chosen


def main():
    inv = json.load(open(INV))
    live = {s: d for s, d in inv.items() if d["status"] == "Active"}
    scheduled = {s for s, d in inv.items() if d["status"] != "Active"}
    LIVE_ONLY_SKIP.update(scheduled)
    orphan = {s for s, d in inv.items() if d["n_inbound"] == 0}
    inbound_now = {s: d["n_inbound"] for s, d in inv.items()}

    bodies = json.load(open(BODIES)) if os.path.exists(BODIES) else {}
    proposals, stats, gained = {}, [], {}
    # Process the least-linked posts first so they get first pick of the
    # highest-value targets before the spread penalty kicks in.
    for slug in sorted(live, key=lambda s: live[s]["n_blog"]):
        body = bodies.get(slug)
        if body is None:
            continue
        hits = find_matches(body, slug)
        got = pick(hits, CLUSTER_OF.get(slug), inbound_now, orphan, scheduled,
                   gained)
        for h in got:
            inbound_now[h["target"]] = inbound_now.get(h["target"], 0) + 1
            gained[h["target"]] = gained.get(h["target"], 0) + 1
            orphan.discard(h["target"])
        proposals[slug] = got
        stats.append(len(got))

    with open(OUT, "w") as f:
        json.dump(proposals, f, indent=2)

    stats.sort()
    total = sum(stats)
    print(f"posts processed:     {len(stats)}")
    print(f"links proposed:      {total}")
    print(f"mean per post:       {total/len(stats):.1f}   median {stats[len(stats)//2]}")
    print(f"posts under {MIN_PER_POST}:       {sum(1 for x in stats if x < MIN_PER_POST)}")
    print(f"posts at 0:          {sum(1 for x in stats if x == 0)}")
    still = [s for s in live if inbound_now.get(s, 0) == 0]
    print(f"still zero inbound:  {len(still)}")
    if still:
        print("   " + ", ".join(sorted(still)[:12]))
    print(f"\nwrote {OUT}")


BODIES = zy("Blog/reports/bodies.json")

if __name__ == "__main__":
    sys.exit(main())
