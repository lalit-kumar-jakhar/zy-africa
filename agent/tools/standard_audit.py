import argparse
import glob
import json
import os
import re
import sys
import urllib.request

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "../../zyneto-frontend")
BASE = "http://localhost:3000"
SRC = os.path.join(ROOT, "src")

SECTIONS = {
    "industries": {"data": "src/data/industries", "route": "/industries/"},
    "case-studies": {"data": "src/data/case-studies", "route": "/case-studies/"},
}


def fetch(path):
    req = urllib.request.Request(BASE + path, headers={"User-Agent": "std-audit"})
    with urllib.request.urlopen(req, timeout=300) as r:
        return r.read().decode("utf-8", "replace")


def text_of(html):
    b = re.sub(r"<script\b.*?</script>", " ", html, flags=re.S | re.I)
    b = re.sub(r"<style\b.*?</style>", " ", b, flags=re.S | re.I)
    b = re.sub(r"<[^>]+>", " ", b)
    b = b.replace("&nbsp;", " ").replace("&amp;", "&").replace("&#x27;", "'").replace("&quot;", '"')
    return re.sub(r"\s+", " ", b).strip()


def tags(html, t):
    return [text_of(m) for m in re.findall(rf"<{t}[^>]*>(.*?)</{t}>", html, re.S | re.I)]


def phrase(text, p):
    return len(re.findall(r"\b" + r"\W+".join(re.escape(w) for w in p.lower().split()) + r"\b", text.lower()))


def ld_types(html):
    out = {}
    for m in re.finditer(r'<script type="application/ld\+json"[^>]*>(.*?)</script>', html, re.S):
        try:
            j = json.loads(m.group(1))
        except Exception:
            continue
        if isinstance(j, dict) and j.get("@type"):
            out[j["@type"]] = j
    return out


def inbound(url_path, self_file):
    n, srcs = 0, []
    for f in glob.glob(os.path.join(SRC, "**", "*.ts*"), recursive=True):
        if os.path.abspath(f) == os.path.abspath(self_file):
            continue
        if "categories.ts" in f:
            continue
        s = open(f, encoding="utf-8", errors="replace").read()
        c = len(re.findall(rf'href[=:]\s*"?\{{?`?{re.escape(url_path)}"', s))
        if c:
            n += c
            srcs.append(os.path.basename(f))
    return n, srcs


def openers(data_file):
    s = open(data_file, encoding="utf-8", errors="replace").read()
    got = []
    for m in re.finditer(r'\n  description:\s*\n?\s*"([^"]{20,})"', s):
        got.append(len(m.group(1).split()))
    for m in re.finditer(r'export const \w+ = \{\s*\n\s*title: "[^"]+",\s*\n\s*description:\s*\n?\s*"([^"]+)"', s, re.S):
        got.append(len(m.group(1).split()))
    return got


def audit(slug, cfg, data_file):
    url_path = cfg["route"] + slug
    html = fetch(url_path)
    txt = text_of(html)
    if len(txt.split()) < 300:
        return {"slug": slug, "fatal": f"only {len(txt.split())} words rendered"}

    src = open(data_file, encoding="utf-8", errors="replace").read()
    pk = re.search(r'primaryKeyword:\s*"([^"]+)"', src)
    sk = re.search(r"secondaryKeywords:\s*\[(.*?)\]", src, re.S)
    intent = re.search(r'intent:\s*"([^"]+)"', src)

    title = text_of((re.search(r"<title>(.*?)</title>", html, re.S) or ["", ""])[1]) if re.search(r"<title>(.*?)</title>", html, re.S) else ""
    desc = (re.search(r'<meta name="description" content="(.*?)"', html, re.S) or ["", ""])[1]
    h1 = tags(html, "h1")
    h2 = tags(html, "h2")
    lead = " ".join(txt.split()[:100])
    types = ld_types(html)
    ops = openers(data_file)
    inb, isrc = inbound(url_path, data_file)

    f = []
    if not pk:
        f.append("1. no seo block / no primaryKeyword")
    else:
        p = pk.group(1)
        if not intent:
            f.append("1. seo block has no intent")
        elif intent.group(1) not in ("commercial", "transactional"):
            f.append(f"2. intent is {intent.group(1)}, not a click-earning class")
        for label, ok in (("url", all(w in url_path for w in [w for w in p.lower().split() if w not in {"and","custom","operations"}])),
                          ("title", phrase(title, p) > 0),
                          ("h1", any(phrase(x, p) for x in h1)),
                          ("meta description", phrase(desc, p) > 0),
                          ("an h2", any(phrase(x, p) for x in h2)),
                          ("first 100 words", phrase(lead, p) > 0)):
            if not ok:
                f.append(f"3. primary missing from {label}")
        if sk:
            for k in re.findall(r'"([^"]+)"', sk.group(1)):
                if phrase(txt, k) == 0:
                    f.append(f"4. secondary absent: {k!r}")

    if len(h1) != 1:
        f.append(f"   {len(h1)} h1 tags")
    if "FAQPage" not in types:
        f.append("11. no FAQPage schema")
    ARTICLE = ("WebPage", "Article", "TechArticle", "BlogPosting",
               "NewsArticle", "ScholarlyArticle", "CollectionPage", "ItemPage")
    wp = next((types[t] for t in ARTICLE if t in types), None)
    if not wp:
        f.append("11. no page-type schema (WebPage/Article)")
    else:
        if not wp.get("author"):
            f.append("12. page schema has no author")
        if not (wp.get("dateModified") or wp.get("datePublished")):
            f.append("13. page schema has no dates")
    if inb < 3:
        f.append(f"15. only {inb} in-content inbound link(s), standard asks 3")

    inband = sum(1 for w in ops if 40 <= w <= 60)
    return {"slug": slug, "fails": f, "words": len(txt.split()), "h2": len(h2),
            "openers": len(ops), "inband": inband, "inbound": inb, "inboundFrom": isrc,
            "schemas": sorted(types)}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--section", required=True, choices=sorted(SECTIONS))
    a = ap.parse_args()
    cfg = SECTIONS[a.section]
    files = sorted(f for f in glob.glob(os.path.join(ROOT, cfg["data"], "*.ts"))
                   if os.path.basename(f) not in ("types.ts", "index.ts"))
    if not files:
        sys.exit(f"ABORT: no data files under {cfg['data']}")

    total = 0
    for df in files:
        slug = os.path.basename(df)[:-3]
        m = re.search(r'slug:\s*"([^"]+)"', open(df, encoding="utf-8", errors="replace").read())
        if m:
            slug = m.group(1)
        r = audit(slug, cfg, df)
        if r.get("fatal"):
            print(f"  FATAL {slug}: {r['fatal']}")
            total += 1
            continue
        mark = "FAIL" if r["fails"] else "ok"
        print(f"  [{mark:4}] {slug:44} {r['words']:5}w  h2={r['h2']:2}  "
              f"openers {r['inband']}/{r['openers']} in band  inbound={r['inbound']}")
        for x in r["fails"]:
            print(f"           - {x}")
        total += len(r["fails"])
    print(f"\n{len(files)} page(s), {total} issue(s) against the standard")


main()
