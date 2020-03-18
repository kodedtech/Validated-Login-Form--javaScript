const firstname = document.getElementById('firstname')
const lastname = document.getElementById('lastname')
const password = document.getElementById('password')
const form = document.getElementById('form')
// const email = document.getElementById('email')
const phonenumber = document.getElementById('phonenumber')
// const gender = document.getElementById('gender')
const submit = document.getElementById('submit')
const errorElement = document.getElementById('error')
const email_test = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

submit.addEventListener('click', (e) => {

	let errorMessages = []

	if (firstname.value === '' || firstname.value == null) {

	 errorMessages.push('firstname is required')

	}

	if (lastname.value === '' || lastname.value == null) {

	 errorMessages.push('lastname is required')

	}

	if (!email_test.test(String(email.value).toLowerCase())) {
		errorMessages.push('email is invalid') 
	}


	if (phonenumber.value === '' || phonenumber.value === null) {
		errorMessages.push('phonenumber is required')
	}

	console.log(errorMessages);



	if (password.value.length < 6 ) {
		errorMessages.push('Password must be longer than 6 characters')
	}

	console.log(errorMessages);

	errorElement.innerText = errorMessages;
})


