window.CROSSLINK = window.CROSSLINK || {};
(window.CROSSLINK.puzzles = window.CROSSLINK.puzzles || []).push({
  id: "04-bread",
  title: "God\u2019s Batch and the Devil\u2019s Crust",
  standfirst: "Nine words, twelve connections, and nothing on the board that is not in a kitchen before the rest of the street is awake.",
  size: 3,
  centre: [1, 1],

  // The easiest board in the game on purpose: every word is one you could draw,
  // every connection is one step, and no word is doing a second job.
  //
  // An earlier draft had BREAD and LOAF on the same board — two words for one
  // thing — and made CRUST something bread turns into, which it is not: a crust
  // is part of a loaf, not its successor. Both are gone. So is a knife that was
  // there to be scored with, which meant nothing to anyone who has not watched a
  // baker slash a loaf before it goes in.
  nouns: [
    ["WATER", "YEAST", "HEAT"],
    ["FLOUR", "DOUGH", "OVEN"],
    ["BAKER", "LOAF",  "CRUST"]
  ],

  h: [
    [ { verb: "wakes in",    dir: "left"  }, { verb: "kills",         dir: "left"  } ],
    [ { verb: "is made of",  dir: "left"  }, { verb: "goes into an",  dir: "right" } ],
    [ { verb: "shapes a",    dir: "right" }, { verb: "wears a",       dir: "right" } ]
  ],

  v: [
    [ { verb: "takes",   dir: "up"   },
      { verb: "lifts",   dir: "down" },
      { verb: "throws",  dir: "up"   } ],
    [ { verb: "weighs",             dir: "up"   },
      { verb: "is shaped into a",   dir: "down" },
      { verb: "hardens in an",      dir: "up"   } ]
  ]
});
