/**
 * The Main.js program lets the user change truck and bike's 
 * information, and take them for a ride.
 * 
 * @author Wajd Mariam <wajd.mariam@mths.ca>
 * Version 1.0
 * Created on : 2021/01/24
 */

// Buttons
// car button (Main Page)
var vehicleChoiceCar = document.getElementById('carButtton');
// motorcycle button (Main Page)
var vehicleChoiceMotorcycle = document.getElementById('motorcycleButtton');
// signs test button (Car/motorcycle)
var signsTestButton = document.getElementById('signsButton');
// traffic rules test button (Car/motorcycle)
var trafficRulesTestButton = document.getElementById('trafficButtton');

// Event Listeners.
// car button (Main Page)
vehicleChoiceCar.addEventListener('click', assigningName);
// motorcycle button (Main Page)
vehicleChoiceMotorcycle.addEventListener('click', assigningName);
// signs test button (Car/motorcycle)
signsTestButton.addEventListener('click', signsTest);
// traffic rules test button (Car/motorcycle)
trafficRulesTestButton.addEventListener('click', signsTest);

// Functions
// This function assigns name entered to a variable.
function assigningName() {
    // Assigning entered name input to variable for later usage.
    var nameUser = document.getElementById("nameTextBox").value;
    console.log(nameUser);
}

// This function runs the signs test:
function signsTest() {
    console.log("hellos");
}

// Arraylists to hold data
// Signs test questions, pictures, and answers:
const signsQuestions = [
    {
        question: 'What does this road sign mean?',
        answers: [
            { text: 'Hidden intersection ahead', correct:false},
            { text: 'Steep hill ahead', correct:false},
            { text: 'Passing not allowed.', correct:true},
            { text: 'Right lane ends.', correct:false},
        ]
    }
]