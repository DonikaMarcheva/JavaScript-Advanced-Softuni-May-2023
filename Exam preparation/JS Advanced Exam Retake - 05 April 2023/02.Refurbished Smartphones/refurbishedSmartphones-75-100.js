class RefurbishedSmartphones {
    constructor(retailer) {
        this.retailer = retailer;
        this.availableSmartphones = [];
        this.soldSmartphones = [];
        this.revenue = 0
    }
    addSmartphone(model, storage, price, condition) {
        if (model === '' || !Number.isInteger(storage) < 0 || price < 0 || condition === '') {
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
            if (desiredStorage - storageAvailable > 0 && desiredStorage - storageAvailable <= 128) {
                searchedModel["price"] *= 0.9;
            } else if (desiredStorage - storageAvailable > 128) {
                searchedModel["price"] *= 0.8;
            }
            this.availableSmartphones.find(x => x['model'] != model);
            this.soldSmartphones.push({ model: searchedModel['model'], storage: searchedModel['storage'], price: searchedModel['price'] });
            return `${model} was sold for ${searchedModel["price"].toFixed(2)}$`
        }
    }
    upgradePhones() {
        if (this.availableSmartphones.length > 0) {
            let result = `Upgraded Smartphones:\n`;
            this.availableSmartphones.forEach(element => {
                let details = '';

                element["storage"] *= 2;
                details += `${element['model']} / ${element['storage']} GB / ${element['condition']} condition / ${element['price'].toFixed(2)}$\n`

                result += details;
            });
            return result.trim();
        } else {
            throw new Error('There are no available smartphones!')
        }
    }
    salesJournal(criteria) {
        if (criteria !== 'storage' && criteria !== 'model') {
            throw new Error('Invalid criteria!')
        } else {
            this.revenue = this.soldSmartphones.reduce((a, c) => a['price'] + c['price']);
            let res = `"${this.retailer} has a total income of ${this.revenue.toFixed(2)}$\n`
            res += `\n${this.soldSmartphones.length} smartphones sold:\n`
            if (criteria === 'model') {
                this.soldSmartphones.sort((a, b) => a['model'].localeCompare(b['model']));
                this.soldSmartphones.forEach(element => {
                    res += `\n${element['model']} / ${element['storage']} GB / ${element['price'].toFixed(2)}$\n`
                });
            } else {
                this.soldSmartphones.sort((a, b) => b['storage'] - a['storage']);
                this.soldSmartphones.forEach(element => {
                    res += `\n${element['model']} / ${element['storage']} GB / ${element['price'].toFixed(2)}$\n`
                });
            }
            return res.trim();
        }
    }
}