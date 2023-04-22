function pieceOfPie(flavorArr, firstTargeFlavor, secondTargeFlavor) {
    let firstIndex = flavorArr.indexOf(firstTargeFlavor);
    let secondIndex = flavorArr.indexOf(secondTargeFlavor);
    let newArr = flavorArr.slice(firstIndex, secondIndex + 1);
    return newArr;
}
pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
)