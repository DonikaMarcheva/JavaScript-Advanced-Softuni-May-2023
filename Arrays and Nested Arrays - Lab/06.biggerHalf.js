function biggerHalf(array) {
    let newArr = array.sort((a, b) => a - b).slice(Math.floor(array.length / 2));
    return newArr
}
biggerHalf([4, 7, 2, 5])