let individualNotes = []
let playPeriodNotes = []
playPeriodNotes[0] = {}
function retrieveIndividualNotes(allData){
    let numberOfNotes = 0
    for(let storageLength = 0; storageLength < localStorage.length; storageLength++){
        if(allData[storageLength] != null){
            for(let levelNumber = 1; levelNumber <= Object.keys(allData[storageLength]).length; levelNumber++){
                for(let noteNumber = 0; noteNumber < Object.keys(allData[storageLength][levelNumber].userNoteProgression).length+1; noteNumber++){
                    if(allData[storageLength][levelNumber].userNoteProgression[noteNumber] != undefined){
                        individualNotes[numberOfNotes] = allData[storageLength][levelNumber].userNoteProgression[noteNumber]
                        playPeriodNotes[storageLength][numberOfNotes] = allData[storageLength][levelNumber].userNoteProgression[noteNumber]
                        numberOfNotes++    
                    }                    
                }
            }
        }
    }
    retrieveTimeDifferenceHit(individualNotes)
    retrieveExpectedHitTimes(individualNotes)
    combineTime(individualNotes)
    retrieveNoteCodes(individualNotes)
    retrieveNoteCodesFromPeriods(playPeriodNotes)
}

let numberOfNotes = []
let timeDifferenceHit = []
function retrieveTimeDifferenceHit(individualNotes){
    for(let numberOfNote = 0; numberOfNote < individualNotes.length; numberOfNote++){
        timeDifferenceHit[numberOfNote] = individualNotes[numberOfNote].differenceInHitTime
        numberOfNotes[numberOfNote] = numberOfNote
    }
}

let expectedHitTimes = []
function retrieveExpectedHitTimes(individualNotes){
    for(let numberOfNotes = 0; numberOfNotes < individualNotes.length; numberOfNotes++){
        expectedHitTimes[numberOfNotes] = 0
    }
}

let combinedTimes = []
function combineTime(individualNotes){
    for(let numberOfNote = 0; numberOfNote < individualNotes.length; numberOfNote++){
        combinedTimes[numberOfNote] = [
            individualNotes[numberOfNote].differenceInHitTime, 0
        ]
    }
}


console.log(timeDifferenceHit)
console.log(expectedHitTimes)
console.log(combinedTimes)































let numberOfCorrectHits = 0
let numberOfWrongHits = 0
let numberOfWrongNumberHits = 0
let numberOfOutOfBoundHits = 0
let numberOfMissedNotes = 0
function retrieveNoteCodes(individualNotes){
    for(let numberOfNotes = 0; numberOfNotes < individualNotes.length; numberOfNotes++){
        if(individualNotes[numberOfNotes].deductionCode == 0){
            numberOfCorrectHits++
        }
        else if(individualNotes[numberOfNotes].deductionCode == 1){
            numberOfWrongHits++
        }
        else if(individualNotes[numberOfNotes].deductionCode == 2){
            numberOfWrongNumberHits++
        }
        else if(individualNotes[numberOfNotes].deductionCode == 3){
            numberOfOutOfBoundHits++
        }
        else if(individualNotes[numberOfNotes].deductionCode == 4){
            numberOfMissedNotes++
        }
    }
}

let playPeriodCodes = []
playPeriodCodes[0] = {}
function retrieveNoteCodesFromPeriods(playPeriodNotes){
    for(let numberOfPeriods = 0; numberOfPeriods < playPeriodNotes.length; numberOfPeriods++){
        playPeriodCodes[numberOfPeriods].numberOfCorrectHits = 0
        playPeriodCodes[numberOfPeriods].numberOfWrongHits = 0
        playPeriodCodes[numberOfPeriods].numberOfWrongNumberHits = 0
        playPeriodCodes[numberOfPeriods].numberOfOutOfBoundHits = 0
        playPeriodCodes[numberOfPeriods].numberOfMissedNotes = 0
        for(let numberOfNotes = 0; numberOfNotes < individualNotes.length; numberOfNotes++){
            if(playPeriodNotes[numberOfPeriods][numberOfNotes].deductionCode == 0){
                playPeriodCodes[numberOfPeriods].numberOfCorrectHits++
            }
            else if(playPeriodNotes[numberOfPeriods][numberOfNotes].deductionCode == 1){
                playPeriodCodes[numberOfPeriods].numberOfWrongHits++
            }
            else if(playPeriodNotes[numberOfPeriods][numberOfNotes].deductionCode == 2){
                playPeriodCodes[numberOfPeriods].numberOfWrongNumberHits++
            }
            else if(playPeriodNotes[numberOfPeriods][numberOfNotes].deductionCode == 3){
                playPeriodCodes[numberOfPeriods].numberOfOutOfBoundHits++
            }
            else if(playPeriodNotes[numberOfPeriods][numberOfNotes].deductionCode == 4){
                playPeriodCodes[numberOfPeriods].numberOfMissedNotes++
            }
        }    
    }
}

