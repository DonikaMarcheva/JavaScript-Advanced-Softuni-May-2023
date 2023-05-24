const { isOddOrEven } = require('./evenOrOdd');

const {expect} = require('chai');

describe('Returns odd or even type for number input',()=>{

    it('return undefined for non-string input',()=>{
        expect(isOddOrEven(1)).to.be.undefined;
    })

    it('return even for even length of the input',()=>{
        expect(isOddOrEven('aa')).to.equal('even');
    })

    it('return odd for even length of the input',()=>{
        expect(isOddOrEven('a')).to.equal('odd');
    })
})