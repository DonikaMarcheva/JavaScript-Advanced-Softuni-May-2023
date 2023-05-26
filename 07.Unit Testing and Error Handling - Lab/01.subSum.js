function subSum(numbers, start, end) {
    if (!Array.isArray(numbers)) {
        return NaN;
    }
    let srartIndex = Math.max(0, start);
    let endIndex = Math.min(end, numbers.length - 1);
    let resNumbers = numbers.slice(srartIndex, endIndex + 1);
    let sum = resNumbers.reduce((a, c) => Number(a) + Number(c), 0);
    return sum;
}
console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300))
console.log(subSum('text', 0, 2)) 