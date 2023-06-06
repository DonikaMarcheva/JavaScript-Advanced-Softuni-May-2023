const weddingDay = require('./weddingDay');
const { expect } = require('chai');

describe('Tests...', () => {
    describe('It should have 3 properties-  pickVenue(), otherSpendings() and tableDistribution()', () => {
        it('pickVenue() verification', () => {
            expect(weddingDay).to.haveOwnProperty('pickVenue');
        })
        it('otherSpendings() verification', () => {
            expect(weddingDay).to.haveOwnProperty('otherSpendings');
        })
        it('tableDistribution() verification', () => {
            expect(weddingDay).to.haveOwnProperty('tableDistribution');
        })
    })

    describe('pickVenue() to throw', () => {
        it('throw Error with string for capacity', () => {
            expect(function () { weddingDay.pickVenue('a', 1, 'a') }).to.throw('Invalid Information!')
        })
        it('throw Error with null for capacity', () => {
            expect(function () { weddingDay.pickVenue(null, 1, 'a') }).to.throw('Invalid Information!')
        })
        it('throw Error with undefined for capacity', () => {
            expect(function () { weddingDay.pickVenue(undefined, 1, 'a') }).to.throw('Invalid Information!')
        })
        it('throw Error with string for pricePerGuest', () => {
            expect(function () { weddingDay.pickVenue(1, 'a', 'a') }).to.throw('Invalid Information!')
        })
        it('throw Error with null for pricePerGuest', () => {
            expect(function () { weddingDay.pickVenue(1, null, 'a') }).to.throw('Invalid Information!')
        })
        it('throw Error with undefined for pricePerGuest', () => {
            expect(function () { weddingDay.pickVenue(1, undefined, 'a') }).to.throw('Invalid Information!')
        })
        it('throw Error with a number for location', () => {
            expect(function () { weddingDay.pickVenue(1, 1, 1) }).to.throw('Invalid Information!')
        })
        it('throw Error with null for location', () => {
            expect(function () { weddingDay.pickVenue(1, 1, null) }).to.throw('Invalid Information!')
        })
        it('throw Error with undefined for location', () => {
            expect(function () { weddingDay.pickVenue(1, 1, undefined) }).to.throw('Invalid Information!')
        })
        it('throw Error with an empty string for location', () => {
            expect(function () { weddingDay.pickVenue(1, 1, '') }).to.throw('Invalid Information!')
        })
    })
    describe('Throw Error while testing pickVenue() for location different from Varna', () => {
        it('throw specific Error', () => {
            expect(function () { weddingDay.pickVenue(1, 1, 'Sofia') }).to.throw('The location of this venue is not in the correct area!')
        })
    })
    describe('pickVenue() with right input parameters', () => {
        it('return output for capacity>=150 && pricePerGuest<=120', () => {
            let message = 'This venue meets the requirements, with capacity of 200 guests and 100$ cover.'
            expect(weddingDay.pickVenue(200, 100, 'Varna')).to.equal(message);
        })
        it('return output for capacity>=150 && pricePerGuest<=120', () => {
            let message = 'This venue meets the requirements, with capacity of 150 guests and 120$ cover.'
            expect(weddingDay.pickVenue(150, 120, 'Varna')).to.equal(message);
        })
        it('return output for capacity<150 && pricePerGuest>120', () => {
            let message = 'This venue does not meet your requirements!'
            expect(weddingDay.pickVenue(100, 200, 'Varna')).to.equal(message);
        })
    })
    describe('otherSpendings() to throw', () => {
        it('throw Error with string for weddingDecoration', () => {
            expect(function () { weddingDay.otherSpendings('a', [], true) }).to.throw('Invalid Information!')
        })
        it('throw Error with null for weddingDecoration', () => {
            expect(function () { weddingDay.otherSpendings(null, [], true) }).to.throw('Invalid Information!')
        })
        it('throw Error with undefined for weddingDecoration', () => {
            expect(function () { weddingDay.otherSpendings(undefined, [], true) }).to.throw('Invalid Information!')
        })
        it('throw Error with string for photography', () => {
            expect(function () { weddingDay.otherSpendings([], 'a', true) }).to.throw('Invalid Information!')
        })
        it('throw Error with null for photography', () => {
            expect(function () { weddingDay.otherSpendings([], null, true) }).to.throw('Invalid Information!')
        })
        it('throw Error with undefined for photography', () => {
            expect(function () { weddingDay.otherSpendings([], undefined, true) }).to.throw('Invalid Information!')
        })
        it('throw Error with a number for discount', () => {
            expect(function () { weddingDay.otherSpendings([], [], 1) }).to.throw('Invalid Information!')
        })
        it('throw Error with null for discount', () => {
            expect(function () { weddingDay.otherSpendings([], [], null) }).to.throw('Invalid Information!')
        })
        it('throw Error with undefined for discount', () => {
            expect(function () { weddingDay.otherSpendings([], [], undefined) }).to.throw('Invalid Information!')
        })
    })
    describe('otherSpendings() with right input parameters', () => {
        it('return message with false for discount', () => {
            expect(weddingDay.otherSpendings(['flowers'], ['pictures'], false)).to.equal('You spend 1200$ for wedding decoration and photography!');
            expect(weddingDay.otherSpendings(['flowers'], ['video'], false)).to.equal('You spend 1800$ for wedding decoration and photography!');
            expect(weddingDay.otherSpendings(['Fabric drapes and curtains'], ['pictures'], false)).to.equal('You spend 1100$ for wedding decoration and photography!');
            expect(weddingDay.otherSpendings(['Fabric drapes and curtains'], ['video'], false)).to.equal('You spend 1700$ for wedding decoration and photography!');
        })
        it('return message with true for discount', () => {
            expect(weddingDay.otherSpendings(['flowers'], ['pictures'], true)).to.equal('You spend 1020$ for wedding decoration and photography with 15% discount!');
            expect(weddingDay.otherSpendings(['flowers'], ['video'], true)).to.equal('You spend 1530$ for wedding decoration and photography with 15% discount!');
            expect(weddingDay.otherSpendings(['Fabric drapes and curtains'], ['pictures'], true)).to.equal('You spend 935$ for wedding decoration and photography with 15% discount!');
            expect(weddingDay.otherSpendings(['Fabric drapes and curtains'], ['video'], true)).to.equal('You spend 1445$ for wedding decoration and photography with 15% discount!');
        })
    })
    describe('tableDistribution() to throw', () => {
        it('throw with wrong input for guest', () => {
            expect(function () { weddingDay.tableDistribution('a', 1) }).to.throw('Invalid Information!');
            expect(function () { weddingDay.tableDistribution(null, 1) }).to.throw('Invalid Information!');
            expect(function () { weddingDay.tableDistribution(undefined, 1) }).to.throw('Invalid Information!');
            expect(function () { weddingDay.tableDistribution(0, 1) }).to.throw('Invalid Information!');
            expect(function () { weddingDay.tableDistribution(-1, 1) }).to.throw('Invalid Information!');

            expect(function () { weddingDay.tableDistribution(1, 'a') }).to.throw('Invalid Information!')
            expect(function () { weddingDay.tableDistribution(1, null) }).to.throw('Invalid Information!')
            expect(function () { weddingDay.tableDistribution(1, undefined) }).to.throw('Invalid Information!')
            expect(function () { weddingDay.tableDistribution(1, 0) }).to.throw('Invalid Information!')
            expect(function () { weddingDay.tableDistribution(1, -1) }).to.throw('Invalid Information!')
        })
    })

    describe('tableDistribution() with right input', () => {
        it('return message with <6 people on table', () => {
            expect(weddingDay.tableDistribution(1, 1)).to.equal('There is only 1 people on every table, you can join some tables.')
        })
        it('return message with >=6 people on table', () => {
            expect(weddingDay.tableDistribution(6, 1)).to.equal('You have 1 tables with 6 guests on table.')
            expect(weddingDay.tableDistribution(7, 1)).to.equal('You have 1 tables with 7 guests on table.')
        })
    })
})