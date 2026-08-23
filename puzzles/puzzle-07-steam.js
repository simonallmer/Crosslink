window.CROSSLINK = window.CROSSLINK || {};
(window.CROSSLINK.puzzles = window.CROSSLINK.puzzles || []).push({
  id: "07-steam",
  title: "A Fire That Learned to Push",
  standfirst: "Twenty-five words and thirty-two connections; eight gutters are bare. One machine sits in the middle and the whole century arranges itself around it.",
  size: 5,
  centre: [2, 2],

  // The second kind of board (E4a), at the largest size the format admits, and
  // built so that the layout itself is the argument. Read it as five bands:
  //
  //   row 0   what is taken out of the ground
  //   row 1   what the ground is turned into
  //   row 2   the machine, with STEAM at the exact centre
  //   row 3   the two things the machine was pointed at — cloth, and distance
  //   row 4   what it cost and what it left behind
  //
  // And as four arms off the centre: the fire to the north, the iron to the
  // west, the railway to the east, the mill and the town to the south. Solve it
  // and you have not learned twenty-five facts, you have learned one shape.
  //
  // Every clue carries its own fact rather than testing for it (E3). The gauze
  // on the lamp, the yard of coal in a mile of seam, the belt from the ceiling,
  // the lip on the wheel, the country agreeing on one clock — a solver who knew
  // none of them can still reach every square, and knows them afterwards. That
  // is the whole argument for the net board: it is not a quiz that happens to be
  // a grid, it is a subject you walk around.
  //
  // The bare eight are bare on purpose. SHAFT to FURNACE, CHIMNEY to ENGINE,
  // LUNG to WHEEL, IRON to COTTON: nothing true and non-trivial joins those
  // pairs, and a gutter filled to make the count is worse than a gutter left
  // open. D4 asks for 28-34 and this has 32.
  nouns: [
    ["LAMP",   "SEAM",    "COAL",    "SMOKE",   "SOOT"],
    ["MINE",   "SHAFT",   "FURNACE", "CHIMNEY", "LUNG"],
    ["IRON",   "BOILER",  "STEAM",   "ENGINE",  "WHEEL"],
    ["COTTON", "LOOM",    "MILL",    "TUNNEL",  "RAIL"],
    ["THREAD", "CLOTH",   "CITY",    "STATION", "CLOCK"]
  ],

  h: [
    [ { verb: "wears gauze so that it can burn in a", dir: "right" },
      { verb: "runs for a mile and is a yard of",                   dir: "right" },
      { verb: "pays for its heat in",                               dir: "right" },
      { verb: "settles on the sill as",                             dir: "right" } ],
    [ { verb: "is reached by nothing but a", dir: "right" },
      null,
      { verb: "will not draw without a",     dir: "right" },
      { verb: "is built tall to carry its dirt past a", dir: "right" } ],
    [ { verb: "is riveted, plate to plate, into a", dir: "right" },
      { verb: "turns still water into moving",      dir: "right" },
      { verb: "turns heat into motion by way of",   dir: "left"  },
      { verb: "is worth nothing until it is bolted to a", dir: "right" } ],
    [ { verb: "goes in at one end of a",              dir: "right" },
      { verb: "was a roof put over the noise of a",   dir: "left"  },
      null,
      { verb: "will not climb, so it is given a", dir: "left" } ],
    [ { verb: "goes over and under itself until it is", dir: "right" },
      null,
      { verb: "grew, in a single lifetime, around a",   dir: "right" },
      { verb: "is read by a whole platform in a", dir: "left" } ]
  ],

  v: [
    [ { verb: "is the only light allowed down a",        dir: "down" },
      { verb: "is sunk straight down until it meets a",  dir: "up"   },
      { verb: "is shovelled by the ton into a",          dir: "down" },
      { verb: "is a hole built upward for",              dir: "up"   },
      { verb: "finds its way at last into a",            dir: "down" } ],
    [ { verb: "starts as a rock nobody would look at twice, down a", dir: "up" },
      null,
      { verb: "boils a ton of water an hour into", dir: "down" },
      null,
      null ],
    [ null,
      { verb: "drives, by a belt from the ceiling, a",          dir: "down" },
      { verb: "stood beside falling water until it was freed by", dir: "up" },
      { verb: "blackens the roof of a",                         dir: "down" },
      { verb: "was given a lip so that it could not leave a",   dir: "down" } ],
    [ { verb: "is combed straight and spun into", dir: "down" },
      { verb: "turns out nothing but",            dir: "down" },
      { verb: "drew a village after it until the village was a", dir: "down" },
      null,
      { verb: "made a whole country agree on one", dir: "down" } ]
  ]
});
