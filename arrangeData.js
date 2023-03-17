function createDataTypes(allData){
    retrieveIndividualNotes(allData)
}

let individualNotes = []
function retrieveIndividualNotes(allData){
    let numberOfNotes = 0
    for(let storageLength = 0; storageLength < localStorage.length; storageLength++){
        if(allData[storageLength] != null){
            for(let levelNumber = 1; levelNumber <= Object.keys(allData[storageLength]).length; levelNumber++){
                for(let noteNumber = 0; noteNumber < Object.keys(allData[storageLength][levelNumber].userNoteProgression).length; noteNumber++){
                    if(allData[storageLength][levelNumber].userNoteProgression[noteNumber] != undefined){
                        individualNotes[numberOfNotes] = allData[storageLength][levelNumber].userNoteProgression[noteNumber]
                        numberOfNotes++    
                    }                    
                }
            }
        }
    }
    console.log(individualNotes)
    retrieveTimeDifferenceHit(individualNotes)
}

let timeDifferenceHit = []
function retrieveTimeDifferenceHit(individualNotes){
    for(let numberOfNotes = 0; numberOfNotes < individualNotes.length; numberOfNotes++){
        timeDifferenceHit[numberOfNotes] = {noteNumber: numberOfNotes, timeDifference: individualNotes[numberOfNotes].differenceInHitTime}
    }
    console.log(timeDifferenceHit)
}