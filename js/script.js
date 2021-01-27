/**
 * The Main.js program lets the user change truck and bike's 
 * information, and take them for a ride.
 * 
 * @author Wajd Mariam <wajd.mariam@mths.ca>
 * Version 1.0
 * Created on : 2021/01/24
 */

// Assigning elements to variables:
// Main Page Buttons (car, motorcycle):
var vehicleChoice = document.getElementById('vehicleButton');


// Event Listeners:
// Clicking on one of the choices of vehicles (Main Page):
// Calling function "startWebsite" to start:
vehicleChoice.addEventListener('click', startWebsite);



// Functions

// Initializing website:
function startWebsite() {
    // Running "assigningName" function to store inputted name to a variable:
    assigningName();
} 


// This function assigns name entered to a variable:
function assigningName() {
    // Assigning entered name input to variable for later usage:
    var nameUser = document.getElementById('nameTextBox').value;
}
