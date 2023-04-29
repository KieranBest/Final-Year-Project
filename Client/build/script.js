"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
// When the Midi device is first connected it will ask for permission to use MIDI device
// and then display device features if successful
if (navigator.requestMIDIAccess) {
  navigator.requestMIDIAccess({
    sysex: true
  }).then(success, failure); //sysex asks the browser for permission to use the midi device
}

function success(midiAccess) {
  midiAccess.addEventListener('statechange', updateDevices);
  var inputs = midiAccess.inputs;
  inputs.forEach(function (input) {
    input.addEventListener('midimessage', handleInput);
  });
}
function failure() {
  console.log('Could not connect MIDI');
}
function updateDevices(event) {
  console.log("Name: ".concat(event.port.name, ", Brand: ").concat(event.port.manufacturer, ", State:").concat(event.port.state, ", Type:").concat(event.port.type));
}

// Input data to define what to do when key pressed, 144 is pressed, 128 is released
function handleInput(input) {
  var command = input.data[0];
  var note = input.data[1];
  var velocity = input.data[2];
  switch (command) {
    case 144:
      //noteOn
      if (velocity > 0) {
        noteOn(note, velocity);
      } else {
        noteOff(note);
      }
      break;
    case 128:
      //noteOff
      noteOff(note);
      break;
  }
}

// Music and Coding (2022) [JavaScript MIDI Synth Tutorial - Part 2 | Playing notes using an oscillator](https://www.youtube.com/watch?v=dV6V2Ptx_CY)
// Compatibility issues, make sure its compatible across browsers
window.AudioContext = window.AudioContext || window.webkitAudioContext;
var soundCTX;
var oscillators = {};
var startButton = document.getElementById('startButton');
startButton.addEventListener('click', function () {
  soundCTX = new AudioContext();
  startButton.style.visibility = 'hidden';
  pauseButton.style.visibility = 'visible';
  toggleGame();
});
var pauseButton = document.getElementById('pauseButton');
pauseButton.style.visibility = 'hidden';
pauseButton.addEventListener('click', function () {
  pauseButton.style.visibility = 'hidden';
  startButton.style.visibility = 'visible';
  toggleGame();
});
var dataValue = 0;
var submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', function () {
  //localStorage.clear();
  if (Object.keys(localStorage).length !== 0) {
    dataValue = Object.keys(localStorage).length;
  } else {
    dataValue = 0;
  }
  localStorage.setItem(dataValue, JSON.stringify(gameProgression));
});
function midiToFreq(number) {
  var a = 440; //Hz
  return a / 32 * Math.pow(2, (number - 9) / 12);
}
sharpNote = [-1];
notesHeldList = [];
staffPosArray = [];
majorTimeStamp = [-1];
var majorKeyPos = ["C", "D", "E", "F", "G", "A", "B"];
var sharpKeyPos = ["C#", "D#", "E#", "F#", "G#", "A#", "B#"]; // There are wrong keys due to the indexing needed
var staffShtMajorPos = ["B", "A", "G", "F", "E", "D", "C"]; // These are the order needed for the staff
var staffShtSharpPos = ["B#", "A#", "G#", "F#", "E#", "D#", "C#"]; // These are the order needed for the staff
var octaveWeight; // Weight needed for the staff
var removedOctaveWeight; // Weight needed for the released key for the staff
var overwriteStaffValue; // Value needed to multiply by for the staff display when holding for example C and C#
var overwriteStaffLetter; // Note letter needed for the staff display when releasing a key whilst still holding a key
var pressed = Boolean(false);
var score = 0;
var keyPressed = Boolean(false);
var majorPressed = Boolean(false);

// Input data taken to define which key pressed forkeyboard representation
var noteLetter = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
function findNoteLetter(note) {
  var noteNumber = note % 12;
  return noteLetter[noteNumber];
}

// When pressing a note
function noteOn(note, velocity) {
  var octave = parseInt(note / 12) - 4; // -4 because my keyboard automatically starts at pos 48, this will need to be changed when keyboard information is entered with numWhiteKeys
  var notePressed = findNoteLetter(note);
  if (majorKeyPos.includes(notePressed)) {
    noteNumber = majorKeyPos.indexOf(notePressed);
    staffNumber = staffShtMajorPos.indexOf(notePressed);
    staffPosArray.push(staffNumber);
    notesHeldList.push(note);
    majorPressed = true;
  } else if (sharpKeyPos.includes(notePressed)) {
    noteNumber = sharpKeyPos.indexOf(notePressed);
    sharpNote.push(7 * octave + noteNumber);
    staffNumber = staffShtSharpPos.indexOf(notePressed);
    staffPosArray.push(staffNumber);
    notesHeldList.push(note);
  }
  noteOnColour(staffNumber, octave, noteNumber, notePressed, sharpNote);
  var osc = soundCTX.createOscillator();
  var oscGain = soundCTX.createGain();
  oscGain.gain.value = 0.33;
  var velocityGainAmount = 1 / 127 * velocity;
  var velocityGain = soundCTX.createGain();
  velocityGain.gain.value = velocityGainAmount;
  osc.type = 'sine'; //sine, square, triangle, sawtooth
  osc.frequency.value = midiToFreq(note);
  osc.connect(oscGain);
  oscGain.connect(velocityGain);
  velocityGain.connect(soundCTX.destination); // Connect the oscillator to speaker output
  osc.gain = oscGain;
  oscillators[note.toString()] = osc;
  osc.start();
  pressed = true;
}

// When releasing a note
function noteOff(note) {
  var noteNumber = null;
  var releasedStaffNumber = null;
  var releasedStaffPosArray = null;
  var releasedNoteArray = null;
  var time = new Date();
  noteOffTime.h = time.getHours();
  noteOffTime.m = time.getMinutes();
  noteOffTime.s = time.getSeconds();
  noteOffTime.ms = time.getMilliseconds();
  noteOffTime.time = time.getTime();
  var octave = parseInt(note / 12) - 4; // -4 because my keyboard automatically starts at pos 48, this will need to be changed when numWhiteKeys is edited
  var noteLetterReleased = findNoteLetter(note);
  if (majorKeyPos.includes(noteLetterReleased)) {
    noteNumber = majorKeyPos.indexOf(noteLetterReleased);
    releasedStaffNumber = staffShtMajorPos.indexOf(noteLetterReleased);
    releasedStaffPosArray = releasedStaffNumber;
    staffPosArray = staffPosArray.filter(function (without) {
      return without !== releasedStaffNumber;
    });
    releasedNoteArray = note;
    notesHeldList = notesHeldList.filter(function (without) {
      return without !== note;
    });
    majorPressed = false;
  } else if (sharpKeyPos.includes(noteLetterReleased)) {
    noteNumber = sharpKeyPos.indexOf(noteLetterReleased);
    sharpNote = sharpNote.filter(function (without) {
      return without !== 7 * octave + noteNumber;
    });
    releasedStaffNumber = staffShtSharpPos.indexOf(noteLetterReleased);
    releasedStaffPosArray = releasedStaffNumber;
    staffPosArray = staffPosArray.filter(function (without) {
      return without !== releasedStaffNumber;
    });
    releasedNoteArray = note;
    notesHeldList = notesHeldList.filter(function (without) {
      return without !== note;
    });
  }
  noteOffColour(releasedNoteArray, releasedStaffPosArray, notesHeldList, octave, noteNumber, noteLetterReleased, sharpNote);
  var osc = oscillators[note.toString()];
  var oscGain = osc.gain;
  // This stops the clicking sound when releasing the note due to the sine wave
  oscGain.gain.setValueAtTime(oscGain.gain.value, soundCTX.currentTime);
  oscGain.gain.exponentialRampToValueAtTime(0.0001, soundCTX.currentTime + 0.03);
  setTimeout(function () {
    osc.stop();
    osc.disconnect();
  }, 20);
  delete oscillators[note.toString()];
  pressed = false;
  keyPressed = false;
}

// Window starting gets the window statistics needed before creating keyboard
window.onload = function () {
  canvasStats();
  drawStaff();
  drawKeyboard();
};

// Window resizing gets the updated window size and new keyboard statistics needed before creating keyboard
window.onresize = function () {
  canvasStats();
  drawStaff();
  drawKeyboard();
};
// Reid, D (2022) [How to dynamically resize the canvas with JavaScript in under five minutes](https://www.youtube.com/watch?v=uq66IuqYdWg)

// Canvas creation
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

// Displayed keyboard sizing is dependent on the screen size and how many keys are needed
var numWhiteKeys = 19; //ready for input from midi device, once this is done, possibly move into a function
function canvasStats() {
  cw = canvas.width = window.innerWidth * 0.99;
  ch = canvas.height = window.innerHeight / 4 * 3;
  whiteKeyWidth = (cw - 10) / numWhiteKeys;
  whiteKeyHeight = ch / 7 * 4;
  blackKeyWidth = whiteKeyWidth * 0.5;
  blackKeyHeight = whiteKeyHeight * 0.6;
  xCoordinate = cw / numWhiteKeys;
  yCordinate = ch / 7 * 3 - 10;
  staffHeight = ch / 7 * 2.5;
  staffSpacing = ch / 7 / 6;
  leftBoundary = cw * 0.05;
  hitMarker = cw * 0.15;
  lowerBoundary = hitMarker - window.innerWidth * DynamicDifficulty[difficultyLevel].hitScreenPercentage / 2;
  upperBoundary = hitMarker + window.innerWidth * DynamicDifficulty[difficultyLevel].hitScreenPercentage / 2;
  lowerBoundaryMultiplier = hitMarker - window.innerWidth * 0.05 / 8;
  upperBoundaryMultiplier = hitMarker + window.innerWidth * 0.05 / 8;
  downLineDistance = staffSpacing * 13;
  img = new Image(whiteKeyWidth / 2, staffSpacing * 5);
}

// Draws the staff sheet
function drawStaff() {
  for (var i = 2; i < 7; i++) {
    ctx.beginPath();
    ctx.moveTo(0, i * staffSpacing);
    ctx.lineTo(cw, i * staffSpacing);
    ctx.stroke();
  }
  for (var _i = 8; _i < 13; _i++) {
    ctx.beginPath();
    ctx.moveTo(0, _i * staffSpacing);
    ctx.lineTo(cw, _i * staffSpacing);
    ctx.stroke();
  }
  // Left Boundary Marker
  ctx.beginPath();
  ctx.moveTo(leftBoundary, staffSpacing);
  ctx.lineTo(leftBoundary, downLineDistance);
  ctx.stroke();
  // Hit Marker
  ctx.beginPath();
  ctx.moveTo(hitMarker, staffSpacing);
  ctx.lineTo(hitMarker, downLineDistance);
  ctx.stroke();
}

// Draws the displayed keyboard, sharpNote is a held sharp keyA
function drawKeyboard(sharpNote) {
  for (var i = 0; i < numWhiteKeys; i++) {
    ctx.beginPath();
    ctx.lineWidth = "1";
    ctx.strokeStyle = "black";
    ctx.rect(i * xCoordinate, yCordinate, whiteKeyWidth, whiteKeyHeight);
    ctx.stroke();
  }
  var position = [];
  // Compares i to sharpNote and if matches puts it in a new variable called position
  for (var _i2 = 0; _i2 < numWhiteKeys - 1; _i2++) {
    for (var sharpNotePosition in sharpNote) {
      if (sharpNote[sharpNotePosition] == _i2) {
        position.push(_i2);
        index = sharpNotePosition;
      }
    }
    var j = _i2 % 7; // Do not draw a key on the b# and e# as they do not exist, positions 2 and 6 as well as position/sharpNote
    if (j !== 2 && j !== 6 && !position.includes(_i2)) {
      ctx.beginPath();
      ctx.fillStyle = "black";
      ctx.lineWidth = "1";
      ctx.rect((_i2 + 0.75) * xCoordinate, yCordinate, blackKeyWidth, blackKeyHeight);
      ctx.fill();
    } else if (position.includes(_i2)) {
      // Redraws held sharp key over the redrawn keyboard
      ctx.beginPath();
      ctx.fillStyle = "blue";
      ctx.lineWidth = "1";
      ctx.rect((_i2 + 0.75) * xCoordinate, yCordinate, blackKeyWidth, blackKeyHeight);
      ctx.fill();
    }
  }
}

// Change the colour of a key when pressed
function noteOnColour(staffNumber, octave, noteNumber, notePressed, sharpNote) {
  if (majorKeyPos.includes(notePressed)) {
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.rect((7 * octave + noteNumber) * xCoordinate, yCordinate, whiteKeyWidth, whiteKeyHeight);
    ctx.fill();
    drawKeyboard(sharpNote);
    staffNoteHit(staffNumber, notePressed, octave);
  } else if (sharpKeyPos.includes(notePressed)) {
    var x = 7 * octave + noteNumber;
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.rect((x + 0.75) * xCoordinate, yCordinate, blackKeyWidth, blackKeyHeight);
    ctx.fill();
    staffNoteHit(staffNumber, notePressed, octave);
  }
}

// Change the colour of a key back to normal when released
function noteOffColour(removedNoteArray, removedStaffPosArray, notesHeldList, octave, noteNumber, noteReleased, sharpNote) {
  if (majorKeyPos.includes(noteReleased)) {
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.rect((7 * octave + noteNumber) * xCoordinate, yCordinate, whiteKeyWidth, whiteKeyHeight);
    ctx.fill();
    drawKeyboard(sharpNote);
    removeStaffNoteHit(removedNoteArray, removedStaffPosArray, notesHeldList);
  } else if (sharpKeyPos.includes(noteReleased)) {
    var x = 7 * octave + noteNumber;
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.rect((x + 0.75) * xCoordinate, yCordinate, blackKeyWidth, blackKeyHeight);
    ctx.fill();
    removeStaffNoteHit(removedNoteArray, removedStaffPosArray, notesHeldList);
  }
}

// Draw on the staff when a note is pushed
function staffNoteHit(staffNumber, notePressed, octave) {
  if (majorKeyPos.includes(notePressed)) {
    if (octave === 1) {
      octaveWeight = staffNumber * 0.5 + 4;
    } else if (octave === 0) {
      octaveWeight = staffNumber * 0.5 + 4 + 3.5;
    } else if (octave === 2) {
      octaveWeight = staffNumber * 0.5 + 4 - 3.5;
    }
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.arc(leftBoundary, octaveWeight * staffSpacing, staffSpacing * 0.4, 0, 2 * Math.PI);
    ctx.fill();
  } else if (sharpKeyPos.includes(notePressed)) {
    if (octave === 1) {
      octaveWeight = staffNumber * 0.5 + 4;
    } else if (octave === 0) {
      octaveWeight = staffNumber * 0.5 + 4 + 3.5;
    } else if (octave === 2) {
      octaveWeight = staffNumber * 0.5 + 4 - 3.5;
    }
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.arc(leftBoundary, octaveWeight * staffSpacing, staffSpacing * 0.4, 0, 2 * Math.PI);
    ctx.fill();
  }
}

// When notes are released, removes them from the staff
// Notes that are held whilst another key is released are kept visible on the staff
function removeStaffNoteHit(removedNoteArray, removedStaffPosArray, notesHeldList) {
  removedStaffOctave = Math.floor(removedNoteArray / 12 - 4);
  if (removedStaffOctave === 1) {
    removedOctaveWeight = removedStaffPosArray * 0.5 + 4;
  } else if (removedStaffOctave === 0) {
    removedOctaveWeight = removedStaffPosArray * 0.5 + 4 + 3.5;
  } else if (removedStaffOctave === 2) {
    removedOctaveWeight = removedStaffPosArray * 0.5 + 4 - 3.5;
  }
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, leftBoundary, staffHeight);
  ctx.fill();
  drawStaff();
  if (notesHeldList !== null) {
    // If a note is still held display it
    for (var values in notesHeldList) {
      if (majorKeyPos.includes(findNoteLetter(notesHeldList[values]))) {
        staffOctave = parseInt(notesHeldList[values] / 12) - 4;
        overwriteStaffLetter = findNoteLetter(notesHeldList[values]);
        overwriteStaffValue = staffShtMajorPos.indexOf(overwriteStaffLetter);
        if (staffOctave === 1) {
          octaveWeight = overwriteStaffValue * 0.5 + 4;
        } else if (staffOctave === 0) {
          octaveWeight = overwriteStaffValue * 0.5 + 4 + 3.5;
        } else if (staffOctave === 2) {
          octaveWeight = overwriteStaffValue * 0.5 + 4 - 3.5;
        } else octaveWeight = 0;
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.arc(leftBoundary, octaveWeight * staffSpacing, staffSpacing * 0.4, 0, 2 * Math.PI);
        ctx.fill();
      } else if (sharpKeyPos.includes(findNoteLetter(notesHeldList[values]))) {
        staffOctave = parseInt(notesHeldList[values] / 12) - 4;
        overwriteStaffLetter = findNoteLetter(notesHeldList[values]);
        overwriteStaffValue = staffShtSharpPos.indexOf(overwriteStaffLetter);
        if (staffOctave === 1) {
          octaveWeight = overwriteStaffValue * 0.5 + 4;
        } else if (staffOctave === 0) {
          octaveWeight = overwriteStaffValue * 0.5 + 4 + 3.5;
        } else if (staffOctave === 2) {
          octaveWeight = overwriteStaffValue * 0.5 + 4 - 3.5;
        } else octaveWeight = 0;
        ctx.beginPath();
        ctx.fillStyle = "blue";
        ctx.arc(leftBoundary, octaveWeight * staffSpacing, staffSpacing * 0.4, 0, 2 * Math.PI);
        ctx.fill();
      }
    }
  }
}

// Note animation
// Start and stop the game
var toggle = false;
var toggleGame = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!toggle) {
            toggle = true;
            movePlayableNotes();
          } else {
            toggle = false;
          }
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function toggleGame() {
    return _ref.apply(this, arguments);
  };
}();

// McCaffrey, J (2021) [Using RequestAnimationFrame and Classes in JavaScript](https://www.youtube.com/watch?v=9Sxo7P3F3m0&t=322s)
var noteImage = new Image(135, 137); //pixel size
var sharpImage = new Image(135, 137); //pixel size
noteImage.src = 'images/noteImage.png';
sharpImage.src = 'images/sharp.png';

// Generates a random value based on whether a treble or bass note is needed
trebleValues = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6];
bassValues = [6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10];
function noteGenerator(valueGenerator, randomGeneratorValue) {
  var randomValue = Math.floor(Math.random() * randomGeneratorValue);
  return valueGenerator[randomValue];
}
var animating_Notes1 = new animatingNotes(window.innerWidth);
var animating_Notes2 = new animatingNotes(window.innerWidth);
var animating_Notes3 = new animatingNotes(window.innerWidth);
var animating_Notes4 = new animatingNotes(window.innerWidth);
var animating_Notes5 = new animatingNotes(window.innerWidth);
var animating_Notes6 = new animatingNotes(window.innerWidth);
var animating_Notes7 = new animatingNotes(window.innerWidth);
var animating_Notes8 = new animatingNotes(window.innerWidth);
var lastloop = performance.now();
var a = 0;
var averageFPS = 0;
var timeDelay = 0;
var repeatQuantity = 0;
function movePlayableNotes(staffNumber, notePressed, octave) {
  if (toggle) {
    if (a < 1000) {
      a++;
    }
    if (a > 20 && a < 1000) {
      var thisloop = performance.now();
      var fps = Math.round(1000 / (thisloop - lastloop));
      averageFPS = averageFPS + fps;
      lastloop = thisloop;
    }
    if (a > 100) {
      if (toggle) {
        timeDelay = (window.innerWidth - (leftBoundary - 0.5 * staffSpacing) / (averageFPS / a) * 1000) / DynamicDifficulty[difficultyLevel].speed;
      } else {
        timeDelay = 0;
      }
      ctx.fillStyle = "white";
      ctx.fillRect(leftBoundary, 0, canvas.width, staffHeight);
      staffNoteHit(staffNumber, notePressed, octave);
      drawStaff();
    }
    // updates x and y values and then displays them whilst removing the old values from visibility

    switch (DynamicDifficulty[difficultyLevel].recurringNotes) {
      case 2:
        animating_Notes1.update();
        animating_Notes1.display();
        setTimeout(function (s) {
          return animating_Notes5.update();
        }, 4 * timeDelay);
        animating_Notes5.display();
        break;
      case 4:
        animating_Notes1.update();
        animating_Notes1.display();
        setTimeout(function (s) {
          return animating_Notes3.update();
        }, 2 * timeDelay);
        animating_Notes3.display();
        setTimeout(function (s) {
          return animating_Notes5.update();
        }, 4 * timeDelay);
        animating_Notes5.display();
        setTimeout(function (s) {
          return animating_Notes7.update();
        }, 6 * timeDelay);
        animating_Notes7.display();
        break;
      case 8:
        animating_Notes1.update();
        animating_Notes1.display();
        setTimeout(function (s) {
          return animating_Notes2.update();
        }, 1 * timeDelay);
        animating_Notes2.display();
        setTimeout(function (s) {
          return animating_Notes3.update();
        }, 2 * timeDelay);
        animating_Notes3.display();
        setTimeout(function (s) {
          return animating_Notes4.update();
        }, 3 * timeDelay);
        animating_Notes4.display();
        setTimeout(function (s) {
          return animating_Notes5.update();
        }, 4 * timeDelay);
        animating_Notes5.display();
        setTimeout(function (s) {
          return animating_Notes6.update();
        }, 5 * timeDelay);
        animating_Notes6.display();
        setTimeout(function (s) {
          return animating_Notes7.update();
        }, 6 * timeDelay);
        animating_Notes7.display();
        setTimeout(function (s) {
          return animating_Notes8.update();
        }, 7 * timeDelay);
        animating_Notes8.display();
        break;
    }
    requestAnimationFrame(movePlayableNotes); // Repeats this function to create an animation
  } else {
    ctx.fillStyle = "white";
    ctx.fillRect(leftBoundary, 0, canvas.width, staffHeight);
    drawStaff();
  }
}