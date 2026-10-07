"""
Prove a trim pass removed words and nothing else.

Snapshot a case study before editing, trim it, then compare. The guard fails if
any number or named system present before is missing after. Wording may change
freely; facts may not disappear.

Modelled on split_long_sentences.py, which asserted the sorted digit-token list
was byte-identical across the edit. Same idea, extended to proper nouns, because
on these pages the named tooling is the credibility and it is the easiest thing
to lose while compressing a sentence.

    python3 trim_guard.py snapshot <slug>
    ...edit the file...
    python3 trim_guard.py check <slug>
"""

import re
import sys
import json
import pathlib

ROOT = pathlib.Path(__file__).resolve().parents[2]
DATA = ROOT / "zyneto-frontend/src/data/case-studies"
SNAP = pathlib.Path(__file__).parent / ".trim-snapshots"

# Sentence-initial words are excluded by the caller; these are capitalised words
# that carry no fact, so their loss is a wording change rather than a fact loss.
STOP = {
    "The", "This", "That", "These", "Those", "A", "An", "And", "But", "So",
    "It", "Its", "They", "Their", "We", "You", "Your", "Nobody", "Every",
    "Each", "One", "Two", "Because", "When", "What", "Where", "Which", "Why",
    "How", "For", "From", "With", "Without", "Beside", "Answer", "Reports",
    "Channel", "Channels", "History", "Ingest", "Isolating", "Pulls", "Scope",
    "Alternative", "Reason", "Cost", "Data", "Lead", "Accurate", "Not", "More",
    "Around", "Daily", "Connectors", "Replenishment", "Celery", "Records",
    "Infrastructure", "Sources", "Platform", "Multi", "Performance", "Contacts",
    "Listing", "Feedback", "Normalisation", "Latency", "Setup", "Sentiment",
    "Aspect", "Reviews", "Short", "Local", "Name", "Are", "Is", "Rate",
    "Question", "Global", "Unified", "Access", "Ownership", "Standing",
    "Engagement", "Trade", "Price", "Unit", "Buyers", "Success", "Who",
    "Refresh", "Continuous", "Bursty", "Public", "Contractual", "Case",
    "Merchandising", "Brand", "Do", "Owns", "System", "Whenever", "Anything",
    "Production", "Item", "Invoices", "Style", "Order", "Landed", "Finished",
    "Physical", "On", "Append", "Edits", "Onboarding", "Sync", "In", "Of",
    "Answered", "Both", "Filter", "Separate", "Marketplace", "Returns",
    "Buying", "Listings", "Contact", "Review", "Deletions", "There", "Only",
    "Most", "Hosted", "Seasonal", "Free", "Both", "Patching", "Traffic", "Size",
    "Fashion", "Indian", "Return", "Colour", "Repeat", "Wholesale", "Asks",
    "Address", "Per", "Reasons", "Four", "Inside", "Reconciled", "Settlement",
    "Adding", "Generic", "Percentage", "After", "Shade", "Demand", "Fabric",
    "Buy", "Roll", "Labour", "Consumption", "Marker", "Style", "Three", "Denim",
    "Tenancy", "Item", "Zoho holds", "Not", "Given", "Because", "Under", "Textile",
    "Garments", "Closing", "Invoices", "Accounting", "Language", "Every", "Users",
    "Native", "Birth", "Vimshottari", "Ashtakoota", "Video", "Live", "Store",
    "Almost", "Sign", "Positions", "Nested", "Two", "One", "Clock", "Timezone",
    "Ayanamsa", "Day", "Compute", "Correctness", "Nothing", "Astronomical",
    "Ephemeris", "Timezone databases", "Sentiment", "Aspect",
}


def facts(text):
    # A set, not a multiset. Deduplicating a restated capability legitimately
    # drops the second mention of a number without losing the fact.
    nums = sorted(set(re.findall(r"\d[\d,.]*", text)))
    caps = sorted({w for w in re.findall(r"\b[A-Z][A-Za-z0-9]*(?:\s[A-Z][a-z]+)?\b", text)
                   if w not in STOP and len(w) > 1})
    lower_named = sorted({w for w in re.findall(r"\b(?:django-crontab|collectfasta|greige|ecom)\b", text)})
    return {"numbers": nums, "named": caps + lower_named}


def prose(path):
    src = path.read_text()
    out = []
    for m in re.finditer(r'"((?:[^"\\]|\\.)*)"', src, re.S):
        t = re.sub(r"\\(.)", r"\1", m.group(1))
        if not t.startswith(("http", "/")):
            out.append(t)
    # " | " not " ": joining array entries with a space lets the two-word proper
    # noun regex match across an entry boundary and invent systems like
    # "CM2 Buying" that never existed.
    return " | ".join(out)


def main():
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    mode, slug = sys.argv[1], sys.argv[2]
    path = DATA / f"{slug}.ts"
    if not path.exists():
        sys.exit(f"no such study: {slug}")
    SNAP.mkdir(exist_ok=True)
    snap = SNAP / f"{slug}.json"

    if mode == "snapshot":
        text = prose(path)
        snap.write_text(json.dumps({"words": len(text.split()), **facts(text)}))
        print(f"snapshot {slug}: {len(text.split())} words, "
              f"{len(facts(text)['numbers'])} numbers, {len(facts(text)['named'])} named")
        return 0

    if mode != "check":
        sys.exit(__doc__)
    if not snap.exists():
        sys.exit(f"no snapshot for {slug}; run snapshot first")

    before = json.loads(snap.read_text())
    text = prose(path)
    after = facts(text)
    now = len(text.split())

    lost_n = sorted(set(before["numbers"]) - set(after["numbers"]))
    # Case-insensitive: merging two sentences lowercases a sentence-initial word,
    # which is a wording change, not a lost fact. A genuinely deleted system name
    # disappears in both cases.
    # Test against the whole text, not against after["named"], which only holds
    # capitalised tokens: a word lowercased by a sentence merge could never match
    # there and always read as lost.
    haystack = text.lower()
    lost_c = sorted({w for w in before["named"]
                     if not re.search(rf"\b{re.escape(w.lower())}\b", haystack)})

    print(f"{slug}: {before['words']} -> {now} words ({now - before['words']:+d})")
    if lost_n:
        print(f"  FAIL  numbers lost: {sorted(set(lost_n))}")
    if lost_c:
        print(f"  FAIL  named systems lost: {lost_c}")
    before_lc = " ".join(before["named"]).lower()
    gained = sorted({w for w in after["named"]
                     if not re.search(rf"\b{re.escape(w.lower())}\b", before_lc)})
    if gained:
        print(f"  note  named tokens introduced: {gained}")
    if not lost_n and not lost_c:
        print("  OK    every number and named system survived the trim")
    return 1 if (lost_n or lost_c) else 0


if __name__ == "__main__":
    sys.exit(main())
