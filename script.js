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
    const time = new Date()
    noteOffTime.time = time.getTime()
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
    leftBoundary = cw*0.05
    downLineDistance = staffSpacing*13
    img = new Image(whiteKeyWidth/2,staffSpacing*5)
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
    ctx.moveTo(leftBoundary, staffSpacing)
    ctx.lineTo(leftBoundary, downLineDistance)
    ctx.stroke()
// Left Boundary Marker
    ctx.beginPath()
    ctx.moveTo(leftBoundary+(window.innerWidth*DynamicDifficulty[difficultyLevel].hitScreenPercentage), staffSpacing)
    ctx.lineTo(leftBoundary+(window.innerWidth*DynamicDifficulty[difficultyLevel].hitScreenPercentage), downLineDistance)
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
        ctx.arc(leftBoundary, octaveWeight*staffSpacing , staffSpacing*0.4, 0, 2 * Math.PI)
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
        ctx.arc(leftBoundary, octaveWeight*staffSpacing , staffSpacing*0.4, 0, 2 * Math.PI)
        ctx.fill()
    }
}

// When notes are released, removes them from the staff
// Notes that are held whilst another key is released are kept visible on the staff
function removeStaffNoteHit(removedNoteArray,removedStaffPosArray,notesHeldList){
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
    ctx.fillRect(0,0,leftBoundary,staffHeight)
    ctx.fill()
    drawStaff()
    if(notesHeldList !== null){ // If a note is still held display it 
        for(values in notesHeldList){
           if(majorKeyPos.includes(findNoteLetter(notesHeldList[values]))){
                staffOctave =  parseInt(notesHeldList[values]/12) - 4
                overwriteStaffLetter = findNoteLetter(notesHeldList[values])
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
                ctx.arc(leftBoundary, octaveWeight*staffSpacing , staffSpacing*0.4, 0, 2 * Math.PI)
                ctx.fill()
            }else if(sharpKeyPos.includes(findNoteLetter(notesHeldList[values]))) {
                staffOctave =  parseInt(notesHeldList[values]/12) - 4
                overwriteStaffLetter = findNoteLetter(notesHeldList[values])
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
                ctx.arc(leftBoundary, octaveWeight*staffSpacing , staffSpacing*0.4, 0, 2 * Math.PI)
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
noteImage.src = 'images/noteImage.png'
sharpImage.src= 'images/sharp.png'

// Generates a random value based on whether a treble or bass note is needed
trebleValues = [1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6]
bassValues = [6.5,7,7.5,8,8.5,9,9.5,10]
function noteGenerator(valueGenerator, randomGeneratorValue){
    let randomValue = Math.floor(Math.random()*randomGeneratorValue)
    return valueGenerator [randomValue]
}

// Creates accessible and understandable time signatures for the actual hit time and expected hit time
function createTime(x,n){
    while(x.toString().length < n){
        x = "0" + x
    }
    return x
}

let cycleNotes = 1
let bassCycle = 10
let sharpNoteCycle = 7
let bassSharpCycle = 0
let chordCycle = 1
let levelProgression = 1
let correctNoteHit = new Boolean(false)
let userNoteProgression= {}
let gameProgression = {}
let numberOfNotesInLevel = 0
let noteNumberInGame = 0
let resetValues = new Boolean(true)
let previousNote = null
// Class for animated notes
class animatingNotes{
    constructor (x,y,yHit,y1,y1Hit,y2,y2Hit,major,major1,major2){
        this.x = x
        this.y = y
        this.yHit = yHit
        this.y1 = y1
        this.y1Hit = y1Hit
        this.y2 = y2
        this.y2Hit = y2Hit
        this.yValues = []
        this.image = new Image(135,137) //pixel size
        this.image1 = new Image(135,137) //pixel size
        this.image2 = new Image(135,137) //pixel size
        this.images = []
        this.major = major
        this.major1 = major1
        this.major2 = major2
        this.recordedExpectedTime = new Boolean(false)
    }
    update(){ // Updates and changes each animated notes x variable according to speed
        if(toggle){      
            if(this.x <= leftBoundary+(window.innerWidth*DynamicDifficulty[difficultyLevel].hitScreenPercentage)){
                if(this.recordedExpectedTime == false){
                    this.recordedExpectedTime = true
                    noteNumberInGame++
                    const time = new Date() // Creates a time that the note will reach the desired hit point
                    currentExpectedHitTime.h = createTime(time.getHours(), 2)
                    currentExpectedHitTime.m = createTime(time.getMinutes(), 2)
                    currentExpectedHitTime.s = createTime(time.getSeconds(), 2)
                    currentExpectedHitTime.ms = createTime(time.getMilliseconds(), 3)
                    currentExpectedHitTime.time = time.getTime()
                    if(noteNumberInGame > 1 && resetValues == true){ // Needs to be reset so it does not record when the first 2 notes are generated
                        resetValues = false
                        noteNumberInGame = 0
                        numberOfNotesInLevel = 0   
                    }
                }
            }
            // Scoring
            if(pressed){
                if(this.x <= leftBoundary+(window.innerWidth*DynamicDifficulty[difficultyLevel].hitScreenPercentage)){
                    if(!keyPressed){ // Stops constantly adding to score whilst holding note
                        keyPressed = true
                        const time = new Date() // Creates a time that the user pressed a note
                        if(notesHeldList.length == DynamicDifficulty[difficultyLevel].numberOfNotes){
                            let notesHeldListValue
                            for(var values in notesHeldList){
                                if(majorKeyPos.includes(findNoteLetter(notesHeldList[values]))){
                                    let notesHeldOctave =  parseInt(notesHeldList[values]/12) - 4
                                    let notesHeldLetter = findNoteLetter(notesHeldList[values])
                                    let notesHeldValue = staffShtMajorPos.indexOf(notesHeldLetter)
                                    if(notesHeldOctave === 1){
                                        notesHeldListValue = (notesHeldValue*0.5+4)
                                    }else if(notesHeldOctave === 0){
                                        notesHeldListValue = (notesHeldValue*0.5+4)+3.5
                                    }else if(notesHeldOctave === 2){
                                        notesHeldListValue = (notesHeldValue*0.5+4)-3.5
                                    }else notesHeldListValue = 0
                                }else if(sharpKeyPos.includes(findNoteLetter(notesHeldList[values]))) {
                                    let notesHeldOctave =  parseInt(notesHeldList[values]/12) - 4
                                    let notesHeldLetter = findNoteLetter(notesHeldList[values])
                                    let notesHeldValue = staffShtSharpPos.indexOf(notesHeldLetter)
                                    if(notesHeldOctave === 1){
                                        notesHeldListValue = (notesHeldValue*0.5+4)
                                    }else if(notesHeldOctave === 0){
                                        notesHeldListValue = (notesHeldValue*0.5+4)+3.5
                                    }else if(notesHeldOctave === 2){
                                        notesHeldListValue = (notesHeldValue*0.5+4)-3.5
                                    }else notesHeldListValue = 0
                                }
                                if((this.y/staffSpacing)+0.5 == notesHeldListValue && this.major == majorPressed){
                                    this.yHit = true
                                }
                                if((this.y1/staffSpacing)+0.5 == notesHeldListValue && this.major == majorPressed){
                                    this.y1Hit = true
                                }
                                if((this.y2/staffSpacing)+0.5 == notesHeldListValue && this.major == majorPressed){
                                    this.y2Hit = true
                                }
                                console.log(octaveWeight)
                                console.log(notesHeldList)
                                console.log((this.y/staffSpacing)+0.5)
                                console.log(notesHeldListValue)
                            }
                            if(DynamicDifficulty[difficultyLevel].numberOfNotes == 1 && this.yHit == true){
                                score++
                                console.log("score = " + score)
                                correctNoteHit = true
                            }
                            else if(DynamicDifficulty[difficultyLevel].numberOfNotes == 2 && this.yHit == true && this.y1Hit == true){
                                score++
                                console.log("score = " + score)
                                correctNoteHit = true
                            }
                            else if(DynamicDifficulty[difficultyLevel].numberOfNotes == 3 && this.yHit == true && this.y1Hit == true && this.y2Hit == true){
                                score++
                                console.log("score = " + score)
                                correctNoteHit = true
                            }
                            else{ // Wrong Note is pushed
                                score--
                                console.log("score = " + score)
                                correctNoteHit = false   
                            }
                        }
                        else{ // Wrong number of notes is pushed
                            score--
                            console.log("score = " + score)
                            correctNoteHit = false   
                        }

                        // Deducting a score point can be instantiated when the new scoring system is in place
                        // e.g. when this.x == 'a specific point' && 'var scoreAltered == false' {deduct point}



                        currentActualHitTime.h = createTime(time.getHours(), 2)
                        currentActualHitTime.m = createTime(time.getMinutes(), 2)
                        currentActualHitTime.s = createTime(time.getSeconds(), 2)
                        currentActualHitTime.ms = createTime(time.getMilliseconds(), 3)
                        currentActualHitTime.time = time.getTime()
                    }
                }
            }
            // Note Loop Around
            if(this.x<leftBoundary){ // If note moves far to the left it will delete and autocreate a new y value
                let leftOrRight
                let distanceBetweenNotes = 0
                if(resetValues == false){ 
                    if(this.y < 6.5){
                        leftOrRight =  "left"
                    }
                    else{
                        leftOrRight =  "right"
                    }
                    if(numberOfNotesInLevel > 0 && resetValues == false){ // Otherwise distanceBetweenPreviousNote will error
                        distanceBetweenNotes = previousNote-((this.y/staffSpacing)+0.5)                       
                        const noteNumberProgression = { // Capturing data for statistical analysis
                            expectedHitTime: currentExpectedHitTime,
                            actualHitTime: currentActualHitTime,
                            differenceInHitTime: currentActualHitTime.time-currentExpectedHitTime.time,
                            noteoff: noteOffTime,
                            timeHeldNote: noteOffTime.time - currentActualHitTime.time,
                            correctNote: correctNoteHit,
                            major1: this.major,
                            major2: this.major1,
                            major3:this.major2,
                            hand: leftOrRight,
                            noteEntered: octaveWeight,
                            noteRequired: (this.y/staffSpacing)+0.5,
                            noteGapBetweenEnteredAndRequired: octaveWeight-((this.y/staffSpacing)+0.5),
                            previousNoteRequired: previousNote,
                            distanceBetweenPreviousNoteRequiredAndCurrentRequired: distanceBetweenNotes,
                            noteNumberInGame: noteNumberInGame
                        }
                        userNoteProgression[numberOfNotesInLevel]=noteNumberProgression
                    }
                    previousNote = (this.y/staffSpacing)+0.5
                }
                this.x = window.innerWidth
                if(score == DynamicDifficulty[difficultyLevel].requiredScoreToProgress){
                    gameProgression[levelProgression]={
                        currentLevel: difficultyLevel,
                        numberOfNotes: DynamicDifficulty[difficultyLevel].numberOfNotes,
                        recurringNotes: DynamicDifficulty[difficultyLevel].recurringNotes,
                        hitScreenPercentage: DynamicDifficulty[difficultyLevel].hitScreenPercentage,
                        requiredScoreToProgress: DynamicDifficulty[difficultyLevel].requiredScoreToProgress,
                        requiredScoreToRegress: DynamicDifficulty[difficultyLevel].requiredScoreToRegress,
                        numberofNotesinLevel: numberOfNotesInLevel,  
                        userNoteProgression: userNoteProgression
                    }
                    difficultyLevel++
                    console.log(gameProgression)
                    levelProgression++
                    userNoteProgression = {}
                    score = 0
                    numberOfNotesInLevel = 0
                }
                else if(score == DynamicDifficulty[difficultyLevel].requiredScoreToRegress){
                    gameProgression[levelProgression]={
                        currentLevel: difficultyLevel,
                        numberOfNotes: DynamicDifficulty[difficultyLevel].numberOfNotes,
                        recurringNotes: DynamicDifficulty[difficultyLevel].recurringNotes,
                        hitScreenPercentage: DynamicDifficulty[difficultyLevel].hitScreenPercentage,
                        requiredScoreToProgress: DynamicDifficulty[difficultyLevel].requiredScoreToProgress,
                        requiredScoreToRegress: DynamicDifficulty[difficultyLevel].requiredScoreToRegress,
                        numberofNotesinLevel: numberOfNotesInLevel,  
                        userNoteProgression: userNoteProgression
                    }
                    difficultyLevel--
                    console.log(gameProgression)
                    levelProgression++
                    userNoteProgression = {}
                    score = 0
                    numberOfNotesInLevel = 0
                }
                switch(difficultyLevel){
                    case 1: // random 4 notes
                        this.y = staffSpacing * noteGenerator(trebleValues,DynamicDifficulty[difficultyLevel].trebleGeneratorSize)
                        this.image = noteImage
                        this.major = true
                        break
                    case 2: // roll up and down 7 notes to teach moving fingers correctly
                        this.y = staffSpacing * cycleNotes
                        this.major = true
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
                    case 3: // random majors in octave
                        this.y = staffSpacing * noteGenerator(trebleValues,DynamicDifficulty[difficultyLevel].trebleGeneratorSize)
                        this.image = noteImage
                        this.major = true
                        break
                    case 4: // roll up and down including sharps somehow
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
                    case 5: // random notes including sharps
                        let trebleSharpValue
                        if(Math.random()>DynamicDifficulty[5].sharpChance){
                            this.image = noteImage
                            this.major = true
                            this.y = trebleValues[Math.floor(Math.random() * 7)+1] * staffSpacing
                        }
                        else{
                            this.image = sharpImage
                            this.major = false
                            trebleSharpValue = Math.floor(Math.random() * 7)+1
                            if(trebleSharpValue == 2 || trebleSharpValue == 3.5){
                                trebleSharpValue ++
                            }
                            this.y = trebleValues[trebleSharpValue] * staffSpacing
                        }
                        this.y1 = null
                        this.y2 = null
                        break
                    case 6: // 3 note chords
                        // y Note
                        if(trebleChords[chordCycle][1][1] == "major"){
                            this.image = noteImage
                            this.major = true
                        }
                        else if(trebleChords[chordCycle][1][1] == "sharp"){
                            this.image = sharpImage
                            this.major = false
                        }
                        this.y = trebleChords[chordCycle][1][0] * staffSpacing
                        // y1 Note
                        if(trebleChords[chordCycle][2][1] == "major"){
                            this.image1 = noteImage
                            this.major = true
                        }
                        else if(trebleChords[chordCycle][2][1] == "sharp"){
                            this.image1 = sharpImage
                            this.major = false
                        }
                        this.y1 = trebleChords[chordCycle][2][0] * staffSpacing
                        // y2 Note
                        if(trebleChords[chordCycle][3][1] == "major"){
                            this.image2 = noteImage
                            this.major = true
                        }
                        else if(trebleChords[chordCycle][3][1] == "sharp"){
                            this.image2 = sharpImage
                            this.major = false
                        }
                        this.y2 = trebleChords[chordCycle][3][0] * staffSpacing
                        chordCycle++
                        if(chordCycle > 12){
                            chordCycle = 1
                        }
                        break
                    case 7: // 3 note chords
                        if(trebleChords[chordCycle][1][1] == "major"){
                            this.image = noteImage
                            this.major = true
                        }
                        else if(trebleChords[chordCycle][1][1] == "sharp"){
                            this.image = sharpImage
                            this.major = false
                        }
                        this.y = trebleChords[chordCycle][1][0] * staffSpacing
                        // y1 Note
                        if(trebleChords[chordCycle][2][1] == "major"){
                            this.image1 = noteImage
                            this.major = true
                        }
                        else if(trebleChords[chordCycle][2][1] == "sharp"){
                            this.image1 = sharpImage
                            this.major = false
                        }
                        this.y1 = trebleChords[chordCycle][2][0] * staffSpacing
                        // y2 Note
                        if(trebleChords[chordCycle][3][1] == "major"){
                            this.image2 = noteImage
                            this.major = true
                        }
                        else if(trebleChords[chordCycle][3][1] == "sharp"){
                            this.image2 = sharpImage
                            this.major = false
                        }
                        this.y2 = trebleChords[chordCycle][3][0] * staffSpacing
                        chordCycle = Math.floor(Math.random()*12)+1
                        break
                    case 8: // random 4 notes
                        this.y1 = null
                        this.y2 = null
                        this.y = staffSpacing * noteGenerator(bassValues,DynamicDifficulty[difficultyLevel].bassGeneratorSize)
                        this.image = noteImage
                        this.major = true
                        break
                    case 9: // roll up and down 7 notes to teach moving fingers correctly
                        this.y = staffSpacing * bassCycle
                        this.major = true
                        if(DynamicDifficulty[9].down == false){ // Scrolls up and down through the octave
                            bassCycle=bassCycle-0.5
                            if(bassCycle<7.5){
                                DynamicDifficulty[9].down = true
                            } 
                        }
                        else if (DynamicDifficulty[9].down == true){
                            bassCycle=bassCycle+0.5
                            if(bassCycle>9.5){
                                DynamicDifficulty[9].down = false
                            }  
                        }
                        this.image = noteImage
                        break
                    case 10: // random majors in octave
                        this.y = staffSpacing * noteGenerator(bassValues,DynamicDifficulty[difficultyLevel].bassGeneratorSize)
                        this.image = noteImage
                        this.major = true
                        break
                    case 11: // roll up and down including sharps
                        this.y = staffSpacing * bassCycle
                        if(DynamicDifficulty[11].down == false){ // Scrolls up and down through the octave
                            if(noteLetter[bassSharpCycle].includes("#")){
                                this.image = sharpImage
                                this.major = false
                                bassSharpCycle++
                                bassCycle=bassCycle-0.5
                            }
                            else{
                                this.image = noteImage
                                this.major = true
                                bassSharpCycle++
                            
                                if(bassSharpCycle > 11){
                                    bassSharpCycle = 0
                                }
                                if(!noteLetter[bassSharpCycle].includes("#")){
                                    bassCycle=bassCycle-0.5
                                }
                            }
                            if(noteLetter[bassSharpCycle] == "C"){
                                DynamicDifficulty[11].down = true
                            } 
                        }
                        else if (DynamicDifficulty[11].down == true){
                            if(noteLetter[bassSharpCycle].includes("#")){
                                this.image = sharpImage
                                this.major = false
                                bassSharpCycle--
                            }
                            else{
                                this.image = noteImage
                                this.major = true
                                bassSharpCycle--
                                bassCycle=bassCycle+0.5
                            }
                            if(bassSharpCycle < 0){
                                bassSharpCycle = 11
                            }
                            if(noteLetter[bassSharpCycle] == "C"){
                                DynamicDifficulty[11].down = false
                            } 
                        }
                        break
                    case 12: // random notes including sharps
                        let bassSharpValue
                        if(Math.random()>DynamicDifficulty[12].sharpChance){
                            this.image = noteImage
                            this.major = true
                            this.y = bassValues[Math.floor(Math.random() * 7)+1] * staffSpacing
                        }
                        else{
                            this.image = sharpImage
                            this.major = false
                            bassSharpValue = Math.floor(Math.random() * 7)+1
                            if(bassSharpValue == 1 || bassSharpValue == 5){
                                bassSharpValue --
                            }
                            this.y = bassValues[bassSharpValue] * staffSpacing
                        }                            
                        this.y1 = null
                        this.y2 = null
                        break
                    case 13: // 3 note chords
                        // y Note
                        if(bassChords[chordCycle][1][1] == "major"){
                            this.image = noteImage
                            this.major = true
                        }
                        else if(bassChords[chordCycle][1][1] == "sharp"){
                            this.image = sharpImage
                            this.major = false
                        }
                        this.y = bassChords[chordCycle][1][0] * staffSpacing
                        // y1 Note
                        if(bassChords[chordCycle][2][1] == "major"){
                            this.image1 = noteImage
                            this.major = true
                        }
                        else if(bassChords[chordCycle][2][1] == "sharp"){
                            this.image1 = sharpImage
                            this.major = false
                        }
                        this.y1 = bassChords[chordCycle][2][0] * staffSpacing
                        // y2 Note
                        if(bassChords[chordCycle][3][1] == "major"){
                            this.image2 = noteImage
                            this.major = true
                        }
                        else if(bassChords[chordCycle][3][1] == "sharp"){
                            this.image2 = sharpImage
                            this.major = false
                        }
                        this.y2 = bassChords[chordCycle][3][0] * staffSpacing
                        chordCycle++
                        if(chordCycle > 12){
                            chordCycle = 1
                        }
                        break
                    case 14: // 3 note chords in different order
                        if(bassChords[chordCycle][1][1] == "major"){
                            this.image = noteImage
                            this.major = true
                        }
                        else if(bassChords[chordCycle][1][1] == "sharp"){
                            this.image = sharpImage
                            this.major = false
                        }
                        this.y = bassChords[chordCycle][1][0] * staffSpacing
                        // y1 Note
                        if(bassChords[chordCycle][2][1] == "major"){
                            this.image1 = noteImage
                            this.major = true
                        }
                        else if(bassChords[chordCycle][2][1] == "sharp"){
                            this.image1 = sharpImage
                            this.major = false
                        }
                        this.y1 = bassChords[chordCycle][2][0] * staffSpacing
                        // y2 Note
                        if(bassChords[chordCycle][3][1] == "major"){
                            this.image2 = noteImage
                            this.major = true
                        }
                        else if(bassChords[chordCycle][3][1] == "sharp"){
                            this.image2 = sharpImage
                            this.major = false
                        }
                        this.y2 = bassChords[chordCycle][3][0] * staffSpacing
                        chordCycle = Math.floor(Math.random()*12)+1
                        break
                }   
            }   
            this.x -= DynamicDifficulty[difficultyLevel].speed
            numberOfNotesInLevel++
            // Reset boolean values
            this.recordedExpectedTime = false
            this.yHit = false
            this.y1Hit = false
            this.y2Hit = false
        }    
        else{
            cancelAnimationFrame(movePlayableNotes)
            this.x = window.innerWidth
        }
    }
    display(){ // Displays the notes based on the x and y values created in the update function
        ctx.drawImage(this.image,this.x, this.y, staffSpacing,staffSpacing)
        if(this.y1 != null && this.y2 != null){
            ctx.drawImage(this.image1,this.x, this.y1, staffSpacing,staffSpacing)
            ctx.drawImage(this.image2,this.x, this.y2, staffSpacing,staffSpacing)
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
                timeDelay = (window.innerWidth-(leftBoundary-(0.5*staffSpacing))/(averageFPS/a)*1000)/DynamicDifficulty[difficultyLevel].speed
            }
            else{
                timeDelay = 0
            }
            ctx.fillStyle = "white"
            ctx.fillRect(leftBoundary,0,canvas.width,staffHeight)
            staffNoteHit(staffNumber,notePressed,octave)
            drawStaff()
        }
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
        
        requestAnimationFrame(movePlayableNotes) // Repeats this function to create an animation
    }
    else{
        ctx.fillStyle = "white"
        ctx.fillRect(leftBoundary,0,canvas.width,staffHeight)
        drawStaff()
    }
}