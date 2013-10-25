// Michael Saner
// 10-23-2013
// Functions Industry

// simple calculator that will multiply or divide for us

// USER INPUTS STORED IN THESE VARIABLES

// the answer will be stored here and tell the code to use either the multiply or divide function
var mulOrDiv = prompt("Do you want to multiply or divide?");
// user input will store here and be multiplied by the second and third numbers 
var number1 = prompt("Enter a number to calculate:");
// holds second number to be calculated
var number2 = prompt("Enter a second number to calculate:");
// holds third number to be calculated
var number3 = prompt("Enter the last number to calculate:");

// we're going to have 1 function to multiply and 1 function to divide based on the user input stored in var mulOrDiv
// if mulOrDiv is set to multiply then we ill call function times otherwise we will call the function divide

//  MULTIPLY FUNCTION

// the three numbers we will calculate are stored as arguments here so we can pass them into the functions
(mulOrDiv === "multiply") ? times(number1, number2, number3) : divide(number1, number2, number3);

// we will set mulAnswer equal to the result of the function.  mulAnswer will end up holding the result of our calculation 
var mulAnswer = times(number1, number2, number3);

// if the user entered that they want to multiply this function will run
// the arguments we passed to the function are now in the function as parameters
function times(number1, number2, number3){
	// mulTotal will hold the result of the 3 numbers being multiplied
	var mulTotal = number1 * number2 * number3;
	
	// now that we have the answer to our calculation we need to get it outside of the function.  we will return mulTotal so it
	// kicks out and gets stored in the mulAnswer variable we set before this function
	return mulTotal;
}

// DIVIDE FUNCTION

// if the user indicated that they wanted to divide this next function will run because mulOrDiv === multiply is false (we set this up in the ternary above)

// divAnswer is equal to the result generated by function divide
var divAnswer = divide(number1, number2, number3);

// this function will run if the user didn't enter multiply
function divide(number1, number2, number3){
	// var div total holds the result of the 3 numbers being divided
	var divTotal = number1 / number2 / number3;
	
	// now that we have the answer to our calculation we need to get it outside of the function.  we will return divTotal so it
	// kicks out and gets stored in the divlAnswer variable we set before this function
	return divTotal;
}

// SHOW THE RESULTS IN THE CONSOLE

// since we have two functions we need to tell the computer which result to display or it would show two lines in the console and one would result in an error.
// we'll use if ... else if statements to check for certain conditions so the right result will be displayed

if(mulOrDiv === "multiply"){
	console.log(mulAnswer);
}else if(mulOrDiv === "divide"){
	console.log(divAnswer);
}