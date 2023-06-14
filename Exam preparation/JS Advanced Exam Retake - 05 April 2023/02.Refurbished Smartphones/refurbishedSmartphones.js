class RefurbishedSmartphones {
    constructor(retailer) {
        this.retailer = retailer;
        this.availableSmartphones = [];
        this.soldSmartphones = [];
        this.revenue = 0
    }
    addSmartphone(model, storage, price, condition) {
        if (typeof model !== 'string' || model === '' || !Number.isInteger(storage) || storage < 0
            || typeof price !== 'number' || price < 0 || typeof condition !== 'string' || condition === '') {
            throw new Error('Invalid smartphone!');
        } else {
            let obj = {};
            obj['model'] = model;
            obj['storage'] = storage;
            obj['price'] = price;
            obj['condition'] = condition;
            this.availableSmartphones.push(obj);

            return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`
        }
    }
    sellSmartphone(model, desiredStorage) {
        let searchedModel = this.availableSmartphones.find(x => x['model'] === model);
        if (searchedModel === undefined) {
            throw new Error(`${model} was not found!`);
        } else {
            let storageAvailable = searchedModel["storage"];
            let price=searchedModel['price'];
            if (desiredStorage - storageAvailable > 0 && desiredStorage - storageAvailable <= 128) {
               price= searchedModel["price"] *= 0.9;
            } else if (desiredStorage - storageAvailable > 128) {
                price= searchedModel["price"] *= 0.8;
            }
            this.availableSmartphones=this.availableSmartphones.filter(x => x['model'] !== model);
            this.soldSmartphones.push({ model: searchedModel['model'], storage: searchedModel['storage'], price});
            return `${model} was sold for ${price.toFixed(2)}$`
        }
    }
    upgradePhones() {
        if(this.availableSmartphones.length===0){
            throw new Error('There are no available smartphones!');
        }
        
            let result = [`Upgraded Smartphones:`];
            this.availableSmartphones.forEach(element => {
                element["storage"] *= 2;
                result.push(`${element['model']} / ${element['storage']} GB / ${element['condition']} condition / ${element['price'].toFixed(2)}$`);
            });
            return result.join('\n');
        
    }
    salesJournal(criteria) {
            this.revenue = this.soldSmartphones.reduce((a, c) => a['price'] + c['price']);
            let res = `${this.retailer} has a total income of ${this.revenue.toFixed(2)}$\n`
            res += `${this.soldSmartphones.length} smartphones sold:\n`
            if (criteria === 'model') {
                this.soldSmartphones.sort((a, b) => a['model'].localeCompare(b['model']));
                this.soldSmartphones.forEach(element => {
                    res += `${element['model']} / ${element['storage']} GB / ${element['price'].toFixed(2)}$\n`
                });
                return res.trim();

            } else if(criteria === 'storage'){
                this.soldSmartphones.sort((a, b) => b['storage'] - a['storage']);
                this.soldSmartphones.forEach(element => {
                    res += `${element['model']} / ${element['storage']} GB / ${element['price'].toFixed(2)}$\n`
                });
                return res.trim();

            }
            else{
                throw new Error('Invalid criteria!')
            }
          
        }
    }
//     let retailer = new RefurbishedSmartphones('SecondLife Devices');
// console.log(retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good'));
// console.log(retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect'));
// console.log(retailer.addSmartphone('', 512, 1900, 'good'));
// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
// console.log(retailer.sellSmartphone('Samsung S20 Ultra', 256));
// console.log(retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256));
// console.log(retailer.sellSmartphone('Samsung Galaxy A13', 64));
// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
// console.log(retailer.upgradePhones());
let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
retailer.sellSmartphone('Samsung S20 Ultra', 256);
retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
console.log(retailer.salesJournal('model'));




