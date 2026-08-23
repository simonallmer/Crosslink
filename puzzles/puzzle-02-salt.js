window.CROSSLINK = window.CROSSLINK || {};
(window.CROSSLINK.puzzles = window.CROSSLINK.puzzles || []).push({
  id: "02-salt",
  title: "Worth Its Weight",
  standfirst: "Twenty-five words and twenty-six connections, every one of them shown. Fourteen gutters are bare, which is the trouble with this one.",
  size: 5,
  centre: [2, 2],

  nouns: [
    ["MOUNTAIN", "TUNNEL", "SUN",    "VINEGAR", "OLIVE"],
    ["ROCK",     "PICK",   "SEA",    "LETTUCE", "OIL"],
    ["CRYSTAL",  "MINE",   "SALT",   "SALAD",   "SAUCE"],
    ["CUBE",     "WAGE",   "SALARY", "LATIN",   "TONGUE"],
    ["MINT",     "COIN",   "SOLDIER","ROME",    "EMPIRE"]
  ],

  h: [
    [ { verb: "is bored through a", dir: "left"  }, null, null, null ],
    [ { verb: "breaks",             dir: "left"  }, null, null, null ],
    [ null, { verb: "yields",            dir: "right" },
            { verb: "is named for",      dir: "left"  },
            { verb: "is dressed with a", dir: "right" } ],
    [ null, null, { verb: "is taken whole from", dir: "right" },
                  { verb: "is a dead",           dir: "right" } ],
    [ { verb: "strikes a",   dir: "right" },
      { verb: "is named for the solidus, a", dir: "left" },
      { verb: "marched for", dir: "right" },
      { verb: "was the seat of the", dir: "right" } ]
  ],

  v: [
    [ null,
      { verb: "cuts a",           dir: "up"   },
      { verb: "dries the",        dir: "down" },
      { verb: "dresses the",      dir: "down" },
      { verb: "is pressed into",  dir: "down" } ],
    [ { verb: "holds a",             dir: "down" },
      { verb: "works a",             dir: "down" },
      { verb: "is drawn from the",   dir: "up"   },
      { verb: "is the body of a",    dir: "down" },
      { verb: "is the base of a",    dir: "down" } ],
    [ { verb: "of salt is always a", dir: "down" },
      null,
      { verb: "was once paid as",    dir: "down" },
      { verb: "comes, salted, from", dir: "down" },
      null ],
    [ null,
      { verb: "makes up a",     dir: "up"   },
      { verb: "drew a",         dir: "up"   },
      { verb: "was spoken in",  dir: "down" },
      null ]
  ]
});
