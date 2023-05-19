function validate() {
    let input = document.getElementById('email');

    input.addEventListener('change', validationEmail);

    function validationEmail() {
        let inputEmail = input.value;
        let pattern = /[a-z]+@[a-z]+\.[a-z]+/g;

        if (pattern.test(inputEmail)) {
            input.classList.remove('error');

        } else {
            input.classList.add('error');
        }
    }
}
