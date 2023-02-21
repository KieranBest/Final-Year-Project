let difficultyLevel = 1
let bassGenerator = 0
const DynamicDifficulty = {
    // Treble cleff
    1:{ // random 4 notes
        speed: 1,
        hitScreenPercentage: 0.1,
        recurringNotes:2,
        numberOfNotes: 1,
        trebleGeneratorSize: 4,
        requiredScoreToProgress: 5,
    },
    2:{ // roll up and down 7 notes to teach moving fingers correctly
        speed: 1,
        hitScreenPercentage: 0.07,
        recurringNotes:4,
        numberOfNotes: 1,
        requiredScoreToProgress: 25, // up and down twice
        requiredScoreToRegress: -10,
        down: true
    },
    3:{ // random majors in octave
        speed: 1,
        hitScreenPercentage: 0.07,
        recurringNotes:4,
        numberOfNotes: 1,
        trebleGeneratorSize: 7,
        requiredScoreToProgress: 20,
        requiredScoreToRegress: -15,
    },
    4:{ // roll up and down including sharps somehow
        speed: 1,
        hitScreenPercentage: 0.05,
        recurringNotes:4,
        numberOfNotes: 1,
        requiredScoreToProgress: 22, 
        requiredScoreToRegress: -20,
        down: true,
        sharp:false
    },
    5:{ // random notes including sharps
        speed: 1,
        hitScreenPercentage: 0.05,
        recurringNotes:4,
        numberOfNotes: 1,
        sharpChance: 0.33,
        requiredScoreToProgress: 20,
        requiredScoreToRegress: -20
    },
    6:{ // 3 note chords
        speed: 1,
        hitScreenPercentage: 0.05,
        recurringNotes:2,
        numberOfNotes: 3,
        requiredScoreToProgress: 20,
        requiredScoreToRegress: -5
    },
    7:{ // 3 note chords
        speed: 1,
        hitScreenPercentage: 0.05,
        recurringNotes:4,
        numberOfNotes: 3,
        requiredScoreToProgress: 20,
        requiredScoreToRegress: -20
    },
    // Bass cleff
    8:{  // random 4 notes
        speed: 1,
        hitScreenPercentage: 0.1,
        recurringNotes:8,
        numberOfNotes: 1,
        // generatorType: bassValues
        trebleGeneratorSize: 7,
        requiredScoreToProgress: 20,
        requiredScoreToRegress: -20
    }
}
