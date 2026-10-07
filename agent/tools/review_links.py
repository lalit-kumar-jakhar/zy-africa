"""Render proposed links with surrounding sentence context for human review.

A link that reads wrong in context is worse than no link, and the numbers in
propose_links.py cannot tell the difference. This prints what a reader would
actually see.
"""
import json
import re
import sys
from zy_paths import zy

BODIES = zy("Blog/reports/bodies.json")
PROP = zy("Blog/reports/link-proposals.json")
OUT = zy("Blog/reports/LINK-REVIEW.md")


def context(html, start, end, pad=110):
    a, b = max(0, start - pad), min(len(html), end + pad)
    before = re.sub(r"<[^>]+>", "", html[a:start]).replace("\n", " ")
    anchor = html[start:end]
    after = re.sub(r"<[^>]+>", "", html[end:b]).replace("\n", " ")
    return (re.sub(r"\s+", " ", before), anchor, re.sub(r"\s+", " ", after))


def main():
    bodies, prop = json.load(open(BODIES)), json.load(open(PROP))
    lines = ["# Internal link proposals - review sheet", ""]
    only = sys.argv[1] if len(sys.argv) > 1 else None
    for slug in sorted(prop):
        if only and only not in slug:
            continue
        hits = prop[slug]
        if not hits:
            continue
        lines.append(f"## {slug}  ({len(hits)} links)")
        lines.append("")
        for h in sorted(hits, key=lambda x: x["start"]):
            b, a, f = context(bodies[slug], h["start"], h["end"])
            lines.append(f"- **[{h['layer']}]** -> `{h['target']}`")
            lines.append(f"  > ...{b}**[{a}]**{f}...")
        lines.append("")
    open(OUT, "w").write("\n".join(lines))
    print(f"wrote {OUT}")
    if only:
        print("\n".join(lines))


if __name__ == "__main__":
    sys.exit(main())
