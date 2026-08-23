// The noises. Everything is synthesised on the spot — square waves with hard
// envelopes, which is what a sound card of the period could do without a sample
// to load. No files, no fetches, nothing to go missing.
(function () {
  var CL = window.CROSSLINK = window.CROSSLINK || {};
  var ctx = null, on = true;

  // The context is built on the first click, because a browser will not let a
  // page make a noise before it has been touched.
  function audio() {
    if (!on) return null;
    if (!ctx) {
      var A = window.AudioContext || window.webkitAudioContext;
      if (!A) return null;
      ctx = new A();
    }
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  }

  // One note: square wave, flat top, hard stop. `at` is seconds from now.
  // The envelope times are clamped, because the shortest sound here is 18ms and
  // a fresh context starts at currentTime 0 — where "20ms before the end" is a
  // negative number, and AudioParam will not have it.
  function note(freq, at, dur, level, shape) {
    var a = audio();
    if (!a) return;
    var t = a.currentTime + at;
    var rise = Math.min(0.004, dur / 4);
    var hold = Math.max(t + rise, t + dur - 0.02);
    var osc = a.createOscillator(), gain = a.createGain();
    osc.type = shape || "square";
    osc.frequency.setValueAtTime(freq, t);
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(level, t + rise);
    gain.gain.setValueAtTime(level, hold);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(gain); gain.connect(a.destination);
    osc.start(t); osc.stop(t + dur + 0.01);
    return osc;
  }

  function slide(from, to, dur, level, shape) {
    var a = audio();
    if (!a) return;
    var t = a.currentTime;
    var osc = a.createOscillator(), gain = a.createGain();
    osc.type = shape || "square";
    osc.frequency.setValueAtTime(from, t);
    osc.frequency.exponentialRampToValueAtTime(to, t + dur);
    gain.gain.setValueAtTime(level, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(gain); gain.connect(a.destination);
    osc.start(t); osc.stop(t + dur + 0.01);
  }

  CL.sfx = {
    click:  function () { note(1320, 0, 0.035, 0.05); },        // a button going down
    tick:   function () { note(760,  0, 0.028, 0.035); },       // a square picked up
    key:    function () { note(1040, 0, 0.018, 0.022); },       // a letter set down
    // With error check off the board says nothing about whether a word is right,
    // and neither may the speakers. This is a question, not a verdict: two notes
    // a whole tone apart, the second quieter — the shape of "is that right?", not
    // the rising fifth of "well done", which is what it used to be and which read
    // as a small win every time a word went down.
    place:  function () { note(392, 0, 0.05, 0.04); note(440, 0.055, 0.06, 0.028); },
    good:   function () { note(659, 0, 0.06, 0.055); note(880, 0.06, 0.06, 0.055); note(1319, 0.12, 0.10, 0.05); },
    bad:    function () { note(180, 0, 0.10, 0.06, "sawtooth"); note(120, 0.11, 0.16, 0.06, "sawtooth"); },
    open:   function () { slide(300, 900, 0.10, 0.04); },        // a window opening
    shut:   function () { slide(900, 300, 0.10, 0.04); },        // and closing
    close:  function () {                                        // the board closes
      [523, 659, 784, 1047].forEach(function (f, i) { note(f, i * 0.09, 0.10, 0.05); });
      note(1568, 0.36, 0.22, 0.045);
    },
    giveup: function () { slide(440, 110, 0.42, 0.05, "triangle"); },
    on: function (v) {
      on = v;
      if (v) { ctx = null; CL.sfx.click(); }
    },
    isOn: function () { return on; }
  };

  // One listener for the whole page: anything that behaves like a control makes
  // the control noise, so no handler anywhere else has to remember to.
  document.addEventListener("click", function (ev) {
    if (!on) return;
    var t = ev.target;
    if (t.closest && t.closest("#sound-toggle")) return;         // it speaks for itself
    if (t.closest && t.closest("button, a, .tile, .cell, .hero")) CL.sfx.click();
    else if (t.closest && t.closest(".noun")) CL.sfx.tick();
  }, true);
})();
