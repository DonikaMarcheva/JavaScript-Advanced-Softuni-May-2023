const {PaymentPackage} = require('./12.paymentPackage');
const {expect} = require('chai');

describe('PaymentPachage class',()=>{

    describe ('Constructor',()=>{
        let paymentObj=new PaymentPackage('a',1);
        it('Should return "a" for name argument',()=>{
            expect(paymentObj.name).to.equal('a')
        })
        it('Should return 1 for "value" argument',()=>{
            expect(paymentObj.value).to.equal(1)
        })
        it('Should return 20 for VAT argument',()=>{
            expect(paymentObj.VAT).to.equal(20)
        })
        it('Should return "true" for active argument',()=>{
            expect(paymentObj.active).to.equal(true)
        })
    })

    describe('Wrong input data',()=>{
        describe('wrong name argument',()=>{
            it('Should return "Error masage" for non-string name value',()=>{
                expect(function(){new PaymentPackage(1,1)}).to.throw('Name must be a non-empty string')
                expect(function(){new PaymentPackage(null,1)}).to.throw('Name must be a non-empty string')
                expect(function(){new PaymentPackage(undefined,1)}).to.throw('Name must be a non-empty string')
                expect(function(){new PaymentPackage('',1)}).to.throw('Name must be a non-empty string')
                expect(function(){new PaymentPackage('a',1)}).not.to.throw;
                let paymentObj=new PaymentPackage('b',1);
                expect(function(){paymentObj.name}).not.to.throw;                 
            })
        })
        describe('wrong value arguments',()=>{
            it('Should return "Error masage" for non- numeric argument for value',()=>{
                expect(function(){new PaymentPackage('a','1')}).to.throw('Value must be a non-negative number')
                expect(function(){new PaymentPackage('a',null)}).to.throw('Value must be a non-negative number')
                expect(function(){new PaymentPackage('a',undefined)}).to.throw('Value must be a non-negative number')
                expect(function(){new PaymentPackage('a',-1)}).to.throw('Value must be a non-negative number')
                expect(function(){new PaymentPackage('a',1)}).not.to.throw;
                let paymentObj=new PaymentPackage('a',0);
                expect(function(){paymentObj.value}).not.to.throw;  
            })
        })
        describe('wrong VAT argument',()=>{
            let paymentObj=new PaymentPackage('a',1)
            it('Should return "Error mesage" for non-numeric argument for VAT',()=>{
                expect(function(){paymentObj.VAT='a'}).to.throw('VAT must be a non-negative number')
                expect(function(){paymentObj.VAT=-1}).to.throw('VAT must be a non-negative number')
                expect(function(){paymentObj.VAT = 1}).not.to.throw();

            })
        })
        describe('wrong active argument',()=>{
            let paymentObj=new PaymentPackage('a',1)
            it('Should return "Error masage" for non-numeric argument for active',()=>{
                expect(function(){paymentObj.active='a'}).to.throw('Active status must be a boolean')
                expect(function(){paymentObj.active=-1}).to.throw('Active status must be a boolean')
                expect(function(){paymentObj.active = true}).not.to.throw();
                expect(function(){paymentObj.active = false}).not.to.throw();

            })
        })
    })
    describe('ToString method',()=>{
        it('Should return message when active()=true',()=>{
            let paymentObj=new PaymentPackage('a',5)
            let expectedMessage=[`Package: a`,
            `- Value (excl. VAT): 5`,
            `- Value (VAT 20%): 6`];
            expect(paymentObj.toString()).to.equal(expectedMessage.join('\n'))
        })
        it('Should return message when active()=false',()=>{
            let paymentObj=new PaymentPackage('a',5)
            paymentObj.active=false;
            let expectedMessage=[
                'Package: a (inactive)',
                '- Value (excl. VAT): ',
                '- Value (VAT 20%): 6'
            ];;
            expect(paymentObj.toString()).to.equal(expectedMessage.join('\n'))
        })
        it('Should return message when active()=true and VAT is 0',()=>{
            let paymentObj=new PaymentPackage('a',1)
            paymentObj.VAT=0;
            let expectedMessage=[`Package: a`,
            `- Value (excl. VAT): 1`,
            `- Value (VAT 0%): 1`];
            expect(paymentObj.toString()).to.equal(expectedMessage.join('\n'))
        })
        it('Should return message when active()=false and VAT is 0',()=>{
            let paymentObj=new PaymentPackage('a',1)
            paymentObj.VAT=0;
            paymentObj.active=false;
            let expectedMessage=[
                'Package: a (inactive)',
                '- Value (excl. VAT): 1',
                '- Value (VAT 0%): 1'
            ];;
            expect(paymentObj.toString()).to.equal(expectedMessage.join('\n'))
        })
    })
    })
