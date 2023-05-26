const { createCalculator } = require('./07. addSubtract');

const { expect } = require('chai');

describe('calculatorFunctionality',()=>{

    it('return an object as a result',()=>{
        expect(typeof createCalculator()).to.be.equal('object')
    })

    it ('should have the provided methods',()=>{
        expect(createCalculator()).to.haveOwnProperty('add')
        expect(createCalculator()).to.haveOwnProperty('subtract')
        expect(createCalculator()).to.haveOwnProperty('get')
    }
    )

    it('should add a number correctry',()=>{
        let calculator=createCalculator();
        calculator.add(1);
        expect(calculator.get()).to.be.equal(1)
    })

    it('should subtrack a number correctry',()=>{
        let calculator=createCalculator();
        calculator.add(1);
        calculator.subtract(1);
        expect(calculator.get()).to.be.equal(0)
    })

    it('Should return NaN if passed a non-number',()=>{
        let calculator=createCalculator();
        calculator.add(1);
        calculator.subtract('a');
        expect(calculator.get()).to.be.NaN
    })
})