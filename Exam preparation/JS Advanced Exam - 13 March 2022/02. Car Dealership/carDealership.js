class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }
    addCar(model, horsepower, price, mileage) {
        if (typeof model !== 'string' || model === '' ||
            !Number.isInteger(horsepower) || typeof horsepower !== 'number' || horsepower < 0 ||
            typeof price !== 'number' || price < 0 ||
            typeof mileage !== 'number' || mileage < 0) {
            throw new Error(`Invalid input!`);
        } else {
            this.availableCars.push({ model, horsepower, price, mileage });
            return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
        }
    }
    sellCar(model, desiredMileage) {
        let searchedCar = this.availableCars.find(x => x.model === model);
        if (!searchedCar) {
            throw new Error(`${model} was not found!`);
        } else {
            let soldPrice = 0;
            let priceDifference = searchedCar.mileage - desiredMileage;
            if (priceDifference > 0 && priceDifference <= 40000) {
                soldPrice = searchedCar.price * 0.95;
            } else if (priceDifference > 40000) {
                soldPrice = searchedCar.price * 0.90;
            } else {
                soldPrice = searchedCar.price;
            }
            this.availableCars = this.availableCars.filter(x => x.model !== model);
            this.soldCars.push({ model, horsepower: searchedCar.horsepower, soldPrice });
            this.totalIncome += soldPrice;
            return `${model} was sold for ${soldPrice.toFixed(2)}$`;
        }
    }
    currentCar() {
        if (this.availableCars.length === 0) {
            return "There are no available cars";
        }
        let res = `-Available cars:\n`;
        let currentCars = this.availableCars
            .map(x => `---${x.model} - ${x.horsepower} HP - ${(x.mileage).toFixed(2)} km - ${(x.price).toFixed(2)}$`);
        res += currentCars.join('\n');
        return res.trim();
    }
    salesReport(criteria) {

        if (criteria === 'horsepower') {
            this.soldCars = this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
        } else if (criteria === 'model') {
            this.soldCars = this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        } else {
            throw new Error("Invalid criteria!");
        }
        let soldcarsCount = this.soldCars.length;
        this.soldCars = this.soldCars.map(x => `---${x.model} - ${x.horsepower} HP - ${x.soldPrice.toFixed(2)}$`);
        let res = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n`
        res += `-${soldcarsCount} cars sold:\n`
        res += this.soldCars.join('\n');
        return res.trim();
    }
}

// let dealership = new CarDealership('SoftAuto');
// console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// console.log(dealership.addCar('', 120, 4900, 240000));
// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.sellCar('Toyota Corolla', 230000));
// console.log(dealership.sellCar('Mercedes C63', 110000));
// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.currentCar());
let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('model'));



