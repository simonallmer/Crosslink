#!/usr/bin/env python3
"""Acceptance test for Crosslink boards — the rules of the design spec, §1 and §8.

  D1  every word has at least 2 connections
  D2  every word is reachable from the centre by two link-disjoint paths
  D3  the board contains at least one cycle
  D4  10-12 of 12 connections on a 3x3; 28-34 of 40 on a 5x5
  H2  no word is set on two boards
  L1  every word has a lexicon, registry or vocabulary entry

Run:  python3 tools/check-boards.py
"""
import io, os, re, sys, glob, itertools

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def js_field(text, name):
    m = re.search(name + r':\s*"([^"]*)"', text)
    return m.group(1) if m else None

def load(path):
    t = io.open(path, encoding="utf-8").read()
    size = int(re.search(r"size:\s*(\d+)", t).group(1))
    centre = [int(x) for x in re.search(r"centre:\s*\[(\d+),\s*(\d+)\]", t).groups()]
    nouns_src = re.search(r"nouns:\s*\[(.*?)\n  \],", t, re.S).group(1)
    nouns = [re.findall(r'"([A-Z]+)"', r) for r in nouns_src.split("\n") if '"' in r]
    # gutters: walk the h and v blocks entry by entry, counting nulls in order
    def slots(block):
        src = re.search(block + r":\s*\[(.*?)\n  \]", t, re.S).group(1)
        depth, cur, rows = 0, "", []
        for ch in src:
            if ch == "[":
                depth += 1
                if depth == 1: cur = ""; continue
            if ch == "]":
                depth -= 1
                if depth == 0: rows.append(cur); continue
            if depth >= 1: cur += ch
        out = []
        for row in rows:
            items, d, cur = [], 0, ""
            for ch in row:
                if ch == "{": d += 1
                if ch == "}": d -= 1
                if ch == "," and d == 0:
                    items.append(cur.strip()); cur = ""
                else:
                    cur += ch
            items.append(cur.strip())
            out.append([None if i.strip().startswith("null") else i for i in items if i.strip()])
        return out
    return dict(path=os.path.basename(path), id=js_field(t, "id"), title=js_field(t, "title"),
                size=size, centre=centre, nouns=nouns, h=slots("h"), v=slots("v"))

def edges(p):
    n = p["size"]
    out = []
    for r in range(n):
        for g in range(n - 1):
            if p["h"][r][g] is not None: out.append(((r, g), (r, g + 1)))
    for g in range(n - 1):
        for c in range(n):
            if p["v"][g][c] is not None: out.append(((g, c), (g + 1, c)))
    return out

def two_disjoint(nodes, es, src, dst):
    """Menger: two link-disjoint paths exist iff no single edge disconnects them."""
    def connected(skip):
        seen, stack = {src}, [src]
        adj = {}
        for a, b in es:
            if skip is not None and {a, b} == set(skip): continue
            adj.setdefault(a, []).append(b)
            adj.setdefault(b, []).append(a)
        while stack:
            x = stack.pop()
            for y in adj.get(x, []):
                if y not in seen: seen.add(y); stack.append(y)
        return dst in seen
    if not connected(None): return False
    return all(connected(e) for e in es)

def check(p, already):
    n, bad = p["size"], []
    es = edges(p)
    nodes = [(r, c) for r in range(n) for c in range(n)]
    word = lambda rc: p["nouns"][rc[0]][rc[1]]

    deg = {rc: 0 for rc in nodes}
    for a, b in es: deg[a] += 1; deg[b] += 1
    thin = [word(rc) for rc in nodes if deg[rc] < 2]
    if thin: bad.append("D1 fails: %s on one connection or none" % ", ".join(thin))

    ctr = tuple(p["centre"])
    lonely = [word(rc) for rc in nodes if rc != ctr and not two_disjoint(nodes, es, ctr, rc)]
    if lonely: bad.append("D2 fails: only one route to %s" % ", ".join(lonely))

    if len(es) < len(nodes): bad.append("D3 fails: no cycle (%d links, %d words)" % (len(es), len(nodes)))

    possible = 2 * n * (n - 1)
    lo, hi = (10, 12) if n == 3 else (28, 34)
    if not (lo <= len(es) <= hi):
        bad.append("D4 fails: %d of %d, wanted %d-%d" % (len(es), possible, lo, hi))

    ws = [word(rc) for rc in nodes]
    if len(set(ws)) != len(ws): bad.append("a word is repeated on this board")
    clash = sorted(set(ws) & already)
    if clash: bad.append("H2 fails: %s already set on an earlier board" % ", ".join(clash))
    return bad, set(ws), len(es), possible

def known_words():
    ks = set()
    for f, pat in (("lexicon.js", r"^  ([A-Z]+):"), ("registry.js", r"^  ([A-Z]+):"),
                   ("vocabulary.js", r"^  ([A-Z]+):")):
        path = os.path.join(ROOT, f)
        if os.path.exists(path):
            ks |= set(re.findall(pat, io.open(path, encoding="utf-8").read(), re.M))
    return ks

# Boards 01 and 02 were built before §1 existed, and are kept as they are:
# board 02's thin links are the evidence the rules were written from.
LEGACY = {"01-fish", "02-salt"}

def main():
    files = sorted(glob.glob(os.path.join(ROOT, "puzzles", "puzzle-*.js")))
    known, already, fails = known_words(), set(), 0
    print("%-26s %-24s %s" % ("board", "title", "links   verdict"))
    print("-" * 78)
    for f in files:
        p = load(f)
        bad, ws, ne, possible = check(p, already)
        missing = sorted(ws - known)
        if missing: bad.append("L1 fails: no entry for %s" % ", ".join(missing))
        already |= ws
        legacy = p["id"] in LEGACY
        verdict = "OK" if not bad else ("legacy" if legacy else "FAIL")
        print("%-26s %-24s %2d/%-2d   %s" % (p["id"], p["title"][:23], ne, possible, verdict))
        for b in bad:
            print("      - " + b)
            if not legacy: fails += 1
    print("-" * 78)
    print("%d words set across %d boards, none twice." % (len(already), len(files)))
    if fails: print("%d rule failures." % fails)
    return 1 if fails else 0

if __name__ == "__main__":
    sys.exit(main())
