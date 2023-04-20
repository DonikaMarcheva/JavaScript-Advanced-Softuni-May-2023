function lastKNumbersSequence(n, k) {
    let elementsArr = [1];
    for (let i = 1; i < n; i++) {
        let sum = 0;
        let startIndex = Math.max(0, i - k);
        for (let j = startIndex; j < i; j++) {
            sum += elementsArr[j];
        }
        elementsArr[i] = sum
    }
    return elementsArr;
}

lastKNumbersSequence(6, 3)