const { lookupChar } = require('./charLookUp');
const { expect } = require('chai');

describe('lookUpChar', () => {
    it('returns undefined for incorect input params', () => {
        expect(lookupChar(1, 1)).to.be.undefined;
        expect(lookupChar(['abv'], 1)).to.be.undefined;
        expect(lookupChar('abv', 1.1)).to.be.undefined;
    })
    it('returns incorect index for indexes out of the bounds', () => {
        expect(lookupChar('a', 2)).to.equal("Incorrect index");
        expect(lookupChar('a', 1)).to.equal("Incorrect index");
        expect(lookupChar('a', -1)).to.equal("Incorrect index");
    })
    it('return correct char for correct inputs', () => {
        expect(lookupChar('abv', 1)).to.equal('b');
    })

})