// Michael Saner
// 10-17-2013
// Conditionals Industry

// A/B split test - compare two email reults to see which one performed best.

//prompt user to enter info for Email A
var sentToA = prompt("How many people did you send Email 'A' to?");
var clicksA = prompt("How many people clicked on a link in Email 'A'?");

//user enter info for email B and store in these variables
var sentToB = prompt("How many people did you send Email 'B' to?");
var clicksB = prompt("How many people clicked on a link in Email 'B'?");

// now we have the numbers lts convert this into a click through percentage for each email
// these var will store the click through percentage
var clickPercentageA = (sentToA / clicksA) * 100;

console.log(clickPercentageA); 
