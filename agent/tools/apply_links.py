"""Splice the approved links into post bodies, then prove nothing else moved.

Insertion is offset-based on the original string, applied back-to-front so
earlier offsets stay valid. The document is never parsed and re-serialized -
see the note in propose_links.py about `&nbsp;` decoding silently stripping
heading ids and taking the table of contents with them.

Every rewritten body is checked against four invariants before it is allowed
out of this module. A post that fails any of them is dropped, not shipped.
"""
import json
import os
import re
import sys
from zy_paths import zy

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

BODIES = zy("Blog/reports/bodies.json")
PROP = zy("Blog/reports/link-proposals.json")
OUT = zy("Blog/reports/bodies-linked.json")

HEADING = re.compile(r"<h([23])[^>]*>(.*?)</h\1>", re.S | re.I)
ANCHOR = re.compile(r"<a\s", re.I)


def build(html, hits):
    """Return the rewritten body with anchors spliced in."""
    for h in sorted(hits, key=lambda x: -x["start"]):
        url = f"https://zyneto.com/blog/{h['target']}"
        anchor = (f'<a href="{url}" target="_blank">'
                  f'{html[h["start"]:h["end"]]}</a>')
        html = html[:h["start"]] + anchor + html[h["end"]:]
    return html


def strip_tags(s):
    return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", "", s)).strip()


def verify(before, after, hits):
    """Four invariants. Any failure means the post is not safe to ship."""
    errs = []

    # 1. Visible text is untouched. Anchors add markup, never words.
    if strip_tags(before) != strip_tags(after):
        errs.append("visible text changed")

    # 2. Exactly the expected number of new anchors.
    want = len(ANCHOR.findall(before)) + len(hits)
    got = len(ANCHOR.findall(after))
    if got != want:
        errs.append(f"anchor count {got}, expected {want}")

    # 3. Every heading is byte-identical. Post.save() injects TOC ids with a
    #    raw substring test, so a single altered character silently drops the
    #    heading's id and every TOC entry under it.
    hb, ha = HEADING.findall(before), HEADING.findall(after)
    if hb != ha:
        errs.append("heading markup changed")

    # 4. No nested anchors - an <a> inside an <a> is invalid and the browser
    #    will close the outer one early, mangling the layout.
    depth = 0
    for m in re.finditer(r"<(/?)a\b", after, re.I):
        depth += -1 if m.group(1) else 1
        if depth > 1:
            errs.append("nested anchor")
            break
        depth = max(depth, 0)

    return errs


def main():
    bodies, prop = json.load(open(BODIES)), json.load(open(PROP))
    out, failed, total = {}, {}, 0
    for slug, hits in prop.items():
        if not hits:
            continue
        before = bodies[slug]
        after = build(before, hits)
        errs = verify(before, after, hits)
        if errs:
            failed[slug] = errs
            continue
        out[slug] = after
        total += len(hits)

    json.dump(out, open(OUT, "w"))
    print(f"rewrote {len(out)} posts, {total} links inserted")
    if failed:
        print(f"\nFAILED VERIFICATION ({len(failed)}) - not shipped:")
        for s, e in failed.items():
            print(f"  {s}: {'; '.join(e)}")
    else:
        print("all posts passed all four invariants")
    print(f"\nwrote {OUT}")


if __name__ == "__main__":
    sys.exit(main())
