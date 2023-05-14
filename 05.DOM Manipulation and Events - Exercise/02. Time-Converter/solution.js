function attachEventsListeners() {
    let dayButton = document.getElementById('daysBtn');
    let dayInput = document.getElementById('days');

    let hoursButton = document.getElementById('hoursBtn');
    let hoursInput = document.getElementById('hours');


    let minutesButton = document.getElementById('minutesBtn');
    let minutesInput = document.getElementById('minutes');

    let secondsButton = document.getElementById('secondsBtn');
    let secondsInput = document.getElementById('seconds');

    dayButton.addEventListener('click', () => {
        let days = Number(dayInput.value);
        let hours = days * 24;
        let minutes = days * 24 * 60;
        let seconds = days * 24 * 60 * 60;

        hoursInput.value = hours;
        minutesInput.value = minutes;
        secondsInput.value = seconds;
    })

    hoursButton.addEventListener('click', () => {
        let hours = Number(hoursInput.value);
        let days = hours / 24;
        let minutes = hours * 60;
        let seconds = hours * 60 * 60;

        dayInput.value = days;
        minutesInput.value = minutes;
        secondsInput.value = seconds;
    })

    minutesButton.addEventListener('click', () => {
        let minutes = Number(minutesInput.value);
        let days = minutes / 60 / 24;
        let hours = minutes / 60;
        let seconds = minutes * 60;

        dayInput.value = days;
        hoursInput.value = hours;
        secondsInput.value = seconds;
    })

    secondsButton.addEventListener('click', () => {
        let seconds = Number(secondsInput.value);
        let days = seconds / 60 / 60 / 24;
        let hours = seconds / 60 / 60;
        let minutes = seconds / 60;

        dayInput.value = days;
        hoursInput.value = hours;
        minutesInput.value = minutes;
    })
}
