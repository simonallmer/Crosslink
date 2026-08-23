# CrossLink — Design Spec

**Revision 3.9 · 23 August 2026**
*0.2 → 0.3: the full-lattice rule is withdrawn; relation types, the editorial
standard, the language rules and the period dress are added.*
*0.3 → 0.4: the language rule is corrected — it governs answers, not connectors;
error check becomes an opt-in switch; the dress gets its readability pass and a
period window that runs to 1997.*
*0.4 → 0.5: the board becomes a desktop of three windows, and the lexicon joins
the format as a standing feature with its own editorial obligation (§11).*
*0.5 → 0.6: 3×3 becomes the standard format; the weekly becomes a hunt of fifty
boards over one registry of words (§8); the site around the board is built (§12).*
*0.6 → 0.7: the game is **A Game of Connections**; progress tracking is cut until
there is an account to hang it on; the location bar carries the network of sites.*
*0.7 → 0.8: the game's own word for a gutter is a **connection**, never a verb
(§0); board №3, Everything Flows, is built from the registry (§13).*
*0.8 → 0.9: polysemy stops being the entry fee (§3 E4); a general word list of
470 words joins the quarry, with countries, cities, continents and figures (§14);
boards get a difficulty in stars; boards №4 and №5 are built; the acceptance test
of §1 exists and runs.*
*0.9 → 1.0: **E6**, the determinability test, and **E7**, connections written to
different shapes — the two rules boards №4 and №5 failed on first writing, and
were rewritten to pass.*
*1.0 → 1.1: the cursors are drawn rather than borrowed (A2e), and entering a word
no longer moves it (A2f).*
*1.1 → 1.2: the cursors get coarse enough to read as drawn and cover every
element (A2e); the masthead becomes one face in one case with a designed
background (A7); the game makes a noise (A8).*
*1.2 → 1.3: board size leaves the difficulty scale — it is length, not
difficulty; boards №6 and №7 are built, both at one star, one of them a 5×5.*
*1.3 → 1.4: **A3 is reversed** — connections stay written out; cursors.css owns
the cursor outright; board №6 is rewritten, and breaks a new rule, E8.*
*1.4 → 1.5: **the reveal is gone** — every connection is shown from the first
moment (§0, R0); the banner loses its confetti; the arrow gets a continuity test.*
*1.5 → 1.6: the arrow and the two theme icons are drawn by hand rather than
derived (A2e); light and dark become a choice, by a sun and a moon (A9).*
*1.6 → 1.7: **the last gate goes** — any square may be written in, in any order
(R0b); Peek ahead is retired with it.*
*1.7 → 1.8: the game is styled **CrossLink** (A10); both cursors are redrawn at
full detail and shown at their true size, one art pixel to one screen pixel.*
*1.8 → 1.9: board №7 is rewritten against E6, and **E9** joins the acceptance
test — no connection may name a word that is on its own board.*
*1.9 → 2.0: the arrow is traced from a reference instead of remembered.*
*2.0 → 2.1: error check is **on** by default (H6); the sound a word makes when
the check is off becomes a question rather than a small win (A8b).*
*2.1 → 2.2: three rules out of one playtest — **E10** a clue may not fit a
neighbour better than its own answer, **E11** hedge a clue that reads as a
universal law, **E12** no plurals. Board №7 rewritten against all three.*
*2.2 → 2.3: the hand is traced from a reference like the arrow; **E13** — a clue
may not require an argument to see.*
*2.3 → 2.4: the words on the closing page open the lexicon like every other word
in the game (N3b).*
*3.8 → 3.9: **H2 is repealed** — a word may be set in more than one board, and a
crossing is a feature rather than a warning (§8); **E19**, the scale has no term
for how much a clue asks you to know, and board №7 takes two stars by hand;
the location bar is ordered as a masthead rather than a filing cabinet (S6);
**A13**, the demonstration (§23).*
*3.7 → 3.8: **V1 admits the hyphen** and the board seats it for the solver;
**V6** opens the quarry to brands and companies on a two-part test; the rulebook
documents the turn and stops publishing Shift+S; the epigraph's attribution
becomes a word you can look up (§22).*
*3.6 → 3.7: board №7 gets its thirty-two second faces, written to E16b's split
rather than to a blanket softening (§18).*
*3.5 → 3.6: the trade idiom is restored to INK—HEADLINE and **W2 is read
properly at last** — the language rule governs answers, not connectors, so trade
colour belongs in a gutter by right (§21).*
*3.4 → 3.5: INK—HEADLINE again, and the over-correction undone — the quantity
claim was the true half all along.*
*3.3 → 3.4: PROOF—CASE comes back with the misreading taken out of it; PLATE—CASE
goes; INK—HEADLINE stops claiming ink is blacker in a headline, which it is not
(§21).*
*3.2 → 3.3: **D4's ceiling stops being a failure.** The floor is a fact about
the graph and stays hard; the ceiling was taste, said "roughly", capped a 5×5 at
85 per cent while letting a 3×3 be 100 per cent, and had no reason written under
it. It is a note now. Board №6 goes to 35 of 40.*
*3.1 → 3.2: three clues on board №6 rewritten from a playtest — **E18**, a clue
must name the thing that separates its answer from the near miss (§21).*
*3.0 → 3.1: **R2 is built** — the equivalence, specced in §2 at 0.3 and drawn
for the first time at 3.1 (§20); **E17**, the word-level connection and its
limit; the compositor's-jargon clue on board №6 is withdrawn under E13.*
*2.9 → 3.0: **Escape goes back** (§9, A12), and finds a trail bug the Back
button had all along; the gutter is measured off its words instead of its
arrowhead, so no connection runs past three lines (§17b, A2d); the audio clock
is woken on the first gesture rather than the first note, and every noise now
comes before its redraw (A8f).*
*2.8 → 2.9: **W1 gets a dialect** — boards and the lexicon are written in
British English, the American spelling is accepted on entry, and the pairs are a
written list rather than a rule, because a rule marks misspellings correct
(§19, W1a-W1c).*
*2.7 → 2.8: **a connection has two faces** — click one and it turns over to a
different sentence about the same join, free and counted nowhere (§18, A11);
E16 governs what may be written on a back; board №6 carries the first
thirty-four; `check-boards.py` now reads both faces, and caught an E9 breach on
one within a minute of being taught to.*
*2.6 → 2.7: board №6 is rebuilt from a 3×3 into a 5×5 around the PRESS double,
and is the first board on the shelf at three stars (§17c); **E15** — a clue may
teach a fact, but the square must not depend on it (§17c).*
*2.5 → 2.6: board №1 is rewritten against the two rules §16 left open, E10 and
E7; boards **№6 — Set, Inked and Pulled** and **№7 — A Fire That Learned to
Push** are built, both at one star, both **subject boards** — a new obligation on
the net, E14 (§17); A2d gets the number it was missing (§17b); the `twist` term
is found to over-count on a board with a declared theme (§14).*
*2.4 → 2.5: **the legacy list is closed** — boards №1 and №2 are withdrawn rather
than exempted, and the five that remain renumber up into the gap (§16); giving
the board up becomes **Shift+S** in every state (§9); the front page's four
buttons stop breaking asymmetrically on a phone held sideways (§12b).*

---

## 0. What the game is

Words in the cells. **Connections** in the gutters. **Every connection is shown
from the first moment**; you start at the centre and walk outward along
sentences, writing where you can reach.

- **R0 — The map is open; only the writing is gated.** *Changed at 1.5.* A
  connection used to surface only when one of its two words was known, which made
  the entire board hostage to a single square: fail to see the centre and there
  was nothing else on the page to think about, and no second way in. Now the
  whole network is legible at once — every sentence, and every word's length in
  the clue panel and the written form — while **where you may write** still grows
  outward from the middle. Deduction is unlimited from the first second; entry is
  earned. That is the trade the format was actually asking for.
  *What it costs:* the small pleasure of a connection appearing as you solve, and
  the first rung of the hint ladder — *Surface a link* has nothing left to do and
  no longer appears. Worth it.

- **R0b — Any square may be written in, in any order.** *Changed at 1.7, and it
  is the other half of R0.* Opening the map without opening the writing left the
  lock half on: you could deduce the far corner and still not be allowed to set
  it down. Now nothing is locked. The squares a placed word already touches are
  still **marked** — a dashed blue frontier — because that is usually where the
  next word comes easiest, but a mark is not a gate.
  *What went with it:* **Peek ahead**, which lit the ring beyond the reachable
  squares. With every connection shown and every square open it had nothing left
  to reveal, and a switch that does nothing is worse than no switch. One switch
  remains, Error check.
  *What it costs:* the board no longer visibly grows outward from the middle —
  every square is a box from the first second. That was a real pleasure and it is
  gone. What replaces it is that no one is ever stuck, which is worth more.
  *What it does not fix:* you may deduce a far square before you can reach it, and
  you will still have to walk to it. If that turns out to be the real complaint,
  the answer is to let any square be written in and keep the lit ones as a
  suggestion — one line in `pick`, and a different game.

**The name matters.** The game is *Crosslink — A Game of Connections*, and what
sits in a gutter is a **connection**, never a "verb". A verb is what a connection
is *written as* — grammar, not subject matter. The moment the interface says
"verb", the game sounds like a lesson in parts of speech instead of what it is:
finding a word by what it is joined to. The word `verb` survives in the puzzle
files as a data key, where no player will ever meet it.

> "The dictionary defines words only in terms of other words."
> — Tim Berners-Lee, CERN, 1994

Every proposal below is judged against one sentence: **does it feed the walk, or
does it let the solver step around it?**

---

## 1. Link density — enough, not everything

### The finding

Demo 02 stalled in the west. Measured off the live board:

| Puzzle | Connections claimed | Possible | Missing |
|---|---|---|---|
| 01 — The Centre Is a Fish (3×3) | 9 | 12 | 3 |
| 02 — Worth Its Weight (5×5) | 26 | 40 | **14** |
| 03 — Everything Flows (3×3) | 12 | 12 | 0 |

Worse than the total is the distribution. **Nine of twenty-five nouns in demo 02
hang from a single relation**: MOUNTAIN, SUN, VINEGAR, OLIVE, TONGUE, MINT,
EMPIRE, CUBE, WAGE. A one-link noun is a coin flip with one clue and no
cross-check. CUBE and WAGE sit at the end of a single-file chain
(PICK → ROCK → CRYSTAL → CUBE), so one miss kills four squares.

### Withdrawn: the full lattice

v0.2 proposed filling every adjacency (40/40 on a 5×5). **Struck.** The board
looked empty because the verbs were as visually loud as the nouns, not because
there were too few of them — §6 fixes that with typography instead. Emptiness is
not a defect; a network with slack in it is a network you can see the shape of.

### The rules that stand

- **D1 — Degree floor.** No noun may have fewer than **2** relations. Corners
  have a ceiling of 2, so corners are always at full stretch.
- **D2 — Two ways in.** Every noun must be reachable from the centre by at least
  **two link-disjoint paths**. This is the rule that would have saved CUBE, and
  it is the real rule — D1 is just its cheapest consequence.
- **D3 — Close a loop.** Every board must contain at least one **cycle** that
  returns to a word you already have. Coming full circle — arriving back at SALT
  from the far side, the way a rumour comes back to you in *Stille Post* — is the
  best feeling the format has. Boards should be built to produce it, not to
  produce completeness.
- **D4 — Budget, not target.** Roughly **10–12 of 12** relations on a 3×3, and
  **28–34 of 40** on the occasional 5×5. Below that, D2 usually fails. Above it,
  the board reads as a wall rather than a web.

  *Amended at 3.3: the floor is hard and the ceiling is not, because they are not
  the same kind of rule.* Below the floor **D2 stops being satisfiable** — that
  is a fact about the graph, and a board that breaks it is broken. The ceiling
  is a matter of taste about density, and three things were wrong with treating
  it as a failure:

  1. **The rule says "roughly."** `check-boards.py` read a hedge as a hard range.
  2. **It was inconsistent with itself.** 12 of 12 on a 3×3 is **100 per cent** —
     a full lattice, explicitly allowed, and board №1 is one. 34 of 40 on a 5×5
     is **85 per cent**. The same board at two sizes was held to two standards,
     and nobody wrote down why. Per word the density is identical either way.
  3. **The struck proposal was a mandate, not a permission.** v0.2 wanted to
     *require* 40/40. Striking a requirement is not the same as imposing a ban,
     and §1 has been read as the second for eleven revisions.

  The ceiling now prints as a note — *"35 of 40, above the usual 34: dense, not
  wrong"* — and the run still passes. What survives of the original argument is
  the part worth keeping: **slack is legible.** A gutter left bare is printed as
  a bar and says *no relation is claimed here*, which is information the solver
  can use, the way a crossword's black squares are. Fill every gutter and that
  sentence can no longer be said. So a constructor should still want some bars.
  They should not be made to invent one by arithmetic.

### 3×3 is the standard format

Settled at 0.6, and for four reasons that all point the same way:

1. **The centre carries weight.** On a 3×3 the middle word touches four connections and
   every other square is one or two steps from it. The board has a subject.
2. **Nine words fit in the head at once.** You can hold the whole board while you
   work it, which is what makes the connections *thinkable* rather than merely
   checkable — and what makes the words worth keeping afterwards.
3. **It fits a phone** without the sideways scroll a 5×5 forces.
4. **It is constructible to §1's standard.** 12 possible relations is a
   neighbourhood a constructor can actually close; 40 is a wall.

5×5 stays in the format for occasions, not as the norm.

### Acceptance test *(built)*

`tools/check-boards.py` reads every board in `puzzles/` and checks D1–D4, H2 (no
word twice across the whole game) and L1 (every word has an entry). It prints one
line per board and names what failed.

```
python3 tools/check-boards.py
```

Boards 01 and 02 are marked **legacy** and do not fail the run: board 02's thin
links are the evidence the rules were written from, and it is kept as it is.

---

## 2. Relation types — three kinds of line

Today every gutter is a directed arrow: subject → verb → object. Two more kinds
are wanted, and both are cheap to draw and instantly readable.

- **R1 — Directed** (`→` / `←`), as now. *A PICK works a MINE.*
- **R2 — Equivalence** (a plain line, no head, `—`). Reads the same in both
  directions. *DOG same species as CAT.* Useful for symmetry, and for pairs
  where an arrow would be a lie about which one came first.
- **R3 — Opposition** (a line with T-bars at both ends, `⊣—⊢`). The two words
  are held apart rather than joined. *PENGUIN never seen with polar opposite BEAR.*

**Why opposition earns its place:** it lets a clue carry contradiction, which is
a different kind of thought than association, and it opens the wordplay in §3.

**Data shape.** A gutter becomes `{ verb, kind, dir }` where `kind` is
`"dir"` (default), `"eq"` or `"opp"`; `dir` is read only when `kind` is `"dir"`.
`edgeList` already resolves subject and object — for `eq` and `opp` the two cells
are peers, and the end-of-game sentence prints in board order (left→right,
top→bottom).

---

## 3. The editorial standard — lateral, not trivial

**The model clue:** *PENGUIN never seen with polar opposite BEAR.*

Two puns working at once — **polar** (the bear, the poles) and **opposite** (the
hemispheres, the contradiction) — and between them they pin the answer to exactly
one word. That is the standard.

- **E1 — Every puzzle carries at least one lateral hook** of that grade. A board
  of merely-true relations is a board of facts, not a puzzle.
- **E2 — The wordplay must also disambiguate.** A pun that is decorative is
  worth little; a pun that narrows a plausible field of six words to one is the
  whole craft.
- **E3 — No "river in Poland" clues.** Retrieval trivia is not the game. If the
  only route to a word is having memorised a list, cut it.
- **E4a — Two kinds of board, and both are Crosslink.** A board of double
  meanings (№3) is a *riddle*: the pleasure is the twist, and it belongs at two
  or three stars. A board where every connection is simply true (№4) is a *net*:
  the pleasure is that everything really is joined to everything, and it belongs
  at one. The second kind is not the lesser kind — it is the one that shows what
  the format is actually about, and the difficulty scale exists so both can be
  shipped without pretending they are the same thing.
- **E4 — Polysemy is a tool, not the entry fee.** SALT the mineral and the wage,
  MINT the plant and the coinage: the same word wearing two coats is the best
  square on any board, and no board should be without one. But a board made
  *entirely* of double meanings is a board of tricks, and it locks the game out of
  everything a plain fact can do — geography, history, the way one thing is simply
  made of another. Board №4 has almost no wordplay on it at all and is still a
  Crosslink. Use the twist where it pays; do not pay to have it everywhere.
- **E5 — No mass production.** Every puzzle is read and edited by hand before
  release. A generator may propose grids; it may never publish one.
- **E6 — The determinability test.** For every square, read only the connections
  that touch it and ask: *does this land on one word, or on a field of twenty?*
  "— is the capital of …" and "— is mostly …" are both true of Egypt and useless
  for finding it; a hundred countries fit. **"— buried its kings in a …" fits one.**
  Every square needs at least one connection that is nearly sufficient on its own,
  with the rest confirming it. On an easy board this must be checked square by
  square; on a hard board the near-sufficient clue may be the wordplay itself.
  The test does not mean *on the nose*: "is the dust-blown capital of" narrows to
  a dry country without naming the desert.
- **E10 — A clue may not fit a neighbour better than its own answer.** This is
  the one that costs boards. *"BARK is the skin of a TRUNK"* is true, and hopeless
  with TREE sitting one square away — worse, **the lexicon's own entry for BARK
  says "the skin of a tree", so the game was arguing with itself.** *"a BRANCH
  reaches for the SKY"* fitted TREE and TRUNK as well as BRANCH, and both were on
  the board. The test is not *is this true of the answer* but **is there anything
  else on this board it is truer of**. E9 forbids naming a neighbour; E10 forbids
  describing one.
- **E11 — Hedge a clue that reads as a universal law.** *"a TREE bears an —"*
  states a fact about trees, so the mind supplies the parts of a tree: trunk,
  root, branch. *"a TREE may be the kind that bears an —"* is about one
  particular tree, and the answer can be a fruit. Absolute phrasing invites the
  **category**; hedged phrasing invites the **instance**. Where the answer is one
  case of a general thing, hedge: *may*, *might*, *most of*, *for one week*.
- **E13 — A clue may not require an argument to see.** *"a BEE is most of the
  point of a BLOSSOM"* is defensible — the flower exists to be pollinated — and
  it is not a clue, it is a thesis. A solver should be able to picture the thing
  or know the fact; if getting there needs a chain of reasoning about why the
  world is arranged as it is, rewrite it. It is now *"BLOSSOM smells sweet to
  bring in a BEE"*, which anyone who has walked past a fruit tree already knows.
- **E12 — No plurals, in the clue or the answer.** A square holds one word, so a
  clue is written for one thing. *"a thousand of these"* is out; *"is carried a
  thousand times into a"* says the same and stays singular.
- **E9 — No connection may name a word that is on its own board.** A clue that
  contains its own neighbourhood is not a clue. `tools/check-boards.py` enforces
  it, and it caught board 02 red-handed on the first run: *CRYSTAL of salt is
  always a CUBE*, on a board whose middle square is SALT.
- **E7 — Write the connections to different shapes.** A board that reads *rides a
  / carries a / is hauled by a / drops an* is a board nobody can quote a line
  from afterwards. Vary the grammar deliberately: a bare verb, a verb with a
  measure in it, a clause, a small aphorism, a fact with a number. One board
  should contain at least one line worth repeating.

---

## 4. Words admitted to the board

- **W1 — Answers are English.** Always. Including the English forms of place
  names: MUNICH, not München; ROME, not Roma.
- **W2 — The rule governs answers, not connectors.** No answer is ever a foreign
  word. Connectors are where other languages belong, and they are welcome there:
  "is called ikura in", "is named for the solidus, a". A connector that carries a
  foreign word is doing the work the format is for — the solidus *is* the link
  between SALARY and COIN, and knowing that salt was paid as one is the reward
  for walking that gutter. Colour in the verb, English in the cell.
- **W3 — Places are fair game.** Cities, countries, seas, rivers — in English.
- **W4 — People, only at Britannica weight.** A person may appear only if they
  would plausibly hold an encyclopaedia entry in fifty years. No internet-native
  fame, no trends. A person whose name is also a common word (HAM, BACON, HOOVER)
  is the ideal case, because the square works whether or not you know the person.
- **W5 — The 25-year test.** Crosslinks are kept in a Journal and must be
  playable a quarter-century from now. Anything that requires knowing what was
  current in the year of publication is out. This is the test that W4 exists to
  serve, and it outranks every other consideration about vocabulary.

---

## 5. Help — the definition mode

An optional aid: for the square you are standing on, a classic crossword-style
definition.

Keep it, but pay for it. A definition is the one hint that answers a square
*without using the lattice* — a door out of the game's own logic.

- **H1 — Second rung of the hint ladder** (the first, *Surface a link*, was
  retired at 1.5 with the reveal): Reveal a letter
  (*partial*) → **Read the definition** (*partial*, once per square) → Reveal the
  word (*given*).
- **H2 — One square at a time**, never printed for a square you are not standing
  on, and gone when you leave.
- **H3 — Written cryptic-adjacent, not dictionary**, and *harder* than the
  relations around it. If the definition is easier than the two verbs touching
  the square, it is written wrong.
- **H4 — Counted in the end-of-game report**, alongside letters and given words.
- **H5 — Puzzle field:** `defs`, parallel to `nouns`. No `defs` block, no third rung.

**The risk, named:** if definition mode is comfortable, Crosslink becomes a
crossword with decoration. The ladder position and the *partial* mark are what
stop that. If playtesters open the definition before reading the verbs, move it
below "Reveal the word" or cut it.

### Error check *(built)*

- **H6 — Error check is on by default.** *Reversed at 2.1.* It used to be off,
  on the principle that nothing should go red unless the solver asked for red.
  That principle protects the wrong person: the default should be the one a
  first-time solver wants, and a first-time solver wants to know. Turning it off
  is now the deliberate act — and it is a real one, worth having, because a board
  that never contradicts you is a different and harder game.
- **H7 — On, it is immediate and local.** A wrong word goes red and struck
  through the moment it is entered, in its own square. It says *this word*, not
  *something around here*.
- **H8 — Off, the board never contradicts you at all.** The old behaviour — a
  gutter turning red once both its words were down — is gone. It was a third
  thing, quieter than an error and louder than silence, and it made the solver
  do forensics on a sentence to find out which end was lying. Two clean states
  beat three ambiguous ones.

---

## 6. The dress — 1994 hypertext *(built, in review)*

The concept comes from the early web; the surface should too. The clean
newspaper-puzzle look was borrowed, not ours.

**Standing decisions**

- **A1 — The board is a page of links.** A square you can reach is a raised white
  link box on grey; a word you have placed is a **visited link** (purple,
  underlined); a word the board gave you is grey italic — a dead anchor. A square
  nothing reaches is not a box at all, only a dotted outline where a box could go.
- **A2 — The nouns outweigh the verbs, always.** Nouns: Times, 15–17px, in a
  bevelled box. Verbs: Verdana 10px in gutters shorter and narrower than the noun
  cells. This is the fix for "the board looked empty" — the emptiness was the
  verbs claiming equal weight, not the gaps. Verdana rather than Courier because
  legibility beats purity at 10px, and Verdana is 1996, inside the window.
- **A2b — The gutters are wires, not labels.** Each visible relation draws a hairline
  the length of its gutter, with a solid triangular head at the end that touches
  the square it points at, and the verb printed on the wire. The board reads as a
  link diagram — which is what it is — and direction is legible at a glance
  instead of at a squint.
- **A2c — Every letter gets its own writing line.** The slots are separated
  underscored boxes, not a run of characters, so the length of a word is
  countable without reading the tally in the corner. The tally stays anyway.
- **A2e — The cursors are drawn, not borrowed.** A period page under a 2026
  system arrow is a costume with the label showing. `tools/make-cursors.py` draws
  both — the arrow every mouse has had since 1981, and the pointing hand that
  meant *link* in Mosaic — and ships them as data URIs in `cursors.css`, hotspots
  at the arrow's point and the finger's tip. Three things make them read as
  drawn rather than as the system cursor in a coat:
  0. **One file owns the cursor.** `style.css` sets none, anywhere. A rule like
     `button.ghost { cursor: pointer }` living in the stylesheet outranks the
     plain `button` selector here by specificity, and that control silently drops
     back to the system arrow — which is what happened to Restart, Enter and the
     hint button, and is invisible in a screenshot.
  1. **A coarse grid, blown up whole.** The arrow is twelve pixels across, the
     hand eleven, each enlarged by two for an ordinary screen and four for a
     retina one. Whole-number scaling only: the pixels stay square and visible,
     which is the entire point. A one-pixel outline on a twelve-pixel arrow just
     looks like the system cursor.
     *The arrow was drawn on a smaller grid than the hand at first, and because
     it is the thinner shape the outline ate its fill: it read as half the size
     of the hand and mostly black. The two now finish at 24×36 and 22×30 css
     pixels, which is the test — not the grid they were drawn on, but the weight
     they carry on screen next to each other.*
  2. **Bone, not white.** #F6F0DC. White reads as a modern cursor; bone reads as
     a cursor that was drawn by somebody.
  3. **Small pixel art is drawn, not derived.** Three attempts at deriving the
     arrow from a polygon and an erosion outline all came out crooked: at twelve
     pixels the erosion ate the heel into fragments and stepped the tail at
     uneven intervals, so it read as a flag on a bent pole. The arrow is now
     eighteen rows of hand-placed pixels in `ARROW_ART` — `X` outline, `.` bone,
     space nothing — and it is a classic arrow because somebody put each pixel
     where it goes.
     *The tail took four goes.* The first two were twisted because the two ink
     walls stepped right at different rates and the end was never closed. The
     third was closed and still wrong, for a subtler reason: **the tail was
     running at 45°, parallel to the head's own hypotenuse**, so it read as a
     lightning bolt rather than a pointer. A real arrow's tail is close to
     upright — it moves right one pixel every two rows — and it hugs the head
     instead of shooting away from it.
     *The fourth go fixed the end.* A tail closed with a lid the full width of
     the tail has a flat bottom, and a flat bottom stops the lean dead. The cap
     is now two pixels wide, sitting under the bone only, so the two walls finish
     diagonally and the tail ends the way it was travelling.
     *Then the enlargement itself turned out to be the mistake.* Shrinking the
     **drawings** to keep the cursor small cost exactly the detail that makes a
     cursor look like one: at nine pixels across there is no room for a heel,
     three folded fingers, or a tail that leans. And blowing a small drawing up
     two-fold does not put the detail back — it makes clip art.
     *And then the tail went altogether.* It took four attempts and three
     separate rules — lean evenly, close the end on the diagonal, keep two
     pixels of bone so it stays connected — and it was still the first thing
     anyone noticed as wrong. **So it is not drawn from memory any more. It is
     traced.**
     The Windows 95 arrow at normal size sits on Wikimedia Commons as
     `Windows_95_ARROW_M_32x32-4.png`, which Commons holds to be public domain —
     *"simple geometry ... ineligible for copyright"*. `tools/make-cursors.py`
     records how it was read: loaded into a canvas, sampled at the centre of each
     of the 32×32 logical cells, printed as X and dot. The result is
     `ARROW_ART`, fifteen by twenty-five, pixel for pixel.
     **Five attempts from memory produced five wrong arrows, and every one was
     wrong the same way: too short.** The real head is fourteen rows of fill, not
     ten. The tail is three pixels wide, not two. The heel takes five rows to
     come back to the left edge. Proportion is the whole of it, and proportion is
     exactly what memory does not keep — which is a general lesson about drawing
     anything from a description, including a description you wrote yourself.
     **The hand was traced next, and needed to be.** `Cursor_Hand.png`, 19×24,
     public domain on the same grounds. The remembered version had *two* folded
     fingers where the real one has three, and stood two rows shorter than the
     arrow — which is exactly why it read as the smaller of a mismatched pair.
     A cursor set is a set: they have to have been drawn to the same height.
     **One art pixel is one screen pixel.** The arrow is twelve by twelve, the
     hand fourteen by nineteen —
     which is what a cursor was in 1994 and roughly what the system cursor still
     is. On a retina screen the 2× asset gives each art pixel a crisp 2×2 block,
     so it is sharp without being large. If it is ever wanted bigger the only
     clean move is exactly double: anything between resamples, and a resampled
     pixel cursor is worse than no pixel cursor at all. The same lesson applies to the sun and moon in §A9: the first
     pair were drawn from circles and rays and came out a rifle target and a
     letter C.
     **The bone must still be one connected region**, and the generator checks it:
     `bone_is_whole` flood-fills the fill colour and fails the build if it is in
     two pieces. One black pixel across the middle of the arrow is the first thing
     the eye finds, and no screenshot will ever show it to you, because a
     screenshot does not capture the cursor. It has to be a test, not a look.
  4. **They cover everything.** The rule is on `*`, not on a list of containers.
     The first version missed the SVG in the middle of the front page, and the
     cursor changed back to the system arrow the moment you crossed the emblem —
     which is worse than never having drawn one.
  **Every rule keeps the system keyword as its last fallback**: a browser that
  refuses the image still has a cursor. Disabled controls keep the arrow, because
  a hand over a dead button is a lie.
- **A2f — Entering a word must not move it.** The letters you type stand in fixed
  boxes, and the word that is entered stands in *the same boxes at the same size*
  — only the hand changes, Courier while you are writing it, Times once the board
  has taken it. Before this, the entered word was set in a smaller serif with
  tighter spacing, so every square visibly shrank at the moment of entry: the
  board flinched each time you got something right, which is precisely the wrong
  moment to flinch. Nothing on the board may move except in answer to something
  the solver has just done.
- **A2d — A verb is never cut off.** Labels wrap and the gutter is sized to hold
  the longest verb on the board; nothing is truncated, ellipsised or clipped, in
  either state. All 35 verbs across the two demos were measured against their own
  gutters and none spills. A constructor writing a longer verb than the gutter can
  hold will see it overlap, not disappear — visible failure, never silent loss.
- **A3 — A connection stays written out, always.** *Reversed at 1.4.* It used to
  fold away to its arrow once both its words were down and come back on hover.
  That was wrong twice over: the board is a page of sentences, and a sentence you
  have earned should be readable without going hunting for it; and the tooltip
  that replaced it covered the square next door. Solved connections now fade to
  55% and stay where they are — the eye still goes to the open ones first, which
  was the only thing the folding was ever for.
- **A3b — The status bar is one line, and the line has an end.** It truncates
  with an ellipsis, so anything written for it must fit: the idle text is now
  *"Words in the cells. Connections in the gutters. Any square, any order."* The
  previous one ran off the edge and said nothing after *"Everything is shown from
  the start, and any square may be"* — a rule the reader could not finish reading
  is not a rule they have been told.
- **A4 — The status bar reads out link targets.** Hovering a square writes
  `http://simonallmer.com/crosslink/01-flow/river.html` into the footer —
  `?????.html` for a square you have not solved. The real domain, so the joke is
  also a signature. Period-correct, and it says what the game is about without a
  word of instruction.
- **A5 — The window is 1994–1997.** Berners-Lee's web is the reference, but the
  dress may use anything that shipped by 1997 where it buys legibility — Verdana,
  reliable table layout, coloured link states. Chrome is bevelled, rules are
  `ridge`, the page sits on tiled grey, the caret blinks. No skeuomorphic jokes
  beyond that — no under-construction GIFs, no marquee.
- **A6 — Dark mode stays.** Same structure, terminal palette. 1994 had no dark
  mode; 2026 phones do, and the mapping holds.

- **A7 — Controls are named short.** *Error check*, *Restart*.

**Open:** themes (§7) recolour the links and the wire heads. A themed board
should change its accent, never its furniture.

---

## 11. The desktop — three windows *(built)*

The page is no longer a page. It is a **window on a desktop**, with a title bar,
and two more windows may be opened either side of it. Each has an **X**.

- **N1 — The main window.** Title bar reads *Crosslink — [puzzle title]*. Its X
  closes the game and returns you to **simonallmer.com**, which is the truthful
  thing for an X to do.
- **N2 — Left: Written form.** Every sentence the board has surfaced, whole or
  half-known, in reading order — solved ones included, because reading the ones
  you have is how you work out the ones you have not. Known words are visited
  links; unknown ones are their own count in underscores. Opened by clicking the
  sentence block in the clue panel (there is a *Read every sentence →* line to
  say so), closed by its X.
- **N3b — Every word set in type opens its entry.** On the board, in the written
  form, in the word list — and now on the closing page, which is the one place a
  solver reads all their sentences at once and the likeliest place to wonder what
  a word actually means. They were already coloured and underlined like links,
  which made not being clickable a small lie.
- **N3 — Right: Lexicon.** Opened by clicking any word you have placed, on the
  board or in the written form. The entry stays until you click another one, and
  a **Collected this session** list holds every word you have placed, each one
  clickable. Closed by its X.
- **N4 — When all three do not fit**, the side windows fall in underneath the
  main window rather than beside it. The board is never squeezed to make room for
  a helper.

### The lexicon's editorial obligation

- **L1 — Every answer word on a board must have an entry before that board ships.**
  No exceptions, including proper nouns; a gazetteer line is an entry.
- **L2 — Entries are written in the house voice, not copied.** Short, plain,
  and allowed to be dry-funny. Never lifted from a dictionary.
- **L3 — The second sense is usually the one the board is using.** MINT the herb,
  then MINT the coining-house. SALT the mineral, then the old sailor. This is what
  makes the lexicon a *helper for a word that still needs connections* rather than
  a crib: it shows you the other coat the word is wearing, which is exactly the
  coat the next gutter wants (§3 E4).
- **L4 — It opens only on words already placed.** It can never hand you a square.

---

## 7. Titles and themes

**Titles — confirmed.** Every puzzle carries a title and a standfirst. Keep
titles suggestive, never literal — a title that names a grid word is a leak.

**Themes — proposed.** A theme declares the body of knowledge the puzzle draws
on, so the solver knows which shelf to reach for.

- **T1** — Named in the eyebrow: *Crosslink · Middle-earth · No. 14*.
- **T2** — Its own accent replaces the link blue and the visited purple. Paper,
  bevels and type never change.
- **T3** — Categories: invented worlds (Middle-earth; the Allmer universes —
  Lunyra, Futory, Scaretales, Casino Camino, Seven Wonders), historical periods,
  places, fields (the kitchen, the orchestra, the forge).
- **T4** — Unthemed is the default and stays the majority. The weekly must be
  solvable by someone who has read nothing in particular.
- **T5 — Honesty rule.** A themed board may use proper nouns from its world, but
  every *relation* must still be a plain English sentence. "FRODO carries the
  RING" is fair. A relation that only parses if you know an appendix is not.
- **T6 — Puzzle field:** `theme: { name, accent, accentDark }`. Absent = house blue.

---

## 8. The hunt — fifty boards, one registry

A daily that expires is an ephemeral thing, and Crosslink is meant for a Journal
that still plays in twenty-five years. So the frame is not a calendar. It is a
**hunt**.

- **H1 — Fifty boards, 3×3.** Four hundred and fifty squares in the whole game.
- **H2 — No word is set twice on one board. Across the game, a word may repeat.**
  *Repealed and rewritten at 3.9.* It used to read *every word is set once, in the
  entire game* — a word caught was caught for good. The rule was written to make
  the Word List feel like a collection, and it cost more than it bought:

  1. **It burned the useful words first.** CITY, WATER, HEAT, IRON, STONE are the
     words a hundred boards want. Under H2 the first board to reach one took it
     out of circulation for the other ninety-nine, and the constructor's problem
     got harder with every board shipped rather than easier.
  2. **It made the quarry a countdown.** Fifty boards at nine words is 450 of a
     688-word list. The rule guaranteed the last boards would be built from
     whatever was left, which is a rule that degrades the game as it goes.
  3. **A repeat is a crossing, not a collision.** The same word on two boards in
     two different senses is the thing this format is *about*. Forbidding it
     forbade the best move available.

  What stays is the part that was doing real work: **a word may not appear twice
  on the same board.** A solver holding a word would be asked to find it again
  four squares away, which is a trick of memory rather than a connection — and
  `submit` refuses it anyway. `check-boards.py` still fails a board that repeats
  itself, and now *reports* a crossing instead of failing it. The Puzzles page
  says how many words cross boards rather than warning about them, and the Word
  List gives a word one number per board it is set in.
- **H3 — The registry is the quarry.** The 149 polysemous words in
  *Crosslink — Polysemous Words* are the backbone the boards are built out from;
  the words they pull in around them join the list as they are set. The Word List
  today holds **180** words: 149 from the registry and 31 supporting words already
  set in the two demo boards.
- **H4 — No progress tracking, for now.** Marking words as collected needs
  somewhere to keep them, and browser storage without an account is a promise the
  game cannot keep — a cleared cache is a lost hunt. So the Word List is a
  **reference**, not a scoreboard: it says where a word lives, not whether you
  have caught it. Green comes back when accounts do.
- **H5 — *Play Daily* stays**, and means **the most recent board**, not a board
  that expires. New boards go on releasing at a steady cadence (a week is the
  working assumption); the difference is that nothing is ever missed, only
  not-yet-caught.
- **H6 — Six-board bank.** §3 makes editing the bottleneck. Never ship from empty.
- **H7 — One board, one sitting.** A 3×3 should close in five to ten minutes.

---

## 13. Board №3 — *Everything Flows* *(built)*

The first board built to this spec, and the first built out of the registry.

```
MOUTH   NOTE      ORGAN
RIVER   BANK      VAULT
BED     CURRENT   WIRE
```

**The structure is the idea.** The middle column is three words that lead two
lives — NOTE (music, money), BANK (river, money), CURRENT (water, electricity,
and the root of *currency*). The west column is the river those words half belong
to; the east column is the money they half belong to. The board is a demonstration
that the two worlds share their vocabulary.

**The crossings that carry it:**
- MOUTH sings a NOTE / RIVER ends in a MOUTH — a mouth is the body's and the river's.
- ORGAN echoes under a VAULT — an organ is the instrument and the body's; a vault
  is the bank's and the church's. Both words change sides in one sentence.
- VAULT is emptied by WIRE — the only modern sentence on the board, and the one
  that makes the money side feel like a current too.

**Against the rules of §1:** degrees are 2/3/4 with a floor of 2 (D1 ✓); the full
3×3 grid graph is 2-connected, so every word has two link-disjoint paths from the
centre (D2 ✓); it is full of cycles (D3 ✓); 12 of 12 connections, top of the
budget (D4 ✓). No word on it appears on board 1 or 2 (H2 ✓). Five of its nine
words come from the registry — BANK, CURRENT, MOUTH, NOTE, ORGAN — and four are
supporting words that now join the list: RIVER, VAULT, BED, WIRE. All four were
given lexicon entries before it shipped (L1 ✓).

**The opening.** The centre shows four connections and no words: *… cuts its own
—, — is built around a …, — issues a …, — steers the …*. *Issues* and *is built
around* together should give BANK to most solvers; *cuts its own* only makes sense
afterwards, which is the right order for the board to teach itself. (An earlier
draft read "a BANK locks a VAULT", which is not a thing a bank does to a vault.
It is built round one.)

---

## 13b. Boards №4 and №5 *(built)*

**№4 — *The Gift of the River*, 3×3, ★.** SAND · DESERT · CAMEL / PYRAMID · EGYPT ·
NILE / SPHINX · CAIRO · AFRICA. Twelve of twelve connections and almost no
wordplay: the proof of E4a, that a board where everything is simply, truly joined
is still a Crosslink — and the floor of the difficulty scale.

*It failed E6 on the first writing.* The centre opened on *raised a · is fed by
the · is mostly · is the capital of*, which says "a country" and nothing more:
finding EGYPT from it was guesswork. Rewritten, the centre opens on **buried its
kings in a · is farmed along the · is nine-tenths · is the dust-blown capital
of** — the first of those fits one country on earth, and the other three confirm
it. Elsewhere *crosses a* became *goes a week without water in a* (which finds
CAMEL by itself) and *sits outside* became *keeps its riddle outside*.

**№5 — *Landfall*, 5×5, ★★.** Weather across the top, the ship through the middle,
the seabed along the bottom. **34 of 40** connections and **no word on one link** —
the board 02 failure, fixed.

*It failed E7 on the first writing*: thirty-four connections in one shape,
*rides a / carries a / is hauled by a*, and not a line worth repeating. Rewritten
to different shapes — **a CLOUD cannot hold its RAIN**, **a HARBOUR is worth
having only in a STORM**, **WIND is only any use in a SAIL**, **an ANCHOR will not
hold on a REEF** — and given the lateral hook it lacked: **a SAILOR counts speed
in a KNOT**, which is where the unit comes from. The centre also failed E6, since
*carries a MAST* and *drops an ANCHOR* fit BOAT as squarely as SHIP, and both are
four letters; **needs deep water in a HARBOUR** settles it.

Both pass `tools/check-boards.py` clean, and all 93 connections across the five
boards were measured against their own gutters: none clips (A2d).

---

## 13c. Boards №6 and №7 — the easy pair *(built)*

**№6 — *Half Past Four*, 3×3, ★.** WATER · YEAST · HEAT / FLOUR · DOUGH · OVEN /
BAKER · LOAF · CRUST. Twelve of twelve. The easiest board in the game on purpose:
every word is one you could draw, every connection is one step, and no word is
doing a second job.

*The first draft failed three ways, and all three are worth writing down:*

- **BREAD and LOAF on the same board.** Two words for one thing. A solver holding
  the first is being asked to find a synonym of it four squares away, which is not
  a connection but a trick of vocabulary. Hence **E8 — no board may carry two
  words for the same thing**, which belongs beside H2's no-word-twice.
- **"BREAD browns into a CRUST."** A crust is *part of* a loaf, not what a loaf
  becomes. A connection that dresses a part up as a successor is false, and false
  is the one thing a connection may not be. It reads now as *a LOAF wears a CRUST*
  and *a CRUST hardens in an OVEN*.
- **"a BAKER scores with a KNIFE."** *Score* means to slash a loaf before it goes
  in: true, and invisible to anyone who has not stood in a bakery. A connection
  that needs the trade to be understood fails E6 for everyone outside it. Cut,
  along with the knife.

**№7 — *From the Ground Up*, 5×5, ★.** *Rewritten twice.* First at 1.9, having
failed E6 in the field — a solver could not place a single word. Then at 2.2,
from a longer playtest, and that round produced E10, E11 and E12 above. The
particular kills: blossom breaking out of a BRANCH (a stem or a stalk fits as
well), a BEE *dusted yellow* by blossom (which reads as an explanation of why
bees are yellow, and that is genetics), a SQUIRREL and a TWIG (no association at
all), and a SPADE that *turns up* a WORM (which sounds like a volume knob).
**A clue that survives the constructor is not the same as a clue that survives a
solver.**

*Also from that playtest:* ORCHARD dropped from ease 3 to 2. It is an ordinary
English word and it is not an ordinary word for everyone — the reader of a board
is not always a native speaker, and the ease scale is the only place that fact
can live. Its lexicon entry now carries the German, French and Italian for it. The first draft was written
to be true and stopped there — *gets inside an*, *works over*, *ends as* — and
true is not enough, because each of those fits fifty words. Every connection now
carries the one fact that belongs to its answer and to nothing else: a BEE
**dances directions inside** a HIVE, a SQUIRREL **runs head first down** a TRUNK,
MOSS **gathers on a still** STONE, a GARDENER **plants, for someone else,** an
ORCHARD. **E6 is not a rule about difficulty. It is the rule that decides whether
the board can be solved at all.**

 Sky along the top, the tree through the
middle, the ground along the bottom: TWIG · NEST · SKY · HONEY · HIVE / SQUIRREL ·
BIRD · BRANCH · BLOSSOM · BEE / TRUNK · BARK · TREE · APPLE · BASKET / MOSS ·
GRASS · ROOT · WORM · ORCHARD / STONE · SOIL · SEED · SPADE · GARDENER.

**34 of 40, no word on fewer than two links, and one star** — which is the point
of it. It answers the question board №5 raised and the scale could not previously
answer: *can a 5×5 be easy?* It can, if every word is ordinary and every
connection is one plain step. BLOSSOM becomes an APPLE; a SEED lets down a ROOT;
a SPADE finds a WORM. The quarry now stands at **658 words across 111 set in
seven boards**, none of them twice.

---

## 15. The masthead and the noise *(built)*

- **A7 — One face, one case, three sizes.** The masthead was three unrelated
  ideas stacked: a Courier kicker, a Times capital title, a Times italic
  subtitle. Now all three lines are Times, all three are capitals, and the only
  things that change down the stack are size and tracking — 12px at .34em,
  54px at .14em, 13px at .38em. That is how a title page has been set for two
  hundred years, and it is the cheapest coherence there is.
- **A7b — The banner is designed, not defaulted.** Behind the type: a night-blue
  gradient, six broad rays from below, and a dither pattern at eight per cent.
  Gold rules flank the two small lines. It is what a designer with two days, a
  256-colour palette and a deadline in 1994 would have made, and it does the job
  a masthead is for: it says this was worth making.
  *The Memphis confetti — magenta triangles, gold squares, cyan zigzags in the
  corners — was cut at 1.5.* Two ideas were competing behind one title: the light
  and the litter. The light won. A background that is doing one thing carries the
  type; a background doing two argues with it.
  *The gold rules either side of the kicker went at 1.6*, and only those: the
  same flourish on both small lines made the masthead look like it was being
  presented twice. It belongs on the subtitle, which is the line that closes the
  block.
  *Rules drawn inside the artwork were struck* — the banner crops as it scales,
  so anything meant to sit near the type has to be drawn in CSS, next to the type.
- **A8 — The game makes a noise, and it is synthesised.** `sound.js` builds every
  sound out of square waves with hard envelopes: no files, nothing to fetch,
  nothing to go missing, and exactly what a sound card of the period could do
  without loading a sample.

  | | |
  |---|---|
  | a control going down | one short high blip |
  | a square picked up | a softer, lower tick |
  | a letter set down | a very short key click |
  | a word entered, error check **off** | two neutral tones, no verdict |
  | a word entered, error check **on** | a rising third for right, a low saw buzz for wrong |
  | a window opening / closing | a slide up / a slide down |
  | the board closing | a four-note fanfare |
  | S, giving the board up | a long slide down |

  - **A8a — One listener, not fifty.** A single capturing click handler on the
    document gives every button, link, tile and square its noise, so no handler
    anywhere else has to remember to make one.
  - **A8b — The verdict noises follow the switch, and silence is not enough.**
    With error check off nothing on the board contradicts you, so nothing in the
    speakers may either: the entry sound is identical whether the word is right
    or wrong. But identical is only half of it — **the sound must also not
    congratulate.** It was a rising fifth, and a rising fifth is what a game plays
    when you have done something right; every word set down felt like a small win
    it had no business promising. It is now two notes a whole tone apart, the
    second quieter: the shape of *is that right?* rather than *well done*.
  - **A8e — The fanfare belongs to a board you closed, not one you gave up.**
    Pressing S used to play the closing four-note run as well as the falling
    give-up slide, which is the same lie in the other direction.
  - **A8c — There is an off switch, in the toolbar, and it is honest.** Default
    on, because the noise is half the period; one click to silence, and the
    control does not itself make a sound when it is turning sound off.
  - **A8f — The clock is woken on the first gesture, and every noise comes before
  its redraw.** Two separate lags, both removed. *One:* a suspended context has a
  stopped clock, so a note booked for `currentTime` is booked against a time that
  is not moving; `resume()` returns a promise, and by the time it settles the
  clock has jumped past the moment. The first sound after any suspension arrived
  late or not at all — and browsers suspend on their own whenever a tab goes to
  the background. The context is now primed on the first pointer or key event of
  any kind and resumed on `visibilitychange`, so it is running before anything
  needs to be heard. *Two:* `submit()` redrew the board and *then* made the
  noise. A full redraw of a 5×5 is eighty-one elements and some six and a half
  milliseconds, sitting between the key going down and the sound coming out for
  no reason: the sound is the answer to what you just did, the redraw is only its
  consequence. Sound first, everywhere.
- **A8d — The audio context is built on the first click**, because a browser
    will not let a page make a noise before it has been touched.

- **A9 — Light or dark is a choice, by a sun and a moon.** The system's
  preference is the default and always has been; what is new is that the toolbar
  carries a thirteen-pixel sun (in light) or crescent moon (in dark), and one
  click overrides the system in either direction. The tokens are declared twice —
  once under `prefers-color-scheme: dark` guarded by `:not([data-theme="light"])`,
  once under `[data-theme="dark"]` — so a manual choice beats the machine's
  either way, which is the only arrangement that lets someone say *no, light,
  now* at ten at night.
  *Kept for the session, in `sessionStorage`, and no longer.* A display
  preference is not progress (H4), and a tab is about the right length of memory
  for it: long enough to survive a reload, short enough not to be a promise.

- **A10 — The game is styled *CrossLink*.** The intercap is the house style of
  exactly this period — HotWired, WebCrawler, InfoSeek, AltaVista, GeoCities,
  QuickTime, HyperCard, PageMaker — inherited from identifier conventions and
  worn openly in logotypes for about five years. *CrossLinks* would be wrong:
  plurals then belonged to magazines and sections, and the game is one lattice.
  **The URL stays lowercase** — `simonallmer.com/crosslink/` — which was equally
  the convention. The masthead is set in capitals, so the intercap is invisible
  there and shows where it should: the title bar, the eyebrow, the prose.
- **A10b — A bullet before a link is furniture, not part of it.** The dot in
  *● Back to Simon Allmer* sits outside the anchor: grey, unclickable, no
  underline. Anything blue on this page is a thing you can go to, and a
  decoration that borrows the link colour spends that promise for nothing.

---

## 14. The quarry and the difficulty scale *(built)*

### The word list is no longer only polysemous words

The registry of 149 double-meaning words was the seed, not the vocabulary. Beside
it now sits a **general list of 470 words**, hand-written with a short definition
each, in `vocabulary.js`:

| Kind | Count | For |
|---|---|---|
| nature, animal, body | 125 | the concrete stock most connections are made of |
| thing, travel, food | 120 | made objects, and what is done with them |
| people, art, idea | 85 | roles, works, and the few abstractions worth having |
| country | 44 | one word each, English name, continent + capital + rough population |
| city | 34 | one word each, with the one fact that places it |
| continent | 6 | all of them |
| figure | 52 | last name only, with dates and what they are known for |

Rules the list is kept to:

- **V1 — One word, no spaces — and hyphens are admitted.** *Amended at 3.8.* A
  cell holds one word, and that has not changed: no spaces, ever. But the ban on
  hyphens was banning a class of word the format wants — **BERNERS-LEE**, whose
  own quotation opens the rulebook, and COCA-COLA under V6 — for a reason that
  turned out to be mechanical rather than editorial. The board only ever admits
  A–Z from the keyboard, so a hyphen was a slot nobody could fill.
  *So the board fills it.* A slot whose character is not a letter is **seated
  from the start**, printed like a revealed letter that costs nothing, and the
  caret steps over it exactly as it steps over one. The solver types COCACOLA and
  the hyphen is already there. Nothing else about V1 changes: still one word,
  still no spaces, and still a single square.
- **V2 — Only what a reader would know without looking it up.** FRANCE, not
  Uzbekistan; PARIS, not Rabat. The test is whether a general reader could place
  it, not whether it is important.
- **V3 — Figures at Britannica weight, and no name-dropping.** Fifty-two names
  across all of history, chosen because their *work* connects to other words on a
  board: EDISON to the bulb, WATT to steam and to the unit, WRIGHT to flight.
  MUSK and JOBS are in because their names are also common words, which is the
  only reason a living person earns a square.
- **V4 — Facts round and checkable.** "About 68 million people", never a number
  that pretends to be current.
- **V6 — Brands and companies are admitted, on a two-part test.** *New at 3.8.*
  A name earns a square if it is **either hugely influential or has survived
  twenty-five years** — and it may satisfy the second test later, which is the
  point of writing it that way: a company founded this year is not eligible now
  and may be in 2051, without the rule needing to be rewritten. This is W4's test
  for people, applied to the things people build, and it serves the same master:
  **W5, the 25-year test**, which outranks everything else about vocabulary.
  A brand that is merely large is out. A brand nobody under forty will recognise
  in a quarter-century is out.

  It fits the format better than it might look. The best of these names are
  already common words wearing a second coat — **APPLE**, SHELL, ORACLE, AMAZON,
  ORANGE, GAP, VISA — which is exactly the case E4 calls the best square on any
  board, and W4 calls the ideal person for the same reason: the square works
  whether or not you know the company.

- **V5 — Every word carries an *ease*.** 3 = a word you can picture at once
  (MOUSE, BREAD, PARIS). 2 = ordinary but less concrete (INCOME, PRAGUE, EDISON).
  1 = abstract or needing a fact to place (GRAVITY, EMPIRE, MEMORY).

The quarry now holds **646 words**: 149 from the registry, 470 general, and the
rest set in boards.

### Difficulty, in stars

Every board carries one, two or three stars, computed in `CL.stars`:

```
per word   hardness = 3 − ease                    0 easy … 2 hard
           twist    = domains ≥ 2 ? min(domains,4)/4 : 0
board      raw = mean(hardness + twist) + bare/possible
stars      raw < 0.30 → ★    raw < 0.55 → ★★    else ★★★
```

**Board size is deliberately not in the sum.** It was, at two tenths of a star
for a 5×5, and that was wrong twice over: it made it arithmetically impossible
for a large board of plain words to be rated easy, and it confused *length* with
*difficulty*. A 5×5 is more work than a 3×3, not harder thinking, and the index
already says which size it is. Board №7 is the proof — twenty-five words, all of
them ordinary, and one star.

- **Familiar words make a board easy.** That is `ease`, and it is why a board of
  MOUSE and BREAD reads faster than a board of INCOME and CULTURE.
- **Second meanings make it hard.** That is `twist`, straight off the registry.
- **Missing connections make it hard.** That is `bare/possible`, and it is the
  term that finally explains board 02: a word with one way in is a guess, not a
  deduction. Thin boards are hard boards, and the scale should say so.

Where it lands today: №1, №4, №5, №6, №7 at ★; №3 at ★★; №2 at ★★★. Honest
about the shelf, and it shows something worth knowing: five of seven boards are
easy ones, because easy boards are what the format has been proving lately. The
next ones should be written for the top of the scale.

- **S7 — A puzzle may override with `stars`.** The reckoning is a default; a
  constructor who has watched someone play knows more than an arithmetic.

- **E19 — The scale has no term for how much a clue asks you to know.** *New at
  3.9, from a playtest.* `ease` measures how easily a word can be **pictured**,
  and every word on board №7 scores well on that and should: a LOOM, a BOILER, a
  SHAFT, a FURNACE are all things you can see at once. But picturing a loom is not
  knowing what a loom does, and that board asks the second thing of nearly every
  square — that a seam is a band of coal, that a mill stood beside a river before
  steam, that a wheel needs a lip to hold a rail. A non-technical reader meets a
  board of familiar objects joined by unfamiliar facts, and the reckoning cannot
  see the difference because it only ever looks at the words.

  The board is **★★ by hand** under S7. A reader who found it hard is a better
  instrument than a formula that was never measuring this. Whether the repair is a
  third per-word term — *how much must be known to place it* — or a per-board
  declaration is open; the first is more honest and much more work, since it means
  a second number against all 688 words.

**Open, at 2.6: `twist` over-counts on a board with a declared theme.** Board №6
is a print shop — the title says so, the standfirst says so, and all nine words
sit in their printing sense. The reckoning gives it ★★ anyway, and the whole of
that is `twist`: PRESS and SPINE carry four registry domains each, which is 2.00
of a raw 0.417. Strip the twist and it is 0.194, the second-easiest board on the
shelf.

The term is measuring a hazard the board has already spent. `twist` counts what a
word *could* mean; it cannot see that eight neighbours and a title have settled
which meaning is in play. Nobody solving a print shop weighs PRESS the newspapers
against PRESS the machine.

Not fixed, because the obvious fix is wrong. Counting only the domains a board
*uses* would need the constructor to declare them, and a constructor who has to
declare the twist will declare the flattering number. The likelier repair is to
discount `twist` where the board's words cluster in one field — which is a
measure the quarry's `k` already almost supports. Until then, S7 and a written
reason, as on board №6.

---

## 12. The site *(built)*

Crosslink is no longer one page. It is a small site inside one window, navigated
the way a 1994 browser navigates: a **toolbar** under the title bar with *Back*,
*Home*, and a **Location** field that names the page you are on
(`http://simonallmer.com/crosslink/words.html`).

- **S1 — Front page**, after the Smithsonian's: a banner reading *Simon Allmer
  Presents · CROSSLINK · A Game of Connections*, an emblem of the board itself in
  four colours, and four bevelled tiles either side of it — **Play Daily**, **Word
  List**, **Puzzles**, **Rulebook**, each with its own accent — with **Back to
  Simon Allmer** as a footnote link.
- **S1b — The front page says something of its own.** Its footnote line is not the
  rule printed in the status bar. A page that repeats itself twice on one screen
  is a page that was not edited.
- **S2 — Puzzles.** Every board so far, numbered, with its title, its size and the
  first line of its standfirst. **The title is a link and opens the board**, as
  does the Play button beside it — anything blue and underlined must be clickable,
  or the convention is a lie. Foot of the page carries the uniqueness check from H2.
- **S3 — Word List.** The whole quarry, alphabetical, four columns. Blue and
  linked to its board number when it has been set in one; grey when it is waiting
  for a board. Clicking any word opens the **Lexicon** — the same window, the same
  function as in the game — and clicking its number plays the board it was set in.
- **S6 — The location bar carries the network, in masthead order.** *Amended at
  3.9.* An arrow beside the Location field drops the Allmer sites, each opening in
  a new tab. They were alphabetical, which is a filing order and put
  allmercomics.com above the group it belongs to. They now run as they are always
  named: **allmergroup.com**, then **simonallmer.com**, then the six studios in
  house order — Comics, Films, Music, Games, Journals, Snacks — and only then the
  rest of the network A–Z.
  It is period-correct (every browser of 1994 had that arrow), it puts Crosslink
  inside the group rather than beside it, and it costs one line of chrome.
- **S4a — The Rulebook opens with the passage the game comes from**, quoted whole
  and attributed to Berners-Lee at CERN in 1994, with nothing added. An epigraph
  that explains itself is not an epigraph. A player should be told where the game
  comes from on the way in and left to make of it what they like.
- **S4 — Rulebook**, not "How to Play". A rulebook is what a game of this period
  came with, and it lets the prose be prose rather than a list of tips.
- **S5 — Naming.** Pages are named as documents, not as actions: *Word List*,
  *Puzzles*, *Rulebook*, *Written form*, *Lexicon*. The one exception is
  *Play Daily*, which is a button and should read like one.

**Held back for later:** progress. See H4 — nothing is remembered, deliberately,
until there is an account to remember it in.

### 12b. The front page on a phone held sideways *(built at 2.5)*

S1 puts four tiles either side of the emblem — two left, two right. It was a
wrapping flex row, and a wrapping flex row has a failure state in the middle: at
any width where three columns will not fit but two tiles will, only the
right-hand pair drops, and the page reads as two buttons beside the emblem and
two stranded under it. A phone in landscape lands almost exactly in that gap.

- **S1c — The four tiles sit in a square, or they sit two and two.** There is no
  third arrangement, and no width at which one tile is alone on a line. Wide:
  three columns, two tiles each side of the emblem. Narrow: two columns, the
  emblem spanning both, two tiles above it and two below. Both are symmetrical
  about the emblem, which is the only thing that makes four buttons look chosen
  rather than fallen.

  Written as a grid rather than a wrapping row, so the two states are declared
  instead of emerging. The tile columns dissolve with `display: contents` in the
  narrow state, which lets their four tiles place themselves against the two-column
  track without a second copy of the markup.

---

## 9. Typing — fixed

**Was:** the draft was a prefix string, so a letter revealed at slot 3 still
demanded four keystrokes — you typed dead letters to walk past a letter the board
had already given you.

- **A12 — Escape unwinds, innermost thing first.** The site list if it is open;
  then the square you are standing on; then the page you are on. Only the last
  is new — the first two were already bound, and the whole of the design is that
  going back sits *underneath* them and not over them. Escape must never take
  the page out from under someone who only meant to shut a menu. It is checked
  by `defaultPrevented`, so the hidden input's own handler wins when it has
  focus and the document's handler does the same job when it has not.

  *What it found:* `trail` recorded non-moves. Clicking **Puzzles** while on
  Puzzles pushed Puzzles, so Back sent you to the page you were already looking
  at, `nav-back` was permanently enabled, and after enough of them Back from the
  front page walked you *forward* into a stale board. The Back button always had
  this; binding a key people mash to the same function is what made it obvious.
  `go()` now declines to record a step that does not move.

**Shift+S gives up the board.** *Changed at 2.5.* It used to be a bare **S**
whenever no square was selected, and **Shift+S** only while one was — and the
bare half of that was a trap: one stray keystroke before you had clicked
anywhere threw the whole board away, and giving up is the single move the game
will not let you take back. It is now **Shift+S** in both states. Two keys for
the irreversible move, one key for nothing. It fills the board and marks every
square *given*, so the report reads *0 solved outright, 9 given*. There is no
way to take a board that way and have it read as solved.

**Now:** one slot per letter. Revealed letters are seated the moment they are
revealed; typing lands in the next slot you still owe and steps over the seated
ones; backspace clears only what you typed. A blinking caret marks the next open
slot, and a reveal arriving mid-word no longer wipes the draft.

---

## 10. Open questions

1. **Do `eq` and `opp` need different verb grammar?** "same species as" and
   "never seen with polar opposite" are both readable, but the end-of-game
   sentence list will want a house style for non-directed lines.
2. **Should barred gutters be visible from the start?** They currently show as
   grey bars, which now read as severed wires — arguably better than before, but
   under D4 there will be 6–12 of them. Consider hiding a bar until both its
   neighbours are reachable.
3. **Does the definition deserve its own mark**, so the report can separate
   "solved with a letter" from "solved with a definition"?
4. **Does the weekly need a daily companion?** A 3×3 daily and a 5×5 weekly is a
   familiar shape. Decide before launch, not after.
5. **How far does the 1994 dress go?** A fake location bar, a "document done"
   status, a visited-link history across puzzles — each is available, and each
   risks turning a style into a bit.

---

## 16. The legacy list is closed *(done at 2.5)*

§1's acceptance test shipped with an exemption: boards **№1 — The Centre Is a
Fish** and **№2 — Worth Its Weight** were marked *legacy*, printed their failures
and passed the run anyway, on the grounds that board №2's thin links were the
evidence D1–D4 were written from.

That was the right call while they were the only boards there were. It is the
wrong one now that there are five that pass. Between them the two broke:

| | №1 Fish | №2 Salt |
|---|---|---|
| **D1** degree floor | JAPAN, NET, PACIFIC, ZODIAC on one link | nine words on one link |
| **D2** two ways in | five words with a single route | nineteen of twenty-five |
| **D4** budget | 9 of 12 | 26 of 40 |
| **E9** no naming | — | *"CRYSTAL of salt is always a CUBE"*, on a board whose middle square is SALT |

And board №1 was built on a rule that no longer exists. Its whole premise — one
four-letter word in the middle and nothing else on the page legible until it
lands — was withdrawn at 1.5 by **R0**, which opened the map. Its own standfirst
had already been rewritten to say *nine connections, all of them shown*, which is
a board arguing with the reason it was made.

- **B1 — There is no legacy list.** Every board in `puzzles/` passes
  `tools/check-boards.py` on its own account. A board that fails is a board that
  does not ship, and the rules are kept honest by having nothing exempt from them.
  The evidence D1–D4 were written from is in §1, where evidence belongs, not on
  the shelf as a playable board.

**The renumbering.** The app numbers a board from its file, and numbers it again
from its place in the list; the two must agree, so the survivors move up.

| was | is | title |
|---|---|---|
| №3 | **№1** | Everything Flows |
| №4 | **№2** | The Gift of the River |
| №5 | **№3** | Landfall |
| №6 | **№4** | Half Past Four |
| №7 | **№5** | From the Ground Up |

Every board reference in the revision notes above, and in §13, §13b and §13c, is
written in the old numbers and is left in them: those sections record what was
decided when, and a record that is edited to match the present is not a record.
Read them through this table.

**What was not settled, and now is.** Boards №1 and №2 passed the test but were
not built to the standard §3 reached at 2.2 — E10, E11 and E13 were written after
them. Two lines on **Everything Flows** were named here as soft: *"a RIVER cuts
its own BANK"* (E10, with BED two squares away) and twelve connections all
written to the same bare shape (E7, no line worth quoting). **Both are fixed at
2.6; see §17.**

Board №2, *The Gift of the River*, still stands as written. It has no E10 or E7
fault that anyone has found, but it has not been read against E11 or E13 either,
and it is the next board due that pass.

---

## 17. Boards №6 and №7 — the subject board *(built at 2.6)*

§16 left board №1 with two known faults and shipped it anyway. Both are fixed,
and fixing them turned into a rule the format did not have.

### Board №1, rewritten

- **E10.** *"a RIVER cuts its own BANK"* is gone. Cutting its own **bed** is the
  sentence everyone knows, and BED sits two squares away — the clue fitted a
  neighbour better than its own answer. It is now *"in a wet year breaks its own
  —"*, which nothing but a bank does, and which pays twice: **breaking the bank**
  is the other half of this board said out loud. E2 satisfied on a square that
  had no wordplay at all before.
- **E7.** All twelve connections were bare verb phrases of two to four words.
  They are now written to five shapes — two bare verbs kept deliberately, three
  parentheticals, one with a measure of time, two aphorisms, four plain
  mechanisms. The board now has a line worth quoting, which is what E7 is
  actually asking for: *"a RIVER spends its whole life looking for its own
  MOUTH."*

### The two new boards, and what they are for

Both are **★**, and both are nets rather than riddles (E4a) — but they are a
particular kind of net, and it is worth naming, because it is the thing the
format can do that a crossword cannot.

- **№6 — Set, Inked and Pulled** (3×3, 11/12). Three rows, three stages, in
  order: the material, the machine, the object. RAG → PULP → PAPER across the
  top; the press in the middle; TYPE, PAGE, SPINE along the bottom.
- **№7 — A Fire That Learned to Push** (5×5, 32/40). Five bands — the ground,
  what the ground becomes, the machine, what the machine was pointed at, what it
  cost — with STEAM at the exact centre and four arms off it: the fire north, the
  iron west, the railway east, the mill and the town south.

- **E14 — A net should be a subject, and the layout should be the argument.**
  A net board of unrelated true facts is a quiz with a grid drawn round it. A net
  board whose *placement* carries the structure of its subject is something else:
  the solver finishes holding not twenty-five facts but one shape. Board №7's
  rows are a sequence and its arms are branches, and that is legible before a
  single square is filled. Where a board has a subject with parts, put the parts
  where they belong.

- **E14b — On a subject board, every clue carries the fact it depends on.**
  This is E3 stated as a positive. *"a SEAM runs for a mile and is a yard of
  COAL"* does not test whether you know how thick a coal seam is; it tells you,
  and asks you for the word. Same with the gauze on the lamp, the belt from the
  ceiling, the lip on the wheel, the country agreeing on one clock. A solver who
  knew none of them reaches every square, and knows them afterwards. A subject
  board that tests retrieval instead of teaching it is board 02 again.

### 17b. A2d gets its number

**A2d — A connection is never cut off** has been in §6 since the beginning
without a measurement, and both new boards broke it on first writing — five
gutters overflowed. The budget, measured off the live board:

| | horizontal gutter | vertical gutter |
|---|---|---|
| 3×3 | ~46 characters | ~56 |
| 5×5 | **~34 characters** | ~51 |

**Superseded at 3.0.** The budget above was measured against gutters whose size
had been set by the arrowhead rather than by the words, and both measurements
were a little too small once connections were written to E7's longer shapes. Two
things were wrong:

- **The arrow reserve ignored the axis.** One `max-width: calc(100% - 22px)` was
  applied to every label. On a *horizontal* gutter that is right — the head sits
  at the left or right end, so width is what must be given up. On a **vertical**
  gutter the head sits at top or bottom centre, so twenty-two pixels of width
  bought nothing and cost a line: *"is soft enough to cast and hard enough for"*
  was squeezed into 76px, wrapped to four lines, overflowed a 42px gutter and
  printed itself across its own arrow. The reserve now follows the axis.
- **The gutter was too small in both directions.** Measured, not guessed:
  `gutRow` 48 → **54** carries three lines of 10px text with the arrowhead clear
  below them; `gut` 88 → **104** is the smallest width at which no connection on
  any board runs past three lines, on either face — 88 left seventeen of them at
  four. It costs 64px on a 5×5, 912 to 976, and the board scales. On a phone the
  5×5 still meets `MIN_SCALE` and scrolls sideways inside its own scroller, as
  it did before; the page itself does not.

- **Measure with `offsetHeight`, never `getBoundingClientRect`.** The board is
  fitted to the page with a CSS transform, so a rect is the **scaled** box: at
  0.87 a genuine four-line label measures 43px against an unscaled 12.5px line
  and rounds to three. The first pass at this picked `gut: 96` off exactly that
  reading, declared every board clean, and was wrong by two whole steps — a
  wider window immediately showed nine labels still at four lines. A measurement
  taken through a transform is not a measurement.

- **A2d — A connection is never cut off, and never runs past three lines.**
  Verified across all seven boards and both faces of every turnable connection:
  **340 faces, none over three lines, every arrowhead clear.** The character
  budget is withdrawn as the wrong instrument — a long word wraps differently
  from three short ones, and 36 characters clipped where 34 did not for reasons
  no character count can express. Measure the rendered box.

---

### 17c. Board №6, rebuilt as a 5×5 *(at 2.7)*

*Set, Inked and Pulled* was a 3×3 and the wrong size for its own subject. The
centre square is **PRESS**, and PRESS is two things — the frame that squeezes and
the trade that shouts — which is not a coincidence of spelling but a piece of
history: the machine that could throw a thousand sheets a night is the machine
that could throw the news. A 3×3 has room for one of those. A 5×5 has room for
the join, so the board now runs **metal in the west, newsprint in the east, and
the double in the middle**.

Three squares carry a second life and each is load-bearing:

| | first life | second life | where the board uses it |
|---|---|---|---|
| **PRESS** | the machine | the newspapers | both, either side of it |
| **PRINTER** | the machine | the person who was one for four centuries | FRANKLIN chooses the word for a gravestone; the same word clamps a plate |
| **COLUMN** | a strip of newsprint | the pillar on a portico | three clues take the first, and *"a LIBRARY is the kind of building given a COLUMN"* takes the second |

**FRANKLIN** is the W4 case the rule was written for: an encyclopaedia entry in
any century, and a name that is also a common noun. His clue is the board's best
line and it is literally true — the signer of the Declaration chose *B. Franklin,
Printer* for his own stone.

**Three stars, and honestly.** raw = 0.870, and it is the first board on the shelf
above one. §14 asked for exactly this: *"five of seven boards are easy ones… the
next ones should be written for the top of the scale."* Most of the score is
`hard`, not `twist` — EDITOR, COPY, PROOF, NEWS, SCOOP, DEADLINE, MARGIN and
FRANKLIN sit at ease 2 and LIBEL at ease 1. **No S7 override here**, and the
contrast with the 3×3 version is the point: there the twist was inert because the
theme had spent it, and here the doubles are the puzzle.

### E15 — a clue may teach a fact, but the square must not depend on it

**RAG and PULP are gone**, and cutting them produced the rule. Both were true,
both taught something worth knowing, and both were the wrong kind of hard: a
solver who does not happen to know that paper was beaten from cloth for
seventeen centuries has **no second route** to them, because nothing else on the
board looks like rags. E14b says a subject board's clue should carry its own
fact; **E15 is the limit on E14b** — carrying the fact is not enough on its own,
because a fact you have just been handed is not yet a thing you can cross-check.
The square still owes E6 a second way in.

The test: *strike the taught fact out of the clue. Is there still a route to this
square?* Every word on the rebuilt board has an everyday sense to arrive from — a
case, a plate, a proof, a story, a scoop, a column — and the printing sense is
what the neighbours add. That is the difference between a board that teaches you
something and a board that requires you to have been taught.

---

## 18. The connection turns over *(built at 2.8)*

Every clue in this game has been asked to do two jobs that pull against each
other. **E6** wants it near-sufficient — read this gutter alone and land on one
word. **E15** wants it independent of outside knowledge — do not make the square
hostage to a fact the solver may not have. A clue that is specific enough to
satisfy the first is usually specific enough to breach the second, and that
tension is what killed RAG and PULP, and what made all three of FRANKLIN's
connections faulty at once: *chose for a gravestone the word*, *was apprenticed
at twelve to set*, *opened the first place to borrow a* — three sentences, all
true, all lovely, and every one of them requiring you to already know Franklin.
No second route into the square from anywhere.

**A11 — A connection may carry a second face, and turning it costs nothing.**
Click a gutter and it turns over, in the only animation this game has: the label
scales to an edge and back, which is what a card does. Click it again and it
turns back. The turned face is marked in the visited purple with a dashed rule,
so you can see at a glance which gutters you have been into.

- **A11a — It is free, and it is counted nowhere.** Not in the report, not as a
  mark on a square, not as a rung on the hint ladder. This is the whole design
  and it is not leniency, it is a category distinction: *Reveal a letter* and
  *Reveal the word* short-circuit the deduction, and a turned connection does
  not. The back of a gutter is another sentence about the same relation. You are
  handed a different way of looking at the join; the join is still yours to make.
  A board solved with all thirty-four turned is solved outright, and says so.
- **A11b — Turning is per-session and Restart clears it.** Consistent with H4:
  nothing is remembered between sittings, because there is nowhere honest to
  keep it.
- **A11c — A board without second faces loses nothing.** `verb2` is optional;
  six of the seven boards have none and render exactly as before. The mark, the
  click and the animation only exist where there is a back to turn to.

### E16 — what may be written on a back

- **E16 — A back face is a connection, and every rule that governs a front
  governs it.** E9, E10, E11, E12, E13 all apply unchanged. `check-boards.py`
  now reads `verb2` alongside `verb`, and it caught *"a PRESS sets the news in a
  narrow COLUMN"* — naming NEWS, two squares away — within a minute of being
  taught to look. E10 in particular gets *harder*, not easier, on a back: a
  plainer sentence is by nature a vaguer one, and vaguer sentences fit
  neighbours.
- **E16b — The back is not the easy answer. Sometimes it is only another
  answer.** If every back is plainer than its front, then every solver turns
  every gutter on the first move and the fronts become decoration — the mechanic
  eats the board it was meant to help. The defence is that a solver must not be
  able to predict what is behind. Board №6 aims at roughly a third plainer, a
  third a different angle at the same difficulty, and a third *more specific
  than the front*: *"a LIBRARY is the kind of building given a COLUMN"* turns
  over to *"wears a portico held up by a"*, which is harder vocabulary and the
  same joke. Turning is then a real choice rather than a free upgrade.
- **E16c — A2d holds on both faces.** Both sentences live in the same gutter box,
  and a back face is often the longer of the two because it is explaining more.
  The measured budget in §17b is the budget for the pair, not for the front.

**Both 5×5 boards carry a full set as of 3.7** — sixty-seven second faces across
№6 and №7 — and writing the second set was the test of whether E16b survives
contact with a whole board. It does, but only if the split is written *on
purpose*:

| | on board №7 | |
|---|---|---|
| **plainer** | most of them | *"sends its heat up a"* for *"will not draw without a"*; *"is dug down to reach a"* for *"is sunk straight down until it meets a"* |
| **different** | same difficulty, another angle | a CHIMNEY that *"stands tall for no reason but"* SMOKE; an ENGINE that *"chokes its own driver in a"* TUNNEL rather than blackening its roof |
| **harder** | the mill, deliberately | COTTON *"is strung as warp across a"* LOOM; THREAD *"is woven, warp and weft, into"* CLOTH; a LOOM that *"beats each row tight into"* CLOTH, which is what the reed actually does |

Turn everything on №7 and you get an easier board in most places and a technical
one in the mill. That is the point: you cannot know in advance what is behind, so
turning stays a choice rather than a free upgrade.

**Four of the thirty-two were rewritten before they shipped**, and the faults are
worth naming because they are the ones a second face invites. Two repeated a
phrase already used elsewhere on the board — *carried* on both of LAMP's clues,
*nothing but* on a third gutter — which is **E7** failing quietly, because a back
face is easy to write in the rhythm of the last one. One claimed a motive it
cannot support: chimneys were not *"raised to spare a LUNG"*, they were raised to
disperse, and the sparing was a consequence rather than an intention. **E13** does
not stop applying because a sentence is on the back.

**The cost, named.** This doubles the editorial load, and §3 E5 already makes
editing the bottleneck of the whole game. Board №6 is sixty-eight sentences, not
thirty-four, each passing E9 through E15. §8's H6 asks for a six-board bank and
never shipping from empty; at two faces a board is twice the work to get there.
That is the real price and it is not small. What it buys is that the front faces
can go back to being lateral — the board no longer has to compromise between
being clever and being fair, because it can be clever on the front and fair on
the back.

**Why this and not the category glyph.** The glyph proposed at 2.7 was rejected
on three counts and the turn answers all three: it is **per-connection, not
per-word**, so there is no ontology to break on PRINTER; it is **opt-in per
gutter**, so it is not blanket furniture on twenty-five squares at once; and it
**cannot leak the double-life thesis**, because a back face is a sentence, not a
classification. The glyph told you what kind of thing the answer was. The turn
tells you the same relation again in other words, which is what this game is
made of.

---

## 19. Which English *(built at 2.9)*

W1 said *answers are English, always*, and left out which English. It matters
only where the two spellings are the **same length**, and that is a much smaller
problem than it looks.

**The letter count does most of the work already.** Every square prints how many
letters it takes, so a solver typing the wrong dialect into a different-length
word is stopped by the interface before they can submit. That retires the whole
of the largest class — **-our/-or** (HARBOUR/HARBOR, COLOUR/COLOR,
RUMOUR/RUMOR), **-ll-/-l-** (TRAVELLER/TRAVELER), **-ogue/-og**, **-ae-/-e-**,
and PLOUGH/PLOW, CHEQUE/CHECK, STOREY/STORY, MOULD/MOLD. HARBOUR has been on
board №3 the whole time and needs nothing.

- **W1a — Boards and the lexicon are written in British English, and one entry
  stands per word.** Not a preference: the house voice already is. `centre` is a
  data key in every puzzle file, and the prose runs 23–0 on *centre*, with
  *colour*, *harbour*, *grey*, *neighbour*, *fibre*, *travelling* and *rumour*
  throughout. (The hundred-odd `color:` and `center` hits are CSS keywords, which
  are the language and not the voice.) `check-boards.py` enforces it: a board
  written in the variant spelling fails W1a by name.
- **W1b — The American spelling is accepted on entry, and the board keeps what
  was typed.** `CL.same()` sits at every point where a typed word meets a written
  one — the error check, the noise a word makes, the win, and the used-once test
  — and `CL.canon()` sits in front of the lexicon so one entry serves both. The
  square is **not** rewritten to the canonical: A2f says entering a word does not
  move it, and silently correcting somebody's own correct spelling is the same
  discourtesy in a different place.
- **W1c — Only same-length pairs are declared.** A variant of a different length
  can never be typed, so an entry for one is dead data. Checked, and it caught
  PLOUGHSHARE/PLOWSHARE within a minute of being written.

### Why it is a list and not a rule

The natural implementation is two substitutions — *-ISE == -IZE*, *-RE == -ER* —
and it is **wrong**, on words already on the shelf:

| rule | what it would also accept | why that is bad |
|---|---|---|
| `-RE == -ER` | **WIER** for WIRE, on board №1 | not a word. The board would go green on a misspelling |
| | FIER for FIRE, EMPIER for EMPIRE | same |
| `-ISE == -IZE` | RIZE for RISE, WIZE for WISE | same |
| | **PRISE** for PRIZE | worse — these are *different words*, to lever open and an award, and no rule can tell which the square meant |

Marking a misspelling correct is a worse failure than refusing a real variant,
because the solver is told they are right and is not. So every pair is written
down in `spelling.js` and nothing is accepted that is not on the list — the same
instinct as **E5**: a generator may propose, it may never publish.

**A note on which class actually bites.** *-ise/-ize* is the one that looks most
like a rule and turns out to matter least, because **every answer in this game is
a noun** and that ending is overwhelmingly verbal. It reaches only the long
-ISATION forms. The classes that do the damage are **-re/-er** (CENTRE, METRE,
FIBRE, THEATRE — all nouns, all same length) and **-ce/-se** (DEFENCE, LICENCE,
OFFENCE), plus the singletons that belong to no class: **GREY/GRAY**, KERB/CURB,
TYRE/TIRE, GAOL/JAIL. PRACTICE is deliberately not a pair: it is the noun in both
Englishes, and the verb PRACTISE can never be an answer.

---

## 20. The equivalence, and the word-level connection *(built at 3.1)*

§2 specced three kinds of line at 0.3 and built one. **R2 — Equivalence** (a
plain line, no head) is now drawn, and the thing that finally asked for it was a
pair of words rather than a pair of things.

### R2, as built

`{ verb, verb2, kind: "eq" }`. `dir` is not read: the two cells are peers, so
there is no subject to resolve and no head to point, and the end-of-game sentence
prints in board order — left before right, top before bottom — exactly as §2 said
it should. A gutter without `kind` gets the directed relation it always had, so
every existing board is untouched. The wire is drawn a shade heavier than a
directed one, because a headless line has to read as *a deliberate kind of join*
and not as an arrow that failed to render.

**HEADLINE — DEADLINE** is the first, and it is the right first: an arrow between
those two would be a lie about which way the fact runs.

### E17 — a connection may be about the words, once

Every other connection in this game is about the world: a river breaks its bank,
a printer pulls a press. *"HEADLINE shares its last word with DEADLINE"* is not —
it is about the spelling. That is a different kind of thought inside the same
grid, and it is worth having and worth fencing.

- **E17 — A connection may be about the words rather than the things, but never
  more than one to a board, and never as a square's near-sufficient clue.**
  The second half is the load-bearing half. *"shares its last word with
  DEADLINE"* fits HEADLINE, GUIDELINE, BYLINE, PIPELINE, OUTLINE, HAIRLINE — it
  finds nothing on its own. What it does, once you have both squares, is
  **confirm them instantly and close a loop**, which is precisely the role E6
  reserves for the non-sufficient clue: *"the rest confirming it."* A word-level
  line is the best confirmer the format has and the worst finder, and a board
  that forgets which is which has stopped being about meaning.

**On the name.** *Internal rhyme* is a rhyme falling **within a single line of
verse** — *"I bring fresh showers for the thirsting flowers"* — so it is not what
these two words are doing. What they are doing is more interesting than a name
for it: HEADLINE and DEADLINE are a **perfect rhyme**, and the rhyme lives
entirely in the first element, because the second element is not rhyming at all —
it is *identical*, and identical syllables are repetition rather than rhyme. So
the two faces split the fact exactly along that seam: the front takes the
repetition (*shares its last word with*) and the back takes the rhyme, counted
rather than named (*is one letter away from*). Neither says "rhyme", and neither
has to.

### PROOF → CASE: the verb was the fault, not the fact

The clue was withdrawn at 3.2 and is back at 3.4, which is the right outcome — the
**type case** is a good thing to have on this board. It is the tray metal type is
kept in, one compartment per letter, and it is where *upper case* and *lower case*
come from.

What was wrong was one verb. *"**sends** a wrong **letter** back to its —"* reads
as correspondence: two postal words in a row, and the mind supplies ENVELOPE long
before it supplies a printer's tray. Nothing was wrong with the fact. It reads
now as *"a PROOF **drops** a wrong letter back into its CASE"* — a verb that can
only be physical — and the back says plainly which letter and where it goes.

**PLATE → CASE is out instead.** Stereotype plates did make standing type
needless, and *"put a whole one out of work, a CASE"* had to contort itself to
say so around a fact almost nobody holds. CASE keeps its two ways in from LEAD
and PROOF, and both now arrive from something a solver already owns.

CASE keeps two ways in, and both now arrive from something the solver already
owns:

| | |
|---|---|
| LEAD → CASE | *is melted and cast, letter by letter, for a* ↳ **is sorted, upper and lower, into a** |
| PLATE → CASE | *put a whole one out of work, a* ↳ *made it needless to keep a* |

The back of the first is the whole repair: **upper** and **lower** are words
everybody types with, so the square is reachable by anyone who has ever held down
a shift key, and the compositor's tray is the reward rather than the toll.

**The board stayed at 34.** D4's ceiling on a 5×5 is 34 of 40 and board №6 was
already at it, so the equivalence had to be paid for: PROOF→CASE and
STORY→READER out, PLATE→CASE and HEADLINE—DEADLINE in. *"a STORY is written for
one imagined READER"* was the other one to go, and it was named as soft when it
was written — a piece of writing-craft received wisdom rather than a thing you
can picture, which is E13 again at a lower temperature.

---

## 21. Three clues, and the rule under them *(at 3.2)*

All three faults came from one playtest reading, and they turn out to be the same
fault wearing three coats. Each clue was **true of its answer** and stopped there
— and stopping there is not enough, because a clue is read against the words the
solver is *actually* considering, not against a dictionary.

- **E18 — A clue must name the thing that separates its answer from the nearest
  wrong word.** Not merely a property the answer has: the property that the
  near miss does *not*. E10 says a clue may not fit a neighbour better than its
  own answer, and E18 is its other half — it may not fit a word that is not on
  the board at all better than its own answer. The near miss is usually not a
  neighbour. It is the ordinary word the sentence describes.

### SCOOP → LIBEL

*"a SCOOP that turns out to be wrong is a LIBEL"* describes an **ERROR**, and
lands there, because wrongness is all it names.

Correcting *why* is worth doing carefully: intent is **not** the separator, though
it is the natural guess. In English law libel is effectively strict liability for
the publisher — no intent is needed, and the defences are truth, honest opinion
and public interest. Intent only enters in the United States, and only for public
figures, where *New York Times v. Sullivan* requires actual malice. So a rule
written on intent would be wrong in the English the game is written in (W1a).

What actually separates libel from a mistake is **harm to a person**. So the clue
names it: *"a SCOOP that ruins a good name is a LIBEL"*, with the back stating
both halves plainly — *printed about a person, and false*. ERROR does not ruin a
good name; that is the whole of the difference and now it is on the board.

### FRANKLIN → BOOK

*"opened the first place to borrow a BOOK"* parses two ways and the wrong one is
the livelier: **a man opening a shop so that he could borrow**. The infinitive
attaches to the subject, and the subject is a person, so the sentence hands him
the motive. Moving the verb to the institution moves the reading with it —
*"opened the first place that would **lend** a BOOK"*. Same fact, one voice
changed, and the man is out of the way of it.

### INK → HEADLINE

The proposal was *"a HEADLINE cannot be written without INK"*, and the instinct
was right — that gutter was bare and wanted filling — but the sentence fails E10
as broadly as a sentence can. Nothing on this board can be written without ink:
it fits PROOF, COPY, PAGE, COLUMN, STORY, BOOK and the answer equally. A clue
that describes a whole category has told the solver nothing.

It took two more passes to land, and the second was an over-correction worth
recording, because the error in it is a common one.

*"is blackest in a"* is false: the ink is the same black everywhere on the sheet.
*"is laid on thickest in a"* is the wrong word for the right idea — thickness is
film depth, and the film is constant too. But **the quantity claim underneath
both was true**, and the second pass threw it out along with them, replacing the
whole connection with INK's other life: *to get ink is to be printed about*.
That is a real second sense, and the clue built on it — *"is what you get for
making a HEADLINE"* — still failed, on two counts. The idiom is largely American,
which W5 and V2 both frown on; and it inverted the relation, because one gets ink
*by* being newsworthy rather than as payment for it. It needed explaining to its
first reader, and **a clue that needs explaining has failed E13** whatever else
is right about it.

The true thing was there the whole time: a headline takes **more** ink, because
the letters are bigger. That is the back face, said in a word that means quantity
rather than depth. And the idiom keeps the front, because rejecting it was a
misreading of the rules:

> INK **is what you get for making a** HEADLINE
>  ↳ INK **is used up fastest on a** HEADLINE

**W2 was applied backwards.** *"The rule governs answers, not connectors. No
answer is ever a foreign word. Connectors are where other languages belong, and
they are welcome there… A connector that carries a foreign word is doing the work
the format is for."* Trade slang is that case exactly. V2 and W5 govern the
**quarry** — what may be set in a square — and neither reaches into a gutter. On
a board called *Set, Inked and Pulled*, whose whole subject is the trade, the
trade's own idiom in a connector is not a licence being taken; it is the licence
W2 was written to grant.

**And the second face is what makes a lateral front safe.** This is A11 and E16
doing the job they were built for, on the first clue to need it. *To get ink* is
opaque if you have not met it — that is a real E13 objection to a clue standing
alone, and it was the right objection before the turn existed. With a back that
says *used up fastest*, nobody is stranded on it: the solver who knows the idiom
gets the better sentence, the solver who does not turns the card. **The front can
be lateral because the back is fair**, which is precisely the trade §18 said the
mechanic would buy.

**Two lessons, for the next time.** When one half of a clue is wrong, check
whether the other half was carrying something true before rewriting the whole
sentence — a false embellishment on a sound observation is repaired by deleting
the embellishment, not the observation. And before rejecting a connector for its
register, check which rule actually governs connectors.

**It was paid for, and then it was not.** The new connection first cost
**BOOK → PAGE**, because D4's ceiling was enforced as a hard range and board №6
was sitting on it. That was the tool being stricter than the rule: D4 says
*roughly*. The ceiling is a note now (see §1), board №6 stands at **35 of 40**
with five bars, and BOOK → PAGE is back. Nothing was worth losing to arithmetic —
and the question that produced the amendment was simply *why does it cost
anything*, which no one had asked in eleven revisions.

---

## 22. The hyphen, the brands, and what the rulebook says *(at 3.8)*

### The rulebook stops publishing a developer's key

**Shift+S is out of the Rulebook.** It gives the whole board up at once, it is
there so a constructor can see a finished grid without solving it, and printing
it on the page a first-time solver reads is handing them the one move that
cannot be taken back. It still works; §9 still documents it; it is simply not
advertised. *Nothing is removed from the game — only from the page.*

**The turn goes in, in its place.** A11 shipped at 2.8 with sixty-seven second
faces across two boards and no word about it anywhere a player would look, which
is a mechanic that does not exist. The Rulebook now says where the mark is (the
faint dotted rule under a sentence), what turning does, and the two things about
it that matter most: that it is **not always easier**, so it is worth turning to
see; and that it **costs nothing and is counted nowhere**, so a board solved with
every connection turned is solved outright and says so.

### N3b reaches the epigraph

- **N3c — Anything set in type with a `data-lex` opens that entry.** The rule was
  already N3b — *every word set in type opens its entry* — but it was wired only
  to words the solver had placed. The attribution under the epigraph was the one
  word on the Rulebook page you could not look up, which on a page arguing that
  words are defined by other words is a poor joke to leave standing.
  **BERNERS-LEE** is in the quarry now, and clicking his name in the epigraph
  opens him like any other word.

### The brands, and the thing that blocks them

**V6 is written and no brand has been added**, deliberately, because the first one
to touch an existing board misrates it. Measured, not guessed:

| *From the Ground Up* | raw | stars |
|---|---|---|
| as it stands | 0.29 | ★ |
| if APPLE joins the registry with 2 domains | **0.31** | **★★** |
| with 4 domains | 0.33 | ★★ |

That board uses APPLE as the fruit and nothing else. Not one clue on it touches a
company. It would gain a star for a meaning it never puts in play — which is the
`twist` over-count §14 logged as an open question at 2.7, on board №6's 3×3.

**Two instances make it a blocker rather than a curiosity.** The brand expansion
is exactly the change that would make it common: V6's best candidates are the
names that are *already common words* — APPLE, SHELL, ORACLE, AMAZON, ORANGE —
so every one of them would silently re-rate every existing board carrying the
ordinary sense. SHELL is on no board yet; APPLE is on №5, ORCHARD's neighbour.

So the order of work is fixed: **fix `twist` first, add brands second.** The
repair §14 already sketched is the right one — discount `twist` where a board's
words cluster in one field, which the quarry's `k` almost supports already. Until
then V6 is a rule with nothing standing on it, which is the safe state for it to
be in.

---

## 23. The demonstration *(built at 3.9)*

- **A13 — Four clicks on the sun-and-moon inside four seconds and the board
  solves itself. Four more stop it.** It is for recording the game being played,
  and it is deliberately undocumented in the Rulebook, like Shift+S: a player who
  finds it has found a toy, not a shortcut, because it is no use for solving.

**The whole brief is that it must not look like a machine.** A solver that fills
squares in reading order at a constant rate is unwatchable and, worse, it teaches
the viewer that the board has an order. So:

- **It starts at the middle**, because that is where a person starts.
- **It works outward along what it has placed** — the frontier — preferring
  squares with more solved neighbours, because those are the ones that would
  genuinely come easiest.
- **But not always.** Roughly one word in five is a jump to somewhere else on the
  board entirely, which is what a solver does when a far square suddenly occurs
  to them. Within the frontier it will also take a second-best square about a
  third of the time, so it never looks like it is following a rule.
- **Letters do not arrive at a constant rate**, and about one in eight is
  followed by a real pause, as though the hand had stopped to think.
- **It pauses before a word as well as during it**, and longer before a long one,
  as though reading the clues around the square first.

The randomness is bounded on purpose. The pace has to stay steady enough to
watch, so every delay is a spread around a rhythm rather than a free roll.
Measured on the shelf: **3.3 seconds a word, about 81 seconds for a full 5×5**,
which is a watchable length for a screen recording.

- **A13b — It solves; it does not give up.** Every word goes down through the
  same `submit` a player uses, so the closing report reads **"9 solved
  outright"** and not *given*. A recording of the demonstration is a recording of
  the board being solved, which is the only version worth publishing.
- **A13c — Leaving or restarting ends it.** `go()` and `reset()` both stop it, so
  it cannot be left running under a different board.

*A note on how this was nearly got wrong:* the first attempt hooked the stop by
reassigning `reset`, which could never have worked — the Restart button was bound
to the original function long before that line ran. Hook at the source, not at
the name.
