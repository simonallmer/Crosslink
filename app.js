// Crosslink — state, typing, the hint ladder, and the quiet error check.
(function () {
  var CL = window.CROSSLINK, P = null;
  var st, ghost = document.getElementById("ghost-input");

  function load(i) {
    P = CL.puzzles[i];
    document.getElementById("eyebrow").textContent =
      "Crosslink \u00b7 No. " + (+P.id.split("-")[0]) + " \u00b7 " + CL.starText(CL.stars(P));
    document.getElementById("title").textContent = P.title;
    document.getElementById("standfirst").textContent = P.standfirst;
    document.body.classList.toggle("wide", P.size >= 5);
    // A board carries its own colour. It goes on the body rather than on the
    // view, so the paper, the side windows and the chips the wires run behind
    // all turn together — one document, one colour, which is how a page of this
    // period announced what it was about.
    document.body.setAttribute("data-hue", P.hue || "");
    reset();
  }

  function reset() {
    if (typeof demoStop === "function") demoStop();
    st = {
      puzzle: P,
      edges: CL.edgeList(P),
      filled: {}, status: {}, revealed: {}, surfaced: {}, mark: {},
      // Which connections are showing their second face. Restart clears them
      // with everything else; nothing else ever does.
      flipped: {},
      selected: null, draft: [],
      check: document.getElementById("check").checked
    };
    document.getElementById("finish").hidden = true;
    document.getElementById("panel").hidden = false;
    ghost.blur();
    say("");
    draw();
  }

  // Turning a connection over. Free, uncounted, and reversible — see A11. The
  // board redraws so the sentence in the script window follows the face that is
  // showing, and so a turned gutter keeps its mark while you work elsewhere.
  CL.onTurn = function (id) {
    st.flipped[id] = !st.flipped[id];
    if (CL.sfx && CL.sfx.key) CL.sfx.key();   // before the redraw, as everywhere
    st.turning = id;   // only this gutter animates, and only on this redraw
    draw();
    st.turning = null;
  };

  function draw() {
    CL.derive(st);
    CL.render(st, pick);
    panel();
    scriptWin();
    lexWin();
    fit();
  }

  // The lattice keeps its proportions, and shrinks to the page — but only so far.
  // Past MIN_SCALE the verbs stop being readable, so the board scrolls sideways instead.
  var MIN_SCALE = 0.82;

  function fit() {
    var wrap = document.querySelector(".board-scroll"), board = document.getElementById("board");
    if (!board.offsetWidth && !board.offsetHeight) return;
    board.style.transform = "none";
    board.style.margin = "0";
    var w = board.offsetWidth, h = board.offsetHeight;
    var s = Math.min(1, Math.max(MIN_SCALE, wrap.clientWidth / w));
    board.style.transformOrigin = "top left";
    board.style.transform = "scale(" + s + ")";
    // Collapse the layout box the transform left behind, so the scroller measures true.
    board.style.marginRight = -Math.round(w * (1 - s)) + "px";
    board.style.marginBottom = -Math.round(h * (1 - s)) + "px";
    wrap.style.height = "";
  }
  window.addEventListener("resize", function () { if (st) fit(); });

  // The hidden input is what a phone or tablet raises its keyboard for, so it
  // must not be focused while the demonstration is driving. Blurring it after
  // the fact is not enough — the keyboard has already begun to come up, and what
  // you see is it flickering open and shut. Nothing focuses it during a demo.
  function takeFocus() {
    if (typeof DEMO !== "undefined" && DEMO && DEMO.on) return;
    ghost.focus();
  }

  function pick(r, c) {
    if (st.filled[CL.K(r, c)] !== undefined) {
      st.selected = [r, c]; st.draft = freshDraft(r, c); say("");
      lexOpen(st.filled[CL.K(r, c)]);
      draw(); takeFocus(); return;
    }
    st.selected = [r, c];
    st.draft = freshDraft(r, c);
    say("");
    draw();
    takeFocus();
  }

  function lift(r, c) {
    delete st.filled[CL.K(r, c)];
    st.selected = [r, c];
    st.draft = freshDraft(r, c);
    say("");
    draw();
    takeFocus();
  }

  // ---- the draft: one slot per letter ---------------------------------
  // A revealed letter already stands in its slot, so typing steps over it
  // instead of asking for a letter the board has handed over.

  // A slot the solver cannot be asked to type is seated for them. Typing only
  // ever admits A-Z (see the ghost's input handler), so a hyphen in COCA-COLA or
  // BERNERS-LEE would otherwise be a slot nobody could fill. It is printed from
  // the start, like a revealed letter that costs nothing, and `nextSlot` steps
  // over it exactly as it steps over one.
  function seated(ch) { return !/[A-Z]/.test(ch); }

  function freshDraft(r, c) {
    var ans = CL.answer(st, r, c), rev = st.revealed[CL.K(r, c)] || {}, d = [];
    for (var i = 0; i < ans.length; i++) d.push((rev[i] || seated(ans[i])) ? ans[i] : null);
    return d;
  }

  // Seats a newly revealed letter without disturbing what is already typed.
  function reseat(r, c) {
    var ans = CL.answer(st, r, c), rev = st.revealed[CL.K(r, c)] || {}, prev = st.draft, d = [];
    var keep = prev.length === ans.length;
    for (var i = 0; i < ans.length; i++)
      d.push((rev[i] || seated(ans[i])) ? ans[i] : (keep ? prev[i] : null));
    return d;
  }

  function draftFull() {
    if (!st.draft.length) return false;
    for (var i = 0; i < st.draft.length; i++) if (!st.draft[i]) return false;
    return true;
  }

  // The next slot the solver still owes — revealed and filled slots are skipped.
  function nextSlot() {
    for (var i = 0; i < st.draft.length; i++) if (!st.draft[i]) return i;
    return -1;
  }

  function typeIn(letters) {
    if (CL.sfx) CL.sfx.key();
    var r = st.selected[0], c = st.selected[1], k = CL.K(r, c);
    if (st.filled[k] !== undefined) delete st.filled[k];
    if (st.draft.length !== CL.answer(st, r, c).length) st.draft = freshDraft(r, c);
    for (var n = 0; n < letters.length; n++) {
      var i = nextSlot();
      if (i < 0) break;
      st.draft[i] = letters.charAt(n);
    }
    draw();
  }

  // ---- the clue panel -------------------------------------------------

  function panel() {
    var empty = document.getElementById("panel-empty"),
        body = document.getElementById("panel-body");
    if (!st.selected) {
      empty.hidden = false; body.hidden = true;
      empty.textContent = Object.keys(st.filled).length
        ? "Pick a square." : "Pick any square and begin. The middle is the usual way in.";
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
      ul.innerHTML = '<li class="gap">Nothing has surfaced here yet.</li>';
    }
    var more = document.createElement("li");
    more.className = "more";
    more.textContent = "Read every sentence \u2192";
    ul.appendChild(more);
    ul.title = "Read every sentence the board has shown you";
    ul.onclick = function () { show("win-script", true); };

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
    enter.disabled = !draftFull();
    enter.onclick = function () { submit(); ghost.focus(); };

    var h = nextHint(r, c);
    btn.hidden = false;
    btn.textContent = h ? h.label : "Nothing left to give";
    btn.disabled = !h;
    btn.onclick = function () { if (h) { h.run(); say(h.note, true); draw(); ghost.focus(); } };
    document.getElementById("hint-note").textContent =
      "A letter marks the square as partly solved. The word marks it as given.";
  }

  function term(xy, r, c) {
    var k = CL.K(xy[0], xy[1]);
    if (st.filled[k] !== undefined) return "<em>" + st.filled[k] + "</em>";
    if (xy[0] === r && xy[1] === c) return '<span class="gap">' + dashes(CL.answer(st, r, c).length) + "</span>";
    // Every sentence is public now, so every word's length is too: the clue panel
    // and the written form must not disagree about what is knowable.
    return '<span class="gap">' + dashes(CL.answer(st, xy[0], xy[1]).length) + "</span>";
  }

  function dashes(n) { var s = ""; for (var i = 0; i < n; i++) s += "_"; return s; }

  // ---- the two side windows -------------------------------------------

  function show(id, on) {
    var el = document.getElementById(id);
    if (CL.sfx && el.hidden === on) CL.sfx[on ? "open" : "shut"]();
    el.hidden = !on;
    refresh();
  }

  function refresh() {
    if (st && here && here.name === "play") draw();
    else { scriptWin(); lexWin(); }
  }

  // Left: every sentence the board has surfaced, whole or half-known.
  function scriptWin() {
    if (document.getElementById("win-script").hidden) return;
    var ul = document.getElementById("script-list");
    ul.innerHTML = "";
    if (!st) { ul.innerHTML = '<li class="gap">No board is open.</li>'; return; }
    st.edges.forEach(function (e) {
      if (!st.verbVisible[e.id]) return;
      var s = st.filled[CL.K(e.subject[0], e.subject[1])],
          o = st.filled[CL.K(e.object[0], e.object[1])];
      var li = document.createElement("li");
      li.className = (s !== undefined && o !== undefined) ? "closed" : "open";
      li.innerHTML = piece(e.subject, s) + " " + e.verb + " " + piece(e.object, o) + ".";
      Array.prototype.forEach.call(li.querySelectorAll("em"), function (em) {
        em.onclick = function () { lexOpen(em.textContent); refresh(); };
      });
      ul.appendChild(li);
    });
    if (!ul.children.length) ul.innerHTML = '<li class="gap">Nothing has surfaced yet.</li>';
  }

  function piece(xy, word) {
    if (word !== undefined) return "<em>" + word + "</em>";
    return '<span class="gap">' + dashes(CL.answer(st, xy[0], xy[1]).length) + "</span>";
  }

  // Right: the entry for the last word you clicked, and the words on the board.
  var lexWord = null;

  function lexOpen(word) {
    // One entry per word, whichever English it was typed in (W1a).
    lexWord = CL.canon(word);
    document.getElementById("win-lex").hidden = false;
  }

  function lexWin() {
    if (document.getElementById("win-lex").hidden) return;
    var hand = lexWord && CL.lex ? CL.lex[lexWord] : null;
    var reg = lexWord && CL.registry ? CL.registry[lexWord] : null;
    var gen = lexWord && CL.words ? CL.words[lexWord] : null;
    document.getElementById("lex-word").textContent = lexWord || "";
    document.getElementById("lex-pos").textContent =
      hand ? hand.pos : (gen ? gen.k : (reg ? "n." : ""));

    var ol = document.getElementById("lex-senses"), note = document.getElementById("lex-note");
    ol.innerHTML = "";
    note.textContent = "";
    if (!lexWord) note.textContent = "Click a word you have placed, or any word in the list.";
    else if (!hand && !reg && !gen) note.textContent = "Not in the Crosslink word list.";
    else if (!hand && !reg && gen) {
      var li0 = document.createElement("li");
      li0.textContent = gen.d;
      ol.appendChild(li0);
    }
    else if (hand) {
      hand.senses.forEach(function (t) {
        var li = document.createElement("li");
        li.textContent = t;
        ol.appendChild(li);
      });
      if (reg) note.textContent = "Domains: " + reg.map(function (x) { return x[0]; }).join(" \u00B7 ");
    } else if (reg) {
      reg.forEach(function (x) {
        var li = document.createElement("li");
        li.innerHTML = '<b></b> \u2014 <span></span>';
        li.children[0].textContent = x[0];
        li.children[1].textContent = x[1];
        ol.appendChild(li);
      });
    }

    var where = document.getElementById("lex-where");
    where.innerHTML = "";
    if (lexWord) {
      // Every board it is set in, since 3.9 allows more than one.
      var on = [];
      CL.puzzles.forEach(function (p, i) {
        p.nouns.forEach(function (row) { if (row.indexOf(lexWord) >= 0 && on.indexOf(i) < 0) on.push(i); });
      });
      if (!on.length) where.textContent = "Not yet set in a board.";
      else {
        where.appendChild(document.createTextNode(on.length > 1 ? "Set in " : "Set in "));
        on.forEach(function (i, n) {
          if (n) where.appendChild(document.createTextNode(" and "));
          var b = document.createElement("button");
          b.type = "button"; b.className = "lex-play";
          b.textContent = "\u2116" + (i + 1) + " \u2014 " + CL.puzzles[i].title;
          b.onclick = function () { go("play", i); };
          where.appendChild(b);
        });
      }
    }

    var ul = document.getElementById("lex-list");
    ul.innerHTML = "";
    if (!st) { ul.innerHTML = '<li class="gap">Nothing on the board.</li>'; return; }
    for (var r = 0; r < P.size; r++) {
      for (var c = 0; c < P.size; c++) {
        var w = st.filled[CL.K(r, c)];
        if (w === undefined) continue;
        var li = document.createElement("li"), b = document.createElement("button");
        b.type = "button";
        b.textContent = w;
        if (w === lexWord) b.className = "here";
        b.onclick = (function (word) { return function () { lexOpen(word); refresh(); }; })(w);
        li.appendChild(b);
        ul.appendChild(li);
      }
    }
    if (!ul.children.length) ul.innerHTML = '<li class="gap">Nothing yet.</li>';
  }

  // ---- where in the site you are ---------------------------------------

  var SITE = "http://simonallmer.com/crosslink/";
  var VIEWS = {
    menu:    { el: "view-menu",    title: "Crosslink",             loc: "" },
    play:    { el: "view-play",    title: "Crosslink",             loc: "" },
    puzzles: { el: "view-puzzles", title: "Crosslink \u2014 Puzzles",   loc: "puzzles.html" },
    words:   { el: "view-words",   title: "Crosslink \u2014 Word List", loc: "words.html" },
    rules:   { el: "view-rules",   title: "Crosslink \u2014 Rulebook",  loc: "rulebook.html" },
    intro:   { el: "view-intro",   title: "Crosslink \u2014 Introduction", loc: "intro.html" }
  };
  var here = null, trail = [];

  // The sites this one belongs to, offered from the location bar.
  // Not alphabetical, because alphabetical is a filing order and this is a
  // masthead: the group first, then the person, then the six studios in the
  // order they are always named, and only then the rest of the network A-Z.
  var SITES = [
    "allmergroup.com", "simonallmer.com",
    "allmercomics.com", "allmerfilms.com", "allmermusic.com",
    "allmergames.com", "allmerjournals.com", "allmersnacks.com"
  ].concat([
    "casinocamino.com", "colbu.com", "futory.com", "lunyra.com",
    "scaretales.com", "sevenwondersgames.com", "societyreview.org"
  ].sort());

  function go(name, arg, back) {
    if (typeof demoStop === "function") demoStop();
    // Going to the page you are already on is not a step, and it must not leave
    // one behind. It used to: clicking Puzzles while on Puzzles pushed Puzzles,
    // so Back sent you to the page you were looking at, and the trail never
    // emptied — nav-back was permanently enabled and, after enough of them,
    // Back from the front page walked you *forward* into a stale board. The
    // button always had this; binding Escape to it is what made it obvious.
    if (here && !back && !(here.name === name && here.arg === arg)) {
      trail.push([here.name, here.arg]);
    }
    here = { name: name, arg: arg };
    Object.keys(VIEWS).forEach(function (k) {
      document.getElementById(VIEWS[k].el).hidden = (k !== name);
    });
    if (name === "play") load(arg);
    else document.body.removeAttribute("data-hue");   // only a board is coloured
    if (name === "words") wordList();
    else if (name === "puzzles") puzzleIndex();
    chrome();
    document.getElementById("nav-back").disabled = !trail.length;
    window.scrollTo(0, 0);
  }

  function chrome() {
    var v = VIEWS[here.name], title = v.title, loc = SITE + v.loc;
    if (here.name === "play") { title = "Crosslink \u2014 " + P.title; loc = SITE + P.id + "/"; }
    document.getElementById("win-name").textContent = title;
    document.getElementById("loc").textContent = loc;
  }

  // Every word Crosslink knows: the registry, plus anything set in a board.
  // H2 was repealed at 3.9: a word may be set on more than one board. So a word
  // knows every board it is on, not the last one that happened to claim it —
  // which is what the old `board: -1` single slot silently did.
  function vocabulary() {
    var map = {}, k;
    for (k in CL.registry) if (CL.registry.hasOwnProperty(k)) map[k] = { boards: [] };
    for (k in CL.words) if (CL.words.hasOwnProperty(k) && !map[k]) map[k] = { boards: [] };
    for (k in CL.lex) if (CL.lex.hasOwnProperty(k) && !map[k]) map[k] = { boards: [] };
    CL.puzzles.forEach(function (p, i) {
      p.nouns.forEach(function (row) {
        row.forEach(function (w) {
          var e = map[w] || (map[w] = { boards: [] });
          if (e.boards.indexOf(i) < 0) e.boards.push(i);
        });
      });
    });
    return map;
  }

  function wordList() {
    var map = vocabulary(), words = Object.keys(map).sort();
    var onBoards = 0;
    var ul = document.getElementById("word-index");
    ul.innerHTML = "";
    words.forEach(function (w) {
      var boards = map[w].boards;
      if (boards.length) onBoards++;
      var li = document.createElement("li");
      li.className = boards.length ? "open" : "none";
      var b = document.createElement("button");
      b.type = "button"; b.className = "w"; b.textContent = w;
      b.onclick = function () { lexOpen(w); refresh(); };
      li.appendChild(b);
      boards.forEach(function (board) {
        var a = document.createElement("button");
        a.type = "button"; a.className = "b";
        a.textContent = "\u2116" + (board + 1);
        a.title = "Play " + CL.puzzles[board].title;
        a.onclick = function () { go("play", board); };
        li.appendChild(a);
      });
      ul.appendChild(li);
    });
    document.getElementById("words-sub").textContent =
      words.length + " words in the quarry. " + onBoards +
      " have been set in a board so far; the rest are waiting for one. " +
      "A word may be set in more than one, and carries a number for each.";
  }

  function puzzleIndex() {
    var t = document.getElementById("puzzle-index");
    t.innerHTML = "";
    CL.puzzles.forEach(function (p, i) {
      var tr = document.createElement("tr");
      tr.innerHTML = '<td class="no"></td><td class="ti"></td><td class="sz"></td>' +
                     '<td class="st"></td><td class="ac"></td>';
      tr.children[0].textContent = "\u2116" + (i + 1);
      tr.children[2].textContent = p.size + "\u00D7" + p.size;
      tr.children[3].textContent = CL.starText(CL.stars(p));
      tr.children[3].className = "st stars";

      // The title is a link, and behaves like one.
      var open = function () { go("play", i); };
      var a = document.createElement("button");
      a.type = "button"; a.className = "ti-link";
      a.textContent = p.title;
      a.onclick = open;
      tr.children[1].appendChild(a);

      var b = document.createElement("button");
      b.type = "button"; b.className = "ghost";
      b.textContent = "Play";
      b.onclick = open;
      tr.children[4].appendChild(b);
      t.appendChild(tr);
    });

    // No longer a warning. A word on two boards is a crossing between them, and
    // the footer says how many there are rather than complaining about them.
    var seen = {}, shared = [];
    CL.puzzles.forEach(function (p) {
      p.nouns.forEach(function (row) { row.forEach(function (w) {
        if (seen[w] === 1) shared.push(w);
        seen[w] = (seen[w] || 0) + 1;
      }); });
    });
    var total = Object.keys(seen).length;
    document.getElementById("puzzle-foot").textContent = shared.length
      ? total + " words set so far. " + shared.length +
        " of them cross two boards or more: " + shared.sort().join(", ") + "."
      : total + " words set so far, none yet on two boards.";
  }

  // N3b generalised: anything printed with a `data-lex` opens that entry. The
  // epigraph's attribution is the first — a name set in type on the rulebook page
  // is a word in the game like any other, and it was the one word on that page
  // you could not look up.
  Array.prototype.forEach.call(document.querySelectorAll("[data-lex]"), function (el) {
    el.title = "Look up " + el.getAttribute("data-lex");
    el.onclick = function () { lexOpen(el.getAttribute("data-lex")); refresh(); };
  });

  Array.prototype.forEach.call(document.querySelectorAll("[data-go]"), function (a) {
    a.onclick = function (ev) {
      ev.preventDefault();
      var d = a.getAttribute("data-go");
      if (d === "daily") go("play", CL.puzzles.length - 1);
      else go(d);
    };
  });

  function navBack() {
    if (!trail.length) return;
    if (CL.sfx) CL.sfx.click();                 // the key sounds like the button
    var p = trail.pop();
    go(p[0], p[1], true);
  }
  document.getElementById("nav-back").onclick = navBack;
  document.getElementById("nav-home").onclick = function () { go("menu"); };

  // Light or dark, by the sun and moon in the toolbar. The system's preference
  // is the default; a choice made here outranks it, and is kept for the session
  // only — long enough to matter, not long enough to be a promise.
  var themeBtn = document.getElementById("theme-toggle");
  function darkNow() {
    var set = document.documentElement.getAttribute("data-theme");
    if (set) return set === "dark";
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  function paintTheme() {
    var dark = darkNow();
    themeBtn.className = "tool ico" + (dark ? " is-dark" : "");
    themeBtn.setAttribute("aria-pressed", dark ? "true" : "false");
    themeBtn.title = dark ? "Dark. Click for light." : "Light. Click for dark.";
  }
  try {
    var kept = window.sessionStorage && sessionStorage.getItem("crosslink-theme");
    if (kept) document.documentElement.setAttribute("data-theme", kept);
  } catch (e) {}
  themeBtn.onclick = function () {
    var next = darkNow() ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { if (window.sessionStorage) sessionStorage.setItem("crosslink-theme", next); } catch (e) {}
    paintTheme();
    demoTap();
  };

  // ---- the demonstration ------------------------------------------------
  //
  // Four clicks on the sun-and-moon inside four seconds and the board solves
  // itself; four more and it stops. It is for recording the game being played,
  // so the whole design brief is that it must not look like a machine:
  //
  //   * it starts at the middle, because that is where a person starts
  //   * it works outward along what it has already placed, but not always —
  //     roughly one word in five is a jump to somewhere else on the board,
  //     which is what a solver does when a far square suddenly occurs to them
  //   * within the frontier it prefers squares with more solved neighbours,
  //     because those are the ones that would actually come easiest
  //   * letters do not arrive at a constant rate, and every so often it stops
  //     mid-word for as long as it takes to think
  //   * it pauses before a word as well as during it, and longer before a long
  //     one, as though reading the clues around it first
  //
  // The randomness is bounded on purpose: the pace has to stay steady enough to
  // watch, so the jitter is a spread around a rhythm rather than free.
  var DEMO = { on: false, timer: null, taps: [] };

  function demoTap() {
    var now = Date.now();
    DEMO.taps.push(now);
    DEMO.taps = DEMO.taps.filter(function (t) { return now - t < 4000; });
    if (DEMO.taps.length < 4) return;
    DEMO.taps = [];
    if (DEMO.on) demoStop("stopped"); else demoStart();
  }

  function demoStop(why) {
    DEMO.on = false;
    if (DEMO.timer) { clearTimeout(DEMO.timer); DEMO.timer = null; }
    ghost.removeAttribute("inputmode");
    if (why) say("");
  }

  function wait(ms, fn) { DEMO.timer = setTimeout(function () { if (DEMO.on) fn(); }, ms); }
  function jitter(base, spread) { return base + Math.round((Math.random() - 0.5) * 2 * spread); }

  function demoStart() {
    if (!st || !here || here.name !== "play") return;
    DEMO.on = true;
    // Belt and braces on top of takeFocus(): if anything at all reaches the
    // hidden input while this is running, inputmode="none" stops a soft keyboard
    // coming up for it. Blur once here in case it already had focus.
    ghost.setAttribute("inputmode", "none");
    ghost.blur();
    wait(700, demoWord);
  }

  // Which square a person would go to next.
  function demoPick() {
    var open = [], r, c;
    for (r = 0; r < P.size; r++) for (c = 0; c < P.size; c++)
      if (st.filled[CL.K(r, c)] === undefined) open.push([r, c]);
    if (!open.length) return null;

    var done = Object.keys(st.filled).length;
    if (!done) return P.centre.slice();

    // How many placed words each open square already touches.
    var scored = open.map(function (rc) {
      var n = CL.edgesAt(st, rc[0], rc[1]).filter(function (e) {
        var o = CL.other(e, rc[0], rc[1]);
        return st.filled[CL.K(o[0], o[1])] !== undefined;
      }).length;
      return { rc: rc, n: n };
    });
    var touching = scored.filter(function (x) { return x.n > 0; });

    // One word in five, go somewhere else entirely — but only if there is
    // somewhere else, and never at the very start.
    var elsewhere = scored.filter(function (x) { return x.n === 0; });
    if (elsewhere.length && done > 1 && Math.random() < 0.2)
      return pickOne(elsewhere).rc;
    if (!touching.length) return pickOne(scored).rc;

    // Otherwise the best-connected square, with the near-misses still in play.
    var best = Math.max.apply(null, touching.map(function (x) { return x.n; }));
    var top = touching.filter(function (x) { return x.n >= best - (Math.random() < 0.35 ? 1 : 0); });
    return pickOne(top).rc;
  }

  function demoWord() {
    if (!DEMO.on) return;
    var rc = demoPick();
    if (!rc) { demoStop(); return; }
    var ans = CL.answer(st, rc[0], rc[1]);
    pick(rc[0], rc[1]);
    // A beat to read the square's clues, longer for a longer word.
    wait(jitter(520 + ans.length * 45, 220), function () { demoLetter(ans, 0); });
  }

  function demoLetter(ans, i) {
    if (!DEMO.on) return;
    if (i >= ans.length) {
      wait(jitter(560, 200), function () {
        submit();
        if (Object.keys(st.filled).length >= P.size * P.size) { demoStop(); return; }
        wait(jitter(760, 320), demoWord);
      });
      return;
    }
    if (!/[A-Z]/.test(ans.charAt(i))) { demoLetter(ans, i + 1); return; }   // seated already
    typeIn(ans.charAt(i));
    // Most letters come quickly; now and then the hand stops.
    var pause = Math.random() < 0.13 ? jitter(620, 260) : jitter(155, 65);
    wait(Math.max(70, pause), function () { demoLetter(ans, i + 1); });
  }

  // Leaving the board or restarting it ends the demonstration. Hooked at the
  // source rather than by reassigning `reset`, which could never have worked:
  // the Restart button was bound to the original function long before this line.
  if (window.matchMedia) {
    var mq = window.matchMedia("(prefers-color-scheme: dark)");
    if (mq.addEventListener) mq.addEventListener("change", paintTheme);
  }
  paintTheme();

  var soundBtn = document.getElementById("sound-toggle");
  soundBtn.onclick = function () {
    var next = !CL.sfx.isOn();
    CL.sfx.on(next);
    soundBtn.innerHTML = next ? "\u266A On" : "\u266A Off";
    soundBtn.setAttribute("aria-pressed", next ? "true" : "false");
    soundBtn.classList.toggle("off", !next);
  };

  // The emblem is the index in miniature: click it once and it numbers itself,
  // click a square and you are on that board.
  var hero = document.getElementById("hero"), numbered = false;
  hero.onclick = function () {
    if (numbered) return;
    numbered = true;
    hero.classList.add("numbered");
    document.getElementById("hero-note").textContent = "Pick a square.";
  };
  Array.prototype.forEach.call(hero.querySelectorAll(".cell"), function (g) {
    var i = +g.getAttribute("data-n") - 1;
    if (!CL.puzzles[i]) g.classList.add("empty");
    g.onclick = function (ev) {
      if (!numbered) return;
      ev.stopPropagation();
      if (CL.puzzles[i]) go("play", i);
    };
  });

  var siteList = document.getElementById("sitelist"), siteArrow = document.getElementById("loc-arrow");
  SITES.forEach(function (host) {
    var li = document.createElement("li"), a = document.createElement("a");
    a.href = "https://" + host;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = "http://" + host + "/";
    li.appendChild(a);
    siteList.appendChild(li);
  });
  function sites(on) {
    siteList.hidden = !on;
    siteArrow.setAttribute("aria-expanded", on ? "true" : "false");
  }
  siteArrow.onclick = function (ev) { ev.stopPropagation(); sites(siteList.hidden); };
  document.addEventListener("click", function () { sites(false); });
  // Escape unwinds, innermost thing first: the site list if it is open, then the
  // square you are standing on, then the page you are on. Only the last of those
  // is new — the other two were already bound, and putting "go back" underneath
  // them rather than over them is the whole of the design. Escape should never
  // take the page out from under someone who only meant to shut a menu.
  document.addEventListener("keydown", function (ev) {
    if (ev.key !== "Escape") return;
    if (ev.defaultPrevented) return;            // something nearer already took it
    if (!siteList.hidden) { sites(false); return; }
    // The square, whether or not the hidden input happens to hold focus. When it
    // does, its own handler has already run and preventDefault kept us out.
    if (here && here.name === "play" && st && st.selected) {
      st.selected = null; st.draft = []; draw(); return;
    }
    navBack();
  });

  document.getElementById("x-script").onclick = function () { show("win-script", false); };
  document.getElementById("x-lex").onclick = function () { show("win-lex", false); };
  document.getElementById("x-main").onclick = function () { location.href = "https://simonallmer.com"; };

  // ---- the hint ladder: a verb first, letters second, the word last ----

  function nextHint(r, c) {
    var k = CL.K(r, c), ans = CL.answer(st, r, c);
    var hidden = CL.edgesAt(st, r, c).filter(function (e) { return !st.verbVisible[e.id]; });
    if (hidden.length) {
      return { label: "Surface a link", note: "A route in, at no cost to the square.",
        run: function () { st.surfaced[pickOne(hidden).id] = true; } };
    }
    var rev = st.revealed[k] || (st.revealed[k] = {});
    var missing = [];
    for (var i = 0; i < ans.length; i++) if (!rev[i]) missing.push(i);
    if (missing.length > 1) {
      return { label: "Reveal a letter", note: "This square will read as partly solved.",
        run: function () { rev[pickOne(missing)] = true; st.mark[k] = "partial"; st.draft = reseat(r, c); } };
    }
    return { label: "Reveal the word", note: "This square will read as given, not solved.",
      run: function () { st.filled[k] = ans; st.mark[k] = "given"; st.status[k] = "given"; st.selected = null; st.draft = []; } };
  }

  function pickOne(a) { return a[Math.floor(Math.random() * a.length)]; }

  // ---- entering a word ------------------------------------------------

  function submit() {
    if (!st.selected) return;
    var r = st.selected[0], c = st.selected[1], k = CL.K(r, c),
        ans = CL.answer(st, r, c);

    if (!draftFull()) { say("That square takes " + ans.length + " letters."); return; }
    var w = st.draft.join("").toUpperCase();
    // Compared as one word, so CENTER cannot be set down beside CENTRE.
    //
    // A word only counts as spent if it is RIGHT where it stands. A wrong word
    // is an error occupying a square, not a word used up, and refusing to let
    // you write it where it does belong was the board holding your own mistake
    // against you — the one place in the game where being wrong once cost you
    // something later.
    //
    // With the check off the rule stays structural, and deliberately: there,
    // the board makes no claim about right and wrong, so any placement blocks.
    // Dedupe against correct placements only and a refusal would announce that
    // the word already down is correct, which is a verdict, and A8b says the
    // speakers and the page are both silent on verdicts while the check is off.
    var dup = Object.keys(st.filled).filter(function (kk) {
      if (!CL.same(st.filled[kk], w)) return false;
      if (!st.check) return true;
      var rc = kk.split(",");
      return CL.same(st.filled[kk], CL.answer(st, +rc[0], +rc[1]));
    });
    if (dup.length) { say("Each word is used once, and " + w + " is already on the board."); return; }

    st.filled[k] = w;
    st.status[k] = st.mark[k] || "clean";
    st.selected = null; st.draft = [];
    say("");
    // The noise first, then the board. A full redraw of a 5x5 is eighty-one
    // elements and some six milliseconds, and it used to sit between the key
    // going down and the sound coming out for no reason at all: the sound is
    // the answer to what you just did, the redraw is only its consequence.
    if (CL.sfx) {
      if (st.check) CL.sfx[CL.same(w, ans) ? "good" : "bad"]();
      else CL.sfx.place();
    }
    draw();
    checkWin();
  }

  // S gives the whole board up. Everything it fills is marked given, and the
  // report at the close says so — there is no way to take the board this way
  // and have it read as solved.
  function giveUp() {
    if (!st || !here || here.name !== "play") return;
    for (var r = 0; r < P.size; r++) {
      for (var c = 0; c < P.size; c++) {
        var k = CL.K(r, c);
        st.filled[k] = CL.answer(st, r, c);
        st.status[k] = "given";
        st.mark[k] = "given";
      }
    }
    st.selected = null;
    st.draft = [];
    say("The whole board, given.", true);
    if (CL.sfx) CL.sfx.giveup();
    draw();
    finish(true);
  }

  function checkWin() {
    for (var r = 0; r < P.size; r++) for (var c = 0; c < P.size; c++) {
      if (!CL.same(st.filled[CL.K(r, c)], CL.answer(st, r, c))) return;
    }
    finish();
  }

  function finish(gaveUp) {
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
      // Every word on the closing page opens its entry, the same as everywhere
      // else a word is set in type. A word that looks like a link is one.
      Array.prototype.forEach.call(li.children, function (n) {
        n.title = "Look up " + n.textContent;
        n.onclick = function () { lexOpen(n.textContent); refresh(); };
      });
      ul.appendChild(li);
    });
    if (CL.sfx && !gaveUp) CL.sfx.close();
    document.getElementById("panel-empty").textContent = "";
    document.getElementById("panel").hidden = true;
    document.getElementById("finish").hidden = false;
    document.getElementById("finish").scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function say(msg, ok) {
    var el = document.getElementById("message");
    el.textContent = msg || "";
    el.className = "message" + (ok ? " ok" : "");
  }

  // ---- input ----------------------------------------------------------

  function back() {
    if (!st.selected) return;
    var r = st.selected[0], c = st.selected[1], k = CL.K(r, c);
    if (st.filled[k] !== undefined) { lift(r, c); return; }
    var rev = st.revealed[k] || {};
    for (var i = st.draft.length - 1; i >= 0; i--) {
      if (st.draft[i] && !rev[i]) { st.draft[i] = null; break; }
    }
    draw();
  }

  ghost.addEventListener("input", function (ev) {
    if (ev.inputType === "deleteContentBackward" || ev.inputType === "deleteContentForward") {
      ghost.value = "";
      back();
      return;
    }
    var letters = ghost.value.toUpperCase().replace(/[^A-Z]/g, "");
    ghost.value = "";
    if (!st.selected || !letters) return;
    typeIn(letters);
  });

  ghost.addEventListener("keydown", function (ev) {
    // Shift+S gives the board up, and it is Shift+S everywhere — with a square
    // selected or without one. A bare S used to do it while nothing was
    // selected, which meant one stray keystroke before you had clicked anywhere
    // threw the whole board away. Giving up is the one move that cannot be
    // taken back, so it is the one move that asks for two keys.
    if ((ev.key === "s" || ev.key === "S") && ev.shiftKey) {
      ev.preventDefault(); giveUp(); return;
    }
    if (!st || !st.selected) return;
    if (ev.key === "Backspace") { ev.preventDefault(); back(); }
    else if (ev.key === "Enter") { ev.preventDefault(); submit(); }
    else if (ev.key === "Escape") { ev.preventDefault(); st.selected = null; st.draft = []; draw(); }
  });

  document.addEventListener("keydown", function (ev) {
    if (document.activeElement === ghost) return;
    // Shift+S does two things, and which one depends on where you are standing.
    // On a board it gives the board up; on the front page it opens the note,
    // which is the only way in to that page for now. The two never overlap —
    // `giveUp` has always refused to run anywhere but `play` — so this is a
    // second use of a free key rather than a key doing double duty.
    if ((ev.key === "s" || ev.key === "S") && ev.shiftKey) {
      ev.preventDefault();
      if (here && here.name === "menu") go("intro"); else giveUp();
      return;
    }
    // `st` does not exist until a board has been loaded, so this has to test for
    // the state before it tests the state. It threw on every keystroke made on
    // the front page — harmless while nobody typed there, and not harmless now
    // that the front page is somewhere you press a key on purpose (A14).
    if (!st || !st.selected) return;
    if (/^[a-zA-Z]$/.test(ev.key)) {
      ghost.focus();
      typeIn(ev.key.toUpperCase());
    }
  });

  document.getElementById("check").addEventListener("change", function (ev) {
    st.check = ev.target.checked; draw();
  });
  document.getElementById("restart").addEventListener("click", reset);

  // The rulebook ends with the same drawing the note opens with. Cloned rather
  // than repeated in the markup, so tools/make-figure.py stays the one source
  // and a regenerated figure cannot land on one page and not the other.
  (function () {
    var src = document.querySelector("#view-intro .fig"),
        dst = document.querySelector("#rules-fig .fig-scroll");
    if (src && dst) dst.appendChild(src.cloneNode(true));
  })();

  go("menu");
})();
