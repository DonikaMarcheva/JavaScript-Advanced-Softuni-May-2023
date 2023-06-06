class WineSelection{
    constructor(space){
        this.space=space;
        this.wines=[];
        this.bill=0;
    }
    reserveABottle (wineName, wineType, price){
        if(this.space<=0){
            throw new Error('Not enough space in the cellar.')
        }else{
            this.wines.push({wineName,wineType,price,paid:false});
            this.space--;
            return `You reserved a bottle of ${wineName} ${wineType} wine.`;
        }
    }
    payWineBottle( wineName, price){
        let searchedWine=this.wines.filter(x=>x['wineName']===wineName)[0];
if(searchedWine===undefined){
    throw new Error(`${wineName} is not in the cellar.`)
}else{
    if(searchedWine.paid===true){
        throw new Error (`${wineName} has already been paid.`)
    }else{
        searchedWine.paid=true;
        this.bill+=price;
        return `You bought a ${wineName} for a ${price}$.`
    }
}
    }
    openBottle(wineName){
        let searchedWine=this.wines.filter(x=>x['wineName']===wineName)[0];
        if(searchedWine===undefined){
            throw new Error("The wine, you're looking for, is not found.");
        }else{
            if(searchedWine.paid===false){
                throw new Error (`${wineName} need to be paid before open the bottle.`)
            }else{
                this.wines=this.wines.filter(x=>x['wineName']!==wineName);
                return `You drank a bottle of ${wineName}.`
            }
        }
    }
    cellarRevision(wineType){
        if(wineType===undefined){
            let res= `You have space for ${this.space} bottles more.\nYou paid ${this.bill}$ for the wine.\n`;
            let winesInfo='';
            this.wines.sort((a,b)=>a['wineName'].localeCompare(b['wineName']));
            for (const wine of this.wines) {
                let isPaid='';
                if(wine['paid']===true){
                    isPaid='Has Paid';
                }else{
                    isPaid='Not Paid';
                }
                res+=`${wine['wineName']} > ${wine['wineType']} - ${isPaid}.\n`
            }
            return res.trim();
        }else{
            let searchedWine=this.wines.filter(x=>x['wineType']===wineType)[0];
            if(searchedWine){
                let isPaid='';
                if(searchedWine.paid===true){
                    isPaid='Has Paid'}else{
                        isPaid='Not Paid';
                    }
                return `${searchedWine['wineName']} > ${searchedWine['wineType']} - ${isPaid}.`
        }else{
            throw new Error (`There is no ${wineType} in the cellar.`)
        }
    }
}
}
// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
// console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));
// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White',50);
// console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 120));
// console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));
// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// selection.payWineBottle('Sauvignon Blanc Marlborough', 50);
// console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
// console.log(selection.openBottle('Cabernet Sauvignon Napa Valley'));
// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144)); 
// console.log(selection.cellarRevision('Rose'));
const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());


