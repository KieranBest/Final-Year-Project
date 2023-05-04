"use strict";

var individualNotes = [];
function retrieveIndividualNotes(allData) {
  var numberOfNotes = 0;
  for (var storageLength = 0; storageLength < localStorage.length; storageLength++) {
    if (allData[storageLength] != null) {
      for (var levelNumber = 1; levelNumber <= Object.keys(allData[storageLength]).length; levelNumber++) {
        for (var noteNumber = 0; noteNumber < Object.keys(allData[storageLength][levelNumber].userNoteProgression).length + 1; noteNumber++) {
          if (allData[storageLength][levelNumber].userNoteProgression[noteNumber] != undefined) {
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
var timeDifferenceHit = [];
var expectedHitTimes = [];
var NoOfNotes = [];
function retrieveTimeDifferenceHit(individualNotes) {
  for (var numberOfNote = 0; numberOfNote < individualNotes.length; numberOfNote++) {
    timeDifferenceHit[numberOfNote] = individualNotes[numberOfNote].differenceInHitTime;
    expectedHitTimes[numberOfNote] = 0;
    NoOfNotes[numberOfNote] = {
      noteNumber: numberOfNote
    };
  }
}
var numberOfCorrectHits = 0;
var numberOfWrongHits = 0;
var numberOfWrongNumberHits = 0;
var numberOfOutOfBoundHits = 0;
var numberOfMissedNotes = 0;
function retrieveNoteCodes(individualNotes) {
  for (var numberOfNotes = 0; numberOfNotes < individualNotes.length; numberOfNotes++) {
    if (individualNotes[numberOfNotes].deductionCode == 0) {
      numberOfCorrectHits++;
    } else if (individualNotes[numberOfNotes].deductionCode == 1) {
      numberOfWrongHits++;
    } else if (individualNotes[numberOfNotes].deductionCode == 2) {
      numberOfWrongNumberHits++;
    } else if (individualNotes[numberOfNotes].deductionCode == 3) {
      numberOfOutOfBoundHits++;
    } else if (individualNotes[numberOfNotes].deductionCode == 4) {
      numberOfMissedNotes++;
    }
  }
}
var totalLength = 0;
var playPeriodNotes = [];
function retrievePlaytimePeriods(allData) {
  for (var storageLength = 0; storageLength < localStorage.length; storageLength++) {
    totalLength = 0;
    if (allData[storageLength] != null) {
      playPeriodNotes[storageLength] = {};
      for (var levelNumber = 1; levelNumber <= Object.keys(allData[storageLength]).length; levelNumber++) {
        for (var noteNumber = 1; noteNumber < Object.keys(allData[storageLength][levelNumber].userNoteProgression).length + 1; noteNumber++) {
          totalLength++;
          playPeriodNotes[storageLength][totalLength] = allData[storageLength][levelNumber].userNoteProgression[noteNumber];
        }
      }
    }
  }
  retrieveNoteCodesFromPeriods(playPeriodNotes);
}
var playPeriodCodes = [];
function retrieveNoteCodesFromPeriods(playPeriodNotes) {
  for (var numberOfPeriods = 0; numberOfPeriods < playPeriodNotes.length; numberOfPeriods++) {
    var numOfCorrectHits = 0;
    var numOfWrongHits = 0;
    var numOfWrongNumberHits = 0;
    var numOfOutOfBoundHits = 0;
    var numOfMissedNotes = 0;
    playPeriodCodes[numberOfPeriods] = {};
    for (var numberOfNotes = 1; numberOfNotes < Object.keys(playPeriodNotes[numberOfPeriods]).length + 1; numberOfNotes++) {
      if (playPeriodNotes[numberOfPeriods][numberOfNotes].deductionCode == 0) {
        numOfCorrectHits = numOfCorrectHits + 1;
      } else if (playPeriodNotes[numberOfPeriods][numberOfNotes].deductionCode == 1) {
        numOfWrongHits = numOfWrongHits + 1;
      } else if (playPeriodNotes[numberOfPeriods][numberOfNotes].deductionCode == 2) {
        numOfWrongNumberHits = numOfWrongNumberHits + 1;
      } else if (playPeriodNotes[numberOfPeriods][numberOfNotes].deductionCode == 3) {
        numOfOutOfBoundHits = numOfOutOfBoundHits + 1;
      } else if (playPeriodNotes[numberOfPeriods][numberOfNotes].deductionCode == 4) {
        numOfMissedNotes = numOfMissedNotes + 1;
      }
    }
    playPeriodCodes[numberOfPeriods] = [numOfCorrectHits, numOfWrongHits, numOfWrongNumberHits, numOfOutOfBoundHits, numOfMissedNotes];
  }
}