function rotateArray(array, rotationNum) {
    let i = 1;
    while (i <= rotationNum) {
        let movedElement = array.pop();
        array.unshift(movedElement);
        i++;
    }
    console.log(array.join(' '));
}
rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15)