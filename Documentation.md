# Creating a Responsive and Dynamic Piano Education Tool
## Kieran Best
## Individual Project U10834
## Canterbury Christ Church University
## 2022/23
------

### Introduction
The aim of this project is to create an application that teaches users to how to read and play sheet music on a piano. The application will keep score on whether the user is hitting the note on time or not and adjust the speed and difficulty based on this.

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
- CBI delivered by CD-ROM. 

These were developed by basic learning principles where Skinner (2012) investigated the development of reinforcing “theory to human learning”.





https://reader.elsevier.com/reader/sd/pii/S0360131513001711?token=24C89623FC3B8AEA2DDECC9BF0BCDC0D0757224491754AA7845152774B657CA880E57A1AB0519302CDF4E7EE00CDF212&originRegion=eu-west-1&originCreation=20221211213321





#### Similar Applications

Whilst there similar applications to the proposed, none have the exact features. ‘Simply Guitar’ and ‘Harmony City’ (Educational App Store, 2022) will teach you how to play a song. ‘Tenuto’, ‘Piano Notes Fun’ and ‘Note Trainer Pro’ which will teach you how to read music. These are all based on recordings and do not offer an interactive experience. This can be be detrimental to the users learning experience as explained previously. 

‘P.I.A.N.O.’ has a interactive projection placed on to the keyboard to enable users to understand what key to push (Figure 1). As Rogers et al. (2014) explains, the mapping of the keys provides users with a way to learn how to read sheet music. This can often be the cause of putting off most people from learning how to play an instrument. Other benefits include teaching users where to place their hands to allow them to reach all the keys.  As well as “a note visualisation based on roll notation” which will teach timing (Figure 2) (Rogers et al., 2014). The downfall for this application however, is even though it teaches hand placement for reading music, it does not teach how to read sheet music.

Going back to learning in a zone of proximal development, Yuksel et al. (2016) created 'BACh'. An application where users’ cognitive workload dictates the applications difficulty. 'BACh' measures cognitive workload using a fNIRS sensor which is not in the scope of my project (Figure 3).
 
The most similar application to what I propose is ‘Synthesia’. An educational tool used with a MIDI keyboard for learning how to play piano by using of a note visualisation like that of ‘P.I.A.N.O.’. It contains a mass library of songs for the user to decide. And it also includes teaching where users hands should be to allow them full reach of keys. It also contains a feature “Finger Number Hints” in which users fingers are visually demonstrated (Figure 4) (Synthesia Game, 2022). Whilst this is almost identical to my specification, this application does not adapt to users’ current ability and skill. 


#### Level progression

Dynamic Difficulty Adjustment

https://www.hindawi.com/journals/ahci/2018/5681652/


### Requirements and Analysis

#### Methodology

 The project will be created using an agile framework to support its development. The project be divided into 3 milestones each with demonstrations to users to receive feedback. These milestones will be divided as such:

- September - January
- January - March
- March - May

It will show logical steps in its production process whilst also giving clear deadlines for each sprint. It will be created using JavaScript, HTML5 and CSS.

Milestones will be divided into 2 weekly sprints and tasks will be assigned weights. Sprints will be based on the weights to determine how many tasks are to be completed each sprint.

#### Objectives

Milestone 1 Objective

Create a Minimum Viable Product (MVP) and be able to produce it to potential users to attain feedback on usability and potential features.  

- Display that a key has been pressed on the terminal - 1
- Display graphical shapes - 1
- Keyboard input manipulates shapes in some way - 2
- Display what Key been Pressed - 1
- Create keyboard - 1
- Keyboard input shows what key has been pressed on graphical keyboard  - 2
-  Display multiple keys pressed on keyboard - 3
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

Milestone 2 Objective

To create a level system that will slowly introduce users to how to play a keyboard.

- Create Level System
- Create Level 1
- Create Level 2
- Create Level 3
- Create Level 4
- Create Level 5
- Create Level 6
- Create Level 7
- Create Level 8
- Create Level 9
- Create Level 10
- Create Level 11


#### Sprint Planning



#### User Stories

- As a user the application must demonstrate which key I am pressing and what note that is to begin with.
- As a user the application must allow me to clearly follow which note I need to press and when.
- As a user the application must clearly define if I’ve pressed the correct key or not.
- As a user the application must be a plug in and play application, and not require me to install multiple drivers to run.
- As a user the application must develop my understanding by progressing to a harder difficulty.
- As a user the application must be visually appealing 

#### Design

This should explain the design technique chosen (and justify why it is appropriate) from the various ones available; it should select a suitable subset of the things described in the analysis chapter and develop a design. Where trade-offs exist between different designs, the chosen approach should be justified. Suitable diagram-techniques (e.g. UML, other drawings) should be used where appropriate. If a method is applied selectively, explain which parts were used and why. Experimental projects should pay careful attention to control conditions, samples selected, etc. to ensure a valid result.

Accessibility - Colour contrast, fonts, layout, hovering, background, text shadow

#### Functional Requirements

#### Use Cases

#### Information Architecture?

#### UML Diagram

#### Wireframe Design

#### Finalised Design

Implementation and Testing
In addition to illustrating "coding traps", this should highlight particular novel aspects to algorithms. Testing should be according to the scheme presented in the Analysis chapter and should follow some suitable model - e.g. category partition, state machine-based. Both functional testing and user-acceptance testing are appropriate. For experimental/investigative projects, techniques developed should be evaluated against a standard result set for calibration, as well as the "live" data set. For theoretical projects, the relative power/expressiveness of the theory should be evaluated with respect to competing approaches.
Hardware and Software Stack
What is needed to run this application?

### Results

#### Challenges

> 4th November 2022
>
>> A bug appeared that when you click both a sharp key and a major key and remove the major key the sharp key should stay lit up on the visual keyboard, however when removed it returned the sharp key to the original colour despite still holding it.

> 16th November 2022
>
>> Following the previous bug, when multiple sharp keys are pressed the last one pressed stays lit up, however previous sharp keys are overwritten. 

#### Findings

present all the results (products, experimental findings, theories, etc.) generated during the project. This may also include some off-topic findings that were not expected, or which were side-effects of other explorations.

#### Goals achieved 

describes the degree to which the findings support the original objectives laid out for the project. The goals may be partially or fully achieved, or exceeded. An experimental project may prove, or disprove the original thesis. A theoretical project may cover some or all of the example cases. Note that reporting of failures to achieve goals is important since a fundamental feature of the assessment procedures is that the processes (how you went about your project) are often as important as the products of the project.

#### Further work 

describes two things: firstly, new areas of investigation prompted by developments in this project, and secondly parts of the current work which were not completed due to time constraints and/or problems encountered.

### Conclusion

The conclusions can be summarised in a fairly short chapter (2 or 3 pages). This chapter brings together many of the points that you will have made in other chapters, especially in the previous results and discussion chapter. Do not be afraid of repeating some of your earlier statements here, albeit using different wording.
Evaluating the Project
Evaluation for this project will be done through comparison of the initial specification and design documents against the finalised project. It will also look at each sprint to see if targets were completed on time and to the expected standard. 

### References

Educational App Store (2022) [Best Apps to Learn Music](https://www.educationalappstore.com/app-lists/best-apps-music-learning) 

Graesser, A.C. et al.(2012) Intelligent tutoring systems. APA educational psychology handbook, 3:(Application to learning and teaching), pp. 451-473.

Lowe, J., 2001. Computer-base education: Is it a panacea?. Journal of Research on Technology in Education, 34(2), pp. 169-171.

Rogers, K. et al., 2014. P.I.A.N.O.: Faster Piano Learning with Interactive Projection. Proceedings of the Ninth ACM International Conference on Interactive Tabletops and Surfaces, pp. 149-158.

Skinner, B., 2012. The sceice of learning and the art of teaching.. Reading in Educational Psychology., Volume 66, p. 301.

Synthesia (2022) [Synthesia Game](https://synthesiagame.com/) 

Yuksel, B.F. et al., 2016. Learn piano with BACh: An adaptive learning interface that adjusts task difficulty based on brain state. Proceedings of the 2016 chi conference on human factors in computing systems, pp. 5372-5384.

### Appendices

> Figure 1: ‘P.I.A.N.O.’
>> ![‘P.I.A.N.O.’](/images/P.I.A.N.O..png)
 
> Figure 2: Note Visualisation in ‘P.I.A.N.O.’
>> ![Note Visualisation in ‘P.I.A.N.O.’](/images/P.I.A.N.O.2.png)

> Figure 3: Learn Piano with ‘BACh’
>> ![Learn Piano with ‘BACh’](/images/BACh.png)

> Figure 4: Finger Number Hints in ‘Synthesia’
>> ![Finger Number Hints in ‘Synthesia’](/images/Synthesia.png)
 
> Allan’s Help 1
>> [Allan’s Help 1](/images/AllansHelp.jpg)

> Allan’s Help 2
>> [Allan’s Help 2](/images/AllansHelp2.jpg)