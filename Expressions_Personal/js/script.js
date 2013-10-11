// JavaScript Document

// Michael Saner
// 10-10-2013
// Expressions Personal Assignment

//Calculate how much money will  be earned in a week before taxes

var hrScheduled = 9; //the number of hours scheduled to work each day
var lunchBrk = 1; //non paid hours because of lunch break

//to find actual number of paid hours worked in a day subtract the hrsScheduled from the lunchBrk and store this in var actual
var actual = hrScheduled - lunchBrk; //actual is the actual number of hours that a person will be paid for in a day

//now calculate how many paid hours are worked in a week by multiplying the actual daily hours by the number of days in a week (daysWorked) and store in var wkHours
var daysWorked = 5; //sets how many days a person works in a week

var wkHours = actual * daysWorked;



console.log(wkHours);