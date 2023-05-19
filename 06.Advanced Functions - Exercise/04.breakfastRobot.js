function solution() {
    let notEnoughProduct = false;
    let output = '';
    let storage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }
    function error() {
        if (storage['potein'] < 0 || storage['carbohydrate'] < 0 || storage['fat'] < 0 || storage['flavour'] < 0) {
            notEnoughProduct = true;
            output = 'Error: not enough carbohydrate in stock';
        } else {
            output = 'Success';
        }
    }
    products = {
        apple(quantity) {
            storage['carbohydrate'] -= 1 * quantity;
            storage['flavour'] -= 2 * quantity;
        },
        lemonade(quantity) {
            storage['carbohydrate'] -= 10 * quantity;
            storage['flavour'] -= 20 * quantity;
        },
        burger(quantity) {
            storage['carbohydrate'] -= 5 * quantity;
            storage['fat'] -= 7 * quantity;
            storage['flavour'] -= 3 * quantity;
        },
        eggs(quantity) {
            storage['protein'] -= 5 * quantity;
            storage['fat'] -= 1 * quantity;
            storage['flavour'] -= 1 * quantity;
        },
        turkey(quantity) {
            storage['protein'] -= 10 * quantity;
            storage['carbohydrate'] -= 10 * quantity;
            storage['fat'] -= 10 * quantity;
            storage['flavour'] -= 10 * quantity;
        }
    }

    let command = {
        restock(ingredient, quantity) {
            quantity = Number(quantity);
            storage[ingredient] += quantity;
            return 'Success';
        },
        prepare(product, quantity) {
            quantity = Number(quantity);
            products[product](quantity);
            error()
            if (notEnoughProduct) {
                products[product](-quantity);
                notEnoughProduct = false;
            }
            return output;
        },
        report() {
            let reportMessage = [];
            for (const key in storage) {
                reportMessage.push(`${key}=${storage[key]}`)
            }
            return reportMessage.join(' ');
        }
    }

    function manage(string) {
        let [cmd, product, quantity] = string.split(' ');
        let action = command[cmd];
        return action(product, quantity);
    }
    return manage;
}
let manager = solution();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
console.log(manager('restock carbohydrate 10'));//Success
console.log(manager('restock flavour 10'));//Success
console.log(manager('prepare apple 1'));//Success
console.log(manager('restock fat 10'));//Success
console.log(manager('prepare burger 1'));//Success
console.log(manager('report'));//protein=0 carbohydrate=4 fat=3 flavour=55
