function validate() {
    let userName = document.getElementById('username');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let confirmPass = document.getElementById('confirm-password');
    let checkbox = document.getElementById('company');
    checkbox.addEventListener('change', hideDisplay);
    let companyInfo = document.getElementById('companyInfo');
    let companyNumber = document.getElementById('companyNumber');
    let button = document.getElementById('submit');
    button.addEventListener('click', validateInputs);
    let validDiv = document.getElementById('valid');

    function hideDisplay() {
        if (checkbox.checked === true) {
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }
    }
    function validateInputs(e) {
        e.preventDefault();
        validateUser();
        validateEmail();
        validateTwoPassInputs();
        validateCompanyNum();
        if (validateUser() === true && validateEmail() === true &&
            validateTwoPassInputs() === true && validateCompanyNum() === true) {
            validDiv.style.display = 'block';
        } else {
            validDiv.style.display = 'none';
        }
    }

    function validateUser() {
        if (userName.value.match(/^[A-Za-z0-9]+$/) && userName.value.length >= 3 && userName.value.length <= 20) {
            userName.style.border = 'none'
            return true;
        } else {
            userName.style.borderColor = 'red';
            return false;
        }
    }
    function validateEmail() {
        if (email.value.match(/.*@.*\..*/)) {
            email.style.border = 'none'
            return true;
        } else {
            email.style.borderColor = 'red';
            return false
        }
    }
    function validatePassword() {
        if (password.value.match(/^[\w]+$/) && password.value.length >= 5 && password.value.length <= 15) {
            return true;
        } else {
            return false;
        }
    }
    function validatePassConfirmation() {
        if (confirmPass.value.match(/^[\w]+$/) && confirmPass.value.length >= 5 && confirmPass.value.length <= 15) {
            return true;
        } else {
            return false;
        }
    }
    function validateTwoPassInputs() {
        if (password.value === confirmPass.value && validatePassword()===true && validatePassConfirmation()===true) {
            password.style.border = 'none';
            confirmPass.style.border = 'none'
            return true;
        } else {
            password.style.borderColor = 'red';
            confirmPass.style.borderColor = 'red';
            return false;
        }
    }
    function validateCompanyNum() {
        if (checkbox.checked === true) {
            if (Number(companyNumber.value) >= 1000 && Number(companyNumber.value) <= 9999) {
                companyNumber.style.border = 'none';
                return true;
            } else {
                companyNumber.style.borderColor = 'red';
                return false;
            }
        } else {
            return true;
        }
    }
}


