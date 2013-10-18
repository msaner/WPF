// Michael Saner
// 10-17-2013
// Conditionals Wacky

// Trick or Treat

// user picks if they want a trick or a treat and confirms their choice
var trickOrTreat = prompt("Would you like a trick or a treat?");
var areYouSure = prompt("Are you sure, yes or no:");

// if user wants a treat and is sure about it then print the console message.
if (trickOrTreat == "treat" && areYouSure == "yes"){
	console.log("HAPPY HALLOWEEN! You're candy is on it's way!");
	// if user wants a treat but isnt sure display this console message
}else if(trickOrTreat == "treat" && areYouSure == "no"){
		console.log("Well make up you're mind you crazy ghoul.");
		// if user wants a trick and is sure give them a link to a cool card and coin trick!
	}else if(trickOrTreat == "trick" && areYouSure == "yes"){
		console.log("Enjoy! http://www.goodtricks.net/elastic-coin-trick.html");
	}else if(trickOrTreat == "trick" && areYouSure == "no"){
		console.log("Well... aren't you indecisive!");
	}else{
		console.log("Please refresh the page and start over.  You forgot to answer one of the questions.  Please use all lowercase letters.");
	}