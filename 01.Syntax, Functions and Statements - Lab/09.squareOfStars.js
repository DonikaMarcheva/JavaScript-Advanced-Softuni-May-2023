function squareOfStars(num) {
    let size = num;
    for (let i = 0; i < size; i++) {
        console.log("* ".repeat(size));
    }
}
squareOfStars(6)