function magicMatrices(matrix) {
    let rowSumAreEqual = true;
    let colSumAreEqual = true;
    let allAreEqual = true;
    let rowLength = matrix[0].length;
    let rowSum = 0;
    let colSum = 0;
    for (let i = 0; i < matrix.length - 1; i++) {
        let firstRowSum = matrix[i].reduce((a, c) => a + c, 0);
        let secondRowSum = matrix[i + 1].reduce((a, c) => a + c, 0);
        if (firstRowSum != secondRowSum) {
            rowSumAreEqual = false;
            break;
        }
        if (rowSumAreEqual = true) {
            rowSum = secondRowSum;
        }
    }
    for (let j = 0; j < rowLength - 1; j++) {
        let firstColSum = 0;
        let secondColSum = 0;
        let i = 0;
        while (i < matrix.length) {
            firstColSum += matrix[i][j];
            secondColSum += matrix[i][j + 1];
            i++;
        }
        if (firstColSum != secondColSum) {
            colSumAreEqual = false;
            break;
        }
        if (colSumAreEqual === true) {
            colSum = secondColSum;
        }
        if (colSumAreEqual === false) {
            break;
        }
    }
    if ((rowSumAreEqual === true) && (colSumAreEqual === true)) {
        if (rowSum === colSum) {
            allAreEqual = true;
        } else {
            allAreEqual = false;
        }
    } else {
        allAreEqual = false;
    }
    console.log(allAreEqual);
}

magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]])