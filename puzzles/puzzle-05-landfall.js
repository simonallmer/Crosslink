window.CROSSLINK = window.CROSSLINK || {};
(window.CROSSLINK.puzzles = window.CROSSLINK.puzzles || []).push({
  id: "05-landfall",
  title: "Landfall",
  standfirst: "Twenty-five words and thirty-four connections; six gutters are left bare. Four connections point at the middle, and nothing else on the board exists yet.",
  size: 5,
  centre: [2, 2],

  // A 5x5 built to the rule board 02 broke: nothing hangs from a single link.
  // Weather at the top, the ship through the middle, the seabed at the bottom.
  // The connections are written to different shapes on purpose — a board of
  // "rides a / carries a / hauled by a" is a board nobody remembers a line from.
  nouns: [
    ["MOON",   "CLOUD",   "RAIN",   "GALE",  "FLAG"],
    ["TIDE",   "STORM",   "WAVE",   "WIND",  "SAIL"],
    ["SHORE",  "HARBOUR", "SHIP",   "MAST",  "ROPE"],
    ["BEACON", "REEF",    "ANCHOR", "DECK",  "KNOT"],
    ["ISLAND", "WRECK",   "SEABED", "CARGO", "SAILOR"]
  ],

  h: [
    [ { verb: "puts out the",          dir: "left"  },
      { verb: "cannot hold its",       dir: "right" },
      { verb: "turns sideways the",    dir: "left"  },
      { verb: "will have the hem off a", dir: "right" } ],
    [ null,
      { verb: "makes a mountain of a", dir: "right" },
      null,
      { verb: "is only any use in a",  dir: "right" } ],
    [ { verb: "is a bite taken out of the", dir: "left"  },
      { verb: "needs deep water in a",      dir: "left"  },
      { verb: "carries a",                  dir: "right" },
      { verb: "climbs a",                   dir: "left"  } ],
    [ { verb: "is lit against a",        dir: "right" },
      { verb: "will not hold on a",      dir: "left"  },
      { verb: "comes up muddy onto a",   dir: "right" },
      null ],
    [ { verb: "ends up on an",   dir: "left"  },
      { verb: "joins the",       dir: "right" },
      null,
      { verb: "is paid to shift", dir: "left" } ]
  ],

  v: [
    [ { verb: "pulls the",         dir: "down" },
      { verb: "grows up into a",   dir: "down" },
      null,
      { verb: "is a hard",         dir: "down" },
      { verb: "shows early what a", dir: "down" } ],
    [ { verb: "goes out and leaves a",       dir: "down" },
      { verb: "is worth having only in a",   dir: "up"   },
      { verb: "is built to survive a",       dir: "up"   },
      { verb: "leans on a",                  dir: "down" },
      { verb: "is trimmed with a",           dir: "down" } ],
    [ { verb: "marks the worst of a", dir: "up" },
      null,
      { verb: "drops an",             dir: "down" },
      { verb: "is stepped through a", dir: "down" },
      { verb: "ends in a",            dir: "down" } ],
    [ { verb: "is the only light on an", dir: "down" },
      { verb: "makes a",                 dir: "down" },
      { verb: "bites the",               dir: "down" },
      { verb: "is stowed under a",       dir: "up"   },
      { verb: "counts speed in a",       dir: "up"   } ]
  ]
});
