let difficultyLevel = 1
let bassGenerator = 0
const DynamicDifficulty = {
    1:{
        speed: 1,
        hitDifficulty: 0.1,
        recurringNotes:2,
        numberOfNotes: 1,
        trebleGeneratorSize: 3,
        requiredScoreToProgress: 5,
    },
    2:{
        speed: 1,
        hitDifficulty: 0.1,
        recurringNotes:4,
        numberOfNotes: 1,
        trebleGeneratorSize: 3,
        requiredScoreToProgress: 10,
        requiredScoreToRegress: -10
    },
    3:{
        speed: 1,
        hitDifficulty: 0.1,
        recurringNotes:4,
        numberOfNotes: 1,
        trebleGeneratorSize: 7,
        requiredScoreToProgress: 15,
        requiredScoreToRegress: -15
    },
    4:{
        speed: 1,
        hitDifficulty: 0.1,
        recurringNotes:8,
        numberOfNotes: 1,
        trebleGeneratorSize: 7,
        requiredScoreToProgress: 20,
        requiredScoreToRegress: -20
    },
    5:{ // include sharps somehow
        speed: 1,
        hitDifficulty: 0.1,
        recurringNotes:8,
        numberOfNotes: 1,
        trebleGeneratorSize: 7,
        requiredScoreToProgress: 20,
        requiredScoreToRegress: -20
    }

}
