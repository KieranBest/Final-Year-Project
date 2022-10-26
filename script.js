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
    ctx.fillStyle="#cc0000";
    //ctx.fillRect(30,30,10,10);
    //ctx.fill;
    //console.log(noteNumber(note));
    let notePressed=noteNumber(note);
    if(majorKeyPos.includes(noteNumber(note))){
        

        //use stuff from initial draw to adapt to change colour.
        //have a look into octave numbers perhaps to determine which 
        //octave to light up?
        
        
        console.log("yes");
    }
    else if(sharpKeyPos.includes(noteNumber(note))){
        console.log("no");
    }
}
function noteOff(note){    
    //console.log(note);
    ctx.fillStyle="#000000";
    ctx.fillRect(30,30,10,10);
    ctx.fill;
}

//Input data taken to define which key pressed
let noteLetter = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"]
function noteNumber(note){
    var noteNumber = note % 12;
    return noteLetter[noteNumber];
}

//Canvas creation
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const cw = canvas.width=window.innerWidth*0.99;
const ch = canvas.height=window.innerHeight/2;

//Midi keyboard key information
var totalKeys = 32    //ready for input from midi device;
var numWhiteKeys = 19;
var numBlackKeys = totalKeys-numWhiteKeys;
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
const sharpKeyPos = ["C#","D#","F#","G#","A#"]