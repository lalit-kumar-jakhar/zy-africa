import argparse
import glob
import json
import os
import re
import sys
import urllib.request

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "../../zyneto-frontend")
DATA = os.path.join(ROOT, "src/data/industries")
BASE = "http://localhost:3000"

MIN_DENSITY = 0.5
MAX_DENSITY = 2.5
LEAD_WORDS = 100


def seo_block(slug):
    src = open(os.path.join(DATA, f"{slug}.ts"), encoding="utf-8", errors="replace").read()
    m = re.search(r"export const seo = \{(.*?)\} as const;", src, re.S)
    if not m:
        return None
    b = m.group(1)
    pk = re.search(r'primaryKeyword:\s*"([^"]+)"', b)
    sk = re.search(r"secondaryKeywords:\s*\[(.*?)\]", b, re.S)
    if not pk:
        return None
    return {"primary": pk.group(1),
            "secondary": re.findall(r'"([^"]+)"', sk.group(1)) if sk else []}


def fetch(path):
    req = urllib.request.Request(BASE + path, headers={"User-Agent": "kw-audit"})
    with urllib.request.urlopen(req, timeout=240) as r:
        return r.read().decode("utf-8", "replace")


def visible_text(html):
    body = re.sub(r"<script\b.*?</script>", " ", html, flags=re.S | re.I)
    body = re.sub(r"<style\b.*?</style>", " ", body, flags=re.S | re.I)
    body = re.sub(r"<!--.*?-->", " ", body, flags=re.S)
    body = re.sub(r"<[^>]+>", " ", body)
    body = (body.replace("&nbsp;", " ").replace("&amp;", "&").replace("&#x27;", "'")
                .replace("&quot;", '"').replace("&lt;", "<").replace("&gt;", ">"))
    return re.sub(r"\s+", " ", body).strip()


def count_phrase(text, phrase):
    pat = r"\b" + r"\W+".join(re.escape(w) for w in phrase.lower().split()) + r"\b"
    return len(re.findall(pat, text.lower()))


def tag_text(html, tag):
    return [visible_text(m) for m in re.findall(rf"<{tag}[^>]*>(.*?)</{tag}>", html, re.S | re.I)]


def audit(slug, url_path):
    seo = seo_block(slug)
    if not seo:
        return {"slug": slug, "fatal": "no seo block"}
    html = fetch(url_path)
    text = visible_text(html)
    words = len(text.split())
    if words < 400:
        return {"slug": slug, "fatal": f"only {words} words rendered; page did not load"}

    primary = seo["primary"]
    n = count_phrase(text, primary)
    density = n * len(primary.split()) / words * 100

    title = (re.search(r"<title>(.*?)</title>", html, re.S) or [None, ""])[1] if re.search(r"<title>(.*?)</title>", html, re.S) else ""
    title = visible_text(title)
    desc_m = re.search(r'<meta name="description" content="(.*?)"', html, re.S)
    desc = desc_m.group(1) if desc_m else ""
    h1s = tag_text(html, "h1")
    h2s = tag_text(html, "h2")
    lead = " ".join(text.split()[:LEAD_WORDS])

    placement = {
        "url": all(w in url_path for w in [w for w in primary.lower().split() if w not in {"and", "custom", "operations"}]),
        "title": count_phrase(title, primary) > 0,
        "h1": any(count_phrase(h, primary) > 0 for h in h1s),
        "meta_description": count_phrase(desc, primary) > 0,
        "first_100_words": count_phrase(lead, primary) > 0,
        "any_h2": any(count_phrase(h, primary) > 0 for h in h2s),
    }
    secondary = {s: count_phrase(text, s) for s in seo["secondary"]}

    return {"slug": slug, "primary": primary, "count": n, "words": words,
            "density": round(density, 2), "placement": placement,
            "secondary": secondary, "h1_count": len(h1s), "h2_count": len(h2s)}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--json", action="store_true")
    a = ap.parse_args()

    slugs = sorted(os.path.basename(f)[:-3] for f in glob.glob(os.path.join(DATA, "*.ts"))
                   if not f.endswith("types.ts"))
    if not slugs:
        sys.exit("ABORT: no industry data files resolved.")

    rows, fails = [], 0
    for s in slugs:
        r = audit(s, f"/industries/{s}")
        rows.append(r)
        if r.get("fatal"):
            print(f"  FATAL {s}: {r['fatal']}")
            fails += 1
            continue

        flags = []
        if r["density"] < MIN_DENSITY:
            flags.append(f"density {r['density']}% < {MIN_DENSITY}%")
        if r["density"] > MAX_DENSITY:
            flags.append(f"density {r['density']}% > {MAX_DENSITY}% (stuffing risk)")
        for k, ok in r["placement"].items():
            if not ok:
                flags.append(f"primary missing from {k}")
        for k, c in r["secondary"].items():
            if c == 0:
                flags.append(f"secondary absent: {k!r}")
        if r["h1_count"] != 1:
            flags.append(f"{r['h1_count']} h1 tags")

        mark = "FAIL" if flags else "ok"
        print(f"  [{mark:4}] {s:44} {r['count']:3}x  {r['density']:5.2f}%  {r['words']:5} words")
        for f in flags:
            print(f"           - {f}")
        fails += len(flags)

    good = [r for r in rows if not r.get("fatal")]
    if good:
        ds = sorted(r["density"] for r in good)
        print(f"\n{len(good)} pages audited, density {ds[0]:.2f}% to {ds[-1]:.2f}%, "
              f"median {ds[len(ds)//2]:.2f}%")
    print(f"{fails} issue(s)")
    if a.json:
        json.dump(rows, open("/tmp/kw.json", "w"), indent=2)


main()
