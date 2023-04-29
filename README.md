# Final Year Project

## Creating a Responsive and Dynamic Piano Education Tool

Trying to learn how to play piano can be a strenuous task, especially if you are unknowledgeable of how to read music. It has been understood that knowledge of sheet music can lead to a much more complex understanding of music (López‐Íñiguez & Pozo, 2014) and therefore can be vastly beneficial when learning how to play piano.
The aim of this project is to create an application that teaches users to how to read and play sheet music on a piano. The application will keep score on whether the user is hitting the note on time or not and adjust the speed and difficulty based on this and therefore is suitable for all demographics. It will then be able to visually represent the users educational journey and display key statistics from a period of time such as:

- Amount of times the hit note was correct
- Time difference between user pressed note and note needed to be pressed
- Amount of times note hit was incorrect due to various reasons

This will then allow users to understand their progression and see how much they have grown as a musician. This is beneficial due to the motivation it can give a user, to see their progression and understand that they are improving, but also because it allows the user to analyse their own playing and understand how they can improve. This is key to the user getting better as it allows them to understand their strengths and weaknesses, allowing them to understand their necessary areas for improvement.

Throughout this report, I will be discussing the motivation behind the project, the process of creating this application, the challenges of this project and lastly, an evaluation of this project that critically analyses my approach, the final product, and the process of creating this application.

### User Guide

To open the project locally, access the client folder and open the 'script.html' file in a browser. This will open the application and allow you to use it. You need to have access to a MIDI keyboard in order to make the application work, once connected this will become visible in the browsers console.

- Push the 'Start' button to start the application
- Press the required notes once they reach the first line on the staff
- If you would like to see your statistics, press the 'Submit' button followed by the 'View Graphs' button
- Currently there are 3 different graphs to preview:
  - 'Actual Vs Expected Hit Times' - compares in ms the time you hit the note compared to the required time to hit the note
  - 'Note Traits Overall' - shows how many times since you started using the application you have:
    - Pressed the correct note
    - Pressed the wrong note
    - Pressed the wrong amount of notes
    - Pressed the note either too early or too late
    - Missed the note
  - 'Note Traits Over Time' - shows the same as 'Note Traits Overall' except split into the time periods you have used the application
