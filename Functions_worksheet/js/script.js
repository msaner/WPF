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

// the function will calculate the number of bee stings it will take for an animal to die based on it's weight in pounds.
function stingsToDie(vicWeight){
	var numOfStings = vicWeight * 8.666666667; // vicWeight is the weight in pounds of the animal being stung * the number of stings per pound it takes to bring death.
	
	// we need to move the result of the function outside of the function to display it and store it in the var we set up at the beginning.  we use return for this.
	// return will move the result stored in numOfStings outside the function and store it in the var rip we set up
	return numOfStings;
}

//console log will print out the result of the function that's now being stored in var rip.
// add in some concatenated strings so we will see an explanation of what this number represents.
console.log("It takes " + rip + " bee stings to kill this animal.");