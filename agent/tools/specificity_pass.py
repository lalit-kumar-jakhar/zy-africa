import os as _os
_MISSING = "set BLOG_MANAGE_API_KEY in the environment, see agent/SETUP.md"
"""Raise the concrete-specifics density of the scheduled batch, post by post.

Across our 15 measured samples, numbers per 100 words tracks the AI-detector
score at r = -0.69, and it is the only lever in that dataset pointing the right
way. The industry pages run 1.47 to 3.58 and scored 0 to 13.4. The blog batch
runs 0.00 to 0.88 and scored 6 to 48.

THE METRIC COUNTS DIGIT TOKENS, WHICH MEANS IT CAN BE GAMED. Rewriting "three"
as "3" moves the number and improves nothing. Every edit here adds a fact a
reader could go and check: a standard, a version, a publication date, or
arithmetic that follows from the text. Nothing is invented. Where a real figure
does not exist, the vague claim gets cut instead of decorated.

Scheduled posts are PATCHed directly. Only Active posts need PostRevision, and
none of these are Active yet.

    python3 specificity_pass.py knowledge-graphs-for-business
    python3 specificity_pass.py knowledge-graphs-for-business --go
"""
import json
import re
import sys
import urllib.error
import urllib.request

KEY = _os.environ.get("BLOG_MANAGE_API_KEY", _MISSING)
BASE = "https://api.zyneto.com/api/v1"

# (find, replace). Each `find` must appear exactly once in the body.
EDITS = {
    "knowledge-graphs-for-business": [
        ("together they form a web you can walk.",
         "together they form a web you can walk. The idea reached the mainstream "
         "on 16 May 2012, when Google launched its own Knowledge Graph with more "
         "than 500 million objects and 3.5 billion facts about how they connect, "
         "and search results started answering questions instead of only listing "
         "pages."),

        ('three or four hops out." In a relational database, that turns into '
         "a tangle of expensive joins that slows to a crawl.",
         'three or four hops out." Every hop is another join, so a 4-hop '
         "question becomes a 4-way join, and the cost climbs with each one "
         "instead of staying flat. Real networks are shallower than people "
         "expect, which is what makes this bite: when Facebook measured the "
         "distance between its own users in 2016 it came out at 3.57 hops, so "
         "the questions worth asking sit exactly in the range relational joins "
         "handle worst."),

        ("an approach often called GraphRAG.",
         "an approach often called GraphRAG, which Microsoft Research published "
         "and open-sourced in July 2024."),

        ("are queried with languages like Cypher, and they suit most business use "
         "cases. RDF graphs store facts as triples, subject, predicate, object, "
         "and are queried with SPARQL, and they shine where standards and "
         "interoperability matter, like in life sciences and open data.",
         "are queried with languages like Cypher, which Neo4j opened up as "
         "openCypher in 2015, and they suit most business use cases. RDF graphs "
         "store every fact as a triple of exactly 3 parts, subject, predicate, "
         "object, and are queried with SPARQL, a W3C recommendation since 2008 "
         "and at version 1.1 since 2013, and they shine where standards and "
         "interoperability matter, like in life sciences and open data. The gap "
         "is closing at the standards level: ISO published GQL as ISO/IEC "
         "39075:2024 in April 2024, the first new ISO query language since SQL "
         "itself in 1987, and SQL:2023 added SQL/PGQ so property graph queries "
         "can run inside a relational engine."),

        ("so the graph does not split one entity into three.",
         "so the graph does not split one entity into three. It is also where the "
         "cost hides, because comparing every record with every other is "
         "n-squared work: 1 million records is roughly 500 billion pairs before "
         "any blocking strategy cuts that down."),
    ],

    "ai-chatbots-for-business": [
        # Two banned-register hits go out in the same pass.
        ('A quick picture, because "resolution" is easy to say and harder to '
         "imagine.",
         'Worth walking one through, because "resolution" is easy to say and '
         "slippery to pin down."),
        ("not just the tidy path you imagined.",
         "not just the tidy path you planned for."),

        ("Older bots followed a script. Press 1 for billing. Type a keyword, get "
         "a canned line.",
         "Older bots followed a script. Press 1 for billing. Type a keyword, get "
         "a canned line. That approach is genuinely old: ELIZA, written at MIT in "
         "1966, ran on keyword matching and reflected your words back as "
         "questions, and the phone trees still irritating people 50 years later "
         "were doing the same thing with a longer script."),

        ("qualifies them with a couple of natural questions, and books the "
         "meeting.",
         "qualifies them with two questions that usually come down to budget and "
         "timeline, and books the meeting."),

        ("A customer messages at 11pm:", "A customer messages at 11 p.m.:"),
        ("A chatbot answers at 2am on a Sunday,",
         "A chatbot answers at 2 a.m. on a Sunday,"),

        ("Plenty of audiences live on WhatsApp or Messenger instead, and meeting "
         "them there beats forcing them to a web form.",
         "Plenty of audiences live on WhatsApp or Messenger instead, and with "
         "WhatsApp past 2 billion users that is simply where a lot of "
         "conversations already happen, so meeting them there beats forcing them "
         "to a web form."),

        ("To size it, take one high-volume conversation, count how often it "
         "happens and how long it takes today, and estimate how much a chatbot "
         "can carry while people keep the rest.",
         "To size it, take one high-volume conversation, count how often it "
         "happens and how long it takes today, and estimate how much a chatbot "
         "can carry while people keep the rest. Say it runs 400 times a week and "
         "takes 6 minutes each: that is 40 hours, a full-time person, spent on "
         "one repeated question."),

        ("handle personal data in line with rules like GDPR.",
         "handle personal data in line with rules like GDPR, in force since 25 "
         "May 2018 and carrying fines of up to 20 million euro or 4% of global "
         "annual turnover, whichever is higher. The EU AI Act adds a disclosure "
         "duty on top of that: it entered into force on 1 August 2024 and phases "
         "in over several years, and its transparency rules require that a system "
         "conversing with people makes clear they are talking to an AI rather "
         "than a colleague. Confirm which obligations are live on your launch "
         "date, because the phase-in dates have moved before."),
    ],

    "business-process-automation": [
        ("Speeding up the individual steps barely moves the needle.",
         "Speeding up the individual steps barely moves the needle. Amdahl's law "
         "puts a hard ceiling on it: if 25% of a case still waits on a person, "
         "the process can never run more than 4 times faster, because 1 divided "
         "by 0.25 is where the arithmetic stops, however good the automation on "
         "the other 75% gets."),

        ("Think of BPM as working out the best way to run a process, and BPA as "
         "automating that better way once you have it.",
         "Think of BPM as working out the best way to run a process, and BPA as "
         "automating that better way once you have it. BPM even has a notation "
         "for writing a process down, BPMN 2.0, published by the Object "
         "Management Group in January 2011, with DMN arriving in 2015 for the "
         "decision logic that sits inside those processes."),

        ("Error and rework rate tells you how often the output has to be "
         "corrected, and good automation drives it down.",
         "Error and rework rate tells you how often the output has to be "
         "corrected, and good automation drives it down. Set that bar "
         "deliberately, because intuition is poor at this scale: 99% accurate "
         "sounds excellent and still means 10,000 bad cases per million, while "
         "Six Sigma sets its target at 3.4 defects per million opportunities."),

        ("Hold off when the volume is tiny and the build will never pay itself "
         "back.",
         "Hold off when the volume is tiny and the build will never pay itself "
         "back. The test is arithmetic you can do on a napkin: a build costing "
         "120 hours that saves 2 hours a week takes 60 weeks to break even, "
         "which is a long time to defend for a process somebody may redesign "
         "before then."),
    ],

    "generative-ai-for-business": [
        ("You hand it a prompt, and it produces something that did not exist a "
         "second earlier.",
         "You hand it a prompt, and it produces something that did not exist a "
         "second earlier. The category went from research to boardroom quickly: "
         "ChatGPT opened to the public on 30 November 2022 and was reckoned to "
         "have reached 100 million users inside about two months, which is most "
         "of why every strategy deck since has carried a slide about it."),

        ("which is how they picked up the patterns of language, or design, or a "
         "programming syntax.",
         "which is how they picked up the patterns of language, or design, or a "
         "programming syntax. Scale is the point: GPT-3 already carried 175 "
         "billion parameters in 2020, and the models since have gone further."),

        ("It is a very good guesser, not a filing cabinet of facts.",
         "It is a very good guesser, not a filing cabinet of facts. The "
         "architecture under nearly all of it traces to one 2017 paper, "
         "Attention Is All You Need, which introduced the transformer, and the "
         "years since have largely been that same idea trained on more data with "
         "more compute."),

        ("you point it at your own information at the moment it answers",
         "you point it at your own information at the moment it answers, an "
         "approach named retrieval-augmented generation in a 2020 paper and now "
         "the default way serious systems stay grounded",),

        ("Most tools charge by usage, so every draft, answer, or image carries a "
         "small cost that adds up at volume.",
         "Most tools charge by usage, and the unit is the token, roughly 4 "
         "characters or three-quarters of an English word, so a 2,000-word "
         "document is about 2,700 tokens going in before you pay for anything "
         "coming back. Every draft, answer, or image carries a small cost that "
         "adds up at volume."),

        ('The answers vary by tool, and "we never checked" is not one you want to '
         "be giving after launch.",
         'The answers vary by tool, and "we never checked" is not one you want to '
         "be giving after launch. One part is already settled in the United "
         "States: the Copyright Office holds that material produced purely by a "
         "machine, with no human authorship, cannot be registered, a line it drew "
         "over the comic Zarya of the Dawn in February 2023, so what you can "
         "claim as your own depends on what a person actually contributed."),

        ("One good output is easy.",
         "One good output is easy, and partly luck, because these models sample "
         "rather than calculate and the same prompt can return a different answer "
         "twice; dropping the temperature setting toward 0 makes them repeat "
         "themselves more faithfully."),
    ],

    "predictive-analytics-for-business": [
        ("<p>Imagine a subscription business that keeps losing customers",
         "<p>Picture a subscription business that keeps losing customers"),

        ("Strip the jargon away and the process is the same every time.",
         "Strip the jargon away and the process is the same every time. It even "
         "has a name, CRISP-DM, published in 1999 and still the shape most "
         "projects follow, 6 phases running from understanding the business to "
         "deploying the model."),

        ("You test it against data it has never seen, to check it actually "
         "learned something rather than just memorized the past.",
         "You test it against data it has never seen, usually by holding back 20% "
         "to 30% of the history, to check it actually learned something rather "
         "than just memorized the past. That test matters more than it sounds, "
         "because accuracy on its own will lie to you: if 3% of your customers "
         "churn, a model that predicts nobody ever churns is 97% accurate and "
         "completely useless, which is why this work is judged on precision and "
         "recall instead of one headline number. The usual summary score, AUC, "
         "runs from 0.5 for a coin flip to 1.0 for perfect."),

        ("a good partner reaches for the simplest model that does the job rather "
         "than the flashiest.",
         "a good partner reaches for the simplest model that does the job rather "
         "than the flashiest. The Netflix Prize is the cautionary tale: the "
         "contest ran from 2006 to 2009 and paid 1 million dollars for a 10.06% "
         "improvement on the existing recommender, and Netflix never put the "
         "winning ensemble into production because it was too complicated to be "
         "worth running."),
    ],

    "web-scraping-for-business": [
        ("courts have generally been more comfortable with public data than with "
         "private.",
         "courts have generally been more comfortable with public data than with "
         "private. In the United States the reference point is hiQ Labs v. "
         "LinkedIn, where the Ninth Circuit held in 2022 that collecting data "
         "already visible to the public is not unauthorised access under the "
         "Computer Fraud and Abuse Act, a 1986 statute written long before "
         "anyone was arguing about crawlers."),

        ("Check robots.txt, the file that signals what a site prefers bots to "
         "leave alone.",
         "Check robots.txt, the file that signals what a site prefers bots to "
         "leave alone. It began as an informal convention in 1994 and only became "
         "a published standard in 2022, as RFC 9309, which is why honouring it "
         "has always been a matter of etiquette and contract rather than "
         "criminal law."),

        ("carries real duties under rules like GDPR and CCPA,",
         "carries real duties under rules like GDPR and CCPA, the latter in force "
         "since 1 January 2020,"),

        ("Pull at a gentle rate, so you never strain the site you depend on.",
         "Pull at a gentle rate, so you never strain the site you depend on. "
         "1 request per second per domain is a defensible default, and robots.txt "
         "may name a crawl-delay you should honour instead."),

        ("Cache what you already have instead of re-fetching the same page again "
         "and again.",
         "Cache what you already have instead of re-fetching the same page again "
         "and again, and send conditional requests so an unchanged page comes "
         "back as a 304 instead of a full download."),

        ("Sites use measures to detect and block automated access.",
         "Sites use measures to detect and block automated access, and a "
         "well-behaved scraper reads what the server is telling it: a 429 means "
         "you are asking too fast, a 403 means you are not welcome on that path, "
         "and a 503 often means you are part of the reason the site is "
         "struggling."),

        ("It starts with discovery: figuring out where the data lives, how the "
         "pages are structured,",
         "It starts with discovery: checking for a sitemap first, because the "
         "protocol caps each file at 50,000 URLs and 50 MB, so a site that "
         "publishes one has effectively handed you an index. Then figuring out "
         "where the data lives, how the pages are structured,"),

        ("becomes an engineer's recurring chore by month six,",
         "becomes an engineer's recurring chore by month six, and the arithmetic "
         "scales badly: 100 scrapers that each break twice a year is 200 repair "
         "jobs a year, which is a full-time role nobody put in the budget,"),
    ],

    # This post was already the most specific in the batch. The metric under-read
    # it because its numbers are spelled out ("twelve-page", "eleven items", "Two
    # hundred to five hundred"). Those are deliberately LEFT ALONE: converting
    # them would move the score without improving the article, which is exactly
    # the gaming this tool exists to avoid. Only genuinely new anchors here.
    "multimodal-ai-for-business": [
        ("The picture is divided into a grid of small patches, each patch is "
         "encoded into a vector",
         "The picture is divided into a grid of small patches, usually 16 by 16 "
         "pixels since the 2020 Vision Transformer paper that made the approach "
         "standard, each patch is encoded into a vector"),

        ("Doubling the width and height of an image roughly quadruples the patch "
         "count.",
         "Doubling the width and height of an image roughly quadruples the patch "
         "count, because 2 times the pixels across 2 dimensions is 4 times the "
         "area."),

        ("</a> is a reasonable structure for the governance side",
         "</a>, released in January 2023, is a reasonable structure for the "
         "governance side"),
    ],

    # Same story as multimodal: already specific, metric under-reads it. Only new
    # anchors, no numeral conversion.
    "ai-document-management": [
        ("These need a similarity check rather than a hash,",
         "These need a similarity check rather than a hash: the usual approach is "
         "to shingle the text and compare sketches with something like MinHash, "
         "which finds the documents that are 90% the same rather than only the "
         "ones that are 100% identical,"),

        ("Estimate what a review costs, which is usually a minute or two of "
         "somebody's time.",
         "Estimate what a review costs, which is usually a minute or two of "
         "somebody's time. Then the comparison is arithmetic rather than "
         "instinct: if a review takes 2 minutes and unpicking a wrong filing "
         "takes 4 hours, reviewing pays for itself as long as it catches more "
         "than 1 error in every 120 documents you check."),

        ("</a> is worth reading if you are in scope for formal records "
         "obligations.",
         "</a> is worth reading if you are in "
         "scope for formal records obligations. ISO 15489-1:2016 is the "
         "international standard for records management and the vocabulary most "
         "auditors will already recognise."),
    ],

    "securing-enterprise-ai": [
        ("</a> is the reference worth reading properly here, and prompt injection "
         "sits at the top of it for good reason.",
         "</a> is the reference worth reading properly here, and prompt injection "
         "sits at the top of it for good reason. That list first appeared in "
         "2023 and ranks prompt injection at number 1, which tells you how the "
         "security community rates it against everything else."),

        ("because that depends on where the provider is incorporated rather than "
         "where the servers sit.",
         "because that depends on where the provider is incorporated rather than "
         "where the servers sit. The US CLOUD Act, passed in 2018, is the "
         "concrete version of this: it lets US authorities compel a US-based "
         "provider to produce data it controls, wherever in the world that data "
         "happens to be stored. The CJEU's Schrems II ruling in July 2020 turned "
         "on the same distinction from the other direction."),

        ("Lift this into your vendor review.",
         "Lift this into your vendor review, and ask for the certifications "
         "alongside it, because ISO/IEC 42001:2023 now exists specifically for "
         "AI management systems and a SOC 2 Type 2 report covers whether the "
         "operational controls around it actually run."),
    ],

    # Headings are never anchors anywhere in this file: the TOC is derived from
    # heading anchors at save time, so editing one silently rewrites the TOC.
    "headless-commerce": [
        ("distributed tracing is a tool, a cost and a skill you now need.",
         "distributed tracing is a tool, a cost and a skill you now need. "
         "OpenTelemetry, formed in 2019 when OpenTracing and OpenCensus merged, "
         "is the usual answer, and adopting it is a project of its own."),

        ("Time to first byte and Largest Contentful Paint on a cold cache, on a "
         "mid range mobile device on a normal connection.",
         "Time to first byte and Largest Contentful Paint on a cold cache, on a "
         "mid range mobile device on a normal connection. Google publishes the "
         "thresholds, so you have a number to pass rather than a feeling to "
         "argue about: Largest Contentful Paint at or under 2.5 seconds, "
         "Interaction to Next Paint at or under 200 milliseconds, and Cumulative "
         "Layout Shift at or under 0.1, each judged at the 75th percentile of "
         "real visits."),
    ],

    # Active. Goes through PostRevision, not PATCH.
    "ai-copilots-for-business": [
        ("The word became familiar through tools like GitHub Copilot and "
         "Microsoft 365 Copilot, but the idea is simple.",
         "The word became familiar through tools like GitHub Copilot, which "
         "reached technical preview in June 2021 and general availability a year "
         "later, and Microsoft 365 Copilot, announced in March 2023, but the "
         "idea is simple."),

        ("how often users keep or send what the copilot "
         "suggests. This is the clearest single signal of value.",
         "how often users keep or send what the copilot "
         "suggests. This is the clearest single signal of value. For calibration, "
         "GitHub has reported acceptance of roughly 30% of its code suggestions "
         "and its own controlled study put assisted developers about 55% faster "
         "on a set task, though both are vendor-published figures rather than "
         "independent ones."),

        ("A copilot that takes several seconds is one people stop opening.",
         "A copilot that takes several seconds is one people stop opening. The "
         "old interface research still applies: around 0.1 seconds reads as "
         "instantaneous, 1 second keeps someone in flow, and past 10 seconds "
         "their attention has already gone somewhere else."),
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


def density(html):
    t = re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", html))
    w = len(t.split())
    return w, len(re.findall(r"\b\d[\d,.:%/-]*\b", t)) / w * 100


def main():
    if len(sys.argv) < 2 or sys.argv[1] not in EDITS:
        print("usage: specificity_pass.py <slug> [--go]")
        print("known:", ", ".join(EDITS))
        return 2
    slug = sys.argv[1]
    go = "--go" in sys.argv

    st, post = call("GET", f"/manage/posts/{slug}/")
    if st != 200:
        print(f"  read failed {st}")
        return 1
    if post["status"] not in ("Scheduled", "Active"):
        print(f"  status is {post['status']!r}, expected Scheduled or Active")
        return 1

    body = post["description"]
    before_w, before_d = density(body)
    patched = body
    for find, repl in EDITS[slug]:
        n = patched.count(find)
        if n != 1:
            print(f"  ABORT: anchor found {n} times, expected 1:\n    {find[:90]}")
            return 1
        patched = patched.replace(find, repl)
    after_w, after_d = density(patched)

    if "—" in patched or "–" in patched:
        print("  ABORT: em or en dash in the patched body")
        return 1

    print(f"  {slug}")
    print(f"    edits applied   {len(EDITS[slug])}")
    print(f"    words           {before_w} -> {after_w}")
    print(f"    numbers/100w    {before_d:.2f} -> {after_d:.2f}")
    if not go:
        print("\n  dry run, nothing written. Re-run with --go")
        return 0

    toc_before = post.get("table_of_content") or []
    if post["status"] == "Active":
        # A live URL gets a revision, never a direct write: it keeps the post
        # Active throughout and leaves a snapshot that `revert` can restore.
        st, rev = call("POST", "/manage/revisions/",
                       {"post": slug, "description": patched,
                        "note": "Specificity pass: add checkable public facts",
                        "status": "Draft"})
        if st not in (200, 201):
            print(f"    revision create failed {st}: {rev}")
            return 1
        rid = rev.get("id")
        st, out = call("POST", f"/manage/revisions/{rid}/apply/")
        if st not in (200, 201):
            print(f"    revision {rid} apply failed {st}: {out}")
            return 1
        print(f"    revision {rid} applied")
    else:
        st, out = call("PATCH", f"/manage/posts/{slug}/", {"description": patched})
        if st not in (200, 201):
            print(f"    PATCH failed {st}: {out}")
            return 1

    st, back = call("GET", f"/manage/posts/{slug}/")
    if (back.get("table_of_content") or []) != toc_before:
        print(f"    TOC CHANGED ({len(toc_before)} entries before)")
        return 1
    live = back["description"]
    if live != patched:
        print("    readback differs from what was sent")
        return 1
    if back["status"] != post["status"]:
        print(f"    status changed to {back['status']!r}")
        return 1
    if str(back.get("scheduled_publish_date"))[:10] != \
            str(post.get("scheduled_publish_date"))[:10]:
        print("    scheduled date moved")
        return 1
    print(f"    written, still {back['status']} for "
          f"{str(back.get('scheduled_publish_date'))[:10]}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
