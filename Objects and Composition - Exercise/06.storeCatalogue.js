function storeCatalogue(arr) {
    let sorted = arr.sort((a, b) => a.localeCompare(b));
    let letter = sorted[0][0].toUpperCase();
    let productsList = {};
    productsList[letter] = [];

    for (const product of sorted) {
        let correctedProduct = product.split(' : ').join(': ');
        if (product.startsWith(letter)) {
            productsList[letter].push(correctedProduct);
        } else {
            letter = product[0].toUpperCase();
            productsList[letter] = [correctedProduct];
        }
    }
    for (const letter in productsList) {
        console.log(letter);
        let products = productsList[letter];
        for (const product of products) {
            console.log(`  ${product}`);
        }
    }
}
storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)