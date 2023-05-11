function extractIncreasingSubsequence(arr) {
    let biggestNum = arr[0];
    let newArr = [biggestNum];
    for (let i = 1; i < arr.length; i++) {

        let newNum = arr[i];
        if (newNum >= biggestNum) {
            biggestNum = newNum;
            newArr.push(biggestNum);
        }
    }
    return newArr;
}
extractIncreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24])