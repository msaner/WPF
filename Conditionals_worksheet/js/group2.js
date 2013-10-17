// Michael Saner
// Oct. 16, 2013
// Conditionals Worksheet

//check login username and password

//get user to create a username and password which will be stored in these variables
var userName = prompt("Please create a User name:");
var password = prompt("Please create a password:");

//lets ask the user to "login" by entering the username and password they just created
var signInUserName = prompt("To Sign In - Enter your user name:");
var signInPassword = prompt("To Sign In - Enter your password:");

//now let's check and see if the username and password match what was originally entered
if(userName === signInUserName && password === signInPassword){
	//if both the username and password are a match then show welcome text
	console.log("Welcome, " + userName + "!");
	//check if username matches
}else if(signInUserName != userName){  
		//if usernames dont match show alert "user not found"
		console.log("User not found. Try again.");
		//check if passwords match
	}else{
			//if passwords don't match write this to the log
			console.log("Password does not match our records.");
		}	

