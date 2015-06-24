var phone = prompt("please enter phone number","xxx-xxx-xxxx");
if ((phone.charAt(3)==="-") && (phone.charAt(7)==="-")){
	alert("Valid phone number");
}
else {
	alert("Not a valid phone number")
}

var birthdate = prompt("enter birthdate","MM/DD/YY");
var birthMonth = birthdate.substring(0,2);
var birthDay = birthdate.substring(3,5);
var birthYear = birthdate.substring(7,9);

if ((birthdate.charAt(2)==="/") && (birthdate.charAt(5)==="/")) {
	if (((Number(birthMonth) !== NaN) && (Number(birthMonth <= 12))) && ((Number(birthDay) !== NaN) && (Number(birthDay <=31))) && (Number(birthYear)!== NaN)) {
		alert("Valid birthdate");	
	}
	else {
		alert("invalid birthdate")
	}	
}

else {
	alert("invalid birthdate")
}

var zip = prompt("enter zipcode","xxxxx or xxxxx-xxxx");
var zip5 = zip.substring(0,5);
var zip4 = zip.substring(6,9);

if (zip.length === 10){
	if ((zip.charAt(5) === "-") && (Number(zip4) !== NaN) && (Number(zip5) !== NaN))
		alert("Valid zipcode plus 4-digits");
}

else if (zip.length === 5){
	if (Number(zip5) !== NaN){
		alert("Valid zipcode without 4 digit code");
	}
}
else {
	alert("Not a valid zipcode")
}


var state = prompt("enter state as 2 letter CAPS abbreviation", "XX");
if (((state.length== 2) && (isNaN(Number(state))))) {
	alert("Valid state");
}
else {
	alert("invalid state");
}

var married = prompt("are you married?", "yes or no");

if (married.length === 3) {
	if (married.toLowerCase() === "yes"){
		alert("valid answer")
	}
	else {
		alert("invalid answer")
	}
}

else if (married.length === 2) {
	if (married.toLowerCase() === "no"){
		alert("valid answer")
	}
	else {
		alert("invalid answer")
	}
}
