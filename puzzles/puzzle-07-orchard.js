window.CROSSLINK = window.CROSSLINK || {};
(window.CROSSLINK.puzzles = window.CROSSLINK.puzzles || []).push({
  id: "07-orchard",
  title: "From the Ground Up",
  standfirst: "Twenty-five words and thirty-four connections; six gutters are left bare. Nothing here needs a second meaning — a garden is already a network.",
  size: 5,
  centre: [2, 2],

  // Second rewrite, from a playtest. Three faults, all of them rules now:
  //
  //   E10  A clue must not fit a neighbour better than its own answer.
  //        "BARK is the skin of a TRUNK" was hopeless with TREE sitting next to
  //        BARK — and the lexicon says bark is the skin of a tree, so the game
  //        was arguing with itself. "reaches for the SKY" fitted TREE and TRUNK
  //        as well as BRANCH. Both gone.
  //   E11  A clue written as a universal law invites the category, not the
  //        instance. "a TREE bears an" reads as a fact about trees, so the
  //        answer feels like TRUNK or ROOT. Hedged — "may be the kind that
  //        bears an" — it reads as one tree, and the answer can be a fruit.
  //   E12  No plurals. Every square holds one word, so every clue is written
  //        for one thing: "is carried a thousand times into a", not "a
  //        thousand of these".
  //
  // Also cut: blossom on a BRANCH (a stem or a stalk fits as well), a BEE
  // "dusted yellow" (which reads as why bees are yellow, and that is genetics),
  // a SQUIRREL and a TWIG (no association at all), and a SPADE that "turns up"
  // a WORM (which sounds like a volume knob).
  nouns: [
    ["TWIG",     "NEST",  "SKY",    "HONEY",   "HIVE"],
    ["SQUIRREL", "BIRD",  "BRANCH", "BLOSSOM", "BEE"],
    ["TRUNK",    "BARK",  "TREE",   "APPLE",   "BASKET"],
    ["MOSS",     "GRASS", "ROOT",   "WORM",    "ORCHARD"],
    ["STONE",    "SOIL",  "SEED",   "SPADE",   "GARDENER"]
  ],

  h: [
    [ { verb: "is carried a thousand times into a", dir: "right" },
      { verb: "is a house left open to the",        dir: "right" },
      null,
      { verb: "is robbed from a",                   dir: "right" } ],
    [ null,
      { verb: "will sleep standing on a",  dir: "right" },
      { verb: "is white for one week with", dir: "right" },
      { verb: "smells sweet to bring in a", dir: "right" } ],
    [ { verb: "is thickest at the foot of a",   dir: "left"  },
      { verb: "belongs to a dog and to a",      dir: "right" },
      { verb: "may be the kind that bears an",  dir: "right" },
      { verb: "goes bruised into a",            dir: "right" } ],
    [ null,
      { verb: "hides most of itself below as", dir: "right" },
      { verb: "makes room for a",               dir: "left"  },
      null ],
    [ { verb: "is what frost lifts out of the", dir: "right" },
      { verb: "waits years in the",   dir: "left" },
      { verb: "opens a line for a",   dir: "left" },
      { verb: "leans on a",           dir: "left" } ]
  ],

  v: [
    [ { verb: "snaps under a",       dir: "down" },
      { verb: "builds a",            dir: "up"   },
      { verb: "shows through a",  dir: "down" },
      { verb: "ends up in a jar as",  dir: "up"  },
      { verb: "dances directions inside a", dir: "up" } ],
    [ { verb: "runs head first down a", dir: "down" },
      { verb: "hunts grubs under",      dir: "down" },
      { verb: "puts out a",             dir: "up"   },
      { verb: "begins as",              dir: "up"   },
      null ],
    [ { verb: "grows on the wet side of a",  dir: "up"   },
      null,
      { verb: "sinks a",                     dir: "down" },
      { verb: "is found halfway through an", dir: "up"   },
      { verb: "goes row by row through an",  dir: "down" } ],
    [ { verb: "gathers on a still", dir: "down" },
      { verb: "binds the",          dir: "down" },
      { verb: "lets down a",        dir: "up"   },
      { verb: "brings up, without meaning to, a", dir: "up" },
      { verb: "plants, for someone else, an",     dir: "up" } ]
  ]
});
