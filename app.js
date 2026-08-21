// Crosslink — state, typing, the hint ladder, and the quiet error check.
(function () {
  var CL = window.CROSSLINK, P = null;
  var st, ghost = document.getElementById("ghost-input");

  function load(i) {
    P = CL.puzzles[i];
    document.getElementById("eyebrow").textContent = "Crosslink · demo " + P.id.split("-")[0];
    document.getElementById("title").textContent = P.title;
    document.getElementById("standfirst").textContent = P.standfirst;
    document.body.classList.toggle("wide", P.size >= 5);
    reset();
  }

  function reset() {
    st = {
      puzzle: P,
      edges: CL.edgeList(P),
      filled: {}, status: {}, revealed: {}, surfaced: {}, mark: {},
      selected: null, draft: "", peek: document.getElementById("peek").checked
    };
    document.getElementById("finish").hidden = true;
    say("");
    draw();
  }

  function draw() {
    CL.derive(st);
    CL.render(st, pick);
    panel();
    fit();
  }

  // The lattice keeps its proportions; it only ever shrinks to the page.
  function fit() {
    var wrap = document.querySelector(".board-scroll"), board = document.getElementById("board");
    board.style.transform = "none";
    var s = Math.min(1, wrap.clientWidth / board.offsetWidth);
    board.style.transformOrigin = "top left";
    board.style.transform = "scale(" + s + ")";
    wrap.style.height = Math.ceil(board.offsetHeight * s) + "px";
  }
  window.addEventListener("resize", function () { if (st) fit(); });

  function pick(r, c) {
    if (st.filled[CL.K(r, c)] !== undefined) { st.selected = [r, c]; st.draft = ""; say(""); draw(); ghost.focus(); return; }
    var open = st.reachable[CL.K(r, c)] || (st.peek && st.counted[CL.K(r, c)]);
    if (!open) { say("Nothing on the board reaches that square yet."); return; }
    st.selected = [r, c];
    st.draft = "";
    say("");
    draw();
    ghost.focus();
  }

  function lift(r, c) {
    delete st.filled[CL.K(r, c)];
    st.selected = [r, c];
    st.draft = "";
    say("");
    draw();
    ghost.focus();
  }

  // ---- the clue panel -------------------------------------------------

  function panel() {
    var empty = document.getElementById("panel-empty"),
        body = document.getElementById("panel-body");
    if (!st.selected) {
      empty.hidden = false; body.hidden = true;
      empty.textContent = Object.keys(st.filled).length
        ? "Pick a lit square." : "Tap the centre square to begin.";
      return;
    }
    empty.hidden = true; body.hidden = false;

    var r = st.selected[0], c = st.selected[1], k = CL.K(r, c), ans = CL.answer(st, r, c);
    var down = st.filled[k];
    document.getElementById("panel-count").textContent =
      down !== undefined ? down + " — " + ans.length + " letters" : ans.length + " letters";

    var ul = document.getElementById("routes");
    ul.innerHTML = "";
    CL.edgesAt(st, r, c).filter(function (e) { return st.verbVisible[e.id]; }).forEach(function (e) {
      var li = document.createElement("li");
      li.innerHTML = term(e.subject, r, c) + " " + e.verb + " " + term(e.object, r, c);
      ul.appendChild(li);
    });
    if (!ul.children.length) {
      ul.innerHTML = '<li class="gap">No verb has surfaced here yet.</li>';
    }

    var enter = document.getElementById("enter"), btn = document.getElementById("hint");

    if (down !== undefined) {
      enter.textContent = "Take it back";
      enter.disabled = false;
      enter.onclick = function () { lift(r, c); };
      btn.textContent = "";
      btn.hidden = true;
      document.getElementById("hint-note").textContent =
        "Nothing is final. A square you take back keeps any mark it earned.";
      return;
    }

    enter.textContent = "Enter word";
    enter.disabled = st.draft.length !== ans.length;
    enter.onclick = function () { submit(); ghost.focus(); };

    var h = nextHint(r, c);
    btn.hidden = false;
    btn.textContent = h ? h.label : "Nothing left to give";
    btn.disabled = !h;
    btn.onclick = function () { if (h) { h.run(); say(h.note, true); draw(); ghost.focus(); } };
    document.getElementById("hint-note").textContent =
      "A surfaced verb costs you nothing. Letters mark the square.";
  }

  function term(xy, r, c) {
    var k = CL.K(xy[0], xy[1]);
    if (xy[0] === r && xy[1] === c) return '<span class="gap">' + dashes(CL.answer(st, r, c).length) + "</span>";
    if (st.filled[k] !== undefined) return "<em>" + st.filled[k] + "</em>";
    var len = CL.answer(st, xy[0], xy[1]).length;
    return '<span class="gap">' + (st.counted[k] ? dashes(len) : "something") + "</span>";
  }

  function dashes(n) { var s = ""; for (var i = 0; i < n; i++) s += "·"; return s; }

  // ---- the hint ladder: a verb first, letters second, the word last ----

  function nextHint(r, c) {
    var k = CL.K(r, c), ans = CL.answer(st, r, c);
    var hidden = CL.edgesAt(st, r, c).filter(function (e) { return !st.verbVisible[e.id]; });
    if (hidden.length) {
      return { label: "Surface a verb", note: "A route in, at no cost to the square.",
        run: function () { st.surfaced[pickOne(hidden).id] = true; } };
    }
    var rev = st.revealed[k] || (st.revealed[k] = {});
    var missing = [];
    for (var i = 0; i < ans.length; i++) if (!rev[i]) missing.push(i);
    if (missing.length > 1) {
      return { label: "Reveal a letter", note: "This square will read as partly solved.",
        run: function () { rev[pickOne(missing)] = true; st.mark[k] = "partial"; st.draft = ""; } };
    }
    return { label: "Reveal the word", note: "This square will read as given, not solved.",
      run: function () { st.filled[k] = ans; st.mark[k] = "given"; st.status[k] = "given"; st.selected = null; st.draft = ""; } };
  }

  function pickOne(a) { return a[Math.floor(Math.random() * a.length)]; }

  // ---- entering a word ------------------------------------------------

  function submit() {
    if (!st.selected) return;
    var r = st.selected[0], c = st.selected[1], k = CL.K(r, c),
        ans = CL.answer(st, r, c), w = st.draft.toUpperCase();

    if (w.length !== ans.length) { say("That square takes " + ans.length + " letters."); return; }
    var dup = Object.keys(st.filled).filter(function (kk) { return st.filled[kk] === w; });
    if (dup.length) { say("Each word is used once, and " + w + " is already on the board."); return; }

    st.filled[k] = w;
    st.status[k] = st.mark[k] || "clean";
    st.selected = null; st.draft = "";
    say("");
    draw();
    checkWin();
  }

  function checkWin() {
    for (var r = 0; r < P.size; r++) for (var c = 0; c < P.size; c++) {
      if (st.filled[CL.K(r, c)] !== CL.answer(st, r, c)) return;
    }
    finish();
  }

  function finish() {
    var clean = 0, partial = 0, given = 0;
    Object.keys(st.status).forEach(function (k) {
      if (st.status[k] === "clean") clean++;
      else if (st.status[k] === "partial") partial++;
      else given++;
    });
    var bits = [clean + " solved outright"];
    if (partial) bits.push(partial + " with letters revealed");
    if (given) bits.push(given + " given");
    document.getElementById("finish-sub").textContent = bits.join(", ") + ".";

    var ul = document.getElementById("sentences");
    ul.innerHTML = "";
    st.edges.forEach(function (e) {
      var li = document.createElement("li");
      li.innerHTML = '<span class="n"></span> ' + e.verb + ' <span class="n"></span>.';
      li.children[0].textContent = st.filled[CL.K(e.subject[0], e.subject[1])];
      li.children[1].textContent = st.filled[CL.K(e.object[0], e.object[1])];
      ul.appendChild(li);
    });
    document.getElementById("panel-empty").textContent = "";
    document.getElementById("finish").hidden = false;
    document.getElementById("finish").scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function say(msg, ok) {
    var el = document.getElementById("message");
    el.textContent = msg || "";
    el.className = "message" + (ok ? " ok" : "");
  }

  // ---- input ----------------------------------------------------------

  ghost.addEventListener("input", function () {
    var letters = ghost.value.toUpperCase().replace(/[^A-Z]/g, "");
    ghost.value = "";
    if (!st.selected || !letters) return;
    if (st.filled[CL.K(st.selected[0], st.selected[1])] !== undefined) delete st.filled[CL.K(st.selected[0], st.selected[1])];
    var max = CL.answer(st, st.selected[0], st.selected[1]).length;
    st.draft = (st.draft + letters).slice(0, max);
    draw();
  });

  ghost.addEventListener("keydown", function (ev) {
    if (!st.selected) return;
    if (ev.key === "Backspace") {
      ev.preventDefault();
      if (st.filled[CL.K(st.selected[0], st.selected[1])] !== undefined) lift(st.selected[0], st.selected[1]);
      else { st.draft = st.draft.slice(0, -1); draw(); }
    }
    else if (ev.key === "Enter") { ev.preventDefault(); submit(); }
    else if (ev.key === "Escape") { ev.preventDefault(); st.selected = null; st.draft = ""; draw(); }
  });

  document.addEventListener("keydown", function (ev) {
    if (document.activeElement === ghost || !st.selected) return;
    if (/^[a-zA-Z]$/.test(ev.key)) {
      ghost.focus();
      if (st.filled[CL.K(st.selected[0], st.selected[1])] !== undefined) delete st.filled[CL.K(st.selected[0], st.selected[1])];
      var max = CL.answer(st, st.selected[0], st.selected[1]).length;
      st.draft = (st.draft + ev.key.toUpperCase()).slice(0, max);
      draw();
    }
  });

  document.getElementById("peek").addEventListener("change", function (ev) {
    st.peek = ev.target.checked; draw();
  });
  document.getElementById("restart").addEventListener("click", reset);

  var which = document.getElementById("which");
  CL.puzzles.forEach(function (p, i) {
    var o = document.createElement("option");
    o.value = i;
    o.textContent = p.size + "×" + p.size + " — " + p.title;
    which.appendChild(o);
  });
  which.addEventListener("change", function () { load(+which.value); });

  load(0);
})();
