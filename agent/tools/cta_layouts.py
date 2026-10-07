"""CTA banner templates.

The first pass used one layout (text left, motif right) with two motifs, so all
sixteen banners read the same. These are nine distinct templates varying the
composition, not just the ornament: mirrored, split panel, metric tiles,
sparkline, chat bubbles, mini funnel, mini graph, code strip, photo band.

Every template keeps the reserved logo zone and validates against it.
"""

from blog_visuals import (CARD, CH, CW, DIM, EDGE, LOGO_ZONE_CTA, Overflow,
                          check, esc, graded, logo, scrim, shell, text_w, uri)

MONO = "ui-monospace,SFMono-Regular,Menlo,Consolas,monospace"
LOGO_W = 112

# text_w() carries the kit's WRAPPING constant (0.52 em), which is deliberately
# pessimistic so wrapped text never overruns. Using it directly as an OVERFLOW
# test rejects headlines that demonstrably render fine - the same calibration
# mistake the diagram card checks made before being measured. Real advance for
# this face, taken from the rendered banners: an overlapping 43-character
# headline measured ~480px at 26px bold, i.e. ~0.43 em, so the wrapping
# constant runs about 21% high.
ADVANCE = 0.83


def _logo():
    return logo(LOGO_ZONE_CTA[0], LOGO_ZONE_CTA[1], LOGO_W)


def _button(x, y, label, light=False):
    w = len(label) * 8.2 + 44
    check("button", x, y, w, 46, CW, CH)
    fill = "#ffffff" if light else "url(#g)"
    tcol = "#14121a" if light else "#fff"
    return (f'<rect x="{x}" y="{y}" width="{w:.0f}" height="46" rx="23" fill="{fill}"/>'
            f'<text x="{x+w/2:.0f}" y="{y+29}" font-size="14.5" font-weight="700" '
            f'fill="{tcol}" text-anchor="middle">{esc(label)}</text>')


def _copy(x, head, sub, btn, y0=52, align="start", light_btn=False, maxw=None):
    """Copy block. `maxw` is the room before a right-hand motif starts.

    Templates with a motif on the right used to check only the motif's own
    bounds, so an over-long headline ran silently underneath it: "Accurate
    After Launch, Not Just in the Demo" disappeared behind the metric tiles and
    the render looked fine to every automated check. Measuring the headline
    against the space actually available turns that into a build failure.
    """
    if maxw is not None:
        for label, text, fs, bold in (("headline", head, 26, True),
                                      ("subtext", sub, 14.5, False)):
            w = text_w(text, fs, bold=bold) * ADVANCE
            if w > maxw:
                raise Overflow(
                    f"CTA {label} {text!r} needs {w:.0f}px but only {maxw:.0f}px "
                    f"is clear of the motif. Shorten it.")
    a = {"start": x, "middle": x}[align]
    return [f'<rect x="{x}" y="{y0}" width="50" height="4" rx="2" fill="url(#g)"/>',
            f'<text x="{a}" y="{y0+64}" font-size="26" font-weight="700" fill="#fff" '
            f'letter-spacing="-0.8" text-anchor="{align}">{esc(head)}</text>',
            f'<text x="{a}" y="{y0+100}" font-size="14.5" fill="{DIM}" '
            f'text-anchor="{align}">{esc(sub)}</text>',
            _button(x, y0 + 136, btn, light=light_btn)]


# ------------------------------------------------------------- 1. stack

def t_stack(head, sub, btn, rows, **kw):
    b = [_logo()] + _copy(48, head, sub, btn, maxw=478)
    for i, (lab, acc) in enumerate(rows):
        x, y, w, h = 540, 92 + i * 58, 200, 48
        check(lab, x, y, w, h, CW, CH, avoid=LOGO_ZONE_CTA)
        b.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="12" '
                 f'fill="{"url(#g)" if acc else CARD}" fill-opacity="{1 if acc else 0.92}" '
                 f'stroke="{"none" if acc else EDGE}"/>')
        b.append(f'<text x="{x+w/2}" y="{y+29}" font-size="13.5" font-weight="600" '
                 f'fill="#fff" text-anchor="middle">{esc(lab)}</text>')
        if i < len(rows) - 1:
            b.append(f'<path d="M{x+w/2} {y+50} V {y+56}" stroke="#b061ff" stroke-width="2"/>')
    return shell(CW, CH, "\n".join(b))


# ------------------------------------------------------------- 2. chips

def t_chips(head, sub, btn, chips, **kw):
    b = [_logo()] + _copy(48, head, sub, btn, maxw=470)
    b += ['<circle cx="566" cy="182" r="34" fill="url(#g)"/>',
          '<circle cx="566" cy="173" r="10" fill="#fff" opacity=".92"/>',
          '<path d="M548 198 a18 18 0 0 1 36 0 z" fill="#fff" opacity=".92"/>']
    for i, t in enumerate(chips):
        x, y, w, h = 626, 108 + i * 52, 136, 40
        check(t, x, y, w, h, CW, CH, avoid=LOGO_ZONE_CTA)
        b.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="10" fill="{CARD}" '
                 f'fill-opacity="0.92" stroke="{EDGE}"/>')
        b.append(f'<text x="{x+12}" y="{y+25}" font-size="12.5" fill="#cfc7dc">{esc(t)}</text>')
        b.append(f'<path d="M604 182 C 614 182 614 {y+20} {622} {y+20}" fill="none" '
                 f'stroke="#b061ff" stroke-width="1.7" opacity="{1-i*0.2:.2f}"/>')
    return shell(CW, CH, "\n".join(b))


# --------------------------------------------------------- 3. split panel

def t_split(head, sub, btn, note, **kw):
    """Right third is a gradient block carrying the action."""
    b = ['<rect x="516" y="0" width="284" height="300" fill="url(#gv)"/>', _logo()]
    b.append('<rect x="48" y="52" width="50" height="4" rx="2" fill="url(#g)"/>')
    b.append(f'<text x="48" y="120" font-size="25" font-weight="700" fill="#fff" '
             f'letter-spacing="-0.8">{esc(head)}</text>')
    b.append(f'<text x="48" y="156" font-size="14.5" fill="{DIM}">{esc(sub)}</text>')
    b.append(f'<text x="48" y="188" font-size="13.5" fill="#7f7794">{esc(note)}</text>')
    b.append('<circle cx="658" cy="112" r="40" fill="#fff" opacity="0.16"/>')
    b.append('<path d="M638 112 l12 13 l22 -26" fill="none" stroke="#fff" stroke-width="5" '
             'stroke-linecap="round" stroke-linejoin="round"/>')
    bw = len(btn) * 8.2 + 40
    check("split button", 658 - bw / 2, 186, bw, 46, CW, CH)
    b.append(f'<rect x="{658-bw/2:.0f}" y="186" width="{bw:.0f}" height="46" rx="23" fill="#fff"/>')
    b.append(f'<text x="658" y="215" font-size="14.5" font-weight="700" fill="#14121a" '
             f'text-anchor="middle">{esc(btn)}</text>')
    return shell(CW, CH, "\n".join(b))


# ------------------------------------------------------- 4. metric tiles

def t_metrics(head, sub, btn, tiles, **kw):
    b = [_logo()] + _copy(48, head, sub, btn, maxw=466)
    for i, (val, lab) in enumerate(tiles):
        x, y, w, h = 528, 84 + i * 70, 232, 60
        check(lab, x, y, w, h, CW, CH, avoid=LOGO_ZONE_CTA)
        b.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="12" fill="{CARD}" '
                 f'fill-opacity="0.92" stroke="{EDGE}"/>')
        b.append(f'<text x="{x+18}" y="{y+28}" font-size="20" font-weight="700" '
                 f'fill="url(#g)">{esc(val)}</text>')
        b.append(f'<text x="{x+18}" y="{y+48}" font-size="12.5" fill="{DIM}">{esc(lab)}</text>')
    return shell(CW, CH, "\n".join(b))


# --------------------------------------------------------- 5. sparkline

def t_spark(head, sub, btn, series, label, **kw):
    b = [_logo()] + _copy(48, head, sub, btn, maxw=458)
    x0, x1, y0, y1 = 534, 762, 96, 216
    check("spark panel", x0 - 14, y0 - 26, x1 - x0 + 28, y1 - y0 + 60, CW, CH,
          avoid=LOGO_ZONE_CTA)
    b.append(f'<rect x="{x0-14}" y="{y0-26}" width="{x1-x0+28}" height="{y1-y0+60}" rx="14" '
             f'fill="{CARD}" fill-opacity="0.90" stroke="{EDGE}"/>')
    b.append(f'<text x="{x0}" y="{y0-6}" font-size="11.5" fill="{DIM}" letter-spacing="1.2">'
             f'{esc(label.upper())}</text>')
    lo, hi = min(series) * 0.8, max(series) * 1.08
    step = (x1 - x0) / (len(series) - 1)
    pts = [(x0 + i * step, y1 - (v - lo) / (hi - lo) * (y1 - y0)) for i, v in enumerate(series)]
    cut = len(series) - 3
    b.append('<polyline points="' + " ".join(f"{x:.0f},{y:.0f}" for x, y in pts[:cut + 1])
             + '" fill="none" stroke="#b061ff" stroke-width="2.8"/>')
    b.append('<polyline points="' + " ".join(f"{x:.0f},{y:.0f}" for x, y in pts[cut:])
             + '" fill="none" stroke="url(#g)" stroke-width="2.8" stroke-dasharray="7 5"/>')
    b.append(f'<circle cx="{pts[-1][0]:.0f}" cy="{pts[-1][1]:.0f}" r="6" fill="url(#g)"/>')
    return shell(CW, CH, "\n".join(b))


# ------------------------------------------------------- 6. chat bubbles

def t_bubbles(head, sub, btn, msgs, **kw):
    b = [_logo()] + _copy(48, head, sub, btn, maxw=462)
    y = 96
    for who, txt in msgs:
        w = min(len(txt) * 7.6 + 32, 250)
        x = 524 if who == "them" else 776 - w
        check("bubble", x, y, w, 42, CW, CH, avoid=LOGO_ZONE_CTA)
        b.append(f'<rect x="{x:.0f}" y="{y}" width="{w:.0f}" height="42" rx="15" '
                 f'fill="{"url(#g)" if who == "us" else CARD}" '
                 f'fill-opacity="{1 if who == "us" else 0.92}" '
                 f'stroke="{"none" if who == "us" else EDGE}"/>')
        b.append(f'<text x="{x+16:.0f}" y="{y+26}" font-size="12.5" fill="#fff">{esc(txt)}</text>')
        y += 54
    return shell(CW, CH, "\n".join(b))


# --------------------------------------------------------- 7. mini funnel

def t_funnel(head, sub, btn, stages, **kw):
    b = [_logo()] + _copy(48, head, sub, btn, maxw=463)
    top, bot, y, h, gap = 250, 110, 92, 46, 10
    for i, s_ in enumerate(stages):
        wt = top - (top - bot) * (i / len(stages))
        wb = top - (top - bot) * ((i + 1) / len(stages))
        cx, acc = 650, i == len(stages) - 1
        check(s_, cx - wt / 2, y, wt, h, CW, CH, avoid=LOGO_ZONE_CTA)
        b.append(f'<polygon points="{cx-wt/2:.0f},{y} {cx+wt/2:.0f},{y} '
                 f'{cx+wb/2:.0f},{y+h} {cx-wb/2:.0f},{y+h}" '
                 f'fill="{"url(#g)" if acc else CARD}" fill-opacity="{1 if acc else 0.90}" '
                 f'stroke="{"none" if acc else EDGE}"/>')
        b.append(f'<text x="{cx}" y="{y+29}" font-size="12.5" font-weight="600" fill="#fff" '
                 f'text-anchor="middle">{esc(s_)}</text>')
        y += h + gap
    return shell(CW, CH, "\n".join(b))


# ---------------------------------------------------------- 8. mini graph

def t_graph(head, sub, btn, nodes, **kw):
    b = [_logo()] + _copy(48, head, sub, btn, maxw=462)
    for a in range(len(nodes)):
        for c in range(a + 1, len(nodes)):
            if (a + c) % 2 == 0:
                b.append(f'<line x1="{nodes[a][0]}" y1="{nodes[a][1]}" x2="{nodes[c][0]}" '
                         f'y2="{nodes[c][1]}" stroke="#5b4d7d" stroke-width="1.6"/>')
    for x, y, lab, acc in nodes:
        check(lab, x - 34, y - 34, 68, 68, CW, CH, avoid=LOGO_ZONE_CTA)
        b.append(f'<circle cx="{x}" cy="{y}" r="34" fill="{"url(#g)" if acc else CARD}" '
                 f'fill-opacity="{1 if acc else 0.93}" '
                 f'stroke="{"none" if acc else "#7a52b8"}" stroke-width="1.8"/>')
        b.append(f'<text x="{x}" y="{y+4}" font-size="11.5" font-weight="600" fill="#fff" '
                 f'text-anchor="middle">{esc(lab)}</text>')
    return shell(CW, CH, "\n".join(b))


# ---------------------------------------------------------- 9. code strip

def t_code(head, sub, btn, lines, **kw):
    b = [_logo()] + _copy(48, head, sub, btn, maxw=458)
    x, y, w, h = 520, 92, 246, 154
    check("code", x, y, w, h, CW, CH, avoid=LOGO_ZONE_CTA)
    b.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="12" fill="#0e0b17" '
             f'fill-opacity="0.94" stroke="{EDGE}"/>')
    b.append(f'<path d="M{x} {y+12} a12 12 0 0 1 12 -12 h{w-24} a12 12 0 0 1 12 12 v22 h-{w} z" '
             f'fill="#1a1430"/>')
    for i, c in enumerate(("#ff5f57", "#febc2e", "#28c840")):
        b.append(f'<circle cx="{x+16+i*14}" cy="{y+17}" r="4" fill="{c}" opacity="0.9"/>')
    ly = y + 56
    for parts in lines:
        cx = x + 16
        for txt, col in parts:
            b.append(f'<text x="{cx:.0f}" y="{ly}" font-size="12" font-family="{MONO}" '
                     f'fill="{col}">{esc(txt)}</text>')
            cx += len(txt) * 7.2
        ly += 24
    return shell(CW, CH, "\n".join(b))


# --------------------------------------------------------- 10. photo band

def t_photo(head, sub, btn, photo, focus=0.6, bright=0.62, **kw):
    """Topic photo as a right-hand band, text on a darkened left.

    focus and bright are overridable because a post carrying TWO photo bands
    must vary the crop as well as the photo, or the pair reads as one banner
    printed twice.
    """
    im = graded(photo, CW, CH, bright=bright, focus=focus)
    im = scrim(im, (-80, -80, 470, 380), power=0.86, blur=80)
    b = [f'<image href="{uri(im)}" x="0" y="0" width="{CW}" height="{CH}"/>', _logo()]
    b += _copy(48, head, sub, btn, maxw=560)
    return shell(CW, CH, "\n".join(b))
