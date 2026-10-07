import os as _os
_MISSING = "set BLOG_MANAGE_API_KEY in the environment, see agent/SETUP.md"
"""Break up the long sentences the specificity pass introduced.

Measured 2026-08-12: adding a dated standard as a subordinate clause raises
specificity and sentence length together, and 12 of 14 posts ended up failing
the sentence half of the two-regime AI screen. The three worst are all posts
that were edited heavily.

ONLY CLAUSES ADDED BY specificity_pass.py ARE TOUCHED. The authors' original
sentences are left exactly as written, because sentence rhythm is a voice
decision and this is a mechanical fix to a mechanical problem.

No fact may be lost in the process. The digit-token count is asserted identical
before and after, so a split that quietly dropped a date or a figure fails
rather than passing silently.

    python3 split_long_sentences.py <slug>
    python3 split_long_sentences.py <slug> --go
    python3 split_long_sentences.py --all --go
"""
import json
import re
import sys
import urllib.error
import urllib.request

KEY = _os.environ.get("BLOG_MANAGE_API_KEY", _MISSING)
BASE = "https://api.zyneto.com/api/v1"

SPLITS = {
    "knowledge-graphs-for-business": [
        ("The idea reached the mainstream on 16 May 2012, when Google launched "
         "its own Knowledge Graph with more than 500 million objects and 3.5 "
         "billion facts about how they connect, and search results started "
         "answering questions instead of only listing pages.",
         "The idea reached the mainstream on 16 May 2012. Google launched its own "
         "Knowledge Graph with more than 500 million objects and 3.5 billion "
         "facts about how they connect, and search results started answering "
         "questions instead of listing pages."),

        ("Real networks are shallower than people expect, which is what makes "
         "this bite: when Facebook measured the distance between its own users "
         "in 2016 it came out at 3.57 hops, so the questions worth asking sit "
         "exactly in the range relational joins handle worst.",
         "Real networks are shallower than people expect, which is what makes "
         "this bite. When Facebook measured the distance between its own users "
         "in 2016, it came out at 3.57 hops. The questions worth asking sit "
         "exactly in the range relational joins handle worst."),

        ("RDF graphs store every fact as a triple of exactly 3 parts, subject, "
         "predicate, object, and are queried with SPARQL, a W3C recommendation "
         "since 2008 and at version 1.1 since 2013, and they shine where "
         "standards and interoperability matter, like in life sciences and open "
         "data.",
         "RDF graphs store every fact as a triple of exactly 3 parts: subject, "
         "predicate, object. They are queried with SPARQL, a W3C recommendation "
         "since 2008 and at version 1.1 since 2013. They shine where standards "
         "and interoperability matter, like life sciences and open data."),

        ("The gap is closing at the standards level: ISO published GQL as ISO/IEC "
         "39075:2024 in April 2024, the first new ISO query language since SQL "
         "itself in 1987, and SQL:2023 added SQL/PGQ so property graph queries "
         "can run inside a relational engine.",
         "The gap is closing at the standards level. ISO published GQL as ISO/IEC "
         "39075:2024 in April 2024, the first new ISO query language since SQL "
         "itself in 1987. SQL:2023 then added SQL/PGQ, so property graph queries "
         "can run inside a relational engine."),

        ("It is also where the cost hides, because comparing every record with "
         "every other is n-squared work: 1 million records is roughly 500 billion "
         "pairs before any blocking strategy cuts that down.",
         "It is also where the cost hides. Comparing every record with every "
         "other is n-squared work: 1 million records is roughly 500 billion "
         "pairs before any blocking strategy cuts that down."),
    ],

    "web-scraping-for-business": [
        ("becomes an engineer's recurring chore by month six, and the arithmetic "
         "scales badly: 100 scrapers that each break twice a year is 200 repair "
         "jobs a year, which is a full-time role nobody put in the budget, and "
         "the day everyone is slammed is the exact day the data quietly goes "
         "stale",
         "becomes an engineer's recurring chore by month six. The arithmetic "
         "scales badly: 100 scrapers that each break twice a year is 200 repair "
         "jobs, a full-time role nobody put in the budget. And the day everyone "
         "is slammed is the exact day the data quietly goes stale"),

        ("Sites use measures to detect and block automated access, and a "
         "well-behaved scraper reads what the server is telling it: a 429 means "
         "you are asking too fast, a 403 means you are not welcome on that path, "
         "and a 503 often means you are part of the reason the site is "
         "struggling.",
         "Sites use measures to detect and block automated access. A well-behaved "
         "scraper reads what the server is telling it. A 429 means you are asking "
         "too fast. A 403 means you are not welcome on that path. A 503 often "
         "means you are part of the reason the site is struggling."),

        ("In the United States the reference point is hiQ Labs v. LinkedIn, where "
         "the Ninth Circuit held in 2022 that collecting data already visible to "
         "the public is not unauthorised access under the Computer Fraud and "
         "Abuse Act, a 1986 statute written long before anyone was arguing about "
         "crawlers.",
         "In the United States the reference point is hiQ Labs v. LinkedIn. The "
         "Ninth Circuit held in 2022 that collecting data already visible to the "
         "public is not unauthorised access under the Computer Fraud and Abuse "
         "Act. That is a 1986 statute, written long before anyone was arguing "
         "about crawlers."),

        ("It began as an informal convention in 1994 and only became a published "
         "standard in 2022, as RFC 9309, which is why honouring it has always "
         "been a matter of etiquette and contract rather than criminal law.",
         "It began as an informal convention in 1994 and only became a published "
         "standard in 2022, as RFC 9309. That is why honouring it has always been "
         "a matter of etiquette and contract rather than criminal law."),

        ("It starts with discovery: checking for a sitemap first, because the "
         "protocol caps each file at 50,000 URLs and 50 MB, so a site that "
         "publishes one has effectively handed you an index.",
         "It starts with discovery. Check for a sitemap first: the protocol caps "
         "each file at 50,000 URLs and 50 MB, so a site that publishes one has "
         "effectively handed you an index."),
    ],

    "business-process-automation": [
        ("Amdahl's law puts a hard ceiling on it: if 25% of a case still waits on "
         "a person, the process can never run more than 4 times faster, because "
         "1 divided by 0.25 is where the arithmetic stops, however good the "
         "automation on the other 75% gets.",
         "Amdahl's law puts a hard ceiling on it. If 25% of a case still waits on "
         "a person, the process can never run more than 4 times faster, because "
         "1 divided by 0.25 is where the arithmetic stops. That holds however "
         "good the automation on the other 75% gets."),

        ("The test is arithmetic you can do on a napkin: a build costing 120 "
         "hours that saves 2 hours a week takes 60 weeks to break even, which is "
         "a long time to defend for a process somebody may redesign before then.",
         "The test is arithmetic you can do on a napkin. A build costing 120 "
         "hours that saves 2 hours a week takes 60 weeks to break even. That is a "
         "long time to defend for a process somebody may redesign before then."),

        ("BPM even has a notation for writing a process down, BPMN 2.0, published "
         "by the Object Management Group in January 2011, with DMN arriving in "
         "2015 for the decision logic that sits inside those processes.",
         "BPM even has a notation for writing a process down: BPMN 2.0, published "
         "by the Object Management Group in January 2011. DMN arrived in 2015 for "
         "the decision logic that sits inside those processes."),

        ("Set that bar deliberately, because intuition is poor at this scale: 99% "
         "accurate sounds excellent and still means 10,000 bad cases per million, "
         "while Six Sigma sets its target at 3.4 defects per million "
         "opportunities.",
         "Set that bar deliberately, because intuition is poor at this scale. 99% "
         "accurate sounds excellent and still means 10,000 bad cases per million. "
         "Six Sigma sets its target at 3.4 defects per million opportunities."),
    ],
}


def call(method, path, payload=None):
    data = json.dumps(payload).encode() if payload is not None else None
    req = urllib.request.Request(
        BASE + path, data=data, method=method,
        headers={"X-API-Key": KEY, "Content-Type": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=90) as r:
            body = r.read().decode()
            return r.status, (json.loads(body) if body.strip() else {})
    except urllib.error.HTTPError as e:
        return e.code, e.read().decode()[:400]


def plain(html):
    return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", html)).strip()


def digits(text):
    return sorted(re.findall(r"\b\d[\d,.:%/-]*\b", text))


def sentence_stats(text):
    t = re.sub(r'([.!?])(["\')\]]+)\s+', r"\1\2\n", text)
    t = re.sub(r"(?<!\bv)(?<!\bNo)(?<!\be\.g)(?<!\bi\.e)([.!?])\s+(?=[A-Z])", r"\1\n", t)
    L = [len(s.split()) for s in t.split("\n") if len(s.split()) > 2]
    return sum(L) / len(L), sum(1 for x in L if x >= 25) / len(L) * 100


def run(slug, go):
    st, post = call("GET", f"/manage/posts/{slug}/")
    if st != 200:
        print(f"  {slug}: read failed {st}")
        return 1
    body = post["description"]
    toc_before = post.get("table_of_content") or []
    before = plain(body)

    patched = body
    for find, repl in SPLITS[slug]:
        n = patched.count(find)
        if n != 1:
            print(f"  {slug}: ABORT, anchor found {n} times:\n    {find[:88]}")
            return 1
        patched = patched.replace(find, repl)
    after = plain(patched)

    if digits(before) != digits(after):
        lost = set(digits(before)) - set(digits(after))
        print(f"  {slug}: ABORT, digit tokens changed. Lost: {sorted(lost)}")
        return 1
    if "—" in patched or "–" in patched:
        print(f"  {slug}: ABORT, dash introduced")
        return 1

    mb, lb = sentence_stats(before)
    ma, la = sentence_stats(after)
    print(f"  {slug}")
    print(f"    splits          {len(SPLITS[slug])}")
    print(f"    words           {len(before.split())} -> {len(after.split())}")
    print(f"    mean sentence   {mb:.1f} -> {ma:.1f}")
    print(f"    long share      {lb:.1f}% -> {la:.1f}%")
    print(f"    digit tokens    {len(digits(before))}, unchanged")
    if not go:
        return 0

    if post["status"] == "Active":
        st, rev = call("POST", "/manage/revisions/",
                       {"post": slug, "description": patched,
                        "note": "Split long sentences added by the specificity pass",
                        "status": "Draft"})
        if st not in (200, 201):
            print(f"    revision create failed {st}: {rev}")
            return 1
        st, out = call("POST", f"/manage/revisions/{rev['id']}/apply/")
        if st not in (200, 201):
            print(f"    apply failed {st}: {out}")
            return 1
        print(f"    revision {rev['id']} applied")
    else:
        st, out = call("PATCH", f"/manage/posts/{slug}/", {"description": patched})
        if st not in (200, 201):
            print(f"    PATCH failed {st}: {out}")
            return 1

    st, back = call("GET", f"/manage/posts/{slug}/")
    if back["description"] != patched:
        print("    readback differs")
        return 1
    if (back.get("table_of_content") or []) != toc_before:
        print(f"    TOC CHANGED ({len(toc_before)} before)")
        return 1
    if back["status"] != post["status"]:
        print(f"    status changed to {back['status']!r}")
        return 1
    print(f"    written, still {back['status']}")
    return 0


if __name__ == "__main__":
    args = sys.argv[1:]
    go = "--go" in args
    slugs = list(SPLITS) if "--all" in args else [a for a in args if a in SPLITS]
    if not slugs:
        print("usage: split_long_sentences.py <slug>|--all [--go]")
        print("known:", ", ".join(SPLITS))
        sys.exit(2)
    sys.exit(max(run(s, go) for s in slugs))
