Creating a Responsive and Dynamic Piano Education Tool 

Kieran Best

Individual Project U10834

Canterbury Christ Church University

2022/23

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
	- [Similar Applications](#similar-applications)
- [Requirements and Analysis](#requirements-and-analysis)
	- [Methodology](#methodology)
	- [Objectives](#objectives)
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
- CBI delivered by CD-ROM. 

These were developed by basic learning principles where Skinner (2012) investigated the development of reinforcing “theory to human learning”.

Progressing on from primarily educational tools, educational computer games have proven to be just as effective because of their ability to "increase students' motivation". It does this by allowing the user a fun experience as well as an educational one (Sampayo-Vargas, 2013). 

While proving that educational computer games enhance a students enjoyment is not necessarily an accurate representation of the students learning, it has been proven that adaptive difficulty within educational settings increase the student's level of learning (Sampayo-Vargas et al., 2013). Sampayo-Vargas et al. explain that when comparing students progression with 3 different learning methods, adaptive difficulty proves to be more efficient than a steadily incremental difficulty game, and a written activity as seen in Figure 1.

> ** Figure 1: Differences between 3 learning techniques
>
> ![Sampayo-Vargas et al.](/images/Sampayo-Vargas et al..png)
>
> *(Sampayo-Vargas et al., 2013)*

Dynamic Difficulty Adjustment

https://www.hindawi.com/journals/ahci/2018/5681652/



#### Similar Applications

Whilst there similar applications to the proposed, none have the exact features. ‘Simply Guitar’ and ‘Harmony City’ (Educational App Store, 2022) will teach you how to play a song. ‘Tenuto’, ‘Piano Notes Fun’ and ‘Note Trainer Pro’ which will teach you how to read music. These are all based on recordings and do not offer an interactive experience. This can be be detrimental to the users learning experience as explained previously. 

‘P.I.A.N.O.’ has a interactive projection placed on to the keyboard to enable users to understand what key to push. 

> **Figure 2: ‘P.I.A.N.O.’**
> 
> ![‘P.I.A.N.O.’](/images/P.I.A.N.O..png)
>
> *(Rogers et al., 2014)*

As Rogers et al. (2014) explains, the mapping of the keys provides users with a way to learn how to read sheet music. This can often be the cause of putting off most people from learning how to play an instrument. Other benefits include teaching users where to place their hands to allow them to reach all the keys.  As well as “a note visualisation based on roll notation” which will teach timing (Rogers et al., 2014). The downfall for this application however, is even though it teaches hand placement for reading music, it does not teach how to read sheet music.

> **Figure 3: Note Visualisation in ‘P.I.A.N.O.’**
>
> ![Note Visualisation in ‘P.I.A.N.O.’](/images/P.I.A.N.O.2.png)
>
> *(Rogers et al., 2014)*

Going back to learning in a zone of proximal development, Yuksel et al. (2016) created 'BACh'. An application where users’ cognitive workload dictates the applications difficulty. 'BACh' measures cognitive workload using a fNIRS sensor which is not in the scope of my project.

> **Figure 4: Learn Piano with ‘BACh’**
>
> ![Learn Piano with ‘BACh’](/images/BACh.png)
>
> *(Yuksel et al., 2016)*
 
The most similar application to what I propose is ‘Synthesia’. An educational tool used with a MIDI keyboard for learning how to play piano by using of a note visualisation like that of ‘P.I.A.N.O.’. It contains a mass library of songs for the user to decide. And it also includes teaching where users hands should be to allow them full reach of keys. It also contains a feature “Finger Number Hints” in which users fingers are visually demonstrated (Synthesia Game, 2022). Whilst this is almost identical to my specification, this application does not adapt to users’ current ability and skill. 

> **Figure 5: Finger Number Hints in ‘Synthesia’**
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

It will show logical steps in its production process whilst also giving clear deadlines for each sprint. It will be created using JavaScript, HTML5 and CSS.

Milestones will be divided into 2 weekly sprints and tasks will be assigned weights. Sprints will be based on the weights to determine how many tasks are to be completed each sprint.

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
- Create Level 1 - Dominant Hand, Without Moving Hand - 1
- Create Level 2 - Dominant Hand, Move Hand Across 1 Octave - 1
- Create Level 3 - Dominant Hand, Introduce Sharps and Flats in the Octave - 1
- Create Level 4 - Dominant Hand, Introduce 3 Note Chords - 1
- Create Level 5 - Swap to Less Dominant Hand, Without Moving Hand - 1
- Create Level 6 - Less Dominant Hand, Move Hand Across 1 Octave - 1
- Create Level 7 - Less Dominant Hand, Introduce Sharps and Flats in the Octave - 1
- Create Level 8 - Less Dominant Hand, Introduce 3 Note Chords - 1
- Create Data Capture - 1
- Adapt Levelling System to Further Complexity - 1
- Create Level 9 - Play Across Both Hands - 1
- Create Level 10 - Play Across Both Hands, Introducing New Chords - 1
- Create Level 11 - Play Across Both Hands - 1

##### Milestone 3 Objectives

To produce visual aid in understanding the progression of a users' learning experience.

**Figure 6: Gantt Chart Progression**

PS = Planned Start,
PD = Planned Duration,
AS = Actual Start,
AD = Actual Duration

Blue = On Target
Yellow = Exceeded Target
Red = Ahead of Target

<style>
    .Gantt {
        text-align: center;
		color: black
    }
    .Gantt th {
        background: grey;
        word-wrap: break-word;
        text-align: center;
    }

    .Gantt td:nth-child(1) { background: grey; }
    .Gantt td:nth-child(2) { background: white; }
    .Gantt td:nth-child(3) { background: silver; }
    .Gantt td:nth-child(4) { background: white; }
    .Gantt td:nth-child(5) { background: silver; }
	</style>
<div class="Gantt">
<table>
	<tr>
		<th>Activity</th>
		<th>PS</th><th>PD</th><th>AS</th><th>AD</th>
		<th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th>
		<th>9</th><th>10</th><th>11</th><th>12</th><th>13</th><th>14</th><th>15</th><th>16</th>
		<th>17</th><th>18</th><th>19</th>
  	</tr>
  	<tr>
		<td>Display a Note Pressed on Terminal</td>
		<td>1</td><td>1</td><td>1</td><td>1</td><td style="background-color:#0000FF"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Display Graphical Shapes</td>
		<td>1</td><td>1</td><td>1</td><td>1</td><td style="background-color:#0000FF"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Keyboard Input Manipulates Shapes</td>
		<td>1</td><td>1</td><td>1</td><td>1</td><td style="background-color:#0000FF"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr>
    	<td>Display what Key been Pressed</td>
		<td>1</td><td>1</td><td>1</td><td>1</td><td style="background-color:#0000FF"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Display Keyboard Graphically</td>
		<td>1</td><td>1</td><td>1</td><td>1</td><td style="background-color:#0000FF"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr>
    	<td>Keyboard Input Displays Note Press on Graphical Keyboard</td>
		<td>1</td><td>1</td><td>1</td><td>1</td><td style="background-color:#0000FF"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Display Multiple Notes Pressed on Graphical Keyboard</td>
		<td>1</td><td>1</td><td>1</td><td>2</td><td style="background-color:#0000FF"></td><td style="background-color:#FFFF00"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Graphical Keyboard Resizes to Canvas Size</td>
		<td>2</td><td>1</td><td>2</td><td>1</td><td></td><td  style="background-color:#0000FF"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Create Music Sheet Outline</td>
		<td>2</td><td>1</td><td>2</td><td>1</td><td></td><td style="background-color:#0000FF"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Create Shape on Music Sheet when Note Presed</td>
		<td>2</td><td>1</td><td>2</td><td>1</td><td></td><td style="background-color:#0000FF"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Display Multiple Notes Pressed on Music Sheet</td>
		<td>3</td><td>1</td><td>3</td><td>1</td><td></td><td></td><td style="background-color:#0000FF"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Produce Tone on Key Press (On and Off)</td>
		<td>4</td><td>1</td><td>4</td><td>1</td><td></td><td></td><td></td><td style="background-color:#0000FF"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Produce Specific Note Tone on Key Press</td>
		<td>4</td><td>1</td><td>4</td><td>1</td><td></td><td></td><td></td><td style="background-color:#0000FF"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Animated Note Moves Across Music Sheet and Repeats</td>
		<td>4</td><td>1</td><td>4</td><td>1</td><td></td><td></td><td></td><td style="background-color:#0000FF"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Note Repeats to a Different Line/Note</td>
		<td>4</td><td>1</td><td>4</td><td>1</td><td></td><td></td><td></td><td style="background-color:#0000FF"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Display More than One Note at a Time on Music Sheet</td>
		<td>4</td><td>1</td><td>4</td><td>1</td><td></td><td></td><td></td><td style="background-color:#0000FF"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Press Key at Specific Time to Raise Count</td>
		<td>5</td><td>1</td><td>5</td><td>1</td><td></td><td></td><td></td><td></td><td style="background-color:#0000FF"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Ability to Change Speed of Note</td>
		<td>5</td><td>1</td><td>5</td><td>1</td><td></td><td></td><td></td><td></td><td style="background-color:#0000FF"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Create Level System</td>
		<td>6</td><td>1</td><td>6</td><td>1</td><td></td><td></td><td></td><td></td><td></td><td style="background-color:#0000FF"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Create Level 1</td>
		<td>6</td><td>1</td><td>6</td><td>1</td><td></td><td></td><td></td><td></td><td></td><td style="background-color:#0000FF"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Create Level 2</td>
		<td>7</td><td>1</td><td>6</td><td>1</td><td></td><td></td><td></td><td></td><td></td><td style="background-color:#0000FF"></td><td style="background-color:#FF0000"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Create Level 3</td>
		<td>7</td><td>1</td><td>6</td><td>1</td><td></td><td></td><td></td><td></td><td></td><td style="background-color:#0000FF"></td><td style="background-color:#FF0000"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Create Level 4</td>
		<td>7</td><td>1</td><td>7</td><td>1</td><td></td><td></td><td></td><td></td><td></td><td></td><td style="background-color:#0000FF"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Create Level 5</td>    
		<td>8</td><td>1</td><td>7</td><td>1</td><td></td><td></td><td></td><td></td><td></td><td></td><td style="background-color:#0000FF"></td><td style="background-color:#FF0000"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Create Level 6</td>
		<td>8</td><td>1</td><td>7</td><td>1</td><td></td><td></td><td></td><td></td><td></td><td></td><td style="background-color:#0000FF"></td><td style="background-color:#FF0000"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Create Level 7</td>
		<td>8</td><td>1</td><td>7</td><td>1</td><td></td><td></td><td></td><td></td><td></td><td></td><td style="background-color:#0000FF"></td><td style="background-color:#FF0000"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Create Level 8</td>
		<td>8</td><td>1</td><td>7</td><td>1</td><td></td><td></td><td></td><td></td><td></td><td></td><td style="background-color:#0000FF"></td><td style="background-color:#FF0000"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Create Data Capture</td>
		<td>9</td><td>1</td><td>7</td><td>1</td><td></td><td></td><td></td><td></td><td></td><td></td><td style="background-color:#0000FF"></td><td></td><td style="background-color:#FF0000"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Change Levelling system</td>
		<td>9</td><td>1</td><td>7</td><td>1</td><td></td><td></td><td></td><td></td><td></td><td></td><td style="background-color:#0000FF"></td><td></td><td style="background-color:#FF0000"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Create Level 9</td>
		<td>9</td><td>1</td><td>8</td><td>2</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td style="background-color:#0000FF"></td><td style="background-color:#0000FF"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Create Level 10</td>
		<td>10</td><td>1</td><td>9</td><td>1</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td style="background-color:#0000FF"></td><td style="background-color:#FF0000"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Create Level 11</td>
		<td>10</td><td>1</td><td>9</td><td>1</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td style="background-color:#0000FF"></td><td style="background-color:#FF0000"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
</table>
</div>

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

> **Figure 7: Conditional Flow Diagram**
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

> 4th November 2022
>
>> A bug appeared that when you click both a sharp key and a major key and remove the major key the sharp key should stay lit up on the visual keyboard, however when removed it returned the sharp key to the original colour despite still holding it.

> 16th November 2022
>
>> Following the previous bug, when multiple sharp keys are pressed the last one pressed stays lit up, however previous sharp keys are overwritten. 

> 15th December 2022
>
>> Trying to create a successful flow for the notes across the screen has proved harder than intially thought, the while monitoring the fps it appears to alter slightly when new notes are added to the screen, therefore creating an average fps based on 1000 frames seems to have fixed the problem. 

> 21st February
>
>> When saving user data for statistical analysis it has become apparent that when changing level the notes on the previous level are still displayed but are recorded as the next level. For example, when progressing from a single note level to a chord level, the single notes are recorded in the chord levels statistics.
>>
>> Scoring does not currently work with chords, it can only handle one note at a time. 

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




describes the degree to which the findings support the original objectives laid out for the project. The goals may be partially or fully achieved, or exceeded. An experimental project may prove, or disprove the original thesis. A theoretical project may cover some or all of the example cases. Note that reporting of failures to achieve goals is important since a fundamental feature of the assessment procedures is that the processes (how you went about your project) are often as important as the products of the project.

#### Further Work 




describes two things: firstly, new areas of investigation prompted by developments in this project, and secondly parts of the current work which were not completed due to time constraints and/or problems encountered.

#### Conclusion





The conclusions can be summarised in a fairly short chapter (2 or 3 pages). This chapter brings together many of the points that you will have made in other chapters, especially in the previous results and discussion chapter. Do not be afraid of repeating some of your earlier statements here, albeit using different wording.
Evaluating the Project
Evaluation for this project will be done through comparison of the initial specification and design documents against the finalised project. It will also look at each sprint to see if targets were completed on time and to the expected standard. 

### References

Educational App Store (2022) [Best Apps to Learn Music](https://www.educationalappstore.com/app-lists/best-apps-music-learning) 

Graesser, A.C. et al.(2012) Intelligent tutoring systems. APA educational psychology handbook, 3:(Application to learning and teaching), pp. 451-473.

López‐Íñiguez, G. and Pozo, J.I. (2014) The influence of teachers’ conceptions on their students’ learning: Children's understanding of sheet music. British Journal of Educational Psychology, 84(2), pp.311-328.

Lowe, J. (2001) Computer-base education: Is it a panacea? Journal of Research on Technology in Education, 34(2), pp. 169-171.

Rogers, K. et al. (2014) P.I.A.N.O.: Faster Piano Learning with Interactive Projection. Proceedings of the Ninth ACM International Conference on Interactive Tabletops and Surfaces, pp. 149-158.

Sampayo-Vargas, S., Cope, C.J., He, Z. and Byrne, G.J. (2013) The effectiveness of adaptive difficulty adjustments on students' motivation and learning in an educational computer game. Computers & Education, 69, pp.452-462.

Skinner, B. (2012) The science of learning and the art of teaching. Reading in Educational Psychology, 66, pp. 301.

Synthesia (2022) [Synthesia Game](https://synthesiagame.com/) 

Yuksel, B.F. et al. (2016) Learn piano with BACh: An adaptive learning interface that adjusts task difficulty based on brain state. Proceedings of the 2016 chi conference on human factors in computing systems, pp. 5372-5384.

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

> Allan’s Help 1
> 
> ![Allan’s Help 1](/images/AllansHelp.jpg)

> Allan’s Help 2
> 
> ![Allan’s Help 2](/images/AllansHelp2.jpg)

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

[Supervisor Example](https://github.com/calaldees/paratrooper/blob/1dc2ddf1c47ab4728c78d8947ec04d57a00a500d/index.html#L984)

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
