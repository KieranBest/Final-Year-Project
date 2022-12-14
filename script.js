// When the Midi device is first connected it will display device features if successful
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

// Input data to define what to do when key pressed, 144 is pressed, 128 is released
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

// https://www.youtube.com/watch?v=dV6V2Ptx_CY
// Compatibility issues, make sure its compatible across browsers
window.AudioContext = window.AudioContext || window.webkitAudioContext
let soundCTX

const startButton = document.getElementById('StartButton')
const oscillators = {}

startButton.addEventListener('click', () => {
    soundCTX = new AudioContext()
    startButton.style.visibility = 'hidden'
    pauseButton.style.visibility = 'visible'
    toggleGame()
})
const pauseButton = document.getElementById('PauseButton')
pauseButton.style.visibility = 'hidden'

pauseButton.addEventListener('click', () => {
    pauseButton.style.visibility = 'hidden'
    startButton.style.visibility = 'visible'
    toggleGame()
})


function midiToFreq(number){
    const a = 440; //Hz
    return (a/32) * (2 ** ((number - 9) / 12))
}

sharpNote=[-1]
notesHeldList=[]
staffPosArray=[]
majorTimeStamp=[-1]
sharpTimeStamp=[-1]
const majorKeyPos = ["C","D","E","F","G","A","B"]
const sharpKeyPos = ["C#","D#","E#","F#","G#","A#","B#"] // There are wrong keys due to the indexing needed
const staffShtMajorPos = ["B","A","G","F","E","D","C"] // These are the order needed for the staff
const staffShtSharpPos = ["B#","A#","G#","F#","E#","D#","C#"] // These are the order needed for the staff
let octaveWeight // Weight needed for the staff
let removedOctaveWeight // Weight needed for the released key for the staff
let overwriteStaffValue // Value needed to multiply by for the staff display when holding for example C and C#
let overwriteStaffLetter // Note letter needed for the staff display when releasing a key whilst still holding a key

// Input data taken to define which key pressed forkeyboard representation
const noteLetter = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"]
function findNoteLetter(note){
    var noteNumber = note % 12
    return noteLetter[noteNumber]
}

// When pressing a note
function noteOn(note, velocity){
    const octave = parseInt(note/12) - 4 // -4 because my keyboard automatically starts at pos 48, this will need to be changed when keyboard information is entered with numWhiteKeys
    const notePressed=findNoteLetter(note);
    if(majorKeyPos.includes(notePressed)){
        noteNumber = majorKeyPos.indexOf(notePressed)
        staffNumber = staffShtMajorPos.indexOf(notePressed)
        staffPosArray.push(staffNumber)   
        notesHeldList.push(note)
        let timeStamp = new Date(Date.now())
        majorTimeStamp.push(timeStamp.getSeconds())
        
    }else if(sharpKeyPos.includes(notePressed)){
        noteNumber = sharpKeyPos.indexOf(notePressed)
        sharpNote.push((7*octave)+noteNumber)        
        staffNumber = staffShtSharpPos.indexOf(notePressed)
        staffPosArray.push(staffNumber)   
        notesHeldList.push(note)
        let timeStamp = new Date(Date.now())
        sharpTimeStamp.push(timeStamp.getSeconds())
    }
    noteOnColour(staffNumber,octave,noteNumber,notePressed,sharpNote)
    const osc = soundCTX.createOscillator()

    const oscGain = soundCTX.createGain()
    oscGain.gain.value = 0.33

    const velocityGainAmount = (1/127) * velocity
    const velocityGain = soundCTX.createGain()
    velocityGain.gain.value = velocityGainAmount

    osc.type = 'sine' //sine, square, triangle, sawtooth
    osc.frequency.value = midiToFreq(note)
    
    osc.connect(oscGain)
    oscGain.connect(velocityGain)
    velocityGain.connect(soundCTX.destination) // Connect the oscillator to speaker output

    osc.gain = oscGain

    oscillators[note.toString()] = osc
    osc.start()
}

// When releasing a note
function noteOff(note){   
    const octave = parseInt(note/12) - 4; // -4 because my keyboard automatically starts at pos 48, this will need to be changed when numWhiteKeys is edited
    const noteLetterReleased=findNoteLetter(note);
    if(majorKeyPos.includes(noteLetterReleased)){
        var noteNumber = majorKeyPos.indexOf(noteLetterReleased)
        var releasedStaffNumber = staffShtMajorPos.indexOf(noteLetterReleased) 
        var releasedStaffPosArray=releasedStaffNumber
        var index = notesHeldList.findIndex(release => release === note)
        staffPosArray = staffPosArray.filter(function(without){
            return without !== (releasedStaffNumber)
        })
        var releasedNoteArray=note
        notesHeldList = notesHeldList.filter(function(without){
            return without !== (note)
        })
        majorTimeStamp = majorTimeStamp.filter(function(without){
            return without !== majorTimeStamp.splice(index)
        })

    }else if(sharpKeyPos.includes(noteLetterReleased)){
        var noteNumber = sharpKeyPos.indexOf(noteLetterReleased)
        sharpNote=sharpNote.filter(function(without){
            return without !== ((7*octave)+noteNumber)})
        var releasedStaffNumber = staffShtSharpPos.indexOf(noteLetterReleased) 
        var releasedStaffPosArray=releasedStaffNumber
        staffPosArray = staffPosArray.filter(function(without){
            return without !== (releasedStaffNumber)
        })
        var releasedNoteArray=note
        notesHeldList = notesHeldList.filter(function(without){
            return without !== (note)
        })
        sharpTimeStamp = sharpTimeStamp.filter(function(without){
            return without !== sharpTimeStamp.splice(index)
        })
    }
    noteOffColour(releasedNoteArray,releasedStaffPosArray,notesHeldList,octave,noteNumber,noteLetterReleased,sharpNote)

    const osc = oscillators[note.toString()]
    const oscGain = osc.gain

    // This stops the clicking sound when releasing the note due to the sine wave
    oscGain.gain.setValueAtTime(oscGain.gain.value, soundCTX.currentTime)
    oscGain.gain.exponentialRampToValueAtTime(0.0001,soundCTX.currentTime + 0.03)
    setTimeout(() => {
        osc.stop()
        osc.disconnect()
    }, 20)

    delete oscillators[note.toString()]
}

// Window starting gets the window statistics needed before creating keyboard
window.onload = function(){
    canvasStats()
    drawStaff()
    drawKeyboard()
}

// Window resizing gets the updated window size and new keyboard statistics needed before creating keyboard
window.onresize = function(){
    canvasStats()
    drawStaff()
    drawKeyboard()
}
// https://www.youtube.com/watch?v=uq66IuqYdWg

// Canvas creation
var canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

// Displayed keyboard sizing is dependent on the screen size and how many keys are needed
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
    staffHeight = (ch/7)*2.5
    staffSpacing = (ch/7)/6
    hitNoteLine = cw*0.05
    downLineDistance = staffSpacing*13
}

// Draws the staff sheet
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

// Draws the displayed keyboard, sharpNote is a held sharp keyA
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
        var j = i % 7 // Do not draw a key on the b# and e# as they do not exist, positions 2 and 6 as well as position/sharpNote
        if(j !== 2 && j !== 6 && !position.includes(i)){
            ctx.beginPath()
            ctx.fillStyle="black"
            ctx.lineWidth = "1"
            ctx.rect((i+0.75)*xCoordinate, yCordinate, blackKeyWidth, blackKeyHeight)
            ctx.fill()
        }
        else if (position.includes(i)){ // Redraws held sharp key over the redrawn keyboard
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
        staffNoteHit(staffNumber,notePressed,octave)
    }else if(sharpKeyPos.includes(notePressed)){
        let x = ((7*octave)+noteNumber)
        ctx.beginPath()
        ctx.fillStyle="blue"
        ctx.rect((x+0.75)*xCoordinate, yCordinate, blackKeyWidth, blackKeyHeight)
        ctx.fill()
        staffNoteHit(staffNumber,notePressed,octave)
    }
}

// Change the colour of a key back to normal when released
function noteOffColour(removedNoteArray,removedStaffPosArray,notesHeldList,octave,noteNumber,noteReleased,sharpNote){
    if(majorKeyPos.includes(noteReleased)){
        ctx.beginPath()
        ctx.fillStyle="white"
        ctx.rect(((7 * octave) + noteNumber) * xCoordinate, yCordinate, whiteKeyWidth, whiteKeyHeight)
        ctx.fill()
        drawKeyboard(sharpNote)
        removeStaffNoteHit(removedNoteArray,removedStaffPosArray,notesHeldList)
    }else if(sharpKeyPos.includes(noteReleased)){
        let x = ((7*octave)+noteNumber)
        ctx.beginPath()
        ctx.fillStyle="black"
        ctx.rect((x+0.75) * xCoordinate, yCordinate, blackKeyWidth, blackKeyHeight)
        ctx.fill()
        removeStaffNoteHit(removedNoteArray,removedStaffPosArray,notesHeldList)
    }
}

// Draw on the staff when a note is pushed
function staffNoteHit(staffNumber,notePressed,octave){
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
    else if(sharpKeyPos.includes(notePressed)){
        if(octave === 1){
            octaveWeight = (staffNumber*0.5+4)
        }else if(octave === 0){
            octaveWeight = (staffNumber*0.5+4)+3.5
        }else if(octave === 2){
            octaveWeight = (staffNumber*0.5+4)-3.5
        }   
        ctx.beginPath()
        ctx.fillStyle="blue"
        ctx.arc(hitNoteLine, octaveWeight*staffSpacing , staffSpacing*0.4, 0, 2 * Math.PI)
        ctx.fill()
    }
}

// When notes are released, removes them from the staff
// Notes that are held whilst another key is released are kept visible on the staff
function removeStaffNoteHit(removedNoteArray,removedStaffPosArray,heldNoteList){
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
    ctx.fillRect(0,0,hitNoteLine,staffHeight)
    ctx.fill()
    drawStaff()
    if(heldNoteList !== null){ // If a note is still held display it 
        for(values in heldNoteList){
            if(majorKeyPos.includes(findNoteLetter(heldNoteList[values]))){
                staffOctave =  parseInt(heldNoteList[values]/12) - 4
                overwriteStaffLetter = findNoteLetter(heldNoteList[values])
                overwriteStaffValue = staffShtMajorPos.indexOf(overwriteStaffLetter)
                if(staffOctave === 1){
                    octaveWeight = (overwriteStaffValue*0.5+4)
                }else if(staffOctave === 0){
                    octaveWeight = (overwriteStaffValue*0.5+4)+3.5
                }else if(staffOctave === 2){
                    octaveWeight = (overwriteStaffValue*0.5+4)-3.5
                }else octaveWeight = 0
                ctx.beginPath()
                ctx.fillStyle="red"
                ctx.arc(hitNoteLine, octaveWeight*staffSpacing , staffSpacing*0.4, 0, 2 * Math.PI)
                ctx.fill()
            }else if(sharpKeyPos.includes(findNoteLetter(heldNoteList[values]))) {
                staffOctave =  parseInt(heldNoteList[values]/12) - 4
                overwriteStaffLetter = findNoteLetter(heldNoteList[values])
                overwriteStaffValue = staffShtSharpPos.indexOf(overwriteStaffLetter)
                if(staffOctave === 1){
                    octaveWeight = (overwriteStaffValue*0.5+4)
                }else if(staffOctave === 0){
                    octaveWeight = (overwriteStaffValue*0.5+4)+3.5
                }else if(staffOctave === 2){
                    octaveWeight = (overwriteStaffValue*0.5+4)-3.5
                }else octaveWeight = 0
                ctx.beginPath()
                ctx.fillStyle="blue"
                ctx.arc(hitNoteLine, octaveWeight*staffSpacing , staffSpacing*0.4, 0, 2 * Math.PI)
                ctx.fill()
            }
        } 
    } 
}

// Note animation
// Start and stop the game
let toggle=false
const toggleGame = async() => {
    if(!toggle){
        toggle = true
        noteLoadCount()
    }
    else{
        toggle = false
        noteCount = 0
        animating_Notes.x = window.innerWidth
    }
}

const noteImage = new Image(135,137) //pixel size
noteImage.src = 'images/noteImage.svg'

function noteGenerator(){ // temporary fix to generating notes
    generationValues = [2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13]
    let randomValue = Math.floor(Math.random()*generationValues.length)
    return generationValues[randomValue]
}

let noteCount = 0
const totalNotes = 1

function noteLoadCount(){
    noteCount++
    if(noteCount <= totalNotes){
        movePlayableNotes()
    }
}

let difficultySpeed = 1

class animatingNotes{
    constructor (x,y){
        this.x = x
        this.y = y
    }
    update(){
        if(this.y === undefined){
            this.y = staffSpacing * noteGenerator()
            console.log(this.y)
        }
        this.x -= difficultySpeed
        if(this.x<hitNoteLine-(0.5*staffSpacing)){
            this.x = window.innerWidth
            ctx.fillStyle="white"
            ctx.arc(hitNoteLine-(0.4*staffSpacing), this.y+(0.5*staffSpacing) , staffSpacing*0.6, 0, 2 * Math.PI)
            ctx.fill()
            this.y = staffSpacing * noteGenerator()
            console.log(this.y)
        }
    }
    display(){
        ctx.drawImage(noteImage,this.x,this.y,staffSpacing,staffSpacing)
    }
} 

let animating_Notes1 = new animatingNotes(window.innerWidth)
let animating_Notes2 = new animatingNotes(window.innerWidth)
let animating_Notes3 = new animatingNotes(window.innerWidth)

function movePlayableNotes(staffNumber,notePressed,octave){
    if(toggle){
        ctx.fillStyle = "white"
        ctx.fillRect(hitNoteLine,0,canvas.width,staffHeight)
        staffNoteHit(staffNumber,notePressed,octave)
        drawStaff()
        animating_Notes1.update()
        animating_Notes1.display()
        animating_Notes2.update()
        animating_Notes2.display()
        animating_Notes3.update()
        animating_Notes3.display()
    
        requestAnimationFrame(movePlayableNotes)
    }
    else{
        ctx.fillStyle = "white"
        ctx.fillRect(hitNoteLine,0,canvas.width,staffHeight)
        staffNoteHit(staffNumber,notePressed,octave)
        drawStaff()
    }
}

/*function ifHitNoteCorrectly(staffNumber,notePressed,octave){
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
}*/

// see if answer is in
// https://www.youtube.com/watch?v=9Sxo7P3F3m0&t=322s
// https://www.kirupa.com/animations/ensuring_consistent_animation_speeds.htm
// https://www.google.com/search?q=requestanimationframe+javascript+speed+up+when+more+animations+why&rlz=1C1ONGR_en-GBGB985GB985&sxsrf=ALiCzsaJ7Ysi1sjTnJwYC4nUrE1j0aEnBA%3A1670445035417&ei=6_eQY_SLGZPMgQawiIrIBA&ved=0ahUKEwi0rc_XrOj7AhUTZsAKHTCEAkkQ4dUDCA8&uact=5&oq=requestanimationframe+javascript+speed+up+when+more+animations+why&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzoKCAAQRxDWBBCwA0oECEEYAEoECEYYAFCxBljnD2CFE2gBcAF4AIABUIgBtwKSAQE0mAEAoAEByAEIwAEB&sclient=gws-wiz-serp