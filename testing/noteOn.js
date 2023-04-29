const findLetter = require('./findNoteLetter');

const majorKeyPos = ["C","D","E","F","G","A","B"]
const sharpKeyPos = ["C#","D#","E#","F#","G#","A#","B#"] // There are wrong keys due to the indexing needed

module.exports = {};
module.exports.keyboardOn = function keyboardOn(note){
    const notePressed = findLetter(note);
    const octave = parseInt(note/12) - 4 // -4 because my keyboard automatically starts at pos 48, this will need to be changed when keyboard information is entered with numWhiteKeys
    if(majorKeyPos.includes(notePressed)){
        noteNumber = majorKeyPos.indexOf(notePressed)
        return ((7*octave)+noteNumber)
    }else if(sharpKeyPos.includes(notePressed)){
        noteNumber = sharpKeyPos.indexOf(notePressed)
        return ((7*octave)+noteNumber)+0.75
    }
}

const staffShtMajorPos = ["B","A","G","F","E","D","C"] // These are the order needed for the staff
const staffShtSharpPos = ["B#","A#","G#","F#","E#","D#","C#"] // These are the order needed for the staff

module.exports.staffOn = function staffOn(note){
    const notePressed = findLetter(note);
    const octave = parseInt(note/12) - 4 // -4 because my keyboard automatically starts at pos 48, this will need to be changed when keyboard information is entered with numWhiteKeys
    if(majorKeyPos.includes(notePressed)){
        staffNumber = staffShtMajorPos.indexOf(notePressed)
    }else if(sharpKeyPos.includes(notePressed)){
        staffNumber = staffShtSharpPos.indexOf(notePressed)
    }

    if(majorKeyPos.includes(notePressed)){
        if(octave === 1){
            octaveWeight = (staffNumber*0.5+4)
        }else if(octave === 0){
            octaveWeight = (staffNumber*0.5+4)+3.5
        }else if(octave === 2){
            octaveWeight = (staffNumber*0.5+4)-3.5
        }
    }
    else if(sharpKeyPos.includes(notePressed)){
        if(octave === 1){
            octaveWeight = (staffNumber*0.5+4)
        }else if(octave === 0){
            octaveWeight = (staffNumber*0.5+4)+3.5
        }else if(octave === 2){
            octaveWeight = (staffNumber*0.5+4)-3.5
        }
    }
    return octaveWeight
}

notesHeldList=[62,67,71]
module.exports.notesHeld = function notesHeld(note){
    notesHeldList.push(note)
    return notesHeldList
}
