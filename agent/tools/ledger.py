import os as _os
_MISSING = "set BLOG_MANAGE_API_KEY in the environment, see agent/SETUP.md"
"""Content ledger: what changed on which post, when, why, and with what result.

The problem this solves: without a record, every batch re-argues which pages to
refresh from scratch, and a page can get rewritten twice in a quarter with
nobody able to say whether the first rewrite worked. A change with no recorded
baseline is unmeasurable, which makes it indistinguishable from doing nothing.

Two rules are enforced here rather than remembered:

* **Cooling-off.** A content change needs ~90 days before its effect is
  readable in Search Console; metadata-only needs ~30. Touching a page again
  inside its window destroys the attribution for the first change. `check`
  refuses, and says when it will be safe.
* **Every event carries a baseline.** Impressions, position, clicks and word
  count as they were on the day of the change, so the follow-up read is a
  comparison rather than a guess.

  python3 ledger.py backfill    rebuild history from the API (safe to re-run)
  python3 ledger.py render      write Blog/LEDGER.md
  python3 ledger.py check <slug>   may I touch this page?
  python3 ledger.py due         changes whose review date has arrived
  python3 ledger.py note <slug> <action> <reason>   record a manual change

`note` exists for anything the API cannot see - service and solution pages
render from the frontend repo, not the CMS, so a change to them leaves no trace
for `backfill` to find.
"""
import json
import os
import re
import sys
import urllib.request
from datetime import date, datetime, timedelta
from zy_paths import zy

KEY = _os.environ.get("BLOG_MANAGE_API_KEY", _MISSING)
BASE = "https://api.zyneto.com/api/v1"
ROOT = zy("Blog")
LEDGER = f"{ROOT}/data/content-ledger.json"
OUT = f"{ROOT}/LEDGER.md"
INV = f"{ROOT}/reports/link-inventory.json"

# How long before a change of each kind can be judged.
COOLDOWN = {"new": 90, "refresh": 90, "consolidation": 90,
            "links": 60, "metadata": 30, "hero": 30, "schema": 30}

ACTION_LABEL = {
    "new": "New post", "refresh": "Content refresh", "links": "Internal links",
    "metadata": "Metadata only", "hero": "Hero image",
    "consolidation": "Consolidation", "schema": "Schema",
}


def api(path):
    req = urllib.request.Request(BASE + path, headers={"X-API-Key": KEY})
    with urllib.request.urlopen(req, timeout=120) as r:
        return json.loads(r.read().decode())


def paged(path):
    out, p = [], 1
    sep = "&" if "?" in path else "?"
    while True:
        d = api(f"{path}{sep}page={p}")
        res = d.get("results", d if isinstance(d, list) else [])
        out += res
        if not d.get("next"):
            break
        p += 1
    return out


def load():
    if os.path.exists(LEDGER):
        return json.load(open(LEDGER))
    return {"events": [], "generated": None}


def save(led):
    led["generated"] = date.today().isoformat()
    os.makedirs(os.path.dirname(LEDGER), exist_ok=True)
    json.dump(led, open(LEDGER, "w"), indent=1)


def gsc_baseline():
    """90-day Search Console snapshot taken 2026-08-06 (window May 8 - Aug 3).

    Kept as a file rather than re-queried, because a baseline that moves is not
    a baseline. Refresh it deliberately by replacing /tmp/gsc.tsv equivalent.
    """
    path = f"{ROOT}/data/gsc-baseline-2026-08-06.tsv"
    if not os.path.exists(path):
        return {}
    out = {}
    for ln in open(path):
        parts = ln.rstrip("\n").split("\t")
        if len(parts) != 4:
            continue
        s, c, i, p = parts
        out[s] = {"clicks": int(c), "impressions": int(i), "position": float(p)}
    return out


def action_for(note):
    n = (note or "").lower()
    if "internal linking" in n:
        return "links"
    if "ctr" in n or "metadata" in n or "title under 60" in n:
        return "metadata"
    if "consolidation" in n:
        return "consolidation"
    return "refresh"


def backfill():
    """Rebuild the event log from the API. Idempotent: keyed on (slug, date, action, ref)."""
    led = load()
    seen = {(e["slug"], e["date"], e["action"], e.get("ref")) for e in led["events"]}
    inv = json.load(open(INV)) if os.path.exists(INV) else {}
    base = gsc_baseline()
    added = 0

    def push(slug, dt, action, reason, detail="", ref=None):
        nonlocal added
        k = (slug, dt, action, ref)
        if k in seen:
            return
        seen.add(k)
        b = base.get(slug, {})
        led["events"].append({
            "slug": slug, "date": dt, "action": action, "reason": reason,
            "detail": detail, "ref": ref,
            "baseline": {**b, "words": inv.get(slug, {}).get("words"),
                         "inbound": inv.get(slug, {}).get("n_inbound")},
            "review_on": (datetime.fromisoformat(dt).date()
                          + timedelta(days=COOLDOWN.get(action, 90))).isoformat(),
        })
        added += 1

    for r in paged("/manage/revisions/"):
        slug = r.get("post")
        if not slug:
            continue
        when = (r.get("applied_date") or r.get("scheduled_publish_date")
                or r.get("created_date") or "")[:10]
        if not when:
            continue
        act = action_for(r.get("note"))
        push(slug, when, act, r.get("note") or "", f"revision {r['id']}",
             ref=f"rev-{r['id']}")

    for p in paged("/manage/posts/"):
        slug = p.get("slug")
        if not slug:
            continue
        when = (p.get("scheduled_publish_date") or p.get("created_date") or "")[:10]
        st = p.get("status")
        if st == "Scheduled":
            push(slug, when, "new", "Scheduled publication", "", ref="post-new")
        elif st == "Active" and slug in inv and inv[slug].get("words"):
            # Only record a creation event for posts we actually shipped this
            # cycle; the pre-existing 100 are history we did not author here.
            pass

    led["events"].sort(key=lambda e: (e["date"], e["slug"]))
    save(led)
    print(f"backfill: {added} new events, {len(led['events'])} total")


def note(slug, action, reason, ref=None):
    """Record a change the API cannot see, e.g. a frontend-rendered page."""
    led = load()
    today = date.today()
    base = gsc_baseline().get(slug, {})
    led["events"].append({
        "slug": slug, "date": today.isoformat(), "action": action,
        "reason": reason, "detail": "", "ref": ref or "manual",
        "baseline": base,
        "review_on": (today + timedelta(days=COOLDOWN.get(action, 90))).isoformat(),
    })
    led["events"].sort(key=lambda e: (e["date"], e["slug"]))
    save(led)
    print(f"recorded: {slug} / {action} / review on "
          f"{(today + timedelta(days=COOLDOWN.get(action, 90))).isoformat()}")


def by_slug(led):
    out = {}
    for e in led["events"]:
        out.setdefault(e["slug"], []).append(e)
    for v in out.values():
        v.sort(key=lambda e: e["date"])
    return out


def check(slug):
    led = load()
    ev = by_slug(led).get(slug, [])
    if not ev:
        print(f"{slug}: no recorded changes. Safe to work on.")
        return 0
    print(f"{slug}\n")
    for e in ev:
        b = e.get("baseline") or {}
        bits = []
        if b.get("impressions"):
            bits.append(f"{b['impressions']} impr @ pos {b.get('position', 0):.1f}")
        if b.get("words"):
            bits.append(f"{b['words']}w")
        print(f"  {e['date']}  {ACTION_LABEL.get(e['action'], e['action']):16} "
              f"{e['reason'][:52]}")
        if bits:
            print(f"              baseline: {', '.join(bits)}")
    last = ev[-1]
    review = datetime.fromisoformat(last["review_on"]).date()
    today = date.today()
    print()
    if today < review:
        print(f"  DO NOT TOUCH until {review} ({(review - today).days} days).")
        print(f"  The {ACTION_LABEL.get(last['action'], last['action']).lower()} "
              f"of {last['date']} has not had time to show an effect; changing it "
              f"again now makes both changes unmeasurable.")
        return 1
    print(f"  Safe to change. Last touched {last['date']}, review due {review}.")
    return 0


def due():
    led = load()
    today = date.today()
    rows = [e for e in led["events"]
            if datetime.fromisoformat(e["review_on"]).date() <= today]
    if not rows:
        nxt = sorted(led["events"], key=lambda e: e["review_on"])
        print("nothing due for review yet.")
        if nxt:
            print(f"next: {nxt[0]['review_on']}  {nxt[0]['slug']}")
        return
    print(f"{len(rows)} changes are ready to be judged:")
    for e in sorted(rows, key=lambda e: e["review_on"]):
        print(f"  {e['review_on']}  {e['slug'][:44]:46} {e['action']}")


def render():
    led, inv = load(), json.load(open(INV)) if os.path.exists(INV) else {}
    slugs = by_slug(led)
    today = date.today()

    counts = {}
    for e in led["events"]:
        counts[e["action"]] = counts.get(e["action"], 0) + 1

    L = ["# Content ledger", "",
         f"Every change made to a post: what, when, why, and the baseline it "
         f"should be judged against. Generated by `tools/blog-visuals/ledger.py` "
         f"on {led.get('generated')}.", "",
         "**Before refreshing any page, run "
         "`python3 ledger.py check <slug>`.** It refuses inside the cooling-off "
         "window and says when the page is readable again. Changing a page twice "
         "inside one measurement window makes both changes unmeasurable.", "",
         "| Cooling-off | Days |", "|---|---|"]
    for k, v in sorted(COOLDOWN.items(), key=lambda x: -x[1]):
        L.append(f"| {ACTION_LABEL.get(k, k)} | {v} |")
    L += ["", "## Totals", "",
          "| Action | Count |", "|---|---|"]
    for k, v in sorted(counts.items(), key=lambda x: -x[1]):
        L.append(f"| {ACTION_LABEL.get(k, k)} | {v} |")

    locked = []
    for s, ev in slugs.items():
        r = datetime.fromisoformat(ev[-1]["review_on"]).date()
        if r > today:
            locked.append((r, s, ev[-1]))
    L += ["", f"## Locked: {len(locked)} pages inside their measurement window", "",
          "Do not change these. The date is when the last change becomes readable.",
          "", "| Readable on | Page | Last change | Baseline |", "|---|---|---|---|"]
    for r, s, e in sorted(locked)[:40]:
        b = e.get("baseline") or {}
        bl = (f"{b['impressions']:,} impr @ {b.get('position', 0):.1f}"
              if b.get("impressions") else "no GSC volume")
        L.append(f"| {r} | `{s}` | {ACTION_LABEL.get(e['action'], e['action'])} | {bl} |")
    if len(locked) > 40:
        L.append(f"| ... | *and {len(locked) - 40} more* | | |")

    L += ["", "## Per-page history", ""]
    for s in sorted(slugs):
        ev = slugs[s]
        b = (ev[-1].get("baseline") or {})
        head = f"**`{s}`**"
        if b.get("impressions"):
            head += (f" - {b['impressions']:,} impressions, position "
                     f"{b.get('position', 0):.1f}, {b.get('words') or '?'} words")
        L.append(head)
        for e in ev:
            L.append(f"- `{e['date']}` **{ACTION_LABEL.get(e['action'], e['action'])}** "
                     f"- {e['reason'][:96]}"
                     + (f" ({e['ref']})" if e.get("ref") else ""))
        L.append("")

    open(OUT, "w").write("\n".join(L))
    print(f"wrote {OUT}  ({len(led['events'])} events, {len(slugs)} pages, "
          f"{len(locked)} locked)")


if __name__ == "__main__":
    cmd = sys.argv[1] if len(sys.argv) > 1 else "render"
    if cmd == "backfill":
        backfill()
    elif cmd == "render":
        render()
    elif cmd == "check":
        sys.exit(check(sys.argv[2]))
    elif cmd == "due":
        due()
    elif cmd == "note":
        note(sys.argv[2], sys.argv[3], " ".join(sys.argv[4:]))
    else:
        print(__doc__)
