// Michael Saner
// 10-17-2013
// Conditionals Industry

// A/B split test - compare two emails to see which one had the best click through rate.

//prompt user to enter info for Email A
var sentToA = prompt("How many people did you send Email 'A' to?");
var clicksA = prompt("How many people clicked on a link in Email 'A'?");

//user enter info for email B and store in these variables
var sentToB = prompt("How many people did you send Email 'B' to?");
var clicksB = prompt("How many people clicked on a link in Email 'B'?");

// now we have the numbers lts convert this into a click through percentage for each email
// these var will store the click through percentage
var clickPercentageA = (clicksA / sentToA) * 100;
var clickPercentageB = (clicksB / sentToB) * 100;

// now that we know the percentage of people that clicked on a link in our email lets find out which one performed better and display that in a text based message.
(clickPercentageA < clickPercentageB) ? console.log("Email B had a better click through rate than Email A.") : console.log("Email A had a better click through rate than Email B."); 

