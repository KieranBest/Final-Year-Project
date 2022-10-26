var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

let cw = canvas.width=window.innerWidth;
let ch = canvas.height=window.innerHeight/2;


c.fillRect(200,200,50,50);
c.fillRect(30,30,10,10);
c.fillRect(100,100,10,10);


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
    c.fill
}

function noteOff(note){
    c.fillStyle="#000000";
    c.fillRect(30,30,10,10);
    c.fill

    console.log(note);
}

function updateDevices(event){
    console.log(`Name: ${event.port.name}, Brand: ${event.port.manufacturer}, State:${event.port.state}, Type:${event.port.type}`)
}

function failure(){
    console.log('Could not connect MIDI')
}