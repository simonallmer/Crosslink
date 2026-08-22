window.CROSSLINK = window.CROSSLINK || {};
(window.CROSSLINK.puzzles = window.CROSSLINK.puzzles || []).push({
  id: "04-nile",
  title: "The Gift of the River",
  standfirst: "Nine words and twelve connections, and every one of them is a plain fact. The only difficulty is which fact goes where.",
  size: 3,
  centre: [1, 1],

  // No wordplay here. The test this board has to pass is E6: each connection
  // carries something only its own answer satisfies. "is the capital of" would
  // fit a hundred countries; "buried its kings in a" fits one.
  nouns: [
    ["SAND",    "DESERT", "CAMEL"],
    ["PYRAMID", "EGYPT",  "NILE"],
    ["SPHINX",  "CAIRO",  "AFRICA"]
  ],

  h: [
    [ { verb: "is nothing but", dir: "left" },
      { verb: "goes a week without water in a", dir: "left" } ],
    [ { verb: "buried its kings in a", dir: "left" },
      { verb: "is farmed along the",   dir: "right" } ],
    [ { verb: "keeps its riddle outside", dir: "right" },
      { verb: "sits at the top of",       dir: "right" } ]
  ],

  v: [
    [ { verb: "rises out of",    dir: "up"   },
      { verb: "is nine-tenths",  dir: "up"   },
      { verb: "drinks from the", dir: "down" } ],
    [ { verb: "crouches before a",           dir: "up" },
      { verb: "is the dust-blown capital of", dir: "up" },
      { verb: "is the longest river in",      dir: "down" } ]
  ]
});
