// JavaScript Document

// Michael Saner
// 10-10-2013
// Expressions Personal Assignment

//Calculate how much money I will  earn in a week before taxes

var hrScheduled = prompt("How many hours are you scheduled to work each day?"); //the number of hours scheduled to work each day based on user input

var lunchBrk = prompt("How many hours do you get for lunch"); //non paid hours because of lunch break

//to find actual number of paid hours worked in a day subtract the hrsScheduled from the lunchBrk and store this in var actual
var actual = hrScheduled - lunchBrk; //actual is the actual number of hours that a person will be paid for in a day

//now calculate how many paid hours are worked in a week by multiplying the actual daily hours by the number of days in a week (daysWorked) and store in var wkHours
var daysWorked = 5; //sets how many days a person works in a week

var wkHours = actual * daysWorked; //calculates the actual number of paid hours worked per week, this number is stored in wkHours

//now let's set the pay rate and mulitply that by the number of hours worked to see what this person will earn 
var rate = prompt("Please enter your hourly pay rate"); //sets the pay rate to be calculated

//we will store the weekly pay in wkPay 

var wkPay = wkHours * rate; //multiply the weekly paid hours worked (wkHours) * the hourly rate (rate) and store the weekly pay in (wkPay)


//all that will show up now is the value for the amount earned a week.  lets write some strings to explain what that number is. we will show this by using console.log to print the results.
//console.log(wkPay); this only shows our final variable, we'll comment it out and then add some strings to explain it.
console.log("I will earn" + " " + "$" + wkPay + " " + "a week before taxes.");