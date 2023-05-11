function magicMatrices(matrix) {
    for (let i = 0; i < matrix.length - 1; i++) {
        let sumRowOne = matrix[i].reduce((acc, el) => acc + el);
        let sumRowTwo = matrix[i + 1].reduce((acc, el) => acc + el);
        let sumColOne = 0;
        let sumColTwo = 0;
        for (let j = 0; j < matrix.length; j++) {
            sumColOne += matrix[i][j];
            sumColTwo += matrix[i + 1][j];
        }
        if (sumRowOne !== sumRowTwo || sumColOne !== sumColTwo) {
            return false;
        }
    }
    return true;
}
magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
)