let individualNotes = []
function retrieveIndividualNotes(allData){
    let numberOfNotes = 0
    for(let storageLength = 0; storageLength < localStorage.length; storageLength++){
        if(allData[storageLength] != null){
            for(let levelNumber = 1; levelNumber <= Object.keys(allData[storageLength]).length; levelNumber++){
                for(let noteNumber = 0; noteNumber < Object.keys(allData[storageLength][levelNumber].userNoteProgression).length+1; noteNumber++){
                    if(allData[storageLength][levelNumber].userNoteProgression[noteNumber] != undefined){
                        individualNotes[numberOfNotes] = allData[storageLength][levelNumber].userNoteProgression[noteNumber]
                        numberOfNotes++    
                    }                    
                }
            }
        }
    }
    retrieveTimeDifferenceHit(individualNotes)
    retrieveNoteCodes(individualNotes)
}    

let timeDifferenceHit = []
let expectedHitTimes = []
let NoOfNotes = []
function retrieveTimeDifferenceHit(individualNotes){
    for(let numberOfNote = 0; numberOfNote < individualNotes.length; numberOfNote++){
        timeDifferenceHit[numberOfNote] = individualNotes[numberOfNote].differenceInHitTime
        expectedHitTimes[numberOfNote] = 0
        NoOfNotes[numberOfNote] = {noteNumber: numberOfNote}
    }
}

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

let playPeriodNotes = []
function retrievePlaytimePeriods(allData){    
    for(let storageLength = 0; storageLength < localStorage.length; storageLength++){
        if(allData[storageLength] != null){
            playPeriodNotes[storageLength] = {}
            for(let levelNumber = 1; levelNumber <= Object.keys(allData[storageLength]).length; levelNumber++){
                for(let noteNumber = 1; noteNumber < Object.keys(allData[storageLength][levelNumber].userNoteProgression).length+1; noteNumber++){
                        playPeriodNotes[storageLength][noteNumber] = allData[storageLength][levelNumber].userNoteProgression[noteNumber]
                }
            }
        }
    }
    retrieveNoteCodesFromPeriods(playPeriodNotes)
}

let playPeriodCodes = []

function retrieveNoteCodesFromPeriods(playPeriodNotes){
    for(let numberOfPeriods = 0; numberOfPeriods < playPeriodNotes.length; numberOfPeriods++){
        playPeriodCodes[numberOfPeriods] = {}
        playPeriodCodes[numberOfPeriods].numberOfCorrectHits = 0
        playPeriodCodes[numberOfPeriods].numberOfWrongHits = 0
        playPeriodCodes[numberOfPeriods].numberOfWrongNumberHits = 0
        playPeriodCodes[numberOfPeriods].numberOfOutOfBoundHits = 0
        playPeriodCodes[numberOfPeriods].numberOfMissedNotes = 0
        for(let numberOfNotes = 1; numberOfNotes < Object.keys(playPeriodNotes[numberOfPeriods]).length + 1; numberOfNotes++){
            if(playPeriodNotes[numberOfPeriods][numberOfNotes].deductionCode == 0){
                playPeriodCodes[numberOfPeriods].numberOfCorrectHits = playPeriodCodes[numberOfPeriods].numberOfCorrectHits + 1
            }
            else if(playPeriodNotes[numberOfPeriods][numberOfNotes].deductionCode == 1){
                playPeriodCodes[numberOfPeriods].numberOfWrongHits = playPeriodCodes[numberOfPeriods].numberOfWrongHits + 1
            }
            else if(playPeriodNotes[numberOfPeriods][numberOfNotes].deductionCode == 2){
                playPeriodCodes[numberOfPeriods].numberOfWrongNumberHits = playPeriodCodes[numberOfPeriods].numberOfWrongNumberHits + 1
            }
            else if(playPeriodNotes[numberOfPeriods][numberOfNotes].deductionCode == 3){
                playPeriodCodes[numberOfPeriods].numberOfOutOfBoundHits = playPeriodCodes[numberOfPeriods].numberOfOutOfBoundHits + 1
            }
            else if(playPeriodNotes[numberOfPeriods][numberOfNotes].deductionCode == 4){
                playPeriodCodes[numberOfPeriods].numberOfMissedNotes = playPeriodCodes[numberOfPeriods].numberOfMissedNotes + 1
            }
        }    
    }
}
