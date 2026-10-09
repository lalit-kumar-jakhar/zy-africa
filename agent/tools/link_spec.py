"""Section 10 of a deliverable: parse it, validate it, and splice it in.

Shared by `gate_article.py`, which fails a draft whose section 10 cannot be
applied, and by the push scripts, which apply it. It exists because section 10
was written for four waves and read by nothing, so 25 posts reached the server
with empty link graphs while their link plan sat in the markdown looking done.

**The validation that matters is the anchor.** Section 10 used to carry
title-shaped anchors, "MES integration cost", against body prose that says
"manufacturing execution system", and 108 of 110 rows had no literal slot. So
the gate now requires every anchor to appear verbatim in section 6, which turns
an unusable link plan into a build failure at write time rather than a silent
omission at push time.
"""
import re

ROW = re.compile(r"^\|\s*([^|]+?)\s*\|\s*`([^`]+)`\s*\|", re.M)
SEC10 = re.compile(r"^## 10\..*?$(.*?)(?=^## |\Z)", re.S | re.M)
SEC6 = re.compile(r"^## 6\..*?$(.*?)(?=^## 7\.|\Z)", re.S | re.M)

TAGS = re.compile(r"<[^>]+>")
HEAD = re.compile(r"<h[1-6][^>]*>.*?</h[1-6]>", re.S | re.I)
ANCH = re.compile(r"<a\b[^>]*>.*?</a>", re.S | re.I)
CELL = re.compile(r"<t[dh]\b[^>]*>.*?</t[dh]>", re.S | re.I)
TAGSPAN = re.compile(r"<[^>]+>")

# Below this a draft gets a warning, not a failure. The wave 4 audit measured an
# honest ceiling of about 1.5 links per post, because topics screened for zero
# collision with the library share little vocabulary with it. Failing a draft at
# 4 would push a writer to invent anchors, which is how the August orphan rescue
# reached a 47 per cent error rate. A wrong link is worse than no link.
THIN_ROWS = 4


def parse(text):
    """[(anchor, target)] from the section 10 table. Header row dropped."""
    m = SEC10.search(text)
    if not m:
        return []
    out = []
    for row in ROW.finditer(m.group(1)):
        anchor, target = row.group(1).strip(), row.group(2).strip()
        if anchor.lower() in ("anchor", "---", ""):
            continue
        out.append((anchor, target))
    return out


def _body_prose(text):
    """Section 6 with its brief header removed, markdown stripped to plain words."""
    m = SEC6.search(text)
    if not m:
        return ""
    body = m.group(1)
    # Drop the brief header if it is there. Splitting on the first `---` and
    # taking the tail looks equivalent and is not: waves 1 to 3 carry no
    # separator after the header, so the first `---` found is the one before
    # section 7 and the tail is empty. That returned zero prose for 15 drafts
    # and flagged every anchor in them as missing.
    body = re.sub(r"\A\s*(?:\*\*[A-Za-z ]+:\*\*[^\n]*\n)+", " ", body)
    body = re.sub(r"^---\s*$", " ", body, flags=re.M)
    body = re.sub(r"^\*\*\[VISUAL[^\]]*\]\*\*$", " ", body, flags=re.M)
    body = re.sub(r"^\|.*$", " ", body, flags=re.M)          # tables are not prose
    body = re.sub(r"^#+\s.*$", " ", body, flags=re.M)         # nor headings
    return re.sub(r"[*_`>#]", " ", body)


def validate(text):
    """(fails, warns). Empty fails means section 10 can actually be applied."""
    rows = parse(text)
    fails, warns = [], []
    if not rows:
        return ["section 10 has no link rows"], warns
    if len(rows) < THIN_ROWS:
        warns.append(f"section 10 has {len(rows)} link rows, under the {THIN_ROWS} "
                     f"we aim for. Add one only if it is semantically true")
    prose = _body_prose(text)
    seen = set()
    for anchor, target in rows:
        pat = re.compile(r"(?<![\w-])" + re.escape(anchor).replace(r"\ ", r"\s+")
                         + r"(?![\w-])", re.I)
        if not pat.search(prose):
            fails.append(f"section 10 anchor {anchor!r} does not appear in section 6 prose")
        if not re.match(r"^/(blog|services|solutions|industries)/[a-z0-9-]+$", target):
            fails.append(f"section 10 target {target!r} is not a site path")
        if target in seen:
            fails.append(f"section 10 target {target!r} listed twice")
        seen.add(target)
    return fails, warns


def blocked_spans(html):
    """Regions no anchor may enter: headings, existing anchors, table cells, tags."""
    spans = []
    for rx in (HEAD, ANCH, CELL, TAGSPAN):
        spans += [(m.start(), m.end()) for m in rx.finditer(html)]
    return spans


def splice(html, pairs):
    """Insert anchors by offset. Never parses or re-serialises the HTML.

    BeautifulSoup decodes `&nbsp;` and `Post.save()` injects heading ids with a
    raw substring test, so one parser round trip strips the ids and takes the
    table of contents with them.

    Returns (new_html, applied, skipped).
    """
    spans = blocked_spans(html)
    chosen, skipped, seen = [], [], set()
    for anchor, target in pairs:
        t = target.strip("/")
        if t in seen:
            skipped.append((anchor, target, "target already linked"))
            continue
        pat = re.compile(r"(?<![\w-])" + re.escape(anchor).replace(r"\ ", r"[\s]+")
                         + r"(?![\w-])", re.I)
        slot = None
        for m in pat.finditer(html):
            s, e = m.span()
            if any(a < e and s < b for a, b in spans):
                continue
            slot = (s, e)
            break
        if slot is None:
            skipped.append((anchor, target, "no clean slot in prose"))
            continue
        chosen.append((slot, f"https://zyneto.com/{t}", anchor))
        seen.add(t)
        spans.append(slot)

    new = html
    for (s, e), href, _ in sorted(chosen, key=lambda x: -x[0][0]):
        new = new[:s] + f'<a href="{href}">' + new[s:e] + "</a>" + new[e:]

    assert TAGS.sub("", new) == TAGS.sub("", html), "visible text changed"
    assert new.count("<a ") == html.count("<a ") + len(chosen), "anchor count wrong"
    assert HEAD.findall(new) == HEAD.findall(html), "headings changed"
    assert not re.search(r"<a\b[^>]*>(?:(?!</a>).)*<a\b", new, re.S), "nested anchor"
    return new, chosen, skipped


def strip_brief_header(html):
    """Drop the SEO brief block if the converter joined it into the body.

    Fifteen posts shipped with it as their opening paragraph. It is inert: one
    leading <p>, no heading, no anchor, so removing it cannot disturb the table
    of contents.
    """
    m = re.match(r"<p><strong>SEO Title:</strong>.*?Reading Time:</strong>[^<]*</p>\s*",
                 html, re.S)
    if not m:
        return html, 0
    assert "</h" not in m.group(0) and "<a " not in m.group(0), "brief header is not inert"
    return html[m.end():], len(m.group(0))
