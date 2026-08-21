// Crosslink engine — the lattice, the edges, and the rendering of both.
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

    st.verbVisible = {};
    st.edges.forEach(function (e) {
      var touchesCentre = e.cells.some(function (x) { return x[0] === ctr[0] && x[1] === ctr[1]; });
      var endpointSolved = e.cells.some(function (x) { return solved(x[0], x[1]); });
      if (touchesCentre || endpointSolved || st.surfaced[e.id]) st.verbVisible[e.id] = true;
    });

    // Reachable: the centre, or any cell with a visible verb whose other end is solved.
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

    st.counted = {};
    Object.keys(st.reachable).forEach(function (k) { st.counted[k] = true; });
    if (st.peek) {
      Object.keys(st.reachable).forEach(function (k) {
        var xy = k.split(",");
        CL.edgesAt(st, +xy[0], +xy[1]).forEach(function (e) {
          var o = CL.other(e, +xy[0], +xy[1]);
          st.counted[K(o[0], o[1])] = true;
        });
      });
    }

    // Edge-local proof: a gutter is contradicted only when BOTH its words are down.
    st.conflicts = {};
    st.edges.forEach(function (e) {
      var a = e.cells[0], b = e.cells[1];
      if (!solved(a[0], a[1]) || !solved(b[0], b[1])) return;
      var wrong = st.filled[K(a[0], a[1])] !== CL.answer(st, a[0], a[1]) ||
                  st.filled[K(b[0], b[1])] !== CL.answer(st, b[0], b[1]);
      if (wrong) st.conflicts[e.id] = true;
    });
  };

  // Cell geometry is a function of board size: a bigger lattice takes smaller squares.
  CL.dims = function (size) {
    return size >= 5 ? { noun: 104, gut: 100, row: 62 } : { noun: 124, gut: 116, row: 58 };
  };

  CL.render = function (st, onPick) {
    var p = st.puzzle, board = document.getElementById("board"), n = 2 * p.size - 1;
    var d = CL.dims(p.size), cols = [], rows = [];
    for (var i = 0; i < n; i++) {
      cols.push((i % 2 === 0 ? d.noun : d.gut) + "px");
      rows.push(d.row + "px");
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

  function paintNoun(st, d, r, c, onPick) {
    var k = CL.K(r, c), ans = CL.answer(st, r, c), word = st.filled[k];
    d.className = "noun";
    d.setAttribute("role", "gridcell");

    if (word !== undefined) {
      d.classList.add("done-" + (st.status[k] || "clean"));
      if (st.selected && st.selected[0] === r && st.selected[1] === c) d.classList.add("selected");
      d.innerHTML = '<span class="word"></span>';
      d.querySelector(".word").textContent = word;
      d.onclick = function () { onPick(r, c); };
      return;
    }

    if (!st.counted[k]) { d.classList.add("dark"); return; }

    if (st.reachable[k] || st.peek) d.classList.add("reachable");
    if (st.selected && st.selected[0] === r && st.selected[1] === c) d.classList.add("selected");
    else if (st.puzzle.centre[0] === r && st.puzzle.centre[1] === c) d.classList.add("centre-open");

    var rev = st.revealed[k] || {}, out = "";
    for (var i = 0; i < ans.length; i++) {
      var ch;
      if (st.selected && st.selected[0] === r && st.selected[1] === c && i < st.draft.length) ch = st.draft[i];
      else if (rev[i]) ch = ans[i];
      else ch = null;
      out += ch ? '<span class="' + (ch === ans[i] && rev[i] ? "rev" : "") + '">' + ch + "</span>"
                : '<span class="blank">·</span>';
    }
    d.innerHTML = '<span class="slots">' + out + "</span>" +
                  '<span class="tick">' + ans.length + "</span>";
    d.onclick = function () { onPick(r, c); };
  }

  function paintGut(st, d, id) {
    var e = null;
    for (var i = 0; i < st.edges.length; i++) if (st.edges[i].id === id) { e = st.edges[i]; break; }
    if (!e) { d.className = "gut barred"; d.title = "No relation is claimed here."; return; }
    if (!st.verbVisible[id]) { d.className = "gut"; return; }
    d.className = "gut shown" + (st.conflicts[id] ? " conflict" : "");
    d.innerHTML = '<span class="arrow">' + e.arrow + "</span><span></span>";
    d.lastChild.textContent = e.verb;
  }
})();
