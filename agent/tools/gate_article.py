#!/usr/bin/env python3
import re, sys, pathlib, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from md_to_house_html import strip_seo_brief, SEO_BRIEF_FIELD  # noqa: E402

BANNED = [
    "in today's fast-paced world", "in today's digital", "unlock the power", "game changer",
    "game-changer", "revolutionize", "revolutionise", "leverage", "delve into", "embark on",
    "imagine", "as we navigate", "it is worth noting", "needless to say", "in conclusion",
    "this comprehensive guide", "whether you're", "whether you are", "as an ai",
    "seamless", "streamline", "robust", "cutting-edge", "flawless", "elevate", "harness",
    "in short", "the rule of thumb", "a testament to", "navigate the", "landscape of",
    "dive into", "unleash", "supercharge", "empower", "world-class", "state-of-the-art",
]
FORMULAIC = [r"\bis not [a-z ]{2,20}, it is\b", r"\bthe result is\b", r"\bhere is the flow\b"]

# Banned only as a sentence-opening summary marker. A bare substring test fires on
# "measure accuracy per class, not overall, since ...", which is a contrastive
# adverb and perfectly good English.
BANNED_SENTENCE_INITIAL = [r"(?:^|(?<=[.!?]\s))overall,"]


def body_of(text):
    """Return (body, mode).

    mode is "brief" for the 14-part markdown source and "flat" for a plain-text
    extraction such as `Blog/scan-ready/*.txt`, which is the published body
    pulled back out of the API and has no markdown scaffolding at all.

    This used to return None for anything without a section 6 header, and every
    caller below it was inside the `else`. Run against a flat file the gate
    therefore reported two structural failures and silently skipped the rest,
    including `ai_risk()`. On 2026-08-12 a batch of 14 reported no real failures
    while `ai_risk()` on the same files returned 12. A gate that reports clean
    because it never looked is worse than one that reports noise.
    """
    m = re.search(r"^## 6\. Complete Article.*?$", text, re.M)
    if not m:
        return text, "flat"
    start = m.end()
    n = re.search(r"^## 7\.", text[start:], re.M)
    return (text[start:start + n.start()] if n else text[start:]), "brief"


def count_words(body):
    b = re.sub(r"^\*\*(SEO Title|Meta Title|Meta Description|URL Slug|Target Keyword|"
               r"Search Intent|Estimated Difficulty|Estimated Traffic Potential|Reading Time):.*$",
               "", body, flags=re.M)
    b = re.sub(r"^\s*[-|]{3,}.*$", "", b, flags=re.M)
    b = re.sub(r"\*\*\[VISUAL \d+:[^\]]*\]\*\*", "", b)
    b = re.sub(r"[#*`>]", " ", b)
    return len(re.findall(r"[A-Za-z0-9']+", b))


def prose_sentences(body):
    b = re.sub(r"```.*?```", " ", body, flags=re.S)
    b = re.sub(r"^\s*\|.*$", "", b, flags=re.M)
    b = re.sub(r"^\s*[-*+]\s+.*$", "", b, flags=re.M)
    b = re.sub(r"^\s*#{1,6}\s+.*$", "", b, flags=re.M)
    b = re.sub(r"\*\*\[VISUAL \d+:[^\]]*\]\*\*", " ", b)
    b = re.sub(r"^\*\*[^*]+:\*\*.*$", "", b, flags=re.M)
    b = re.sub(r"[#*`>\[\]]", " ", b)
    b = re.sub(r"\s+", " ", b)
    return [s.strip() for s in re.split(r"(?<=[.?!])\s+", b) if len(s.split()) >= 3]


def ai_risk(body):
    """Sentence stats and specifics density, both measured on the same text.

    `digits` used to be computed on the raw body while the sentence stats came
    from `prose_sentences()`. Headings, bullet lists, `[VISUAL n: ...]` markers
    and the SEO metadata lines are dense in numerals and none of them are prose,
    so the density came out about 43% high: `ecommerce-replatforming` read 1.19
    against a real 0.83. That decides which regime a post is judged in, so posts
    sitting just under the 1.0 threshold were being waved through as
    specifics-dense and never had their sentence profile tested at all.
    """
    sents = prose_sentences(body)
    if len(sents) < 40:
        return None
    lengths = [len(s.split()) for s in sents]
    words = " ".join(sents).split()
    return {
        "mean": sum(lengths) / len(lengths),
        "long_share": 100 * sum(1 for x in lengths if x > 25) / len(lengths),
        "short_share": 100 * sum(1 for x in lengths if x < 9) / len(lengths),
        "digits": 100 * sum(1 for w in words if any(c.isdigit() for c in w)) / max(1, len(words)),
    }


def gate(path):
    text = pathlib.Path(path).read_text()
    fails, warns = [], []

    prose = re.sub(r"^\s*\|?[\s:|-]{3,}\|?\s*$", "", text, flags=re.M)

    for ch, name in [("—", "em dash"), ("–", "en dash"), ("--", "double hyphen"),
                     ("‘", "curly quote"), ("’", "curly apostrophe"),
                     ("“", "curly dquote"), (" ", "nbsp")]:
        n = prose.count(ch)
        if n and name in ("em dash", "en dash", "double hyphen", "nbsp"):
            fails.append(f"{name}: {n}")
        elif n:
            warns.append(f"{name}: {n}")

    low = text.lower()
    hits = [(p, low.count(p)) for p in BANNED if p in low]
    for pat in BANNED_SENTENCE_INITIAL:
        n = len(re.findall(pat, low, re.M))
        if n:
            hits.append((pat.split(")")[-1], n))
    if hits:
        fails.append("banned register: " + ", ".join(f"{p}({n})" for p, n in hits))
    for pat in FORMULAIC:
        if re.search(pat, low):
            warns.append(f"formulaic: {pat}")

    body, mode = body_of(text)
    skipped = []
    wc = count_words(body)
    if not (2400 <= wc <= 3200):
        fails.append(f"word count {wc} outside 2400-3200")

    if mode == "brief":
        h2 = len(re.findall(r"^## ", body, re.M))
        # CTA banner markers share the VISUAL syntax but are not diagrams, and
        # counting them broke the 2-5 diagram budget the moment they were added.
        vis = len([m for m in re.findall(r"\[VISUAL \d+:([^\]]*)\]", body)
                   if "CTA banner" not in m])
        if not (6 <= h2 <= 10):
            fails.append(f"h2 count {h2} outside 6-10")
        if not (2 <= vis <= 5):
            fails.append(f"visual count {vis} outside 2-5")
        if re.search(r"frequently asked", body, re.I):
            fails.append("FAQ block inside article body")
        print(f"  mode=brief words={wc} h2={h2} visuals={vis}")
    else:
        # Every check in this list needs markdown that a flat extraction does
        # not carry. They are named rather than dropped, so a pass in this mode
        # cannot be mistaken for a full pass.
        skipped = ["h2 count", "visual count", "FAQ block placement",
                   "SEO brief header separation", "meta title", "meta description",
                   "FAQ count"]
        print(f"  mode=flat words={wc}  (plain-text extraction)")

    risk = ai_risk(body)
    if risk is None:
        warns.append(f"AI risk not evaluated: fewer than 40 prose sentences")
    elif risk["digits"] >= 1.0:
        warns.append(f"AI risk: low. {risk['digits']:.2f} numbers per 100 words puts this in "
                     f"the specifics-dense band, where every measured piece scored 0 to 13")
    else:
        warns.append(f"AI risk: only {risk['digits']:.2f} numbers per 100 words. Raising "
                     f"concrete specifics is the larger lever; everything measured at 1.0+ "
                     f"scored 0 to 13, everything under 0.25 scored 6 to 48")
        if risk["mean"] >= 15.0:
            fails.append(f"AI risk: mean sentence {risk['mean']:.1f}w while specifics are "
                         f"thin. Every specifics-thin piece over 15.0w scored 29+")
        if risk["long_share"] >= 11.0:
            fails.append(f"AI risk: {risk['long_share']:.1f}% of sentences over 25w while "
                         f"specifics are thin. Needs under 11%")

    if mode == "brief":
        # The brief header must be separated from the prose by a `---`, or the
        # converter joins it into the first published paragraph. Four posts
        # shipped that way on 2026-08-11 and every structural check passed.
        #
        # Assert the property the converter actually depends on, by calling the
        # converter's own function: strip_seo_brief only fires when every line
        # above the FIRST `---` is a brief field. The earlier version required a
        # `---` plus "Reading Time:" somewhere above it, which 15 wave 1 to 3
        # deliverables satisfied with the rule sitting at the END of section 6,
        # so the whole article counted as the head and the gate passed while the
        # brief would still have shipped as paragraph one.
        if strip_seo_brief(body) == body:
            head = re.split(r"^---\s*$", body, maxsplit=1, flags=re.M)
            if len(head) != 2:
                fails.append("SEO brief header is not separated from the body by ---")
            else:
                offender = next((ln.strip() for ln in head[0].splitlines()
                                 if ln.strip() and not SEO_BRIEF_FIELD.match(ln.strip())), None)
                fails.append(
                    "the first --- in section 6 does not separate the brief from the prose, so "
                    "the brief would ship as paragraph one. First non-brief line above it: "
                    f"{offender[:60]!r}" if offender else
                    "SEO brief header is not separated from the body by ---")

        mt = re.search(r"\*\*Meta Title:\*\*\s*(.+?)(?:\s*\(\d+ chars\))?\s*$", text, re.M)
        md = re.search(r"\*\*Meta Description:\*\*\s*(.+?)(?:\s*\(\d+ chars\))?\s*$", text, re.M)
        if mt:
            t = mt.group(1).strip()
            print(f"  metaTitle={len(t)}c")
            if len(t) > 60:
                fails.append(f"meta title {len(t)} > 60")
        if md:
            d = md.group(1).strip()
            print(f"  metaDesc={len(d)}c")
            if len(d) > 160:
                fails.append(f"meta description {len(d)} > 160")

        nfaq = len(re.findall(r"^\*\*Q:", text, re.M))
        print(f"  faqs={nfaq}")
        if not (5 <= nfaq <= 8):
            fails.append(f"faq count {nfaq} outside 5-8")

    # Section 10 must be applicable, not merely present. It was written for four
    # waves and read by nothing, so 25 posts shipped with empty link graphs while
    # the plan sat in the markdown looking done. The check that matters is the
    # anchor: title-shaped anchors had no literal slot in conversational prose,
    # 108 of 110 rows unusable, so every anchor must appear verbatim in section 6.
    if mode == "brief":
        import link_spec
        lf, lw = link_spec.validate(text)
        fails += lf
        warns += lw

    return fails, warns, skipped


if __name__ == "__main__":
    bad = 0
    for p in sys.argv[1:]:
        print(f"\n{pathlib.Path(p).name}")
        f, w, skipped = gate(p)
        for x in w:
            print(f"  WARN {x}")
        for x in f:
            print(f"  FAIL {x}")
            bad += 1
        if skipped:
            print(f"  NOT CHECKED ({len(skipped)}): {', '.join(skipped)}")
        if not f:
            print("  PASS" + (" for the checks that ran" if skipped else ""))
    print(f"\n{bad} failures")
    sys.exit(1 if bad else 0)
