window.CROSSLINK = window.CROSSLINK || {};
(window.CROSSLINK.puzzles = window.CROSSLINK.puzzles || []).push({
  id: "07-orchard",
  title: "From the Ground Up",
  standfirst: "Twenty-five words and thirty-four connections; six gutters are left bare. Nothing here needs a second meaning — a garden is already a network.",
  size: 5,
  centre: [2, 2],

  // The proof that a 5x5 can be an easy board: sky at the top, the tree through
  // the middle, the ground at the bottom, and every connection one plain step.
  nouns: [
    ["TWIG",     "NEST",  "SKY",    "HONEY",   "HIVE"],
    ["SQUIRREL", "BIRD",  "BRANCH", "BLOSSOM", "BEE"],
    ["TRUNK",    "BARK",  "TREE",   "APPLE",   "BASKET"],
    ["MOSS",     "GRASS", "ROOT",   "WORM",    "ORCHARD"],
    ["STONE",    "SOIL",  "SEED",   "SPADE",   "GARDENER"]
  ],

  h: [
    [ { verb: "is woven from a", dir: "left"  }, { verb: "is open to the", dir: "right" },
      null,                                      { verb: "is taken from a", dir: "right" } ],
    [ null,                                      { verb: "lands on a",   dir: "right" },
      { verb: "breaks into",   dir: "right" },   { verb: "works over",   dir: "left"  } ],
    [ { verb: "wraps a",       dir: "left"  },   { verb: "peels off a",  dir: "right" },
      { verb: "bears an",      dir: "right" },   { verb: "fills a",      dir: "right" } ],
    [ null,                                      { verb: "hides a",      dir: "right" },
      { verb: "winds past a",  dir: "left"  },   null ],
    [ { verb: "works up through the", dir: "right" }, { verb: "is buried in the", dir: "left" },
      { verb: "turns in a",           dir: "left"  }, { verb: "leans on a",       dir: "left" } ]
  ],

  v: [
    [ { verb: "carries off a", dir: "up" }, { verb: "builds a",  dir: "up" },
      { verb: "reaches the",   dir: "up" }, { verb: "ends as",   dir: "up" },
      { verb: "goes home to a", dir: "up" } ],
    [ { verb: "runs head first down a", dir: "down" }, { verb: "taps at", dir: "down" },
      { verb: "puts out a",  dir: "up"   },            { verb: "becomes an", dir: "down" },
      null ],
    [ { verb: "climbs a", dir: "up" }, null,
      { verb: "sinks a",  dir: "down" }, { verb: "gets inside an", dir: "up" },
      { verb: "is filled in an", dir: "down" } ],
    [ { verb: "greens a",     dir: "down" }, { verb: "roots in the", dir: "down" },
      { verb: "lets down a",  dir: "up"   }, { verb: "finds a",      dir: "up"   },
      { verb: "walks an",     dir: "up"   } ]
  ]
});
