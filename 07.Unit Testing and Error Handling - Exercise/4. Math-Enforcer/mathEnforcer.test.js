const { mathEnforcer } = require('./mathEnforcer');
const { expect } = require('chai');

describe('Returns results of object methods', () => {
    describe('check for properties', () => {
        it('check if the object has the necessary properties', () => {
            expect(mathEnforcer).to.haveOwnProperty('addFive');
            expect(mathEnforcer).to.haveOwnProperty('subtractTen');
            expect(mathEnforcer).to.haveOwnProperty('sum');
        })
    })

    describe('addFive', () => {
        it('return undefined for non-number param', () => {
            expect(mathEnforcer.addFive('a')).to.be.undefined;
            expect(mathEnforcer.addFive(null)).to.be.undefined;
            expect(mathEnforcer.addFive(undefined)).to.be.undefined;
        })
        it('return correct results with a number as a param', () => {
            expect(mathEnforcer.addFive(1)).to.equal(6);
            expect(mathEnforcer.addFive(-1)).to.equal(4);
            expect(mathEnforcer.addFive(1.1)).to.be.closeTo(6.1, 0.01);
        })
    })
    describe('subtractTen', () => {
        it('return undefined for non-number param', () => {
            expect(mathEnforcer.subtractTen('a')).to.be.undefined;
            expect(mathEnforcer.subtractTen(null)).to.be.undefined;
            expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
        })
        it('return correct results with a number as a param', () => {
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
            expect(mathEnforcer.subtractTen(-1)).to.equal(-11);
            expect(mathEnforcer.subtractTen(10.1)).to.be.closeTo(0.1, 0.01);
        })
    })
    describe('sum', () => {
        it('return undefined for non-number params', () => {
            expect(mathEnforcer.sum('a', 1)).to.be.undefined;
            expect(mathEnforcer.sum(1, 'a')).to.be.undefined;
            expect(mathEnforcer.sum(null, 1)).to.be.undefined;
            expect(mathEnforcer.sum(1, null)).to.be.undefined;
            expect(mathEnforcer.sum(1, undefined)).to.be.undefined;
            expect(mathEnforcer.sum(undefined, 1)).to.be.undefined;
        })
        it('return correct results with a number as a param', () => {
            expect(mathEnforcer.sum(1, 1)).to.equal(2);
            expect(mathEnforcer.sum(-1, -1)).to.equal(-2);
            expect(mathEnforcer.sum(-1, 1)).to.equal(0);
            expect(mathEnforcer.sum(1, -1)).to.equal(0);
            expect(mathEnforcer.sum(1.1, 1)).to.equal(2.1);
            expect(mathEnforcer.sum(1, 1.1)).to.equal(2.1);
        })
    })
})