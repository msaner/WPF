// Michael Saner
// Oct. 16, 2013
// Conditionals Worksheet

//celsius fahrenheit converter
var degrees = prompt("Now enter the number of degrees you would like to convert");
var unitType = prompt("Enter C if you want to convert to Fahrenheit or F if you want to convert to celius");

//if the unit type entered is fahrenheit convert to celsius
if(unitType == "f" ){
	var convertDeg = (degrees - 32) * 5 / 9;
	
	console.log(degrees + "F is " + convertDeg + "C");
}else{
		var convertDeg = degrees * 9 / 5 + 32;
		console.log(degrees + "C is " + convertDeg + "F");
	}
