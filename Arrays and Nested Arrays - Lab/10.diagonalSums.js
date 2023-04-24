function diagonalSums(input) {
    let sum1 = 0;
    let sum2 = 0;
    let j = 0;
    let row = input[0];
    let k = row.length - 1;
    for (let i = 0; i < input.length; i++) {
        sum1 += input[i][j];
        sum2 += input[i][k];
        j++;
        k--;
    }
    console.log(`${sum1} ${sum2}`);
}
diagonalSums([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]
)