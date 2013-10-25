// Michael Saner
// 10-24-2013
// Functions Wacky

// How many licks?

//Just how many licks does it take to get to the center of a tootsie pop?  let's find out.
// we'll start by getting some information from our user

// we first need to find out how old the person is.  we will store this value in the age variable
var age = prompt("How old are you?");
// how big a sweet tooth a person has is the most important factor.  we'll store that in this variable
var sweetTooth = prompt("On a scale of 1(least)-10(most) how big is your sweet tooth?");

// lets use an anonymous function here.  we have to define the function first.  the function call will come later
// age and sweetTooth have been passed from the function call and are now parameters we can use in our function
var howMany = function(age, sweetTooth){
	// where the magic happens... the until now Super Secret formula for figuring out the mystery of how to lick your way to that tootsie pop goodness
	if (age >= 17 && sweetTooth > 5){
		// if a person is age 17 or above AND they rated their love for sweets higher than 5 then it will take 98 licks
		 var howMany = 98;
		 // if a person does not meet both conditions meaning they are either younger than 17, rated their sweet tooth lower than 5 or both we will run the else statement
	}else{
		// so if one or both the conditions in the if statement are false when this is how many licks it takes 
		var howMany = 326;
	}
	// in order to use this value we have to get it out of the function.  we use the return statement to do this
	// variable howMany will be moved outside the function and the value will be stored in the variable called licks
	return howMany;
}

// this calls the function named howMany.  the result of the function will be stored in variable licks.
// age and sweetTooth are arguments that will be passed to the function when it's called
var licks = howMany(age, sweetTooth);

// now that the result of our function is stored in the variable called licks that is also outside of the function we have to show it in the console
console.log(licks);