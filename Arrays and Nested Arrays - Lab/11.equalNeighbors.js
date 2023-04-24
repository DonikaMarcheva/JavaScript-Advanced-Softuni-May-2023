function equalNeighbors(matrix) {
    let pairsFound = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length - 1; j++) {
            let firstNum = Number(matrix[i][j]);
            let secondNum = Number(matrix[i][j + 1]);
            if (firstNum === secondNum) {
                pairsFound++;
            }
        }
    }
    for (let i = 0; i < matrix.length - 1; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let firstNum = Number(matrix[i][j]);
            let secondNum = Number(matrix[i + 1][j]);
            if (firstNum === secondNum) {
                pairsFound++;
            }
        }
    }
    console.log(pairsFound);
}

equalNeighbors([[2, 2, 5, 7, 4],
[4, 0, 5, 3, 4],
[2, 5, 5, 4, 2]
]
)
