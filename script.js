// When the Midi device is first connected it will 
// display device features if successful
if(navigator.requestMIDIAccess){
    navigator.requestMIDIAccess().then(success, failure);
}
function success(midiAccess){
    midiAccess.addEventListener('statechange',updateDevices);

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
    const command = input.data[0];
    const note = input.data[1];
    const velocity = input.data[2];
    inputData = []

    switch(command){
        case 144: //noteOn
        if (velocity>0){
            noteOn(note,velocity);
        }else {
            noteOff(note);
        }
        break;
        case 128: //noteOff
        noteOff(note);
    }
}

// Arrays needed for key positions
sharpNote=[-1]
const majorKeyPos = ["C","D","E","F","G","A","B"]
const sharpKeyPos = ["C#","D#","E#","F#","G#","A#","B#"] //There are wrong keys due to the indexing needed

// When pressing a note
function noteOn(note,velocity){
    const octave = parseInt(note/12) - 4; // -4 because my keyboard automatically starts at pos 48
    const notePressed=findNoteLetter(note);

    if(majorKeyPos.includes(notePressed)){
        noteNumber = majorKeyPos.indexOf(notePressed)
    }else if(sharpKeyPos.includes(notePressed)){
        noteNumber = sharpKeyPos.indexOf(notePressed)
        sharpNote.push((7*octave)+noteNumber)
    }else {noteNumber=-1;}

    noteOnColour(octave,noteNumber,notePressed,sharpNote);

    console.log(findNoteLetter(note),", Octave:",octave, ", Note Number:",noteNumber, sharpNote);
}
// When releasing a note
function noteOff(note){   
    const octave = parseInt(note/12) - 4; // -4 because my keyboard automatically starts at pos 48
    const notePressed=findNoteLetter(note);

    if(majorKeyPos.includes(notePressed)){
        var noteNumber = majorKeyPos.indexOf(notePressed)
    }else if(sharpKeyPos.includes(notePressed)){
        var noteNumber = sharpKeyPos.indexOf(notePressed)
        sharpNote=sharpNote.filter(function(without){
            return without !== ((7*octave)+noteNumber)
        });
    }else {noteNumber=-1;}
    noteOffColour(octave,noteNumber,notePressed,sharpNote);
}

// Input data taken to define which key pressed
const noteLetter = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"]
function findNoteLetter(note){
    var noteNumber = note % 12;
    return noteLetter[noteNumber];
}

// Window starting gets the keyboard statistics needed before creating keyboard
window.onload = function(){
    canvasStats();
    drawSheet();
    drawKeyboard();
}

// Window resizing gets the screen and new keyboard statistics needed before creating keyboard
window.onresize = function(){
    canvasStats();
    drawSheet();
    drawKeyboard();
}
// https://www.youtube.com/watch?v=uq66IuqYdWg

// Canvas creation
var canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// Midi keyboard key information
var totalKeys = 32    //ready for input from midi device, once this is done, possibly move into a function
var numWhiteKeys = 19;

function canvasStats(){
    cw = canvas.width = window.innerWidth*0.99;
    ch = canvas.height = (window.innerHeight/4)*3;
    whiteKeyWidth = ((cw-10)/numWhiteKeys);
    whiteKeyHeight = (ch/7)*4;
    blackKeyWidth = whiteKeyWidth*0.5;
    blackKeyHeight = whiteKeyHeight*0.6;
    xCoordinate = cw/numWhiteKeys;
    yCordinate = (ch/7)*3-10;
    sheetSpacing = (ch/7)/6;
    hitNoteLine = cw*0.95
    downLinedistance = sheetSpacing*14
}

// Draws the sheet music lines
function drawSheet(){
    for (let i = 1; i < 6; i++){
        ctx.beginPath();
        ctx.moveTo(0, i*sheetSpacing);
        ctx.lineTo(cw, i*sheetSpacing);
        ctx.stroke();    
    }
    for (let i = 9; i < 14; i++){
        ctx.beginPath();
        ctx.moveTo(0, i*sheetSpacing);
        ctx.lineTo(cw, i*sheetSpacing);
        ctx.stroke();    
    }
    ctx.beginPath();
    ctx.moveTo(hitNoteLine, 0);
    ctx.lineTo(hitNoteLine, downLinedistance);
    ctx.stroke(); 
}

function drawKeyboard(sharpNote){
    // Border around the keyboard
    ctx.beginPath();
    ctx.lineWidth = "5";
    ctx.strokeStyle = "black";
    ctx.rect(0, yCordinate, cw, whiteKeyHeight);
    ctx.stroke();

    for (let i = 0; i < numWhiteKeys; i++){
        ctx.beginPath();
        ctx.lineWidth = "1";
        ctx.strokeStyle = "black";
        ctx.rect(i*xCoordinate, yCordinate, whiteKeyWidth, whiteKeyHeight);
        ctx.stroke();
    }
    var position; // Compares i to sharpNote and if matches puts it in a new variable called position
    for (let i = 0; i < numWhiteKeys - 1; i++){                
        for (sharpNotePosition in sharpNote){
            if (sharpNote[sharpNotePosition] == i){
                position = i
            }
        }
        var j = i % 7 // Do not draw a key on the b# and e# as they do not exist, positions 2 and 6
        if (j !== 2 && j !== 6){
            ctx.beginPath();
            ctx.fillStyle="black";
            ctx.lineWidth = "1";
            ctx.rect((i+0.75)*xCoordinate, yCordinate, blackKeyWidth, blackKeyHeight);
            ctx.fill();            
        }
        else{ // Redraw held sharp key blue to show it is still held
            ctx.beginPath();
            ctx.fillStyle="blue";
            ctx.lineWidth = "1";
            ctx.rect((position+0.75)*xCoordinate, yCordinate, blackKeyWidth, blackKeyHeight);
            ctx.fill();            
        }
    }
}

// Change the colour of a key when pressed
function noteOnColour(octave,noteNumber,notePressed,sharpNote){
    if (majorKeyPos.includes(notePressed)){
        ctx.beginPath();                
        ctx.fillStyle="red";
        ctx.rect(((7*octave)+noteNumber)*xCoordinate, yCordinate, whiteKeyWidth, whiteKeyHeight);
        ctx.fill();

        drawKeyboard(sharpNote);
    } else if (sharpKeyPos.includes(notePressed)){
        let x = ((7*octave)+noteNumber)
        ctx.beginPath();                
        ctx.fillStyle="blue";
        ctx.rect((x+0.75)*xCoordinate, yCordinate, blackKeyWidth, blackKeyHeight);
        ctx.fill();
    }
}

// Change the colour of a key when released
function noteOffColour(octave,noteNumber,notePressed,sharpNote){
    if (majorKeyPos.includes(notePressed)){
        ctx.beginPath();                
        ctx.fillStyle="white";
        ctx.rect(((7 * octave) + noteNumber) * xCoordinate, yCordinate, whiteKeyWidth, whiteKeyHeight);
        ctx.fill();

        drawKeyboard(sharpNote);
    } else if (sharpKeyPos.includes(notePressed)){
        let x = ((7*octave)+noteNumber)
        ctx.beginPath();                
        ctx.fillStyle="black";
        ctx.rect((x+0.75) * xCoordinate, yCordinate, blackKeyWidth, blackKeyHeight);
        ctx.fill();

    }
}
