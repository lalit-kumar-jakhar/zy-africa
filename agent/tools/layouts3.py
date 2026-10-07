"""Feature archetypes added for batch 3.

Kept out of blog_visuals.py and layouts2.py for the same reason
diagram_builders2.py is separate: the eight shipped features must not be able
to change because something here did.

Feature images render in a `lg:w-2/5` column, roughly 500px on desktop, so a
unit is 0.42px. Type that looks generous in the 1200-unit canvas is what makes
it legible on the page - this is the scale the whole kit was rebuilt around.
"""
from blog_visuals import (CARD, EDGE, FH, FW, LOGO_ZONE_FEATURE, Overflow,
                          caption, check, esc, fit, text_w)


def lay_matrix(x_label, y_label, cells, cap):
    """A 2x2 decision grid.

    `cells` is [[top_left, top_right], [bottom_left, bottom_right]], each a
    (title, sub, accent) triple. Rows read top-down as the y-axis DESCENDING,
    which is how a reader scans, so the caller passes the high-consequence row
    first and the axis arrow is drawn pointing up to match.
    """
    if len(cells) != 2 or any(len(r) != 2 for r in cells):
        raise Overflow("lay_matrix needs exactly 2x2 cells")

    # gy was 200, which put the caption 8u past the bottom edge once the axis
    # label was allowed for. The grid starts higher rather than the caption
    # being shrunk to fit.
    gx, gy = 196, 168
    cw, ch, gap = 448, 202, 24
    gw = 2 * cw + gap
    gh = 2 * ch + gap
    pad = 30
    s = []

    # Axis rules and arrowheads, drawn first so the cards sit over them.
    s.append(f'<path d="M{gx-40} {gy+gh} V {gy-6}" stroke="#8f7fb5" '
             f'stroke-width="3" marker-end="url(#ret)"/>')
    s.append(f'<path d="M{gx-40} {gy+gh+34} H {gx+gw+6}" stroke="#8f7fb5" '
             f'stroke-width="3" marker-end="url(#ret)"/>')

    for r, row in enumerate(cells):
        for c, (title, sub, accent) in enumerate(row):
            x = gx + c * (cw + gap)
            y = gy + r * (ch + gap)
            check(f"cell {title!r}", x, y, cw, ch, FW, FH,
                  avoid=LOGO_ZONE_FEATURE)
            fill, op, stroke = (("url(#g)", "1", "none") if accent
                                else (CARD, "0.92", EDGE))
            s.append(f'<rect x="{x}" y="{y}" width="{cw}" height="{ch}" rx="24" '
                     f'fill="{fill}" fill-opacity="{op}" stroke="{stroke}" '
                     f'stroke-width="2"/>')
            avail = cw - 2 * pad
            ts = fit(title, 44, avail, bold=True, floor=30)
            if text_w(title, ts, bold=True) > avail:
                raise Overflow(f"cell title {title!r} does not fit {avail}u")
            s.append(f'<text x="{x+pad}" y="{y+ch/2-8:.0f}" font-size="{ts}" '
                     f'font-weight="700" fill="#fff" letter-spacing="-0.6">'
                     f'{esc(title)}</text>')
            if sub:
                ss = fit(sub, 28, avail, floor=22)
                if text_w(sub, ss) > avail:
                    raise Overflow(f"cell sub {sub!r} does not fit {avail}u")
                s.append(f'<text x="{x+pad}" y="{y+ch/2+ss*1.35:.0f}" '
                         f'font-size="{ss}" fill="'
                         f'{"#f0e9ff" if accent else "#b3abc4"}">{esc(sub)}</text>')

    # Axis captions. The y label is rotated, so its bounds are checked against
    # the rotated extent rather than the drawn width.
    xs = fit(x_label, 30, gw, bold=True, floor=24)
    s.append(f'<text x="{gx+gw/2:.0f}" y="{gy+gh+62}" font-size="{xs}" '
             f'font-weight="700" fill="#8f7fb5" text-anchor="middle" '
             f'letter-spacing="1.5">{esc(x_label)}</text>')
    ys = fit(y_label, 30, gh, bold=True, floor=24)
    if text_w(y_label, ys, bold=True) > gh:
        raise Overflow(f"y label {y_label!r} taller than the {gh}u grid")
    s.append(f'<text transform="translate({gx-64},{gy+gh/2:.0f}) rotate(-90)" '
             f'font-size="{ys}" font-weight="700" fill="#8f7fb5" '
             f'text-anchor="middle" letter-spacing="1.5">{esc(y_label)}</text>')

    cy = gy + gh + 112
    if cy > FH - 40:
        raise Overflow(f"caption at {cy} runs past the {FH}u canvas")
    s.append(caption(FW / 2, cy, cap))
    return "\n".join(s)
