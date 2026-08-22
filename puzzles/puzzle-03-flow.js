window.CROSSLINK = window.CROSSLINK || {};
(window.CROSSLINK.puzzles = window.CROSSLINK.puzzles || []).push({
  id: "03-flow",
  title: "Everything Flows",
  standfirst: "Nine words and twelve connections, nothing barred. Three words here lead two lives; the six around them have each chosen a side.",
  size: 3,
  centre: [1, 1],

  // The middle column is the double life: NOTE, BANK, CURRENT each belong to
  // both worlds. West is the river. East is the money. They are the same words.
  nouns: [
    ["MOUTH", "NOTE",    "ORGAN"],
    ["RIVER", "BANK",    "VAULT"],
    ["BED",   "CURRENT", "WIRE"]
  ],

  h: [
    [ { verb: "sings a",      dir: "right" }, { verb: "holds a",  dir: "left"  } ],
    [ { verb: "cuts its own", dir: "right" }, { verb: "is built around a", dir: "right" } ],
    [ { verb: "scours a",     dir: "left"  }, { verb: "carries a", dir: "left" } ]
  ],

  v: [
    [ { verb: "ends in a",  dir: "up"   },
      { verb: "issues a",   dir: "up"   },
      { verb: "echoes under a", dir: "down" } ],
    [ { verb: "lies in a",  dir: "down" },
      { verb: "steers the", dir: "down" },
      { verb: "is emptied by", dir: "down" } ]
  ]
});
