"""Mine the corpus for n-grams that actually recur in linkable prose.

Writing anchor phrases from post titles produced 1.4 links per post, because
titles are marketing copy and body prose is conversational. This inverts the
process: find the phrases that genuinely repeat across posts, then map those to
targets. A phrase that appears in 30 posts is 30 linking opportunities; a
phrase invented from a title may appear nowhere.
"""
import json
import re
import sys
import os
from collections import Counter, defaultdict

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from propose_links import text_spans  # noqa: E402
from zy_paths import zy

BODIES = zy("Blog/reports/bodies.json")

STOP = set("""a an the and or but if then than that this these those of in on at to for
with by from as is are was were be been being it its it's you your we our they their
he she his her i me my us them there here what when where which who whom how why can
could will would should may might must do does did done have has had not no yes so
very more most much many few some any all each every other another such own same
into over under again further once about against between through during before after
above below up down out off only just also both because while until although
one two three four five first second next last new also get got make made take
like need want know see look use used using way ways thing things time times
lot lots even still back well good great best better top help helps let lets
per via etc vs</""".split())

BAD_EDGE = STOP | {"apps", "app"}


def ngrams(words, n):
    for i in range(len(words) - n + 1):
        g = words[i:i + n]
        if g[0] in STOP or g[-1] in STOP:
            continue
        if any(len(w) < 2 for w in g):
            continue
        yield " ".join(g)


def main():
    bodies = json.load(open(BODIES))
    doc_freq = Counter()          # in how many posts does the phrase appear
    total_freq = Counter()
    where = defaultdict(set)

    for slug, html in bodies.items():
        spans = text_spans(html)
        txt = " ".join(html[s:e] for s, e, _ in spans)
        txt = re.sub(r"<[^>]+>", " ", txt)
        txt = txt.replace("’", "'").lower()
        words = re.findall(r"[a-z][a-z0-9.+#-]*", txt)
        seen = set()
        for n in (2, 3, 4):
            for g in ngrams(words, n):
                total_freq[g] += 1
                seen.add(g)
        for g in seen:
            doc_freq[g] += 1
            where[g].add(slug)

    # A useful anchor phrase appears in several DIFFERENT posts (so it creates
    # links) but is not so universal that it is meaningless.
    cands = [(g, doc_freq[g], total_freq[g]) for g in doc_freq
             if 3 <= doc_freq[g] <= 55 and len(g.split()) >= 2]
    cands.sort(key=lambda x: -x[1])

    out = zy("Blog/reports/phrase-candidates.txt")
    with open(out, "w") as f:
        for g, df, tf in cands:
            f.write(f"{df:4} {tf:5}  {g}\n")
    print(f"{len(cands)} candidate phrases -> {out}\n")
    print("top 120 by document frequency:")
    for g, df, tf in cands[:120]:
        print(f"  {df:3} posts {tf:5}x  {g}")


if __name__ == "__main__":
    sys.exit(main())
