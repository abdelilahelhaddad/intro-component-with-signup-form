let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let form = document.getElementById("form");
let fnError = document.getElementById("errorFN");
let lnError = document.getElementById("errorLN");
let emailError = document.getElementById("errorEmail");
let passError = document.getElementById("errorPass");

form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
	emailChecker();
});

function emailChecker(){
	let Email = email.value;
	// if (Email === '') {
	// 	document.getElementById("emailLabel").textContent = "Email cannot be empty";
	// 	emailError.style.visibility = "visible";
	// }
		if (!isValid(Email)) {
		document.getElementById("emailLabel").textContent = "Looks like this is not an email";
		emailError.style.visibility = "visible";
  }
}

function checkInputs() { 
	let firstNameValue = firstName.value.trim();
	let lastNameValue = lastName.value.trim();
	let passwordValue = password.value.trim();
	
	if(firstNameValue === ''){
		document.getElementById("firstNameLabel").textContent = "First Name cannot be empty";
		fnError.style.visibility = "visible";
	}
	if (lastNameValue === ''){
		document.getElementById("LastNameLabel").textContent = "Last Name cannot be empty";
		lnError.style.visibility = "visible";
	}
	if (passwordValue === ''){ 
		document.getElementById("passwordLabel").textContent = "Password cannot be empty";
		passError.style.visibility = "visible";
	}
}

function isValid(Email) {
	const regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return regx.test(String(Email).toLowerCase());
}

