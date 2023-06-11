const { carService } = require('./03.carService');
const { expect } = require('chai');

describe('Tests', () => {
    describe('isItExpensive (issue)', () => {
        it('return message for the value of the parameter issue is equal to "Engine" or "Transmission"', () => {
            expect(carService.isItExpensive('Engine')).to.equal('The issue with the car is more severe and it will cost more money')
            expect(carService.isItExpensive('Transmission')).to.equal('The issue with the car is more severe and it will cost more money')
        })
        it('return message for the value of the parameter issue is not equal to "Engine" or "Transmission"', () => {
            expect(carService.isItExpensive('a')).to.equal('The overall price will be a bit cheaper')
        })
    })
    describe('discount (numberOfParts, totalPrice)', () => {
        it('throw an error if the numberOfParts and totalPrice are not a number', () => {
            expect(() => { carService.discount('a', 1) }).to.throw('Invalid input');
            expect(() => { carService.discount(['a'], 1) }).to.throw('Invalid input');
            expect(() => { carService.discount(null, 1) }).to.throw('Invalid input');
            expect(() => { carService.discount(undefined, 1) }).to.throw('Invalid input');

            expect(() => { carService.discount(1, 'a') }).to.throw('Invalid input');
            expect(() => { carService.discount(1, ['a']) }).to.throw('Invalid input');
            expect(() => { carService.discount(1, null) }).to.throw('Invalid input');
            expect(() => { carService.discount(1, undefined) }).to.throw('Invalid input');
        })

        it('return message for numberOfParts smaller or equal to 2,', () => {
            expect(carService.discount(2, 1)).to.equal('You cannot apply a discount');
            expect(carService.discount(1, 1)).to.equal('You cannot apply a discount');
        })
        it('return message for numberOfParts higher than 2', () => {
            expect(carService.discount(3, 10)).to.equal('Discount applied! You saved 1.5$')
            expect(carService.discount(7, 10)).to.equal('Discount applied! You saved 1.5$')
            expect(carService.discount(8, 10)).to.equal('Discount applied! You saved 3$')
        })
    })
    describe('partsToBuy (partsCatalog, neededParts)', () => {
        it('trow an error if partsCatalog or neededParts parameters are not an arrays', () => {
            expect(() => { carService.partsToBuy([], 'a') }).to.throw('Invalid input');
            expect(() => { carService.partsToBuy([], 1) }).to.throw('Invalid input');
            expect(() => { carService.partsToBuy([], null) }).to.throw('Invalid input');
            expect(() => { carService.partsToBuy([], undefined) }).to.throw('Invalid input');

            expect(() => { carService.partsToBuy('a', []) }).to.throw('Invalid input');
            expect(() => { carService.partsToBuy(1, []) }).to.throw('Invalid input');
            expect(() => { carService.partsToBuy(null, []) }).to.throw('Invalid input');
            expect(() => { carService.partsToBuy(undefined, []) }).to.throw('Invalid input');
        })
        it('return 0 for an empty partsCatalog', () => {
            expect(carService.partsToBuy([], ['a'])).to.equal(0);
        })
        it('return total price for correct inputs', () => {
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve"]))
                .to.equal(145)
        })
    })
})