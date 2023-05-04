# Creating a Responsive and Dynamic Piano Education Tool

## Kieran Best

## Individual Project U10834

## Canterbury Christ Church University

## 2022/23

### Abstract

This project is aimed at creating a responsive educational tool to teach users how to play piano whilst simultaneously how to read sheet music; it will also create a visual representation of the user's learning progression from data collected from the user's input. This project will be completed using the agile framework, HTML5, CSS, JS, Gulp pipieline tool and Jest test framework.

### Acknowledgements

I would like to give thanks to my supervisor, Allan Callaghan, for all his amazing support, guidance and patience throughout this project. Also to my stakeholder, Emily Sayers, for putting her time and knowledge into helping me with her invaluable feedback, ideas and experience in both teaching and playing piano.

### Table Of Contents

- [Abstract](#abstract)
- [Acknowledgements](#acknowledgements)
- [Table Of Contents](#table-of-contents)
- [Introduction](#introduction)
- [Problem Analysis](#problem-analysis)
  - [Scope](#scope)
    - [Objectives in Scope](#objectives-in-scope)
    - [Objectives out of Scope](#objectives-out-of-scope)
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
  - [Milestone 1: 14/10/2022 - 6/1/2023](#milestone-1-14102022---612023)
    - [Milestone 1 - Objectives](#milestone-1---objectives)
    - [Milestone 1 - Time Management](#milestone-1---time-management)
    - [Conditional Flow Diagram](#conditional-flow-diagram)
    - [Milestone 1 - Implementation](#milestone-1---implementation)
    - [Milestone 1 - Sprint Review](#milestone-1---sprint-review)
  - [Milestone 2: 6/1/2023 - 17/03/2023](#milestone-2-612023---17032023)
    - [Milestone 2 - Objectives](#milestone-2---objectives)
    - [Milestone 2 - Time Management](#milestone-2---time-management)
    - [Milestone 2 - Implementation](#milestone-2---implementation)
    - [Milestone 2 - Sprint Review](#milestone-2---sprint-review)
  - [Milestone 3: 17/03/2023 - 26/05/2023](#milestone-3-17032023---26052023)
    - [Milestone 3 - Objectives](#milestone-3---objectives)
    - [Database Design](#database-design)
    - [Milestone 3 - Time Management](#milestone-3---time-management)
    - [Milestone 3 - Implementation](#milestone-3---implementation)
    - [Milestone 3 - Sprint Review](#milestone-3---sprint-review)
- [Conclusion](#conclusion)
  - [Findings](#findings)
  - [Goals Achieved](#goals-achieved)
  - [Business Evaluation](#business-evaluation)
  - [User Feedback](#user-feedback)
  - [Technical Evaluation](#technical-evaluation)
  - [Process Evaluation](#process-evaluation)
  - [Further Work](#further-work)
  - [Final Evaluation](#final-evaluation)
  - [Final Deliverable](#final-deliverable)
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

Trying to learn how to play piano can be a strenuous task, especially if you do not know how to read music. It is understood that knowledge of sheet music can lead to a much more complex understanding of music (López‐Íñiguez & Pozo, 2014) and therefore can be vastly beneficial when learning how to play piano.
The aim of this project is to create an application that teaches users to how to read and play sheet music on a piano. The application will keep score on whether the user is hitting the note on time or not and adjust the difficulty based on this. It is therefore suitable for all age ranges and abilities. It will then be able to visually represent the users educational journey and display key statistics from a period of time such as:

- Number of times the pressed note was correct
- Time difference between user pressed note and note needed to be pressed
- Number of times the note pressed was incorrect due to various reasons

This will then allow users to understand their progression and see how much they have grown as a musician. This is beneficial due to the motivation it can give a user, to see their progression and allow the user to analyse their own playing and understand how they can improve. This is key to the user getting better as it allows them to understand their strengths and weaknesses, allowing them to understand areas for improvement.

Throughout this report, I will be discussing the motivation behind the project, the process of creating this application, the challenges of this project and lastly, an evaluation that critically analyses my approach, the final product, and the process of creating this application.

### Problem Analysis

The idea of this project came from wanting to learn how to play piano, but no resources exist in which you are naturally monitored in how you play. There is no existing solution that will adapt to your individual skill level and provide feedback on how you can improve. This means that users are just blindly following tutorials, and not understanding the content they are being taught.

#### Scope

Defining this project of what is and is not required for a prototype application to teach users how to read sheet music and play piano is important to understand before starting the project to clarify the importance of certain aspects that could potentially be developed.

##### Objectives in Scope

Whilst there are many objectives within this project, it is important to make clear distinctions between the main ones and the less important ones. Using MoSCoW prioritisation we are able to understand that the application has different levels of requirements. Whilst these may all be possible developments for the application, they are not all required for my prototype project. The outlined objectives following the MoSCoW prioritisation are as follows:

'Must Have':

- The application must demonstrate which key I am pressing on both the staff and visual keyboard
- The application must be a plug in and play application, and not require installation of any software
- The application must develop my understanding by progressing to a harder difficulty
- The application must adjust its difficulty based on my current ability
- The application must teach the user how to read sheet music
- The application must produce a visual representation expressing my learning progression
- The application must be accessible via a web browser on a desktop/laptop computer

'Should Have':

- The application should allow me to clearly follow when I need to press a note

'Could Have':

- The application could tell me which note is required to be pressed by name
- The application could tell me which note I have pressed by name
- The application could signify whether I have pressed the correct key at the correct time or not
- The application could have challenges to complete
- The application could have awards for completing certain tasks
- The application could have tests to ensure understanding of the material at certain stages of the users development
- The application could teach me which finger to use on specific keys

'Won't Have':

- The application won’t allow me to pick and choose my own songs

##### Objectives out of Scope

Whilst these are not in scope for this current development, they are still possibilities for future developments of the application, such as:

- Developing graphics of main page to better suit specific age ranges or demographics (main page being the visual keyboard and staff)
- User testing with a variety of demographics
- Development of visual progress representation
- Deploying the application to a live server

#### Literature Review

##### How Do We Learn?

 Yuksel et al. (2016) explains we learn better when our cognitive workload is above a certain level. and that this is hard to achieve using videos. To meet the greatest level of education,  we must reach a “zone of proximal development”. This can be difficult due to underlying factors such as:

- Difficulty of the task
- Users’ cognitive ability
- Instructional design
- Users’ motivation

Intelligent Tutoring Systems (ITS) and Computer-Based Education (CBE) systems measure cognitive workload. 'ITS' tracks the psychological state of users through student modelling  (Graesser et al., 2012). Student modelling follows characteristics such as “subject matter knowledge, skills, motivation, and emotions.” ‘ITS’ “responds” to users states and adjusts the course, whereas human taught lessons follow a linear path (Graesser et al., 2012). PLATO was an educational tool developed back in 1961 to teach by displaying information and then asking questions. It was used in WWII to train soldiers in new protocols in a cost-efficient way. The expected response to these questions would be numerical, algebraic, words or phrases. It is taught in a linear method with no form of digression.

Lowe (2001) explains that there are many CBE systems that were developed by basic learning principles where Skinner (2012) investigated the development of reinforcing “theory to human learning”, such as:

- Computer-Based Instruction (CBI)
- Computer-Aided Instruction (CAl)
- Computer-Managed Instruction (CMI)
- Computer-Based Training (CBT)
- CBI delivered on the Internet or intranet
- Internet-Based Training (IBT)
- CBI delivered by CD-ROM

Educational computer games have proven to be just as effective methods of education due to their ability to "increase students' motivation". It does this by allowing the user a fun experience as well as an educational 1 (Sampayo-Vargas, 2013). Zohaib (2018) explains that dynamic difficulty adjustment will adjust the difficulty based on the users "individual traits", factors including dexterity, learning and adapting ability, and emotional characteristics are measured to adjust the difficulty to an appropriate level of challenge for each individual. Much like that of our "zone of proximal development", Csikszentmihalyi (2009, cited in Zohaib, 2018) states that users travel through a "flow channel" as depicted in Figure 1.

> **Figure 1: Flow Channel**
>
> ![Csikszentmihalyi (2009, cited in Zohaib, 2018)](/images/flowChannel.png)
>
> *(Csikszentmihalyi, 2009, cited in Zohaib, 2018)*

The model is designed to avoid creating a difficulty too easy to cause boredom, and too hard to create frustration. It was proven by Hagelback and Johansson (2009, cited in Zohaib, 2018) that users prefer to be challenged at an accurate level that adapts to their styles and need.

While proving that educational computer games enhance a student's enjoyment is not necessarily an accurate representation of the students learning, it has been proven that adaptive difficulty within educational settings increase the student's level of learning (Sampayo-Vargas et al., 2013). Sampayo-Vargas et al. explain that when comparing students progression with 3 different learning methods, adaptive difficulty proves to be more efficient than a steadily incremental difficulty game, and a written activity as seen in Figure 2.

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

Not only is sight reading beneficial to you in terms of your musical ability, but it can also be beneficial to all aspects of our lives. Musacchia and Khalil (2020) explain that musical training can give a multisensory workout and can help improve many things such as:

- Memory
- Attention span
- Reading ability
- Hearing
- Sight
- Social Awareness

Just like muscles, exercising your brain can cause it to become stronger, and the process of exercising your brain through activity is called Neuro Plasticity (Musacchia and Khalil, 2020). It has been proven that expert musicians have stronger than average brain power in auditory, visual and motor areas of the brain (Musacchia and Khalil, 2020). Neuro plasticity has also been linked with allowing the brain to be more resilient to learning of new languages. Swaminathan & Gopinath (2013) express that there is a link between music and languages and that they share processing resources; their study shows that students that are musically literate tend to have a higher ability to learn new languages than those musically illiterate.

Whilst playing an instrument is not only hugely beneficial for your brain in terms of cognitive function, it can also be beneficial for your mental well being, Papinczak et al. (2015) expresses that it is highly common for young people between the ages of 15-25 to seek out music as a way to "achieve well-being". Papinczak et al. (2015) evaluates that seeking out music for well-being leads to many positive results such as:

- Facilitation of relationships with family and friends
- Immersing in emotions
- Changing emotions
- Modifying cognitions

The sample of people Papinczak et al. (2015) used in their study "strongly believe that music played an integral role in their daily lives and was an important aspect of their well-being".

##### Similar Applications

Whilst there are similar applications to the proposed, none have the exact features. ‘Simply Guitar’ and ‘Harmony City’ (Educational App Store, 2022) will teach you how to play a song. ‘Tenuto’, ‘Piano Notes Fun’ and ‘Note Trainer Pro’ will teach you how to read music. These are all based on recordings and do not offer an interactive experience which can be detrimental to the users learning experience as explained previously in '[How Do We Learn?](#how-do-we-learn)'.

‘P.I.A.N.O.’ has a interactive projection placed on to the keyboard to enable users to understand what key to push.

> **Figure 4: ‘P.I.A.N.O.’**
>
> ![‘P.I.A.N.O.’](/images/P.I.A.N.O..png)
>
> *(Rogers et al., 2014)*

As Rogers et al. (2014) explains, the mapping of the keys provides users with a way to learn how to read sheet music. This can often be the cause of most people being put off from learning how to play an instrument. Other benefits include teaching users where to place their hands to allow them to reach all the keys.  As well as “a note visualisation based on roll notation” which will teach timing (Rogers et al., 2014) (shown in Figures 4 and 5). The downfall for this application, however, is even though it teaches hand placement for reading music, it does not teach how to read sheet music.

> **Figure 5: Note Visualisation in ‘P.I.A.N.O.’**
>
> ![Note Visualisation in ‘P.I.A.N.O.’](/images/P.I.A.N.O.2.png)
>
> *(Rogers et al., 2014)*

Going back to learning in a zone of proximal development, Yuksel et al. (2016) created 'BACh'. An application where users’ cognitive workload dictates the applications difficulty. 'BACh' measures cognitive workload using a fNIRS sensor which is not in the scope of my project (as can be seen in Figure 6).

> **Figure 6: Learn Piano with ‘BACh’**
>
> ![Learn Piano with ‘BACh’](/images/BACh.png)
>
> *(Yuksel et al., 2016)*

The most similar application to what I propose is ‘Synthesia’. An educational tool with a mass library of songs used with a MIDI keyboard for learning how to play piano using note visualisation. It also includes teaching where users hands should be to allow them full reach of keys by using a feature called “Finger Number Hints” (seen in Figure 7) in which users fingers are visually demonstrated (Synthesia Game, 2022). Whilst this is almost identical to my specification, this application does not adapt to users’ current ability and skill.

> **Figure 7: Finger Number Hints in ‘Synthesia’**
>
> ![Finger Number Hints in ‘Synthesia’](/images/Synthesia.png)
>
> *(Synthesia Game, 2022)*

#### Goals

The goal of this project is to create a prototype application that will teach users how to play piano as well as learn how to read sheet music. It will adapt to the users ability and adjust its level of difficulty based on the users performance. It will also produce a visual representation of the users progression since they have started using the application. From this the user will be able to identify key areas of improvement and will be able to see their progression.

As this is a primarily stakeholder driven project, objectives during the development process will be dictated by the stakeholder to ensure that the project is usable for its intended purpose and is fulfilling in its requirements. The stakeholder will be involved throughout the project and will provide feedback and guidance as to its development.

#### Possible Solutions

There were many ways this project could have been developed, such as:

- To create a standalone application that uses C++, there are C++ libraries developed for handling MIDI inputs such as midifile (2023), the visual graphics could be rendered using OpenGL (2022) and the sound synthesizer could use FluidSynth (2023) . This would be a very complex solution and would require time to learn the languages and libraries. The downfall of this project is that once fully developed and if deployed, it would have to be deployed to each operating system separately. This could cause issues if the application ever required updates or add-ons, however, would reduce server latencies as it would be a standalone application.
- Create a full MIDI system by using a Raspberry Pi, although this uses C++ as well, it would create a different type of project, it would be a standalone system used for the intended purpose however would be an overly complex development for a system that does not need to be.
- Develop an android application using Java for MIDI input handling and ObjectAnimator for the staff animation. Whilst this could be deployed as a live application, being an android application, it would:
  - Not be accessible to all platforms, reducing our user base
  - Make the application restricted in possible features due to the smaller screen size available on android devices. Restricted features being:
    - Teaching users which finger to use on specific keys
    - Teaching how to roll up and down octaves
    - Minimising the visual representation of the users progression

### Analysis and Requirements

#### Methodology

 The project will be created using an agile framework to support its development. It will be divided into 3 milestones each with demonstrations to users and the stakeholder to receive feedback and guidance. These milestones will be divided as such:

- September - January
- January - March
- March - April

Each milestone will be divided into 2 weekly sprints and tasks will be assigned weights (these are shown next to the objectives). Using the objectives and weights assigned to each objective I am able to plan each milestone by assigning a total weighting of 4 to each sprint, this should allow me enough time to achieve all objectives.

Each milestone will show logical steps in its production process whilst also giving clear deadlines for each sprint. It will be created using gulp.js as a pipeline tool to ensure scripts are concise and there are no duplicate variables. It will use Jest for unit testing to ensure all functions and aspects of the JS scripts work effectively. These will be created alongside the project in order to ensure useful and accurate testing is used throughout the development process.

#### Hardware and Software Stack

This application requires the user to possess a MIDI keyboard and the ability to plug into a computer or laptop device. The device will need to have a web browser that supports MIDI input such as Chrome, Edge, Firefox, and Opera (caniuse, 2023). This is to enable the application to receive MIDI input from the keyboard and translate this into usable data which the application will need to function. The keyboard used to create this project is a 'M-Audio Keystation Mini 32 MK3' that only has 32 keys, therefore the protoype product will only support this. The application will have to be modified in order to work correctly with anything larger or smaller than 32 keys.

### Implementation

#### Milestone 1: 14/10/2022 - 6/1/2023

##### Milestone 1 - Objectives

To start creating this application, I had my initial proposal to create a Minimum Viable Product (MVP) that will teach users how to play piano and read sheet music. This MVP would allow me to attain feedback on usability ideas in order to proceed in the development. So the objectives for milestone 1 were as follows:

- Create a graphical keyboard and show when notes have been pressed
- Create a visual staff and show when notes have been pressed
- Produce sound when notes are pressed
- Make notes move across the staff to depict when they need to be pressed
- Create a score system to track if the user presses the note correctly or not

To be able to manage my time more effectively, I broke these down into simple steps and assigned weights which will then be considered when managing time throughout the milestone. This then allowed me to create a Gantt chart to better visualise the progress needed.

1. Display that a key has been pressed on the terminal - 1
2. Display graphical shapes - 1
3. Keyboard input manipulates shapes in some way - 1
4. Display what Key been Pressed - 1
5. Create keyboard - 1
6. Keyboard input shows what key has been pressed on graphical keyboard  - 1
7. Display multiple keys pressed on keyboard - 3
8. Graphical keyboard resizes to canvas size - 1
9. Create music sheet outline - 1
10. Create shape on stave when note pressed - 1
11. Display multiple keys pressed on stave - 3
12. Produce tone on key press (note on and note off) - 1
13. Produce specific key tone on key press - 1
14. Note moves across stave and repeats - 2
15. Note repeats to a different line/note - 1
16. Display more than 1 note at a time - 1
17. Press key at specific time to raise count - 2
18. Ability to change speed of note - 1

##### Milestone 1 - Time Management

```mermaid
Gantt
    title Figure 8: A Gantt Chart of Milestone 1
    dateFormat  YYYY-MM-DD

    section Milestone 1
    1. Display that a Key Press on the Terminal                        :a1, 2022-10-14, 14d
    2. Display Any Graphical Shapes                              :a1, 2022-10-14, 14d
    3. Keyboard Input Manipulates Shapes                         :a1, 2022-10-14, 14d
    4. Display what Key been Pressed                             :a1, 2022-10-14, 14d
    5. Display Keyboard Graphically                              :a2, after a1, 14d
    6. Keyboard Input Displays Note Press on Graphical Keyboard  :a2, after a1, 14d
    7. Display Multiple Notes Pressed on Graphical Keyboard      :a2, after a1, 28d
    8. Graphical Keyboard Resizes to Canvas Size                 :a3, 2022-11-11, 14d
    9. Create the Music Sheet Outline                            :a3, 2022-11-11, 14d
    10. Create Shape on Music Sheet when Note Presed              :a3, 2022-11-11, 14d
    11. Display Multiple Notes Pressed on Music Sheet             :a4, after a3, 14d
    12. Produce Tone on Key Press (On and Off)                    :a4, after a3, 14d
    13. Produce Specific Note Tone on Key Press                   :a5, after a4, 14d
    14. Animated Note Moves Across Music Sheet and Repeats        :a5, after a4, 14d
    15. Note Repeats to a Different Line/Note                     :a5, after a4, 14d
    16. Display More than 1 Note at a Time on Music Sheet         :a6, after a5, 14d
    17. Press Key at Specific Time to Raise Count                 :a6, after a5, 14d
    18. Ability to Change Speed of Note                           :a6, after a5, 14d
```

##### Conditional Flow Diagram

The flow of the application is controlled by the user input as all actions for the application are dependent on the MIDI device input:

- The sound comes from the note input being registered as a number from the MIDI device input.
- The visual representation on both the keyboard and the staff comes from the note number given by the MIDI device input.
- The difficulty is adjusted based on the users’ score.
- The visual output will be dictated by the user's input and accuracy.

This is demonstrated in the following flow diagram in Figure 9:

> **Figure 9: Conditional Flow Diagram**
>
> ![Conditional Flow Diagram](/images/ConditionalFlow.png)

##### Milestone 1 - Implementation

To create this project automated testing needed to be implemented to help keep my scripts concise and ensure I conform to standard coding practices. I used gulp.js to do this by testing my JS, HTML5 and CSS scripts. To do this I needed to install the packages required, such as node and gulp, run vs code in administrator, and simply enter 'Set-ExecutionPolicy RemoteSigned' before entering'gulp' into the terminal that is in the same directory ('Client') as my HTML55, CSS, and JS files (mdn Web Docs, 2023). This can be seen as follows:

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

To start off this application I first needed to be able to access the MIDI device, ensure its connection is successful and display that a key has been pressed (Milestone 1: Objective 1). The browser will firstly ask if the connection is allowed.

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

If the user clicks 'Allow', then the MIDI device is connected, and its device details will be portayed in the console (Figure 10).

> **Figure 10: Verification of MIDI Device Connected**
>
> ![Verification of MIDI Device Connected](/images/milestone1.1.png)

If the user selects 'Block', an error message will be displayed (Figure 11).

> **Figure 11: Failure of MIDI Device Connected**
>
> ![Verification of MIDI Device Connected](/images/milestone1.1.png)

From here basic input from the MIDI device needed to be registered and enable it to manipulate the canvas element (Milestone 1: Objective 3). To ensure this works to its best capacity, I have used Jest (Jest, 2022)(Tanner, 2020) to test functions that use the values inputted from the MIDI device. After installing the packages required, use Jest, by typing 'npm test' into the terminal once located in the 'testing' directory. The tests used to ensure player input is evaluated correctly are as follows:

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

After that, understanding which note had been pressed and displayed on the graphical keyboard on the screen was straight forward (Milestone 1: Objective 6). Developing this until the user could press and release multiple keys and the notes would be displayed on a keyboard. When pressing all majors or all sharps, the solution was simple to work out, however, when mixing sharps and majors together, problems occured (this is outlined in Figure 12).

> **Figure 12: Bug in the code when mixing sharps and majors**
>
> A bug appeared that when you pressed both a sharp key and a major key and then remove the major key the sharp key should stay lit up on the visual keyboard, however when removed it returned the sharp key to the original colour despite still holding it. This was fixed by creating an 'if' statement with 2 variables, 1 for the sharp key and 1 for the major key. This allowed for the sharp key to stay lit up when the major key was removed and vice versa.
>
> [View Fix Here](https://github.com/KieranBest/Individual-Project/blob/d62134388a64e79a09bd9583056b95e7f6155fc0/script.js#L127)

Once this bug was fixed, a new bug presented itself in which when multiple sharp keys were held, the last one stayed highlighted on the visual keyboard (this is outlined in Figure 13). The solution to these bugs were tested extensively using Jest to ensure the note was being displayed on the correct key and then removed properly on the visual keyboard.

> **Figure 13: Bug in the code when multiple sharps are held**
>
>Following the previous bug, when multiple sharp keys were pressed the last 1 pressed stayed lit up, however previous sharp keys are overwritten. Trying to fix this bug by clearing the canvas to avoid the build-up of "residue" of lines on the canvas and redisplay the held notes broke multiple functions causing new bugs. These included:
>
> - Correct placement for notes displayed on the staff.
> - Correct number of notes pressed displayed on the staff.
> - Bug in which the octaves are causing a new staff key press circle to appear when no key is pressed.
> - Pressing sharp keys deletes the visual keyboard.
> - Pressing major keys is not displayed on the visual keyboard.
>
> The initial bug took much longer to fix than anticipated and was eventually fixed by creating a new array to store held notes along with numerous 'if' statements to check if the note is a major or sharp, as well as if any notes are in the 'heldNoteList' array.
>
>[View 'if' Fix Here](https://github.com/KieranBest/Individual-Project/blob/d1e0c7baa5195c09c53deece297949a013ec3b5e/script.js#L95)
>
>[View 'heldNoteList' Fix Here](https://github.com/KieranBest/Individual-Project/blob/d1e0c7baa5195c09c53deece297949a013ec3b5e/script.js#L288)

The following are tests for identifying the correct key position is identified when pressing a key on the MIDI device:

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

The next stage was to create a staff and display the note pressed on the staff (Milestone 1: Objective 9). This was difficult at first due to the values given to the note pressed by the MIDI device are programmed in a increasing order from left to right whereas the canvas element to draw the note is programmed in a decreasing order due to the canvas element height. This meant I had to create a function to convert the MIDI note value to a canvas height element. Using jest testing, I was able to depict a formula in order to automatically convert the MIDI note value to a canvas height element.

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

Multiple major notes being held is displayed in Figure 14.

> **Figure 14: Multiple Major Keys**
>
> ![Multiple Major Keys](/images/milestone1.2.png)

Multiple major notes with a sharp note being held is displayed in Figure 15.

> **Figure 15: Multiple Major Keys with a Sharp Key**
>
> ![Multiple Major Keys with a Sharp Key](/images/milestone1.3.png)

Multiple sharp notes being held is displayed in Figure 16.

> **Figure 16: Multiple Sharp Keys**
>
> ![Multiple Sharp Keys](/images/milestone1.4.png)

After that, a keyboard produces sound so that was the logical next step (Milestone 1: Objectives 12 & 13). This was done by firstly creating an oscillator that uses a digital synthesizer to produce a tone when any key is pressed and stopping the sound once the note is removed. An oscillator cannot start automatically, it needs user input to be able to start, henceforth a 'Start' button was added. After that calculating a frequency based on the note number to attain specific note tones (Music and Coding, 2022). This was done by the following script:

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

The last part of milestone 1 was to create an animation displaying the required notes to be pressed as visual representation (Milestone 1: Objectives 14 & 15)(McCaffrey, 2021). Initially starting off with a simple animation of a single note displaying over a single line, this proved harder than expected due to alter frame rates, this issue is outlined in Figure 17.

> **Figure 17: Altering Frame Rates**
>
> Trying to create a successful flow for the notes across the screen has proved harder than initially thought, the while monitoring the fps it appears to alter slightly when new notes are added to the screen, therefore creating an average fps based on 1000 frames seems to have fixed the problem.
>
>[View Fix Here](https://github.com/KieranBest/Individual-Project/blob/2c1641df990d89f15e4e1baae9ae6fd9a602f3dc/script.js#L495)

After that, the animation needed to be progressed to allow multiple notes on a single line (Milestone 1: Objective 16), and then to multiple notes over multiple lines using a random number generator to generate the element height of the note with an adaptable speed difficulty resulting in Figure 18:

> **Figure 18: Note Animation**
>
> ![Note Animation](/images/milestone1.5.png)

[View Completion of Milestone 1 Code Here](https://github.com/KieranBest/Individual-Project/blob/b078ba14acc521815c97ba47adf030f441f26e55/script.js#L408)

##### Milestone 1 - Sprint Review

At the end of the 1st Milestone, it was apparent that this project would grow consistently throughout the development process. The application was now able to react to user input on the MIDI keyboard and display this based on specific notes on both the staff and the visual keyboard. The animation on the staff was able to produce singular notes and chords, along with being able to adjust how many notes/chords would animate across the staff.

When comparing my completion of the project so far to the objectives laid out at the beginning of the milestone, I successfully completed all tickets. So far my time management has been my biggest strength, dedicating a single day a week to work on the project has enabled me plenty of time to complete all objectives.

Showing the project to my stakeholder enabled me to show proof of concept and enabled me to discuss the next steps of the project. The stakeholder was impressed with the progress of the project so far and was excited to input her own ideas into the project. She influenced me with the design of the objectives for the next milestone with her intuitive and creative ideas.

#### Milestone 2: 6/1/2023 - 17/03/2023

##### Milestone 2 - Objectives

At the end of milestone 1, I had my first meeting with my stakeholder to discuss the project and to determine the next steps of the application. Her ideas were the following:

- How the application was going to be adaptable to the user's ability and the most beneficial way the levels should progress. We designed the levelling system together to make a smooth gradual increase in difficulty, this can be seen in Figure 19. By creating that smooth gradual increase, a sense of responsiveness to how the user is playing will make it feel more adaptive to the user's skill level. This would then create a more enjoyable experience for the user and would therefore lead to a more educational experience.
- Usability features that could be implemented later on such as:
  - A similar feature to “Finger Number Hints” in "Sythesia" where the user can see which finger should be used for which note.
  - A feature that teaches users how to roll up and down the keyboard smoothly.
- The application could track the users progress and display it in a way that would be understandable and beneficial to the user.

> **Figure 19: Level Flow**
>
> ![Level Flow](/images/milestone2.1.png)

Whilst the usability features are detrimental to a finalised product, this project is merely to create a prototype product and therefore was agreed that these could be future development ideas. I decided to create slightly smaller gaps in the distance between levels which resulted in a few extra levels as you can see below. Then I assigned weights to all objectives to better manage my time throughout the milestone which resulted in the following:

1. Create Level System - 2
2. Create Level 1 - Right Hand, Without Moving Hand - 1
3. Create Level 2 - Right Hand, Roll Up and Down 1 Octave - 1
4. Create Level 3 - Right Hand, Random Notes Across 1 Octave - 1
5. Create Level 4 - Right Hand, Roll Up and Down 1 Octave Including Sharps and Flats - 2
6. Create Level 5 - Right Hand, Random Notes Across 1 Octave Including Sharps and Flats - 1
7. Create Level 6 - Right Hand, Introduce 3 Note Chords in Order - 1
8. Create Level 7 - Right Hand, Random Order of 3 Note Chords - 1
9. Create Level 8 - Left Hand, Without Moving Hand - 1
10. Create Level 9 - Left Hand, Roll Up and Down 1 Octave - 1
11. Create Level 10 - Left Hand, Random Notes Across 1 Octave - 1
12. Create Level 11 - Left Hand, Roll Up and Down 1 Octave Including Sharps and Flats - 1
13. Create Level 12 - Left Hand, Random Notes Across 1 Octave Including Sharps and Flats - 1
14. Create Level 13 - Left Hand, Introduce 3 Note Chords in Order - 1
15. Create Level 14 - Left Hand, Random Order of 3 Note Chords - 1
16. Create Data Capture - 1
17. Adapt Levelling System to Suit Capturing Data - 1
18. Create Level 15 - Play Simple Song Using Both Hands - 1

##### Milestone 2 - Time Management

```mermaid
Gantt
    title Figure 20: A Gantt Chart of Milestone 2
    dateFormat  YYYY-MM-DD

    section Milestone 2
    1. Create Level System                                       :a7, 2023-01-06, 14d
    2. Create Level 1                                            :a7, 2023-01-06, 14d
    3. Create Level 2                                            :a7, 2023-01-06, 14d
    4. Create Level 3                                            :a8, after a7, 14d
    5. Create Level 4                                            :a8, after a7, 14d
    6. Create Level 5                                            :a8, after a7, 14d
    7. Create Level 6                                            :a9, after a8, 14d
    8. Create Level 7                                            :a9, after a8, 14d
    9. Create Level 8                                            :a9, after a8, 14d
    10. Create Level 9                                            :a9, after a8, 14d
    11. Create Level 10                                           :a10, after a9, 14d
    12. Create Level 11                                           :a10, after a9, 14d
    13. Create Level 12                                           :a10, after a9, 14d
    14. Create Level 13                                           :a10, after a9, 14d
    15. Create Level 14                                           :a11, after a10, 14d
    16. Create Data Capture                                       :a11, after a10, 14d
    17. Change Levelling system                                   :a11, after a10, 14d
    18. Create Level 15                                           :a11, after a10, 14d
```

##### Milestone 2 - Implementation

Most of my time in milestone 2 was creating the levelling system and how the application would navigate between levels (Milestone 2: Objectives 1 - 7). In order to do this, I created a class that contained every detail of every level. This was then accessed every time the users score changed to determine whether the level needed to be increased or decreased. The full code for every level can be found [here](https://github.com/KieranBest/Individual-Project/blob/3d1d01a6edbadef9c1179c8599a80aac79286f39/DynamicDifficulty.js#L1)

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

To understand how the application works it is important to understand the variables within this 'DynamicDifficulty' class, the speed is adjustable for all levels, however I decided to keep it at 1 due to increasing the speed in which notes move across the screen can add even more difficulty which I felt was unnecessary at the time. The 'hitScreenPercentage' is the percentage of the screen that the user is able to press the note and it be considered correct. This is worked out by 2 invisible lines either side of the 'hitMarker' called the 'lowerBoundary' and 'upperBoundary'. If the note required ('this.x') reaches between these boundaries, then the note is considered correct.

```JavaScript
  lowerBoundary = hitMarker-((window.innerWidth*DynamicDifficulty[difficultyLevel].hitScreenPercentage)/2);
  upperBoundary = hitMarker+((window.innerWidth*DynamicDifficulty[difficultyLevel].hitScreenPercentage)/2);

  if(this.x > lowerBoundary && this.x < upperBoundary);
```

'recurringNotes' is the number of notes that move across the staff at any 1 time, it only changes when progressing from level 1 to 2, and 14 to 15. This is due to the same reason as changing the speed, in order to ensure that the application is applicable to a wide range of audiences, it is important not to drastically change the difficulty every time the level changes. 'numberOfNotes' is the number of notes that are required at any 1 moment, this is the difference between a single note, or a chord which are only implemented in levels 6, 7, 13 and 14. These chord requirements use the same system as accessing the difficulty, a chord class that contains all chords and their note details (School of Rock, 2023). This can be found [here](https://github.com/KieranBest/Individual-Project/blob/3d1d01a6edbadef9c1179c8599a80aac79286f39/Chords.js#L1).

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

The first number in the 'trebleChords' object is used to access specific chord values, the value of that object is another object that contains the note number as the key and an array as the value. Within the array the first number in the location on the staff the note will be displayed, and the second value is the type of note, major or sharp.

Levels 2 and 4 are whedre you cycle up and down an octave and therefore contain a boolean key named 'down' that depicts whether the flow of notes is going up or down the octave. It is determined within the 'animatingNotes' class as seen below.

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

The only difference between levels 2 and 4 is that in level 4, sharp notes have been introduced and therefore the rolling implementation has been adapted to include an 'if' statement to determine whether the note contains a '#' in the name.

In level 5, 'sharpChance' is introduced, this is a float value that determines the chance of a sharp note appearing. This is implemented by whether a random number generator is more than the 'sharpChance' value, if it is then the note is a major and the image produced for that note is represented as as. If it is less than 'sharpChance' then the note is a sharp and the image produced is represented as so.

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

Once levels 1-7 were created, creating levels 8-14 was pretty straight forward as the values portraying the height of required notes on the staff just needed to be adapted to change the notes from treble to bass which proved much simpler than originally thought (Milestone 2: Objectives 8 - 15).

After that, creating a system to capture data was the next task (Milestone 2: Objectives 16 & 17), capturing user data to understand how the user plays and be able to view common trends would be extremely beneficial for the user to understand how they can improve. I decided to do a nested object for the user's data capture. Every time the user pressed a note, the application would store a large collection of data, this included:

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

The only issue with this design of data capture is that when changing level, the notes currently displayed on the staff are recorded as the next level, this is outlined in Figure 21.

> **Figure 21: Data Capture Issue**
>
> When saving user data for statistical analysis it has become apparent that when changing level, the notes on the previous level are still displayed but are recorded as the next level. For example, when progressing from a single note level to a chord level, the single notes are recorded in the chord levels statistics.
>
> Scoring was fixed by accessing the number of notes required and accessing whether 'notesHeldList' array contained the required notes.
>
> [View Fix Here](https://github.com/KieranBest/Individual-Project/blob/07ff64c7daeefd05153f44195ea2733348d7a717/script.js#L482)

The final task for milestone 2 was to be able to play a simple song that uses both hands (Milestone 2: Objective 18), to enable the user to bring together everything they have learnt and combine both hands to play. The idea of this stage of the application is to again start simple and not overload the user, therefore the song 'Happy Birthday' was chosen due to it only using single notes on both treble and bass. The future development of this project would see the addition of more complex songs that use chords however this would be limited due to issues outlined in Figure 22.

> **Figure 22: Issues with Song Creation**
>
> When creating the 15th level, the problem with trying to make it an actual song was:
>
> - The application uses a oscillator to create the sound, so the sound is never going to be pitch perfect unless I go through and change the frequency of each note. This is doable, except it would take further time to do for which I did not account. This could go down as a future development idea, to change the sound produced to use actual piano sounds.
> - The frame rate for my monitor is different to other monitors, and that is what is used to create the movement of the notes across the screen. Therefore, the song will have a different speed on different monitors, which I am unaware of how to fix at this moment in time. Whilst this is detrimental to the user experience, this application is just a prototype and had I known this would affect me when I created the animation for the notes, I would have researched a better method for creating the animation.

##### Milestone 2 - Sprint Review

At the end of the 2nd Milestone, I had completed levels 1 - 14 happily, along with a fully functioning adaptive scoring system that would naturally change the difficulty based on the user's ability. I did create level 15, however as explained in Figure 22, it is not the perfect solution. It works as a prototype application however it is not what you would consider fully functioning like its predecessor levels.

Again, showing my project to my stakeholder I was overwhelmed with her reaction, she was extremely happy that I had implemented a mostly successful levelling system. We agreed that my breakdown in her levelling parameters had improved her initial specification. She was incredibly happy that I had gone above and beyond to start creating the visual representation of user data. As I explained to her, I had created a few demo graphs for user data analysis to obtain feedback and improvement suggestions on how this data can be better utilised.

#### Milestone 3: 17/03/2023 - 26/05/2023

##### Milestone 3 - Objectives

Before meeting with the stakeholder, I felt it would be appropriate to demonstrate different ways in which the data can be visualised and attain feedback and further suggestions. So I created some ideas of graphs using 'chart JS' (Chart.js, 2023a;Chart.js, 2023b) with my data as can be seen below:

> **Figure 23: Actual Vs Expected Hit Times**
>
> ![Actual Vs Expected Hit Times](/images/milestone3.1.png)

In Figure 23, the black line, depicts a baseline of when the user should hit the note, the red line depicts when the user actually hit the note. If the red line is above the black, it means they hit it late, if it is below it was early.

> **Figure 24: Note Traits Overall**
>
> ![Note Traits Overall](/images/milestone3.2.png)

In Figure 24, we can see overall statistics of how many times the user:

- Pressed the correct note
- Pressed the wrong note
- Pressed the wrong amount of notes
- Pressed the note either too early or too late
- Missed the note

When creating Figure 24, an issue was found with the creation of a pie chart, this is outlined in Figure 25

> **Figure 25 Pie Chart Issue**
>
> When creating a pie chart, it was imperative that the user chose the pie chart graph first, if the user chose otherwise then the pie would then become a doughnut graph.
>
> ```JavaScript
> const myChart = new Chart(
> document.getElementById('myChart'),
>  config
> )
>
> myChart.data.labels = ['Number Of Correct Hits','Number Of Wrong Hits','Number Of Wrong Number Hits',
>    'Number Of Out Of Bound Hits','Number Of Missed Notes']
>  myChart.data.datasets[0].label = ""
>  myChart.data.datasets[0].data = [numberOfCorrectHits,numberOfWrongHits,numberOfWrongNumberHits,numberOfOutOfBoundHits,numberOfMissedNotes]
>  myChart.data.datasets[0].backgroundColor = [
>    'red',
>    'blue',
>    'yellow',
>    'green',
>    'black'
>  ]
>  myChart.data.datasets[0].borderColor = [
>    'red',
>    'blue',
>    'yellow',
>    'green',
>    'black'
>  ]
>  myChart.update()
> ```
>
> This was because it was still storing the other datasets used to create the other graphs, to rectify this I initially used the pop() function
>
> ``` Javascript
>  myChart.data.labels.pop()
>  myChart.data.datasets.forEach((dataset) => {
>    dataset.data.pop()
>  })
>  ```
>
> However, when more than 1 dataset existed, this did not fix the bug. Therefore, the fix was to set the length of the dataset to 0 or 1 depending on the type of graph being displayed and then reinstate a dataset using the required data.
>
> [View Fix Here](https://github.com/KieranBest/Individual-Project/blob/b500183ec3c41f0e1323456b9165090d564846d4/dataAnalysis.js#L101)

In Figure 26, you are able to see the same data as Figure 24, however it is displayed over every period of time spent using the application as opposed to overall.

> **Figure 26: Note Traits Over Time**
>
> ![Note Traits Over Time](/images/milestone3.3.png)

In the 3rd and final milestone, it was decided after stakeholder feedback that not only should the user be able to identify key areas of improvement using visual aid, but also for a teacher to be able to view all students' progress and data visually. This would allow the teacher to identify key areas of improvement for each student. This would be done by creating a teacher and student login, allowing the teacher an overview of all students activity within the class. Among other feedback, it was also explained that it may be more beneficial to measure some statistics against how much time the user has used the application, rather than the number of notes they have played. This would allow for a more accurate representation of the user's progress as my stakeholder explained, the more time you spend learning piano, the better you will become. It was also suggested to create features such as:

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

To create the new client server system for the application, Express and MongoDB will be used, this will allow for the creation of user accounts and the storage of JSON objects. The users data will be stored in a database with each user having their own collection that will be updated each play period. This can then be extracted using the Express API, manipulated, and then visualised using 'chart.js'

Breaking down these objectives, organising them in order of most importance and assigning weights based on difficulty, led to this:

1. Create Offline Storage for JSON Data Files - 1
2. Create Graphs from JSON Data Files - 2
3. Create Express API - 2
4. Create MongoDB - 1
5. Link Express API with MongoDB - 2
6. Insert and extract data to/from database and create visual representation - 3
7. Create log in for users - 2
8. Create teacher/student accounts - 2
9. Create graph for teachers that allow teacher profile to view all students progress statistics as well as comparison bar chart. - 2
10. Create accuracy graph comparing left hand against right hand. 1
11. Create a scatter graph containing: - 1
    - Accuracy of pitch (%)
    - Accuracy of timing (%)
    - Duration of practice (minutes)
    - Accuracy of chords (%)
    - Number of perfect hits
12. Creating a difficulty setting that would affect the speed in order to be more applicable to the younger or disabled audiences E.g. 'Easy', 'Medium' and 'Hard' buttons - 1
13. Creating an instruction manual for how to use the application - 1
14. When the note is hit correctly, remove it from the staff - 1
15. When the note is hit correctly, display the note pressed in green on both the visual keyboard and the staff - 1
16. When the note is hit incorrectly, display the note pressed in red on both the visual keyboard and the staff - 1
17. Display the note/chord name above the staff whilst moving across the screen - 1

##### Database Design

So far when we are saving data for an individual user, we are currently storing it as a JSON document object in the brower's local storage, it is currently stored in the following format (this depicts the first note from the first level):

```JSON
{
  1:[ //level number
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
          1:[ //note number
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

> **Figure 25: Document Database Design**
>
> ![Document Database Design](/images/milestone3.4.png)

This can be adapted into putting into a MongoDB, as can be seen in Figure 25, the database itself will contain a different collection for each user, named after each user's username. There will be a separate collection that contains all students details, including their username, name, occupation (student or teacher). This will allow teachers the ability to view multiple students progress.

##### Milestone 3 - Time Management

```mermaid
Gantt
    title Figure 26: A Gantt Chart of Milestone 3
    dateFormat  YYYY-MM-DD

    section Milestone 3
    1. Create Offline Storage for JSON Data Files                    :a12, 2023-03-17, 14d
    2. Create Graphs from JSON Data Files                            :a12, 2023-03-17, 14d
    3. Create Express API                                            :a12, 2023-03-17, 28d
    4. Create MongoDB                                                :a13, 2023-03-31, 14d
    5. Link Express API with MongoDB by Saving User Data to MongoDB  :a13, 2023-03-31, 14d
    6. Extract Data from Database and Create Visual Representation   :a14, after a13, 14d
    7. Create Log in for Users                                       :a14, after a13, 28d
    8. Create Teacher/Student Accounts                               :a15, 2023-04-28, 14d
    9. Enable Teachers to View all Students Statistics               :a15, 2023-04-28, 28d
    10. Create Accuracy Graph Comparing Left Hand Against Right Hand  :a16, 2023-05-12, 14d
    11. Create New Scatter Graph                                      :a16, 2023-05-12, 14d
    12. Creating a Difficulty Setting that Controls Speed             :a16, 2023-05-12, 14d
    13. Creating Instruction Manual                                   :a17, after a16, 14d
    14. When the Note is Hit Correctly, Remove it from the Staff      :a17, after a16, 14d
    15. Display the Note Pressed in Green when Pressed Correctly      :a17, after a16, 14d
    16. Display the note pressed in red when Pressed Incorrectly      :a17, after a16, 14d
    17. Display the note/chord name above the staff                   :a18, after a17, 14d
```

##### Milestone 3 - Implementation

Due to the amount of feedback and suggestions for the 3rd milestone and being able to see this in the Gantt chart [here](#milestone-3---time-management), it was not possible for me to complete all of the [objectives](#milestone-3---objectives). I created the MongoDB and a connection using an Express Server (Milestone 3: Objectives 3, 4 & 5), changing the application to a client server model using a MERN stack due to the client and server being unable to fulfil a 'POST' request. However, that is as far as I got due to unforeseen circumstances academically and personally. You can see how I tried to overcome my academic issues in Figure 27

> **Figure 27: Server and Client Connection Problems**
>
> Initially I tried to create the server using Express.js, and the client using Vue.js; however, they would not connect to each other and instead returned errors. So then I followed a tutorial on how to create a MERN application as I needed to use a MongoDB and I thought this would be the simplest way to get the server and client working whilst also using a database when I have limited time available (The Net Ninja, 2022)(Programming with Mosh, 2023)(Postman, 2023). However, trying to create a server linking to a client by following tutorials such as those listed below, I could still not get the posting to work properly. Querying this online, it was suggested to use 'Postman' to test http requests, however on doing so it would return a 401 error (StackOverFlow, 2021)(Community Postman,2020)(MongoDB Developer Community, 2021). Without a successful 'POST' request working, I could not develop the client-server connection. I could not progress on this unfortunately due to time restraints from personal life commitments. This then meant that I was unable to complete most of milestone 3's objectives.

Adding on to this, I have discovered a bug when trying to set the application up for demonstrative purposes on a laptop, whereby the staff animation does not work correctly. When accessing a new number of notes to be displayed ('recurringNotes') it malfunctions and causes the 2 that are already displayed to speed up and become closer, waits for them to loop through once more and then displays the required amount in the next loop. Upon trying to fix this, I have inadvertently caused the staff animation to malfunction more so on my desktop and now clusters the new amount of 'recurringNotes' in a inequal distance between each other.

##### Milestone 3 - Sprint Review

I have already spoken about the downfall of this milestone in [Milestone 3 - Implementation](#milestone-3---implementation) of trying to achieve a connection between a server, client and database. This is the greatest set back to this milestone as it caused me to be unable to progress with the project, completely cutting off the ability to create any new features.

### Conclusion

#### Findings

Throughout this project 1 thing that has become apparent is that creating a timeline of sprints is not always accurate due to an inability to comprehend the difficulty of said task. For example, creating a level system had originally been anticipated to hold a weighted value of 2, however this task only took 20 minutes to successfully implement. Whereas being able to press multiple keys and releasing only 1 caused multiple problems in various scenarios such as:

- Multiple major keys
- Multiple sharp keys
- Mixing major and sharp keys
- Multiple keys being displayed on the visual keyboard
- Multiple keys being displayed on the staff
- Scoring for multiple keys
- Documenting wrong notes pushed when 1 or more notes pressed does not much notes required for chords

What also became apparent during this project is while it is beneficial to have a rough structure to the project and be tasked by the stakeholder, this can cause issues down the line as the project is not always going to be structured in the most organised way when it comes to implementation. Had I better planned the extent of this project I would've planned to create the database, server, client and the account system at the beginning of the project as I believe it is 1 of the most complex parts of my project and should have been treated as so. However, this would then have meant that there would be no data to store in the database and thus would be redundant. This also would have meant that I would not have had a demonstratable project at the initial presentation.

A very important lesson I learned, not only from myself but from my peers, is that having a structured work time for this project benefited me greatly, and I could see the difference in my project compared to my peers because I had my 'project day'. I planned from the beginning to work on this project every Wednesday, and I did that religiously. From having that structure, I was able to fulfil the majority of my research and create a very basic prototype for my project in the first semester ready for the presentation in January. This put me in good stead for the rest of the project and set me up a way that I could achieve a lot more than I thought possible in a short space of time. This structure also proved excellent in terms of motivation, I looked forward to my project day every week and was excited to implement further features and see my progress.

A large part I regret in this project is spending so much time on the levelling system, while it is interesting and intricate. My time would have been much better spent cutting milestone 2's length in half and giving that time to milestone 3. This would've allowed me to develop the server and client connection, and fulfil a larger percentage of my objectives.

#### Goals Achieved

When starting this project, it was apparent that there would always be room for further improvement, but the scope of the project and how vast it could become was beyond what I could have imagined. Initially my scope of the project was to create a teaching tool that could be used either in classrooms or personal use, to teach users how to play piano and read sheet music. Its intrinsic detail developed gradually from suggestions from my stakeholder that lead to a level of data capture that was unrecognisable to what the initial proposal was.

When comparing the completed objectives to that of objectives in scope determined by the MoSCoW prioritisation, it is clear to see that all objectives in the 'Must Have' criteria were achieved. The 'Should Have' objective, "The application should allow me to clearly follow when I need to press a note" has also been achieved, however there is no level of instruction to guide users to understand the requirement of timing. This then leads on to the 'Could Have' objectives, which could also be expanded to contain the usability objectives set out by my stakeholder. None of these objectives have been achieved due to a lack in time as can be seen in the [Milestone 3 - Implementation](#milestone-3---implementation) section.

Using the agile approach led to numerous benefits for this project such as:

- It meant that I could prioritise my workload, splitting up objectives into 2 weekly sprints
- Obtain feedback frequently to ensure that the project is developing into a usable and demonstratable prototype
- It meant the project was able to grow and develop based on the feedback and guidance received from my stakeholder
- It enabled me to look at the application usability from a commercial standpoint which in turn led to further development ideas

I am proud to say that by the end of the 1st milestone I successfully had a working prototype for the poster presentation in January, I confidently showcased my project in the presentation, being able to express all aspects of the project and how I planned to achieve them. Even using my research to back up conscious choices I have made for this project and potential features that could be implemented in the future.

By the end of the 2nd milestone I had created an application that was able to adapt to the users ability and alter the difficulty in order to keep the user in the "zone of proximal development". I was able to present this to my stakeholder and attain key feedback that would help me further develop my project.

#### Business Evaluation

If this project was to be developed further and completed the necessary requirements and perhaps my suggested requirements, then I think this could become a marketable product similar to that of 'Synthesia' or 'P.I.A.N.O.'. However, I feel it would be better suited to school's for teaching music, it could be developed further to suit that demographic with features that would make the product more inclusive and better suited to a classroom environment. The age ranges this product could be suited to, could be deterministic and be developed further to suit different age ranges. A younger version for children ranged 4-11 could be filled with animated characters and bright colours, whereas a product suited for young adults ranged 12-18 could be much more simplistic in its visual design but still hold many of the same features outlined [below](#further-work).

#### User Feedback

This application applies to a large user base and therefore should be usable and easily understandable for a wide age range. Going off the assumption the application is primarily for students between 4 - 18 and teachers, as proposed in [business evaluation](#business-evaluation) then there currently are no instructions for such groups to understand:

- How to use the application to play piano
- How to learn to read sheet music
- How to access the visual representation of their progression
- How to understand the visual representation of their progression

In order to create an application that is widely understandable, clear instructions must be presented in future development. This could be done in a variety of ways such as:

- On start-up of the application a tutorial is presented automatically
- On creation of an account a tutorial is presented automatically
- A button must be clicked on order to provide a tutorial

When demonstrating the project to my stakeholder, she was extremely impressed with how far this project has come overall. She had numerous helpful points for further development and things she feels should have been implemented such as the following:

- Tell the user when the level changes up or down
- Teach users how to play with helpful finger hints demonstrating how to navigate around the keyboard
- Change the colours used for when pressing a key, instead of red for majors and blue for sharps, change it to indicate whether the user has pressed the correct key at the correct time. For example, green for pressing correct and red for incorrect
- Change the image of notes such as (seen in Figure 28)
  - Sharp notes used to coincide with enharmonic spellings
  - Expressing chords using a triad
- Allow the user to choose the sound created, for example allowing the choice between numerous instruments such as:
  - Synthesized sounds
  - Piano sounds
  - Guitar sounds
  - Drum sounds
  - Harmonica sounds
- Reduce the length of some levels, levels 5 and 6 are too long
- Add names of chords and single notes above staff that move along in animation (Figure 28)
- Names of elements used in 'Note Traits Overall' and 'Note Traits Over Time' charts are not explanatory enough. These could be changed to the following titles and could include descriptions once viewing the graph to ensure understanding of the data:
  - "Number of Correct Hits" to "Correct Note at Correct Time"
  - "Number of Wrong Hits" to "Incorrect note at Correct Time"
  - "Number of Wrong Number Hits" to "Incorrect Number of Notes Played"
  - "Number of Out of Bound Hits" to "Correct Note at Incorrect Time"
  - "Number of Missed Notes" to "No Note Played"

> **Figure 28: Note Depictions from Stakeholder**
>
> ![Note Depictions from Stakeholder](/images/NoteDepictions.jpg)

#### Technical Evaluation

This project used a variety of technologies, all of which I deem appropriate for this project. The bulk of the project is written in JS due to the nature of the project being dependant on MIDI input, which is enabled on particular browsers making it accessible for users that may not be technologically minded, therefore making it a web application seemed like the most logical step.

Gulp was used throughout this project to keep writing of the code clean and concise. It enabled me to reduce redundant values and functions to reduce memory required for the application. Whilst this is not so important at this stage, should the application grow further this could become beneficial in the future.

Jest was used a test framework to test specific functions and ensure required values are returned. The entire application is based on inputted data and altering the values using functions to obtain a desired output. Therefore, it was important to ensure functions were working correctly, otherwise outputted visual data may have been incorrect. This was done by creating test files within a test directory for each function and testing the expected values against the returned values.

Within the project are certain libraries and functions such as oscillators, "requestAnimationFrame()" and 'chart.js'.

- An oscillator is the way sound is produced based on the value given for the frequency which is generated upon a note pressed. While this is perfectly fine for a prototype, if the project was to be developed further and marketed as a business idea, this would need to be adapted so that the sound produced is an actual piano key sound as opposed to a generated sound based on frequency.
- "requestAnimationFrame()" is the animation within the staff, this function is called repeatedly in order to make the required notes move across the staff in a smooth manner. To use this, I created a class that contains how each moving note will function, whether it be a single note, or a chord. Each class works independently, and this then does affect different screen resolutions. To develop this further, this would need to be altered to enable the animation to work correctly off time stamps and use states to understand individual note instances and to easily adapt what is happening between frames to these instances.
- 'chart.js' is a library that is used to create the visual representation of users progression. It is an excellent tool that can be used to create a variety of visual representations of data. Even though I did not get to implement the extra changes that my stakeholder required, it is an excellent library to use for the purposes required.

#### Process Evaluation

The process used to create this project was the agile methodology, and while this was the correct method to use because of the consistent level of feedback, my organisation of it perhaps could've been improved. Whilst I have mentioned before that had I structured this project better in terms of content management it would have run smoother, but I also think more demonstrations to the stakeholder would have been very beneficial. Whilst having them at the end of the milestone did have its advantages, having them perhaps 2 times within the milestone could've proven a great benefit. This could have led me to not spend so much time creating levels and focus on more relevant features for a prototype application.

A big difficulty throughout this project is remembering named variables because I made so many functions and so many variables that are very similar in what they store, it became very easy to become confused with what each variables purpose was. For example, there are multiple variables all for controlling the storage of currently held notes for the purpose of highlighting multiple notes on the visual keyboard and staff. Both the keyboard and staff have an array, and the staff has a overly complex design for removing these notes from the array. This has become extremely problematic because I only noticed this later and by then, trying to understand what I did is extremely difficult. Therefore, this is something that I definitely need to improve on in the future and will be a key area for improvement on my next project. Organising my project on an internal level will be key for larger projects in the future. Whilst I did instil comments throughout my code, greater detail and more frequent comments would've been beneficial.

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

As are there many features I would have liked to have implemented to make this a much more realistic prototype such as:

- Adding to the levelling system more levels that included more complex songs
- Implement an achievements system, for example, achieving a 95% pass rate earns a badge or achievement
- Adding a social side to the application that would enable users to attain feedback from their teachers as well as show off their achievements to their peers
- Creating a leader board with different attributes such as:
  - Most time spent practicing
  - Most perfect hits in a row
  - Highest accuracy (%)
- Adding a library of songs that allows the user to choose what to learn (this then becomes much more enjoyable for each individual user as they are not forced to learn a song they have no interest in)
- Making the application much more visually appealing with colour changing backgrounds and a more appealing interface
- Allow teachers to pick specific lessons/levels for students, such as scales, chords, particular songs, etc.
- Creating a testing page for teachers to test their students and determine their level of understanding of certain concepts.

#### Final Evaluation

Whilst I feel a great satisfaction for what I have achieved, how I planned this project, and how I executed it with strict time management during the 1st and 2nd milestone. I feel I did not succeed in this project due to the final milestone. I did not achieve anywhere near what I wanted to in this milestone, I knew I was not going to get it all done because of the vast amount of features I had tasked myself to implement, and the lack of time to do so. This can be seen in [Figure 26](#milestone-3---time-management) where all objectives can be seen finishing 26th May, however the required finish time for this project was the 14th April. That is 6 weeks less than the time needed to complete this milestone, and that's not accounting for any challenges and delays that may have occurred.

If I were to do this project again, there are a multitude of changes I would make, firstly structuring the project better and understanding fully the requirements of the project. I would put milestone 3 as milestone 1, working on the server/client connection first, implement the connection to a mongo database, and ensure the http requests work effectively. Being able to 'POST' and 'GET' data to and from the database is a large part of this project and should've been treated as the most important. From there creating the application in the order I did but putting less time into the levelling system. This only needed to be a basic representation with more a maximum of 4 levels to be able to demonstrate the responsiveness of the levelling system along with visual representation of the users progress.

Restructuring the project, increasing the number of stakeholder demonstrations and feedback, and shortening the levelling system would have enabled me more time to implement many more features and allowed this project to have produced the MVP product that would prove that this application is a viable product and could fulfil its purpose of successfully teaching users how to play piano and read sheet music whilst simultaneously showing users how they can improve their skills.

#### Final Deliverable

The following images are the final prototype product delivered to the stakeholder:

Current front page of the application

> **Figure 29: Opening Page of Application**
>
> ![Opening Page of Application](/images/final.1.png)

Blocking of MIDI access to browser result

> **Figure 30: Blocking MIDI Access**
>
> ![Blocking MIDI Access](/images/final.2.png)

Level 1 of the application

> **Figure 31: Level 1**
>
> ![First Level](/images/final.3.png)

Level 4 of the application

> **Figure 32: Level 4**
>
> ![Fourth Level](/images/final.4.png)

Current opening of the graph page of the application

> **Figure 33: Opening of Graph Page**
>
> ![Opening of Graph Page](/images/final.5.png)

Viewing the 'Actual Vs Expected Hit Times' dataset

> **Figure 34: Actual Vs Expected Hit Times**
>
> ![Actual Vs Expected Hit Times](/images/final.6.png)

Viewing the 'Note Traits' dataset

>**Figure 35: Note Traits Overall**
>
> ![Note Traits Overall](/images/final.7.png)

Viewing the 'Note Traits Over Time' dataset

> **Figure 36: Note Traits Over Time**
>
> ![Note Traits Over Time](/images/final.8.png)

### References

Caniuse (2023) [caniuse.com](https://caniuse.com/?search=midi) (Accessed: 23/03/2023)

Chart.js (2023a)[Doughnut and Pie Charts](https://www.chartjs.org/docs/latest/charts/doughnut.html) (Accessed: 1/03/2023)

Chart.js (2023b)[Line Chart](https://www.chartjs.org/docs/latest/charts/line.html) (Accessed: 1/03/2023)

Chiu, S.C. and Chen, M.S. (2012) December. A study on difficulty level recognition of piano sheet music. 2012 IEEE International Symposium on Multimedia, pp. 17-23.

Community Postman (2020) [How to resolve error 401 Unauthorized in Postman](https://community.postman.com/t/how-to-resolve-error-401-unauthorized-in-postman/17318/5) (Accessed: 6/4/2023)

Educational App Store (2022) [Best Apps to Learn Music](https://www.educationalappstore.com/app-lists/best-apps-music-learning)(Accessed: 18/11/2022)

FluidSynth (2023) [FluidSynth](https://www.fluidsynth.org/) (Accessed: 01/05/2023)

Graesser, A.C. et al.(2012) Intelligent tutoring systems. APA educational psychology handbook, 3:(Application to learning and teaching), pp. 451-473.

Jest (2022) [Getting Started](https://jestjs.io/docs/getting-started) (Accessed: 26/10/2022)

Kopiez, R. and In Lee, J. (2008) Towards a general model of skills involved in sight reading music. Music education research, 10(1), pp.41-62.

López‐Íñiguez, G. and Pozo, J.I. (2014) The influence of teachers’ conceptions on their students’ learning: Children's understanding of sheet music. British Journal of Educational Psychology, 84(2), pp.311-328.

Lowe, J. (2001) Computer-base education: Is it a panacea? Journal of Research on Technology in Education, 34(2), pp. 169-171.

McCaffrey, J (2021) [Using RequestAnimationFrame and Classes in JavaScript](https://www.youtube.com/watch?v=9Sxo7P3F3m0&t=322s) (Accessed: 7/12/2022)

mdn Web Docs (2023) [Introduction to automated testing | MDN](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing) (Accessed: 26/10/2022)

Midifile (2023) [C++ library for parsing Standard MIDI Files](https://midifile.sapp.org/) (Accessed: 01/05/2023)

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

As outlined previously, stakeholder meetings were held to obtain feedback from a industry professional, feedback was used to determine the pathway for this project. Supervisor meetings were held to attain advice and guidance if required, these meetings were held bi-weekly and were used to discuss any issues or concerns with the development of the project and how this could be overcome by helpful hints. The following are notes taken from these meetings:

##### Friday 14th October

Meeting with supervisor to confer about project scope and initial starting point:

- Understand basic MIDI Input [example](https://github.com/superLimitBreak/webMidiTools/blob/master/webMidiLog.html)
- Gain understanding in HTML5 canvas

##### Friday 21st October

Meeting with supervisor to gain insight into oscillator type as well speaking about key press event registering. Also created a rough order of objectives for the required features:

- Input from keyboard to terminal
- Draw graphical shapes
- Keyboard input manipulates shapes in some way
- Convert key pressed into human readable form
- Algorithm to draw graphically draw keyboard with shapes
- Keyboard input updates graphical keyboard with keys pressed (multiple keys if needed)
- Keyboard resizable to canvas
- Draw sheet stave? Treble cleff?
- Draw note on stave when key pressed
- Produce tone on key press (note on and note off)
- Actual note played on key press
- Note moves across stave (repeat)
- Note repeats on different notes/lines?
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

Meeting with supervisor to discuss mark scheme and introduce a JS method called "requestAnimationFrame()" used to create moving animations.

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
