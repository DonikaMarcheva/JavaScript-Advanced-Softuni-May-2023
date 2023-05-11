function sameNumbers(num) {
    let numToString = num.toString();
    let sum = numToString.split('').reduce((a, c) => Number(a) + Number(c), 0);
    let isSame = true;
    for (let i = 0; i < numToString.length - 1; i++) {
        let firstDigit = Number(numToString[i]);
        let secondDigit = Number(numToString[i + 1]);
        if (firstDigit !== secondDigit) {
            isSame = false;
            break;
        }
    }
    console.log(isSame === true ? "true" : "false");
    console.log(sum);
}
sameNumbers(1234)