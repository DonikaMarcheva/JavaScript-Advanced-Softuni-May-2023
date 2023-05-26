function validate() {
    let inputField = document.getElementById('email');
    let pattern = /[a-z]+@[a-z]+.[a-z]+/;
    inputField.addEventListener('change', () => {
        let text = inputField.value;
        let match = text.match(pattern);
        if (!match) {
            inputField.classList = 'error';
            inputField.value = '';
        } else {
            inputField.classList = '';
        }
    })
}

