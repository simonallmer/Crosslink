// CrossLink engine — the lattice, the edges, and the rendering of both.
// A board of size N is a (2N-1) x (2N-1) lattice: nouns on even coordinates,
// verb gutters on the mixed ones, structural corners on the odd ones.
(function () {
  var CL = window.CROSSLINK;

  var K = function (r, c) { return r + "," + c; };
  CL.K = K;

  // Every non-barred relation on the board, with its subject and object resolved.
  CL.edgeList = function (p) {
    var out = [], r, g, c, d;
    for (r = 0; r < p.size; r++) {
      for (g = 0; g < p.size - 1; g++) {
        d = p.h[r][g];
        if (!d) continue;
        out.push({
          id: "h:" + r + ":" + g,
          verb: d.verb,
          arrow: d.dir === "right" ? "→" : "←",
          subject: d.dir === "right" ? [r, g] : [r, g + 1],
          object:  d.dir === "right" ? [r, g + 1] : [r, g],
          cells: [[r, g], [r, g + 1]]
        });
      }
    }
    for (g = 0; g < p.size - 1; g++) {
      for (c = 0; c < p.size; c++) {
        d = p.v[g][c];
        if (!d) continue;
        out.push({
          id: "v:" + g + ":" + c,
          verb: d.verb,
          arrow: d.dir === "down" ? "↓" : "↑",
          subject: d.dir === "down" ? [g, c] : [g + 1, c],
          object:  d.dir === "down" ? [g + 1, c] : [g, c],
          cells: [[g, c], [g + 1, c]]
        });
      }
    }
    return out;
  };

  CL.edgesAt = function (st, r, c) {
    return st.edges.filter(function (e) {
      return e.cells.some(function (x) { return x[0] === r && x[1] === c; });
    });
  };

  CL.other = function (e, r, c) {
    return (e.cells[0][0] === r && e.cells[0][1] === c) ? e.cells[1] : e.cells[0];
  };

  CL.answer = function (st, r, c) { return st.puzzle.nouns[r][c]; };

  // What the solver is allowed to see, given what they have solved.
  CL.derive = function (st) {
    var p = st.puzzle, ctr = p.centre;
    var solved = function (r, c) { return st.filled[K(r, c)] !== undefined; };

    // Every connection is shown from the first moment. It used to surface only
    // when one of its two words was known, which made the whole board hostage to
    // the centre: miss the first word and there was nothing else to think about.
    // Now the map is open and only the walking is gated.
    st.verbVisible = {};
    st.edges.forEach(function (e) { st.verbVisible[e.id] = true; });

    // Reachable: the centre, or any cell with a connection whose other end is solved.
    st.reachable = {};
    st.reachable[K(ctr[0], ctr[1])] = true;
    for (var r = 0; r < p.size; r++) {
      for (var c = 0; c < p.size; c++) {
        CL.edgesAt(st, r, c).forEach(function (e) {
          if (!st.verbVisible[e.id]) return;
          var o = CL.other(e, r, c);
          if (solved(o[0], o[1])) st.reachable[K(r, c)] = true;
        });
      }
    }


    // Nothing on the board goes red unless error check is on; then a wrong word
    // says so the moment it is entered, and says it about itself.
    st.wrong = {};
    if (!st.check) return;
    for (var y = 0; y < p.size; y++) {
      for (var x = 0; x < p.size; x++) {
        var kk = K(y, x);
        if (st.filled[kk] !== undefined && st.filled[kk] !== CL.answer(st, y, x)) st.wrong[kk] = true;
      }
    }
  };

  // How hard a board is, from the words on it: how ordinary they are, and how
  // many of them are being asked to wear a second coat. A puzzle may override
  // the reckoning with `stars`, because a constructor knows things this does not.
  CL.stars = function (p) {
    if (p.stars) return p.stars;
    var n = 0, hard = 0, twist = 0;
    p.nouns.forEach(function (row) {
      row.forEach(function (w) {
        n++;
        var e = (CL.words && CL.words[w]) ? CL.words[w].e : 3;
        hard += 3 - e;
        var doms = (CL.registry && CL.registry[w]) ? CL.registry[w].length : 0;
        if (doms >= 2) twist += Math.min(doms, 4) / 4;
      });
    });
    // Thin boards are hard boards: a word with one way in is a guess, not a
    // deduction. That is most of why board 02 is the monster it is.
    //
    // Board size is deliberately not in here. A 5x5 is longer than a 3x3, not
    // harder, and the board already says which it is: charging a big board two
    // tenths of a star made it impossible for a 5x5 of plain words to be rated
    // easy, which is a thing the scale should be able to say.
    var possible = 2 * p.size * (p.size - 1), bare = possible - CL.edgeList(p).length;
    var raw = (hard + twist) / n + bare / possible;
    return raw < 0.30 ? 1 : raw < 0.55 ? 2 : 3;
  };

  CL.starText = function (n) {
    return new Array(n + 1).join("\u2605") + new Array(4 - n).join("\u2606");
  };

  // Cell geometry is a function of board size: a bigger lattice takes smaller squares.
  CL.dims = function (size) {
    return size >= 5
      ? { noun: 112, gut: 88, row: 56, gutRow: 48 }
      : { noun: 140, gut: 104, row: 62, gutRow: 52 };
  };

  // The sentence an edge makes, as far as the board knows it.
  CL.sentence = function (st, e) {
    var s = st.filled[K(e.subject[0], e.subject[1])] || "…";
    var o = st.filled[K(e.object[0], e.object[1])] || "…";
    return s + " " + e.verb + " " + o + ".";
  };

  CL.render = function (st, onPick) {
    var p = st.puzzle, board = document.getElementById("board"), n = 2 * p.size - 1;
    var d = CL.dims(p.size), cols = [], rows = [];
    for (var i = 0; i < n; i++) {
      cols.push((i % 2 === 0 ? d.noun : d.gut) + "px");
      rows.push((i % 2 === 0 ? d.row : d.gutRow) + "px");
    }
    board.style.gridTemplateColumns = cols.join(" ");
    board.style.gridTemplateRows = rows.join(" ");
    board.setAttribute("data-size", p.size);
    board.innerHTML = "";
    for (var R = 0; R < n; R++) {
      for (var C = 0; C < n; C++) {
        var d = document.createElement("div");
        if (R % 2 === 0 && C % 2 === 0) paintNoun(st, d, R / 2, C / 2, onPick);
        else if (R % 2 === 0) paintGut(st, d, "h:" + (R / 2) + ":" + ((C - 1) / 2));
        else if (C % 2 === 0) paintGut(st, d, "v:" + ((R - 1) / 2) + ":" + (C / 2));
        else d.className = "dead";
        board.appendChild(d);
      }
    }
  };

  // The status line reads out where a square would take you, as a browser used to.
  var STATUS = null;
  CL.status = function (text) {
    if (!STATUS) STATUS = document.querySelector("footer p");
    if (!STATUS) return;
    if (text === null) { STATUS.textContent = STATUS.getAttribute("data-idle"); return; }
    if (!STATUS.getAttribute("data-idle")) STATUS.setAttribute("data-idle", STATUS.textContent);
    STATUS.textContent = text;
  };

  function href(st, r, c) {
    var word = st.filled[CL.K(r, c)];
    var slug = word ? word.toLowerCase()
                    : new Array(CL.answer(st, r, c).length + 1).join("?");
    return "http://simonallmer.com/crosslink/" + st.puzzle.id + "/" + slug + ".html";
  }

  function wire(st, d, r, c, live) {
    d.onmouseenter = function () { CL.status(live ? href(st, r, c) : "(no link from here yet)"); };
    d.onmouseleave = function () { CL.status(null); };
  }

  function paintNoun(st, d, r, c, onPick) {
    var k = CL.K(r, c), ans = CL.answer(st, r, c), word = st.filled[k];
    d.className = "noun";
    d.setAttribute("role", "gridcell");

    if (word !== undefined) {
      d.classList.add("done-" + (st.status[k] || "clean"));
      if (st.wrong[k]) d.classList.add("wrong");
      if (st.selected && st.selected[0] === r && st.selected[1] === c) d.classList.add("selected");
      // A word that is down keeps the slots it was typed into: same boxes, same
      // places, so nothing on the board shifts at the moment you enter it.
      d.innerHTML = '<span class="word"></span>';
      var w = d.querySelector(".word");
      for (var n = 0; n < word.length; n++) {
        var sp = document.createElement("span");
        sp.textContent = word.charAt(n);
        w.appendChild(sp);
      }
      d.onclick = function () { onPick(r, c); };
      wire(st, d, r, c, true);
      return;
    }

    // Every square can be written in. `reachable` is no longer a gate, only a
    // mark: it says which squares a word you have placed already touches, which
    // is where the next one most easily comes from.
    if (st.reachable[k]) d.classList.add("reachable");
    if (st.selected && st.selected[0] === r && st.selected[1] === c) d.classList.add("selected");

    // The draft holds one slot per letter, revealed letters already seated in
    // theirs; the caret marks the next slot the solver still owes.
    var rev = st.revealed[k] || {}, out = "";
    var here = st.selected && st.selected[0] === r && st.selected[1] === c;
    var caret = -1;
    if (here) {
      for (var j = 0; j < st.draft.length; j++) if (!st.draft[j]) { caret = j; break; }
    }
    for (var i = 0; i < ans.length; i++) {
      var ch = here && st.draft[i] ? st.draft[i] : (rev[i] ? ans[i] : null);
      out += ch ? '<span class="' + (rev[i] ? "rev" : "") + '">' + ch + "</span>"
                : '<span class="blank' + (i === caret ? " caret" : "") + '">&#160;</span>';
    }
    d.innerHTML = '<span class="slots">' + out + "</span>" +
                  '<span class="tick">' + ans.length + "</span>";
    d.onclick = function () { onPick(r, c); };
    wire(st, d, r, c, st.reachable[k]);
  }

  function paintGut(st, d, id) {
    var e = null;
    for (var i = 0; i < st.edges.length; i++) if (st.edges[i].id === id) { e = st.edges[i]; break; }
    if (!e) { d.className = "gut barred"; d.title = "No relation is claimed here."; return; }
    if (!st.verbVisible[id]) { d.className = "gut"; return; }
    var a = e.cells[0], b = e.cells[1];
    var both = st.filled[CL.K(a[0], a[1])] !== undefined && st.filled[CL.K(b[0], b[1])] !== undefined;
    var axis = id.charAt(0) === "h" ? "h" : "v";
    var HEAD = { "\u2192": "to-right", "\u2190": "to-left", "\u2193": "to-down", "\u2191": "to-up" };
    d.className = "gut shown " + axis + " " + HEAD[e.arrow] + (both ? " spent" : "");
    d.innerHTML = '<span class="arrow" aria-hidden="true"></span><span class="label"></span>';
    d.lastChild.textContent = e.verb;
    d.title = both ? CL.sentence(st, e) : e.verb;
  }
})();
