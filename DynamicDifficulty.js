let difficultyLevel = 4
let bassGenerator = 0
const DynamicDifficulty = {
    // Treble cleff
    1:{ // random 4 notes
        speed: 1,
        hitDifficulty: 0.07,
        recurringNotes:2,
        numberOfNotes: 1,
        trebleGeneratorSize: 4,
        requiredScoreToProgress: 5,
    },
    2:{ // roll up and down 7 notes to teach moving fingers correctly
        speed: 1,
        hitDifficulty: 0.07,
        recurringNotes:4,
        numberOfNotes: 1,
        trebleGeneratorSize: 7,
        requiredScoreToProgress: 25, // up and down twice
        requiredScoreToRegress: -10,
        down: true
    },
    3:{ // random notes in octave
        speed: 1,
        hitDifficulty: 0.07,
        recurringNotes:4,
        numberOfNotes: 1,
        trebleGeneratorSize: 7,
        requiredScoreToProgress: 20,
        requiredScoreToRegress: -15,
    },
    4:{ // roll up and down including sharps somehow
        speed: 1,
        hitDifficulty: 0.07,
        recurringNotes:4,
        numberOfNotes: 1,
        trebleGeneratorSize: 7,
        requiredScoreToProgress: 41, // up and down twice
        requiredScoreToRegress: -200,
        down: true,
        sharp:false
    },
    5:{ // 3 note chords
        speed: 1,
        hitDifficulty: 0.07,
        recurringNotes:4,
        numberOfNotes: 1,
        trebleGeneratorSize: 7,
        requiredScoreToProgress: 20,
        requiredScoreToRegress: -20
    },
    // Bass cleff
    6:{  // random 4 notes
        speed: 1,
        hitDifficulty: 0.1,
        recurringNotes:8,
        numberOfNotes: 1,
        // generatorType: bassValues
        trebleGeneratorSize: 7,
        requiredScoreToProgress: 20,
        requiredScoreToRegress: -20
    }

}
