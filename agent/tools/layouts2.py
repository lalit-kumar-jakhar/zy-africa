"""Additional feature-image archetypes, so no two posts share a layout.

Adds: chart, code window, chat UI, diagonal before/after, iceberg, funnel.
Combined with the existing converge and node-graph, that is eight distinct
shapes for eight posts.
"""

from blog_visuals import (CARD, DIM, EDGE, FH, FW, LOGO_ZONE_FEATURE, Overflow,
                          box, caption, check, esc, fit, text_w)

MONO = "ui-monospace,SFMono-Regular,Menlo,Consolas,monospace"


# ------------------------------------------------------------------ chart

def lay_chart(hist, fc, cap, ylab="churn risk"):
    """Solid history then a dashed forecast inside a confidence band."""
    x0, x1, y0, y1 = 140, 1070, 236, 606
    # fc[0] repeats the last observed value so the two lines join, so the
    # number of distinct x positions is one less than the naive sum.
    n = len(hist) + len(fc) - 1
    step = (x1 - x0) / (n - 1)
    lo, hi = min(hist + fc) * 0.72, max(hist + fc) * 1.12

    def px(i):
        return x0 + i * step

    def py(v):
        return y1 - (v - lo) / (hi - lo) * (y1 - y0)

    s = [f'<rect x="{x0-40}" y="{y0-42}" width="{x1-x0+96}" height="{y1-y0+128}" rx="20" '
         f'fill="#0f0c19" fill-opacity="0.80" stroke="{EDGE}" stroke-width="1.6"/>']
    for g in range(5):
        gy = y0 + g * (y1 - y0) / 4
        s.append(f'<line x1="{x0}" y1="{gy:.0f}" x2="{x1}" y2="{gy:.0f}" stroke="#2b2440" stroke-width="1"/>')
    s.append(f'<text x="{x0}" y="{y0-18}" font-size="28" fill="{DIM}" letter-spacing="1.2">{esc(ylab.upper())}</text>')

    # confidence band around the forecast
    band = []
    for i, v in enumerate(fc):
        band.append(f"{px(len(hist)-1+i):.0f},{py(v*(1+0.05+0.035*i)):.0f}")
    for i, v in reversed(list(enumerate(fc))):
        band.append(f"{px(len(hist)-1+i):.0f},{py(v*(1-0.05-0.035*i)):.0f}")
    s.append(f'<polygon points="{" ".join(band)}" fill="#9900ff" fill-opacity="0.20"/>')

    s.append('<polyline points="' + " ".join(f"{px(i):.0f},{py(v):.0f}" for i, v in enumerate(hist))
             + '" fill="none" stroke="#b061ff" stroke-width="3.4" stroke-linejoin="round"/>')
    s.append('<polyline points="' + " ".join(
        f"{px(len(hist)-1+i):.0f},{py(v):.0f}" for i, v in enumerate(fc))
        + '" fill="none" stroke="url(#g)" stroke-width="3.4" stroke-dasharray="9 7" stroke-linejoin="round"/>')
    for i, v in enumerate(hist):
        s.append(f'<circle cx="{px(i):.0f}" cy="{py(v):.0f}" r="4.5" fill="#0a0810" stroke="#b061ff" stroke-width="2.4"/>')
    lx, ly = px(n - 1), py(fc[-1])  # now genuinely the last plotted point
    fw_, fh_ = text_w("forecast", 32) + 44, 58
    s.append(f'<circle cx="{lx:.0f}" cy="{ly:.0f}" r="11" fill="url(#g)"/>')
    s.append(f'<rect x="{lx-fw_-18:.0f}" y="{ly-fh_-22:.0f}" width="{fw_:.0f}" '
             f'height="{fh_}" rx="16" fill="#16111f" stroke="{EDGE}" stroke-width="2"/>')
    s.append(f'<text x="{lx-fw_/2-18:.0f}" y="{ly-fh_+16:.0f}" font-size="32" '
             f'font-weight="700" fill="#fff" text-anchor="middle">forecast</text>')
    sep = px(len(hist) - 1)
    s.append(f'<line x1="{sep:.0f}" y1="{y0}" x2="{sep:.0f}" y2="{y1}" stroke="#6a5c8a" stroke-width="2" stroke-dasharray="6 6"/>')
    s.append(f'<text x="{sep-18:.0f}" y="{y1+46}" font-size="30" fill="{DIM}" text-anchor="end">observed</text>')
    s.append(f'<text x="{sep+18:.0f}" y="{y1+46}" font-size="30" fill="#c9a3ff">predicted</text>')
    s.append(caption(FW / 2, y1 + 76, cap))
    return "\n".join(s)


# ------------------------------------------------------------ code window

def lay_code(tabs, lines, cap, fs=27):
    """A code window. Monospace at 15u was 6px on the page, so the window is
    widened to nearly the full canvas to buy the character room that legible
    code needs: the longest line here is 39 characters, 632u at 27."""
    adv = fs * 0.605                                  # monospace advance
    widest = max((sum(len(t) for t, _ in parts) + indent * 2
                  for indent, parts in lines), default=0)
    x, w = 62, 1076
    hdr, lh = 66, fs * 1.85
    h = hdr + 34 + lh * len(lines) + 20
    y = 168
    check("code window", x, y, w, h, FW, FH, avoid=LOGO_ZONE_FEATURE)
    if 74 + widest * adv > w:
        raise Overflow(f"longest code line needs {widest*adv:.0f}u, window is {w}u")

    s = [f'<rect x="{x}" y="{y}" width="{w}" height="{h:.0f}" rx="22" fill="#0e0b17" '
         f'fill-opacity="0.95" stroke="{EDGE}" stroke-width="2"/>',
         f'<path d="M{x} {y+22} a22 22 0 0 1 22 -22 h{w-44} a22 22 0 0 1 22 22 '
         f'v{hdr-22} h-{w} z" fill="#171227"/>']
    for i, c in enumerate(("#ff5f57", "#febc2e", "#28c840")):
        s.append(f'<circle cx="{x+34+i*30}" cy="{y+hdr/2}" r="9" fill="{c}" opacity="0.9"/>')
    tx = x + 150
    for i, t in enumerate(tabs):
        tw = text_w(t, 24) + 44
        s.append(f'<rect x="{tx:.0f}" y="{y+13}" width="{tw:.0f}" height="40" rx="12" '
                 f'fill="{"#241b3d" if i == 0 else "transparent"}"/>')
        s.append(f'<text x="{tx+tw/2:.0f}" y="{y+41}" font-size="24" font-family="{MONO}" '
                 f'fill="{"#e6dcff" if i == 0 else "#7d7392"}" text-anchor="middle">{esc(t)}</text>')
        tx += tw + 12
    ly = y + hdr + 44
    for n, (indent, parts) in enumerate(lines, start=1):
        cx = x + 74 + indent * adv * 2
        s.append(f'<text x="{x+26}" y="{ly:.0f}" font-size="{fs*0.8:.0f}" '
                 f'font-family="{MONO}" fill="#4c4266">{n}</text>')
        for txt, col in parts:
            s.append(f'<text x="{cx:.0f}" y="{ly:.0f}" font-size="{fs}" font-family="{MONO}" '
                     f'fill="{col}">{esc(txt)}</text>')
            cx += len(txt) * adv
        ly += lh
    s.append(caption(FW / 2, y + h + 22, cap))
    return "\n".join(s)


# ---------------------------------------------------------------- chat UI

def lay_chat(msgs, cap, header="Support", fs=33):
    """A chat panel. Widened from 540 to 940 units because message text at a
    legible size needs the room: the longest line here is 44 characters, which
    is 700 units at 30, against 444 of usable width in the old panel."""
    x, y, w, h = 130, 128, 940, 556
    check("chat", x, y, w, h, FW, FH, avoid=LOGO_ZONE_FEATURE)
    hdr, pad, bh, gap = 82, 26, 74, 18
    s = [f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="30" fill="#0f0c19" '
         f'fill-opacity="0.94" stroke="{EDGE}" stroke-width="2"/>',
         f'<path d="M{x} {y+30} a30 30 0 0 1 30 -30 h{w-60} a30 30 0 0 1 30 30 '
         f'v{hdr-30} h-{w} z" fill="#181227"/>',
         f'<circle cx="{x+52}" cy="{y+hdr/2}" r="22" fill="url(#g)"/>',
         f'<text x="{x+90}" y="{y+hdr/2+11:.0f}" font-size="30" font-weight="700" '
         f'fill="#fff">{esc(header)}</text>',
         f'<circle cx="{x+w-44}" cy="{y+hdr/2}" r="7" fill="#28c840"/>']
    my = y + hdr + 28
    for who, txt in msgs:
        size = fit(txt, fs, w - 2 * pad - 44)
        tw = min(text_w(txt, size) + 44, w - 2 * pad)
        bx = x + pad if who == "them" else x + w - pad - tw
        s.append(f'<rect x="{bx:.0f}" y="{my}" width="{tw:.0f}" height="{bh}" rx="22" '
                 f'fill="{"url(#g)" if who == "us" else "#221b33"}"/>')
        s.append(f'<text x="{bx+22:.0f}" y="{my+bh/2+size*0.35:.0f}" font-size="{size}" '
                 f'fill="#fff">{esc(txt)}</text>')
        my += bh + gap
    s.append(f'<rect x="{x+pad}" y="{my}" width="126" height="62" rx="22" fill="#221b33"/>')
    for i in range(3):
        s.append(f'<circle cx="{x+pad+32+i*26}" cy="{my+31}" r="6.5" fill="#8d82a8" '
                 f'opacity="{0.9-i*0.22:.2f}"/>')
    if my + 62 > y + h:
        raise Overflow(f"chat content overruns the panel by {my+62-(y+h):.0f}u")
    s.append(caption(FW / 2, y + h + 22, cap))
    return "\n".join(s)


# ------------------------------------------------------- diagonal before/after

def lay_diagonal(left_label, right_label, left_items, right_items, cap):
    """Messy manual side against an ordered automated side.

    The split moves right (660/470 to 760/620) because the left cards have to
    grow from 228u to 470u to carry legible text, and the scattered cards are
    checked against the divider so they cannot drift into the ordered column.
    """
    top, bot = 760, 620
    cw, ch, fs = 470, 88, 28
    s = [f'<path d="M0 0 H {top} L {bot} {FH} H 0 Z" fill="#120d1c" fill-opacity="0.88"/>',
         f'<path d="M{top} 0 H {FW} V {FH} H {bot} Z" fill="#0d0a17" fill-opacity="0.74"/>',
         f'<path d="M{top} 0 L {bot} {FH}" stroke="#b061ff" stroke-width="3" opacity="0.7"/>']
    s.append(f'<text x="74" y="206" font-size="32" font-weight="700" fill="#ff7a90" '
             f'letter-spacing="1.6">{esc(left_label.upper())}</text>')
    for t, dx, dy, rot in left_items:
        if text_w(t, fs) > cw - 40:
            raise Overflow(f"{t!r} needs {text_w(t, fs):.0f}u in a {cw}u card")
        divider = top - (top - bot) * (dy + ch) / FH      # x of the split at this y
        if dx + cw > divider - 16:
            raise Overflow(f"{t!r} card crosses the divider at y={dy}")
        s.append(f'<g transform="translate({dx},{dy}) rotate({rot})">'
                 f'<rect x="0" y="0" width="{cw}" height="{ch}" rx="14" fill="#1d1630" '
                 f'stroke="#43385e" stroke-width="2"/>'
                 f'<text x="26" y="{ch/2+fs*0.35:.0f}" font-size="{fs}" '
                 f'fill="#c8bfda">{esc(t)}</text></g>')

    # 412 wide, not 356: "Extract and validate" needs 360u at the legibility
    # floor and the narrower card raised rather than shipping shrunken text.
    rx, rw, rh = 770, 412, 108
    s.append(f'<text x="{rx}" y="206" font-size="32" font-weight="700" fill="#7ee0a0" '
             f'letter-spacing="1.6">{esc(right_label.upper())}</text>')
    for i, t in enumerate(right_items):
        yy = 258 + i * (rh + 34)
        acc = i == 1
        check(t, rx, yy, rw, rh, FW, FH, avoid=LOGO_ZONE_FEATURE)
        size = fit(t, 34, rw - 44, bold=True)
        s.append(f'<rect x="{rx}" y="{yy}" width="{rw}" height="{rh}" rx="20" '
                 f'fill="{"url(#g)" if acc else CARD}" fill-opacity="{1 if acc else 0.94}" '
                 f'stroke="{"none" if acc else EDGE}" stroke-width="2"/>')
        s.append(f'<text x="{rx+rw/2}" y="{yy+rh/2+size*0.35:.0f}" font-size="{size}" '
                 f'font-weight="700" fill="#fff" text-anchor="middle">{esc(t)}</text>')
        if i < len(right_items) - 1:
            s.append(f'<path d="M{rx+rw/2} {yy+rh+6} V {yy+rh+28}" stroke="#b061ff" '
                     f'stroke-width="3.2" marker-end="url(#ret)"/>')
    s.append(caption(FW / 2, 700, cap))
    return "\n".join(s)


# ---------------------------------------------------------------- iceberg

def lay_iceberg(above, below, cap, above_label="WHAT THE DEMO SHOWS",
                below_label="WHAT SHIPPING ACTUALLY TAKES"):
    """Small visible tip, large hidden mass.

    The underwater body widens from 464u to 700u because the hidden items are
    the point of the diagram and have to be readable: the longest is 31
    characters, 526u at 32.
    """
    wl, fs = 330, 32
    bw_top, bw_bot, base = 240, 700, 664
    cx = FW / 2
    widest = max(text_w(t, fs) for t in below)
    if widest > bw_bot - 56:
        raise Overflow(f"hidden item needs {widest:.0f}u, body is {bw_bot}u wide")

    s = [f'<rect x="0" y="{wl}" width="{FW}" height="{FH-wl}" fill="#0b1024" fill-opacity="0.55"/>',
         f'<line x1="0" y1="{wl}" x2="{FW}" y2="{wl}" stroke="#7fb0ff" stroke-width="2.5" opacity="0.55"/>',
         f'<polygon points="{cx},170 {cx+bw_top/2},{wl} {cx-bw_top/2},{wl}" fill="url(#g)"/>',
         f'<polygon points="{cx-bw_top/2},{wl} {cx+bw_top/2},{wl} {cx+bw_bot/2},{base} '
         f'{cx-bw_bot/2},{base}" fill="#2b2150" fill-opacity="0.93" '
         f'stroke="#5b4a8c" stroke-width="2"/>']
    s.append(f'<text x="{cx}" y="142" font-size="40" font-weight="700" fill="#fff" '
             f'text-anchor="middle" letter-spacing="-0.5">{esc(above)}</text>')
    # Items start well below the waterline label: at the old wl+72 the centred
    # first item overlapped "WHAT SHIPPING ACTUALLY TAKES" by 72u horizontally
    # with only 24u of vertical separation.
    first, lab_y = wl + 124, wl + 48
    step = (base - first - 24) / max(len(below) - 1, 1)
    if first - lab_y < 44:
        raise Overflow("first hidden item sits too close to the waterline label")
    for i, t in enumerate(below):
        s.append(f'<text x="{cx}" y="{first+i*step:.0f}" font-size="{fs}" fill="#d6cdea" '
                 f'text-anchor="middle">{esc(t)}</text>')
    s.append(f'<text x="66" y="{wl-24}" font-size="26" fill="#9fc4ff" '
             f'letter-spacing="1.6">{esc(above_label)}</text>')
    s.append(f'<text x="66" y="{lab_y}" font-size="26" fill="#8f87a8" '
             f'letter-spacing="1.6">{esc(below_label)}</text>')
    s.append(caption(FW / 2, 700, cap))
    return "\n".join(s)


# ----------------------------------------------------------------- funnel

def lay_funnel(stages, cap):
    """Narrowing stages.

    The taper used to run 800u down to 300u. The bottom band is the one with
    the accent and the longest label, and 300u cannot hold it at a readable
    size, so the funnel now narrows 940 to 620 - still visibly a funnel, but
    every band can carry its own text. Each band is checked, not assumed.
    """
    top_w, bot_w = 940, 620
    y, h, gap, n = 132, 124, 14, len(stages)
    cx = FW / 2
    s = []
    for i, (label, note) in enumerate(stages):
        wt = top_w - (top_w - bot_w) * (i / n)
        wb = top_w - (top_w - bot_w) * ((i + 1) / n)
        acc = i == n - 1
        room = min(wt, wb) - 48                       # narrowest point of the band
        fs = fit(label, 40, room, bold=True)
        fs_note = fit(note, 30, room)
        s.append(f'<polygon points="{cx-wt/2:.0f},{y} {cx+wt/2:.0f},{y} '
                 f'{cx+wb/2:.0f},{y+h} {cx-wb/2:.0f},{y+h}" '
                 f'fill="{"url(#g)" if acc else CARD}" fill-opacity="{1 if acc else 0.91}" '
                 f'stroke="{"none" if acc else EDGE}" stroke-width="2"/>')
        s.append(f'<text x="{cx}" y="{y+h/2-4:.0f}" font-size="{fs}" font-weight="700" '
                 f'fill="#fff" text-anchor="middle" letter-spacing="-0.5">{esc(label)}</text>')
        s.append(f'<text x="{cx}" y="{y+h/2+fs_note*1.16:.0f}" font-size="{fs_note}" '
                 f'fill="{"#f8eeff" if acc else DIM}" text-anchor="middle">{esc(note)}</text>')
        y += h + gap
    s.append(caption(FW / 2, y + 14, cap))
    return "\n".join(s)
