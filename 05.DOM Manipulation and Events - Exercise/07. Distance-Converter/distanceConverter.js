function attachEventsListeners() {
    let [inputField, outputFiel] = document.querySelectorAll('input[type="text"]');
    let fromOption = document.getElementById('inputUnits');
    let toOption = document.getElementById('outputUnits');
    let button = document.getElementById('convert');
    button.addEventListener('click', convertion);

    function convertion() {
        let dataToConvert = Number(inputField.value);
        let result = 0;
        switch (fromOption.value) {
            case 'km': dataToConvert *= 1000; break;
            case 'm': dataToConvert = dataToConvert; break;
            case 'cm': dataToConvert *= 0.01; break;
            case 'mm': dataToConvert *= 0.001; break;
            case 'mi': dataToConvert *= 1609.34; break;
            case 'yrd': dataToConvert *= 0.9144; break;
            case 'ft': dataToConvert *= 0.3048; break;
            case 'in': dataToConvert *= 0.0254; break;
        }
        switch (toOption.value) {
            case 'km': result = dataToConvert / 1000; break;
            case 'm': result = dataToConvert; break;
            case 'cm': result = dataToConvert / 0.01; break;
            case 'mm': result = dataToConvert / 0.001; break;
            case 'mi': result = dataToConvert / 1609.34; break;
            case 'yrd': result = dataToConvert / 0.9144; break;
            case 'ft': result = dataToConvert / 0.3048; break;
            case 'in': result = dataToConvert / 0.0254; break;
        }
        outputFiel.value = result;
    }
}