"""Reusable SVG diagram primitives for Zyneto blog inline images.

Light background (the blog body is white), Zyneto palette, consistent type
scale. Every builder returns a full HTML document; render.sh rasterizes it
through headless Chrome at 2x.
"""

import base64 as _b64
import functools as _ft
import html as _html
import io as _io
import os as _os
from zy_paths import zy

W = 1200

# ---------------------------------------------------------------- type scale
#
# AN INLINE DIAGRAM IS NEVER SEEN AT 1200px. It renders inside the article
# column, `w-full lg:w-5/9` of a centred container, which is roughly 700 CSS px
# on a typical desktop and about 343px on a phone, where the column goes full
# width below the 767px breakpoint. A size in these 1200-unit coordinates
# therefore lands on screen at ~0.58x desktop and ~0.29x mobile.
#
# The original scale ran 12.5u to 17u, which is 7.3px to 9.9px on desktop and
# under 5px on mobile. Same mistake as the feature images: authored and reviewed
# at full width, where it all looks fine.
#
# Diagram height is elastic (doc() takes whatever height the content needs), so
# unlike the fixed 1200x812 feature canvas, growing the type costs vertical
# space rather than forcing a redesign. Width is the real constraint.
DIAGRAM_DISPLAY_PX = 700
MIN_ON_SCREEN_PX = 13.0


def px_at(units, display=DIAGRAM_DISPLAY_PX):
    """What `units` of font-size actually measures on screen, in CSS px."""
    return units * display / W


def units_for(px, display=DIAGRAM_DISPLAY_PX):
    """Inverse: design units needed to render at `px` on screen."""
    return px * W / display


# Named steps, so a builder never invents its own number.
#
# DELIBERATELY MORE MODEST THAN THE FEATURE-IMAGE SCALE. A first pass set these
# at 42/28/26/23 by copying the reasoning from the hero images, and the result
# read as oversized: the text started to dominate the diagram instead of
# labelling it. The reason is the display width. A feature image is squeezed
# into a 2/5 column (~500px, 0.42x), but a diagram gets the full article column
# (~700px, 0.58x), so it needs noticeably LESS scaling up to land in the same
# place on screen. Same principle, different multiplier - do not copy numbers
# between the two files.
#
# On-screen desktop sizes in brackets. Mobile is roughly half again, so a
# diagram that only works at desktop size is too dense and should be simplified
# rather than shrunk.
TITLE = 34        # 19.8px
SUBTITLE = 24     # 14.0px
LABEL = 24        # 14.0px  panel headers, node titles
BODY = 22         # 12.8px  the default for anything readable
SMALL = 20        # 11.7px  arrow labels, secondary notes - the floor
MIN_SIZE = 20

# Logo, embedded as a data URI so the rendered HTML has no external file
# dependency. Diagrams sit on a white background, so the black mark is correct;
# the white one is for the dark CTA banners.
LOGO_BLACK = zy("zyneto-logo-black.png")
LOGO_WHITE = zy("zyneto-logo-white.png")
LOGO_W = 132          # displayed width in SVG units
LOGO_X = W - 60 - LOGO_W
LOGO_Y = 40


@_ft.lru_cache(maxsize=4)
def logo_data_uri(path=LOGO_BLACK, width=LOGO_W * 3):
    """Downscale the logo and return it as a base64 data URI (3x for retina)."""
    if not _os.path.exists(path):
        return None
    from PIL import Image
    im = Image.open(path).convert("RGBA")
    h = round(width * im.size[1] / im.size[0])
    im = im.resize((width, h), Image.LANCZOS)
    buf = _io.BytesIO()
    im.save(buf, format="PNG", optimize=True)
    return "data:image/png;base64," + _b64.b64encode(buf.getvalue()).decode()


def logo_svg():
    uri = logo_data_uri()
    if not uri:
        return ""
    h = round(LOGO_W * 521 / 1453)
    return (f'<image href="{uri}" x="{LOGO_X}" y="{LOGO_Y}" width="{LOGO_W}" '
            f'height="{h}" preserveAspectRatio="xMaxYMin meet"/>')

INK = "#14121a"
MUTED = "#6b6577"
LINE = "#e7e3ee"
CARD = "#faf9fc"
TINT = "#f3eefb"
ACCENT = "#9900ff"
GOOD = "#1e8449"
BAD = "#c0392b"

# Rough advance widths per point of font size, measured against the rendered
# system sans. Good enough for wrapping decisions.
_AVG = 0.52
_BOLD = 0.57


def esc(s):
    return _html.escape(str(s), quote=False)


def wrap(text, width_px, size, bold=False):
    """Greedy wrap into lines that fit width_px at the given font size."""
    per = size * (_BOLD if bold else _AVG)
    limit = max(1, int(width_px / per))
    words, lines, cur = str(text).split(), [], ""
    for w in words:
        trial = (cur + " " + w).strip()
        if len(trial) <= limit:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


def text_block(x, y, content, size=BODY, fill=INK, width=None, weight=None,
               anchor="start", leading=1.45):
    """Multi-line text as stacked <text> elements. Returns (svg, height)."""
    w = f' font-weight="{weight}"' if weight else ""
    lines = wrap(content, width, size, bold=bool(weight)) if width else [str(content)]
    out, step = [], size * leading
    for i, ln in enumerate(lines):
        out.append(
            f'<text x="{x}" y="{y + i * step:.1f}" font-size="{size}" '
            f'fill="{fill}" text-anchor="{anchor}"{w}>{esc(ln)}</text>'
        )
    return "\n".join(out), step * len(lines)


# Option C: no top gradient bar and no footer URL. The bar read as UI chrome
# (making each diagram look like a screenshot of a page) and the URL duplicated
# the logo. A hairline border replaces the bar's accidental job of giving the
# white-on-white image a visible edge against the white article background.
SHOW_TOP_BAR = False
SHOW_FOOTER_URL = False
BORDER = "#e0dbe9"


def doc(body, height, title_h=None):
    # Heights are computed from wrapped-text metrics, so they arrive as floats.
    # The viewport must be a whole number of pixels or the rasterizer rounds
    # inconsistently between the SVG and the window size.
    height = int(round(height))
    # NOTE: the default text colour is set as a presentation attribute on the
    # root <svg>, never in CSS. A CSS `text{{fill:...}}` rule outranks every
    # per-element fill="" attribute in SVG, which silently flattens all coloured
    # labels (white-on-gradient, purple headings, red/green notes) to one ink.
    return f"""<!doctype html><html><head><meta charset="utf-8"><style>
html,body{{margin:0;padding:0;background:#fff}}svg{{display:block}}
text{{font-family:-apple-system,"Helvetica Neue","Segoe UI",Arial,sans-serif}}
</style></head><body>
<svg width="{W}" height="{height}" viewBox="0 0 {W} {height}" fill="{INK}" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="brand" x1="1" y1="1" x2="0" y2="0">
    <stop offset="0%" stop-color="#ff732d"/><stop offset="50%" stop-color="#ff0044"/>
    <stop offset="100%" stop-color="#9900ff"/>
  </linearGradient>
  <marker id="arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7"
          orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="{ACCENT}"/></marker>
  <marker id="arwm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7"
          orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="{MUTED}"/></marker>
</defs>
<rect width="{W}" height="{height}" fill="#fff"/>
{'<rect width="%d" height="6" fill="url(#brand)"/>' % W if SHOW_TOP_BAR else ''}
{logo_svg()}
{body}
{'<text x="60" y="%d" font-size="13" fill="#a49db3">zyneto.com</text>' % (height-22) if SHOW_FOOTER_URL else ''}
<rect x="1" y="1" width="{W-2}" height="{height-2}" rx="12" fill="none" stroke="{BORDER}" stroke-width="2"/>
</svg></body></html>"""


def header(title, subtitle=None):
    """Title, optional subtitle, and the height they consume.

    BOTH STAY ON ONE LINE, shrinking within a legible range to do it. Letting a
    title wrap looks like the more generous option, but every spec discards the
    returned height and positions its body at a hardcoded y, so a second line
    lands on top of the diagram. Verified: the extract-data cleaning diagram put
    "cleaned" and its whole subtitle behind the two comparison panels.

    Shrinking is bounded. If a string will not fit at the floor the build fails
    and the fix is to shorten the copy, not to ship type nobody can read.
    """
    avail = LOGO_X - 60 - 24          # keep clear of the logo, top right
    tsize = TITLE
    while len(wrap(title, avail, tsize, bold=True)) > 1 and tsize > 30:
        tsize -= 1
    if len(wrap(title, avail, tsize, bold=True)) > 1:
        raise OverflowError_(
            f"diagram title {title!r} needs two lines even at {tsize}u "
            f"({px_at(tsize):.1f}px). Shorten it to about "
            f"{int(avail / (tsize * _BOLD))} characters.")
    s = (f'<text x="60" y="{60 + tsize * 0.76:.0f}" font-size="{tsize}" '
         f'font-weight="700" letter-spacing="-0.4">{esc(title)}</text>')

    if subtitle:
        ssize = SUBTITLE
        while len(wrap(subtitle, W - 120, ssize)) > 1 and ssize > MIN_SIZE:
            ssize -= 1
        if len(wrap(subtitle, W - 120, ssize)) > 1:
            raise OverflowError_(
                f"diagram subtitle {subtitle!r} needs two lines even at {ssize}u. "
                f"Shorten it to about {int((W - 120) / (ssize * _AVG))} characters.")
        s += (f'\n<text x="60" y="{60 + tsize * 0.76 + ssize * 1.62:.0f}" '
              f'font-size="{ssize}" fill="{MUTED}">{esc(subtitle)}</text>')
    # Fixed, and deliberately unchanged from the old 140/112: the specs lay their
    # bodies out against these numbers.
    return s, (140 if subtitle else 112)


def footnote(y, text, max_lines=2):
    """Caption line under a diagram.

    WRAPS. It did not until 2026-08-11, and nothing warned: a footnote longer
    than about 115 characters was emitted as one <text> that ran straight off
    the 1200u canvas and got cropped by the rasterizer. Found by LOOKING at a
    rendered PNG that ended mid-word on "the part left out of the busin".
    13 of 16 captions in the ecommerce cluster were over the limit.

    A single line renders byte-identically to the old behaviour, so no existing
    diagram moves. Extra lines stack downward into the slack every builder
    already reserves below the footnote baseline.
    """
    lines = wrap(text, W - 120, BODY)
    if len(lines) > max_lines:
        raise OverflowError_(
            f"footnote needs {len(lines)} lines, max is {max_lines}. "
            f"Shorten it: {text[:60]}...")
    step = int(BODY * 1.45)
    return "\n".join(
        f'<text x="60" y="{y + i * step}" font-size="{BODY}" fill="{MUTED}">'
        f'{esc(ln)}</text>' for i, ln in enumerate(lines))


def panel(x, y, w, h, label, accent=ACCENT, fill=CARD):
    """Card with a tinted header strip."""
    return f"""<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="16" fill="{fill}" stroke="{LINE}" stroke-width="2"/>
<path d="M{x} {y+16} a16 16 0 0 1 16 -16 h{w-32} a16 16 0 0 1 16 16 v54 h-{w} z" fill="{TINT}"/>
<text x="{x+26}" y="{y+48}" font-size="{LABEL}" font-weight="700" fill="{accent}">{esc(label)}</text>"""


class OverflowError_(Exception):
    """Raised when content cannot fit its box. Better a loud failure than a
    diagram that silently ships with text running past its container."""


def check_fit(name, used, available):
    if used > available + 0.5:
        raise OverflowError_(
            f"{name}: content needs {used:.0f}px but the box is {available:.0f}px"
        )


def chip(x, y, w, text, size=BODY, fill="#fff", stroke=LINE, tcol=INK,
         pad=22, min_size=MIN_SIZE):
    """Rounded row that grows to fit its text. Returns (svg, height).

    Shrinks the type before wrapping, and wraps before it would ever overflow,
    so a long label can never run outside the rounded rect.
    """
    inner = w - 2 * pad
    lines = wrap(text, inner, size)
    while len(lines) > 1 and size > min_size:
        size -= 0.5
        lines = wrap(text, inner, size)
    lh = size * 1.35
    h = max(30, len(lines) * lh + 15)
    first = y + (h - (len(lines) - 1) * lh) / 2 + size * 0.36
    svg = [f'<rect x="{x}" y="{y}" width="{w}" height="{h:.1f}" rx="8" '
           f'fill="{fill}" stroke="{stroke}"/>']
    for i, ln in enumerate(lines):
        svg.append(f'<text x="{x+pad}" y="{first + i*lh:.1f}" font-size="{size}" '
                   f'fill="{tcol}">{esc(ln)}</text>')
    return "\n".join(svg), h


def node_box_height(w, title, sub=None, pad=10):
    """Height a node_box needs for this content at the current type scale.

    Exists so builders can size a row of boxes to its tallest member instead of
    hardcoding a height that was only ever right for the old, smaller type.
    """
    t_h = LABEL * 1.28 * len(wrap(title, w - 24, LABEL, bold=True))
    s_h = (SMALL * 1.34 * len(wrap(sub, w - 20, SMALL)) + 10) if sub else 0
    return t_h + s_h + 2 * pad


def node_box(x, y, w, h, title, sub=None, accent=False):
    """A titled box, optionally with a subtitle, vertically centred as a group.

    Measures before it draws and raises if the wrapped text will not fit. The
    old version positioned title and subtitle at fixed offsets from the box
    centre, so once the type scale grew, "5. FINISH / update and confirm" and
    "1. GOAL / change delivery address" simply drew past the bottom edge with
    nothing complaining.
    """
    fill = "url(#brand)" if accent else "#fff"
    tcol = "#fff" if accent else INK
    scol = "#f0e2ff" if accent else MUTED
    pad = 10

    t_lines = wrap(title, w - 24, LABEL, bold=True)
    t_h = LABEL * 1.28 * len(t_lines)
    s_lines = wrap(sub, w - 20, SMALL) if sub else []
    s_h = SMALL * 1.34 * len(s_lines) + (10 if sub else 0)
    if t_h + s_h > h - 2 * pad:
        raise OverflowError_(
            f"node_box {title!r}: text needs {t_h + s_h + 2 * pad:.0f}u but the "
            f"box is {h}u tall. Make it taller or shorten the label.")

    top = y + (h - (t_h + s_h)) / 2
    del pad
    s = (f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="12" fill="{fill}" '
         f'stroke="{"none" if accent else LINE}" stroke-width="2"/>')
    tb, _ = text_block(x + w / 2, top + LABEL * 0.92, title, size=LABEL, fill=tcol,
                       width=w - 24, weight="600", anchor="middle", leading=1.28)
    s += tb
    if sub:
        sb, _ = text_block(x + w / 2, top + t_h + 10 + SMALL * 0.9, sub, size=SMALL,
                           fill=scol, width=w - 20, anchor="middle", leading=1.34)
        s += sb
    return s


def arrow(x1, y1, x2, y2, label=None, muted=False, dashed=False):
    col = MUTED if muted else ACCENT
    mk = "arwm" if muted else "arw"
    d = ' stroke-dasharray="6 5"' if dashed else ""
    s = (f'<path d="M{x1} {y1} L{x2} {y2}" fill="none" stroke="{col}" '
         f'stroke-width="2.5" marker-end="url(#{mk})"{d}/>')
    if label:
        mx, my = (x1 + x2) / 2, (y1 + y2) / 2 - 16
        s += (f'<text x="{mx}" y="{my}" font-size="{SMALL}" font-weight="600" '
              f'fill="{col}" text-anchor="middle">{esc(label)}</text>')
    return s


def bullets(x, y, items, width, size=BODY, gap=46, marker=None, mcol=ACCENT):
    """Vertical list. marker: None | 'dot' | 'check' | 'cross'."""
    s, cy = [], y
    for it in items:
        if marker == "check":
            s.append(f'<path d="M{x} {cy-5} l5 6 l9 -12" fill="none" stroke="{GOOD}" '
                     f'stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>')
            tx = x + 24
        elif marker == "cross":
            s.append(f'<path d="M{x} {cy-10} l12 12 M{x+12} {cy-10} l-12 12" fill="none" '
                     f'stroke="{BAD}" stroke-width="2.6" stroke-linecap="round"/>')
            tx = x + 26
        elif marker == "dot":
            s.append(f'<circle cx="{x+4}" cy="{cy-5}" r="4" fill="{mcol}"/>')
            tx = x + 20
        else:
            tx = x
        tb, h = text_block(tx, cy, it, size=size, width=width - (tx - x))
        s.append(tb)
        cy += max(h, gap)
    return "\n".join(s), cy - y


# ---------------------------------------------------------------- builders

def build_comparison(title, subtitle, left, right, mid_label=None, foot=None,
                     panel_top=140):
    """Two labelled panels side by side, height derived from content.

    left/right: dict(label, intro, rows[], note, note_col)
    """
    head, _ = header(title, subtitle)
    pad_x, pw, iw = 26, 500, 448

    # Lay each side out first so the panel can be sized to whichever is taller.
    sides = []
    for side in (left, right):
        parts, cy = [], panel_top + 106
        if side.get("intro"):
            tb, h = text_block(pad_x, cy, side["intro"], size=SMALL, fill=MUTED, width=iw)
            parts.append(("raw", tb))
            cy += h + 10
        for row in side.get("rows", []):
            svg, h = chip(pad_x, cy - 14, iw, row)
            parts.append(("raw", svg))
            cy += h + 12
        sides.append((side, parts, cy))

    content_bottom = max(cy for _, _, cy in sides)
    note_band = 44 if (left.get("note") or right.get("note")) else 8
    panel_h = content_bottom - panel_top + note_band
    height = panel_top + panel_h + 96

    body = [head]
    for (side, parts, cy), x in zip(sides, (60, 640)):
        body.append(panel(x, panel_top, pw, panel_h, side["label"]))
        # parts were laid out in panel-local coordinates; translate as a group
        inner = "\n".join(svg for _, svg in parts)
        body.append(f'<g transform="translate({x},0)">{inner}</g>')
        if side.get("note"):
            check_fit(f"note '{side['note'][:24]}'", cy + 20,
                      panel_top + panel_h - 18)
            body.append(f'<text x="{x+pad_x}" y="{panel_top+panel_h-30}" font-size="{BODY}" '
                        f'fill="{side.get("note_col", INK)}">{esc(side["note"])}</text>')
    if mid_label:
        body.append(f'<text x="600" y="{panel_top+panel_h/2}" font-size="{SMALL}" font-weight="700" '
                    f'fill="{ACCENT}" text-anchor="middle">{esc(mid_label)}</text>')
    if foot:
        body.append(footnote(height - 60, foot))
    return doc("\n".join(body), height)


def build_flow(title, subtitle, steps, foot=None, loop=None, height=520):
    """Horizontal pipeline. steps: list of dict(title, sub)."""
    head, _ = header(title, subtitle)
    body = [head]
    n = len(steps)
    gap, margin = 26, 60
    bw = (W - 2 * margin - gap * (n - 1)) / n
    y = 200
    bh = max(108, max(node_box_height(bw, st["title"], st.get("sub"))
                      for st in steps))
    for i, st in enumerate(steps):
        x = margin + i * (bw + gap)
        body.append(node_box(x, y, bw, bh, st["title"], st.get("sub"),
                             accent=st.get("accent", False)))
        if i < n - 1:
            body.append(arrow(x + bw + 5, y + bh / 2, x + bw + gap - 5, y + bh / 2))
    if loop:
        y0 = y + bh + 46
        body.append(f'<path d="M{margin+bw*0.5} {y+bh+4} V {y0} H {margin+(n-0.5)*bw+(n-1)*gap} '
                    f'V {y+bh+4}" fill="none" stroke="{MUTED}" stroke-width="2" '
                    f'stroke-dasharray="6 5" marker-end="url(#arwm)"/>')
        body.append(f'<text x="{W/2}" y="{y0+30}" font-size="{SMALL}" fill="{MUTED}" '
                    f'text-anchor="middle">{esc(loop)}</text>')
    height = max(height, y + bh + (92 if loop else 0) + 116)
    if foot:
        body.append(footnote(height - 64, foot))
    return doc("\n".join(body), height)


def build_cards(title, subtitle, cards, foot=None):
    """N equal cards, height derived from the tallest card's content."""
    head, _ = header(title, subtitle)
    n = len(cards)
    gap, margin, y, pad = 24, 60, 150, 22
    cw = (W - 2 * margin - gap * (n - 1)) / n
    iw = cw - 2 * pad

    laid = []
    for c in cards:
        parts, cy = [], y + 106
        if c.get("lead"):
            tb, h = text_block(pad, cy, c["lead"], size=LABEL, width=iw, weight="600")
            parts.append(tb)
            cy += h + 10
        if c.get("rows"):
            tb, h = bullets(pad, cy, c["rows"], iw, size=BODY, gap=42, marker="dot")
            parts.append(tb)
            cy += h
        laid.append((c, parts, cy))

    note_band = 40 if any(c.get("note") for c in cards) else 10
    ch = max(cy for _, _, cy in laid) - y + note_band
    height = y + ch + 96

    body = [head]
    for i, (c, parts, cy) in enumerate(laid):
        x = margin + i * (cw + gap)
        body.append(panel(x, y, cw, ch, c["label"]))
        body.append(f'<g transform="translate({x},0)">{"".join(parts)}</g>')
        # Width, not just vertical position. The original check_fit here only
        # compared y coordinates, so a note wider than its card was drawn
        # straight through the panel edge and nothing complained. Caught on a
        # four-card layout where every one of the four notes overflowed.
        # _AVG (0.52) is the conservative constant used for WRAPPING, where
        # erring short is harmless. An overflow check needs the opposite bias,
        # or it rejects text that actually fits. Calibrated against rendered
        # output: "Best for multi-step work with variation" is 39 characters and
        # demonstrably fits a 300u card in the shipped ai-agents-for-business-2
        # diagram, which puts real advance at about 0.385. The 5% tolerance
        # keeps borderline-but-fine content from failing the build.
        adv, tol = 0.385, 1.05
        if len(c["label"]) * LABEL * adv > (cw - 2 * pad) * tol:
            raise OverflowError_(
                f"card label {c['label']!r} is wider than its {cw:.0f}u card")
        if c.get("note"):
            if len(c["note"]) * SMALL * adv > (cw - 2 * pad) * tol:
                raise OverflowError_(
                    f"card note {c['note']!r} needs about "
                    f"{len(c['note']) * SMALL * adv:.0f}u but the card gives "
                    f"{cw - 2 * pad:.0f}u. Shorten it or use fewer cards.")
            check_fit(f"card note '{c.get('note','')[:22]}'", cy + 16, y + ch - 18)
            body.append(f'<text x="{x+pad}" y="{y+ch-26}" font-size="{SMALL}" '
                        f'fill="{c.get("note_col", MUTED)}">{esc(c["note"])}</text>')
    if foot:
        body.append(footnote(height - 60, foot))
    return doc("\n".join(body), height)


def build_ladder(title, subtitle, rungs, foot=None, height=620):
    """Ascending steps. rungs: dict(label, q, sub, accent)."""
    head, _ = header(title, subtitle)
    body = [head]
    n = len(rungs)
    # base_y leaves clearance for the footnote at height-64.
    base_y, sh, bw = 436, 74, 250
    for i, r in enumerate(rungs):
        x = 60 + i * 268
        y = base_y - i * 82
        acc = r.get("accent")
        body.append(f'<rect x="{x}" y="{y}" width="{bw}" height="{sh}" rx="12" '
                    f'fill="{"url(#brand)" if acc else CARD}" '
                    f'stroke="{"none" if acc else LINE}" stroke-width="2"/>')
        body.append(f'<text x="{x+20}" y="{y+40}" font-size="{LABEL}" font-weight="700" '
                    f'fill="{"#fff" if acc else ACCENT}">{esc(r["label"])}</text>')
        tb, _ = text_block(x + 20, y + 62, r["q"], size=BODY,
                           fill="#f6ecff" if acc else MUTED, width=bw - 40)
        body.append(tb)
        if i < n - 1:
            body.append(arrow(x + bw + 4, y + sh / 2 - 6, x + 268 - 4, y - 82 + sh / 2 + 20,
                              muted=True))
    if foot:
        body.append(footnote(height - 64, foot))
    return doc("\n".join(body), height)


def build_checklist(title, subtitle, do_items, avoid_items, do_label="Do this",
                    avoid_label="Avoid this", foot=None):
    head, _ = header(title, subtitle)
    top, pad = 150, 28
    sides = []
    for label, items, mark, col, x in (
        (do_label, do_items, "check", GOOD, 60),
        (avoid_label, avoid_items, "cross", BAD, 640),
    ):
        svg, h = bullets(pad, top + 104, items, 444, size=BODY, gap=44, marker=mark)
        sides.append((label, col, x, svg, top + 92 + h))

    ph = max(b for *_, b in sides) - top + 24
    height = top + ph + 96
    body = [head]
    for label, col, x, svg, _ in sides:
        body.append(panel(x, top, 500, ph, label, accent=col))
        body.append(f'<g transform="translate({x},0)">{svg}</g>')
    if foot:
        body.append(footnote(height - 60, foot))
    return doc("\n".join(body), height)
