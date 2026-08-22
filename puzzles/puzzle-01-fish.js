window.CROSSLINK = window.CROSSLINK || {};
(window.CROSSLINK.puzzles = window.CROSSLINK.puzzles || []).push({
  id: "01-fish",
  title: "The Centre Is a Fish",
  standfirst: "Four connections, one four-letter unknown. Nothing else on the board exists yet.",
  size: 3,
  centre: [1, 1],

  nouns: [
    ["SALMON", "ROE",    "JAPAN"],
    ["OCEAN",  "FISH",   "NET"],
    ["PACIFIC","PISCES", "ZODIAC"]
  ],

  // h[r][g] sits between noun (r,g) and noun (r,g+1).
  // dir "right" = the left noun is the subject.  dir "left" = the right noun is.
  h: [
    [ { verb: "spawns",             dir: "right" }, { verb: "is called ikura in", dir: "right" } ],
    [ { verb: "swims in",           dir: "left"  }, { verb: "catches",            dir: "left"  } ],
    [ null,                                         { verb: "is a sign of the",   dir: "right" } ]
  ],

  // v[g][c] sits between noun (g,c) and noun (g+1,c).
  // dir "down" = the upper noun is the subject.  dir "up" = the lower noun is.
  v: [
    [ { verb: "returns from the", dir: "down" }, { verb: "hatches into",        dir: "down" }, null ],
    [ { verb: "is the largest",   dir: "up"   }, { verb: "becomes, in Latin,",  dir: "down" }, null ]
  ]
});
