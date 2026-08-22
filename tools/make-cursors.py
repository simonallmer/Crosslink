#!/usr/bin/env python3
"""Draws the two cursors as pixel art and writes them into cursors.css as data URIs.

The drawing is done on a deliberately coarse grid — nine pixels across for the
arrow — and then blown up by a whole number, so the pixels stay square and
visible. That coarseness is the whole point: a 1-pixel outline on a 12-pixel
arrow just looks like the system cursor wearing a coat.

Fill is bone rather than white, and the outline is two device pixels at 1x.
"""
import io, os, zlib, struct, base64

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def png(pixels, w, h):
    raw = b""
    for y in range(h):
        raw += b"\x00" + b"".join(bytes(pixels[y][x]) for x in range(w))
    def chunk(tag, data):
        c = struct.pack(">I", len(data)) + tag + data
        return c + struct.pack(">I", zlib.crc32(tag + data) & 0xffffffff)
    return (b"\x89PNG\r\n\x1a\n"
            + chunk(b"IHDR", struct.pack(">IIBBBBB", w, h, 8, 6, 0, 0, 0))
            + chunk(b"IDAT", zlib.compress(raw, 9))
            + chunk(b"IEND", b""))

def in_poly(pt, poly):
    x, y = pt
    inside = False
    j = len(poly) - 1
    for i in range(len(poly)):
        xi, yi = poly[i]; xj, yj = poly[j]
        if (yi > y) != (yj > y) and x < (xj - xi) * (y - yi) / (yj - yi) + xi:
            inside = not inside
        j = i
    return inside

FILL = (246, 240, 220, 255)   # bone
INK  = (0, 0, 0, 255)

def blow(px, w, h, k):
    """Nearest-neighbour upscale by a whole number: square pixels, hard edges."""
    return [[px[y // k][x // k] for x in range(w * k)] for y in range(h * k)]

def render(hit, w, h, thick, cuts=()):
    """hit(x, y) -> True inside the shape. Outline by erosion, fill white.
    `cuts` are black lines drawn inside the shape — the knuckles of the hand,
    which no amount of outlining will give you, because they are not edges."""
    inside = [[hit(x + 0.5, y + 0.5) for x in range(w)] for y in range(h)]
    px = [[(0, 0, 0, 0) for _ in range(w)] for _ in range(h)]
    for y in range(h):
        for x in range(w):
            if not inside[y][x]: continue
            edge = False
            for dy in range(-thick, thick + 1):
                for dx in range(-thick, thick + 1):
                    nx, ny = x + dx, y + dy
                    if not (0 <= nx < w and 0 <= ny < h) or not inside[ny][nx]:
                        edge = True
            px[y][x] = INK if edge else FILL
    for x0, y0, x1, y1 in cuts:
        for t in range(0, 400):
            f = t / 399.0
            x = int(round(x0 + (x1 - x0) * f)); y = int(round(y0 + (y1 - y0) * f))
            for k in range(thick):
                for j in range(thick):
                    if 0 <= y + j < h and 0 <= x + k < w and inside[y + j][x + k]:
                        px[y + j][x + k] = INK
    return px

# --- the arrow: one polygon, on a twelve-pixel grid ---
# Wide head, thick tail. A narrow arrow at this scale is all outline and no
# bone, which is why the first one looked half the size of the hand.
ARROW = [(0, 0), (0, 12.9), (3.1, 9.9), (5.3, 15.6), (7.7, 14.5), (5.6, 9.2), (10.2, 9.2)]

def arrow_hit(s):
    poly = [(x * s, y * s) for x, y in ARROW]
    return lambda x, y: in_poly((x, y), poly)

# --- the pointing hand: blocks for the fingers, lines for the knuckles ---
HAND = [(3,  0, 6, 8),    # index finger, standing up
        (6,  4, 9, 10),   # second finger, folded
        (9,  5, 11, 10),  # third finger, folded
        (2,  7, 11, 14),  # the palm
        (0,  9, 3, 13)]   # thumb
HAND_CUTS = [(6, 5, 6, 10), (9, 6, 9, 10), (3, 10, 3, 13)]

def hand_hit(s):
    boxes = [(a * s, b * s, c * s, d * s) for a, b, c, d in HAND]
    def hit(x, y):
        return any(a <= x < c and b <= y < d for a, b, c, d in boxes)
    return hit

def uri(px, w, h):
    return "data:image/png;base64," + base64.b64encode(png(px, w, h)).decode()

def build(hit_for, w, h, cuts=()):
    """One drawing, blown up by 2 for the ordinary screen and 4 for a retina one."""
    art = render(hit_for(1), w, h, 1, cuts)
    return uri(blow(art, w, h, 2), w * 2, h * 2), uri(blow(art, w, h, 4), w * 4, h * 4)

a1, a2 = build(arrow_hit, 11, 16)
h1, h2 = build(hand_hit, 11, 15, HAND_CUTS)

css = """/* The cursors, drawn as pixel art by tools/make-cursors.py. This file OWNS the
   cursor: style.css must not set one anywhere, because a rule like
   `button.ghost { cursor: pointer }` outranks the plain `button` here and drops
   that control back to the system arrow. Both sizes are the
   same drawing rendered twice, so a retina screen gets crisp edges and not a
   blurred-up 12-pixel arrow. Every rule keeps a system keyword as the last
   fallback, so a browser that refuses the image still has a cursor. */
:root {
  --arrow: url(%s) 0 0;
  --hand:  url(%s) 8 0;
}

/* Everything, including the SVG in the middle of the front page — an element
   the rules missed once, and the cursor changed back to the system one the
   moment you crossed it. */
*, *::before, *::after { cursor: var(--arrow), default; }
* { cursor: image-set(url(%s) 1x, url(%s) 2x) 0 0, default; }

a, button, .tile, .tile *, .noun.reachable, .noun.reachable *, .win-x, .tool,
.toggle, .toggle *, select#which, .wordgrid button, .lex-list button, .lex-play,
.ti-link, .routes, .routes *, .hero.numbered .cell, .hero.numbered .cell *,
.script li em, .gut.spent, .gut.spent * {
  cursor: image-set(url(%s) 1x, url(%s) 2x) 8 0, pointer;
}
button:disabled, .tool:disabled, .hero.numbered .cell.empty,
.hero.numbered .cell.empty * { cursor: var(--arrow), default; }
.noun.selected, .noun.selected * { cursor: var(--arrow), text; }
""" % (a1, h1, a1, a2, h1, h2)

io.open(os.path.join(ROOT, "cursors.css"), "w", encoding="utf-8").write(css)
print("wrote cursors.css — arrow %d bytes, hand %d bytes (1x)" % (len(a1), len(h1)))

# a sheet to look at them enlarged
io.open(os.path.join(ROOT, "tools", "cursor-preview.html"), "w", encoding="utf-8").write(
 '<body style="background:#C6C6BE;padding:20px;font:12px sans-serif">'
 '<p>arrow 1x / 2x, hand 1x / 2x — shown at 8&times;, nearest neighbour</p>'
 + "".join('<img src="%s" style="image-rendering:pixelated;width:%dpx;margin-right:24px;'
           'background:#fff;outline:1px solid #999">' % (u, w)
           for u, w in ((a1, 96), (a2, 96), (h1, 128), (h2, 128))) + '</body>')
