function attachEventsListeners() {
let dayButton=document.getElementById('daysBtn');
let dayInput=document.getElementById('days');

let hoursButton=document.getElementById('hoursBtn');
let hoursInput=document.getElementById('hours');


let minutesButton=document.getElementById('minutesBtn');
let minutesInput=document.getElementById('minutes');

let secondsButton=document.getElementById('secondsBtn');
let secondsInput=document.getElementById('seconds');

dayButton.addEventListener('click',onConvert);
hoursButton.addEventListener('click',onConvert);
minutesButton.addEventListener('click',onConvert);
secondsButton.addEventListener('click',onConvert);

let rations={
    days:1,
    hours:24,
    minutes:1440,
    seconds:86400
}
function convert(value,unit){
let days=value/rations[unit];

return {
    days:days,
    hours:days*rations.hours,
    minutes:days*rations.minutes,
    seconds:days*rations.seconds
}
}

function onConvert(e){
let input=e.target.parentElement.querySelector('input[type="text"]');
let time=convert(Number(input.value),input.id);
dayInput.value=time.days;
hoursInput.value=time.hours;
minutesInput.value=time.minutes;
secondsInput.value=time.seconds;
}

}