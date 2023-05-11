function diagonalAttack(input) {
    let matrix = [];
    for (const string of input) {
        let arr = string.split(' ').map(Number);
        matrix.push(arr);
    }
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        firstDiagonalSum += matrix[i][i];
        let j = matrix[i].length - 1 - i;
        secondDiagonalSum += matrix[i][j];
    }
    if (firstDiagonalSum === secondDiagonalSum) {
        for (let j = 0; j < matrix.length; j++) {
            for (let k = 0; k < matrix[j].length; k++) {
                if (j != k && k != matrix[j].length - 1 - j) {
                    matrix[j][k] = firstDiagonalSum;
                }
            }
        }
    }
    for (const element of matrix) {
        console.log(element.join(' '));
    }
}
diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
)
console.log("+++++++++++++");
diagonalAttack(['1 1 1',
    '1 1 1',
    '1 1 0'])