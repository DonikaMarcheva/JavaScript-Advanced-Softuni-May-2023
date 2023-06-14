const {rentCar} = require('./rentCar');
const {expect} = require('chai');

describe('Tests...',()=>{
    describe('searchCar(shop, model)',()=>{
        it('throw an error in case of invalid parameters',()=>{
            expect(()=>{rentCar.searchCar(1,'a')}).to.throw('Invalid input!');
            expect(()=>{rentCar.searchCar('a','a')}).to.throw('Invalid input!');
            expect(()=>{rentCar.searchCar(null,'a')}).to.throw('Invalid input!');
            expect(()=>{rentCar.searchCar(undefined,'a')}).to.throw('Invalid input!');

            expect(()=>{rentCar.searchCar([],1)}).to.throw('Invalid input!');
            expect(()=>{rentCar.searchCar([],[])}).to.throw('Invalid input!');
            expect(()=>{rentCar.searchCar([],null)}).to.throw('Invalid input!');
            expect(()=>{rentCar.searchCar([],undefined)}).to.throw('Invalid input!');
        })
        it('return message if string value is included in the shop array',()=>{
            expect(rentCar.searchCar(['a','b','c'],'a')).to.equal('There is 1 car of model a in the catalog!')
            expect(rentCar.searchCar(['a','a','b','c'],'a')).to.equal('There is 2 car of model a in the catalog!')
        })
        it('throw an error if string value is not included in the shop array',()=>{
            expect(()=>{rentCar.searchCar(['a','b'],'c')}).to.throw('There are no such models in the catalog!');
            expect(()=>{rentCar.searchCar(['a','b'],'')}).to.throw('There are no such models in the catalog!');
            expect(()=>{rentCar.searchCar([],'a')}).to.throw('There are no such models in the catalog!');
        })
    })
    describe('calculatePriceOfCar(model, days)',()=>{
        it('throw an error in case of invalid parameters',()=>{
            expect(()=>{rentCar.calculatePriceOfCar(1,1)}).to.throw('Invalid input!');
            expect(()=>{rentCar.calculatePriceOfCar(null,1)}).to.throw('Invalid input!');
            expect(()=>{rentCar.calculatePriceOfCar(undefined,1)}).to.throw('Invalid input!');

            expect(()=>{rentCar.calculatePriceOfCar('a','a')}).to.throw('Invalid input!');
            expect(()=>{rentCar.calculatePriceOfCar('a',1.1)}).to.throw('Invalid input!');
            expect(()=>{rentCar.calculatePriceOfCar('a',null)}).to.throw('Invalid input!');
            expect(()=>{rentCar.calculatePriceOfCar('a',undefined)}).to.throw('Invalid input!');
        })
        it('throw an error if model value is not included in the cataloque',()=>{
            expect(()=>{rentCar.calculatePriceOfCar('a',1)}).to.throw('No such model in the catalog!');
            expect(()=>{rentCar.calculatePriceOfCar('a',0)}).to.throw('No such model in the catalog!');
            expect(()=>{rentCar.calculatePriceOfCar('',1)}).to.throw('No such model in the catalog!');
        })
        it('return message for the costs for valid parameters',()=>{
            expect(rentCar.calculatePriceOfCar('Volkswagen',1)).to.equal('You choose Volkswagen and it will cost $20!')
            expect(rentCar.calculatePriceOfCar('Volkswagen',2)).to.equal('You choose Volkswagen and it will cost $40!')
            expect(rentCar.calculatePriceOfCar('Audi',1)).to.equal('You choose Audi and it will cost $36!')
            expect(rentCar.calculatePriceOfCar('Toyota',1)).to.equal('You choose Toyota and it will cost $40!')
            expect(rentCar.calculatePriceOfCar('BMW',1)).to.equal('You choose BMW and it will cost $45!')
            expect(rentCar.calculatePriceOfCar('Mercedes',1)).to.equal('You choose Mercedes and it will cost $50!')
        })
    })
    describe('checkBudget(costPerDay, days, budget)',()=>{
        it('throw an error in case of invalid parameters',()=>{
            expect(()=>{rentCar.checkBudget('a',1,1)}).to.throw('Invalid input!');
            expect(()=>{rentCar.checkBudget(1.1,1,1)}).to.throw('Invalid input!');
            expect(()=>{rentCar.checkBudget(null,1,1)}).to.throw('Invalid input!');
            expect(()=>{rentCar.checkBudget(undefined,1,1)}).to.throw('Invalid input!');

            expect(()=>{rentCar.checkBudget(1,'a',1)}).to.throw('Invalid input!');
            expect(()=>{rentCar.checkBudget(1,1.1,1)}).to.throw('Invalid input!');
            expect(()=>{rentCar.checkBudget(1,null,1)}).to.throw('Invalid input!');
            expect(()=>{rentCar.checkBudget(1,undefined,1)}).to.throw('Invalid input!');

            expect(()=>{rentCar.checkBudget(1,1,'a')}).to.throw('Invalid input!');
            expect(()=>{rentCar.checkBudget(1,1,1.1)}).to.throw('Invalid input!');
            expect(()=>{rentCar.checkBudget(1,1,null)}).to.throw('Invalid input!');
            expect(()=>{rentCar.checkBudget(1,1,undefined)}).to.throw('Invalid input!');
        })
        it('return message if the budget is bigger or equal to cost',()=>{
            expect(rentCar.checkBudget(2,1,2)).to.equal('You rent a car!')
            expect(rentCar.checkBudget(2,1,3)).to.equal('You rent a car!')
        })
        it('return message if the budget is less than cost',()=>{
            expect(rentCar.checkBudget(1,2,1)).to.equal('You need a bigger budget!')
            expect(rentCar.checkBudget(3,1,1)).to.equal('You need a bigger budget!')
        })
        
    })
})