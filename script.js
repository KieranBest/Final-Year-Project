// When the Midi device is first connected it will 
// display device features if successful
if(navigator.requestMIDIAccess){
    navigator.requestMIDIAccess().then(success, failure)
}
function success(midiAccess){
    midiAccess.addEventListener('statechange',updateDevices)

    const inputs = midiAccess.inputs;

    inputs.forEach((input) => {
        input.addEventListener('midimessage', handleInput)
    })
}
function failure(){
    console.log('Could not connect MIDI')
}
function updateDevices(event){
    console.log(`Name: ${event.port.name}, Brand: ${event.port.manufacturer}, State:${event.port.state}, Type:${event.port.type}`)
}

// Input data to define what to do when key pressed
function handleInput(input){
    const command = input.data[0]
    const note = input.data[1]
    const velocity = input.data[2]

    switch(command){
        case 144: //noteOn
            if(velocity>0){
                noteOn(note,velocity)
            }else{
                noteOff(note)
            }
        break
        case 128: //noteOff
            noteOff(note)
            break
    }
}

// Publicly available 
sharpNote=[-1]
noteArray=[]
staffPosArray=[]
const majorKeyPos = ["C","D","E","F","G","A","B"]
const sharpKeyPos = ["C#","D#","E#","F#","G#","A#","B#"] // There are wrong keys due to the indexing needed
const staffShtPos = ["B","A","G","F","E","D","C"] // These are the order needed for the staff
let octaveWeight
let removedOctaveWeight

// Input data taken to define which key pressed forkeyboard representation
const noteLetter = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"]
function findNoteLetter(note){
    var noteNumber = note % 12
    return noteLetter[noteNumber]
}

// When pressing a note
function noteOn(note){
    const octave = parseInt(note/12) - 4 // -4 because my keyboard automatically starts at pos 48
    const notePressed=findNoteLetter(note);

    if(majorKeyPos.includes(notePressed)){
        noteNumber = majorKeyPos.indexOf(notePressed)
        staffNumber = staffShtPos.indexOf(notePressed)
        staffPosArray.push(staffNumber)   
        noteArray.push(note)   
    }else if(sharpKeyPos.includes(notePressed)){
        noteNumber = sharpKeyPos.indexOf(notePressed)
        sharpNote.push((7*octave)+noteNumber)
    }
    noteOnColour(staffNumber,octave,noteNumber,notePressed,sharpNote)
}

// When releasing a note
function noteOff(note){   
    const octave = parseInt(note/12) - 4; // -4 because my keyboard automatically starts at pos 48
    const noteReleased=findNoteLetter(note);
    if(majorKeyPos.includes(noteReleased)){
        var noteNumber = majorKeyPos.indexOf(noteReleased)
        var removedStaffNumber = staffShtPos.indexOf(noteReleased) 
        var removedStaffPosArray=removedStaffNumber
        staffPosArray=staffPosArray.filter(function(without){
            return without !== (removedStaffNumber)
        })
        var removedNoteArray=note
        noteArray=noteArray.filter(function(without){
            return without !== (note)
        })
    }else if(sharpKeyPos.includes(noteReleased)){
        var noteNumber = sharpKeyPos.indexOf(noteReleased)
        sharpNote=sharpNote.filter(function(without){
            return without !== ((7*octave)+noteNumber)})
    }
    noteOffColour(removedNoteArray,removedStaffPosArray,noteArray,octave,noteNumber,noteReleased,sharpNote)
}


// Window starting gets the keyboard statistics needed before creating keyboard
window.onload = function(){
    canvasStats()
    drawStaff()
    drawKeyboard()
}

// Window resizing gets the screen and new keyboard statistics needed before creating keyboard
window.onresize = function(){
    canvasStats()
    drawStaff()
    drawKeyboard()
}
// https://www.youtube.com/watch?v=uq66IuqYdWg

// Canvas creation
var canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

// Midi keyboard key information
var numWhiteKeys = 19 //ready for input from midi device, once this is done, possibly move into a function

function canvasStats(){
    cw = canvas.width = window.innerWidth*0.99
    ch = canvas.height = (window.innerHeight/4)*3
    whiteKeyWidth = ((cw-10)/numWhiteKeys)
    whiteKeyHeight = (ch/7)*4
    blackKeyWidth = whiteKeyWidth*0.5
    blackKeyHeight = whiteKeyHeight*0.6
    xCoordinate = cw/numWhiteKeys
    yCordinate = (ch/7)*3-10
    staffHeight = (ch/7)*3
    staffSpacing = (ch/7)/6
    hitNoteLine = cw*0.95
    downLineDistance = staffSpacing*13
}

// Draws the sheet music lines
function drawStaff(){
    for(let i = 2; i < 7; i++){
        ctx.beginPath();
        ctx.moveTo(0, i*staffSpacing)
        ctx.lineTo(cw, i*staffSpacing)
        ctx.stroke()
    }
    for(let i = 8; i < 13; i++){
        ctx.beginPath()
        ctx.moveTo(0, i*staffSpacing)
        ctx.lineTo(cw, i*staffSpacing)
        ctx.stroke()
    }
    ctx.beginPath()
    ctx.moveTo(hitNoteLine, staffSpacing)
    ctx.lineTo(hitNoteLine, downLineDistance)
    ctx.stroke()
}

function drawKeyboard(sharpNote){
    for(let i = 0; i < numWhiteKeys; i++){
        ctx.beginPath()
        ctx.lineWidth = "1"
        ctx.strokeStyle = "black"
        ctx.rect(i*xCoordinate, yCordinate, whiteKeyWidth, whiteKeyHeight)
        ctx.stroke()
    }
    var position = []
    // Compares i to sharpNote and if matches puts it in a new variable called position
    for(let i = 0; i < numWhiteKeys - 1; i++){                
        for(sharpNotePosition in sharpNote){
            if(sharpNote[sharpNotePosition] == i){
                position.push(i)
                index = sharpNotePosition
            }
        }
        var j = i % 7 // Do not draw a key on the b# and e# as they do not exist, positions 2 and 6
        if(j !== 2 && j !== 6 && !position.includes(i)){
            ctx.beginPath()
            ctx.fillStyle="black"
            ctx.lineWidth = "1"
            ctx.rect((i+0.75)*xCoordinate, yCordinate, blackKeyWidth, blackKeyHeight)
            ctx.fill()
        }
        else if (position.includes(i)){ // Redraw held sharp key blue to show it is still held
                ctx.beginPath()
                ctx.fillStyle="blue"
                ctx.lineWidth = "1"
                ctx.rect((i+0.75)*xCoordinate, yCordinate, blackKeyWidth, blackKeyHeight)
                ctx.fill()
        }
    }
}

// Change the colour of a key when pressed
function noteOnColour(staffNumber,octave,noteNumber,notePressed,sharpNote){
    if(majorKeyPos.includes(notePressed)){
        ctx.beginPath()
        ctx.fillStyle="red"
        ctx.rect(((7*octave)+noteNumber)*xCoordinate, yCordinate, whiteKeyWidth, whiteKeyHeight)
        ctx.fill()
        drawKeyboard(sharpNote)
        staffHitCorrectly(staffNumber,notePressed,octave)
    }else if(sharpKeyPos.includes(notePressed)){
        let x = ((7*octave)+noteNumber)
        ctx.beginPath()
        ctx.fillStyle="blue"
        ctx.rect((x+0.75)*xCoordinate, yCordinate, blackKeyWidth, blackKeyHeight)
        ctx.fill()
    }
}

// Change the colour of a key when released
function noteOffColour(removedNoteArray,removedStaffPosArray,noteArray,octave,noteNumber,noteReleased,sharpNote){
    if(majorKeyPos.includes(noteReleased)){
        ctx.beginPath()
        ctx.fillStyle="white"
        ctx.rect(((7 * octave) + noteNumber) * xCoordinate, yCordinate, whiteKeyWidth, whiteKeyHeight)
        ctx.fill()
        drawKeyboard(sharpNote)
        removeStaffHitCorrectly(removedNoteArray,removedStaffPosArray,noteArray)
    }else if(sharpKeyPos.includes(noteReleased)){
        let x = ((7*octave)+noteNumber)
        ctx.beginPath()
        ctx.fillStyle="black"
        ctx.rect((x+0.75) * xCoordinate, yCordinate, blackKeyWidth, blackKeyHeight)
        ctx.fill()

    }
}

// Draw on the staff when a note is pushed
function staffHitCorrectly(staffNumber,notePressed,octave){
    if(majorKeyPos.includes(notePressed)){
        if(octave === 1){
            octaveWeight = (staffNumber*0.5+4)
        }else if(octave === 0){
            octaveWeight = (staffNumber*0.5+4)+3.5
        }else if(octave === 2){
            octaveWeight = (staffNumber*0.5+4)-3.5
        }   
        ctx.beginPath()
        ctx.fillStyle="red"
        ctx.arc(hitNoteLine, octaveWeight*staffSpacing , staffSpacing*0.4, 0, 2 * Math.PI)
        ctx.fill()
    }  
}

// When notes are removed, removes them from the staff
// Notes that are held whilst a removal are kept visible on the staff
function removeStaffHitCorrectly(removedNoteArray,removedStaffPosArray,noteArray){
        removedStaffOctave = Math.floor((removedNoteArray/12)-4)
        if(removedStaffOctave === 1){
            removedOctaveWeight = (removedStaffPosArray*0.5+4)
        }else if (removedStaffOctave === 0){
                removedOctaveWeight = (removedStaffPosArray*0.5+4)+3.5
        }else if (removedStaffOctave === 2){
                removedOctaveWeight = (removedStaffPosArray*0.5+4)-3.5
        }
    ctx.beginPath()
    ctx.fillStyle="white"
    ctx.arc(hitNoteLine, removedOctaveWeight*staffSpacing , staffSpacing*0.6, 0, 2 * Math.PI)
    ctx.fill()
    drawStaff()
    if(noteArray !== null){ // If a note is still held
        for(values in noteArray){
            staffOctave =  parseInt(noteArray[values]/12) - 4
            if(staffOctave === 1){
                octaveWeight = ((staffPosArray[values])*0.5+4)
            }else if(staffOctave === 0){
                octaveWeight = ((staffPosArray[values])*0.5+4)+3.5
            }else if(staffOctave === 2){
                octaveWeight = ((staffPosArray[values])*0.5+4)-3.5
            }else octaveWeight = 0

            ctx.beginPath()
            ctx.fillStyle="red"
            ctx.arc(hitNoteLine, octaveWeight*staffSpacing , staffSpacing*0.4, 0, 2 * Math.PI)
            ctx.fill()
        } 
    } 
}