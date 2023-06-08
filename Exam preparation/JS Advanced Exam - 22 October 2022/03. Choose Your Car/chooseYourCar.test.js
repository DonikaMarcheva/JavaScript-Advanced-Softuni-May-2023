const {chooseYourCar}=require('./chooseYourCar');
const {expect}=require('chai');

describe('Tests...',()=>{
describe('chooseYourCar object should have the neccessary properties',()=>{
    it('should have choosingType property',()=>{
        expect(chooseYourCar).to.haveOwnProperty('choosingType');
    })
    it('should have brandName property',()=>{
        expect(chooseYourCar).to.haveOwnProperty('brandName');
    })
    it('should have carFuelConsumption property',()=>{
        expect(chooseYourCar).to.haveOwnProperty('carFuelConsumption');
    })
})
describe('choosingType (type, color, year) property',()=>{
    it('throw an error if the year is less than 1900 and the year is more than 2022',()=>{
        expect(()=>{chooseYourCar.choosingType('Sedan','blue',1800)}).to.throw('Invalid Year!');
        expect(()=>{chooseYourCar.choosingType('Sedan','blue',2030)}).to.throw('Invalid Year!');
    })
    it('throw an error if type is different from "Sedan"',()=>{
        expect(()=>{chooseYourCar.choosingType('Hatchback','blue',1900)}).to.throw('This type of car is not what you are looking for.');
    })
    it('return message if year is greater or equal to 2010',()=>{
        expect(chooseYourCar.choosingType('Sedan','blue',2010)).to.equal('This blue Sedan meets the requirements, that you have.');
        expect(chooseYourCar.choosingType('Sedan','blue',2011)).to.equal('This blue Sedan meets the requirements, that you have.');
    })
    it('return message if year is less than 2010',()=>{
        expect(chooseYourCar.choosingType('Sedan','blue',2009)).to.equal('This Sedan is too old for you, especially with that blue color.');
        expect(chooseYourCar.choosingType('Sedan','blue',1901)).to.equal('This Sedan is too old for you, especially with that blue color.');
})
})
describe('brandName (brands, brandIndex)',()=>{
    it('throw an error for non-array brands virable',()=>{
        expect(()=>{chooseYourCar.brandName(1,1)}).to.throw('Invalid Information!');
        expect(()=>{chooseYourCar.brandName('a',1)}).to.throw('Invalid Information!');
        expect(()=>{chooseYourCar.brandName(null,1)}).to.throw('Invalid Information!');
        expect(()=>{chooseYourCar.brandName(undefined,1)}).to.throw('Invalid Information!');
    })
    it('throw an error for non-array brands virable',()=>{
        expect(()=>{chooseYourCar.brandName(['a'],'a')}).to.throw('Invalid Information!');
        expect(()=>{chooseYourCar.brandName(['a'],1.1)}).to.throw('Invalid Information!');
        expect(()=>{chooseYourCar.brandName(['a'],-1)}).to.throw('Invalid Information!');
        expect(()=>{chooseYourCar.brandName(['a'],1)}).to.throw('Invalid Information!');
    })
})
describe('return cars message',()=>{
    it('return message for changeed brands array',()=>{
        expect(chooseYourCar.brandName(['a','b','c'],1)).to.equal('a, c');
    })
})
describe('CarFuelConsumption (distanceInKilometers, consumptedFuelInLitres)',()=>{
    it('throw na error for not a number virables',()=>{
        expect(()=>{chooseYourCar.carFuelConsumption('a',1)}).to.throw('Invalid Information!');
        expect(()=>{chooseYourCar.carFuelConsumption(1,'a')}).to.throw('Invalid Information!');
        expect(()=>{chooseYourCar.carFuelConsumption('a','a')}).to.throw('Invalid Information!');
    })
    it('throw na error for negative number or zero value virables',()=>{
        expect(()=>{chooseYourCar.carFuelConsumption(0,1)}).to.throw('Invalid Information!');
        expect(()=>{chooseYourCar.carFuelConsumption(1,0)}).to.throw('Invalid Information!');
        expect(()=>{chooseYourCar.carFuelConsumption(1,-1)}).to.throw('Invalid Information!');
        expect(()=>{chooseYourCar.carFuelConsumption(-1,1)}).to.throw('Invalid Information!');
    })
    it('return message if ((consumptedFuelInLiters / distanceInKilometers)* 100).toFixed(2)<=7',()=>{
        expect(chooseYourCar.carFuelConsumption(1000,70)).to.equal('The car is efficient enough, it burns 7.00 liters/100 km.')
        expect(chooseYourCar.carFuelConsumption(1000,50)).to.equal('The car is efficient enough, it burns 5.00 liters/100 km.')
    })
    it('returns message if ((consumptedFuelInLiters / distanceInKilometers)* 100).toFixed(2)>7',()=>{
        expect(chooseYourCar.carFuelConsumption(1000,100)).to.equal('The car burns too much fuel - 10.00 liters!')
    })
})
})