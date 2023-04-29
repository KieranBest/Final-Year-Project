"use strict";

function testConnection() {
  if (navigator.requestMIDIAccess) {
    navigator.requestMIDIAccess({
      sysex: false
    }).then(success, failure); //sysex asks the browser for permission to use the midi device
  }
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
console.assert(testConnection);