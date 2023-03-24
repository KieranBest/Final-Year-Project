const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    saveNumber: {
        levelNumber: {
            currentLevel: {
                required: true,
                type: Number
            },
            hitScreenPercentage: {
                required: true,
                type: Number
            },
            numberOfNotes: {
                required: true,
                type: Number
            },
            numberofNotesinLevel: {
                required: true,
                type: Number
            },
            recurringNotes: {
                required: true,
                type: Number
            },
            requiredScoreToProgress: {
                required: true,
                type: Number
            },
            notesInLevel: {
                noteNumber: {
                    actualHitTime: {
                        h: {
                            required: true,
                            type: Number            
                        },
                        m: {
                            required: true,
                            type: Number            
                        },
                        ms: {
                            required: true,
                            type: Number            
                        },
                        s:{
                            required: true,
                            type: Number            
                        },
                        time: {
                            required: true,
                            type: Number            
                        }
                    },
                    correctNote: {
                        required: true,
                        type: Boolean
                    },
                    correctY1Hit: {
                        required: true,
                        type: Boolean            
                    },
                    correctY2Hit: {
                        required: true,
                        type: Boolean
                    },
                    correctYHit: {
                        required: true,
                        type: Boolean
                    },
                    deductionCode: {
                        required: true,
                        type: Number            
                    },
                    deductionReason: {
                        required: true,
                        type: String
                    },
                    differenceInHitTime: {
                        required: true,
                        type: Number
                    },
                    distanceBetweenPreviousNoteRequiredAndCurrentRequired: {
                        required: true,
                        type: Number
                    },
                    expectedHitTime: {
                        h: {
                            required: true,
                            type: Number            
                        },
                        m: {
                            required: true,
                            type: Number            
                        },
                        ms: {
                            required: true,
                            type: Number            
                        },
                        s:{
                            required: true,
                            type: Number            
                        },
                        time: {
                            required: true,
                            type: Number            
                        }
                    },
                    hand: {
                        required: true,
                        type: String
                    },
                    major1: {
                        required: true,
                        type: Boolean
                    },
                    missedNote: {
                        required: true,
                        type: Boolean
                    },
                    noteEntered: {
                        required: true,
                        type: Number
                    },
                    noteGapBetweenEnteredAndRequired: {
                        required: true,
                        type: Number
                    },
                    noteNumberInGame: {
                        required: true,
                        type: Number
                    },
                    noteRequired: {
                        required: true,
                        type: Number
                    },
                    noteoff: {
                        h: {
                            required: true,
                            type: Number            
                        },
                        m: {
                            required: true,
                            type: Number            
                        },
                        ms: {
                            required: true,
                            type: Number            
                        },
                        s:{
                            required: true,
                            type: Number            
                        },
                        time: {
                            required: true,
                            type: Number            
                        }
                    },
                    previousNoteRequired: {
                        required: false,
                        type: Number
                    },
                    timeHeldNote: {
                        required: true,
                        type: Number
                    },
                    withinExtraBoundary:{
                        required: true,
                        type: Boolean
                    }
                }
            }
        }
    }
})

module.exports = mongoose.model('Data', dataSchema)
