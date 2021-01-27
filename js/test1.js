/**
 * The Main.js program lets the user change truck and bike's 
 * information, and take them for a ride.
 * 
 * @author Wajd Mariam <wajd.mariam@mths.ca>
 * Version 1.0
 * Created on : 2021/01/24
 */


// Declaring used variables and constants:
let shufflingQuestions;
let currentQuestionIndex;


// Assigning elements used to constants:

// Quiz page:

// Title element:
const pageTitleElement = document.getElementById('title');
// Question container (Holds all questions, choices, and images):
const questionContainerElement = document.getElementById('question-container');
// Question Text:
const questionTextElement = document.getElementById('questions');
// Choices buttons:
const choicesButtonsElement = document.getElementById('choices');
// Image element:
const image = document.getElementById('image');

// Control buttons used:
// "Start Quiz" button: 
const startButtonElement = document.getElementById('startButton');
// "Next Quiz" button:
const nextButtonElement = document.getElementById('nextButton');


// Final Page

// Container used if user had passed the quiz:
const userPass = document.getElementById('userPass');
// Displaying the text telling the user the mark they got:
const passMark = document.getElementById('passMark');
// Displaying the text telling the user their name:
const passName = document.getElementById('passName');

// Container used if user had failed the quiz:
const userFail = document.getElementById('userFail');
// Displaying the text telling the user the mark they got:
const failMark = document.getElementById('failMark');
// Displaying the text telling the user their name:
const failName = document.getElementById('failName');

// Control buttons used: 
// "Redo Quiz" button: 
const redoQuizButton = document.getElementById('redoButton');
// "Main Menu" button:
const mainMenuButton = document.getElementById('mainMenuButton');



// Event Listeners:
// Clicking on "Start Quiz" to initiate the quiz app:
// Calling function "startQuiz" to start:
startButtonElement.addEventListener('click', startQuiz);



// Functions

// This function initializes quiz:
function startQuiz() {
    // Hiding Start Button and title after clicking on Start Button:
    startButtonElement.classList.add('hide1');
    pageTitleElement.classList.add('hide1');
    // Shuffling Questions in array list:
    shufflingQuestions = signsQuestions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0
    // Unhiding "Question Container" and "Next Button" after clicking on Start Button:
    questionContainerElement.classList.remove("hide1");
    nextButtonElement.classList.remove('hide1');
    // Calling function "nextQuestion" to set next question in cue.
    nextQuestion();
} 


// This function runs the signs test:
function nextQuestion() {
    // Clearing everything whenever we set a new questions.
    clearPage();
    // Shuffling the questions so we get a random one:
    displayingNewQuestionChoice(shufflingQuestions[currentQuestionIndex]);
}




// ???
function clearPage() {
    // Hiding next button until user chooses an answer:
    nextButtonElement.classList.add('hide1');
    // Loop through all choices buttons:
    while (choicesButtonsElement.firstChild) {
        choicesButtonsElement.removeChild(choicesButtonsElement.firstChild);
    }
}





// ???
function displayingNewQuestionChoice(question) {
    questionTextElement.innerText = question.question
    question.choices.forEach(choices => {
        const choiceButton = document.createElement('button');
        choiceButton.innerText = choices.text;
        choiceButton.classList.add('btn');
        if (choices.correct) {
            choiceButton.dataset.correct = choices.correct;
        }
        choiceButton.addEventListener('click', choosingAnswer);
        choicesButtonsElement.appendChild(choiceButton);
    })
}


function choosingAnswer() {
    // Assigning "selectButton" constant to whatever button was clicked (e.target):
    const selectButton = e.target;
    // Checking if the button of choices clicked is correct or false:
    const correct = selectButton.dataset.correct;
}

// Arraylists to hold data.


// Signs test questions, pictures, and answers:
const signsQuestions = [
    {
        question: 'What does this road sign mean?',
        choices: [
            { text: 'No left turn permitted.', correct:false},
            { text: 'No right turn permitted.', correct:false},
            { text: 'No U-turns allowed.', correct:true},
            { text: 'Do not enter.', correct:false},
        ]

    },
    {
        question: 'What does this road sign mean?',
        choices: [
            { text: '1', correct:false},
            { text: '2', correct:false},
            { text: '3', correct:true},
            { text: '4', correct:false},
        ]
    },
    {
        question: 'What does this road sign mean?',
        choices: [
            { text: 'A', correct:false},
            { text: 'Steep hill ahead', correct:false},
            { text: 'Passing not allowed.', correct:true},
            { text: 'Right lane ends.', correct:false},
        ]
    },
    {
        question: 'What does this road sign mean?',
        choices: [
            { text: 'B', correct:false},
            { text: 'Steep hill ahead', correct:false},
            { text: 'Passing not allowed.', correct:true},
            { text: 'Right lane ends.', correct:false},
        ]
    },
    {
        question: 'What does this road sign mean?',
        choices: [
            { text: 'C', correct:false},
            { text: 'Steep hill ahead', correct:false},
            { text: 'Passing not allowed.', correct:true},
            { text: 'Right lane ends.', correct:false},
        ]
    }
];