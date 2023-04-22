function negativePositiveNumbers(input) {
    let newArr = [];
    for (const element of input) {
        if (element < 0) {
            newArr.unshift(element);
        } else {
            newArr.push(element)
        }
    }
    console.log(newArr.join('\n'));
}
negativePositiveNumbers([7, -2, 8, 9])