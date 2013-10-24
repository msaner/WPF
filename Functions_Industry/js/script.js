// Michael Saner
// 10-23-2013
// Functions Industry

// Inches to Pixels converter

var inToPx = prompt("Are you converting Inches to Pixels?  Enter 'yes' or 'no'.");
var dpi = prompt("What is the DPI setting of the file you'll be creating?");
var InWidth = prompt("Enter the width in Inches:");
var InHeight = prompt("Enter the height in Inches:"); 

if(inToPx === "yes"){
	var convert = function(dpi, width, height){
		var pixelw = dpi * width;
		console.log(pixelw);
	}}
	
	var pixels = convert(dpi, width, height);