import os as _os
_MISSING = "set BLOG_MANAGE_API_KEY in the environment, see agent/SETUP.md"
"""Pick the sentences worth searching to spot-check an article for plagiarism.

The check itself is still a quoted web search per sentence, because there is no
Copyscape or Originality key wired up. What this removes is the ad hoc part:
which sentences get sampled, and whether the sample actually covers the piece.

A good probe is ordinary explanatory prose that would show up verbatim if it had
been lifted. Three kinds of sentence look distinctive and are useless:

* anything naming Zyneto or a client, which can only ever match our own site
* our own arithmetic and figures, which nobody else has written
* vendor and standard lists, which match every vendor page on the web

Usage:
    python3 plagiarism_probes.py Blog/some-draft.md
    python3 plagiarism_probes.py --slug ai-memory
    python3 plagiarism_probes.py zyneto-frontend/src/data/industries/saas-platform-development.ts
"""
import argparse
import json
import os
import re
import sys
import urllib.request
from zy_paths import ZY_ROOT

ROOT = ZY_ROOT
FRONTEND = os.path.join(ROOT, "zyneto-frontend")
API = "https://api.zyneto.com/api/v1"
KEY = _os.environ.get("BLOG_MANAGE_API_KEY", _MISSING)

STOP = set("""a an the and or but if then than that this these those of in on at to for with by from as is
are was were be been being it its it's we our us you your they their he she his her not no nor so such
have has had do does did can could will would shall should may might must about into over under between
after before during while when where which who whom whose what how why all any both each few more most
other some only own same too very just also there here into up down out off again further once because
until against among throughout despite towards upon""".split())

DEFINITIONAL = re.compile(
    r"^\s*(?:the\s+)?[A-Z][\w'-]*(?:\s+[\w'-]+){0,3}\s+(?:is|are|refers to|means|stands for|can be defined)\b",
    re.I)


def brand_names():
    names = {"Zyneto"}
    for rel in ["src/data/portfolio.ts", "src/data/testimonials.ts"]:
        p = os.path.join(FRONTEND, rel)
        if not os.path.exists(p):
            continue
        t = open(p, encoding="utf-8").read()
        names |= set(re.findall(r'(?:title|company|client):\s*"([^":]+)', t))
    d = os.path.join(FRONTEND, "src/data/industries")
    if os.path.isdir(d):
        for f in os.listdir(d):
            t = open(os.path.join(d, f), encoding="utf-8").read()
            names |= set(re.findall(r'client: "([^"]+)"', t))
    out = set()
    for n in names:
        n = n.strip()
        if 2 < len(n) < 40:
            out.add(n)
            out.add(n.split("(")[0].strip())
    return {n for n in out if n}


def fetch_slug(slug):
    req = urllib.request.Request(f"{API}/manage/posts/{slug}/", headers={"X-API-Key": KEY})
    return json.loads(urllib.request.urlopen(req, timeout=60).read().decode()).get("description", "")


def sections_from_html(html):
    parts = re.split(r"<h[23]\b[^>]*>(.*?)</h[23]>", html, flags=re.S)
    out = []
    if parts and parts[0].strip():
        out.append(("Introduction", parts[0]))
    for i in range(1, len(parts) - 1, 2):
        head = re.sub(r"<[^>]+>", "", parts[i]).strip()
        body = re.sub(r"<(table|ul|ol|figure)\b.*?</\1>", " ", parts[i + 1], flags=re.S)
        out.append((head, body))
    return [(h, re.sub(r"<[^>]+>", " ", b)) for h, b in out]


def sections_from_md(text):
    m = re.search(r"^## 6\. Complete Article.*?$", text, re.M)
    if m:
        nxt = re.search(r"^## 7\.", text[m.end():], re.M)
        text = text[m.end():m.end() + nxt.start()] if nxt else text[m.end():]
    text = re.sub(r"^\s*\|.*$", "", text, flags=re.M)
    text = re.sub(r"^\s*[-*+]\s+.*$", "", text, flags=re.M)
    text = re.sub(r"\*\*\[VISUAL \d+:[^\]]*\]\*\*", " ", text)
    parts = re.split(r"^#{2,4}\s+(.+)$", text, flags=re.M)
    out = []
    if parts and parts[0].strip():
        out.append(("Introduction", parts[0]))
    for i in range(1, len(parts) - 1, 2):
        out.append((parts[i].strip(), parts[i + 1]))
    return [(h, re.sub(r"[#*`>\[\]]", " ", b)) for h, b in out]


def sections_from_ts(text):
    text = re.sub(r"^import .*?$", "", text, flags=re.M)
    out = []
    marks = list(re.finditer(r"^(?:export )?const (\w+)\s*[:=]", text, re.M))
    for i, m in enumerate(marks):
        end = marks[i + 1].start() if i + 1 < len(marks) else len(text)
        blk = text[m.end():end]
        prose = " ".join(s.replace('\\"', '"')
                         for s in re.findall(r'"((?:[^"\\]|\\.){40,})"', blk))
        if prose:
            out.append((m.group(1), prose))
    if not out:
        prose = " ".join(s.replace('\\"', '"')
                         for s in re.findall(r'"((?:[^"\\]|\\.){40,})"', text))
        if prose:
            out.append(("page copy", prose))
    return out


def split_sentences(body):
    body = re.sub(r"\s+", " ", body)
    return [s.strip() for s in re.split(r"(?<=[.?!])\s+", body)]


def usable(s, brands):
    w = s.split()
    if not (10 <= len(w) <= 26):
        return False
    if s.endswith("?"):
        return False
    if any(b.lower() in s.lower() for b in brands):
        return False
    if DEFINITIONAL.match(s):
        return False
    digits = sum(1 for x in w if any(c.isdigit() for c in x))
    if digits > 1:
        return False
    caps = sum(1 for x in w[1:] if x[:1].isupper())
    if caps / len(w) > 0.30:
        return False
    content = [x for x in w if x.lower().strip(".,;:()") not in STOP]
    return len(content) >= 5


def score(s):
    w = [x.lower().strip(".,;:()\"'") for x in s.split()]
    content = [x for x in w if x not in STOP and x]
    longish = sum(1 for x in content if len(x) >= 9)
    caps = sum(1 for x in s.split()[1:] if x[:1].isupper())
    ideal = 1.0 - abs(len(w) - 17) / 20.0
    return len(content) + 2 * longish - 3 * caps + 4 * ideal


def probes(secs, want, brands):
    ranked = []
    for head, body in secs:
        best = None
        for s in split_sentences(body):
            if not usable(s, brands):
                continue
            sc = score(s)
            if best is None or sc > best[0]:
                best = (sc, head, s)
        if best:
            ranked.append(best)
    ranked.sort(key=lambda x: -x[0])
    return ranked[:want]


def load(target):
    if target.endswith(".html") or "<p" in target[:200]:
        return sections_from_html(open(target, encoding="utf-8").read())
    if target.endswith((".ts", ".tsx")):
        return sections_from_ts(open(target, encoding="utf-8").read())
    return sections_from_md(open(target, encoding="utf-8").read())


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("file", nargs="?")
    ap.add_argument("--slug", help="pull the live body from the CMS instead of a file")
    ap.add_argument("--count", type=int, default=10)
    ap.add_argument("--json", action="store_true")
    a = ap.parse_args()

    if a.slug:
        secs = sections_from_html(fetch_slug(a.slug))
        label = a.slug
    elif a.file:
        secs = load(a.file)
        label = os.path.basename(a.file)
    else:
        ap.error("give a file or --slug")

    brands = brand_names()
    picked = probes(secs, a.count, brands)

    if a.json:
        print(json.dumps([{"section": h, "sentence": s} for _, h, s in picked], indent=2))
        sys.exit(0)

    print(f"{label}: {len(secs)} sections, {len(picked)} probes "
          f"(excluding {len(brands)} brand and client names)\n")
    if len(picked) < min(8, len(secs)):
        print(f"  NOTE: only {len(picked)} usable probes found. Sections with no probe are "
              f"list-heavy, figure-heavy or name our own clients.\n")
    for i, (_, head, s) in enumerate(picked, 1):
        print(f'{i:>2}. [{head[:44]}]')
        print(f'    "{s}"\n')
    print("Search each in quotes. Any exact hit on a domain that is not zyneto.com "
          "is a real finding; anything else is noise.")
