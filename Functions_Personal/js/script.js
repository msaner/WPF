// Michael Saner
// 10-23-2013
// Functions Personal

//calculate how much gas will cost for a trip


// we'll store the user input for how many miles they will drive in this variable
var miles = prompt("How many miles will you be driving?");
// we'll store the value the user gives as the MPG their car has
var carMpg = prompt("What is your vehicles MPG?");
// next we'll ask the user to tell us if they want to calculate fuel cost 1-way or round trip and store that answer in the var 
var roundTrip = prompt("Do you need to know the cost of gas for a round trip? Please enter yes or no.");

// we're doing 2 things here first setting up a var that will hold the final result.  second making that var equal to the function we are calling.  notice miles and carMpg will be passed to the function
var tripCost = gasCost(miles, carMpg);

// in this function we will figure out what the cost of gas will be for the trip
if (roundTrip == "no"){
	function gasCost(miles, carMpg){
		// cost will store the price of gas for a one way trip
		// miles divided by the cars MPG times the national avg. price for a gallon of gas 
		var cost = (miles / carMpg) * 3.339; 
		// return will send the result out of the function and to the var tripCost at top
		return cost
	}
}else{
	 var tripCost = (miles * 2 / carMpg) * 3.339;
	}

console.log(tripCost);