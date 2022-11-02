//When the Midi device is first connected it will 
//display device features if successful
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

//Input data to define what to do when key pressed
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
//When pressing a note
function noteOn(note,velocity){
    const octave = parseInt(note/12) - 4; // -4 because my keyboard automatically starts at pos 48
    const notePressed=findNoteLetter(note);

    if(majorKeyPos.includes(notePressed)){
        noteNumber = majorKeyPos.indexOf(notePressed)
    }else if(sharpKeyPos.includes(notePressed)){
        noteNumber = sharpKeyPos.indexOf(notePressed)
    }else {noteNumber=-1;}

    noteOnColour(octave,noteNumber,notePressed);

    console.log(findNoteLetter(note),", Octave:",octave, ", Note Number:",noteNumber)
}
//When releasing a note
function noteOff(note){   
    const octave = parseInt(note/12) - 4; // -4 because my keyboard automatically starts at pos 48
    const notePressed=findNoteLetter(note);

    if(majorKeyPos.includes(notePressed)){
        var noteNumber = majorKeyPos.indexOf(notePressed)
    }else if(sharpKeyPos.includes(notePressed)){
        var noteNumber = sharpKeyPos.indexOf(notePressed)
    }else {noteNumber=-1;}

    noteOffColour(octave,noteNumber,notePressed);
}

//Input data taken to define which key pressed
const noteLetter = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"]
function findNoteLetter(note){
    var noteNumber = note % 12;
    return noteLetter[noteNumber];
}

//Canvas creation
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const cw = canvas.width = window.innerWidth*0.99;
const ch = canvas.height = window.innerHeight/2;

//Midi keyboard key information
var totalKeys = 32    //ready for input from midi device;
var numWhiteKeys = 19;
var numBlackKeys = totalKeys-numWhiteKeys;

//Keyboard creation information
var whiteKeyWidth = ((cw-10)/numWhiteKeys);
var whiteKeyHeight = ch;
var blackKeyWidth = whiteKeyWidth*0.5;
var blackKeyHeight = ch*0.66;
var xCoordinate = cw/numWhiteKeys;

//Canvas Keyboard Drawing
function drawKeyboard(){
    for (let i =0;i<numWhiteKeys;i++){
        ctx.beginPath();
        ctx.lineWidth = "1";
        ctx.strokeStyle = "black";
        ctx.rect(i*xCoordinate, 0, whiteKeyWidth, whiteKeyHeight);
        ctx.stroke();
    }
    for (let i =0;i<numWhiteKeys-1;i++){
        var j = i % 7
        if (j !== 2){
            if (j !== 6){
                ctx.beginPath();
                ctx.fillStyle="black";
                ctx.lineWidth = "1";
                ctx.rect((i+0.75)*xCoordinate, 0, blackKeyWidth, blackKeyHeight);
                ctx.fill();
            }
        }
    }
}
drawKeyboard();

const majorKeyPos = ["C","D","E","F","G","A","B"]
const sharpKeyPos = ["C#","D#","E#","F#","G#","A#","B#"] //There are wrong keys due to the indexing needed

//Change the colour of a key when pressed
function noteOnColour(octave,noteNumber,notePressed,note){
    if(majorKeyPos.includes(notePressed)){
        ctx.beginPath();                
        ctx.fillStyle="red";
        ctx.rect(((7*octave)+noteNumber)*xCoordinate, 0, whiteKeyWidth, whiteKeyHeight);
        ctx.fill();
        drawKeyboard();
    }else if(sharpKeyPos.includes(notePressed)){
        let x = ((7*octave)+noteNumber)
        ctx.beginPath();                
        ctx.fillStyle="blue";
        ctx.rect((x+0.75)*xCoordinate, 0, blackKeyWidth, blackKeyHeight);
        ctx.fill();
    }
}

function noteOffColour(octave,noteNumber,notePressed){
    if(majorKeyPos.includes(notePressed)){
        ctx.beginPath();                
        ctx.fillStyle="white";
        ctx.rect(((7*octave)+noteNumber)*xCoordinate, 0, whiteKeyWidth, whiteKeyHeight);
        ctx.fill();
        drawKeyboard();
    }else if(sharpKeyPos.includes(notePressed)){
        let x = ((7*octave)+noteNumber)
        ctx.beginPath();                
        ctx.fillStyle="black";
        ctx.rect((x+0.75)*xCoordinate, 0, blackKeyWidth, blackKeyHeight);
        ctx.fill();
    }
}