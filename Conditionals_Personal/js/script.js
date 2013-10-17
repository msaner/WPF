// Michael Saner
// 10/16/2013
// Conditionals Personal

//Cooking time

//user input the wattage of their microwave and stores value
var watts = prompt("How many watts is your microwave? (Normally it's either 700 or 1100)");
//user input number of hot pockets they want to cook and stores value
var hotPockets = prompt("How many Hot Pockets are you doing to cook?");

//if a value was not given for either one of the prompts a message will be displayed to user
if (watts === "" || hotPockets === ""){
	console.log("You did not enter a number for one of the questions. Please try again.");
}
