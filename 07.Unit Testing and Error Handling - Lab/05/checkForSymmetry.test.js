const { expect } = require("chai");
const { isSymmetric } = require('./checkForSymmetry');

describe('Symetry checher', () => {
    it('works with symetric numeric array', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true
    })

    it('returns false with non-symetric numeric array', () => {
        expect(isSymmetric([1, 2, 2, ])).to.be.false
    })

    it('return false for non-array', () => {
        expect(isSymmetric(2)).to.be.false
    })

    it('works with symetric odd-length array', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true
    })

    it('works with symetric string array', () => {
        expect(isSymmetric(['a','b','b','a'])).to.be.true
    })

    it('return false for type missmatched elements', () => {
        expect(isSymmetric([1, 2, '2', 1])).to.be.false
        })

})