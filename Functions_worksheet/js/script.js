// Michael Saner
// 10-22-2013
// Functions Worksheet

// calculate the circumference of a circle

// the radius of the circle which we will use to find the circumference
var radius = 5;

// var answer will hold the results generated by the below function. 
var answer = findCirc(radius); // radius added as argument to pass it to the function

// this function will run the calculation to find our answer
function findCirc(radius){ // parameter is telling the function to pull in the variable established above
	var circumference = radius * 2 * 3.14; // 5 * 2 = diameter * 3.14 = circumference
	
	// we need to get the result out of the function to display it we will use "return" for this
	// the result will be kicked to the top above the function and be stored in variable answer that's equal to the function name we're calling.
	return circumference;
}

// console log is displaying the result of the function called findCirc
// lets make this read like a scentence so it's clear what this number means
console.log("The circumference of the circle is " + answer);



// Stung!

// we'll put in the weight of the animal being stung here
var vicWeight = 213;

// var rip will hold the final result of the function
// we're calling the function called stingsToDie and passing it the argument vicWeight
var rip = stingsToDie(vicWeight);