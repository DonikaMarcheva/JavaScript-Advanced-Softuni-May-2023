function smallestTwoNumbers(array) {
    let sortedArr = array.sort((a, b) => a - b);
    console.log(`${sortedArr[0]} ${sortedArr[1]}`);
}
smallestTwoNumbers([30, 15, 50, 5])