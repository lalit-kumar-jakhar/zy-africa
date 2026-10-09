"""Convert the Zyneto markdown deliverables into the CKEditor house HTML format.

Reverse-engineered from live posts on api.zyneto.com:
  - description holds the BODY only, starting at <p>. No H1 (the frontend
    renders the H1 from `title`).
  - headings are <h2><strong>Text</strong></h2> / <h3><strong>...</strong></h3>
    with NO attributes on the tag itself (the server injects id="contentid-N").
  - links are absolute https://zyneto.com/... with target="_blank".
  - CTA banners are an 800x300 <img> wrapped in a link to /contact-us,
    inside its own <p>.

Emits, per source file: the description HTML, the API payload JSON, and a
standalone preview page.
"""

import html
import json
import os
import re
import sys
from zy_paths import zy

BLOG_DIR = zy("Blog")
HTML_DIR = zy("Blog/html")

DEFAULT_AUTHOR = "vikas-choudhary"

CATEGORY_MAP = {
    "ai-memory": "artificial-intelligence",
    "ai-chatbots-for-business": "artificial-intelligence",
    "generative-ai-for-business": "artificial-intelligence",
    "knowledge-graphs-for-business": "artificial-intelligence",
    "predictive-analytics-for-business": "artificial-intelligence",
    "business-process-automation": "artificial-intelligence",
    "fastapi-vs-flask": "framework",
    "web-scraping-for-business": "web-scraping",
}


# ---------------------------------------------------------------- inline

def inline(text):
    """Markdown inline syntax to HTML. Escapes first, so raw < > in prose is safe."""
    text = html.escape(text, quote=False)

    # links: [label](url) -> <a href target=_blank>
    def link(m):
        label, url = m.group(1), m.group(2)
        return f'<a href="{html.escape(url, quote=True)}" target="_blank">{label}</a>'

    text = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", link, text)
    text = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", text)
    text = re.sub(r"(?<![\w*])\*([^*\n]+)\*(?![\w*])", r"<em>\1</em>", text)
    text = re.sub(r"`([^`]+)`", r"<code>\1</code>", text)
    return text.strip()


def cta_block(headline, image_url=None):
    """The house CTA banner: 800x300 image linked to contact-us."""
    if image_url:
        img = (
            f'<img alt="{html.escape(headline, quote=True)}" '
            f'src="{html.escape(image_url, quote=True)}" '
            f'style="height:300px; width:800px"/>'
        )
    else:
        # Visible placeholder the team swaps in CKEditor during review.
        img = (
            f'[CTA BANNER: "{headline}" - replace with the 800x300 image]'
        )
    return (
        '<p><a href="https://zyneto.com/contact-us" target="_blank">'
        f"{img}</a></p>"
    )


# ---------------------------------------------------------------- sections

def split_sections(md):
    """Map '## N. Title' -> body text."""
    out, current, buf = {}, None, []
    for line in md.splitlines():
        m = re.match(r"^##\s+(\d+)\.\s+(.*)$", line)
        if m:
            if current:
                out[current] = "\n".join(buf)
            current, buf = int(m.group(1)), []
        elif current:
            buf.append(line)
    if current:
        out[current] = "\n".join(buf)
    return out


def parse_faqs(text):
    faqs, q, ans = [], None, []
    for line in text.splitlines():
        s = line.strip()
        m = re.match(r"^\*\*(.+?)\*\*$", s)
        if m:
            if q:
                faqs.append({"question": q, "answer": " ".join(ans).strip()})
            q, ans = m.group(1).strip(), []
        elif s and not s.startswith("---") and q:
            ans.append(s)
    if q:
        faqs.append({"question": q, "answer": " ".join(ans).strip()})
    # Deliverables written as "**Q: ...**" / "A: ..." would otherwise ship the
    # literal prefixes into the accordion, where live posts carry none.
    out = []
    for f in faqs:
        if not f["answer"]:
            continue
        out.append({"question": re.sub(r"^Q:\s*", "", f["question"]).strip(),
                    "answer": re.sub(r"^A:\s*", "", f["answer"]).strip()})
    return out


def parse_meta(text):
    meta = {}
    for line in text.splitlines():
        # Leading dash optional, for the same reason as parse_cta_headlines.
        m = re.match(r"^-?\s*\*\*(.+?):\*\*\s*(.*)$", line.strip())
        if m:
            meta[m.group(1).strip().lower()] = m.group(2).strip()
    return meta


def parse_brief_meta(body_md):
    """The SEO brief header that opens section 6, as a meta dict.

    Section 9 is the documented home for H1 / SEO Title / Meta Title / Meta
    Description / URL Slug, and `gate_article.py` reads Meta Title and Meta
    Description from the section 6 header instead. Two October 2026 files carry
    only `Title:` and `Description:` in section 9, so reading section 9 alone
    gave a payload whose title was the slug and whose meta_description was
    empty. Section 9 still wins where it has the key.
    """
    parts = re.split(r"^---\s*$", body_md, maxsplit=1, flags=re.M)
    if len(parts) != 2:
        return {}
    return parse_meta(parts[0])


def parse_cta_headlines(text):
    # The dash is optional. Batches written before 2026-08-20 use a bullet
    # list under each banner heading; wave 1 writes the fields as plain
    # lines. Both are unambiguous, and a strict pattern silently returned
    # zero headlines rather than failing, which surfaced later as a
    # missing CTA placeholder.
    return re.findall(r"^-?\s*Headline:\s*(.+)$", text, re.M)


def parse_tags(section2, limit=6):
    """Tags from the keyword strategy: the primary keyword plus the secondaries.

    Tag rows are auto-created by the API when they do not exist yet.
    """
    tags = []
    for label in ("Primary", "Secondary"):
        m = re.search(rf"^\*\*{label}:\*\*\s*(.+)$", section2, re.M)
        if not m:
            continue
        for raw in m.group(1).split(","):
            t = raw.strip()
            # Keep tags short enough to read as tags rather than sentences.
            if t and len(t) <= 40 and t.lower() not in {x.lower() for x in tags}:
                tags.append(t)
    return tags[:limit]


# ---------------------------------------------------------------- body

SEO_BRIEF_FIELD = re.compile(
    r"^\*\*(SEO Title|Meta Title|Meta Description|URL Slug|Target Keyword|"
    r"Search Intent|Estimated Difficulty|Estimated Traffic Potential|"
    r"Reading Time|H1|Primary Keyword|Word Count):\*\*", re.I)


def strip_seo_brief(md):
    """Drop the per-article metadata header that opens section 6.

    Section 6 begins with SEO Title / Meta Title / Meta Description / Slug /
    Reading Time and so on, then a `---`, then the article. Those lines are
    brief-keeping, not body copy, and convert_body skips `---` while joining
    consecutive lines into one paragraph, so the whole block shipped as the
    FIRST PARAGRAPH of four published posts on 2026-08-11. It was invisible in
    every structural check because it is well-formed HTML in the right place.

    Only strips when everything above the first `---` is blank lines or
    `**Field:** value` lines, so an article that legitimately opens with prose
    is left alone.
    """
    parts = re.split(r"^---\s*$", md, maxsplit=1, flags=re.M)
    if len(parts) != 2:
        return md
    head, rest = parts
    lines = [ln.strip() for ln in head.splitlines() if ln.strip()]
    if not lines:
        return md
    if all(SEO_BRIEF_FIELD.match(ln) for ln in lines):
        return rest
    return md


def convert_body(md, cta_headlines):
    """Section 6 markdown -> house HTML. Drops the H1 and the SEO brief header."""
    lines = strip_seo_brief(md).splitlines()
    out, i, cta_i = [], 0, 0
    notes = []

    while i < len(lines):
        line = lines[i]
        s = line.strip()

        if not s or s == "---":
            i += 1
            continue

        # H1 -> dropped (frontend renders it from `title`)
        if re.match(r"^#\s+", s):
            i += 1
            continue

        # visual markers
        m = re.match(r"^\*\*\[VISUAL\s+(\d+):\s*(.+?)\]\*\*$", s)
        if m:
            label = m.group(2)
            if "CTA banner" in label:
                headline = (
                    cta_headlines[cta_i] if cta_i < len(cta_headlines) else "Talk to Zyneto"
                )
                cta_i += 1
                out.append(cta_block(headline))
                notes.append(f"CTA banner placeholder: {headline}")
            else:
                short = re.sub(r"\.\s*Full brief.*$", "", label).replace("place the ", "")
                out.append(f"<p>[DIAGRAM: {short} - replace with the image]</p>")
                notes.append(f"Diagram placeholder: {short}")
            i += 1
            continue

        # headings
        m = re.match(r"^(#{2,3})\s+(.*)$", s)
        if m:
            tag = "h2" if len(m.group(1)) == 2 else "h3"
            out.append(f"<{tag}><strong>{inline(m.group(2))}</strong></{tag}>")
            i += 1
            continue

        # tables
        if s.startswith("|"):
            rows = []
            while i < len(lines) and lines[i].strip().startswith("|"):
                rows.append(lines[i].strip())
                i += 1
            out.append(convert_table(rows))
            continue

        # lists
        if re.match(r"^[-*]\s+", s):
            items = []
            while i < len(lines) and re.match(r"^[-*]\s+", lines[i].strip()):
                items.append(inline(re.sub(r"^[-*]\s+", "", lines[i].strip())))
                i += 1
            out.append("<ul>" + "".join(f"<li>{x}</li>" for x in items) + "</ul>")
            continue

        if re.match(r"^\d+\.\s+", s):
            items = []
            while i < len(lines) and re.match(r"^\d+\.\s+", lines[i].strip()):
                items.append(inline(re.sub(r"^\d+\.\s+", "", lines[i].strip())))
                i += 1
            out.append("<ol>" + "".join(f"<li>{x}</li>" for x in items) + "</ol>")
            continue

        # paragraph (join wrapped lines)
        para = [s]
        i += 1
        while i < len(lines):
            nxt = lines[i].strip()
            if (not nxt or nxt.startswith("#") or nxt.startswith("|")
                    or nxt.startswith("**[VISUAL") or re.match(r"^[-*]\s+", nxt)
                    or re.match(r"^\d+\.\s+", nxt) or nxt == "---"):
                break
            para.append(nxt)
            i += 1
        out.append(f"<p>{inline(' '.join(para))}</p>")

    return "\n".join(out), notes


def convert_table(rows):
    """Emit CKEditor's own table markup, matching the published posts.

    Deliberately no <thead>/<th>. The site styles tables with
    `table > tbody > tr > td { padding: 8px }` and provides no borders at all,
    so a semantic thead/th table renders unpadded and borderless. The header
    row here is the first <tbody> row with <strong>, and every cell carries the
    inline border CKEditor would have written.
    """
    cells = [[c.strip() for c in r.strip("|").split("|")] for r in rows]
    if len(cells) >= 2 and all(re.fullmatch(r":?-{2,}:?", c or "-") for c in cells[1]):
        head, body = cells[0], cells[2:]
    else:
        head, body = None, cells

    ncols = max(len(r) for r in cells)
    colw = int(760 / ncols)  # roughly the content column, as CKEditor writes px
    td_style = ("border-color:#000000; border-style:solid; border-width:1px; "
                f"vertical-align:top; width:{colw}px")

    def cell(text, bold=False):
        inner = inline(text)
        if bold:
            inner = f"<strong>{inner}</strong>"
        return (f'<td style="{td_style}">'
                f'<p style="text-align:center"><span style="color:#000000">'
                f"{inner}</span></p></td>")

    parts = ['<table cellspacing="0" style="border-collapse:collapse; '
             'border:none; width:100%">', "<tbody>"]
    if head:
        parts.append("<tr>" + "".join(cell(c, bold=True) for c in head) + "</tr>")
    for row in body:
        parts.append("<tr>" + "".join(cell(c) for c in row) + "</tr>")
    parts.append("</tbody></table>")
    return "".join(parts)


# ---------------------------------------------------------------- driver

def convert_file(path):
    md = open(path).read()
    sections = split_sections(md)

    slug = os.path.basename(path).replace(".md", "")
    body_md = sections.get(6, "")

    m = re.search(r"^#\s+(.+)$", body_md, re.M)
    h1 = m.group(1).strip() if m else None

    meta = dict(parse_brief_meta(body_md))
    meta.update({k: v for k, v in parse_meta(sections.get(9, "")).items() if v})

    title = (meta.get("h1") or h1 or meta.get("seo title")
             or meta.get("title") or slug)
    faqs = parse_faqs(sections.get(7, ""))
    ctas = parse_cta_headlines(sections.get(8, ""))

    body_html, notes = convert_body(body_md, ctas)

    tags = parse_tags(sections.get(2, ""))
    keywords = ", ".join(tags)

    payload = {
        "category": CATEGORY_MAP.get(slug, "artificial-intelligence"),
        "author": DEFAULT_AUTHOR,
        "title": title,
        "slug": meta.get("url slug") or slug,
        "meta_title": (meta.get("meta title") or meta.get("seo title")
                       or meta.get("title") or title),
        "meta_description": (meta.get("meta description")
                             or meta.get("description") or ""),
        "meta_keywords": keywords[:200],
        "description": body_html,
        "tags": tags,
        "faqs": faqs,
        "status": "Review",
    }
    return payload, notes, title


def words(html_str):
    return len(re.findall(r"\b[\w'-]+\b", re.sub(r"<[^>]+>", " ", html_str)))


PREVIEW = """<!doctype html>
<html lang="en"><head><meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>{title}</title>
<style>
body{{margin:0;background:#fff;color:#14121a;
font:16px/1.65 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif}}
.wrap{{max-width:760px;margin:0 auto;padding:40px 20px 80px}}
h1{{font-size:34px;line-height:1.25;margin:0 0 28px}}
h2{{font-size:24px;line-height:1.3;margin:40px 0 12px}}
h3{{font-size:19px;margin:28px 0 10px}}
p{{margin:0 0 16px}}
img{{max-width:100%;height:auto !important;width:100% !important}}
table{{width:100%;margin:0 0 20px}}
.faq{{margin-top:56px;border-top:2px solid #e0dbe9;padding-top:24px}}
.faq dt{{font-weight:600;margin-top:18px}}
.faq dd{{margin:6px 0 0}}
.note{{background:#f6f4fa;border:1px solid #e0dbe9;border-radius:8px;
padding:14px 16px;margin:0 0 32px;font-size:14px}}
</style></head><body><div class="wrap">
<div class="note">Preview only, not the published page. slug <b>{slug}</b> |
{wordcount} body words | {h2count} h2 | {imgcount} img | {faqcount} FAQs</div>
<h1>{title}</h1>
{body}
<div class="faq"><h2>FAQs</h2><dl>{faqs}</dl></div>
</div></body></html>
"""


def write_outputs(path):
    payload, notes, title = convert_file(path)
    slug = payload["slug"]
    os.makedirs(HTML_DIR, exist_ok=True)

    html_file = os.path.join(HTML_DIR, f"{slug}.html")
    json_file = os.path.join(HTML_DIR, f"{slug}.payload.json")
    prev_file = os.path.join(HTML_DIR, f"{slug}.preview.html")

    body = payload["description"]
    with open(html_file, "w") as fh:
        fh.write(body + "\n")
    with open(json_file, "w") as fh:
        json.dump(payload, fh, indent=2, ensure_ascii=False)
        fh.write("\n")

    faq_html = "".join(
        f"<dt>{html.escape(f['question'])}</dt><dd>{html.escape(f['answer'])}</dd>"
        for f in payload["faqs"])
    with open(prev_file, "w") as fh:
        fh.write(PREVIEW.format(
            title=html.escape(payload["title"]), slug=slug, body=body,
            faqs=faq_html, wordcount=words(body),
            h2count=body.count("<h2>"), imgcount=body.count("<img"),
            faqcount=len(payload["faqs"])))

    return payload, notes, (html_file, json_file, prev_file)


def resolve(arg):
    if os.path.isfile(arg):
        return arg
    name = arg[:-3] if arg.endswith(".md") else arg
    cand = os.path.join(BLOG_DIR, f"{name}.md")
    if not os.path.isfile(cand):
        raise SystemExit(f"no such markdown: {arg}")
    return cand


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("-")]
    if not args:
        raise SystemExit("usage: md_to_house_html.py <slug-or-path> [...]")
    for arg in args:
        path = resolve(arg)
        payload, notes, files = write_outputs(path)
        body = payload["description"]
        print(os.path.basename(path))
        print(f"  title            {payload['title']}")
        print(f"  slug             {payload['slug']}")
        print(f"  meta_title       {payload['meta_title']} "
              f"({len(payload['meta_title'])}c)")
        print(f"  meta_description {len(payload['meta_description'])}c")
        print(f"  meta_keywords    {payload['meta_keywords']}")
        print(f"  tags             {payload['tags']}")
        print(f"  body             {words(body)} words | "
              f"{body.count('<h2>')} h2 | {body.count('<h3>')} h3 | "
              f"{body.count('<table')} tables | {body.count('<img')} img")
        print(f"  faqs             {len(payload['faqs'])}")
        for n in notes:
            print(f"  note             {n}")
        for f in files:
            print(f"  wrote            {f}")


if __name__ == "__main__":
    main()
