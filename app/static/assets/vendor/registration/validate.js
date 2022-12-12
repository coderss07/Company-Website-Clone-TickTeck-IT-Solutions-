(function () {
    "use strict";

    let form = document.getElementById('register-form')

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let thisForm = this;

        thisForm.querySelector('.error-message').classList.remove('d-block');

        let password = thisForm.querySelector('#password');
        let cpassword = thisForm.querySelector('#c-password');
        let email = thisForm.querySelector('#email');

        thisForm.onreset = () => {
            thisForm.querySelector('.error-message').classList.remove('d-block');
        }
        if(!ValidateEmail(thisForm, email)) {
            return;
        }
        if(!passid_validation(thisForm, password, cpassword)) {
            return;
        }
    });

    function passid_validation(thisForm, passid, cpassword) {
        var passid_len = passid.value.length;
        if (passid_len == 0 || passid_len < 8 || passid_len > 15) {
            displayError(thisForm, "Password length should be between 8 and 15")
            passid.focus();
            return false;
        }
        let password = passid.value;
        var letters = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        if(!password.match(letters)) {
            displayError(thisForm, "Password must be Alphanumeric with atleast one character uppercase, lowercase and special character");
            passid.focus();
            return false;
        }
        if (cpassword.value != passid.value) {
            displayError(thisForm, "Confirm password and Password must be same")
            cpassword.focus();
            return false;
        }
        return true;
    }

    function ValidateEmail(thisForm, uemail) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (uemail.value.match(mailformat)) {
            return true;
        }
        else {
            displayError(thisForm, "Enter valid email address: ")
            uemail.focus();
            return false;
        }
    }

    function displayError(thisForm, error) {
        thisForm.querySelector('.error-message').innerHTML = error;
        thisForm.querySelector('.error-message').classList.add('d-block');
    }

})();





