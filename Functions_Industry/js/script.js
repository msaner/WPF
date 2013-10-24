// Michael Saner
// 10-23-2013
// Functions Industry

// Inches to Pixels converter

var inToPx = prompt("Are you converting Inches to Pixels?  Enter 'yes' or 'no'.");
var dpi = prompt("What is the DPI setting of the file you'll be creating?");
var inWidth = prompt("Enter the width in Inches:");
var inHeight = prompt("Enter the height in Inches:"); 

if(inToPx === "yes"){
	var convert = function(dpi, inWidth, inHeight){
		var pixelw = dpi * inWidth;
	}
}else if(inToPx === "no"){
	console.log("You're going to need a different converter.  This will only convert Inches to Pixels.");
}
	var pixels = convert(dpi, inWidth, inHeight);