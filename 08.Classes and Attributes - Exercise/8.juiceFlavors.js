function juiceFlavors(input) {
    let juicesQuantity = {};
    let juicesBottles = {};

    input.forEach(element => {
        let [product, quantity] = element.split(' => ');
        quantity = Number(quantity);
        if (!juicesQuantity.hasOwnProperty(product)) {
            juicesQuantity[product] = quantity;
        } else {
            juicesQuantity[product] += quantity;
        }
        if (juicesQuantity[product] / 1000 >= 1) {
            let bottleQuantity = Math.trunc(juicesQuantity[product] / 1000);
            juicesBottles[product] = bottleQuantity;
        }
    });
    for (const key in juicesBottles) {
        console.log(`${key} => ${juicesBottles[key]}`);
    }
}

juiceFlavors(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
)