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
function noteOn(note,velocity){
    //console.log(note,velocity);
    //ctx.fillStyle="#cc0000";
    //ctx.fillRect(30,30,10,10);
    //ctx.fill;
    console.log(noteNumber(note));
}
function noteOff(note){    
    //console.log(note);
    //ctx.fillStyle="#000000";
    //ctx.fillRect(30,30,10,10);
    //ctx.fill;
}

//Input data taken to define which key pressed
var noteLetter = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"]
function noteNumber(note){
    var noteNumber = note % 12;
    return noteLetter[noteNumber];
}

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let cw = canvas.width=window.innerWidth*0.99;
let ch = canvas.height=window.innerHeight/2;

var totalKeys = 32;
var numWhiteKeys = 19;
var numBlackKeys = totalKeys-numWhiteKeys;
var whiteKeyWidth = ((cw-10)/numWhiteKeys);
var whiteKeyHeight = ch;
var blackKeyWidth = whiteKeyWidth*0.75;
var blackKeyHeight = ch*0.66;


function drawKeyboard(canvas, redKeyArray){

    for (let i =0;i<numWhiteKeys;i++){
        var xCoordinate = cw/numWhiteKeys;
        ctx.beginPath();
        ctx.lineWidth = "1";
        ctx.strokeStyle = "black";
        ctx.rect(i*xCoordinate, 0, whiteKeyWidth, whiteKeyHeight);
        ctx.stroke();
    }
}
drawKeyboard();

