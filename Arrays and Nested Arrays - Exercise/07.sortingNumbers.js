function sortingNumbers(input) {
    let sortedAscending = input.sort((a, b) => a - b);
    let newArr = [];
    while (sortedAscending.length != 0) {
        let firstNum = sortedAscending.shift();
        let secondNum = sortedAscending.pop();
        newArr.push(firstNum);
        newArr.push(secondNum);
    }
    return newArr;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])