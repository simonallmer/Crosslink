# CrossLink — Design Spec

**Revision 1.8 · 23 August 2026**
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
  `http://simonallmer.com/crosslink/02-salt/salt.html` into the footer —
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
- **H2 — Every word is set once, in the entire game.** No word appears on two
  boards, ever. A word caught is caught for good, and the Word List is the whole
  quarry. This is now checked live on the Puzzles page, which will say so out loud
  if a constructor breaks it.
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

- **V1 — One word, no hyphens, no spaces.** A cell holds one word.
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
- **S6 — The location bar carries the network.** An arrow beside the Location
  field drops the fourteen Allmer sites, alphabetical, each opening in a new tab.
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

---

## 9. Typing — fixed

**Was:** the draft was a prefix string, so a letter revealed at slot 3 still
demanded four keystrokes — you typed dead letters to walk past a letter the board
had already given you.

**S gives up the board.** With no square selected, **S**; with a square selected,
**Shift+S** — because there you are spelling a word, and S is a letter like any
other. Either fills the board and marks every square *given*, so the report reads
*0 solved outright, 25 given*. There is no way to take a board that way and have
it read as solved.

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
