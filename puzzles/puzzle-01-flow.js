window.CROSSLINK = window.CROSSLINK || {};
(window.CROSSLINK.puzzles = window.CROSSLINK.puzzles || []).push({
  id: "01-flow",
  title: "Everything Flows",
  standfirst: "Nine words and twelve connections, nothing barred. One half of this board is water and the other half is money, and the words cannot tell them apart.",
  size: 3,
  centre: [1, 1],

  // The middle column is the double life: NOTE, BANK, CURRENT each belong to
  // both worlds. West is the river. East is the money. They are the same words.
  //
  // Rewritten at 2.6 against two rules it was failing:
  //
  //   E10  "a RIVER cuts its own BANK" was the wrong sentence, because cutting
  //        its own BED is the sentence everyone knows, and BED sits two squares
  //        away. It is now "in a wet year breaks its own" — which nothing but a
  //        bank does, and which pays a second time, because breaking the bank is
  //        the other half of this board said out loud.
  //   E7   All twelve connections were bare verb phrases of two to four words:
  //        sings a, holds a, issues a, scours a. Nobody could quote a line off
  //        this board. They are now written to five shapes — two bare verbs kept
  //        on purpose, three parentheticals, one with a measure of time in it,
  //        two aphorisms and four plain mechanisms.
  nouns: [
    ["MOUTH", "NOTE",    "ORGAN"],
    ["RIVER", "BANK",    "VAULT"],
    ["BED",   "CURRENT", "WIRE"]
  ],

  h: [
    [ { verb: "sings a",                          dir: "right" },
      { verb: "holds, longer than any lung can, a", dir: "left"  } ],
    [ { verb: "in a wet year breaks its own",     dir: "right" },
      { verb: "is built, floor and roof, around a", dir: "right" } ],
    [ { verb: "sweeps a stone along the",         dir: "left"  },
      { verb: "carries a",                        dir: "left"  } ]
  ],

  v: [
    [ { verb: "spends its whole life looking for its own", dir: "up"   },
      { verb: "prints its promise to pay on a",            dir: "up"   },
      { verb: "was built to fill the stone",               dir: "down" } ],
    [ { verb: "digs, and then lies down in, a",            dir: "down" },
      { verb: "narrows and so quickens a",                 dir: "down" },
      { verb: "is emptied without ever being opened, by",  dir: "down" } ]
  ]
});
