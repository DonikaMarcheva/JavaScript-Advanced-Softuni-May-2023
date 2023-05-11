function orbit(input) {
    let rows = input[0];
    let cols = input[1];
    let initialRow = input[2];
    let initialCol = input[3];
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
    }
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - initialRow), Math.abs(col - initialCol)) + 1;

        }
    }
    matrix.forEach(row => console.log(row.join(' ')));
}
orbit([5, 5, 2, 2])