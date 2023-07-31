function formValidation() {

	//Make references to fields
	var name = document.getElementById('name');
	var email = document.getElementById('_replyto');
	var message = document.getElementById('message');

	//Reset alert
	$('#alert').text("");

	//Check if form fields are empty
	if(name.value.length == 0) {
		$('#alert').text("Please fill in all fields.");
		name.focus();
		return false;
	}

	if(_replyto.value.length == 0) {
		$('#alert').text("Please fill in all fields.");
		_replyto.focus();
		return false;
	}

	if(message.value.length == 0) {
		$('#alert').text("Please fill in all fields.");
		message.focus();
		return false;
	}

	//Check if email entered is valid
	if(emailValidation(email)){
		return true;
	}

}

//Validate email using regex
function emailValidation(inputtext) {
	var emailExp = /^[\w\-\.\_]{1,20}\@[a-zA-Z0-9\.\-]{1,20}\.[a-zA-Z]{2,4}$/; 
	if (inputtext.value.match(emailExp)) {
		return true;
	}
	else {
		$('#alert').text("Invalid Email."); 
		inputtext.focus();
		return false;
	}
}