// Michael Saner
// 10-17-2013
// Conditionals Wacky

// Trick or Treat

// user picks if they want a trick or a treat and confirms their choice
var trickOrTreat = prompt("Would you like a TRICK or a TREAT?");
var areYouSure = prompt("Are you sure, YES or No:");

if (trickOrTreat == "treat" && areYouSure == "yes"){
	console.log("HAPPY HALLOWEEN! You're candy is on it's way!");
}else if(trickOrTreat == "treat" && areYouSure == "no"){
		console.log("Well make up you're mind you crazy ghoul.");
	}