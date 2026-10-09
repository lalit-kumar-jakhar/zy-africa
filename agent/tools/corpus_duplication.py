import os as _os
_MISSING = "set BLOG_MANAGE_API_KEY in the environment, see agent/SETUP.md"
"""Find text we have reused across our own posts.

`similarity.py` compares one post against EXTERNAL urls. `plagiarism_probes.py`
samples sentences to search for elsewhere. Nothing compared the corpus against
itself, which is how five scheduled posts shipped with an identical closing line
and how that line also ended up matching our own live chat-with-your-documents.
Originality caught it; we should have caught it first.

Two checks:

  collisions  a sentence of MIN_WORDS or more appearing verbatim in 2+ posts
  passages    the longest shared run of words between any pair, via 8-grams,
              which catches near-identical paragraphs that differ by a word

A repeated whole sentence is always a failure, with no exemption. ALLOWED holds
stems we accept repeating, such as the CTA opener, and only suppresses the
passage check. The rule that follows is the one we actually want: the stem may
repeat across posts, the finished sentence may not. Exempting the sentence too
would have hidden the very defect this tool was written to catch.

The whole corpus arrives in 5 paginated calls, not 118 individual ones. Fetching
per slug took over two minutes and timed out.

  python3 corpus_duplication.py
  python3 corpus_duplication.py --refresh          re-fetch instead of using cache
  python3 corpus_duplication.py --include-local    also read Blog/*.md
"""
import html as htmllib
import json
import os
import re
import sys
import urllib.error
import urllib.request
from collections import defaultdict
from zy_paths import zy

API = "https://api.zyneto.com"
KEY = _os.environ.get("BLOG_MANAGE_API_KEY", _MISSING)
BLOG = zy("Blog")
CACHE = os.path.join(BLOG, "data", "corpus-cache.json")

K = 8
MIN_WORDS = 8
PASSAGE_AT = 12

# Deliberate house repetition. Everything here still gets reported, but as a
# note rather than a failure.
ALLOWED = [
    "book a free consultation and we will",
]

# Markdown in Blog/ that is project documentation rather than a draft post.
NOT_CONTENT = {"LEDGER", "README", "STATIC-PAGES-LEDGER"}


def visible_text(raw):
    h = re.sub(r"<(script|style)\b.*?</\1>", " ", raw, flags=re.S | re.I)
    h = re.sub(r"<[^>]+>", " ", h)
    return re.sub(r"\s+", " ", htmllib.unescape(h)).strip()


def norm(s):
    return " ".join(re.findall(r"[a-z0-9']+", s.lower()))


def allowed(s):
    n = norm(s)
    return any(a in n for a in ALLOWED)


def sentences(text):
    return [s.strip() for s in re.split(r"(?<=[.!?])\s+", text) if s.strip()]


def fetch_corpus():
    posts, url = [], "/api/v1/manage/posts/"
    while url:
        req = urllib.request.Request(
            url if url.startswith("http") else API + url, headers={"X-API-Key": KEY})
        with urllib.request.urlopen(req, timeout=120) as r:
            page = json.load(r)
        posts += page["results"]
        url = page.get("next")
    return [{"slug": p["slug"], "status": p.get("status"),
             "text": visible_text(p.get("description") or "")} for p in posts]


def load_corpus(refresh):
    if not refresh and os.path.exists(CACHE):
        return json.load(open(CACHE))
    docs = fetch_corpus()
    os.makedirs(os.path.dirname(CACHE), exist_ok=True)
    json.dump(docs, open(CACHE, "w"))
    return docs


def local_docs(known):
    """Local markdown for drafts not yet pushed. A file whose slug is already
    on the API is the same document, and comparing it to itself would report
    every sentence in it as duplicated.

    NOT_CONTENT matters more than it looks. These ledgers quote post sentences
    verbatim to record what was written, so reading them as posts invents
    shared passages against the very posts they describe, and every edit to a
    ledger changes the corpus word count."""
    out, skipped, docs_files = [], [], []
    for f in sorted(os.listdir(BLOG)):
        if not f.endswith(".md"):
            continue
        slug = f[:-3]
        if slug in NOT_CONTENT:
            docs_files.append(slug)
            continue
        if slug in known:
            skipped.append(slug)
            continue
        raw = open(os.path.join(BLOG, f), encoding="utf-8").read()
        body = re.sub(r"^---.*?---", " ", raw, count=1, flags=re.S)
        body = re.sub(r"```.*?```", " ", body, flags=re.S)
        body = re.sub(r"[#*`>\[\]|_]", " ", body)
        out.append({"slug": slug + " (local md)", "status": "local",
                    "text": re.sub(r"\s+", " ", body).strip()})
    if skipped:
        print(f"  skipped {len(skipped)} local file(s) already on the API: "
              f"{', '.join(skipped)}")
    if docs_files:
        print(f"  skipped {len(docs_files)} project doc(s), not content: "
              f"{', '.join(docs_files)}")
    print()
    return out


def find_collisions(docs):
    where = defaultdict(set)
    original = {}
    for d in docs:
        for s in sentences(d["text"]):
            n = norm(s)
            if len(n.split()) < MIN_WORDS:
                continue
            where[n].add(d["slug"])
            original.setdefault(n, s)
    hits = [(sorted(v), original[k]) for k, v in where.items() if len(v) > 1]
    return sorted(hits, key=lambda h: (-len(h[0]), h[1]))


def find_passages(docs):
    """Inverted index over 8-grams. O(total shingles), not O(pairs)."""
    index = defaultdict(set)
    words = {}
    for d in docs:
        w = norm(d["text"]).split()
        words[d["slug"]] = w
        for i in range(len(w) - K + 1):
            index[" ".join(w[i:i + K])].add(d["slug"])

    shared = {g: sl for g, sl in index.items() if len(sl) > 1}
    runs = defaultdict(list)
    for slug, w in words.items():
        run = []
        for i in range(len(w) - K + 1):
            g = " ".join(w[i:i + K])
            partners = shared.get(g, set()) - {slug}
            if partners:
                run.append((i, frozenset(partners)))
            else:
                if run:
                    _emit(runs, slug, w, run)
                run = []
        if run:
            _emit(runs, slug, w, run)

    out = []
    for (a, b), passages in runs.items():
        best = max(passages, key=lambda p: len(p.split()))
        if len(best.split()) >= PASSAGE_AT:
            out.append((a, b, best))
    seen, dedup = set(), []
    for a, b, p in sorted(out, key=lambda x: -len(x[2].split())):
        key = tuple(sorted((a, b)))
        if key in seen:
            continue
        seen.add(key)
        dedup.append((a, b, p))
    return dedup


def _emit(runs, slug, w, run):
    text = " ".join(w[run[0][0]:run[-1][0] + K])
    for partner in set().union(*(p for _, p in run)):
        runs[tuple(sorted((slug, partner)))].append(text)


def self_test():
    """A clean result is only worth reading if the detector can fail. This
    plants the exact defect the tool exists for and checks it comes back."""
    shared = ("Book a free consultation and we will scope it with you. "
              "The handoff carries the whole conversation so nobody starts again.")
    docs = [
        {"slug": "planted-a", "status": "test",
         "text": "Alpha filler runs ahead of the shared part here. " * 12 + shared},
        {"slug": "planted-b", "status": "test",
         "text": "Beta padding sits before the shared part instead. " * 12 + shared},
        {"slug": "unrelated", "status": "test",
         "text": "The warehouse dispatch queue reorders picks by delivery window "
                 "and van capacity, then prints a pick list. " * 6},
    ]
    ok = True
    hits = find_collisions(docs)
    caught = {tuple(h[0]) for h in hits}
    a = ("planted-a", "planted-b") in caught
    print(f"  plants a duplicate sentence   {'ok' if a else 'BROKEN'}")
    ok &= a

    b = not any("unrelated" in h[0] for h in hits)
    print(f"  leaves the odd one out alone  {'ok' if b else 'BROKEN'}")
    ok &= b

    pas = find_passages(docs)
    c = any({x[0], x[1]} == {"planted-a", "planted-b"} for x in pas)
    print(f"  finds the shared passage      {'ok' if c else 'BROKEN'}")
    ok &= c

    d = any(norm("scope it with you") in norm(h[1]) for h in hits)
    print(f"  no exemption for the CTA line {'ok' if d else 'BROKEN'}")
    ok &= d
    return ok


if __name__ == "__main__":
    if "--self-test" in sys.argv:
        print("self-test")
        sys.exit(0 if self_test() else 1)

    docs = load_corpus("--refresh" in sys.argv)
    if "--include-local" in sys.argv:
        docs += local_docs({d["slug"] for d in docs})
    docs = [d for d in docs if len(d["text"].split()) > 50]
    print(f"{len(docs)} documents, "
          f"{sum(len(d['text'].split()) for d in docs):,} words\n")

    real = find_collisions(docs)
    status = {d["slug"]: d.get("status") for d in docs}

    print(f"repeated sentences ({MIN_WORDS}+ words): {len(real)}")
    for slugs, text in real:
        print(f'\n  x{len(slugs)}  "{text[:104]}"')
        for s in slugs:
            print(f"        {status.get(s, '?'):10s} {s}")

    passages = find_passages(docs)
    flagged = [p for p in passages if not allowed(p[2])]
    print(f"\n\nshared passages ({PASSAGE_AT}+ words, excluding allowed): {len(flagged)}")
    for a, b, text in flagged[:25]:
        print(f'\n  {len(text.split()):>3}w  {a}\n       {b}\n       "{text[:150]}"')
    if len(flagged) > 25:
        print(f"\n  ... and {len(flagged) - 25} more")

    print(f"\n\n  {len(real)} repeated sentences, {len(flagged)} shared passages")
    sys.exit(1 if real or flagged else 0)
