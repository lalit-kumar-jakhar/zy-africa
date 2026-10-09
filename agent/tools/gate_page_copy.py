import argparse
import collections
import os
import re
import sys
from zy_paths import zy

ROOT = zy("zyneto-frontend")

BANNED_PHRASES = [
    "in today's fast-paced", "unlock the power", "game changer", "game-changer",
    "revolutioniz", "delve into", "embark on", "as we navigate",
    "it is worth noting", "needless to say", "in conclusion",
    "this comprehensive guide", "whether you're", "whether you are", "as an ai",
    "seamless", "cutting-edge", "cutting edge", "streamlin", "robust",
    "elevate", "transformative", "visionary", "empower",
    "at the end of the day", "when it comes to", "navigate the complexities",
    "in the ever-evolving", "ever-evolving", "tailored to your", "world-class",
    "best-in-class", "state-of-the-art", "hassle-free", "one-stop",
    "take it to the next level", "unparalleled", "bespoke solutions",
]

# Both words have a legitimate technical sense that the flat substring check
# cannot tell from the marketing one: a parity or test harness is a real
# artifact, and leverage is a real financial measure on a fintech page.
BANNED_PATTERNS = [
    (r"\bharness(?:es|ing|ed)?\s+(?:the\s+)?(?:power|potential|value|capabilit|benefit|strength|full)",
     "harness the <benefit>"),
    (r"\bleverag(?:e|es|ing|ed)\s+(?:our|your|their|the|this|these|advanced|cutting|modern|latest|existing|powerful)",
     "leverage as a verb"),
]

FORMULAIC = [
    (r"\bis not (?:just )?(?:a|an|about) [^.,;]{2,40}, it(?:'s| is) ", "X is not Y, it is Z"),
    (r"\bthe rule of thumb\b", "the rule of thumb"),
    (r"\bin short\b", "in short"),
    (r"\bthe result is\b", "the result is"),
    (r"\bhere is the flow\b", "here is the flow"),
    (r"\bthat(?:'s| is) where [A-Z]?\w+ comes in\b", "that is where X comes in"),
    (r"\bmore than just\b", "more than just"),
    (r"\bnot only .{2,40} but also\b", "not only X but also Y"),
    (r"\bplays a (?:crucial|key|vital|critical) role\b", "plays a crucial role"),
    (r"\bin the realm of\b", "in the realm of"),
    (r"\ba testament to\b", "a testament to"),
    (r"\bfoster(?:s|ing)? (?:a |an )?(?:culture|environment|collaboration)\b", "foster a culture"),
]

# Strings that are code, not copy.
CODE_HINTS = re.compile(
    r"^(?:/|\.{1,2}/|#|https?://|[a-z-]+:[a-z0-9]|@)"
    r"|^[a-z]+(?:-[a-z0-9]+)+$"
    r"|(?:text|bg|border|grid|flex|rounded|font|md|lg|xl|sm|px|py|mt|mb|gap|w-|h-)-\["
    r"|\b(?:className|viewBox|xmlns|rgba?\()\b"
    r"|^[a-zA-Z]+\.(?:tsx?|svg|webp|png|jpg)$"
)

TAILWIND = re.compile(r"^(?:[a-z0-9:\[\]\-\/\.#%_(),\s]|!)+$")


def is_copy(s):
    s = s.strip()
    if len(s) < 12:
        return False
    if CODE_HINTS.search(s):
        return False
    words = s.split()
    if len(words) < 3:
        return False
    # tailwind class blobs: all-lowercase tokens, many hyphens/colons, no sentence punctuation
    if not re.search(r"[A-Z]", s) and not re.search(r"[.?!,]", s):
        hyphenish = sum(1 for w in words if "-" in w or ":" in w)
        if hyphenish >= len(words) / 2:
            return False
    if TAILWIND.match(s) and not re.search(r"[.?!]", s) and s.islower():
        return False
    return True


def extract(path):
    src = open(path, encoding="utf-8").read()
    src = re.sub(r"^import .*?$", "", src, flags=re.M)
    out, seen = [], set()
    # double-quoted and backtick template strings
    for m in re.finditer(r'"((?:[^"\\\n]|\\.)*)"|`([^`]*)`', src):
        raw = m.group(1) if m.group(1) is not None else m.group(2)
        val = raw.replace('\\"', '"').replace("\\'", "'")
        if is_copy(val) and val not in seen:
            seen.add(val)
            out.append((src[:m.start()].count("\n") + 1, val))
    return out


def sentences(text):
    return [s.strip() for s in re.split(r"(?<=[.?!])\s+", text) if len(s.strip()) > 20]


def audit(path):
    name = os.path.relpath(path, ROOT)
    copy = extract(path)
    corpus = " ".join(c for _, c in copy)
    words = len(corpus.split())
    fails, warns = [], []

    for ln, s in copy:
        if "—" in s:
            fails.append(f"L{ln} EM DASH: {s[:90]}")
        if "–" in s:
            fails.append(f"L{ln} EN DASH: {s[:90]}")
        if re.search(r"(?<!-)--(?!-)", s):
            fails.append(f"L{ln} DOUBLE HYPHEN: {s[:90]}")
        low = s.lower()
        for b in BANNED_PHRASES:
            if b in low:
                fails.append(f"L{ln} BANNED {b!r}: {s[:90]}")
        for pat, label in BANNED_PATTERNS:
            if re.search(pat, s, re.I):
                fails.append(f"L{ln} BANNED ({label}): {s[:90]}")
        for pat, label in FORMULAIC:
            if re.search(pat, s, re.I):
                warns.append(f"L{ln} FORMULAIC ({label}): {s[:90]}")

    # duplicate sentences across the page
    sents = collections.Counter()
    where = {}
    for ln, s in copy:
        for sent in sentences(s):
            k = re.sub(r"\s+", " ", sent.lower())
            sents[k] += 1
            where.setdefault(k, ln)
    for k, n in sents.items():
        if n > 1 and len(k) > 45:
            warns.append(f"L{where[k]} DUPLICATE SENTENCE x{n}: {k[:90]}")

    # sentence-opening uniformity
    openers = collections.Counter()
    total_s = 0
    for _, s in copy:
        for sent in sentences(s):
            total_s += 1
            openers[" ".join(sent.split()[:2]).lower().strip(",")] += 1
    for op, n in openers.most_common(6):
        if n >= 5 and total_s:
            warns.append(f"OPENER REPEAT x{n} ({n * 100 // total_s}% of {total_s} sentences): {op!r}...")

    # Same two-regime AI-detector screen as gate_article.py, validated on 15
    # scored items. Specifics-dense copy clears regardless of sentence length.
    all_sents = [s for _, c in copy for s in sentences(c)]
    if len(all_sents) >= 40:
        sl = [len(s.split()) for s in all_sents]
        mean_len = sum(sl) / len(sl)
        long_share = 100 * sum(1 for x in sl if x > 25) / len(sl)
        cw = corpus.split()
        digits = 100 * sum(1 for w in cw if any(ch.isdigit() for ch in w)) / max(1, len(cw))
        if digits >= 1.0:
            warns.append(f"AI risk low: {digits:.2f} numbers per 100 words (specifics-dense band)")
        else:
            warns.append(f"AI risk: only {digits:.2f} numbers per 100 words. Concrete specifics "
                         f"are the larger lever")
            if mean_len >= 15.0:
                fails.append(f"AI risk: mean sentence {mean_len:.1f}w with thin specifics")
            if long_share >= 11.0:
                fails.append(f"AI risk: {long_share:.1f}% of sentences over 25w with thin specifics")

    # burstiness: stdev of sentence length
    lens = [len(s.split()) for _, c in copy for s in sentences(c)]
    if lens:
        mean = sum(lens) / len(lens)
        sd = (sum((x - mean) ** 2 for x in lens) / len(lens)) ** 0.5
    else:
        mean = sd = 0

    print(f"\n=== {name} ===")
    print(f"  copy strings {len(copy)} | words {words} | sentences {len(lens)} | "
          f"mean {mean:.1f}w sd {sd:.1f} (cv {sd / mean if mean else 0:.2f})")
    for f in fails:
        print(f"  FAIL  {f}")
    for w in warns:
        print(f"  warn  {w}")
    if not fails and not warns:
        print("  clean")
    return len(fails), corpus


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("files", nargs="+")
    ap.add_argument("--dump", help="write extracted corpus to this dir")
    a = ap.parse_args()
    total = 0
    for f in a.files:
        p = f if os.path.isabs(f) else os.path.join(ROOT, f)
        n, corpus = audit(p)
        total += n
        if a.dump:
            base = os.path.basename(p).rsplit(".", 1)[0]
            open(os.path.join(a.dump, base + ".txt"), "w", encoding="utf-8").write(corpus)
    print(f"\n{total} failure(s)")
    sys.exit(1 if total else 0)
