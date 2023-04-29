# Creating a Responsive and Dynamic Piano Education Tool

## Kieran Best

## Individual Project U10834

## Canterbury Christ Church University

## 2022/23

### Abstract

This project is aimed at creating a responsive educational tool to teach users how to play piano whilst simultaneously how to read sheet music; it will also create a visual representation of the user's learning progression from data collected from the user's input. This project will be completed using the agile framework, HTML5, CSS and JS.

### Acknowledgements

I would like to give thanks to my supervisor, Allan Callaghan, for all his amazing support, guidance and patience throughout this project. Also to my stakeholder, Emily Sayers, for putting her time and knowledge into helping me with her invaluable feedback,ideas and experience in both teaching and playing piano.

### Table Of Contents

- [Abstract](#abstract)
- [Acknowledgements](#acknowledgements)
- [Table Of Contents](#table-of-contents)
- [Introduction](#introduction)
- [Problem Analysis](#problem-analysis)
  - [Objectives](#objectives)
  - [Literature Review](#literature-review)
    - [How Do We Learn?](#how-do-we-learn)
    - [Importance of Sheet Music](#importance-of-sheet-music)
    - [Similar Applications](#similar-applications)
  - [Goals](#goals)
  - [Possible Solutions](#possible-solutions)
- [Analysis and Requirements](#analysis-and-requirements)
  - [Methodology](#methodology)
  - [Hardware and Software Stack](#hardware-and-software-stack)
- [Implementation](#implementation)
  - [Milestone 1](#milestone-1)
    - [Milestone 1 - Objectives](#milestone-1---objectives)
    - [Milestone 1 - Time Management](#milestone-1---time-management)
    - [Conditional Flow Diagram](#conditional-flow-diagram)
    - [Milestone 1 - Implementation](#milestone-1---implementation)
    - [Milestone 1 - Challenges](#milestone-1---challenges)
      - [4th November 2022](#4th-november-2022)
      - [16th November 2022](#16th-november-2022)
      - [15th December 2022](#15th-december-2022)
  - [Milestone 2](#milestone-2)
    - [Milestone 2 - Objectives](#milestone-2---objectives)
    - [Milestone 2 - Time Management](#milestone-2---time-management)
    - [Milestone 2 - Implementation](#milestone-2---implementation)
    - [Milestone 2 - Challenges](#milestone-2---challenges)
      - [21st February](#21st-february)
      - [6th March](#6th-march)
  - [Milestone 3](#milestone-3)
    - [Milestone 3 - Objectives](#milestone-3---objectives)
    - [Database Design](#database-design)
    - [Milestone 3 - Time Management](#milestone-3---time-management)
    - [Milestone 3 - Implementation](#milestone-3---implementation)
    - [Milestone 3 - Challenges](#milestone-3---challenges)
      - [20th March](#20th-march)
      - [13th April](#13th-april)
- [Conclusion](#conclusion)
  - [Findings](#findings)
  - [Goals Achieved](#goals-achieved)
  - [User Feedback](#user-feedback)
  - [Business Evaluation](#business-evaluation)
  - [Technical Evaluation](#technical-evaluation)
  - [Process Evaluation](#process-evaluation)
  - [Further Work](#further-work)
  - [Final Evaluation](#final-evaluation)
- [References](#references)
- [Appendices](#appendices)
  - [Meeting Notes](#meeting-notes)
    - [Friday 14th October](#friday-14th-october)
    - [Friday 21st October](#friday-21st-october)
    - [Friday 4th November](#friday-4th-november)
    - [Friday 18th November](#friday-18th-november)
    - [Friday 2nd December](#friday-2nd-december)
    - [Friday 16th December](#friday-16th-december)
    - [Friday 27th January](#friday-27th-january)
    - [Wednesday 8th February](#wednesday-8th-february)
    - [Wednesday 22nd February](#wednesday-22nd-february)
    - [Wednesday 8th March](#wednesday-8th-march)
    - [Wednesday 22nd March](#wednesday-22nd-march)
      - [Stakeholder Meeting](#stakeholder-meeting)
      - [Supervisor Meeting](#supervisor-meeting)

### Introduction

Trying to learn how to play piano can be a strenuous task, especially if you are unknowledgeable of how to read music. It has been understood that knowledge of sheet music can lead to a much more complex understanding of music (López‐Íñiguez & Pozo, 2014) and therefore can be vastly beneficial when learning how to play piano.
The aim of this project is to create an application that teaches users to how to read and play sheet music on a piano. The application will keep score on whether the user is hitting the note on time or not and adjust the speed and difficulty based on this and therefore is suitable for all demographics. It will then be able to visually represent the users educational journey and display key statistics from a period of time such as:

- Amount of times the hit note was correct
- Time difference between user pressed note and note needed to be pressed
- Amount of times note hit was incorrect due to various reasons

This will then allow users to understand their progression and see how much they have grown as a musician. This is beneficial due to the motivation it can give a user, to see their progression and understand that they are improving, but also because it allows the user to analyse their own playing and understand how they can improve. This is key to the user getting better as it allows them to understand their strengths and weaknesses, allowing them to understand their necessary areas for improvement.

Throughout this report, I will be discussing the motivation behind the project, the process of creating this application, the challenges of this project and lastly, an evaluation of this project that critically analyses my approach, the final product, and the process of creating this application.

### Problem Analysis

The idea from this project came from wanting to learn piano, but no resources exist in which you are naturally monitored in how you play. There is no existing solution that will adapt to your individual skill level and provide feedback on how you can improve. This means that users are just blindly following tutorials, and not understanding the content they are being taught.

#### Objectives

Whilst there are many objectives within this project, it is important to clarify the main objectives as opposed to the less important objectives. Using MoSCoW prioritisation and we are able to understand that the application has different levels of requirements. While these may all be possible developments for the application, they are not all required for my protoype project. The outlined objectives following the MoSCoW prioritisation are as follows:

'Must Have':

- The application must demonstrate which key I am pressing on both the staff and visual keyboard
- The application must be a plug in and play application, and not require me to install multiple drivers to run
- The application must develop my understanding by progressing to a harder difficulty
- The application must adjust its difficulty based on my current ability
- The application must produce a visual representation expressing my learning progression

'Should Have':

- The application should clearly define if I’ve pressed the correct key or not
- The application should allow me to clearly follow when I need to press a note

'Could Have':

- The application could tell me which note is required to be pressed by name
- The application could tell me which note I have pressed by name
- The application could signify whether I have pressed the correct note at the correct time or not
- The application could have challenges to complete
- The application could have awards for completing certain tasks
- The application could have tests to ensure understanding of the material at certain stages of the users development

'Won't Have':

- The application won’t allow me to pick and choose my own songs
- The application won't be downloadable onto devices such as phones or tablets

#### Literature Review

##### How Do We Learn?

 Yuksel et al. (2016) explains we learn better when the our cognitive workload is above a certain level. and that this is hard to achieve through the use of videos. To meet the greatest level of education,  we must reach a “zone of proximal development”. This can be difficult due to underlying factors such as:

- Difficulty of the task
- Users’ cognitive ability
- Instructional design
- Users’ motivation

Intelligent Tutoring Systems (ITS) and Computer-Based Education (CBE) systems measure cognitive workload. 'ITS' tracks the psychological state of users in through student modelling  (Graesser, A.C. et al., 2012). Student modelling follows characteristics such as “subject matter knowledge, skills, motivation, and emotions.” ‘ITS’ “responds” to users states and adjusts the course, whereas human taught lessons follow a linear path (Graesser, A.C. et al., 2012). PLATO was an educational tool developed back in 1961 to teach by displaying information and then asking questions. It was used in WWII to train soldiers in new protocols in a cost efficient way. The expected response to these questions would be numerical, algebraic, words or phrases. It is taught in a linear method with no form of digression.
Lowe explained that within CBE also includes:

- Computer-Based Instruction (CBI)
- Computer-Aided Instruction (CAl)
- Computer-Managed Instruction (CMI)
- Computer-Based Training (CBT)
- CBI delivered on the Internet or intranet
- Internet-Based Training (IBT)
- CBI delivered by CD-ROM

These were developed by basic learning principles where Skinner (2012) investigated the development of reinforcing “theory to human learning”.

Progressing on from primarily educational tools, educational computer games have proven to be just as effective because of their ability to "increase students' motivation". It does this by allowing the user a fun experience as well as an educational 1 (Sampayo-Vargas, 2013). Zohaib (2018) explains that dynamic difficulty adjustment will adjust the difficulty based on the users "individual traits", factors including dexterity, learning and adapting ability, and emotional characteristics are measured to adjust the difficulty to avoid boredom for users. Much like that of our "zone of proximal development", Csikszentmihalyi (2009, cited in Zohaib, 2018) states that users travel through a "flow channel" as depicted in Figure 1.

> **Figure 1: Flow Channel**
>
> ![Csikszentmihalyi (2009, cited in Zohaib, 2018)](/images/flowChannel.png)
>
> *(Csikszentmihalyi, 2009, cited in Zohaib, 2018)*

The model is designed to avoid creating a difficulty too easy to cause boredom, and too hard to create frustration. It was proven by Hagelback and Johansson (2009, cited in Zohaib, 2018) that users prefer to be challenged at an accurate level that adapts to their styles and need.

While proving that educational computer games enhance a students enjoyment is not necessarily an accurate representation of the students learning, it has been proven that adaptive difficulty within educational settings increase the student's level of learning (Sampayo-Vargas et al., 2013). Sampayo-Vargas et al. explain that when comparing students progression with 3 different learning methods, adaptive difficulty proves to be more efficient than a steadily incremental difficulty game, and a written activity as seen in Figure 2.

> **Figure 2: Differences Between 3 Learning Techniques**
>
> ![Sampayo-Vargas et al.](/images/3LearningTechniques.png)
>
> *(Sampayo-Vargas et al., 2013)*

As you can see, a linear increase in difficulty obtains the lowest score of 3.3, followed by 4.3 in a written activity. Whereas an adaptive difficulty obtains a much higher score of 7.0. This can again be iterated in Figure 3 where we take a much closer look at users progression of levels when comparing adaptive difficulty and linearly incremental difficulty.

> **Figure 3: Comparing Level Progression with Adaptive Difficulty and Linearly Increasing Difficulty**
>
> ![Sampayo-Vargas et al.](/images/adaptiveVsIncremental.png)
>
> *(Sampayo-Vargas et al., 2013)*

As you can see from Figure 3, a linear increase in difficult results in a gradual decline in correct responses, whereas an adaptive difficulty results in the correct responses staying in the upper percentile.

##### Importance of Sheet Music

Sight reading is the ability to read and play a piece of music unrehearsed, it is the performers ability to process "complex visual input (the score)" with minimal error (Kopiez and Lee, 2008). Having the ability to sight read sheet music can increase your skill as a musician in so many ways and "plays an important role in music education"(Chiu and Chen, 2012).

Not only is sight reading beneficial to you in terms of your musical ability but it can also be beneficial to all aspects of our lives. Musacchia and Khalil (2020) explain that musical training can give a multisensory workout and can help improve many things such as:

- Memory
- Attention span
- Reading ability
- Hearing
- Sight
- Social Awareness

Just like muscles, exercising your brain can cause it to become stronger, and the process of exercising your brain through activity is called neuro plasticity (Musacchia and Khalil, 2020). Neuro plasticity is where the brain becomes stronger in certain aspects of function. It has been proven that expert musicians have stronger than average brain power in auditory, visual and motor areas of the brain (Musacchia and Khalil, 2020). Due to this neuro plasticity, it has also been linked in with allowing the brain to be more resilient to learning of new languages. Swaminathan & Gopinath (2013) express that there is a link between music and languages and that they share processing resources; their study shows that students are musically literate have a higher ability to learn new languages than those musically illiterate.

Whilst playing an instrument is not only hugely beneficial for your brain in terms of cognitive function, it can also be beneficial for your mental well being, Papinczak et al. (2015) expresses that it is highly common for young people between the ages of 15-25 to seek out music as a way to "achieve wellbeing". Papinczak et al. (2015) evaluates that seeking out music for wellbeing leads to many positive results such as:

- Facilitation of relationships with family and friends
- Immersing in emotions
- Changing emotions
- Modifying cognitions

The sample of people Papinczak et al. (2015) used in their study "strongly believe that music played an integral role in their daily lives and was an important aspect of their wellbeing".

##### Similar Applications

Whilst there similar applications to the proposed, none have the exact features. ‘Simply Guitar’ and ‘Harmony City’ (Educational App Store, 2022) will teach you how to play a song. ‘Tenuto’, ‘Piano Notes Fun’ and ‘Note Trainer Pro’ which will teach you how to read music. These are all based on recordings and do not offer an interactive experience. This can be be detrimental to the users learning experience as explained previously.

‘P.I.A.N.O.’ has a interactive projection placed on to the keyboard to enable users to understand what key to push.

> **Figure 4: ‘P.I.A.N.O.’**
>
> ![‘P.I.A.N.O.’](/images/P.I.A.N.O..png)
>
> *(Rogers et al., 2014)*

As Rogers et al. (2014) explains, the mapping of the keys provides users with a way to learn how to read sheet music. This can often be the cause of putting off most people from learning how to play an instrument. Other benefits include teaching users where to place their hands to allow them to reach all the keys.  As well as “a note visualisation based on roll notation” which will teach timing (Rogers et al., 2014). The downfall for this application however, is even though it teaches hand placement for reading music, it does not teach how to read sheet music.

> **Figure 5: Note Visualisation in ‘P.I.A.N.O.’**
>
> ![Note Visualisation in ‘P.I.A.N.O.’](/images/P.I.A.N.O.2.png)
>
> *(Rogers et al., 2014)*

Going back to learning in a zone of proximal development, Yuksel et al. (2016) created 'BACh'. An application where users’ cognitive workload dictates the applications difficulty. 'BACh' measures cognitive workload using a fNIRS sensor which is not in the scope of my project.

> **Figure 6: Learn Piano with ‘BACh’**
>
> ![Learn Piano with ‘BACh’](/images/BACh.png)
>
> *(Yuksel et al., 2016)*

The most similar application to what I propose is ‘Synthesia’. An educational tool used with a MIDI keyboard for learning how to play piano by using of a note visualisation like that of ‘P.I.A.N.O.’. It contains a mass library of songs for the user to decide. And it also includes teaching where users hands should be to allow them full reach of keys. It also contains a feature “Finger Number Hints” in which users fingers are visually demonstrated (Synthesia Game, 2022). Whilst this is almost identical to my specification, this application does not adapt to users’ current ability and skill.

> **Figure 7: Finger Number Hints in ‘Synthesia’**
>
> ![Finger Number Hints in ‘Synthesia’](/images/Synthesia.png)
>
> *(Synthesia Game, 2022)*

#### Goals

The goal of this project is to create a prototype application that will teach users how to play piano as well as learn how to read sheet music. It will adapt to the users ability and adjust its level of difficulty based on the users performance. It will also produce a visual representation of the users progression since they have started using the application. From this the user will be able to identify key areas of improvement and will be able to see their progression.

As this is a primarily stakeholder driven project, objectives during the development process will be dictated by the stakeholder to ensure that the project is usable for its intended purpose and is fulfilling in its requirements. The stakeholder will be involved throughout the project and will provide feedback and guidance as to its development.

#### Possible Solutions

### Analysis and Requirements

#### Methodology

 The project will be created using an agile framework to support its development. The project be divided into 3 milestones each with demonstrations to users and the stakeholder to receive feedback and guidance. These milestones will be divided as such:

- September - January
- January - March
- March - April

Milestones will be divided into 2 weekly sprints and tasks will be assigned weights. Sprints will be based on the weights to determine how many tasks are to be completed each sprint.

Each milestone will show logical steps in its production process whilst also giving clear deadlines for each sprint. It will be created using gulp.js to automate testing when writing in JS, HTML5, CSS to ensure the continuous test driven development, gulp.js will ensure scripts are concise and there are no duplicate variables. It will use Jest for unit testing to ensure all functions and aspects of the JS scripts work effectively. It will also use Express and MongoDB to create the client and server relationship, enabling a larger project.

#### Hardware and Software Stack

This application requires the user to possess a MIDI keyboard and the ability to plug into a computer or laptop device. The device will need to have a web browser that supports MIDI input such as Chrome, Edge, Firefox and Opera (caniuse, 2023). This is to enable the application to receive MIDI input from the keyboard and translate this into usable data which the application will need to function. The keyboard used to create this project is a 'M-Audio Keystation Mini 32 MK3' that only has 32 keys, therefore the protoype product will only support this. The application will have to be modified in order to work correctly with anything larger or smaller than 32 keys.

### Implementation

#### Milestone 1

##### Milestone 1 - Objectives

To start creating this application, I had my initial proposal, to create a Minimum Viable Product (MVP) that will teach users how to play piano and read sheet music. This MVP would allow me to attain feedback on usability ideas in order to proceed in the development. So the objectives for milestone 1 were as follows:

- Create a graphical keyboard and show when notes have been pressed
- Create a visual staff and show when notes have been pressed
- Produce sound when notes are pressed
- Make notes move across the staff to depict when they need to be pressed
- Create a score system to track if the user presses the note correctly or not

To break these objectives down and manage my time more effectively, I broke these down into simple steps and assigned weights which will then be considered when managing time throughout the milestone. This then allowed me to create a gantt chart to better visualise the progress needed.

- Display that a key has been pressed on the terminal - 1
- Display graphical shapes - 1
- Keyboard input manipulates shapes in some way - 2
- Display what Key been Pressed - 1
- Create keyboard - 1
- Keyboard input shows what key has been pressed on graphical keyboard  - 2
- Display multiple keys pressed on keyboard - 3
- Graphical keyboard resizes to canvas size - 1
- Create music sheet outline - 1
- Create shape on stave when note pressed - 1
- Display multiple keys pressed on stave - 3
- Produce tone on key press (note on and note off) - 1
- Produce specific key tone on key press - 2
- Note moves across stave and repeats - 3
- Note repeats to a different line/note - 2
- Display more than 1 note at a time - 1
- Press key at specific time to raise count - 2
- Ability to change speed of note - 1

##### Milestone 1 - Time Management

```mermaid
gantt
    title Figure 8: A Gantt Diagram
    dateFormat  YYYY-MM-DD

    section Milestone 1
    Display a Note Pressed on Terminal                        :a1, 2022-10-14, 14d
    Display Any Graphical Shapes                              :a1, 2022-10-14, 14d
    Keyboard Input Manipulates Shapes                         :a1, 2022-10-14, 14d
    Display what Key been Pressed                             :a1, 2022-10-14, 14d
    Display Keyboard Graphically                              :a1, 2022-10-14, 14d
    Keyboard Input Displays Note Press on Graphical Keyboard  :a1, 2022-10-14, 14d
    Display Multiple Notes Pressed on Graphical Keyboard      :a1, 2022-10-14, 14d
    Graphical Keyboard Resizes to Canvas Size                 :a2, after a1, 14d
    Create the Music Sheet Outline                            :a2, after a1, 14d
    Create Shape on Music Sheet when Note Presed              :a2, after a1, 14d
    Display Multiple Notes Pressed on Music Sheet             :a3, after a2, 14d
    Produce Tone on Key Press (On and Off)                    :a4, after a3, 14d
    Produce Specific Note Tone on Key Press                   :a4, after a3, 14d
    Animated Note Moves Across Music Sheet and Repeats        :a4, after a3, 14d
    Note Repeats to a Different Line/Note                     :a5, after a4, 14d
    Display More than 1 Note at a Time on Music Sheet         :a5, after a4, 14d
    Press Key at Specific Time to Raise Count                 :a6, after a5, 14d
    Ability to Change Speed of Note                           :a6, after a5, 14d
```

##### Conditional Flow Diagram

The flow of the application is controlled by the user input as all actions for the application are dependent on the MIDI device input:

- The sound comes from the note input being registered as a number from the MIDI device input.
- The visual representation on both the keyboard and the staff comes from the note number given by the MIDI device input.
- The difficulty is adjusted based on the users’ score.
- The visual output will be dictated by the user's input and accuracy.

> **Figure 9: Conditional Flow Diagram**
>
> ![Conditional Flow Diagram](/images/ConditionalFlow.png)

##### Milestone 1 - Implementation

To create this project automated testing needed to be implemented to help keep my scripts concise and ensure I conform to standard coding practices. I used gulp.js to do this by testing my JS, HTML5 and CSS scripts. To do this I needed to install the packages required, run vs code in administrator, and simply enter 'Set-ExecutionPolicy RemoteSigned' before entering'gulp' into the terminal that is in the same directory as my HTML55, CSS, and JS files (mdn Web Docs, 2023). This can be seen as follows:

```JavaScript
const gulp = require('gulp');
const htmltidy = require('gulp-htmltidy');
const autoprefixer = require('gulp-autoprefixer');
const csslint = require('gulp-csslint');
const babel = require('gulp-babel');
const jshint = require('gulp-jshint');

gulp.task('html', function() {
    return gulp.src('./*.html') // your html directory
          .pipe(htmltidy())
          .pipe(gulp.dest('build/')); //writes the output, cleanly formatted HTML to the build directory
  });

  gulp.task('css', function() {
    return gulp.src('./*.css') //your css directory
        .pipe(csslint())
        .pipe(csslint.formatter())
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],  //config to add prefixes to work on older browsers
            cascade: false
        }))
        .pipe(gulp.dest('./build'));
});

gulp.task('js', function() {
    return gulp.src('./*.js')  //directory of your .js file
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('./build'));
});

gulp.task("watch", function() {
    gulp.watch("./src/*.js").on("change", function(event) {
      gulp
        .src(dirs.src)
        .pipe(
          browserify({
            transform: [babelify.configure({ presets: ["@babel/preset-env"] })]
          })
        )
        .pipe(rename("bundle.js"))
        .pipe(gulp.dest(dirs.dest));
    });
  });

gulp.task('default', gulp.series('html', 'css', 'js'));

// When initiated creates the build folder and copies the files from the src folder to the build folder
```

To start off this application I first needed to be able to access the MIDI device and ensure its connection is successful. The browser will firstly ask if the connection is allowed, if the user clicks 'Allow', then the MIDI device is connected and its device details will be portayed in the console. If the user selects 'Block', an error message will be displayed.

```JavaScript
// When the Midi device is first connected it will ask for permission to use MIDI device
// and then display device features if successful
if(navigator.requestMIDIAccess){
    navigator.requestMIDIAccess({sysex: true}).then(success, failure); //sysex asks the browser for permission to use the midi device
}
function success(midiAccess){
    midiAccess.addEventListener('statechange',updateDevices);
    const inputs = midiAccess.inputs;
    inputs.forEach((input) => {
        input.addEventListener('midimessage', handleInput);
    });
}
function failure(){
    console.log('Could not connect MIDI');
}
function updateDevices(event){
    console.log(`Name: ${event.port.name}, Brand: ${event.port.manufacturer}, State:${event.port.state}, Type:${event.port.type}`);
}
```

> **Figure 10: Verification of MIDI Device Connected**
>
> ![Verification of MIDI Device Connected](/images/milestone1.1.png)

From here basic input from the MIDI device needed to be registered and enable it to manipulate the canvas element. To ensure this works to its best capacity, I have used Jest (Jest, 2022)(Tanner, 2020) to test functions that use the values inputted from the MIDI device. After installing the packages required, to use Jest, type 'npm test' into the terminal once located in the 'testing' directory. The tests used to ensure player input is evaluated correctly are as follows:

```JavaScript
const noteLetter = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"]

function findLetter(note) {
  var noteNumber = note % 12
  return noteLetter[noteNumber]
}
module.exports = findLetter;


const findLetter = require('./findNoteLetter');

test('key with number 79 equals a G', () => {
  expect(findLetter(79)).toBe("G");
});

test('key with number 58 equals a A#', () => {
  expect(findLetter(58)).toBe("A#");
});
```

After that understanding which note had been pressed and displayed on the graphical keyboard on the screen was straight forward. Developing this until the user could press and release multiple keys and the notes would be displayed on a keyboard. This was also tested extensively using Jest to ensure the note was being displayed on the correct key on the visual keyboard.

The following are tests for identifying ensuring the correct key position is identified when pressing a key on the MIDI device:

```JavaScript
const findLetter = require('./findNoteLetter');
const majorKeyPos = ["C","D","E","F","G","A","B"]
const sharpKeyPos = ["C#","D#","E#","F#","G#","A#","B#"] // There are wrong keys due to the indexing needed
module.exports = {};
module.exports.keyboardOn = function keyboardOn(note){
    const notePressed = findLetter(note);
    const octave = parseInt(note/12) - 4 // -4 because my keyboard automatically starts at pos 48, this will need to be changed when keyboard information is entered with numWhiteKeys
    if(majorKeyPos.includes(notePressed)){
        noteNumber = majorKeyPos.indexOf(notePressed)
        return ((7*octave)+noteNumber)
    }else if(sharpKeyPos.includes(notePressed)){
        noteNumber = sharpKeyPos.indexOf(notePressed)
        return ((7*octave)+noteNumber)+0.75
    }
}

const onFunctions = require('./noteOn');
test('note 48 on keyboard should be in position 0 on visual keyboard', () => {
  expect(onFunctions.keyboardOn(48)).toBe(0);
});
test('note 66 on keyboard should be in position 10.75 on visual keyboard', () => {
    expect(onFunctions.keyboardOn(66)).toBe(10.75);
  });
```

The following are tests for identifying currently held keys, and adding or subtracting from that array:

```JavaScript
notesHeldList=[62,67,71]
module.exports.notesHeld = function notesHeld(note){
    notesHeldList.push(note)
    return notesHeldList
}

test('note 66 on keyboard should be added on to notes held list', () => {
    expect(onFunctions.notesHeld(66)).toStrictEqual([62,67,71,66]);
});


// Releasing a single note uses the exact same method as pressing a note, so no test is needed as it will just become a duplicate.
notesHeldList=[62,66,67,71]

function removeNoteFromList(note) {
    notesHeldList = notesHeldList.filter(function(without){
        return without !== (note)
    })
    return notesHeldList
}
module.exports = removeNoteFromList;

const removeNoteFromList = require('./noteOff.js');
test('note 48 on keyboard should be in position 0 on visual keyboard', () => {
    expect(removeNoteFromList(66)).toStrictEqual([62,67,71]
        );
  });
```

[View Completion of Visual Keyboard](https://github.com/KieranBest/Individual-Project/blob/d62134388a64e79a09bd9583056b95e7f6155fc0/script.js#L127)

From there ensuring the canvas is reactive to the users screen size, on both load up and resize of the browser window (Reid, 2022).

```JavaScript
  // Window starting gets the window statistics needed before creating keyboard
  window.onload = function(){
      keyboardStats();
      drawKeyboard();
  };

  window.onresize = function(){
      keyboardStats();
      drawKeyboard();
  };
```

The next stage was to create a staff and display the note pressed on the staff. This was difficult at first due to the numbers given to the note pressed by the MIDI device are programmed in a increasing order from left to right whereas the canvas element to draw the note is programmed in a decreasing order due to the canvas element height. This meant I had to create a function to convert the MIDI note number to a canvas height element. Using jest testing, I was able to depict a formula in order to automatically convert the MIDI note number to a canvas height element.

```JavaScript
const staffShtMajorPos = ["B","A","G","F","E","D","C"] // These are the order needed for the staff
const staffShtSharpPos = ["B#","A#","G#","F#","E#","D#","C#"] // These are the order needed for the staff

module.exports.staffOn = function staffOn(note){
    const notePressed = findLetter(note);
    const octave = parseInt(note/12) - 4 // -4 because my keyboard automatically starts at pos 48, this will need to be changed when keyboard information is entered with numWhiteKeys
    if(majorKeyPos.includes(notePressed)){
        staffNumber = staffShtMajorPos.indexOf(notePressed)
    }else if(sharpKeyPos.includes(notePressed)){
        staffNumber = staffShtSharpPos.indexOf(notePressed)
    }

    if(majorKeyPos.includes(notePressed)){
        if(octave === 1){
            octaveWeight = (staffNumber*0.5+4)
        }else if(octave === 0){
            octaveWeight = (staffNumber*0.5+4)+3.5
        }else if(octave === 2){
            octaveWeight = (staffNumber*0.5+4)-3.5
        }
    }
    else if(sharpKeyPos.includes(notePressed)){
        if(octave === 1){
            octaveWeight = (staffNumber*0.5+4)
        }else if(octave === 0){
            octaveWeight = (staffNumber*0.5+4)+3.5
        }else if(octave === 2){
            octaveWeight = (staffNumber*0.5+4)-3.5
        }
    }
    return octaveWeight
}

test('note 48 on keyboard should be in position 10.5 on visual staff', () => {
    expect(onFunctions.staffOn(48)).toBe(10.5);
});
test('note 66 on keyboard should be in position 5.5 on visual staff', () => {
    expect(onFunctions.staffOn(66)).toBe(5.5);
});
```

The result of this testing being the following code:

```JavaScript
  // Draw on the staff when a note is pushed
  function staffNoteHit(staffNumber,notePressed,octave){
      if(majorKeyPos.includes(notePressed)){
          if(octave === 1){
              octaveWeight = (staffNumber*0.5+4);
          }else if(octave === 0){
              octaveWeight = (staffNumber*0.5+4)+3.5;
          }else if(octave === 2){
              octaveWeight = (staffNumber*0.5+4)-3.5;
          }
          ctx.beginPath();
          ctx.fillStyle="red";
          ctx.arc(hitNoteLine, octaveWeight*staffSpacing , staffSpacing*0.4, 0, 2 * Math.PI);
          ctx.fill();
      }
      else if(sharpKeyPos.includes(notePressed)){
          if(octave === 1){
              octaveWeight = (staffNumber*0.5+4);
          }else if(octave === 0){
              octaveWeight = (staffNumber*0.5+4)+3.5;
          }else if(octave === 2){
              octaveWeight = (staffNumber*0.5+4)-3.5;
          }
          ctx.beginPath();
          ctx.fillStyle="blue";
          ctx.arc(hitNoteLine, octaveWeight*staffSpacing , staffSpacing*0.4, 0, 2 * Math.PI);
          ctx.fill();
      }
  }
```

Multiple major notes being held is displayed in Figure 11.

> **Figure 11: Multiple Major Keys**
>
> ![Multiple Major Keys](/images/milestone1.2.png)

Multiple major notes with a sharp note being held is displayed in Figure 12.

> **Figure 12: Multiple Major Keys with a Sharp Key**
>
> ![Multiple Major Keys with a Sharp Key](/images/milestone1.3.png)

Multiple sharp notes being held is displayed in Figure 13.

> **Figure 13: Multiple Sharp Keys**
>
> ![Multiple Sharp Keys](/images/milestone1.4.png)

After that, a keyboard produces sound so that was the logical next step. This was done by firstly creating an oscillator that uses a digital synthesizer to produce a tone when any key is pressed and stopping the sound once the note is removed. After that calculating a frequency based on the note number to attain specific note tones (Music and Coding, 2022). This was done by the following script:

```JavaScript
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  let soundCTX;

  const startButton = document.querySelector('button');
  const oscillators = {};

  startButton.addEventListener('click', () => {
      soundCTX = new AudioContext();
      startButton.style.display = 'none';
  });
  function midiToFreq(number){
      const a = 440; //Hz
      return (a/32) * (2 ** ((number - 9) / 12));
  }

  function noteOn(note, velocity){
      const osc = soundCTX.createOscillator();

      const oscGain = soundCTX.createGain();
      oscGain.gain.value = 0.33;

      const velocityGainAmount = (1/127) * velocity;
      const velocityGain = soundCTX.createGain();
      velocityGain.gain.value = velocityGainAmount;

      osc.type = 'sine'; //sine, square, triangle, sawtooth
      osc.frequency.value = midiToFreq(note);

      osc.connect(oscGain);
      oscGain.connect(velocityGain);
      velocityGain.connect(soundCTX.destination); // Connect the oscillator to speaker output

      osc.gain = oscGain;

      oscillators[note.toString()] = osc;
      osc.start();
  }

  function noteOff(note){
      const osc = oscillators[note.toString()];
      const oscGain = osc.gain;

      // This stops the clicking sound when releasing the note due to the sine wave
      oscGain.gain.setValueAtTime(oscGain.gain.value, soundCTX.currentTime);
      oscGain.gain.exponentialRampToValueAtTime(0.0001,soundCTX.currentTime + 0.03);
      setTimeout(() => {
          osc.stop();
          osc.disconnect();
      }, 20);

      delete oscillators[note.toString()];
  }
```

The last part of milestone 1 was to create an animation displaying the required notes to be pressed as visual representation (McCaffrey, 2021). Initially starting off with a simple animation of a single note displaying over a single line, and then progressing to multiple notes on a single line, and then to multiple notes over multiple lines using a random number generator to generate the element height of the note with an adaptable speed difficulty resulting in the following:

> **Figure 14: Note Animation**
>
> ![Note Animation](/images/milestone1.5.png)

[View Completion of Milestone 1 Code Here](https://github.com/KieranBest/Individual-Project/blob/b078ba14acc521815c97ba47adf030f441f26e55/script.js#L408)

##### Milestone 1 - Challenges

###### 4th November 2022

A bug appeared that when you click both a sharp key and a major key and remove the major key the sharp key should stay lit up on the visual keyboard, however when removed it returned the sharp key to the original colour despite still holding it. This was fixed by creating an if statement with 2 variables, 1 for the sharp key and 1 for the major key. This allowed for the sharp key to stay lit up when the major key was removed and vice versa.

[View Fix Here](https://github.com/KieranBest/Individual-Project/blob/d62134388a64e79a09bd9583056b95e7f6155fc0/script.js#L127)

###### 16th November 2022

Following the previous bug, when multiple sharp keys are pressed the last 1 pressed stays lit up, however previous sharp keys are overwritten. Trying to fix this bug by clearing the canvas to avoid the build up of "residue" of lines on the canvas and redisplay the held notes broke multiple functions and caused new bugs. This included:

- Correct placement for notes displayed on the staff.
- Correct number of notes pressed displayed on the staff.
- Bug in which the octaves are causing a new staff key press circle to appear when no key is pressed.
- Pressing sharp keys deletes the visual keyboard.
- Pressing major keys is not displayed on the visual keyboard.

The initial bug took much longer to fix than anticipated and was eventually fixed by creating a new array to store sharp notes along with numerous 'if' statements to check if the note is a major or sharp, as well as if any notes are in the 'heldNoteList' array.

[View Fix Here](https://github.com/KieranBest/Individual-Project/blob/d1e0c7baa5195c09c53deece297949a013ec3b5e/script.js#L95)

[View Fix Here](https://github.com/KieranBest/Individual-Project/blob/d1e0c7baa5195c09c53deece297949a013ec3b5e/script.js#L288)

###### 15th December 2022

Trying to create a successful flow for the notes across the screen has proved harder than intially thought, the while monitoring the fps it appears to alter slightly when new notes are added to the screen, therefore creating an average fps based on 1000 frames seems to have fixed the problem.

[View Fix Here](https://github.com/KieranBest/Individual-Project/blob/2c1641df990d89f15e4e1baae9ae6fd9a602f3dc/script.js#L495)

#### Milestone 2

##### Milestone 2 - Objectives

At the beginning of milestone 2, I had my first meeting with my stakeholder to discuss the project and to determine the next steps of the application. We discussed:

- How the application was going to be adaptable to the user's ability and the most beneficial way the levels should progress. Creating that sense of responsiveness to how the user is playing and making it adaptive to the user's skill level. This would then create a more enjoyable experience for the user and would therefore lead to a more educational experience for the user.
- Usability features that could be implemented later on such as:
  - A similar feature to “Finger Number Hints” in "Sythesia" where the user can see which finger should be used for which note.
  - A feature that teaches users how to roll up and down the keyboard smoothly.
- The application could track the users progress and display it in a way that would be understandable and beneficial to the user.

It was decided that the levels in the application should have the flow depicted in Figure 15.

> **Figure 15: Level Flow**
>
> ![Level Flow](/images/milestone2.1.png)

Again, breaking these objectives down  into simple steps and assigning weights to better manage my time throughout the milestone resulted in the following:

- Create Level System - 2
- Create Level 1 - Right Hand, Without Moving Hand - 1
- Create Level 2 - Right Hand, Roll Up and Down 1 Octave - 1
- Create Level 3 - Right Hand, Random Notes Across 1 Octave - 1
- Create Level 4 - Right Hand, Roll Up and Down 1 Octave Including Sharps and Flats - 1
- Create Level 5 - Right Hand, Random Notes Across 1 Octave Including Sharps and Flats - 1
- Create Level 6 - Right Hand, Introduce 3 Note Chords in Order - 1
- Create Level 7 - Right Hand, Random Order of 3 Note Chords - 1
- Create Level 8 - Left Hand, Without Moving Hand - 1
- Create Level 9 - Left Hand, Roll Up and Down 1 Octave - 1
- Create Level 10 - Left Hand, Random Notes Across 1 Octave - 1
- Create Level 11 - Left Hand, Roll Up and Down 1 Octave Including Sharps and Flats - 1
- Create Level 12 - Left Hand, Random Notes Across 1 Octave Including Sharps and Flats - 1
- Create Level 13 - Left Hand, Introduce 3 Note Chords in Order - 1
- Create Level 14 - Left Hand, Random Order of 3 Note Chords - 1
- Create Data Capture - 1
- Adapt Levelling System to Suit Capturing Data - 1
- Create Level 15 - Play Simple Song Using Both Hands - 1

##### Milestone 2 - Time Management

```mermaid
gantt
    title Figure 16: A Gantt Diagram
    dateFormat  YYYY-MM-DD

    section Milestone 2
    Create Level System                                       :a7, 2023-01-06, 14d
    Create Level 1                                            :a7, 2023-01-06, 14d
    Create Level 2                                            :a8, after a7, 14d
    Create Level 3                                            :a8, after a7, 14d
    Create Level 4                                            :a8, after a7, 14d
    Create Level 5                                            :a8, after a7, 14d
    Create Level 6                                            :a9, after a8, 14d
    Create Level 7                                            :a9, after a8, 14d
    Create Level 8                                            :a9, after a8, 14d
    Create Level 9                                            :a10, after a9, 14d
    Create Level 10                                           :a10, after a9, 14d
    Create Level 11                                           :a10, after a9, 14d
    Create Level 12                                           :a10, after a9, 14d
    Create Level 13                                           :a10, after a9, 14d
    Create Level 14                                           :a10, after a9, 14d
    Create Data Capture                                       :a11, after a10, 14d
    Change Levelling system                                   :a11, after a10, 14d
    Create Level 15                                           :a11, after a10, 14d
```

##### Milestone 2 - Implementation

Most of my time in milestone 2 was creating the levelling system and how the application would navigate between levels. In order to do this, I created a class that contained every detail of all the levels. This was then accessed everytime the users score changed to determine whether the level needed to be increased or decreased. The full code for every level can be found [here](https://github.com/KieranBest/Individual-Project/blob/3d1d01a6edbadef9c1179c8599a80aac79286f39/DynamicDifficulty.js#L1)

If we take a look at levels 2-5 for example:

```JavaScript
  2:{ // roll up and down 7 notes to teach moving fingers correctly
    speed: 1,
    hitScreenPercentage: 0.1,
    recurringNotes:4,
    numberOfNotes: 1,
    requiredScoreToProgress: 25, // up and down twice
    requiredScoreToRegress: -10,
    down: true
    },
  3:{ // random majors in octave
    speed: 1,
    hitScreenPercentage: 0.1,
    recurringNotes:4,
    numberOfNotes: 1,
    trebleGeneratorSize: 7,
    requiredScoreToProgress: 20,
    requiredScoreToRegress: -15,
  },
  4:{ // roll up and down including sharps
    speed: 1,
    hitScreenPercentage: 0.1,
    recurringNotes:4,
    numberOfNotes: 1,
    requiredScoreToProgress: 22,
    requiredScoreToRegress: -20,
    down: true,
    sharp:false
  },
  5:{ // random notes including sharps
    speed: 1,
    hitScreenPercentage: 0.1,
    recurringNotes:4,
    numberOfNotes: 1,
    sharpChance: 0.33,
    requiredScoreToProgress: 20,
    requiredScoreToRegress: -20
  },
```

We can see that the score required to progress to the next level is different due to the level requirements, level 2 needs 25 correct notes because when you roll up and down an octave (7 notes) twice, there are 25 keys to push. Whereas level 4 has 22 because rolling up and down an octave once gives 22 notes. The score required to regress increases as the user progresses through the levels due to the complexity of levels increasing. This allows a larger margin of error and allows the users score to be able to fluctuate in the distance between score requirements.

To understand how the application works it is important to understand the variables within this 'DynamicDifficulty' class, the speed is adjustable for all levels, however I decided to keep it at 1 due to increasing the speed in which notes move across the screen can add even more difficulty which I felt was unnecessary at the time. The 'hitScreenPercentage' is the percentage of the screen that the user is able to press the note and it be considered correct. This is worked out by 2 invisible lines either side of the 'hitMarker' called the 'lowerBoundary' and 'upperBoundary'. If the note required ('this.x') reaches between these boundaries then the note is considered correct.

```JavaScript
  lowerBoundary = hitMarker-((window.innerWidth*DynamicDifficulty[difficultyLevel].hitScreenPercentage)/2);
  upperBoundary = hitMarker+((window.innerWidth*DynamicDifficulty[difficultyLevel].hitScreenPercentage)/2);

  if(this.x > lowerBoundary && this.x < upperBoundary);
```

'recurringNotes' only changes when progressing from level 1 to 2, and 14 to 15. This is due to the same reason as changing the speed, in order to ensure that the application is applicable to a wide range of audiences, it is important to not drastically change the difficulty every time the level changes. 'numberOfNotes' is the number of notes that are required at any 1 moment, this is the difference between a single note, or a chord which are only implemented in levels 6, 7, 13 and 14. These chord requirements use the same system as accessing the difficulty, a chord class that contains all chords and their note details (School of Rock, 2023). This can be found [here](https://github.com/KieranBest/Individual-Project/blob/3d1d01a6edbadef9c1179c8599a80aac79286f39/Chords.js#L1).

```JavaScript
  const trebleChords = {
    1:{ // a Major  (A) A - C# - E
      1: [4, "major"],
      2: [3, "sharp"],
      3: [2, "major"]
    },
    2:{ // a minor (Am) A - C - E
      1: [4, "major"],
      2: [3, "major"],
      3: [2, "major"]
    },
```

The first number is the 'trebleChords' object that is used to access the chord values, the value of that object is another object that contains the note number as the key and an array as the value. Within the array the first number in the location on the staff the note will be displayed and the second value is the type of note, major or sharp.

Levels 2 and 4 contain a boolean key named 'down' that depicts whether the flow of notes is going up or down the octave and is determined within the 'animatingNotes' class as seen below.

```JavaScript
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
```

The only difference between levels 2 and 4 is that in level 4, sharp notes have been introduced and therefore the rolling implementation has been adapted to include an 'if' statement to determine whether the note contains a '#' in the name. In level 5, 'sharpChance' is introduced, this is a float value that determines the chance of a sharp note appearing. This is implemented by whether a random number generator is more than the 'sharpChance' value, if it is then the note is a major and the image produced for that note is represented as as. If it is less than 'sharpChance' then the note is a sharp and the image produced is represented as so.

```JavaScript
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
```

Once levels 1-7 were created, creating levels 8-14 were pretty straight forward as the values portraying the height of required notes on the staff just needed to be adapted to change the notes from treble to bass which proved much simpler than originally intended.

After that, creating a system to capture data was the next task, capturing user data to understand how the user plays and be able to view common trends would be extremely beneficial for the user to understand how they can improve. I decided to do a nested object for the user's data capture. Every time the user pressed a note, the application would store a large collection of data, this included:

```JavaScript
  const noteNumberProgression = {
    expectedHitTime: currentExpectedHitTime,
    actualHitTime: currentActualHitTime,
    differenceInHitTime: currentActualHitTime.time-currentExpectedHitTime.time,
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
```

Then every time the user level increased or decreased, the details of that level along with every note collection would be stored such as:

```JavaScript
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
```

The final task for milestone 2 was to be able to play a simple song that uses both hands, to enable the user to bring together everything they have learnt and combine both hands to play. The idea of this stage of the application is to again start simple and not overload the user, therefore the song 'Happy Birthday' was chosen due to it only user single notes on both treble and bass. The future development of this project would see the addition of more complex songs that use chords.

##### Milestone 2 - Challenges

###### 21st February

When saving user data for statistical analysis it has become apparent that when changing level the notes on the previous level are still displayed but are recorded as the next level. For example, when progressing from a single note level to a chord level, the single notes are recorded in the chord levels statistics.

Scoring was fixed by accessing the number of notes required and accessing whether 'notesHeldList' array contained the required notes.

[View Fix Here](https://github.com/KieranBest/Individual-Project/blob/07ff64c7daeefd05153f44195ea2733348d7a717/script.js#L482)

###### 6th March

When creating the 15th level, the problem with trying to make it an actual song was that:

- The application uses a oscillator to create the sound, so the sound is never going to be pitch perfect unless I go through and change the frequency of each note. Which is do able, except it would take further time to do so that I do not have for this project. This could go down as a future development idea, to change the sound produced to use actual piano sounds.
- The frame rate for my monitor is different to other monitors, and that is what is used to create the movement of the notes across the screen. Therefore the song will have a different speed on different monitors, which I am unaware of how to fix at this moment in time. Whilst this is detrimental to the user experience, this application is just a prototype and had I known this would affect me when I created the animation for the notes, I would have researched into a better method for creating the animation.

#### Milestone 3

##### Milestone 3 - Objectives

Before meeting with the stakeholder I felt it would be suitable to demonstrate different ways in which the data can be visualised and attain feedback and further suggestions. So I created some ideas of graphs using 'chart JS' (Chart.js, 2023a;Chart.js, 2023b) with my data as can be seen below:

> **Figure 17: Actual Vs Expected Hit Times**
>
> ![Actual Vs Expected Hit Times](/images/milestone3.1.png)

In Figure 17, the black line, depicts a baseline of when the user should hit the note, the red line depicts when the user actually hit the note. If the red line is above the black, it means they hit it late, if it is below it was early.

> **Figure 18: Note Traits Overall**
>
> ![Note Traits Overall](/images/milestone3.2.png)

In Figure 18, we can see overall statistics of how many times the user:

- Pressed the correct note
- Pressed the wrong note
- Pressed the wrong amount of notes
- Pressed the note either too early or too late
- Missed the note

> **Figure 19: Note Traits Over Time**
>
> ![Note Traits Over Time](/images/milestone3.3.png)

In Figure 19, you are able to see the same data as Figure 18, however it is displayed over every period of time spent using the application as opposed to overall.

In the 3rd and final milestone, it was decided after stakeholder feedback that not only the user being able to identify key areas of improvement using visual aid, but also for a teacher to be able to view all students progress and data visually. This would allow the teacher to identify key areas of improvement for each student. This would be done by creating a teacher login and a student login, the teacher would be able to view all students progress and the student would be able to view their own individual progress. Among other feedback, it was also explained that it may be more beneficial to measure some statistics against how much time the user has used the application, rather than the number of notes they have played. This would allow for a more accurate representation of the user's progress as my stakeholder explained, the more time you spend learning piano, the better you will become. It was also suggested to create features such as:

- A new scatter graph comparing:
  - Accuracy of pitch (%)
  - Accuracy of timing (%)
  - Duration of practice (minutes)
  - Accuracy of chords (%)
  - Number of perfect hits
- Usability buttons that enable the user to manually change the speed if they find the current setting to fast or slow
- Create an instruction manual upon opening the application to explain how it works and how to gain the most from it
- Change features on the animation of the staff to depict whether the user hit the note correctly or not, such as a green indicator for correct and red for incorrect
- Display the name of the note required moving along in the animation above the staff

Breaking down these objectives, organising them in order of most importance and assigning weights based on difficulty, led to this:

- Create Offline Storage for JSON Data Files - 1
- Create Graphs from JSON Data Files - 2
- Create Express API with Cookies - 2
- Create MongoDB - 1
- Link Express API with MongoDB - 2
- Extract data from database and create visual representation - 3
- Create log in for users - 2
- Create teacher/student accounts - 2
- Create graph for teachers that allow teacher profile to view all students progress statistics aswell as comparison bar chart.
- Create accuracy graph comparing left hand against right hand.
- Create a scatter graph containing: - 1
  - Accuracy of pitch (%)
  - Accuracy of timing (%)
  - Duration of practice (minutes)
  - Accuracy of chords (%)
  - Number of perfect hits
- Create user interface features such as:
  - Creating a difficulty setting that would affect the speed in order to be more applicable to the younger or disabled audiences E.g. 'Easy', 'Medium' and 'Hard' buttons - 1
  - Creating an instruction manual for how to use the application - 1
  - When the note is hit correctly, remove it from the staff - 1
  - When the note is hit correctly, display the note pressed in green on both the visual keyboard and the staff - 1
  - When the note is hit incorrectly, display the note pressed in red on both the visual keyboard and the staff - 1
  - Display the note/chord name above the staff whilst moving across the screen - 1

##### Database Design

So far when we are saving data for an individual user we are currently storing it as a JSON document in the browers local storage, it is currently stored in the following format (this depicts the first note from the first level):

```JSON
{
  1:[
    {
      "currentLevel":1,
      "hitScreenPercentage":0.1,
      "numberOfNotes":1,
      "numberofNotesinLevel":5,
      "recurringNotes":2,
      "requiredScoreToProgress":5,
      "requiredScoreToRegress":undefined,
      "userNoteProgression"[
        {
          1:[
            {
              "actualHitTime":[
                {"h":20,"m":21,"ms":17,"s":14,"time":1682364073969}],
              "correctNote":true,
              "correctY1Hit":false,
              "correctY2Hit":false,
              "correctYHit":true,
              "deductionCode":0,
              "deductionReason":"",
              "differenceInHitTime":-85,
              "distanceBetweenPreviousNoteRequiredAndCurrentRequired":-2,
              "expectedHitTime":[
                {"h":20,"m":21,"ms":17,"s":14,"time":1682364074017}],
              "hand":"right",
              "major1":true,
              "major2":undefined,
              "major3":undefined,
              "missedNote":false,
              "noteEntered":2,
              "noteGapBetweenEnteredAndRequired":0,
              "noteNumberInGame":1,
              "noteRequired":2,
              "noteoff":[
                {"h":20,"m":21,"ms":194,"s":14,"time":1682364074194}],
              "previousNoteRequired":null,
              "timeHeldNote":418,
              "withinExtraBoundary":false
            }],
            2:[
              {
```

> **Figure 20: Document Database Design**
>
> ![Document Database Design](/images/milestone3.4.png)

This can be adapted into putting into a MongoDB, the database itself will be called 'pianoData', and each user will have a different collection, named after the user's username. There will be a separate collection that contains all students details, including their username, name, occupation (student or teacher). This will allow teachers the ability to view multiple students progress.

##### Milestone 3 - Time Management

```mermaid
gantt
    title Figure 21: A Gantt Diagram
    dateFormat  YYYY-MM-DD

    section Milestone 3
    Create Offline Storage for JSON Data Files                    :a12, 2023-03-17, 14d
    Create Graphs from JSON Data Files                            :a12, 2023-03-17, 14d
    Create Express API with Cookies                               :a13, after a12, 14d
    Create MongoDB                                                :a14, after a13, 14d
    Link Express API with MongoDB by Saving User Data to MongoDB  :a14, after a13, 14d
    Extract Data from Database and Create Visual Representation   :a15, after a14, 14d
    Create Log in for Users                                       :a15, after a14, 14d
    Create Teacher/Student Accounts                               :a15, after a14, 14d
    Enable Teachers to View all Students Statistics               :a15, after a14, 14d
    Create Accuracy Graph Comparing Left Hand Against Right Hand  :a16, after a15, 14d
    Create New Scatter Graph                                      :a16, after a15, 14d
    Creating a Difficulty Setting that Controls Speed             :a16, after a15, 14d
    Creating Instruction Manual                                   :a16, after a15, 14d
    When the Note is Hit Correctly, Remove it from the Staff      :a16, after a15, 14d
    Display the Note Pressed in Green when Pressed Correctly      :a16, after a15, 14d
    Display the note pressed in red when Pressed Incorrectly      :a16, after a15, 14d
    Display the note/chord name above the staff                   :a16, after a15, 14d
```

##### Milestone 3 - Implementation

Due to the amount of feedback and suggestions for the 3rd milestone, and being able to see this in the gantt chart [here](#milestone-3---time-management), it was not possible for me to complete all of the [objectives](#milestone-3---objectives). I created the MongoDB and created a connection using an Express Server, changing the application to a client server model using a MERN stack due to the client and server being unable to fulfill a 'POST' request, however that is as far as I got due to unforeseen circumstances both academically and personally. You can see how I tried to overcome my academic issues [here](#13th-april).

##### Milestone 3 - Challenges

###### 20th March

When creating a pie chart it was perfect if the user chooses the pie chart graph first, however if the user chose either of the others the pie would then become a doughnut graph.

```JavaScript
const myChart = new Chart(
  document.getElementById('myChart'),
  config
)

 myChart.data.labels = ['Number Of Correct Hits','Number Of Wrong Hits','Number Of Wrong Number Hits',
    'Number Of Out Of Bound Hits','Number Of Missed Notes']
  myChart.data.datasets[0].label = ""
  myChart.data.datasets[0].data = [numberOfCorrectHits,numberOfWrongHits,numberOfWrongNumberHits,numberOfOutOfBoundHits,numberOfMissedNotes]
  myChart.data.datasets[0].backgroundColor = [
    'red',
    'blue',
    'yellow',
    'green',
    'black'
  ]
  myChart.data.datasets[0].borderColor = [
    'red',
    'blue',
    'yellow',
    'green',
    'black'
  ]
  myChart.update()
```

This was because it was still storing the other datasets used to create the other graphs, to rectify this I initially used the pop() function

``` Javascript
  myChart.data.labels.pop()
  myChart.data.datasets.forEach((dataset) => {
    dataset.data.pop()
  })
  ```

However when more than 1 dataset existed, this did not fix the bug. Therefore the fix was to set the length of the dataset to 0 or 1 depending on the type of graph being displayed and then reinstate a dataset using the required data.

[View Fix Here](https://github.com/KieranBest/Individual-Project/blob/b500183ec3c41f0e1323456b9165090d564846d4/dataAnalysis.js#L101)

###### 13th April

Initially I tried to create the server using Express.js, and the client using Vue.js; however they would not connect to each other and instead returned errors. So then I followed a tutorial on how to create a MERN application as I needed to use a MongoDB and I thought this would be the simplest way to get the server and client working whilst also using a database when I have limited time available (The Net Ninja, 2022)(Programming with Mosh, 2023)(Postman, 2023). However, trying to create a server linking to a client by following tutorials such as those listed below, I could still not get the posting to work properly. Querying this online, it was suggested to use 'Postman' to test http requests, however on doing so it would return a 401 error (StackOverFlow, 2021)(Community Postman,2020)(MongoDB Developer Community, 2021). Without a successful 'POST' request working, I could not develop the client-server connection. I could not progress on this unfortunately due to time restraints from personal life commitments. This then meant that I was unable to complete most of milestone 3's objectives.

### Conclusion

#### Findings

Throughout this project 1 thing that has become apparent is that creating a timeline of sprints is not always accurate due to an inability to comprehend the difficulty of said task. For example creating a level system had originally been anticipated to hold a weighted value of 2, however this task only took 20 minutes to successfully implement. Whereas being able to press multiple keys and releasing only 1 caused multiple problems in various scenarios such as:

- Multiple major keys
- Multiple sharp keys
- Mixing major and sharp keys
- Multiple keys being displayed on the visual keyboard
- Multiple keys being displayed on the staff
- Scoring for multiple keys
- Documenting wrong notes pushed when 1 or more notes pressed does not much notes required for chords

What also became apparent during this project is while it is beneficial to have a rough structure to the project and be tasked by the stakeholder, this can cause issues down the line as the project is not always going to be structured in the most organised way when it comes to implementation. Had I better planned the extent of this project I would've planned to create the database, server, client and the account system at the beginning of the project as I believe it is one of the most complex parts of my project and should've been treated as so.

A very important lesson I learned, not only from myself but from my peers, is that having a structured work time for this project benefited me greatly, and I could see the difference in my project compared to my peers because I had my 'project day'. I planned from the beginning to work on this project every Wednesday, and I did that religously. From having that structure I was able to fulfill the majority of my research and create a very basic prototype for my project in the first semester ready for the presentation in January. This put me in good stead for the rest of the project, and set me in my way that I can achieve a lot more than I thought capable in a short space of time. This structure also proved excellent in terms of motivation, I looked forward to my project day every week was excited to implement further features and see my progress.

A large part I regret in this project is spending so much time on the levelling system, while it is interesting and intricate. My time would have been much better spent cutting milestone 2's length in half and giving that time to milestone 3. This would've allowed me to develop the server and client connection, and create a much more in depth project.

**present all the results (products, experimental findings, theories, etc.) generated during the project. This may also include some off-topic findings that were not expected, or which were side-effects of other explorations.**

#### Goals Achieved

When starting this project it was apparent that there would always be room for further improvement, but the scope of the project and how vast it could become was beyond what I could have imagined before this project began. Initially my scope of the project was to create a teaching tool that could be used either in classrooms or personal use, to teach users how to play piano and read sheet music. And since then it has greatly progressed from suggestions from my supervisor, stakeholder and personal research conducted on similar applications and now has features that I hadn't ever considered. Features such as:

- Adaptive difficulty
- Extensive levelling system on a simple progression of difficulty
- Data storage for users progression
- Visual representation of users progression

I am proud to say that by the end of the 1st milestone I successfully had a working prototype for the poster presentation in January, I confidently showcased my project in the presentation, being able to express all aspects of the project and how I planned to achieve them. Even using my research to back up conscious choices I have made for this project and potential features that could be implememented in the future.

By the end of the 2nd milestone I had created an application that was able to adapt to the users ability and alter the difficulty in order to keep the user in the "zone of proximal development". I was able to present this to my stakeholder and attain key feedback that would help me further develop my project.

**describes the degree to which the findings support the original objectives laid out for the project. The goals may be partially or fully achieved, or exceeded. Note that reporting of failures to achieve goals is important since a fundamental feature of the assessment procedures is that the processes (how you went about your project) are often as important as the products of the project.**

#### User Feedback

#### Business Evaluation

If this project was to be developed further and completed the necessary requirements and perhaps my suggested requirements then I feel this could become a marketable product similar to that of 'Synthesia' or 'P.I.A.N.O.'. However this product I feel would be better suited to school's for teaching music, it could be developed further to suit that demographic with features that would make the product more inclusive and better suited to a classroom environment. The age range this product could be suited to, could be deterministic and be developed further to suit different age ranges. A younger version perhaps for children ranged 4-11 could be filled with animated characters and bright colours, whereas a product suited for young adults ranged 12-18 could be much more simplistic in its visual design but still hold many of the same features outlined [below](#further-work).

#### Technical Evaluation

This project used a variety of technologies, all of which I deem appropriate for this project. The bulk of the project is written in JS due to the nature of the project being dependant on MIDI input, which is enabled on particular browsers making it accessible for users that may not be technologically minded, therefore making it a web application seemed like the most logical step. Within the project are certain libraries and functions such as oscillators, "requestAnimationFrame()" and 'chart.js'. An oscillator is the way sound is produced based on the value given for the frequency which is generated upon a note pressed. While this is perfectly fine for a prototype, if the project was to be developed further and marketed as a business idea, this would need to be adapted so that the sound produced is an actual piano key sound as opposed to a generated sound based on frequency. "requestAnimationFrame()" is the animation within the staff, this function is called repeatedly in order to make the required notes move across the staff in a smooth manner. To use this, I created a class that contains how each moving note will function, whether it be a single note, or a chord. Each class works independently and this then does affect different screen resolutions. To develop this further, this would need to be altered to enable the animation to work correctly off time stamps and use states to understand what is to individual notes/chords and to easily adapt what is happening between frames. 'chart.js' is a library that is used to create the visual representation of users progression. It is an excellent tool that can be used to create a variety of visual representations of data. Even though I did not get to implement the extra changes that my stakeholder required, I feel it is an excellent library to use for the purposes required.

#### Process Evaluation

The process used to create this project was the agile methodology, and while this was the correct method to use because of the consistent level of feedback, my organisation with it perhaps could've been improved. Whilst I have mentioned before that had I structured this project better in terms of content management it would have run smoother, but I also think more demonstrations to the stakeholder would've been very beneficial. Whilst having them at the end of the milestone did have its advantages, having them perhaps 1 or 2 times within the milestone could've proven a great benefit. This could have led me to not spend so much time creating levels and focus on more relevant features for a protoype application.

A big difficulty throughout this project is remembering all the named variables, because I made so many functions and so many variables that are very similar in what they store, it became very easy to become confused with what each variables purpose was. For example, there are multiple variables all for controlling the storage of currently held notes for the purpose of highlighting multiple notes on the visual keyboard and staff. Both the keyboard and staff have an array, and the staff has a overly complex design for removing these notes from the array. This has become extremely problematic because I only noticed this at a later date and by then, trying to understand what I did is extremely difficult. Therefore this is something that I definitely need to improve on in the future and will be a key area for improvement on my next project. Organising my project on an internal level will be key for larger projects in the future.

#### Further Work

Due to the time constraints and complexity of this project, there are many features that I did note have time to implement that were suggested by my stakeholder such as:

- Creating a log in system for both teachers and students
- Connecting to a database to:
  - Store user data
  - Retrieve user data
- Enable teachers to:
  - View an overview of all students progress in 1 graph
  - Select specific students and view their progress
- Demonstrating correct fingers on notes
- Correct hand movements to reach notes
- Display of current note required to hit
- Creating accounts to enable:
  - Teachers to view all students progression
  - Students to log in and use the application from any device
- New graphical analysis such as:
  - Scatter graph containing:
    - Accuracy of pitch (%)
    - Accuracy of timing (%)
    - Duration of practice (minutes)
    - Accuracy of chords (%)
    - Number of perfect hits
  - Accuracy graph comparing left hand against right hand
- Adjustable difficulty to determine starting speed, this could be represented as buttons initially, and progressed into an adjustable scale
- An initial index page that contains user instructions and how to work the application
- Enable the note required to disappear once the user hits the note with a colour marker of green when correct and red when incorrect

As are there many features I would've liked to have implemented to make this a much more realistic prototype such as:

- Adding to the levelling system more levels that included more complex songs
- Implement an achivements system, for example, achieving a 95% pass rate earns a badge or achievement
- Adding a social side to the application that would enable users to attain feedback from their teachers as well as show off their achievments to their peers
- Creating a leaderboard with different attributes such as:
  - Most time spent practicing
  - Most perfect hits in a row
  - Highest accuracy (%)
- Adding a library of songs that allows the user to choose what to learn (this then becomes much more enjoyable for each individual user as they are not forced to learn a song they have no interest in)
- Making the application much more visually appealing with colour changing backgrounds and a more appealing interface
- Allow teachers to pick specific lessons for students, such as scales, chords, particular songs, etc.
- Creating a testing page for teachers to test their students and determine their level of understanding of certain concepts.

#### Final Evaluation

Whilst I feel a great achievement for what I have achieved, how I planned this project, and how I executed it with strict time management during the 1st and 2nd milestone. I feel I did not succeed in this project due to the final milestone. I did not achieve anywhere near what I wanted to in this milestone, I knew I was not going to get it all done because of the vast amount of features I had tasked myself to implement, and the lack of time to do so. This can be seen in [Figure 19](#milestone-3---time-management) where all objectives can be seen finishing 26th May, however the required finish time for this project was the 14th April. That is 6 weeks less than the time needed to complete this milestone, and that's not accounting for any challenges and delays that may have occurred.

If I were to do this project again, there are a multitude of changes I would make, firstly structuring the project better and understanding fully the requirements of the project. I would put milestone 3 as milestone 1, working on the server/client connection first, implement the connection to a mongo database, and ensure the http requsts work effectively. Being able to 'POST' and 'GET' data to and from the database is a large part of this project and should've been treated as the most important. From there creating the application in the order I did but putting less time into the levelling system. This only needed to be a basic representation with more a maximum of 4 levels to be able to demonstrate the reponsiveness of the levelling system along with visual representation of the users progress.

Restructuring the project, increasing the number of stakeholder demonstrations and feedback, and shortening the levelling system would have enabled me more time to implement many more features and allowed this project to have produced the MVP product that would prove that this application is a viable product and could fulfill its purpose of successfully teaching users how to play piano and read sheet music whilst simultaneously showing users how they can improve their skills.

### References

Caniuse (2023) [caniuse.com](https://caniuse.com/?search=midi) (Accessed: 23/03/2023)

Chart.js (2023a)[Doughnut and Pie Charts](https://www.chartjs.org/docs/latest/charts/doughnut.html) (Accessed: 1/03/2023)

Chart.js (2023b)[Line Chart](https://www.chartjs.org/docs/latest/charts/line.html) (Accessed: 1/03/2023)

Chiu, S.C. and Chen, M.S. (2012) December. A study on difficulty level recognition of piano sheet music. 2012 IEEE International Symposium on Multimedia, pp. 17-23.

Community Postman (2020) [How to resolve error 401 Unauthorized in Postman](https://community.postman.com/t/how-to-resolve-error-401-unauthorized-in-postman/17318/5) (Accessed: 6/4/2023)

Educational App Store (2022) [Best Apps to Learn Music](https://www.educationalappstore.com/app-lists/best-apps-music-learning)(Accessed: 18/11/2022)

Graesser, A.C. et al.(2012) Intelligent tutoring systems. APA educational psychology handbook, 3:(Application to learning and teaching), pp. 451-473.

Jest (2022) [Getting Started](https://jestjs.io/docs/getting-started) (Accessed: 26/10/2022)

Kopiez, R. and In Lee, J. (2008) Towards a general model of skills involved in sight reading music. Music education research, 10(1), pp.41-62.

López‐Íñiguez, G. and Pozo, J.I. (2014) The influence of teachers’ conceptions on their students’ learning: Children's understanding of sheet music. British Journal of Educational Psychology, 84(2), pp.311-328.

Lowe, J. (2001) Computer-base education: Is it a panacea? Journal of Research on Technology in Education, 34(2), pp. 169-171.

McCaffrey, J (2021) [Using RequestAnimationFrame and Classes in JavaScript](https://www.youtube.com/watch?v=9Sxo7P3F3m0&t=322s) (Accessed: 7/12/2022)

mdn Web Docs (2023) [Introduction to automated testing | MDN](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing) (Accessed: 26/10/2022)

MongoDB Developer Community (2021) [MERN Stack Tutorial Error – NOT](https://www.mongodb.com/community/forums/t/mern-stack-tutorial-error-not/107881) (Accessed:1/4/2023)

Musacchia, G. and Khalil, A. (2020) Music and Learning: Does music make you smarter. Frontiers for Young Minds, 8

Music and Coding (2022) [JavaScript MIDI Synth Tutorial - Part 2 | Playing notes using an oscillator](https://www.youtube.com/watch?v=dV6V2Ptx_CY) ( Accessed: 30/11/2022)

Papinczak, Z.E., Dingle, G.A., Stoyanov, S.R., Hides, L. and Zelenko, O. (2015) Young people's uses of music for well-being. Journal of Youth Studies, 18(9), pp.1119-1134.

Postman (2023) [Overview](https://learning.postman.com/docs/introduction/overview/) (Accessed: 6/4/2023)

Programming with Mosh (2023) [React Tutorial for Beginners](https://www.youtube.com/watch?v=SqcY0GlETPk) (Accessed: 31/3/2023)

Reid, D (2022) [How to dynamically resize the canvas with JavaScript in under five minutes](https://www.youtube.com/watch?v=uq66IuqYdWg) (Accessed: 9/11/2022)

Rogers, K. et al. (2014) P.I.A.N.O.: Faster Piano Learning with Interactive Projection. Proceedings of the Ninth ACM International Conference on Interactive Tabletops and Surfaces, pp. 149-158.

Sampayo-Vargas, S., Cope, C.J., He, Z. and Byrne, G.J. (2013) The effectiveness of adaptive difficulty adjustments on students' motivation and learning in an educational computer game. Computers & Education, 69, pp.452-462.

School of Rock (2023) [Piano Chords For Beginners](https://www.schoolofrock.com/blog/piano-chords-for-beginners) (Accessed: 7/2/2023)

Skinner, B. (2012) The science of learning and the art of teaching. Reading in Educational Psychology, 66, pp. 301.

StackOverFlow (2021) [getting unauthorized 401 error in mern application](https://stackoverflow.com/questions/70045203/getting-unauthorized-401-error-in-mern-application) (Accessed: 1/4/2023)

Swaminathan, S. and Gopinath, J.K. (2013) Music training and second-language English comprehension and vocabulary skills in Indian children. Psychological Studies, 58, pp.164-170.

Synthesia (2022) [Synthesia Game](https://synthesiagame.com/) (Accessed: 18/11/2022)

Tanner, G. (2020) [An Introduction to testing in JavaScript](https://gabrieltanner.org/blog/testing-introduction/) (Accessed: 26/10/2022)

The Net Ninja (2022) [Complete MongoDB Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA) (Accessed: 31/3/2023)

Yuksel, B.F. et al. (2016) Learn piano with BACh: An adaptive learning interface that adjusts task difficulty based on brain state. Proceedings of the 2016 chi conference on human factors in computing systems, pp. 5372-5384.

Zohaib, M. (2018) Dynamic Difficulty Adjustment (DDA) in computer games: A review. Advances in Human-Computer Interaction, 2018

### Appendices

#### Meeting Notes

##### Friday 14th October

Meeting with supervisor to confer about project scope and initial starting point:

- Understand basic MIDI Input [example](https://github.com/superLimitBreak/webMidiTools/blob/master/webMidiLog.html)
- Gain understanding in HTML5 canvas

##### Friday 21st October

Meeting with supervisor to gain insight into oscillator type as well speaking about key press event registering. Also created a rough order of objectives for the required features:

- Input from keybord to terminal
- Draw graphical shapes
- Keyboard input manipulates shapes in some way
- Convert key pressed intp human readble form
- Algorithum to draw graphcally draw keyboard with shapes
- Keyboard input updates graphicsal keyboard with keys pressed (multiple keys if needed)
- Keyboard resizeable to canvas
- Draw sheet stave? Trebble cleff?
- Draw note on stave when key pressed
- Produce tone on key press (note on and note off)
- Actual note played on key press
- Note moves across stave (repeat)
- Note repeats on differnt notes/lines?
- Can change speed of notes (recompile?)
- Press key at right time, raise show count
- Display more than 1 note at a time

Supervisor’s help to explain potential method of obtaining individual input note value: note value, octave, note letter etc.

> Supervisor’s Help 1
>
> ![Supervisor’s Help 1](/images/SupervisorsHelp.jpg)

Supervisor’s help to explain creating musical note along with potential ideas for drawing keyboard.

> Supervisor’s Help 2
>
> ![Supervisor’s Help 2](/images/SupervisorsHelp2.jpg)

##### Friday 4th November

Meeting with supervisor to discuss progress and making visible keyboard and staff dynamic and adapt automatically to the change of the screen size.

##### Friday 18th November

Meeting with supervisor to discuss documentation and areas needed for improvement such as:

- Conciseness of writing
- Objectives
- Format of document

##### Friday 2nd December

Meeting with supervisor to discuss mark scheme, and introduce a JS method called "requestAnimationFrame()" used to create moving animations.

[Request Animation Frame](http://www.javascriptkit.com/javatutors/requestanimationframe.shtml)

[Supervisor Example for RequestAnimationFrame](https://github.com/calaldees/paratrooper/blob/1dc2ddf1c47ab4728c78d8947ec04d57a00a500d/index.html#L984)

##### Friday 16th December

Meeting with stakeholder to discuss project and attain valuable feedback as to the progress of the current prototype. Discuss potential features and come up with steps for the next milestone. New objective for the following milestone was to create the level system with the following descriptions:

- Dominant Hand, Without Moving Hands
- Dominant Hand, Move Hand Across 1 Octave
- Dominant Hand, Introduce Sharps and Flats in the Octave
- Dominant Hand, Introduce 3 Note Chords
- Swap to Less Dominant Hand, Without Moving Hand
- Less Dominant Hand, Move Hand Across 1 Octave
- Less Dominant Hand, Introduce Sharps and Flats in the Octave
- Less Dominant Hand, Introduce 3 Note Chords
- Play Across Both Hands
- Play Across Both Hands, Introducing New Chords
- Play Across Both Hands

##### Friday 27th January

Feedback from poster presentation allowed potential users to give direct feedback with potential features, will discuss with stakeholder to attain approval for prospective features.

##### Wednesday 8th February

Meeting with supervisor to provide guidance to implement feature that collects user data as this will be very beneficial for milestone 3.

##### Wednesday 22nd February

Meeting with supervisor to discuss potentials for data to be captures and next steps in planning and research for next milestone. This includes:

- Graph Charts
- Functions such as:
  - filter()
  - map()
  - reduce()
- Offline storage and how that can be progressed to a Rest API

##### Wednesday 8th March

Meeting with supervisor to discuss heading for milestone 3, basic steps and current progression on milestone 3.
Basic guidelines include to use gitpod to create a express API connected with mongoDB.

##### Wednesday 22nd March

###### Stakeholder Meeting

Meeting with stakeholder to progress of project. Demonstrated current working prototype along with demonstrations of graphs produced. The stakeholder expressed great interest in the graphs produced, however stated the method of measurement should be changed against number of notes hit overall to a percentage of all notes hit. Along with changing names of current graphs produced. She produced some ideas of graphs to create such as:

- Accuracy with left hand against accuracy against right hand.
- A scatter graph containing:
  - Accuracy of pitch (%)
  - Accuracy of timing (%)
  - Duration of practice (minutes)
  - Accuracy of chords (%)
  - Number of perfect hits

Stakeholder expressed how viewing every single period of play could become problematic and overcomplicated to view, so dividing it into weeks and being able to select an amount of weeks or some form of selective capability could make viewing large amounts of data less complex.

A feature that the stakeholder thought would be excellent would be to create a way for a teacher to view all students progress in 1 page, to enable a bar graph to be produced to see every students average hit against the amount of time they have practised in 1 graph. This graph could be arranged in ascending or descending order to make it easier to identify the less encouraged students.

Many user interface features were brought up such as:

- Creating a difficulty setting that would affect the speed in order to be more applicable to the younger or disabled audiences.
- Creating an instruction manual for how to use the application.
- When the note is hit correctly, remove it from the staff.
- When the note is hit correctly, display the note pressed in green on both the keyboard and the staff.
- When the note is hit incorrectly, display the note pressed in red on both the keyboard and the staff.
- Display the note/chord name above the staff whilst moving across the screen.

###### Supervisor Meeting

Meeting with supervisor to discuss creating the API and different types of Docker systems. Also guidelines on where to get information on how to create the Express API.

[Supervisor Example for Using MongoDB](https://eur01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fgithub.com%2Fcalaldees%2FTeachProgramming%2Ftree%2Fmaster%2Fteachprogramming%2Fstatic%2Fprojects%2Fdata%2Fmongo&data=05%7C01%7Ck.best806%40canterbury.ac.uk%7C2e54a99d71b349707fbe08db2b831677%7C0320b2da22dd4dab8c216e644ba14f13%7C0%7C0%7C638151614242327608%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=eNuRlF7BUikr5ALIAT3XUWFJfIzdfDLI3sidgk7Lx2Q%3D&reserved=0)

[Supervisor Example for using Multi Container System](https://eur01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fgithub.com%2Fcalaldees%2FdockerWorkshop%23multi-container-systems&data=05%7C01%7Ck.best806%40canterbury.ac.uk%7C2e54a99d71b349707fbe08db2b831677%7C0320b2da22dd4dab8c216e644ba14f13%7C0%7C0%7C638151614242327608%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=vBuaJgvqbYnACNIEkhRO5HgH9XVNnpiMowGgd9CQ2Uk%3D&reserved=0)
