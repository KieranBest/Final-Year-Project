// When the Midi device is first connected it will ask for permission to use MIDI device
// and then display device features if successful
if(navigator.requestMIDIAccess){
    navigator.requestMIDIAccess({sysex: false}).then(success, failure)
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
const majorKeyPos = ["C","D","E","F","G","A","B"]
const sharpKeyPos = ["C#","D#","E#","F#","G#","A#","B#"] // There are wrong keys due to the indexing needed
const staffShtMajorPos = ["B","A","G","F","E","D","C"] // These are the order needed for the staff
const staffShtSharpPos = ["B#","A#","G#","F#","E#","D#","C#"] // These are the order needed for the staff
let octaveWeight // Weight needed for the staff
let removedOctaveWeight // Weight needed for the released key for the staff
let overwriteStaffValue // Value needed to multiply by for the staff display when holding for example C and C#
let overwriteStaffLetter // Note letter needed for the staff display when releasing a key whilst still holding a key
let pressed = new Boolean(false)
let score = 0
let keyPressed = new Boolean(false)
let majorPressed = new Boolean(false)

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
        majorPressed = true
    }else if(sharpKeyPos.includes(notePressed)){
        noteNumber = sharpKeyPos.indexOf(notePressed)
        sharpNote.push((7*octave)+noteNumber)        
        staffNumber = staffShtSharpPos.indexOf(notePressed)
        staffPosArray.push(staffNumber)   
        notesHeldList.push(note)
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

    pressed = true
}

// When releasing a note
function noteOff(note){   
    const octave = parseInt(note/12) - 4; // -4 because my keyboard automatically starts at pos 48, this will need to be changed when numWhiteKeys is edited
    const noteLetterReleased=findNoteLetter(note);
    if(majorKeyPos.includes(noteLetterReleased)){
        var noteNumber = majorKeyPos.indexOf(noteLetterReleased)
        var releasedStaffNumber = staffShtMajorPos.indexOf(noteLetterReleased) 
        var releasedStaffPosArray=releasedStaffNumber
        staffPosArray = staffPosArray.filter(function(without){
            return without !== (releasedStaffNumber)
        })
        var releasedNoteArray=note
        notesHeldList = notesHeldList.filter(function(without){
            return without !== (note)
        })
        majorPressed=false
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

    pressed = false;
    keyPressed = false
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
        movePlayableNotes()
    }
    else{
        toggle = false
    }
}

// https://www.youtube.com/watch?v=9Sxo7P3F3m0&t=322s
const noteImage = new Image(135,137) //pixel size
const sharpImage = new Image(135,137) //pixel size

noteImage.src = 'images/noteImage.svg'
sharpImage.src= 'images/sharp.png'

trebleValues = [1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6]
bassValues = [6.5,7,7.5,8,8.5,9,9.5,10]
function noteGenerator(valueGenerator, randomGeneratorValue){
    let randomValue = Math.floor(Math.random()*randomGeneratorValue)
    return valueGenerator [randomValue]
}

let cycleNotes = 1
let sharpNoteCycle = 7
// Class for animated notes
class animatingNotes{
    constructor (x,y,y1,y2,y3,clicked,major){
        this.x = x
        this.y = y
        this.y1 = y1
        this.y2 = y2
        this.y3 = y3
        this.yValues = []
        this.clicked = clicked
        this.image = new Image(135,137) //pixel size
        this.major = major
    }
    update(){ // Updates and changes each animated notes x variable according to speed
        if(toggle){      
            if(this.x == null){
                this.x = window.innerWidth
            }
            // scoring
            if(pressed){
                if(this.x <= hitNoteLine+(window.innerWidth*DynamicDifficulty[difficultyLevel].hitScreenPercentage)){
                    if(!keyPressed){
                        if ((this.y/staffSpacing)+0.5 == octaveWeight){
                            if(this.major == majorPressed){
                                score++
                                keyPressed = true
                                this.clicked = true
                                console.log("score = " + score)
                            }
                        } 
                    }
                }
            }          
            // Note Loop Around
            if(this.x<hitNoteLine-(0.5*staffSpacing)){ // If note moves far to the left it will delete and create a autocreate a new y value
                repeatQuantity++
                if(!this.clicked){
                    if(repeatQuantity > 2){
                        score--
                        console.log("score = " + score)
                    }
                }
                else{
                    this.clicked = false
                }
                this.x = window.innerWidth
                ctx.fillStyle="white"
                for(let difficulty = 0; difficulty < DynamicDifficulty[difficultyLevel].numberOfNotes; difficulty++){
                    ctx.arc(hitNoteLine-(0.4*staffSpacing), this.yValues[difficulty]+(0.5*staffSpacing) , staffSpacing*0.6, 0, 2 * Math.PI)
                }
                ctx.fill()

                if(score == DynamicDifficulty[difficultyLevel].requiredScoreToProgress){
                    difficultyLevel++
                    score = 0
                }
                else if(score == DynamicDifficulty[difficultyLevel].requiredScoreToRegress){
                    difficultyLevel--
                    score = 0
                }
    
                switch(difficultyLevel){
                    case 1:
                        this.y = staffSpacing * noteGenerator(trebleValues,DynamicDifficulty[difficultyLevel].trebleGeneratorSize)
                        this.image = noteImage
                        break
                    case 2: 
                        this.y = staffSpacing * cycleNotes
                        if(DynamicDifficulty[2].down == true){ // Scrolls up and down through the octave
                            cycleNotes=cycleNotes+0.5
                            if(cycleNotes>3.5){
                                DynamicDifficulty[2].down = false
                            } 
                        }
                        else if (DynamicDifficulty[2].down == false){
                            cycleNotes=cycleNotes-0.5
                            if(cycleNotes<1.5){
                                DynamicDifficulty[2].down = true
                            }  
                        }
                        this.image = noteImage
                        break
                    case 3:
                        this.y = staffSpacing * noteGenerator(trebleValues,DynamicDifficulty[difficultyLevel].trebleGeneratorSize)
                        this.image = noteImage
                        break
                    case 4:
                        this.y = staffSpacing * cycleNotes
                        if(DynamicDifficulty[4].down == true){ // Scrolls up and down through the octave
                            if(noteLetter[sharpNoteCycle].includes("#")){
                                this.image = sharpImage
                                this.major = false
                                sharpNoteCycle--
                            }
                            else{
                                this.image = noteImage
                                this.major = true
                                sharpNoteCycle--
                                cycleNotes=cycleNotes+0.5
                            }
                            if(sharpNoteCycle < 0){
                                sharpNoteCycle = 11
                            }
                            if(noteLetter[sharpNoteCycle] == "G"){
                                DynamicDifficulty[4].down = false
                            } 
                        }
                        else if (DynamicDifficulty[4].down == false){
                            if(noteLetter[sharpNoteCycle].includes("#")){
                                this.image = sharpImage
                                this.major = false
                                sharpNoteCycle++
                                cycleNotes=cycleNotes-0.5
                            }
                            else{
                                this.image = noteImage
                                this.major = true
                                sharpNoteCycle++
                                if(sharpNoteCycle > 11){
                                    sharpNoteCycle = 0
                                }    
                                if(!noteLetter[sharpNoteCycle].includes("#")){
                                    cycleNotes=cycleNotes-0.5
                                }
                            }
                            if(noteLetter[sharpNoteCycle] == "G"){
                                DynamicDifficulty[4].down = true
                            } 

                        }
                        break
                    }
                this.yValues = [this.y, this.y1, this.y2, this.y3]
            }   
            this.x -= DynamicDifficulty[difficultyLevel].speed

        }    
        else{
            cancelAnimationFrame(movePlayableNotes)
            this.x = window.innerWidth
        }
    }
    display(){ // Displays the notes based on the x and y values created in the update function
        for(let difficulty = 0; difficulty < DynamicDifficulty[difficultyLevel].numberOfNotes; difficulty++){
            ctx.drawImage(this.image,this.x, this.yValues[difficulty], staffSpacing,staffSpacing)
        }              
    }
} 

let animating_Notes1 = new animatingNotes(window.innerWidth)
let animating_Notes2 = new animatingNotes(window.innerWidth)
let animating_Notes3 = new animatingNotes(window.innerWidth)
let animating_Notes4 = new animatingNotes(window.innerWidth)
let animating_Notes5 = new animatingNotes(window.innerWidth)
let animating_Notes6 = new animatingNotes(window.innerWidth)
let animating_Notes7 = new animatingNotes(window.innerWidth)
let animating_Notes8 = new animatingNotes(window.innerWidth)


let lastloop = performance.now()
let a=0
let averageFPS = 0
let timeDelay = 0
let repeatQuantity = 0
function movePlayableNotes(staffNumber,notePressed,octave){
    if(toggle){
        if(a<1000){
            a++
        }
        if(a>20 && a<1000){
            var thisloop = performance.now()
            var fps = Math.round(1000/(thisloop-lastloop))
            averageFPS = averageFPS+fps
            lastloop = thisloop
        }
        if(a>100){
            if(toggle){
                timeDelay = (window.innerWidth-(hitNoteLine-(0.5*staffSpacing))/(averageFPS/a)*1000)/DynamicDifficulty[difficultyLevel].speed
            }
            else{
                timeDelay = 0
            }

            ctx.fillStyle = "white"
            ctx.fillRect(hitNoteLine,0,canvas.width,staffHeight)
            staffNoteHit(staffNumber,notePressed,octave)
            drawStaff()
            // updates x and y values and then displays them whilst removing the old values from visibility
            switch(DynamicDifficulty[difficultyLevel].recurringNotes){
                case 2:
                    animating_Notes1.update()
                    animating_Notes1.display()
                    setTimeout((s) => animating_Notes5.update(), 4*timeDelay)
                    animating_Notes5.display()        
                    break
                case 4:
                    animating_Notes1.update()
                    animating_Notes1.display()
                    setTimeout((s) => animating_Notes3.update(), 2*timeDelay)
                    animating_Notes3.display()
                    setTimeout((s) => animating_Notes5.update(), 4*timeDelay)
                    animating_Notes5.display()
                    setTimeout((s) => animating_Notes7.update(), 6*timeDelay)
                    animating_Notes7.display()
                    break
                case 8:
                    animating_Notes1.update()
                    animating_Notes1.display()    
                    setTimeout((s) => animating_Notes2.update(), 1*timeDelay)
                    animating_Notes2.display()
                    setTimeout((s) => animating_Notes3.update(), 2*timeDelay)
                    animating_Notes3.display()
                    setTimeout((s) => animating_Notes4.update(), 3*timeDelay)
                    animating_Notes4.display()
                    setTimeout((s) => animating_Notes5.update(), 4*timeDelay)
                    animating_Notes5.display()
                    setTimeout((s) => animating_Notes6.update(), 5*timeDelay)
                    animating_Notes6.display()
                    setTimeout((s) => animating_Notes7.update(), 6*timeDelay)
                    animating_Notes7.display()
                    setTimeout((s) => animating_Notes8.update(), 7*timeDelay)
                    animating_Notes8.display()
                    break
            }
        }
        
        requestAnimationFrame(movePlayableNotes) // Repeats this function to create an animation
    }
    else{
        ctx.fillStyle = "white"
        ctx.fillRect(hitNoteLine,0,canvas.width,staffHeight)
        drawStaff()
    }
}

