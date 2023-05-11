function greatestCommonDivisor(firstNum, secondNum) {
    let divisor = 1;
    let borderNum = Math.min(firstNum, secondNum);

    for (let i = 2; i <= borderNum; i++) {
        if (firstNum % i === 0 && secondNum % i === 0) {
            divisor = i;
        }
    }
    console.log(divisor);
}
greatestCommonDivisor(2154, 458)