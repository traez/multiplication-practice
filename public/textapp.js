<!DOCTYPE html>
<html>
  <head>
    <title>Multiplication Flash Cards</title>
    <style>
      /* Styling for the webpage */
    </style>
  </head>
  <body>
    <!-- HTML body starts here -->
    <button onclick="toggleDarkMode()">Toggle Dark Mode</button>
    <label for="tableRange">Select Table Range: </label>
    <input id="tableRange" type="text" placeholder="e.g. 3-12" />
    <button onclick="startGame()">Start Game</button>
    <div id="question"></div>
    <div id="choices"></div>
    <div id="wrongStack"></div>

    <script>
      // JavaScript code starts here
      let score = 0; // Initializing a variable to keep track of the score
      let rangeStart = 0; // Initializing variables for the range of multiplication tables
      let rangeEnd = 0;
      let wrongStack = []; // An array to keep track of wrong answers

      // Function to toggle dark mode for the webpage
      function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");
      }

      // Function to start the game
      function startGame() {
        // Retrieving the selected range of multiplication tables from the input field
        const range = document.getElementById("tableRange").value.split("-");
        rangeStart = parseInt(range[0]); // Parsing the start of the range to an integer
        rangeEnd = parseInt(range[1]); // Parsing the end of the range to an integer
        wrongStack = []; // Clearing the wrong answers stack
        updateWrongStack(); // Updating the display for wrong answers
        generateQuestion(); // Generating the first question to start the game
      }

      // Function to update the display for wrong answers
      function updateWrongStack() {
        const stackDiv = document.getElementById("wrongStack");
        stackDiv.innerHTML = "Wrong Stack: " + wrongStack.join(", ");
      }

      // Function to generate a multiplication question
      function generateQuestion() {
        // Generating two random numbers within the selected range
        const num1 =
          Math.floor(Math.random() * (rangeEnd - rangeStart + 1)) + rangeStart;
        const num2 =
          Math.floor(Math.random() * (rangeEnd - rangeStart + 1)) + rangeStart;
        const correctAnswer = num1 * num2; // Calculating the correct answer
        const questionString = `${num1} x ${num2}`; // Creating the question string

        // Displaying the question on the webpage
        document.getElementById(
          "question"
        ).textContent = `${questionString} = ?`;

        let choices = []; // Initializing an array to store multiple choice answers

        // Generating 4 choices, including the correct answer
        while (choices.length < 4) {
          const offset = Math.floor(Math.random() * 5) - 2; // Generating offset for wrong answers
          const wrongAnswer = correctAnswer + offset; // Calculating wrong answers
          // Checking if the wrong answer is different from the correct answer and not already in choices
          if (wrongAnswer !== correctAnswer && !choices.includes(wrongAnswer)) {
            choices.push(wrongAnswer); // Adding unique wrong answers to the choices array
          }
        }

        choices.push(correctAnswer); // Adding the correct answer to the choices array
        choices.sort(() => Math.random() - 0.5); // Shuffling the order of the choices

        const choicesDiv = document.getElementById("choices");
        choicesDiv.innerHTML = ""; // Clearing previous choices from the display

        // Creating HTML elements for each choice and adding click event listeners
        for (const choice of choices) {
          const choiceDiv = document.createElement("div");
          choiceDiv.className = "choice";
          choiceDiv.textContent = choice;
          choiceDiv.addEventListener("click", function () {
            if (choice === correctAnswer) {
              score++; // Increasing the score if the correct choice is clicked
              const index = wrongStack.indexOf(questionString);
              if (index > -1) {
                wrongStack.splice(index, 1); // Removing the question from the wrong stack if answered correctly
              }
              alert("Correct! Your score is: " + score); // Showing an alert for correct answer
            } else {
              if (!wrongStack.includes(questionString)) {
                wrongStack.push(questionString); // Adding the question to the wrong stack for wrong answers
              }
              alert("Wrong! Your score is: " + score); // Showing an alert for wrong answer
            }
            updateWrongStack(); // Updating the display for wrong answers
            generateQuestion(); // Generating the next question
          });
          choicesDiv.appendChild(choiceDiv); // Displaying the choice on the webpage
        }
      }
    </script>
  </body>
</html>
