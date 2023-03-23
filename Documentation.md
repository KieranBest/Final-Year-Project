# Creating a Responsive and Dynamic Piano Education Tool

## Kieran Best

## Individual Project U10834

## Canterbury Christ Church University

## 2022/23

### Abstract

This project is aimed at creating a responsive educational tool to teach users how to play piano whilst simultaneously how to read sheet music; it will also create a visual representation of the user's learning progression from data collected from the user's input. This project will be completed using the agile framework, HTML5, CSS and JavaScript.

### Acknowledgements

I would like to give thanks to my supervisor, Allan Callaghan, for all his amazing support, guidance and patience throughout this project.

### Table Of Contents

- [Abstract](#abstract)
- [Acknowledgements](#acknowledgements)
- [Table Of Contents](#table-of-contents)
- [Introduction](#introduction)
- [Literature Review](#literature-review)
  - [How Do We Learn?](#how-do-we-learn)
  - [Importance of Sheet Music](#importance-of-sheet-music)
  - [Similar Applications](#similar-applications)
- [Requirements and Analysis](#requirements-and-analysis)
  - [Methodology](#methodology)
  - [Objectives](#objectives)
    - [Milestone 1 Objective](#milestone-1-objective)
    - [Milestone 2 Objective](#milestone-2-objective)
    - [Milestone 3 Objectives](#milestone-3-objectives)
  - [User Stories](#user-stories)
- [Design](#design)
  - [Conditional Flow Diagram](#conditional-flow-diagram)
  - [Accessibility - Colour contrast, fonts, layout, hovering, background, text shadow](#accessibility---colour-contrast-fonts-layout-hovering-background-text-shadow)
  - [Functional Requirements](#functional-requirements)
  - [Use Cases](#use-cases)
  - [Wireframe Design](#wireframe-design)
  - [Finalised Design](#finalised-design)
  - [Hardware and Software Stack](#hardware-and-software-stack)
- [Implementation and Testing](#implementation-and-testing)
- [Results](#results)
  - [Challenges](#challenges)
    - [4th November 2022](#4th-november-2022)
    - [16th November 2022](#16th-november-2022)
    - [15th December 2022](#15th-december-2022)
    - [21st February](#21st-february)
  - [Findings](#findings)
  - [Goals Achieved](#goals-achieved)
  - [Further Work](#further-work)
  - [Conclusion](#conclusion)
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

### Introduction

Trying to learn how to play piano can be a strenuous task, especially if you are unknowledgeable of how to read music. It has been understood that knowledge of sheet music can lead to a much more complex understanding of music (López‐Íñiguez & Pozo, 2014) and therefore can be vastly beneficial when learning how to play piano.
The aim of this project is to create an application that teaches users to how to read and play sheet music on a piano. The application will keep score on whether the user is hitting the note on time or not and adjust the speed and difficulty based on this and therefore is suitable for all demographics. It will then be able to visually represent the users educational journey and display key statistics from a period of time such as:

- Amount of times the hit note was correct
- Time difference between user pressed note and note needed to be pressed
- Amount of times note hit was incorrect due to various reasons

### Literature Review

#### How Do We Learn?

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

Progressing on from primarily educational tools, educational computer games have proven to be just as effective because of their ability to "increase students' motivation". It does this by allowing the user a fun experience as well as an educational one (Sampayo-Vargas, 2013). Zohaib (2018) explains that dynamic difficulty adjustment will adjust the difficulty based on the users "individual traits", factors including dexterity, learning and adapting ability, and emotional characteristics are measured to adjust the difficulty to avoid boredom for users. Much like that of our "zone of proximal development", Csikszentmihalyi (2009, cited in Zohaib, 2018) states that users travel through a "flow channel" as depicted in Figure 1.

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

#### Importance of Sheet Music

Sight reading is the ability to read and play a piece of music unrehearsed, it is the performers ability to process "complex visual input (the score)" with minimal error (Kopiez and Lee, 2008). Having the ability to sight read sheet music can increase your skill as a musician in so many ways and "plays an important role in music education"(Chiu and Chen, 2012). Sight reading can 

Not only is sight reading beneficial to you in terms of your musical ability but it can also be beneficial to all aspects of our lives. Musacchia and Khalil (2020) explain that musical training can give a multisensory workout and can help improve many things such as:

- Memory
- Attention span
- Reading ability
- Hearing
- Sight
- Social Awareness

Just like muscles, exercising your brain can cause it to become stronger, and the process of exercising your brain through activity is called neuro plasticity (Musacchia and Khalil, 2020). Neuro plasticity is where the brain becomes stronger in certain aspects of function. It has been proven that expert musicians have stronger than average brain power in auditory, visual and motor areas of the brain (Musacchia and Khalil, 2020).

Whilst playing an instrument is not only hugely beneficial for your brain in terms of cognitive function, it can also be beneficial for your mental well being..................

#### Similar Applications

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

### Requirements and Analysis

#### Methodology

 The project will be created using an agile framework to support its development. The project be divided into 3 milestones each with demonstrations to users and the stakeholder to receive feedback and guidance. These milestones will be divided as such:

- September - January
- January - March
- March - May

Milestones will be divided into 2 weekly sprints and tasks will be assigned weights. Sprints will be based on the weights to determine how many tasks are to be completed each sprint.

Each Milestone will show logical steps in its production process whilst also giving clear deadlines for each sprint. It will be created using JavaScript, HTML5, CSS, Express and MongoDB.

#### Objectives

##### Milestone 1 Objective

Create a Minimum Viable Product (MVP) and be able to produce it to potential users to attain feedback on usability and potential features.  

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
- Display more than one note at a time - 1
- Press key at specific time to raise count - 2
- Ability to change speed of note - 1

##### Milestone 2 Objective

To create a level system that will slowly introduce users to how to play a keyboard.

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
- Adapt Levelling System to Further Complexity - 1
- Create Level 15 - Play Simple Song Using Both Hands - 1

##### Milestone 3 Objectives

To produce visual aid in understanding the progression of a users' learning experience.

- Create Offline Storage for JSON Data Files - 1
- Create Graphs from JSON Data Files - 2
- Create Express API with Cookies - 1
- Create MongoDB - 1
- Link Express API with MongoDB - 1

>**Figure 8: Gantt Chart Progression**
>
>![Gantt Chart 1](/images/Gantt1.png)
>![Gantt Chart 2](/images/Gantt2.png)
>![Gantt Chart 3](/images/Gantt3.png)

#### User Stories

- As a user the application must demonstrate which key I am pressing and what note that is to begin with.
- As a user the application must allow me to clearly follow which note I need to press and when.
- As a user the application must clearly define if I’ve pressed the correct key or not.
- As a user the application must be a plug in and play application, and not require me to install multiple drivers to run.
- As a user the application must develop my understanding by progressing to a harder difficulty.
- As a user the application must be visually appealing.
- As a user the application must adjust its difficulty based on my current ability.
- As a user the application must produce a visual representation expressing my learning progression.

### Design

#### Conditional Flow Diagram

The flow of the application is controlled by the user input as all actions for the application are dependent on the MIDI device input:

- The sound comes from the note input being registered as a number from the MIDI device input.
- The visual representation on both the keyboard and the staff comes from the note number given by the MIDI device input.
- The difficulty is adjusted based on the users’ score.

> **Figure 9: Conditional Flow Diagram**
>
> ![Conditional Flow Diagram](/images/ConditionalFlow.png)

The input and accuracy recorded will then determine the output for visual representation of the users' progression.

#### Accessibility - Colour contrast, fonts, layout, hovering, background, text shadow

#### Functional Requirements

#### Use Cases

#### Wireframe Design

#### Finalised Design

#### Hardware and Software Stack

This application requires the user to possess a MIDI keyboard and the ability to plug into a computer or laptop device. The device will need to have a web browser that supports MIDI input such as Chrome, Edge and Opera.

### Implementation and Testing

In addition to illustrating "coding traps", this should highlight particular novel aspects to algorithms. Testing should be according to the scheme presented in the Analysis chapter and should follow some suitable model - e.g. category partition, state machine-based. Both functional testing and user-acceptance testing are appropriate. For experimental/investigative projects, techniques developed should be evaluated against a standard result set for calibration, as well as the "live" data set. For theoretical projects, the relative power/expressiveness of the theory should be evaluated with respect to competing approaches.

### Results

#### Challenges

##### 4th November 2022

A bug appeared that when you click both a sharp key and a major key and remove the major key the sharp key should stay lit up on the visual keyboard, however when removed it returned the sharp key to the original colour despite still holding it.

##### 16th November 2022

Following the previous bug, when multiple sharp keys are pressed the last one pressed stays lit up, however previous sharp keys are overwritten.

##### 15th December 2022

Trying to create a successful flow for the notes across the screen has proved harder than intially thought, the while monitoring the fps it appears to alter slightly when new notes are added to the screen, therefore creating an average fps based on 1000 frames seems to have fixed the problem.

##### 21st February

When saving user data for statistical analysis it has become apparent that when changing level the notes on the previous level are still displayed but are recorded as the next level. For example, when progressing from a single note level to a chord level, the single notes are recorded in the chord levels statistics.

Scoring does not currently work with chords, as currently it can only handle one note at a time. A fix was created, however this seemed to break the single notes score updater. 

##### 20th March

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
  
However when more than 1 dataset existed, this did not fix the bug. Therefore the fix was to set the length of the dataset to 0 and then reinstate a dataset using the required data.

#### Findings

Throughout this project one thing that has become apparent is that creating a timeline of sprints is not always accurate due to an inability to comprehend the difficulty of said task. For example creating a level system had originally been anticipated to hold a weighted value of 2, however this task only took 20 minutes to successfully implement.

Whereas being able to press multiple keys and releasing only one caused multiple problems in various scenarios such as:

- Multiple major keys
- Multiple sharp keys
- Mixing major and sharp keys
- Multiple keys being displayed on the visual keyboard
- Multiple keys being displayed on the staff
- Scoring for multiple keys
- Documenting wrong notes pushed when one or more notes pressed does not much notes required for chords

present all the results (products, experimental findings, theories, etc.) generated during the project. This may also include some off-topic findings that were not expected, or which were side-effects of other explorations.

#### Goals Achieved

describes the degree to which the findings support the original objectives laid out for the project. The goals may be partially or fully achieved, or exceeded. Note that reporting of failures to achieve goals is important since a fundamental feature of the assessment procedures is that the processes (how you went about your project) are often as important as the products of the project.

#### Further Work

describes two things: firstly, new areas of investigation prompted by developments in this project, and secondly parts of the current work which were not completed due to time constraints and/or problems encountered.

#### Conclusion

The conclusions can be summarised in a fairly short chapter (2 or 3 pages). This chapter brings together many of the points that you will have made in other chapters, especially in the previous results and discussion chapter. Do not be afraid of repeating some of your earlier statements here, albeit using different wording.
Evaluating the Project
Evaluation for this project will be done through comparison of the initial specification and design documents against the finalised project. It will also look at each sprint to see if targets were completed on time and to the expected standard.

### References

Chiu, S.C. and Chen, M.S. (2012) December. A study on difficulty level recognition of piano sheet music. 2012 IEEE International Symposium on Multimedia, pp. 17-23.

Educational App Store (2022) [Best Apps to Learn Music](https://www.educationalappstore.com/app-lists/best-apps-music-learning)

Graesser, A.C. et al.(2012) Intelligent tutoring systems. APA educational psychology handbook, 3:(Application to learning and teaching), pp. 451-473.

Kopiez, R. and In Lee, J. (2008) Towards a general model of skills involved in sight reading music. Music education research, 10(1), pp.41-62.

López‐Íñiguez, G. and Pozo, J.I. (2014) The influence of teachers’ conceptions on their students’ learning: Children's understanding of sheet music. British Journal of Educational Psychology, 84(2), pp.311-328.

Lowe, J. (2001) Computer-base education: Is it a panacea? Journal of Research on Technology in Education, 34(2), pp. 169-171.

Musacchia, G. and Khalil, A. (2020) Music and Learning: Does music make you smarter. Frontiers for Young Minds, 8

Rogers, K. et al. (2014) P.I.A.N.O.: Faster Piano Learning with Interactive Projection. Proceedings of the Ninth ACM International Conference on Interactive Tabletops and Surfaces, pp. 149-158.

Sampayo-Vargas, S., Cope, C.J., He, Z. and Byrne, G.J. (2013) The effectiveness of adaptive difficulty adjustments on students' motivation and learning in an educational computer game. Computers & Education, 69, pp.452-462.

Skinner, B. (2012) The science of learning and the art of teaching. Reading in Educational Psychology, 66, pp. 301.

Synthesia (2022) [Synthesia Game](https://synthesiagame.com/)

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
- Display more than one note at a time

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

Meeting with supervisor to discuss mark scheme, and introduce a JavaScript method called "requestAnimationFrame()" used to create moving animations.

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

Meeting with supervisor to discuss heading for Milestone 3, basic steps and current progression on Milestone 3.
Basic guidelines include to use gitpod to create a express API connected with mongoDB.

#### Wednesday 22nd March
##### Stakeholder Meeting

Meeting with stakeholder to progress of project. Demonstrated current working prototype along with demonstrations of graphs produced. The stakeholder expressed great interest in the graphs produced, however stated the method of measurement should be changed against number of notes hit overall to a percentage of all notes hit. Along with changing names of current graphs produced. She produced some ideas of graphs to create such as:
 - Accuracy with left hand against accuracy against right hand.
 - A scatter graph containing:
 -  - Accuracy of pitch (%)
 -  - Accuracy of timing (%)
 -  - Duration of practice (minutes)
 -  - Accuracy of chords (%)
 -  - Number of perfect hits

Stakeholder expressed how viewing every single period of play could become problematic and overcomplicated to view, so dividing it into weeks and being able to select an amount of weeks or some form of selective capability could make viewing large amounts of data less complex.

A feature that the stakeholder thought would be excellent would be to create a way for a teacher to view all students progress in one page, to enable a bar graph to be produced to see every students average hit against the amount of time they have practised in one graph. This graph could be arranged in ascending or descending order to make it easier to identify the less encouraged students. 

Many user interface features were brought up such as:
- Creating a difficulty setting that would affect the speed in order to be more applicable to the younger or disabled audiences.
- Creating an instruction manual for how to use the application.
- When the note is hit correctly, remove it from the staff.
- When the note is hit correctly, display the note pressed in green on both the keyboard and the staff.
- When the note is hit incorrectly, display the note pressed in red on both the keyboard and the staff.
- Display the note/chord name above the staff whilst moving across the screen.

##### Supervisor Meeting

Meeting with supervisor to discuss creating the API and different types of Docker systems. Also guidelines on where to get information on how to create the Express API.

[Supervisor Example for Using MongoDB](https://eur01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fgithub.com%2Fcalaldees%2FTeachProgramming%2Ftree%2Fmaster%2Fteachprogramming%2Fstatic%2Fprojects%2Fdata%2Fmongo&data=05%7C01%7Ck.best806%40canterbury.ac.uk%7C2e54a99d71b349707fbe08db2b831677%7C0320b2da22dd4dab8c216e644ba14f13%7C0%7C0%7C638151614242327608%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=eNuRlF7BUikr5ALIAT3XUWFJfIzdfDLI3sidgk7Lx2Q%3D&reserved=0)

[Supervisor Example for using Multi Container System](https://eur01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fgithub.com%2Fcalaldees%2FdockerWorkshop%23multi-container-systems&data=05%7C01%7Ck.best806%40canterbury.ac.uk%7C2e54a99d71b349707fbe08db2b831677%7C0320b2da22dd4dab8c216e644ba14f13%7C0%7C0%7C638151614242327608%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=vBuaJgvqbYnACNIEkhRO5HgH9XVNnpiMowGgd9CQ2Uk%3D&reserved=0)
