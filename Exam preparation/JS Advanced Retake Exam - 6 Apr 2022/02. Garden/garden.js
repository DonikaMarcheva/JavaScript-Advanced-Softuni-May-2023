class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }
    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error('Not enough space in the garden.');
        } else {
            this.plants.push({ plantName, spaceRequired, 'ripe': false, 'quantity': 0 });
            this.spaceAvailable -= spaceRequired;
            return `The ${plantName} has been successfully planted in the garden.`
        }
    }
    ripenPlant(plantName, quantity) {
        if (quantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`);
        }
        let searchedPlant = this.plants.find(x => x['plantName'] === plantName);
        if (!searchedPlant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        else {
            if (searchedPlant.ripe === true) {
                throw new Error(`The ${plantName} is already ripe.`);
            } else {
                searchedPlant.ripe = true;
                searchedPlant['quantity'] += quantity;
                if (quantity === 1) {
                    return `${quantity} ${plantName} has successfully ripened.`
                } else {
                    return `${quantity} ${plantName}s have successfully ripened.`
                }
            }
        }
    }
    harvestPlant(plantName) {
        let searchedPlant = this.plants.find(x => x['plantName'] === plantName);
        if (!searchedPlant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        } else {
            if (searchedPlant.ripe === false) {
                throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
            } else {
                let storageSpaceQuantity = searchedPlant.spaceRequired;
                let storageQuantity = searchedPlant.quantity;
                this.plants = this.plants.filter(x => x['plantName'] != plantName);
                this.storage.push({ plantName, quantity: storageQuantity });
                this.spaceAvailable += storageSpaceQuantity;
                return `The ${plantName} has been successfully harvested.`
            }
        }
    }
    generateReport() {
        let res = `The garden has ${this.spaceAvailable} free space left.\n`;
        let sortedPlants = this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName))
            .map(x => x.plantName);
        res += `Plants in the garden: ${sortedPlants.join(', ')}\n`;
        if (this.storage.length === 0) {
            res += `Plants in storage: The storage is empty.\n`;
        } else {
            let storageplantsNames = this.storage.map(x => `${x.plantName} (${x.quantity})`);
            res += `Plants in storage: ${storageplantsNames.join(', ')}`;
        }
        return res.trim();
    }
}
// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('olive', 50));
// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('orange', 4));
// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('olive', 30));
// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('cucumber', -5));
// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('olive'));
// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('raspberry'));
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());





