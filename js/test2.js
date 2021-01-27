/**
* The Main.js program lets the user change truck and bike's 
* information, and take them for a ride.
* 
* @author Wajd Mariam <wajd.mariam@mths.ca>
* Version 1.0
* Created on : 2021/01/24
*/


// Declaring used variables:
let acceptingAnswers = true;
let currentQuestion = {};
let questionCounter = 0;
let score = 0;
let availableQuestions = [];
let questionIndex = 0;

// Declaring used constants:
const MAX_QUESTION = 5;
const SCORE_POINTS = 1;


// Assigning elements to used variables andconstants:

// Quiz page:

// Title element:
const pageTitleElement = document.getElementById('title');
// Question container (Holds all questions, choices, and images):
const questionContainerElement = document.getElementById('question-container');
// Question Text:
const questionTextElement = document.getElementById('questions');
// Choices buttons:
const choices = Array.from(document.getElementsByClassName("choice-text"));
console.log(choices);
// Image element:
const ImageSource = document.getElementById('image');
// Progress text:
const progressText = document.querySelector('#progressText');
// Control buttons used:
// "Start Quiz" button: 
const startButtonElement = document.getElementById('startButton');
// "Next Quiz" button:
const nextButtonElement = document.getElementById('nextButton');

 


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
    // Unhiding "Question Container" after clicking on Start Button:
    questionContainerElement.classList.remove("hide1");
    // Assigning variables to values:
    questionCounter = 0;
    score = 0;
    availableQuestions = [...signsQuestions];
    // Calling function "nextQuestion" to set next question in cue.
    getNewQuestion();
} 



// Signs test questions, pictures, and answers:
let signsQuestions = [
    // First question:
    {
        question: "- What does this sign mean?",
        imageSrc: "assets/noUTurnSign.png",
        choiceA: "No right turn permitted.",
        choiceB: "No left turn permitted.",
        choiceC: "No U-turns allowed.",
        choiceD: "Do not enter.",
        correct: "C",
        false: "A",
        false1: "B",
        false2: "D"
    },

    // Second question:
    {
        question: "- What does this sign mean?",
        imageSrc: "assets/schoolZone.png",
        choiceA: "Hidden intersection ahead.",
        choiceB: "Pedesterians crosses street here.",
        choiceC: "School zone area",
        choiceD: "Passing is not allowed",
        correct: "C",
        false: "A",
        false1: "B",
        false2: "D"
    },

    // Third question:
    {
        question: "- What does this sign mean?",
        imageSrc: "assets/stopSign.png",
        choiceA: "Airport",
        choiceB: "Narrow road ahead.",
        choiceC: "Hotel",
        choiceD: "Stop sign.",
        correct: "D",
        false: "A",
        false1: "B",
        false2: "C"
    },
    {
        question: "- What does this sign mean?",
        imageSrc: "assets/speedLimit.png",
        choiceA: "Airport",
        choiceB: "Narrow road ahead.",
        choiceC: "Hotel",
        choiceD: "Stop sign.",
        correct: "D",
        false: "A",
        false1: "B",
        false2: "C"
    },
    {
        question: "- What does this sign mean?",
        imageSrc: "assets/slipperyRoads.png",
        choiceA: "Airport",
        choiceB: "Narrow road ahead.",
        choiceC: "Hotel",
        choiceD: "Stop sign.",
        correct: "D",
        false: "A",
        false1: "B",
        false2: "C"
    },
];




//
function displayNextButton(){ 
    // Displaying next button after answer was chosen:
    nextButtonElement.classList.remove("hide1");
    // Adding event listener to next button and calling 
    // "getNewQuestion" function:
    nextButtonElement.addEventListener('click', getNewQuestion);
}



//
function getNewQuestion() { 
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTION) {
        // Go to the final page.
    }

    // Increasing question counter:
    questionCounter++;
    // Printing out current progress:
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTION}`;

    // Randomly selecting questions from "signsQuestions":
    questionIndex = Math.floor(Math.random() * availableQuestions.length);
        

    currentQuestion = availableQuestions[questionIndex];

    questionTextElement.innerHTML = "<p>" + currentQuestion.question + "</p>";
    ImageSource.innerHTML = "<img src=" + currentQuestion.imageSrc + " width='350' height='350'>";
    choiceA.innerHTML = currentQuestion.choiceA;
    choiceB.innerHTML = currentQuestion.choiceB;
    choiceC.innerHTML = currentQuestion.choiceC;
    choiceD.innerHTML = currentQuestion.choiceD;

    // Splicing questions at current index to avoid using it again.
    availableQuestions.splice(questionIndex, 1);

    // Allowing user to choose a choice:
    acceptingAnswers = true;

    // Calling fucntion "checkAnswer" to see if the chosen choice was correct:
    checkAnswer();
}


// Checking answer if it's correct or not:
function checkAnswer(choice) {
    console.log(choice);
    // If choice == correct:
    if(choice == signsQuestions[questionIndex].correct) {
        // Increasing score:
        score++;
        // True --> Turn button background color to green:
        answerIsCorrect(choice);
    // False --> Turn button background color to red;
    } else if (choice == signsQuestions[questionIndex].false
                || choice == signsQuestions[questionIndex].false1
                || choice == signsQuestions[questionIndex].false2 )
        answerIsWrong(choice);
     } 

function answerIsCorrect(correctChoice){
    let idCorrect = correctChoice;
    console.log(idCorrect);
    let correctButton = document.getElementById(idCorrect);
    console.log(correctButton);
    correctButton.parentElement.classList.add("correct");

    setTimeout( () => {

    }, 1000);
    correctButton.parentElement.classList.remove("correct");

    // Calling "displayNextButton" to display next button:
    displayNextButton();
}

function answerIsWrong(wrongChoice){
    let idWrong = wrongChoice;
    console.log(idWrong);
    let wrongButton = document.getElementById(idWrong);
    console.log(wrongButton);
    wrongButton.parentElement.classList.add("incorrect");

    wrongButton.parentElement.classList.remove("incorrect");

    // Calling "displayNextButton" to display next button:
    displayNextButton();
}




  