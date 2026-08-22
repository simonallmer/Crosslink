# Crosslink

A game of connections. Nouns sit in the cells; the relations between them sit in
the gutters. The board is a (2N−1)² lattice: for N = 3 that is 5 × 5 — nine nouns,
twelve gutters, four structural corners.

Open it with the `crosslink` launch config (`python3 -m http.server 8812`). The
front page leads to the daily board, the puzzle index, the word list and the
rulebook; every rule below holds at any odd size.

## What the engine implements

**The centre opens.** The board starts empty except for the four verbs around the
middle square and its letter count. The first move is to deduce a four-letter noun
from *"⟶ swims in"*, *"⟵ catches"*, *"↓ hatches into"* and *"↓ becomes, in Latin,"*.
Nothing else on the board is legible until that word lands. One move teaches the
whole format.

**The board unfolds.** A verb surfaces when one of its two nouns is known; a cell
shows its letter count when a solved neighbour reaches it. So the puzzle grows
outward from the centre like a crystal, and the finished grid is a record of the
order you found things in.

**Three gutter states.** Printed (a live verb), hidden (a real relation you cannot
see yet), and barred (no relation is claimed here — the flat dash). Barred gutters
are printed from the start, exactly as a crossword prints its black squares: a
gutter that is dark but *not* barred is itself a clue.

**Verb-first hints.** The ladder is: surface a hidden verb → reveal a letter →
reveal the word. A verb is a route in and costs nothing; letters mark the square,
and the mark is on the board in paler ink, not in a statistics panel.

**Quiet, edge-local error checking.** A gutter turns red only when both of its
nouns are down and the pair cannot both be right. It never says which side is
wrong, and it says nothing at all while a neighbour is still empty.

**Words are used once.** Entering a word already on the board is refused.

## Demo 01 — *The Centre Is a Fish* (3×3)

```
SALMON  →spawns→  ROE  →is called ikura in→  JAPAN
  ↓returns from the        ↓hatches into              ——
OCEAN   ←swims in←  FISH  ←catches←          NET
  ↑is the largest          ↓becomes, in Latin,        ——
PACIFIC     ——      PISCES →is a sign of the→ ZODIAC
```

Nine nouns, nine verbs, three barred gutters. FISH has four sockets; ROE and OCEAN
have three; SALMON is the corner with two independent routes in, which is the
crossing the format lives on. The door is deliberately easy.

## Demo 02 — *Worth Its Weight* (5×5)

Twenty-five nouns, twenty-six verbs, fourteen barred gutters, and SALT alone in the
middle. The four opening verbs are *"⟶ yields"*, *"⟵ is named for"*,
*"↑ is drawn from the"* and *"↓ was once paid as"* — two pointing in, two out —
against a four-letter count.

```
MOUNTAIN  TUNNEL    SUN     VINEGAR  OLIVE
ROCK      PICK      SEA     LETTUCE  OIL
CRYSTAL   MINE      SALT    SALAD    SAUCE
CUBE      WAGE     SALARY   LATIN    TONGUE
MINT      COIN     SOLDIER  ROME     EMPIRE
```

It is one field — rock, sea, table, Rome — so the routes are etymological as often
as they are factual: *SALAD is named for SALT*, *SALT was once paid as SALARY*,
*SALARY is taken whole from LATIN*, *SOLDIER is named for the solidus, a COIN*.
LATIN and SALAD carry four verbs each; the rim words carry one.

Verified: every one of the twenty-five is reachable from the centre by unfolding
alone, in five rings. The board is harder than demo 01 in the right way — the
centre takes real thought, and the corners are nearly forced by the time you get
to them.

## Two things to decide by playing

**Peek one ring ahead.** The toggle does two things: it shows letter counts one
step beyond the solved frontier, *and* it lets you enter words there. Strict mode
is tighter and more elegant; peek mode is the only mode in which a wrong word can
sit unnoticed and be caught later by a neighbour, which is the crossword's best
feeling. Play both.

**3×3 or 5×5.** Both are in the picker now. Demo 01 is nine nouns and nine verb
phrases; demo 02 is twenty-five and twenty-six — more writing than a whole week of
Hotel Metropole, every day. The centre opening is identical at either size; what
changes is the length of the middle game, and how much of it is unfolding rather
than deducing.

## Known limitation, and what it implies

The error check compares against the answer key, so it will flag *FISH swims in
WATER* — which is true — as a contradiction. Proving an edge false rather than
merely not-the-answer needs a corpus that holds false relations, not a key. That
corpus is also what makes the archive browsable and what a competitor cannot copy
in a weekend. It is the asset; the mechanic is not.

## Files

```
index.html                  shell
style.css                   the look, light and dark
engine.js                   lattice, edges, visibility rules, rendering
app.js                      state, typing, hint ladder, error check, finish
puzzles/puzzle-01-fish.js   3x3 — the door
puzzles/puzzle-02-salt.js   5x5 — the long one
```

Adding a puzzle is one file pushed onto `CROSSLINK.puzzles`, plus a `<script>` tag:
a grid of nouns, an `h` table of horizontal verbs and
a `v` table of vertical ones, with `null` where a gutter is barred. `dir` names the
subject: `"right"`/`"down"` mean the first noun acts, `"left"`/`"up"` mean the
second one does.

Board geometry follows `size` automatically — cells shrink for a bigger lattice and
the whole board scales to the page, so a 7×7 needs no CSS.
