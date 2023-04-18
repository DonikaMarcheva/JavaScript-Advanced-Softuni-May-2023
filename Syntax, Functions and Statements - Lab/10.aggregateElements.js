function aggregateElements(array) {
    let sum = array.reduce((a, c) => a + c, 0);
    let newArr = array.map(x => 1 / x);
    let inverseValueSum = newArr.reduce((a, c) => a + c, 0);

    console.log(sum);
    console.log(inverseValueSum);
    console.log(array.join(''))
}
aggregateElements([1, 2, 3])