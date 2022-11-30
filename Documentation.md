# Creating a Responsive and Dynamic Piano Education Tool
## Kieran Best
## Individual Project U10834
## Canterbury Christ Church University
## 2022/23


 
### Introduction
The overall aim of this project is to create an application that enables users to learn how to read and play sheet music on a piano. The application will then create new sheet music to test the user appropriately and not allow them to simply memorise a pattern. From here the application will measure the speed for users to hit the correct key and base its development journey tailored to the specific user; once the user is hitting the keys perfectly on time, it will progress to make it harder, whereas if the user keeps missing the timing, then it will slow it down to make it easier, if the user is hitting the wrong key, it will go back a stage to reshow the user which key is which note.

### Literature Review

#### How Do We Learn?

Yuksel et al. (2016) explains, learning is best achieved when the user’s cognitive workload is above a certain level which can be very hard to achieve using a video. To attain the greatest level of education, Yuksel et al. (2016) states that the user must reach a “zone of proximal development” which can be difficult due to underlying factors such as:

- Difficulty of the task
- Users’ cognitive ability
- Instructional design
- Users’ motivation

However, user’s cognitive workload can be monitored with Intelligent Tutoring Systems (ITS) and Computer-Based Education (CBE) systems. Graesser, A.C. et al. () explain that intelligent tutoring systems track the physchological state of users in fine detail through a process called student modelling. Student modelling follows characteristics such as “subject matter knowledge, skills, strategies, motivation, emotions, and other student attributes.” ‘ITS’ “adaptively responds” to users states and adjusts the course of the instructional agenda within its own constrains as opposed to a human taught lesson which will just follow a linear path (Graesser, A.C. et al., 2012). CBE dates back to the second world war as a way to effectively mass train soldiers in new protocols and at a cost-efficient way, this was done through the use of systems similar to that of PLATO (Programmed Logic for Automatic Teaching Operations (Lowe, 2001). PLATO was an educational tool developed back in 1961 as a way to teach a number of students through the use of displaying information and asking questions with the expected response to be numerical, algebraic, words or phrases and is taugh in a linear mathod with no form of digression. Lowe explained that within CBE also includes Computer-Based Instruction (CBI), Computer-Aided Instruction (CAl), Computer-Managed Instruction (CMI), Computer-Based Training (CBT), CBI delivered on the Internet or intranet, Internet-Based Training (IBT), and CBI delivered by CD-ROM and these were developed through the use of basic learning principles developed by Skinner (2012) whereby Skinner investigates the development of reinforcing “theory to human learning”.

#### Similar Applications

Whilst there aren’t similar applications with the exact same features, there are those with some of the same features, such as ‘Simply Guitar’ and ‘Harmony City’ (Educational App Store, 2022) which will just teach you how to play a song, or applications such as ‘Tenuto’, ‘Piano Notes Fun’ and ‘Note Trainer Pro’ which will teach you how to read music. However, these applications are based upon recordings and not an interactive teaching which as explained will be detrimental to the users learning experience. 
A very interactive application is ‘P.I.A.N.O.’ as it has an interactive projection placed on to the keyboard to enable users to understand what key to push (Figure 1). As Rogers et al. (2014) explains the mapping of the keys provides users with an alternative to learning how to read sheet music as this is what puts off most people from learning how to play an instrument. Other benefits include teaching users where to place their hands in order to easily reach keys when needed; and to “introduce a note visualisation based on roll notation” (Figure 2) (Rogers et al., 2014). These features of visualisation allow the user to enjoy an educational application whilst not overloading the users’ cognitive capabilities. The downfall for this application is however that it does not teach users how to read sheet music which I propose be simply taught in similar manner. 

((((((((need to include the name BACh in this paragraph)))))  Going back to learning in a zone of proximal development, Yuksel et al. (2016) created an application in which users’ cognitive workload is measured and the application adapts accordingly to “guide learners” into a difficulty that is engaging on a level that they can handle. However, this application does not teach users from a beginner level and requires a fNIRS sensor in order to work which is not included within the scope of my project (Figure 3). 
The most similar application to what I propose is ‘Synthesia’,(((put in url))) an educational tool used with MIDI keyboards for learning how to play piano through the use of a note visualisation similar to that of ‘P.I.A.N.O.’, but it also allows sheet music to be introduced with a mass library of songs, it also includes the teaching of where users hands should be to allow them full reach of keys; and a very useful “Finger Number Hints” in which users fingers are demonstrated visually (Figure 4) (Synthesia Game, 2022). Whilst this is almost identical to my specification, this application does not react to users’ ability and their current level of skill. 

### Requirements and Analysis

#### Methodology

The project will be created using an agile framework to better support its development, showing logical steps in its production process whilst also giving clear deadlines to each sprint. It will be created using JavaScript and tested using JavaScript testing frameworks such as Jasmine or Mocha. Once a prototype has been established, testing using reviews will be carried out as this will give a much better understanding of further development required.

#### Objectives

Talk about agile approach
3 Milestone – January, march, may
MVP
Consult with user
Change sprint planning to include ticket size using the Fibonacci sequence

These are my guiding principles, need to show etc. – make it for the 1st milestone only
The application must be able to effectively show users how to play a piano, this will be done through a number of elements outlined below that must be achieved for the application to succeed. 
- Teach users about keys:
- Where to place hands in effective placement 
- How to navigate keys
- Teach users basic elements of sheet music such as: 
- Note letters and placements
- Clefs and their meanings
- Note symbols
- Note values
- Time signature
- Measure cognitive ability through the use of adaptive speeds and difficulty
This should state, in a more detailed way, the objectives of the project by requirement and the analysis should break the problem down into manageable steps. There may be more than one suitable approach; the analysis may cover more of the area than is finally implemented. Testing and evaluation should be given due consideration. It is important that you state how you will evaluate your work. For a design project it is appropriate to consider testing at the same time as specification.

#### Sprint Planning

- Display that a key has been pressed on the terminal
- Display graphical shapes
- Keyboard input manipulates shapes in some way
- Display key pressed
- Create keyboard
- Keyboard input shows what key has been pressed on graphical keyboard (multiple keys if needed)
- Graphical keyboard resizes to canvas size
- Create music sheet outline
- Create shape on stave when note pressed
- Produce tone on key press (note on and note off)
- Produce specific key tone on key press
- Note moves across stave and repeats 
- Note repeats to a different line/note
- Ability to change speed of note
- Press key at specific time to raise count
- Display more than one note at a time

#### User Stories

- As a user the application must demonstrate which key I am pressing and what note that is to begin with.
- As a user the application must allow me to clearly follow which note I need to press and when.
- As a user the application must clearly define if I’ve pressed the correct key or not.
- As a user the application must be a plug in and play application, and not require me to install multiple drivers to run.
- As a user the application must develop my understanding by progressing to a harder difficulty.
- As a user the application must be visually appealing and not 

#### Personas

the aspect of someone's character that is presented to or perceived by others.

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

Educational App Store, 2022. Best Apps to Learn Music. 
Graesser, A.C. et al., 2012. Intelligent tutoring systems. APA educational psychology handbook, 3:(Application to learning and teaching), pp. 451-473.
Lowe, J., 2001. Computer-base education: Is it a panacea?. Journal of Research on Technology in Education, 34(2), pp. 169-171.
Rogers, K. et al., 2014. P.I.A.N.O.: Faster Piano Learning with Interactive Projection. Proceedings of the Ninth ACM International Conference on Interactive Tabletops and Surfaces, pp. 149-158.
Skinner, B., 2012. The sceice of learning and the art of teaching.. Reading in Educational Psychology., Volume 66, p. 301.
Synthesia Game, 2022. Synthesia. 
Yuksel, B.F. et al., 2016. Learn piano with BACh: An adaptive learning interface that adjusts task difficulty based on brain state. Proceedings of the 2016 chi conference on human factors in computing systems, pp. 5372-5384.

### Appendices

> Figure 1: ‘P.I.A.N.O.’
> ![‘P.I.A.N.O.’](/images/P.I.A.N.O..png)
 
>Figure 2: Note Visualisation in ‘P.I.A.N.O.’
> ![Note Visualisation in ‘P.I.A.N.O.’](/images/P.I.A.N.O.2.png)

>Figure 3: Learn Piano with ‘BACh’
> ![Learn Piano with ‘BACh’](/images/BACh.png)

> Figure 4: Finger Number Hints in ‘Synthesia’
> ![Finger Number Hints in ‘Synthesia’](/images/Synthesia.png)
 
> Allan’s Help 1
> [Allan’s Help 1](/images/AllansHelp.jpg)

> Allan’s Help 2
> [Allan’s Help 2](/images/AllansHelp2.jpg)