let cycleNotes = 1;
let bassCycle = 10;
let sharpNoteCycle = 7;
let bassSharpCycle = 0;
let chordCycle = 1;
let songCycle = 1;
let levelProgression = 1;
let correctNoteHit = Boolean(false);
let userNoteProgression= {};
let gameProgression = {};
let numberOfNotesInLevel = 0;
let noteNumberInGame = 0;
let resetValues = Boolean(true);
let missedNote = Boolean(true);
let previousNote = null;
let deductionReason;
let deductionCode;
let scoreMultiplier = 1;
// Class for animated notes
class animatingNotes{
    constructor (x,y,yHit,y1,y1Hit,y2,y2Hit,major,major1,major2){
        this.x = x;
        this.y = y;
        this.yHit = yHit;
        this.y1 = y1;
        this.y1Hit = y1Hit;
        this.y2 = y2;
        this.y2Hit = y2Hit;
        this.yValues = [];
        this.image = new Image(135,137); //pixel size
        this.image1 = new Image(135,137); //pixel size
        this.image2 = new Image(135,137); //pixel size
        this.images = [];
        this.major = major;
        this.major1 = major1;
        this.major2 = major2;
        this.recordedExpectedTime = Boolean(false);
        this.scoreAdjusted = Boolean(false);
        this.doNotDeductScore = Boolean(false);
        this.bonusScore = Boolean(false);

    }
    update(){ // Updates and changes each animated notes x variable according to speed
        if(toggle){
            if(this.x <= leftBoundary+(window.innerWidth*DynamicDifficulty[difficultyLevel].hitScreenPercentage)){
                if(this.recordedExpectedTime == false){
                    this.recordedExpectedTime = true;
                    let ExpectedTime = new Date(); // Creates a time that the note will reach the desired hit point
                    currentExpectedHitTime.h = ExpectedTime.getHours();
                    currentExpectedHitTime.m = ExpectedTime.getMinutes();
                    currentExpectedHitTime.s = ExpectedTime.getSeconds();
                    currentExpectedHitTime.ms = ExpectedTime.getMilliseconds();
                    currentExpectedHitTime.time = ExpectedTime.getTime();
                    if(noteNumberInGame > 1 && resetValues == true){ // Needs to be reset so it does not record when the first 2 notes are generated
                        resetValues = false;
                        noteNumberInGame = 0;
                        numberOfNotesInLevel = 0;
                    }
                }
            }
            // Scoring
            if(pressed){
                if(this.x > lowerBoundary && this.x < upperBoundary){
                    if(!keyPressed){ // Stops constantly adding to score whilst holding note
                        keyPressed = true;
                        let hitTime = new Date(); // Creates a time that the user pressed a note
                        if(notesHeldList.length == DynamicDifficulty[difficultyLevel].numberOfNotes){
                            let notesHeldListValue;
                            for(var values in notesHeldList){
                                if(majorKeyPos.includes(findNoteLetter(notesHeldList[values]))){
                                    let notesHeldOctave =  parseInt(notesHeldList[values]/12) - 4;
                                    let notesHeldLetter = findNoteLetter(notesHeldList[values]);
                                    let notesHeldValue = staffShtMajorPos.indexOf(notesHeldLetter);
                                    if(notesHeldOctave === 1){
                                        notesHeldListValue = (notesHeldValue*0.5+4);
                                    }else if(notesHeldOctave === 0){
                                        notesHeldListValue = (notesHeldValue*0.5+4)+3.5;
                                    }else if(notesHeldOctave === 2){
                                        notesHeldListValue = (notesHeldValue*0.5+4)-3.5;
                                    }else notesHeldListValue = 0;
                                }else if(sharpKeyPos.includes(findNoteLetter(notesHeldList[values]))) {
                                    let notesHeldOctave =  parseInt(notesHeldList[values]/12) - 4;
                                    let notesHeldLetter = findNoteLetter(notesHeldList[values]);
                                    let notesHeldValue = staffShtSharpPos.indexOf(notesHeldLetter);
                                    if(notesHeldOctave === 1){
                                        notesHeldListValue = (notesHeldValue*0.5+4);
                                    }else if(notesHeldOctave === 0){
                                        notesHeldListValue = (notesHeldValue*0.5+4)+3.5;
                                    }else if(notesHeldOctave === 2){
                                        notesHeldListValue = (notesHeldValue*0.5+4)-3.5;
                                    }else notesHeldListValue = 0;
                                }
                                if((this.y/staffSpacing)+0.5 == notesHeldListValue && this.major == majorPressed){
                                    this.yHit = true;
                                }
                                if((this.y1/staffSpacing)+0.5 == notesHeldListValue && this.major == majorPressed){
                                    this.y1Hit = true;
                                }
                                if((this.y2/staffSpacing)+0.5 == notesHeldListValue && this.major == majorPressed){
                                    this.y2Hit = true;
                                }
                                if(this.x > lowerBoundaryMultiplier && this.x < upperBoundaryMultiplier){
                                    this.bonusScore = true;
                                }
                            }
                            // Checks to see if number of notes required are pressed correctly
                            if(DynamicDifficulty[difficultyLevel].numberOfNotes == 1 && this.yHit == true){
                                if(this.bonusScore==true){
                                    score++;
                                }
                                score++;
                                console.log("score = " + score);
                                deductionReason = "";
                                deductionCode = 0;
                                correctNoteHit = true;
                                this.scoreAdjusted = true;
                            }
                            else if(DynamicDifficulty[difficultyLevel].numberOfNotes == 2 && this.yHit == true && this.y1Hit == true){
                                if(this.bonusScore==true){
                                    score++;
                                }
                                score++;
                                console.log("score = ");
                                deductionReason = "";
                                deductionCode = 0;
                                correctNoteHit = true;
                                this.scoreAdjusted = true;
                            }
                            else if(DynamicDifficulty[difficultyLevel].numberOfNotes == 3 && this.yHit == true && this.y1Hit == true && this.y2Hit == true){
                                if(this.bonusScore==true){
                                    score++;
                                }
                                score++;
                                console.log("score = " + score);
                                deductionReason = "";
                                deductionCode = 0;
                                correctNoteHit = true;
                                this.scoreAdjusted = true;
                            }
                            else{ // Wrong Note is pushed
                                deductionReason = "Wrong Note";
                                deductionCode = 1;
                                score--;
                                console.log("score = " + score);
                                correctNoteHit = false;
                                this.scoreAdjusted = true;
                            }
                        }
                        else if(difficultyLevel == 15){
                            if(notesHeldList.length == (DynamicDifficulty[difficultyLevel].numberOfNotes-1) && this.y1Hit == true){
                                for(var value in notesHeldList){
                                    if(majorKeyPos.includes(findNoteLetter(notesHeldList[value]))){
                                        let notesHeldOctave =  parseInt(notesHeldList[value]/12) - 4;
                                        let notesHeldLetter = findNoteLetter(notesHeldList[value]);
                                        let notesHeldValue = staffShtMajorPos.indexOf(notesHeldLetter);
                                        if(notesHeldOctave === 1){
                                            notesHeldListValue = (notesHeldValue*0.5+4);
                                        }else if(notesHeldOctave === 0){
                                            notesHeldListValue = (notesHeldValue*0.5+4)+3.5;
                                        }else if(notesHeldOctave === 2){
                                            notesHeldListValue = (notesHeldValue*0.5+4)-3.5;
                                        }else notesHeldListValue = 0;
                                    }else if(sharpKeyPos.includes(findNoteLetter(notesHeldList[value]))) {
                                        let notesHeldOctave =  parseInt(notesHeldList[value]/12) - 4;
                                        let notesHeldLetter = findNoteLetter(notesHeldList[value]);
                                        let notesHeldValue = staffShtSharpPos.indexOf(notesHeldLetter);
                                        if(notesHeldOctave === 1){
                                            notesHeldListValue = (notesHeldValue*0.5+4);
                                        }else if(notesHeldOctave === 0){
                                            notesHeldListValue = (notesHeldValue*0.5+4)+3.5;
                                        }else if(notesHeldOctave === 2){
                                            notesHeldListValue = (notesHeldValue*0.5+4)-3.5;
                                        }else notesHeldListValue = 0;
                                    }
                                    if((this.y/staffSpacing)+0.5 == notesHeldListValue && this.major == majorPressed){
                                        this.yHit = true;
                                    }
                                    if(this.x > lowerBoundaryMultiplier && this.x < upperBoundaryMultiplier){
                                        this.bonusScore = true;
                                    }
                                }
                                if(this.yHit == true && this.y1Hit == true){
                                    if(this.bonusScore==true){
                                        score++;
                                    }
                                    score++;
                                    console.log("score = " + score);
                                    deductionReason = "";
                                    deductionCode = 0;
                                    correctNoteHit = true;
                                    this.scoreAdjusted = true;
                                }
                                else{ // Wrong Note is pushed
                                    deductionReason = "Wrong Note";
                                    deductionCode = 1;
                                    score--;
                                    console.log("score = " + score);
                                    correctNoteHit = false;
                                    this.scoreAdjusted = true;
                                }
                            }
                        }
                        else if(this.doNotDeductScore == false){ // Wrong number of notes is pushed
                            deductionReason = "Wrong Number of notes";
                            deductionCode = 2;
                            score--;
                            console.log("score = " + score);
                            correctNoteHit = false;
                            this.scoreAdjusted = true;
                        }
                        currentActualHitTime.h = hitTime .getHours();
                        currentActualHitTime.m = hitTime .getMinutes();
                        currentActualHitTime.s = hitTime .getSeconds();
                        currentActualHitTime.ms = hitTime .getMilliseconds();
                        currentActualHitTime.time = hitTime .getTime();
                    }
                }
                else{
                    // Out of bounds
                    if(this.scoreAdjusted == false && resetValues == false && this.x<hitMarker && this.doNotDeductScore == false){
                        this.scoreAdjusted = true; // Stops constantly deducting from score
                        let missedTime = new Date(); // Creates a time that the user pressed a note
                        score--;
                        deductionReason = "Out of bounds";
                        deductionCode = 3;
                        console.log("score = " + score);
                        correctNoteHit = false;
                        currentActualHitTime.h = missedTime.getHours();
                        currentActualHitTime.m = missedTime.getMinutes();
                        currentActualHitTime.s = missedTime.getSeconds();
                        currentActualHitTime.ms = missedTime.getMilliseconds();
                        currentActualHitTime.time = missedTime.getTime();
                    }
                }
            }
            // Note Loop Around
            if(this.x<leftBoundary){ // If note oves far to the left it will delete and autocreate a new y value
                if(this.scoreAdjusted == false && resetValues == false && this.doNotDeductScore == false){ // Missed the note
                    score--;
                    deductionReason = "Missed Note";
                    deductionCode = 4;
                    console.log("score = " + score);
                    currentActualHitTime.h = null;
                    currentActualHitTime.m = null;
                    currentActualHitTime.s = null;
                    currentActualHitTime.ms = null;
                    currentActualHitTime.time = null;
                    noteOffTime.h = null;
                    noteOffTime.m = null;
                    noteOffTime.s = null;
                    noteOffTime.ms = null;
                    noteOffTime.time = null;
                    correctNoteHit = null;
                    this.major = null;
                    this.major1 = null;
                    this.major2 = null;
                    octaveWeight = 0;
                    missedNote = true;
                }
                let leftOrRight;
                let distanceBetweenNotes = 0;
                noteNumberInGame++;
                numberOfNotesInLevel++;
                if(resetValues == false){
                    if(this.y < 6.5){
                        leftOrRight =  "left";
                    }
                    else{
                        leftOrRight =  "right";
                    }
                    if(numberOfNotesInLevel > 0){ // Otherwise distanceBetweenPreviousNote will error
                        distanceBetweenNotes = previousNote-((this.y/staffSpacing)+0.5);
                        let differenceInHit;
                        if(deductionCode == 4){
                            differenceInHit = null;
                        }
                        else{
                            differenceInHit = currentActualHitTime.time-currentExpectedHitTime.time;
                        }
                        const noteNumberProgression = { // Capturing data for statistical analysis
                            expectedHitTime: currentExpectedHitTime,
                            actualHitTime: currentActualHitTime,
                            differenceInHitTime: differenceInHit,
                            noteoff: noteOffTime,
                            timeHeldNote: noteOffTime.time - currentActualHitTime.time,
                            correctNote: correctNoteHit,
                            correctYHit: this.yHit,
                            correctY1Hit: this.y1Hit,
                            correctY2Hit: this.y2Hit,
                            major1: this.major,
                            major2: this.major1,
                            major3:this.major2,
                            hand: leftOrRight,
                            noteEntered: octaveWeight,
                            noteRequired: (this.y/staffSpacing)+0.5,
                            noteGapBetweenEnteredAndRequired: octaveWeight-((this.y/staffSpacing)+0.5),
                            previousNoteRequired: previousNote,
                            distanceBetweenPreviousNoteRequiredAndCurrentRequired: distanceBetweenNotes,
                            noteNumberInGame: noteNumberInGame,
                            missedNote: missedNote,
                            deductionReason: deductionReason,
                            deductionCode: deductionCode,
                            withinExtraBoundary: this.bonusScore
                        };
                        userNoteProgression[numberOfNotesInLevel]=noteNumberProgression;
                    }
                    previousNote = (this.y/staffSpacing)+0.5;
                }
                this.x = window.innerWidth;
                if(score >= DynamicDifficulty[difficultyLevel].requiredScoreToProgress){
                    gameProgression[levelProgression] = {
                        currentLevel: difficultyLevel,
                        numberOfNotes: DynamicDifficulty[difficultyLevel].numberOfNotes,
                        recurringNotes: DynamicDifficulty[difficultyLevel].recurringNotes,
                        hitScreenPercentage: DynamicDifficulty[difficultyLevel].hitScreenPercentage,
                        requiredScoreToProgress: DynamicDifficulty[difficultyLevel].requiredScoreToProgress,
                        requiredScoreToRegress: DynamicDifficulty[difficultyLevel].requiredScoreToRegress,
                        numberofNotesinLevel: numberOfNotesInLevel,
                        userNoteProgression: userNoteProgression
                    };
                    difficultyLevel++;
                    console.log(gameProgression);
                    levelProgression++;
                    userNoteProgression = {};
                    score = 0;
                    numberOfNotesInLevel = 0;
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
                    };
                    difficultyLevel--;
                    console.log(gameProgression);
                    levelProgression++;
                    userNoteProgression = {};
                    score = 0;
                    numberOfNotesInLevel = 0;
                }
                // Reset values
                this.recordedExpectedTime = false;
                this.yHit = false;
                this.y1Hit = false;
                this.y2Hit = false;
                this.scoreAdjusted = false;
                missedNote = false;
                scoreMultiplier = 1;
                this.bonusScore = false;
                currentExpectedHitTime = {};
                currentActualHitTime = {};
                noteOffTime = {};

                switch(difficultyLevel){
                    case 1: // random 4 notes
                        this.y = staffSpacing * noteGenerator(trebleValues,DynamicDifficulty[difficultyLevel].trebleGeneratorSize);
                        this.image = noteImage;
                        this.major = true;
                        break;
                    case 2: // roll up and down 7 notes to teach moving fingers correctly
                        this.y = staffSpacing * cycleNotes;
                        this.major = true;
                        if(DynamicDifficulty[2].down == true){ // Scrolls up and down through the octave
                            cycleNotes=cycleNotes+0.5;
                            if(cycleNotes>3.5){
                                DynamicDifficulty[2].down = false;
                            }
                        }
                        else if (DynamicDifficulty[2].down == false){
                            cycleNotes=cycleNotes-0.5;
                            if(cycleNotes<1.5){
                                DynamicDifficulty[2].down = true;
                            }
                        }
                        this.image = noteImage;
                        break;
                    case 3: // random majors in octave
                        this.y = staffSpacing * noteGenerator(trebleValues,DynamicDifficulty[difficultyLevel].trebleGeneratorSize);
                        this.image = noteImage;
                        this.major = true;
                        break;
                    case 4: // roll up and down including sharps somehow
                        this.y = staffSpacing * cycleNotes;
                        if(DynamicDifficulty[4].down == true){ // Scrolls up and down through the octave
                            if(noteLetter[sharpNoteCycle].includes("#")){
                                this.image = sharpImage;
                                this.major = false;
                                sharpNoteCycle--;
                            }
                            else{
                                this.image = noteImage;
                                this.major = true;
                                sharpNoteCycle--;
                                cycleNotes=cycleNotes+0.5;
                            }
                            if(sharpNoteCycle < 0){
                                sharpNoteCycle = 11;
                            }
                            if(noteLetter[sharpNoteCycle] == "G"){
                                DynamicDifficulty[4].down = false;
                            }
                        }
                        else if (DynamicDifficulty[4].down == false){
                            if(noteLetter[sharpNoteCycle].includes("#")){
                                this.image = sharpImage;
                                this.major = false;
                                sharpNoteCycle++;
                                cycleNotes=cycleNotes-0.5;
                            }
                            else{
                                this.image = noteImage;
                                this.major = true;
                                sharpNoteCycle++;
                                if(sharpNoteCycle > 11){
                                    sharpNoteCycle = 0;
                                }
                                if(!noteLetter[sharpNoteCycle].includes("#")){
                                    cycleNotes=cycleNotes-0.5;
                                }
                            }
                            if(noteLetter[sharpNoteCycle] == "G"){
                                DynamicDifficulty[4].down = true;
                            }
                        }
                        break;
                    case 5: // random notes including sharps
                        let trebleSharpValue;
                        if(Math.random()>DynamicDifficulty[5].sharpChance){
                            this.image = noteImage;
                            this.major = true;
                            this.y = trebleValues[Math.floor(Math.random() * 7)+1] * staffSpacing;
                        }
                        else{
                            this.image = sharpImage;
                            this.major = false;
                            trebleSharpValue = Math.floor(Math.random() * 7)+1;
                            if(trebleSharpValue == 2 || trebleSharpValue == 3.5){
                                trebleSharpValue ++;
                            }
                            this.y = trebleValues[trebleSharpValue] * staffSpacing;
                        }
                        this.y1 = null;
                        this.y2 = null;
                        break;
                    case 6: // 3 note chords
                        // y Note
                        if(trebleChords[chordCycle][1][1] == "major"){
                            this.image = noteImage;
                            this.major = true;
                        }
                        else if(trebleChords[chordCycle][1][1] == "sharp"){
                            this.image = sharpImage;
                            this.major = false;
                        }
                        this.y = trebleChords[chordCycle][1][0] * staffSpacing;
                        // y1 Note
                        if(trebleChords[chordCycle][2][1] == "major"){
                            this.image1 = noteImage;
                            this.major = true;
                        }
                        else if(trebleChords[chordCycle][2][1] == "sharp"){
                            this.image1 = sharpImage;
                            this.major = false;
                        }
                        this.y1 = trebleChords[chordCycle][2][0] * staffSpacing;
                        // y2 Note
                        if(trebleChords[chordCycle][3][1] == "major"){
                            this.image2 = noteImage;
                            this.major = true;
                        }
                        else if(trebleChords[chordCycle][3][1] == "sharp"){
                            this.image2 = sharpImage;
                            this.major = false;
                        }
                        this.y2 = trebleChords[chordCycle][3][0] * staffSpacing;
                        chordCycle++;
                        if(chordCycle > 12){
                            chordCycle = 1;
                        }
                        break;
                    case 7: // 3 note chords
                        if(trebleChords[chordCycle][1][1] == "major"){
                            this.image = noteImage;
                            this.major = true;
                        }
                        else if(trebleChords[chordCycle][1][1] == "sharp"){
                            this.image = sharpImage;
                            this.major = false;
                        }
                        this.y = trebleChords[chordCycle][1][0] * staffSpacing;
                        // y1 Note
                        if(trebleChords[chordCycle][2][1] == "major"){
                            this.image1 = noteImage;
                            this.major = true;
                        }
                        else if(trebleChords[chordCycle][2][1] == "sharp"){
                            this.image1 = sharpImage;
                            this.major = false;
                        }
                        this.y1 = trebleChords[chordCycle][2][0] * staffSpacing;
                        // y2 Note
                        if(trebleChords[chordCycle][3][1] == "major"){
                            this.image2 = noteImage;
                            this.major = true;
                        }
                        else if(trebleChords[chordCycle][3][1] == "sharp"){
                            this.image2 = sharpImage;
                            this.major = false;
                        }
                        this.y2 = trebleChords[chordCycle][3][0] * staffSpacing;
                        chordCycle = Math.floor(Math.random()*12)+1;
                        break;
                    case 8: // random 4 notes
                        this.y1 = null;
                        this.y2 = null;
                        this.y = staffSpacing * noteGenerator(bassValues,DynamicDifficulty[difficultyLevel].bassGeneratorSize);
                        this.image = noteImage;
                        this.major = true;
                        break;
                    case 9: // roll up and down 7 notes to teach moving fingers correctly
                        this.y = staffSpacing * bassCycle;
                        this.major = true;
                        if(DynamicDifficulty[9].down == false){ // Scrolls up and down through the octave
                            bassCycle=bassCycle-0.5;
                            if(bassCycle<7.5){
                                DynamicDifficulty[9].down = true;
                            }
                        }
                        else if (DynamicDifficulty[9].down == true){
                            bassCycle=bassCycle+0.5;
                            if(bassCycle>9.5){
                                DynamicDifficulty[9].down = false;
                            }
                        }
                        this.image = noteImage;
                        break;
                    case 10: // random majors in octave
                        this.y = staffSpacing * noteGenerator(bassValues,DynamicDifficulty[difficultyLevel].bassGeneratorSize);
                        this.image = noteImage;
                        this.major = true;
                        break;
                    case 11: // roll up and down including sharps
                        this.y = staffSpacing * bassCycle;
                        if(DynamicDifficulty[11].down == false){ // Scrolls up and down through the octave
                            if(noteLetter[bassSharpCycle].includes("#")){
                                this.image = sharpImage;
                                this.major = false;
                                bassSharpCycle++;
                                bassCycle=bassCycle-0.5;
                            }
                            else{
                                this.image = noteImage;
                                this.major = true;
                                bassSharpCycle++;

                                if(bassSharpCycle > 11){
                                    bassSharpCycle = 0;
                                }
                                if(!noteLetter[bassSharpCycle].includes("#")){
                                    bassCycle=bassCycle-0.5;
                                }
                            }
                            if(noteLetter[bassSharpCycle] == "C"){
                                DynamicDifficulty[11].down = true;
                            }
                        }
                        else if (DynamicDifficulty[11].down == true){
                            if(noteLetter[bassSharpCycle].includes("#")){
                                this.image = sharpImage;
                                this.major = false;
                                bassSharpCycle--;
                            }
                            else{
                                this.image = noteImage;
                                this.major = true;
                                bassSharpCycle--;
                                bassCycle=bassCycle+0.5;
                            }
                            if(bassSharpCycle < 0){
                                bassSharpCycle = 11;
                            }
                            if(noteLetter[bassSharpCycle] == "C"){
                                DynamicDifficulty[11].down = false;
                            }
                        }
                        break;
                    case 12: // random notes including sharps
                        let bassSharpValue;
                        if(Math.random()>DynamicDifficulty[12].sharpChance){
                            this.image = noteImage;
                            this.major = true;
                            this.y = bassValues[Math.floor(Math.random() * 7)+1] * staffSpacing;
                        }
                        else{
                            this.image = sharpImage;
                            this.major = false;
                            bassSharpValue = Math.floor(Math.random() * 7)+1;
                            if(bassSharpValue == 1 || bassSharpValue == 5){
                                bassSharpValue --;
                            }
                            this.y = bassValues[bassSharpValue] * staffSpacing;
                        }
                        this.y1 = null;
                        this.y2 = null;
                        break;
                    case 13: // 3 note chords
                        // y Note
                        if(bassChords[chordCycle][1][1] == "major"){
                            this.image = noteImage;
                            this.major = true;
                        }
                        else if(bassChords[chordCycle][1][1] == "sharp"){
                            this.image = sharpImage;
                            this.major = false;
                        }
                        this.y = bassChords[chordCycle][1][0] * staffSpacing;
                        // y1 Note
                        if(bassChords[chordCycle][2][1] == "major"){
                            this.image1 = noteImage;
                            this.major1 = true;
                        }
                        else if(bassChords[chordCycle][2][1] == "sharp"){
                            this.image1 = sharpImage;
                            this.major1 = false;
                        }
                        this.y1 = bassChords[chordCycle][2][0] * staffSpacing;
                        // y2 Note
                        if(bassChords[chordCycle][3][1] == "major"){
                            this.image2 = noteImage;
                            this.major2 = true;
                        }
                        else if(bassChords[chordCycle][3][1] == "sharp"){
                            this.image2 = sharpImage;
                            this.major2 = false;
                        }
                        this.y2 = bassChords[chordCycle][3][0] * staffSpacing;
                        chordCycle++;
                        if(chordCycle > 12){
                            chordCycle = 1;
                        }
                        break;
                    case 14: // 3 note chords in different order
                        if(bassChords[chordCycle][1][1] == "major"){
                            this.image = noteImage;
                            this.major = true;
                        }
                        else if(bassChords[chordCycle][1][1] == "sharp"){
                            this.image = sharpImage;
                            this.major = false;
                        }
                        this.y = bassChords[chordCycle][1][0] * staffSpacing;
                        // y1 Note
                        if(bassChords[chordCycle][2][1] == "major"){
                            this.image1 = noteImage;
                            this.major1 = true;
                        }
                        else if(bassChords[chordCycle][2][1] == "sharp"){
                            this.image1 = sharpImage;
                            this.major1 = false;
                        }
                        this.y1 = bassChords[chordCycle][2][0] * staffSpacing;
                        // y2 Note
                        if(bassChords[chordCycle][3][1] == "major"){
                            this.image2 = noteImage;
                            this.major2 = true;
                        }
                        else if(bassChords[chordCycle][3][1] == "sharp"){
                            this.image2 = sharpImage;
                            this.major2 = false;
                        }
                        this.y2 = bassChords[chordCycle][3][0] * staffSpacing;
                        chordCycle = Math.floor(Math.random()*12)+1;
                        break;
                    case 15: // Happy Birthday
                        if(happyBirthday[songCycle][1][0] == null){
                            this.y = 1;
                            this.image = noteImage;
                            this.doNotDeductScore = true;
                            this.y1Hit = true;
                            this.yHit = true;
                            this.scoreAdjusted = true;
                        }
                        else{
                            this.y = happyBirthday[songCycle][1][0]* staffSpacing;
                            this.image = noteImage;
                            this.major = true;
                            this.doNotDeductScore = false;
                        }
                        if(happyBirthday[songCycle][2][0] == null){
                            this.y1 = null;
                            this.y1Hit = true;
                        }
                        else{
                            this.y1 = happyBirthday[songCycle][2][0]* staffSpacing;
                            this.image1 = noteImage;
                            this.major1 = true;
                        }
                        songCycle++;
                        if(songCycle>46){
                            songCycle=1;
                        }
                        break;
                }
            }
            this.x -= DynamicDifficulty[difficultyLevel].speed;
        }
        else{
            cancelAnimationFrame(movePlayableNotes);
            this.x = window.innerWidth;
        }
    }
    display(){ // Displays the notes based on the x and y values created in the update function
        if(this.y2 != undefined || this.y2 != null){
            ctx.drawImage(this.image,this.x, this.y, staffSpacing,staffSpacing);
            ctx.drawImage(this.image1,this.x, this.y1, staffSpacing,staffSpacing);
            ctx.drawImage(this.image2,this.x, this.y2, staffSpacing,staffSpacing);
        }
        if(this.y1 != undefined || this.y1 != null){
            ctx.drawImage(this.image,this.x, this.y, staffSpacing,staffSpacing);
            ctx.drawImage(this.image1,this.x, this.y1, staffSpacing,staffSpacing);
        }
        if(this.y != undefined || this.y != null){
            ctx.drawImage(this.image,this.x, this.y, staffSpacing,staffSpacing);
        }
    }
}
