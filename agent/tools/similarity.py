"""Measure how much of our text actually appears on a candidate source page.

`plagiarism_probes.py` samples sentences for exact-string searching, which finds
verbatim lifting and nothing else. Measured 2026-08-11: a light paraphrase, the
most common real case, scores 0.000 on exact match and 0.333 on 4-gram overlap.
This closes that gap.

The metric is CONTAINMENT, not Jaccard. Containment asks what share of OUR
shingles appear in THEIR page, which is the question that matters and is not
distorted when the two documents are wildly different lengths. Jaccard over a
2,700-word post against a 400-word page is low even on a straight copy.

k=4 is deliberate. Measured across a copy ladder: verbatim 1.000, light
paraphrase 0.333, heavy paraphrase 0.023, unrelated 0.000. k=5 drops a heavy
paraphrase to exactly 0.000 and k=3 separates by 0.044, a margin one coincidental
phrase erases. **A heavy rewrite still evades this.** Catching that needs
embeddings; say so rather than implying full coverage.

Searching is still manual, because there is no search API key. Generate probes,
search them, then pass the URLs here.

    python3 similarity.py --slug ai-memory --urls https://a.com/x https://b.com/y
    python3 similarity.py --slug ai-memory --self-test
"""
import argparse
import html as htmllib
import json
import os
import re
import sys
import urllib.error
import urllib.request

K = 4
REVIEW_AT = 0.10
COPY_AT = 0.25
UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/124 Safari/537.36")

BOILERPLATE = re.compile(
    r"<(script|style|nav|header|footer|aside|form|noscript)\b.*?</\1>", re.S | re.I)


def visible_text(raw_html):
    h = BOILERPLATE.sub(" ", raw_html)
    h = re.sub(r"<!--.*?-->", " ", h, flags=re.S)
    h = re.sub(r"<[^>]+>", " ", h)
    return re.sub(r"\s+", " ", htmllib.unescape(h)).strip()


def shingles(text, k=K):
    w = re.findall(r"[a-z0-9']+", text.lower())
    if len(w) < k:
        return set()
    return {" ".join(w[i:i + k]) for i in range(len(w) - k + 1)}


def containment(ours, theirs):
    """Share of our shingles present in theirs. 1.0 means fully contained."""
    A, B = shingles(ours), shingles(theirs)
    return (len(A & B) / len(A)) if A else 0.0


def matched_runs(ours, theirs, min_words=8):
    """The actual overlapping passages, so a number can be checked by eye."""
    B = shingles(theirs)
    w = re.findall(r"[a-z0-9']+", ours.lower())
    hits, run = [], []
    for i in range(max(0, len(w) - K + 1)):
        if " ".join(w[i:i + K]) in B:
            run.append(i)
        else:
            if len(run) + K - 1 >= min_words:
                hits.append(" ".join(w[run[0]:run[-1] + K]))
            run = []
    if len(run) + K - 1 >= min_words:
        hits.append(" ".join(w[run[0]:run[-1] + K]))
    return sorted(hits, key=len, reverse=True)


def fetch(url, timeout=30):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.read().decode("utf-8", errors="ignore")


def our_text(slug=None, path=None):
    if slug:
        sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
        from plagiarism_probes import fetch_slug
        return visible_text(fetch_slug(slug))
    raw = open(path, encoding="utf-8").read()
    if path.endswith((".ts", ".tsx")):
        return " ".join(s.replace('\\"', '"')
                        for s in re.findall(r'"((?:[^"\\]|\\.){40,})"', raw))
    return re.sub(r"\s+", " ", re.sub(r"[#*`>\[\]|]", " ", raw)).strip()


def verdict(c):
    return "COPY" if c >= COPY_AT else ("review" if c >= REVIEW_AT else "clean")


def self_test(ours, slug):
    """Positive and negative controls. A pipeline that cannot match a document
    to itself is broken, and a clean number from it would be meaningless."""
    print("self-test")
    c = containment(ours, ours)
    print(f"  identical text            {c:.3f}  {'ok' if c > 0.99 else 'BROKEN'}")
    half = " ".join(ours.split()[:len(ours.split()) // 2])
    c2 = containment(half, ours)
    print(f"  our first half in full    {c2:.3f}  {'ok' if c2 > 0.95 else 'BROKEN'}")
    c3 = containment(ours, "The warehouse dispatch queue reorders picks by delivery "
                           "window and van capacity, then prints a pick list.")
    print(f"  unrelated text            {c3:.3f}  {'ok' if c3 < 0.01 else 'BROKEN'}")
    try:
        live = visible_text(fetch(f"https://zyneto.com/blog/{slug}"))
        c4 = containment(ours, live)
        print(f"  our own live page         {c4:.3f}  "
              f"{'ok, fetch and extraction work' if c4 > 0.80 else 'check extraction'}")
    except Exception as e:
        print(f"  our own live page         could not fetch ({type(e).__name__}), "
              f"post may not be published yet")
    return c > 0.99 and c3 < 0.01


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--slug")
    ap.add_argument("--file")
    ap.add_argument("--urls", nargs="*", default=[])
    ap.add_argument("--urls-file")
    ap.add_argument("--self-test", action="store_true")
    ap.add_argument("--json", action="store_true")
    a = ap.parse_args()
    if not (a.slug or a.file):
        ap.error("give --slug or --file")

    ours = our_text(a.slug, a.file)
    name = a.slug or os.path.basename(a.file)
    words = len(ours.split())

    if a.self_test:
        sys.exit(0 if self_test(ours, a.slug or "") else 1)

    urls = list(a.urls)
    if a.urls_file:
        urls += [l.strip() for l in open(a.urls_file) if l.strip()
                 and not l.startswith("#")]
    if not urls:
        ap.error("give --urls or --urls-file. Generate candidates with "
                 "plagiarism_probes.py, search them, then pass the result URLs here.")

    print(f"{name}: {words} words, {len(shingles(ours))} shingles at k={K}, "
          f"{len(urls)} candidate source(s)\n")
    rows, worst = [], 0.0
    for u in urls:
        try:
            text = visible_text(fetch(u))
        except Exception as e:
            print(f"  {'fetch failed':<9} {u}  ({type(e).__name__})")
            continue
        c = containment(ours, text)
        worst = max(worst, c)
        rows.append({"url": u, "containment": round(c, 4), "their_words": len(text.split())})
        print(f"  {verdict(c):<9} {c * 100:5.1f}%  {u[:78]}")
        if c >= REVIEW_AT:
            for m in matched_runs(ours, text)[:3]:
                print(f'              matched: "{m[:110]}"')

    print(f"\n  highest containment: {worst * 100:.1f}%  ->  {verdict(worst)}")
    print(f"  thresholds: review at {REVIEW_AT * 100:.0f}%, copy at {COPY_AT * 100:.0f}%")
    print("  NOTE: 4-gram overlap catches verbatim and light paraphrase. A heavy "
          "rewrite scores near zero here and is NOT covered.")
    if a.json:
        print("\n" + json.dumps(rows, indent=2))
    sys.exit(1 if worst >= COPY_AT else 0)
