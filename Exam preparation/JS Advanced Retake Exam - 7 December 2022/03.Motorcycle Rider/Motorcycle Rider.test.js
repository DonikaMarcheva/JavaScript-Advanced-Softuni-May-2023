const {motorcycleRider} = require('./Motorcycle Rider');
const {expect} = require('chai');

describe('Tests...',()=>{
    describe('The object has necessary properties',()=>{
        it('should have licenseRestriction,motorcycleShowroom and otherSpendings properties',()=>{
            expect(motorcycleRider).to.haveOwnProperty('licenseRestriction');
            expect(motorcycleRider).to.haveOwnProperty('motorcycleShowroom');
            expect(motorcycleRider).to.haveOwnProperty('otherSpendings');
        })
    })
    describe('motorcycleRyder.licenseRestriction',()=>{
        it('return different result for different category',()=>{
            expect(motorcycleRider.licenseRestriction('AM')).to.equal("Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.");
            expect(motorcycleRider.licenseRestriction('A1')).to.equal("Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.");
            expect(motorcycleRider.licenseRestriction('A2')).to.equal("Motorcycles with maximum power of 35KW. and the minimum age is 18.");
            expect(motorcycleRider.licenseRestriction('A')).to.equal("No motorcycle restrictions, and the minimum age is 24.");
        })
        it('Throw an error for category different from AM,A1,A2,A',()=>{
            expect(()=>{motorcycleRider.licenseRestriction('B')}).to.throw("Invalid Information!");
            expect(()=>{motorcycleRider.licenseRestriction(null)}).to.throw("Invalid Information!");
            expect(()=>{motorcycleRider.licenseRestriction(undefined)}).to.throw("Invalid Information!");
        })
    })
    describe('motorcycleRyder.motorcycleShowroom',()=>{
        it('throw an error for non array arguments of engineVolume',()=>{
            expect(()=>{motorcycleRider.motorcycleShowroom(1,1)}).to.throw('Invalid Information!');
            expect(()=>{motorcycleRider.motorcycleShowroom('a',1)}).to.throw('Invalid Information!');
            expect(()=>{motorcycleRider.motorcycleShowroom(null,1)}).to.throw('Invalid Information!');
            expect(()=>{motorcycleRider.motorcycleShowroom(undefined,1)}).to.throw('Invalid Information!');
            expect(()=>{motorcycleRider.motorcycleShowroom([],1)}).to.throw('Invalid Information!');
        })
        it('throw an error for non array arguments of maximumEngineVolume',()=>{
            expect(()=>{motorcycleRider.motorcycleShowroom([100],'a')}).to.throw('Invalid Information!');
            expect(()=>{motorcycleRider.motorcycleShowroom([100],[])}).to.throw('Invalid Information!');
            expect(()=>{motorcycleRider.motorcycleShowroom([100],null)}).to.throw('Invalid Information!');
            expect(()=>{motorcycleRider.motorcycleShowroom([100],undefined)}).to.throw('Invalid Information!');
            expect(()=>{motorcycleRider.motorcycleShowroom([100],1)}).to.throw('Invalid Information!');
        })
        it('returns different right returns',()=>{
            expect(motorcycleRider.motorcycleShowroom([100,200],50)).to.equal('There are 0 available motorcycles matching your criteria!')
            expect(motorcycleRider.motorcycleShowroom([100,200],210)).to.equal('There are 2 available motorcycles matching your criteria!')
            expect(motorcycleRider.motorcycleShowroom([50],50)).to.equal('There are 1 available motorcycles matching your criteria!')
        })
    })
    describe('motorcycleRyder.otherSpendings',()=>{
        it('throw an error for non array arguments of equipment',()=>{
            expect(()=>{motorcycleRider.otherSpendings(1,[1],true)}).to.throw('Invalid Information!');
            expect(()=>{motorcycleRider.otherSpendings('a',[1],true)}).to.throw('Invalid Information!');
            expect(()=>{motorcycleRider.otherSpendings(null,[1],true)}).to.throw('Invalid Information!');
            expect(()=>{motorcycleRider.otherSpendings(undefined,[1],true)}).to.throw('Invalid Information!');
        })
        it('throw an error for non array arguments of consumables ',()=>{
            expect(()=>{motorcycleRider.otherSpendings([1],1,true)}).to.throw('Invalid Information!');
            expect(()=>{motorcycleRider.otherSpendings([1],'a',true)}).to.throw('Invalid Information!');
            expect(()=>{motorcycleRider.otherSpendings([1],null,true)}).to.throw('Invalid Information!');
            expect(()=>{motorcycleRider.otherSpendings([1],undefined,true)}).to.throw('Invalid Information!');
        })
        it('throw an error for non array arguments of discount',()=>{
            expect(()=>{motorcycleRider.otherSpendings([1],[1],1)}).to.throw('Invalid Information!');
            expect(()=>{motorcycleRider.otherSpendings([1],[1],'a')}).to.throw('Invalid Information!');
            expect(()=>{motorcycleRider.otherSpendings([1],[1],null)}).to.throw('Invalid Information!');
            expect(()=>{motorcycleRider.otherSpendings([1],[1],undefined)}).to.throw('Invalid Information!');
        })
        it('returns different results according to virable values without discount',()=>{
            expect(motorcycleRider.otherSpendings(['helmet'],['engine oil'],false)).to.equal('You spend $270.00 for equipment and consumables!')
            expect(motorcycleRider.otherSpendings(['jacked'],['oil filter'],false)).to.equal('You spend $330.00 for equipment and consumables!')
            expect(motorcycleRider.otherSpendings(['helmet'],['oil filter'],false)).to.equal('You spend $230.00 for equipment and consumables!')
            expect(motorcycleRider.otherSpendings(['jacked'],['engine oil'],false)).to.equal('You spend $370.00 for equipment and consumables!')
        })
        it('returns different results according to virable values with discount',()=>{
            expect(motorcycleRider.otherSpendings(['helmet'],['engine oil'],true)).to.equal('You spend $243.00 for equipment and consumables with 10% discount!')
            expect(motorcycleRider.otherSpendings(['jacked'],['oil filter'],true)).to.equal('You spend $297.00 for equipment and consumables with 10% discount!')
            expect(motorcycleRider.otherSpendings(['helmet'],['oil filter'],true)).to.equal('You spend $207.00 for equipment and consumables with 10% discount!')
            expect(motorcycleRider.otherSpendings(['jacked'],['engine oil'],true)).to.equal('You spend $333.00 for equipment and consumables with 10% discount!')
        })
    })
})