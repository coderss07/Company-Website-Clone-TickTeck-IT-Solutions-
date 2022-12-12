(function () {
	"use strict";

	let forms = document.getElementById('email-form')

	
	forms.addEventListener('submit', function(event) {
		event.preventDefault();
		var btn = document.getElementById('email-btn');
		btn.innerHTML = 'Sending...';

		let thisForm = this;

		thisForm.querySelector('.loading').classList.add('d-block');
		thisForm.querySelector('.error-message').classList.remove('d-block');
		thisForm.querySelector('.sent-message').classList.remove('d-block');

		const serviceID = 'service_6nzafqe';
    	const templateID = 'template_ozrcl17';

    	let _name = thisForm.querySelector("#name").value;
    	let _email = thisForm.querySelector("#email").value;
    	let _subject = thisForm.querySelector("#subject").value;
    	let _message = thisForm.querySelector("#Message").value;

		setTimeout(() => {
			thisForm.reset();
		}, 500);

		var templateParams = {
			from_name: _name,
			from_email: _email,
			subject: _subject,
			message: _message
		};
		thisForm.querySelector('.loading').classList.remove('d-block');
		emailjs.send(serviceID, templateID, templateParams)
		.then(() => {
			thisForm.querySelector('.sent-message').classList.add('d-block');
			btn.innerHTML = 'Send Message';
			thisForm.reset();
		}, (err) => {
			btn.innerHTML = 'Send Message';
			displayError(thisForm, "Error occured...")
		});
		
	});

	function displayError(thisForm, error) {
		thisForm.querySelector('.loading').classList.remove('d-block');
		thisForm.querySelector('.error-message').innerHTML = error;
		thisForm.querySelector('.error-message').classList.add('d-block');
	}

})();
