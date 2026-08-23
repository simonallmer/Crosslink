# CrossLink

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

**Either English is accepted.** Boards and the lexicon are written in British
English; the American spelling is taken on entry and the square keeps whatever
was typed. Only same-length pairs need declaring — CENTRE/CENTER, GREY/GRAY,
DEFENCE/DEFENSE — because the letter count printed on every square already
refuses HARBOR for HARBOUR. The pairs are a written list in `spelling.js`, not a
substitution rule: a rule that swapped -RE for -ER would mark WIER correct for
WIRE, and one that swapped -ISE for -IZE cannot tell PRISE from PRIZE.

**Not every connection is an arrow.** A gutter may be an *equivalence* — a plain
line with no head, reading the same from either end, for a pair where an arrow
would be a lie about which way the fact runs. `HEADLINE — DEADLINE` is the first.

**A connection can turn over.** Where a board gives a gutter a second face,
clicking it turns the sentence over to another way of saying the same join —
sometimes plainer, sometimes only different, sometimes harder. It is free and
counted nowhere: a board solved with every connection turned is solved outright.
That is a category distinction, not leniency — revealing a letter short-circuits
the deduction, and a second sentence about the same relation does not. Board 6
carries the first thirty-four; boards without second faces render as before.

## The boards

Seven, and every one of them passes `tools/check-boards.py` on its own account.
Two more used to stand in front of them — *The Centre Is a Fish* and *Worth Its
Weight*, built before §1 of the spec existed — and they were withdrawn at 2.5
rather than kept as exceptions: between them they broke D1, D2, D4 and E9, and
the first was built on the staged reveal that R0 took away at 1.5. The boards
below renumbered up into the gap.

| № | Title | Size | Links | Stars | What it is |
|---|---|---|---|---|---|
| 1 | Everything Flows | 3×3 | 12/12 | ★★ | The riddle. Three words down the middle lead two lives — a river to the west, money to the east, the same letters either way. |
| 2 | The Gift of the River | 3×3 | 12/12 | ★ | The net. No wordplay anywhere on it; every connection is a plain fact, and the only difficulty is which fact goes where. |
| 3 | Landfall | 5×5 | 34/40 | ★ | The long one. |
| 4 | Half Past Four | 3×3 | 12/12 | ★ | The easiest board in the game on purpose: nine things you could draw, and no word doing a second job. |
| 5 | From the Ground Up | 5×5 | 34/40 | ★ | A garden, which is already a network before anyone puts a grid on it. |
| 6 | Set, Inked and Pulled | 5×5 | 35/40 | ★★★ | The press, both senses. Metal in the west, newsprint in the east, PRESS in the middle meaning both — and every connection turns over. |
| 7 | A Fire That Learned to Push | 5×5 | 32/40 | ★ | A subject board at full size. Five bands and four arms, with STEAM in the middle. |

Boards 1 and 2 are the two kinds the format admits, and the spec names them as
such under E4a: a *riddle*, where the pleasure is the twist, and a *net*, where
the pleasure is that everything really is joined to everything. The second is
not the lesser kind.

Boards 6 and 7 are a third thing, and E14 names it: a **subject board**, where
the layout itself is the argument. Board 7's rows are a sequence and its arms are
branches, and both are legible before a single square is filled — solve it and
you are not holding twenty-five facts about the industrial revolution, you are
holding one shape. Every clue on a subject board carries the fact it depends on
rather than testing for it, so a solver who knew none of them still reaches every
square, and knows them afterwards.

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
lexicon.js                  the definitions, written by hand
registry.js                 the polysemous quarry
vocabulary.js               the general quarry
sound.js                    the noises
cursors.css                 the drawn cursors
puzzles/puzzle-*.js         one file per board, in order
tools/check-boards.py       the acceptance test — D1-D4, H2, L1, E9
```

Adding a puzzle is one file pushed onto `CROSSLINK.puzzles`, plus a `<script>` tag:
a grid of nouns, an `h` table of horizontal verbs and
a `v` table of vertical ones, with `null` where a gutter is barred. `dir` names the
subject: `"right"`/`"down"` mean the first noun acts, `"left"`/`"up"` mean the
second one does.

Board geometry follows `size` automatically — cells shrink for a bigger lattice and
the whole board scales to the page, so a 7×7 needs no CSS.
