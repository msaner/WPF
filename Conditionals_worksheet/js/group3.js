// Michael Saner
// Oct. 16, 2013
// Conditionals Worksheet

//tire pressure check

//tire pressures entered by the user are stored in variable psi as an array
var psi = [];

//lets prompt the user to input their tires PSI
psi [0] = prompt("Enter the PSI of your cars FRONT LEFT tire:");
psi [1] = prompt("Enter the PSI of your cars FRONT RIGHT tire:");
psi [2] = prompt("Enter the PSI of your cars BACK LEFT tire:");
psi [3] = prompt("Enter the PSI of your cars BACK RIGHT tire:");

//if front left & right have same PSI and back left & right have same PSI the statement is true even if the front 2 and back 2 are a different PSI.
(psi[0] == psi[1] && psi[2] == psi[3]) ? console.log("The tires pass spec!") : console.log("Get your tires checked out!");

