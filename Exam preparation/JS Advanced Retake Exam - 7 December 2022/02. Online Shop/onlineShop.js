class OnlineShop{
    constructor(warehouseSpace){
        this.warehouseSpace=warehouseSpace;
        this.products=[];
        this.sales=[];
    }
    loadingStore(product, quantity, spaceRequired){
        if(this.warehouseSpace<spaceRequired){
            throw new Error('Not enough space in the warehouse.');
        }else{
            this.products.push({product,quantity});
            this.warehouseSpace-=spaceRequired;
            return `The ${product} has been successfully delivered in the warehouse.`
        }
    }
    quantityCheck(product, minimalQuantity){
        let searchedProduct=this.products.filter(x=>x['product']===product)[0];
        if(!searchedProduct){
            throw new Error(`There is no ${product} in the warehouse.`);
        }else{
            if(minimalQuantity<=0){
                throw new Error('The quantity cannot be zero or negative.');
            }
            if(searchedProduct['quantity']>=minimalQuantity){
                return `You have enough from product ${product}.`
            }else{
                let difference=minimalQuantity-searchedProduct['quantity'];
                searchedProduct['quantity']=minimalQuantity;
                return `You added ${difference} more from the ${product} products.`
            }
        }
    }
    sellProduct(product){
        let searchedProduct=this.products.filter(x=>x['product']===product)[0];
        if(!searchedProduct){
            throw new Error(`There is no ${product} in the warehouse.`);
        }else{
            searchedProduct['quantity']--;
            this.sales.push({product,quantity:1});
            return `The ${product} has been successfully sold.`
        }
    }
    revision(){
        if(this.sales.length===0){
            throw new Error (`There are no sales today!`);
        }else{
            let res=`You sold ${this.sales.length} products today!\nProducts in the warehouse:\n`
            for (const product of this.products) {
                res+=`${product['product']}-${product['quantity']} more left\n`;
            }
            return res.trim();
        }
    }
}
// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));
// console.log(myOnlineShop.loadingStore('TV', 40, 500));
// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));

// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));
// console.log(myOnlineShop.quantityCheck('TV', 40,));
// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));

// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));

// console.log(myOnlineShop.sellProduct('headphones'));
// console.log(myOnlineShop.sellProduct('laptop'));
// console.log(myOnlineShop.sellProduct('keyboard'));
const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());




