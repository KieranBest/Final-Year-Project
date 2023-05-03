let individualNotes = [];
function retrieveIndividualNotes(allData){
    let numberOfNotes = 0;
    for(let storageLength = 0; storageLength < localStorage.length; storageLength++){
        if(allData[storageLength] != null){
            for(let levelNumber = 1; levelNumber <= Object.keys(allData[storageLength]).length; levelNumber++){
                for(let noteNumber = 0; noteNumber < Object.keys(allData[storageLength][levelNumber].userNoteProgression).length+1; noteNumber++){
                    if(allData[storageLength][levelNumber].userNoteProgression[noteNumber] != undefined){
                        individualNotes[numberOfNotes] = allData[storageLength][levelNumber].userNoteProgression[noteNumber];
                        numberOfNotes++;
                    }
                }
            }
        }
    }
    retrieveTimeDifferenceHit(individualNotes);
    retrieveNoteCodes(individualNotes);
}

let timeDifferenceHit = [];
let expectedHitTimes = [];
let NoOfNotes = [];
function retrieveTimeDifferenceHit(individualNotes){
    for(let numberOfNote = 0; numberOfNote < individualNotes.length; numberOfNote++){
        timeDifferenceHit[numberOfNote] = individualNotes[numberOfNote].differenceInHitTime;
        expectedHitTimes[numberOfNote] = 0;
        NoOfNotes[numberOfNote] = {noteNumber: numberOfNote};
    }
}

let numberOfCorrectHits = 0;
let numberOfWrongHits = 0;
let numberOfWrongNumberHits = 0;
let numberOfOutOfBoundHits = 0;
let numberOfMissedNotes = 0;
function retrieveNoteCodes(individualNotes){
    for(let numberOfNotes = 0; numberOfNotes < individualNotes.length; numberOfNotes++){
        if(individualNotes[numberOfNotes].deductionCode == 0){
            numberOfCorrectHits++;
        }
        else if(individualNotes[numberOfNotes].deductionCode == 1){
            numberOfWrongHits++;
        }
        else if(individualNotes[numberOfNotes].deductionCode == 2){
            numberOfWrongNumberHits++;
        }
        else if(individualNotes[numberOfNotes].deductionCode == 3){
            numberOfOutOfBoundHits++;
        }
        else if(individualNotes[numberOfNotes].deductionCode == 4){
            numberOfMissedNotes++;
        }
    }
}

let totalLength = 0;
let playPeriodNotes = [];
function retrievePlaytimePeriods(allData){
    for(let storageLength = 0; storageLength < localStorage.length; storageLength++){
        totalLength = 0;
        if(allData[storageLength] != null){
            playPeriodNotes[storageLength] = {};
            for(let levelNumber = 1; levelNumber <= Object.keys(allData[storageLength]).length; levelNumber++){
                for(let noteNumber = 1; noteNumber < Object.keys(allData[storageLength][levelNumber].userNoteProgression).length+1; noteNumber++){
                    totalLength ++;
                    playPeriodNotes[storageLength][totalLength] = allData[storageLength][levelNumber].userNoteProgression[noteNumber];
                }
            }
        }
    }
    retrieveNoteCodesFromPeriods(playPeriodNotes);
}

let playPeriodCodes = [];
function retrieveNoteCodesFromPeriods(playPeriodNotes){
    for(let numberOfPeriods = 0; numberOfPeriods < playPeriodNotes.length; numberOfPeriods++){
        let numOfCorrectHits = 0;
        let numOfWrongHits = 0;
        let numOfWrongNumberHits = 0;
        let numOfOutOfBoundHits = 0;
        let numOfMissedNotes = 0;
        playPeriodCodes[numberOfPeriods] = {};
        for(let numberOfNotes = 1; numberOfNotes < Object.keys(playPeriodNotes[numberOfPeriods]).length + 1; numberOfNotes++){
            if(playPeriodNotes[numberOfPeriods][numberOfNotes].deductionCode == 0){
                numOfCorrectHits = numOfCorrectHits + 1;
            }
            else if(playPeriodNotes[numberOfPeriods][numberOfNotes].deductionCode == 1){
                numOfWrongHits = numOfWrongHits + 1;
            }
            else if(playPeriodNotes[numberOfPeriods][numberOfNotes].deductionCode == 2){
                numOfWrongNumberHits = numOfWrongNumberHits + 1;
            }
            else if(playPeriodNotes[numberOfPeriods][numberOfNotes].deductionCode == 3){
                numOfOutOfBoundHits = numOfOutOfBoundHits + 1;
            }
            else if(playPeriodNotes[numberOfPeriods][numberOfNotes].deductionCode == 4){
                numOfMissedNotes = numOfMissedNotes + 1;
            }
        }
        playPeriodCodes[numberOfPeriods] = [numOfCorrectHits,numOfWrongHits,numOfWrongNumberHits,numOfOutOfBoundHits,numOfMissedNotes];
    }
}

console.log("allData")
console.log(allData)
console.log("playPeriodNotes")
console.log(playPeriodNotes)
console.log("playPeriodCodes")
console.log(playPeriodCodes)
