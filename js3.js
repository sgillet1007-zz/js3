var phone = prompt("please enter phone number","xxx-xxx-xxxx");

if ((phone.charAt(3)==="-") && (phone.charAt(7)==="-")){
	alert("Valid phone number");
}
else {
	alert("Not a valid phone number")
}