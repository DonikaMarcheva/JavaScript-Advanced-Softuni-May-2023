function focused() {
    let sectionsArr = Array.from(document.querySelectorAll('div div input'));
    sectionsArr.forEach(el => {
        el.addEventListener('focus', focused);
        el.addEventListener('blur', blur);
    });

    function focused(e) {
        e.target.parentElement.classList.add('focused');
    }
    function blur(e) {
        e.target.parentElement.classList.remove('focused');
    }
}