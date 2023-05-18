function attachGradientEvents() {
    let gradienElement = document.getElementById('gradient');
    let resultElement = document.getElementById('result');

    gradienElement.addEventListener('mousemove', gradientMousemoveHandler);
    gradienElement.addEventListener('mouseout', reset)

    function gradientMousemoveHandler(e) {

        let percentage = e.offsetX / (e.target.clientWidth - 1);
        percentage = Math.trunc(percentage * 100);
        resultElement.textContent = `${percentage}%`;
    }
    function reset(e) {
        resultElement.textContent = '';
    }
}