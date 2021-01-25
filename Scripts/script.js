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
const vehicleChoiceCar = document.getElementById('carButton')


// Event Listeners.
// car button (Main Page)
vehicleChoiceCar.addEventListener('click', assigningName)


// Functions
// This function assigns name entered to a variable.
function assigningName() {
    // Assigning entered name input to variable for later usage.
    console.log("Helo")
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