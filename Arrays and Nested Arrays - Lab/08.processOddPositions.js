function processOddPositions(array) {
    let newArr = array.map((x, index) => {
        if (index % 2 != 0) {
            return x
        }
    }
    )
        .filter(x => x != undefined)
        .map(x => x * 2)
        .reverse()
        ;
    return newArr;
}
processOddPositions([10, 15, 20, 25])