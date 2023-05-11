function lowestPricesInCities(data) {
    let products = {};
    for (const info of data) {
        let [town, product, price] = info.split(' | ');
        price = Number(price);
        if (!products.hasOwnProperty(product)) {
            products[product] = { price, town };
        } else {
            let currPrice = products.price;
            if (products[product]["price"] > price) {
                products[product]["price"] = price;
                products[product]["town"] = town;
            }
        }
    }
    for (const product in products) {
        let info = Object.entries(products[product]);
        console.log(`${product} -> ${info[0][1]} (${info[1][1]})`);
    }
}
lowestPricesInCities(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000']
)