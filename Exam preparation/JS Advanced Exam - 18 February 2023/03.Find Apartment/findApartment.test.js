const findNewApartment = require('./findApartment');
const { expect } = require('chai');

describe('Tests...', () => {
    describe('check for all neccessary properties', () => {
        it('should have properties isGoodLocation, isLargeEnough and isItAffordable', () => {
            expect(findNewApartment).to.haveOwnProperty('isGoodLocation');
            expect(findNewApartment).to.haveOwnProperty('isLargeEnough');
            expect(findNewApartment).to.haveOwnProperty('isItAffordable');
        })
    })
    describe('check for right input arguments ot the properties', () => {
        it('should throw for wrong inputs in .isGoodLocation', () => {
            expect(() => { findNewApartment.isGoodLocation(1, true) }).to.throw('Invalid input!');
            expect(() => { findNewApartment.isGoodLocation(null, true) }).to.throw('Invalid input!');
            expect(() => { findNewApartment.isGoodLocation(undefined, true) }).to.throw('Invalid input!');
            expect(() => { findNewApartment.isGoodLocation('a', 'a') }).to.throw('Invalid input!');
            expect(() => { findNewApartment.isGoodLocation('a', 1) }).to.throw('Invalid input!');
            expect(() => { findNewApartment.isGoodLocation('a', null) }).to.throw('Invalid input!');
            expect(() => { findNewApartment.isGoodLocation('a', undefined) }).to.throw('Invalid input!');
        })
        it('should throw for wrong inputs in .isLargeEnough ', () => {
            expect(() => { findNewApartment.isLargeEnough(1, 1) }).to.throw('Invalid input!');
            expect(() => { findNewApartment.isLargeEnough([], 1) }).to.throw('Invalid input!');
            expect(() => { findNewApartment.isLargeEnough('a', 1) }).to.throw('Invalid input!');
            expect(() => { findNewApartment.isLargeEnough(null, 1) }).to.throw('Invalid input!');
            expect(() => { findNewApartment.isLargeEnough(undefined, 1) }).to.throw('Invalid input!');
            expect(() => { findNewApartment.isLargeEnough([1], 'a') }).to.throw('Invalid input!');
            expect(() => { findNewApartment.isLargeEnough([1], null) }).to.throw('Invalid input!');
            expect(() => { findNewApartment.isLargeEnough([1], undefined) }).to.throw('Invalid input!');
        })
        it('should throw for wrong inputs in .isItAffordable', () => {
            expect(() => { findNewApartment.isItAffordable('a', 1) }).to.throw('Invalid input!');
            expect(() => { findNewApartment.isItAffordable(null, 1) }).to.throw('Invalid input!');
            expect(() => { findNewApartment.isItAffordable(undefined, 1) }).to.throw('Invalid input!');
            expect(() => { findNewApartment.isItAffordable(1, 'a') }).to.throw('Invalid input!');
            expect(() => { findNewApartment.isItAffordable(1, null) }).to.throw('Invalid input!');
            expect(() => { findNewApartment.isItAffordable(1, undefined) }).to.throw('Invalid input!');
        })
    })
    describe('isGoodLocation', () => {
        it('return message for city different from Sofia, Plovdiv and Varna', () => {
            expect(findNewApartment.isGoodLocation('a', true)).to.equal('This location is not suitable for you.')
            expect(findNewApartment.isGoodLocation('', true)).to.equal('This location is not suitable for you.')
        })
        it('return message for false value of nearPublicTransportation', () => {
            expect(findNewApartment.isGoodLocation('Varna', false)).to.equal('There is no public transport in area.')
            expect(findNewApartment.isGoodLocation('Plovdiv', false)).to.equal('There is no public transport in area.')
            expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal('There is no public transport in area.')
        })
        it('return message for false value of nearPublicTransportation', () => {
            expect(findNewApartment.isGoodLocation('Varna', true)).to.equal('You can go on home tour!')
            expect(findNewApartment.isGoodLocation('Plovdiv', true)).to.equal('You can go on home tour!')
            expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal('You can go on home tour!')
        })
    })
    describe('isLargeEnough', () => {
        it('return result array if some of array elements is bigger or equal to second input parameter', () => {
            expect(findNewApartment.isLargeEnough([20, 30, 40], 10)).to.equal('20, 30, 40');
            expect(findNewApartment.isLargeEnough([10], 10)).to.equal('10');
            expect(findNewApartment.isLargeEnough([1], 10)).to.equal('');
        })
    })
    describe('isItAffordable', () => {
        it('return message if price<=budget', () => {
            expect(findNewApartment.isItAffordable(10, 10)).to.equal('You can afford this home!');
            expect(findNewApartment.isItAffordable(10, 20)).to.equal('You can afford this home!');
        })
        it('return another message if price>budget', () => {
            expect(findNewApartment.isItAffordable(20, 10)).to.equal('You don\'t have enough money for this house!');
        })
    })
})