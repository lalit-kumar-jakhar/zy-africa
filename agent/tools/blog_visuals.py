"""Feature images and CTA banners for all 8 posts.

Each post gets its own topic photo, its own motif drawn from that post's
content, and its own treatment (brightness, scrim strength, crop focus, motif
layout) so the set does not look like one template repeated eight times.
"""

import base64
import io
import os
import subprocess

from PIL import Image, ImageDraw, ImageEnhance, ImageFilter

from diagram_kit import LOGO_WHITE, esc, logo_data_uri
from zy_paths import zy

CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
OUT = zy("Blog/blog-visuals")
SRC = "/tmp/blogimg"
FW, FH = 1200, 812          # feature: matches the existing 826x560 aspect
CW, CH = 800, 300           # CTA: matches the existing banners
CARD, EDGE, DIM = "#141020", "#3a3150", "#b3abc4"
LOGO_ZONE_CTA = (800 - 36 - 112, 24, 800 - 36, 24 + 40)
# Where feature() actually paints the logo. Export it so layouts can keep clear
# of it instead of each one hardcoding the arithmetic and getting it wrong: the
# widened pipeline bars ran 76u under the logo before this existed.
LOGO_ZONE_FEATURE = (1200 - 96 - 140, 78, 1200 - 96, 78 + round(140 * 521 / 1453))


class Overflow(Exception):
    pass


def check(name, x, y, w, h, cw, ch, avoid=None):
    if x < 0 or y < 0 or x + w > cw or y + h > ch:
        raise Overflow(f"{name}: outside {cw}x{ch}")
    if avoid:
        ax, ay, ax2, ay2 = avoid
        if x < ax2 and x + w > ax and y < ay2 and y + h > ay:
            raise Overflow(f"{name}: collides with logo zone")


# ---------------------------------------------------------------- imaging

def cover(path, w, h, focus=0.5):
    im = Image.open(path).convert("RGB")
    tr, sr = w / h, im.width / im.height
    if sr > tr:
        nw = int(im.height * tr)
        left = int((im.width - nw) * focus)
        im = im.crop((left, 0, left + nw, im.height))
    else:
        nh = int(im.width / tr)
        im = im.crop((0, (im.height - nh) // 2, im.width, (im.height + nh) // 2))
    return im.resize((w, h), Image.LANCZOS)


def graded(path, w, h, amount=0.34, bright=0.82, focus=0.5):
    im = cover(path, w, h, focus)
    im = ImageEnhance.Color(im).enhance(0.72)
    im = Image.blend(im, Image.new("RGB", im.size, (124, 58, 190)), amount)
    im = ImageEnhance.Contrast(im).enhance(1.10)
    return ImageEnhance.Brightness(im).enhance(bright)


def scrim(im, box, power=0.62, blur=110):
    m = Image.new("L", im.size, 0)
    ImageDraw.Draw(m).rounded_rectangle(box, radius=90, fill=int(255 * power))
    m = m.filter(ImageFilter.GaussianBlur(blur))
    return Image.composite(Image.new("RGB", im.size, (8, 6, 14)), im, m)


def uri(im, q=88):
    b = io.BytesIO()
    im.save(b, format="JPEG", quality=q)
    return "data:image/jpeg;base64," + base64.b64encode(b.getvalue()).decode()


def shell(w, h, body):
    return f"""<!doctype html><html><head><meta charset="utf-8"><style>
html,body{{margin:0;padding:0;background:#0a0810}}svg{{display:block}}
text{{font-family:-apple-system,"Helvetica Neue","Segoe UI",Arial,sans-serif}}
</style></head><body>
<svg width="{w}" height="{h}" viewBox="0 0 {w} {h}" fill="#fff" xmlns="http://www.w3.org/2000/svg">
<defs>
 <linearGradient id="g" x1="1" y1="1" x2="0" y2="0">
  <stop offset="0%" stop-color="#ff732d"/><stop offset="50%" stop-color="#ff0044"/>
  <stop offset="100%" stop-color="#9900ff"/></linearGradient>
 <linearGradient id="gv" x1="0" y1="0" x2="1" y2="1">
  <stop offset="0%" stop-color="#9900ff"/><stop offset="55%" stop-color="#ff0044"/>
  <stop offset="100%" stop-color="#ff732d"/></linearGradient>
 <linearGradient id="topfade" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0%" stop-color="#0a0810" stop-opacity="0.55"/>
  <stop offset="30%" stop-color="#0a0810" stop-opacity="0"/></linearGradient>
 <radialGradient id="halo" cx="50%" cy="50%">
  <stop offset="0%" stop-color="#9900ff" stop-opacity="0.30"/>
  <stop offset="100%" stop-color="#9900ff" stop-opacity="0"/></radialGradient>
 <marker id="ret" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7"
         orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#8f7fb5"/></marker>
</defs>
<rect width="{w}" height="{h}" fill="#0a0810"/>
{body}
</svg></body></html>"""


def logo(x, y, w):
    return (f'<image href="{logo_data_uri(LOGO_WHITE, w*3)}" x="{x}" y="{y}" '
            f'width="{w}" height="{round(w*521/1453)}"/>')


# ------------------------------------------------------------ type scale
#
# THE FEATURE IMAGE IS NEVER SEEN AT 1200px. It renders inside `lg:w-2/5` with
# sizes="(max-width: 768px) 100vw, 600px", which is about 500 CSS px on desktop
# and about 390px on a phone. So a font-size in these 1200-unit coordinates
# lands on screen at roughly 0.42x, and 0.33x on mobile.
#
# The first version of these images was designed and reviewed at full size,
# where 18-unit type looks fine. On the actual page it was 7.5px, with 13-unit
# subtext at 5.4px, which is below the size at which letterforms resolve at all.
#
# Everything below is sized backwards from the on-screen result. Use px_at() to
# check any new number rather than eyeballing it in the 1200-unit space.
FEATURE_DISPLAY_PX = 500        # desktop; mobile is ~390
MIN_ON_SCREEN_PX = 12.5         # nothing may render smaller than this


def px_at(units, display=FEATURE_DISPLAY_PX, canvas=None):
    """What `units` of font-size actually measures on screen, in CSS px."""
    return units * display / (canvas or FW)


def units_for(px, display=FEATURE_DISPLAY_PX, canvas=None):
    """Inverse: design units needed to render at `px` on screen."""
    return px * (canvas or FW) / display


# Average glyph advance as a fraction of font size, for the system sans stack.
W_BOLD, W_REG = 0.60, 0.53


def text_w(s, fs, bold=False):
    return len(s) * fs * (W_BOLD if bold else W_REG)


def fit(s, fs, avail, bold=False, floor=None):
    """Largest size <= fs at which `s` fits `avail`, never below the legibility
    floor. Raises rather than silently shipping type nobody can read."""
    floor = floor or units_for(MIN_ON_SCREEN_PX)
    while fs > floor and text_w(s, fs, bold) > avail:
        fs -= 1
    if text_w(s, fs, bold) > avail:
        raise Overflow(
            f"{s!r} needs {text_w(s, floor, bold):.0f}u at the {MIN_ON_SCREEN_PX}px "
            f"floor but only {avail:.0f}u is available. Widen the box or cut the text.")
    return fs


def box(x, y, w, h, title, sub=None, accent=False, fs=48, fs_sub=36):
    """A card. Type auto-shrinks to fit the width and hard-fails below the
    legibility floor, so a too-long label is caught at render time."""
    fill, op, stroke = (("url(#g)", "1", "none") if accent
                        else (CARD, "0.92", EDGE))
    pad = 28
    # Type filling much over two thirds of the card height reads as cramped:
    # at 75% the subtext descender sits 4u off the bottom edge. Use bar() for a
    # side-by-side layout when the card cannot be made taller.
    if (fs + (fs_sub if sub else 0)) / h > 0.68:
        raise Overflow(
            f"{title!r}: {fs + (fs_sub if sub else 0)}u of type in a {h}u card is "
            f"{(fs + (fs_sub if sub else 0))/h:.0%} fill. Make the card taller or use bar().")
    fs = fit(title, fs, w - 2 * pad, bold=True)
    s = (f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="22" fill="{fill}" '
         f'fill-opacity="{op}" stroke="{stroke}" stroke-width="2"/>')
    ty = y + h / 2 + (fs * 0.34 if not sub else -fs * 0.16)
    s += (f'<text x="{x+w/2}" y="{ty:.0f}" font-size="{fs}" font-weight="700" fill="#fff" '
          f'text-anchor="middle" letter-spacing="-0.5">{esc(title)}</text>')
    if sub:
        fs_sub = fit(sub, fs_sub, w - 2 * pad)
        s += (f'<text x="{x+w/2}" y="{y+h/2+fs_sub*1.22:.0f}" font-size="{fs_sub}" '
              f'fill="{"#f8eeff" if accent else DIM}" text-anchor="middle">{esc(sub)}</text>')
    return s


def bar(x, y, w, h, title, sub=None, accent=False, fs=48, fs_sub=34):
    """A wide stage: title on the left, detail on the right, one line each.

    Stacking a 48u title over a 36u subtitle needs 84u of type, which in a 112u
    card leaves 4u under the descender and reads as cramped. Setting them side
    by side means the card only has to hold ONE line, so the same type sits in
    a box at roughly 46% fill instead of 75%, and it uses the horizontal room a
    stacked layout wastes.
    """
    fill, op, stroke = (("url(#g)", "1", "none") if accent
                        else (CARD, "0.92", EDGE))
    pad = 36
    s = (f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="24" fill="{fill}" '
         f'fill-opacity="{op}" stroke="{stroke}" stroke-width="2"/>')
    mid = y + h / 2
    if sub:
        room = w - 2 * pad - 48                     # 48u minimum gutter between them
        fs = fit(title, fs, room * 0.52, bold=True)
        fs_sub = fit(sub, fs_sub, room - text_w(title, fs, bold=True))
        s += (f'<text x="{x+pad}" y="{mid+fs*0.35:.0f}" font-size="{fs}" font-weight="700" '
              f'fill="#fff" letter-spacing="-0.5">{esc(title)}</text>')
        s += (f'<text x="{x+w-pad}" y="{mid+fs_sub*0.35:.0f}" font-size="{fs_sub}" '
              f'fill="{"#f8eeff" if accent else DIM}" text-anchor="end">{esc(sub)}</text>')
    else:
        fs = fit(title, fs, w - 2 * pad, bold=True)
        s += (f'<text x="{x+w/2}" y="{mid+fs*0.35:.0f}" font-size="{fs}" font-weight="700" '
              f'fill="#fff" text-anchor="middle" letter-spacing="-0.5">{esc(title)}</text>')
    return s


def caption(cx, y, text, fs=34):
    """The strip under a motif.

    Prefers one line: it sits at the bottom of the canvas, so a second line is
    what pushed the copilots caption 26 units off the bottom edge in the first
    pass. Order is shrink to the legibility floor, then wrap with balanced
    lines, then hard-fail if the box still will not fit the canvas.
    """
    avail = FW - 96
    floor = round(units_for(MIN_ON_SCREEN_PX))
    while fs > floor and text_w(text, fs) > avail:
        fs -= 1

    lines = [text]
    if text_w(text, fs) > avail:
        # Balance rather than greedy-fill, so the last line is never one orphan
        # word ("...or it asks a / person").
        words = text.split()
        best = None
        for cut in range(1, len(words)):
            a, b = " ".join(words[:cut]), " ".join(words[cut:])
            wide = max(text_w(a, fs), text_w(b, fs))
            if wide <= avail and (best is None or wide < best[0]):
                best = (wide, [a, b])
        if best is None:
            raise Overflow(f"caption {text!r} will not fit on two lines at the "
                           f"{MIN_ON_SCREEN_PX}px floor. Shorten it.")
        lines = best[1]

    lh = fs * 1.34
    w = max(text_w(ln, fs) for ln in lines) + 72
    h = lh * len(lines) + 30
    if y + h > FH:
        raise Overflow(f"caption runs {y+h-FH:.0f}u past the bottom of the canvas. "
                       f"Raise the motif or shorten the text.")
    s = (f'<rect x="{cx-w/2:.0f}" y="{y}" width="{w:.0f}" height="{h:.0f}" '
         f'rx="{min(h/2, 34):.0f}" fill="#0d0a16" fill-opacity="0.86"/>')
    for i, ln in enumerate(lines):
        s += (f'<text x="{cx}" y="{y+22+lh*(i+0.72):.0f}" font-size="{fs}" fill="#d6cfe4" '
              f'text-anchor="middle">{esc(ln)}</text>')
    return s


# ------------------------------------------------------------ motif layouts
# Three structural layouts, so the eight posts do not all read the same.

def lay_converge(a, b, mid, out, cap):
    """Two inputs merging into one engine, with a return loop.

    Cards were 300x122, which cannot hold a legible title over a subtitle: at
    48u/36u that is 69% fill and box() now rejects it. Widened to 440x180 (47%
    fill), which pushes the engine and output right, so the output is checked
    against the logo rather than assumed clear.
    """
    iw, ih = 440, 180
    ix, y1, y2 = 30, 140, 440
    ex, ey, ew, eh = 520, 258, 290, 244            # engine, centred between them
    ox, oy, ow, oh = 862, 300, 292, 160
    check("engine", ex, ey, ew, eh, FW, FH, avoid=LOGO_ZONE_FEATURE)
    check("output", ox, oy, ow, oh, FW, FH, avoid=LOGO_ZONE_FEATURE)

    s = [box(ix, y1, iw, ih, a[0], a[1]),
         box(ix, y2, iw, ih, b[0], b[1]),
         box(ex, ey, ew, eh, mid, None, accent=True),
         box(ox, oy, ow, oh, out)]
    mid_y = ey + eh / 2
    s.append(f'<path d="M{ix+iw+6} {y1+ih/2} C {ex-60} {y1+ih/2} {ex-70} {mid_y-40} '
             f'{ex-6} {mid_y-34}" fill="none" stroke="#b061ff" stroke-width="3.4"/>')
    s.append(f'<path d="M{ix+iw+6} {y2+ih/2} C {ex-60} {y2+ih/2} {ex-70} {mid_y+40} '
             f'{ex-6} {mid_y+34}" fill="none" stroke="#b061ff" stroke-width="3.4"/>')
    s.append(f'<path d="M{ex+ew+4} {mid_y} H {ox-6}" stroke="#b061ff" stroke-width="3.4" '
             f'marker-end="url(#ret)"/>')
    # the return edge: output feeds back into the memory store
    s.append(f'<path d="M{ox+ow/2} {oy+oh+8} V 660 H {ix+iw/2} V {y2+ih+8}" fill="none" '
             f'stroke="#8f7fb5" stroke-width="3" stroke-dasharray="9 8" '
             f'marker-end="url(#ret)"/>')
    s.append(caption(FW / 2, 690, cap))
    return "\n".join(s)


def lay_pipeline(steps, cap, accent_at=2):
    """Stages flowing top to bottom.

    This used to run left to right, which is the more natural direction for a
    pipeline, but four stages across a 1200-unit canvas leaves 252 units per
    card. At a legible title size "Spreadsheet" alone needs 290, so the
    horizontal version can only exist with type nobody can read. Stacking pays
    for the direction change with roughly three times the width per card.
    """
    s, n = [], len(steps)
    bw, bh, gap = 880, 104, 40
    x = (FW - bw) / 2
    stack = n * bh + (n - 1) * gap
    top = (FH - stack - 104) / 2
    # Bars this wide reach under the logo, so start below it rather than
    # centring blindly.
    if x + bw > LOGO_ZONE_FEATURE[0]:
        top = max(top, LOGO_ZONE_FEATURE[3] + 20)
    for i, (t, sub) in enumerate(steps):
        y = top + i * (bh + gap)
        check(t, x, y, bw, bh, FW, FH, avoid=LOGO_ZONE_FEATURE)
        s.append(bar(x, y, bw, bh, t, sub, accent=(i == accent_at)))
        if i < n - 1:
            s.append(f'<path d="M{FW/2} {y+bh+6} V {y+bh+gap-8}" stroke="#b061ff" '
                     f'stroke-width="3.4" marker-end="url(#ret)"/>')
    s.append(caption(FW / 2, top + n * bh + (n - 1) * gap + 28, cap))
    return "\n".join(s)


def lay_versus(left, right, cap):
    """Two panels side by side for comparison posts.

    Not used by the current twelve posts, but swept with them: 21u/16u type is
    8.8px/6.7px on the page, so the next post to reach for this archetype would
    have inherited the same defect.
    """
    pw, ph, py_ = 552, 424, 196
    hdr, fs_row = 78, 30
    s = []
    for (title, rows, accent), x in ((left, 34), (right, 614)):
        check(title, x, py_, pw, ph, FW, FH, avoid=LOGO_ZONE_FEATURE)
        s.append(f'<rect x="{x}" y="{py_}" width="{pw}" height="{ph}" rx="24" fill="#100d1a" '
                 f'fill-opacity="0.91" stroke="{EDGE}" stroke-width="2"/>')
        s.append(f'<rect x="{x}" y="{py_}" width="{pw}" height="{hdr}" rx="24" fill="url(#g)" '
                 f'fill-opacity="{0.95 if accent else 0.16}"/>')
        s.append(f'<text x="{x+34}" y="{py_+hdr/2+13:.0f}" font-size="36" font-weight="700" '
                 f'fill="#fff" letter-spacing="-0.5">{esc(title)}</text>')
        step = (ph - hdr - 46) / max(len(rows), 1)
        for i, r in enumerate(rows):
            size = fit(r, fs_row, pw - 104)
            cy = py_ + hdr + 44 + i * step
            s.append(f'<circle cx="{x+40}" cy="{cy:.0f}" r="7" fill="#b061ff"/>')
            s.append(f'<text x="{x+70}" y="{cy+size*0.35:.0f}" font-size="{size}" '
                     f'fill="#ddd6e8">{esc(r)}</text>')
    s.append(caption(FW / 2, py_ + ph + 26, cap))
    return "\n".join(s)


def lay_graph(nodes, cap, r=104, fs=34, logo_zone=None):
    """Node cluster for the knowledge-graph post.

    Nodes were r=62 with 15-unit labels, which is 6px on the page. At a legible
    label size the circle has to grow to match, so the cluster is checked for
    overlap and against the logo rather than positioned by eye.
    """
    for i, (x, y, lab, _) in enumerate(nodes):
        check(f"node {lab}", x - r, y - r, 2 * r, 2 * r, FW, FH, avoid=logo_zone)
        if text_w(lab, fs, bold=True) > 2 * r - 32:
            raise Overflow(f"label {lab!r} is wider than its {2*r}u node")
        for x2, y2, lab2, _ in nodes[i + 1:]:
            if ((x - x2) ** 2 + (y - y2) ** 2) ** 0.5 < 2 * r + 24:
                raise Overflow(f"nodes {lab!r} and {lab2!r} overlap")

    s = []
    for a in range(len(nodes)):
        for b in range(a + 1, len(nodes)):
            if (a + b) % 2 == 0:
                s.append(f'<line x1="{nodes[a][0]}" y1="{nodes[a][1]}" x2="{nodes[b][0]}" '
                         f'y2="{nodes[b][1]}" stroke="#6a5c8a" stroke-width="3"/>')
    for x, y, lab, acc in nodes:
        s.append(f'<circle cx="{x}" cy="{y}" r="{r}" fill="{"url(#g)" if acc else CARD}" '
                 f'fill-opacity="{1 if acc else 0.94}" '
                 f'stroke="{"none" if acc else "#7a52b8"}" stroke-width="2.5"/>')
        s.append(f'<text x="{x}" y="{y+fs*0.35:.0f}" font-size="{fs}" font-weight="700" '
                 f'fill="#fff" text-anchor="middle">{esc(lab)}</text>')
    s.append(caption(FW / 2, 690, cap))
    return "\n".join(s)


# ---------------------------------------------------------------- feature

def feature(slug, photo_idx, motif, bright, scrim_p, focus, scrim_box=None):
    im = graded(f"{SRC}/{slug}-{photo_idx}.jpg", FW, FH, bright=bright, focus=focus)
    # Wider than it was: the motif now fills most of the canvas, so the darkened
    # area has to follow it or the outer cards sit on unscrimmed photo.
    im = scrim(im, scrim_box or (16, 88, 1184, 784), power=scrim_p)
    b = [f'<image href="{uri(im)}" x="0" y="0" width="{FW}" height="{FH}"/>',
         f'<rect width="{FW}" height="{FH}" fill="url(#topfade)"/>', motif,
         logo(FW - 96 - 140, 78, 140)]
    return shell(FW, FH, "\n".join(b))


# ---------------------------------------------------------------- CTA

def cta(head, sub, btn, motif_fn, photo=None, bright=0.5):
    b = []
    if photo:
        im = graded(photo, CW, CH, bright=bright, focus=0.55)
        im = scrim(im, (-60, -60, 560, 360), power=0.80, blur=90)
        b.append(f'<image href="{uri(im)}" x="0" y="0" width="{CW}" height="{CH}"/>')
    b.append(logo(LOGO_ZONE_CTA[0], LOGO_ZONE_CTA[1], 112))
    b.append('<rect x="48" y="52" width="50" height="4" rx="2" fill="url(#g)"/>')
    b.append(f'<text x="48" y="116" font-size="26" font-weight="700" fill="#fff" '
             f'letter-spacing="-0.8">{esc(head)}</text>')
    b.append(f'<text x="48" y="152" font-size="14.5" fill="{DIM}">{esc(sub)}</text>')
    bw = len(btn) * 8.2 + 44
    check("button", 48, 188, bw, 46, CW, CH)
    b.append(f'<rect x="48" y="188" width="{bw:.0f}" height="46" rx="23" fill="url(#g)"/>')
    b.append(f'<text x="{48+bw/2:.0f}" y="216" font-size="14.5" font-weight="700" fill="#fff" '
             f'text-anchor="middle">{esc(btn)}</text>')
    if not photo:
        b.append('<ellipse cx="640" cy="180" rx="150" ry="120" fill="url(#halo)"/>')
    b.append(motif_fn())
    return shell(CW, CH, "\n".join(b))


def m_stack(rows):
    s = []
    for i, (lab, acc) in enumerate(rows):
        x, y, w, h = 540, 92 + i * 58, 200, 48
        check(lab, x, y, w, h, CW, CH, avoid=LOGO_ZONE_CTA)
        s.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="12" '
                 f'fill="{"url(#g)" if acc else CARD}" fill-opacity="{1 if acc else 0.92}" '
                 f'stroke="{"none" if acc else EDGE}"/>')
        s.append(f'<text x="{x+w/2}" y="{y+29}" font-size="13.5" font-weight="600" fill="#fff" '
                 f'text-anchor="middle">{esc(lab)}</text>')
        if i < len(rows) - 1:
            s.append(f'<path d="M{x+w/2} {y+50} V {y+56}" stroke="#b061ff" stroke-width="2"/>')
    return "\n".join(s)


def m_chips(chips):
    s = ['<circle cx="566" cy="182" r="34" fill="url(#g)"/>',
         '<circle cx="566" cy="173" r="10" fill="#fff" opacity=".92"/>',
         '<path d="M548 198 a18 18 0 0 1 36 0 z" fill="#fff" opacity=".92"/>']
    for i, t in enumerate(chips):
        x, y, w, h = 626, 108 + i * 52, 136, 40
        check(t, x, y, w, h, CW, CH, avoid=LOGO_ZONE_CTA)
        s.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="10" fill="{CARD}" '
                 f'fill-opacity="0.92" stroke="{EDGE}"/>')
        s.append(f'<text x="{x+12}" y="{y+25}" font-size="12.5" fill="#cfc7dc">{esc(t)}</text>')
        s.append(f'<path d="M604 182 C 614 182 614 {y+20} {622} {y+20}" fill="none" '
                 f'stroke="#b061ff" stroke-width="1.7" opacity="{1-i*0.2:.2f}"/>')
    return "\n".join(s)
