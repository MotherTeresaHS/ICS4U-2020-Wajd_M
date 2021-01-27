/**
* The Main.js program lets the user change truck and bike's 
* information, and take them for a ride.
* 
* @author Wajd Mariam <wajd.mariam@mths.ca>
* Version 1.0
* Created on : 2021/01/24
*/


// Title element:
const pageTitleElement = document.getElementById('title');
// Question container (Holds all questions, choices, and images):
const questionContainerElement = document.getElementById('question-container');
// Question Text:
const questionTextElement = document.getElementById("questions");
// Choices buttons:
const choices = Array.from(document.getElementsByClassName("choice-text"));
// Image element:
const ImageSource = document.getElementById('image');
// Progress text:
const progressText = document.querySelector('#progressText');
// Control buttons used:
// "Start Quiz" button: 
const startButtonElement = document.getElementById('startButton');
// "Next Quiz" button:
const nextButtonElement = document.getElementById('nextButton');
// "Correction" text:
const correctionTextElement = document.getElementById('correction');

// Declaring used variables:
let acceptingAnswers = false;
let currentQuestion = {};
let questionCounter = 0;
let score = 0;
let availableQuestions = [];
let questionIndex = 0;

// Arraylist of questions:
let signsQuestions = [
    // First question:
    {
        question: "- What does this sign mean?",
        imageSrc: "assets/noUTurnSign.png",
        choice1: "No right turn permitted.",
        choice2: "No left turn permitted.",
        choice3: "No U-turns allowed.",
        choice4: "Do not enter.",
        answer: 3,
        correction: 'This is a "No U-Turns Allowed" sign'
    },

    // Second question:
    {
        question: "- What does this sign mean?",
        imageSrc: "assets/schoolZone.png",
        choice1: "Hidden intersection ahead.",
        choice2: "Pedesterians crosses street here.",
        choice3: "School zone area",
        choice4: "Passing is not allowed",
        answer: 3,
        correction: 'This is a "School Zone Area" sign'
    },

    // Third question:
    {
        question: "- What does this sign mean?",
        imageSrc: "assets/stopSign.png",
        choice1: "Constructions site.",
        choice2: "Narrow road ahead.",
        choice3: "Hospital.",
        choice4: "Stop sign.",
        answer: 4,
        correction: 'This is a "Stop Sign" sign'
    },
    // Fourth question:
    {
        question: "- What does this sign mean?",
        imageSrc: "assets/speedLimit.png",
        choice1: "Airport.",
        choice2: "Speed limit is 55 KM/H.",
        choice3: "Speed limit will change up ahead.",
        choice4: "Minimum speed is 55 KM/H.",
        answer: 2,
        correction: 'This is a "Speed Limit is 55KM/H" sign'
    },
    // Fifth question:
    {
        question: "- What does this sign mean?",
        imageSrc: "assets/slipperyRoads.png",
        choice1: "No overtaking.",
        choice2: "Roads ahead are slippery.",
        choice3: "There's a round about ahead.",
        choice4: "Stop sign.",
        answer: 2,
        correction: 'This is a "Slippery Roads" sign'
    },
];

// Declaring used constants:
const MAX_QUESTIONS = 20;
const SCORE_POINTS = 1;


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
    questionContainerElement.classList.remove('hide1');
    // Assigning variables to values:
    questionCounter = 0;
    score = 0;
    availableQuestions = [...signsQuestions];
    // Calling function "nextQuestion" to set next question in cue.
    getNewQuestion();
} 



//
getNewQuestion = () => { 
    if (availableQuestions.length == 0 || questionCounter >= MAX_QUESTIONS) {
        // Go to the final page.
        return window.location.assign("/end.html");
    }
    // Printing out current progress:
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;

    // Randomly selecting questions from "signsQuestions":
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
            
    // Creating a variable to hold all the data of one specific question:
    currentQuestion = availableQuestions[questionIndex];

    // Displaying the data from the arraylist:
    // Displaying question:
    questionTextElement.innerHTML = "<p>" + currentQuestion.question + "</p>";
    // Displaying image:
    ImageSource.innerHTML = "<img src=" + currentQuestion.imageSrc + " width='350' height='350'>";
    // Displaying choices:
    choices.forEach(choice => {
        // Getting the data-number of each choice:
        const number = choice.dataset["number"]; //////
        // Matching data-number of choice with the matched choice from database:
        choice.innerText = currentQuestion["choice" + number];
    });

    // Splicing questions at current index to avoid using it again.
    availableQuestions.splice(questionIndex, 1);
    // Assigning acceptingAnswers to true so the program is ready to take in answer:
    acceptingAnswers = true;

};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        console.log(selectedAnswer == currentQuestion.answer);
        const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
        console.log(classToApply);

        selectedChoice.parentElement.classList.add(classToApply);

        // Unhiding correction text class to show correct answer:
        // Displaying correction:
        correctionTextElement.innerHTML = "<p>" + currentQuestion.correction + "</p>";
        correctionTextElement.classList.remove("hide1");

        nextButtonElement.classList.remove("hide1");

        // Adding event listener to next button:
        nextButtonElement.addEventListener('click', e => {
            selectedChoice.parentElement.classList.remove(classToApply);
            correctionTextElement.classList.add("hide1");
            // Increasing question counter:
            questionCounter = questionCounter + 1;
            console.log(questionCounter);
            console.log(score);
            getNewQuestion();
        });
    });
});




  