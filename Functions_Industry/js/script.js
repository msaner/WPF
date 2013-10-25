// Michael Saner
// 10-23-2013
// Functions Industry

// simple calculator that will multiply or divide for us

// the answer will be stored here and tell the code to use either the multiply or divide function
var mulOrDiv = prompt("Do you want to multiply or divide?");
// user input will store here and be multiplied by the second and third numbers 
var number1 = prompt("Enter a number to calculate:");
// holds second number to be calculated
var number2 = prompt("Enter a second number to calculate:");
// holds third number to be calculated
var number3 = prompt("Enter the last number to calculate:");

(mulOrDiv === "multiply") ? times(number1, number2, number3) : divide(number1, number2, number3);