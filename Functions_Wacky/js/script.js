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
	if (age >= 17 && sweetTooth > 5){
		 var howMany = 98;
	}else{
		var howMany = 326;
	}
	return howMany;
}

// this calls the function named howMany.  the result of the function will be stored in variable licks.
// age and sweetTooth are arguments that will be passed to the function when it's called
var licks = howMany(age, sweetTooth);

console.log(licks);