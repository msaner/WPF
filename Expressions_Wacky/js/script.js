// JavaScript Document

// Michael Saner
// 10-10-2013
// Expressions Wacky Assignment



//set up a prompt to ask user to choose a number for the first part of their pirate name

//lets set up an array that will contain all the possible first names for the Pirate name
 var pirate1 = ["Captain", "Tiny", "Scallywag", "Moppet"];
 
 //now lets initiate a user prompt asking the user to choose a number that is linked to the index number of our array items
 var firstname = prompt("Generate your first name by choosing a number between 0 and 3.");
 
 //rinse and repeat.  we will create another array to generate the middle name for our pirate.
 var pirate2 = [""];
 
 console.log(pirate1[firstname]);