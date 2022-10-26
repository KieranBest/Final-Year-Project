const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

let cw = canvas.width=window.innerWidth;
let ch = canvas.height=window.innerHeight/2;


c.fillRect(200,200,50,50);
c.fillRect(30,30,10,10);
c.fillRect(100,100,10,10);

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
    console.log(note,velocity);
    c.fillStyle="#cc0000";
    c.fillRect(30,30,10,10);
    c.fill;
    console.log(noteNumber(note));
}
function noteOff(note){    
    console.log(note);
    c.fillStyle="#000000";
    c.fillRect(30,30,10,10);
    c.fill;
}

//Input data taken to define which key pressed
var noteLetter = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"]
function noteNumber(note){
    var noteNumber = note % 12;
    return noteLetter[noteNumber];
}