import os as _os
_MISSING = "set BLOG_MANAGE_API_KEY in the environment, see agent/SETUP.md"
import argparse
import json
import re
import sys
import urllib.request

API = "https://api.zyneto.com/api/v1/manage/posts/"
KEY = _os.environ.get("BLOG_MANAGE_API_KEY", _MISSING)
STOP = {"a", "an", "the", "to", "for", "of", "in", "and", "is", "how", "what", "your",
        "you", "it", "on", "with", "best", "guide", "2024", "2025", "2026", "top",
        "complete", "development", "app", "apps"}
BLOCK, CHECK = 0.34, 0.22


def toks(s):
    return {w for w in re.split(r"[^a-z0-9]+", s.lower()) if w and w not in STOP}


def library():
    rows, url = [], API
    while url:
        req = urllib.request.Request(url, headers={"X-API-Key": KEY})
        d = json.load(urllib.request.urlopen(req))
        rows += d["results"]
        url = d.get("next")
    live = [r for r in rows if r["status"] in ("Active", "Scheduled")]
    if not live:
        sys.exit("ABORT: library returned 0 live posts. Refusing to pass everything.")
    return [(r["slug"], toks(r["slug"] + " " + r["title"])) for r in live]


a = argparse.ArgumentParser()
a.add_argument("--candidates", required=True)
a.add_argument("--quiet", action="store_true")
a = a.parse_args()

idx = library()
cands = [l.strip() for l in open(a.candidates, encoding="utf-8") if l.strip() and not l.startswith("#")]
blocked = checked = 0
print(f"screened against {len(idx)} live and scheduled posts\n")
for line in cands:
    slug, _, kw = line.partition("|")
    t = toks(slug + " " + kw)
    if not t:
        sys.exit(f"ABORT: candidate '{line}' reduced to zero tokens after stopwords.")
    top = sorted(((len(t & o) / len(t | o), s) for s, o in idx), reverse=True)[:3]
    v = top[0][0]
    tag = "BLOCK" if v >= BLOCK else ("CHECK" if v >= CHECK else "clear")
    blocked += tag == "BLOCK"
    checked += tag == "CHECK"
    if a.quiet and tag == "clear":
        continue
    print(f"  [{tag}] {slug.strip():40} {v:.2f}  {top[0][1]}")
    if tag != "clear":
        for s2, s1 in [(x[0], x[1]) for x in top[1:]]:
            print(f"          {'':40} {s2:.2f}  {s1}")
print(f"\n{len(cands)} candidates: {blocked} BLOCK, {checked} CHECK, {len(cands)-blocked-checked} clear")
print("Lexical screen only. It cannot see semantic overlap, so anything that clears here")
print("still needs a GSC query check against the pages it would compete with.")
if blocked:
    sys.exit(1)
