function carCompany(input) {
    let cars = {};
    input.forEach(element => {
        let [car, model, quantity] = element.split(' | ');
        quantity = Number(quantity);
        if (!cars.hasOwnProperty(car)) {
            cars[car] = {};
        }
        if (!cars[car].hasOwnProperty(model)) {
            cars[car][model] = 0
        }
        cars[car][model] += quantity;
    });
    for (const key in cars) {
        console.log(key);
        for (const model in cars[key]) {
            console.log(`###${model} -> ${cars[key][model]}`);
        }
    }
}
carCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
)