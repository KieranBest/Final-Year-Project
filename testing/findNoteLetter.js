const noteLetter = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"]

function findLetter(note) {
  var noteNumber = note % 12
  return noteLetter[noteNumber]
}
module.exports = findLetter;
