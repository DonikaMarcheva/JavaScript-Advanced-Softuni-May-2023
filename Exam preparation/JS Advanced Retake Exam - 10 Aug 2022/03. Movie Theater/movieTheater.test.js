const { expect } = require("chai");
const { movieTheater } = require("./03.movieTheater");
const { describe } = require("mocha");

describe ('Tests...',()=>{
    describe('ageRestrictions (movieRating) property',()=>{
        it('return message for movieRating==="G"',()=>{
            expect(movieTheater.ageRestrictions('G')).to.equal('All ages admitted to watch the movie');
        })
        it('return message for movieRating==="PG"',()=>{
            expect(movieTheater.ageRestrictions('PG')).to.equal(`Parental guidance suggested! Some material may not be suitable for pre-teenagers`);
        })
        it('return message for movieRating==="R"',()=>{
            expect(movieTheater.ageRestrictions('R')).to.equal(`Restricted! Under 17 requires accompanying parent or adult guardian`);
        })
        it('return message for movieRating==="NC-17"',()=>{
            expect(movieTheater.ageRestrictions('NC-17')).to.equal(`No one under 17 admitted to watch the movie`);
        })
        it('return message for movieRating != G,PG,R,NC-17',()=>{
            expect(movieTheater.ageRestrictions('A')).to.equal(`There are no age restrictions for this movie`);
            expect(movieTheater.ageRestrictions('')).to.equal(`There are no age restrictions for this movie`);
        })
    })
    describe('moneySpent (tickets, food, drinks)',()=>{
        it('throw an error if input parameters are not number,array and array',()=>{
            expect(()=>{movieTheater.moneySpent('a',['a'],['a'])}).to.throw('Invalid input');
            expect(()=>{movieTheater.moneySpent([],['a'],['a'])}).to.throw('Invalid input');
            expect(()=>{movieTheater.moneySpent(null,['a'],['a'])}).to.throw('Invalid input');
            expect(()=>{movieTheater.moneySpent(undefined,['a'],['a'])}).to.throw('Invalid input');

            expect(()=>{movieTheater.moneySpent(1,1,['a'])}).to.throw('Invalid input');
            expect(()=>{movieTheater.moneySpent(1,'a',['a'])}).to.throw('Invalid input');
            expect(()=>{movieTheater.moneySpent(1,null,['a'])}).to.throw('Invalid input');
            expect(()=>{movieTheater.moneySpent(1,undefined,['a'])}).to.throw('Invalid input');

            expect(()=>{movieTheater.moneySpent(1,['a'],1)}).to.throw('Invalid input');
            expect(()=>{movieTheater.moneySpent(1,['a'],'a')}).to.throw('Invalid input');
            expect(()=>{movieTheater.moneySpent(1,['a'],null)}).to.throw('Invalid input');
            expect(()=>{movieTheater.moneySpent(1,['a'],undefined)}).to.throw('Invalid input');
        })
        it('return message for inputs with discount for total cost bigger 50',()=>{
            expect(movieTheater.moneySpent(10,['Nachos'],['Soda'])).to.equal(`The total cost for the purchase with applied discount is 126.80`)
            expect(movieTheater.moneySpent(10,['Popcorn'],['Water'])).to.equal(`The total cost for the purchase with applied discount is 124.80`)
        })
        it('return message for inputs without discount for total cost under or equal to 50',()=>{
            expect(movieTheater.moneySpent(1,['Nachos'],['Soda'])).to.equal(`The total cost for the purchase is 23.50`)
            expect(movieTheater.moneySpent(1,['Popcorn'],['Water'])).to.equal(`The total cost for the purchase is 21.00`)
        })
    })
    describe('reservation (rowsArray, neededSeatsCount)',()=>{
        it('throw an error if passed rowsArray or neededSeatsCount parameters are not an array and number',()=>{
            expect(()=>{movieTheater.reservation(1,1)}).to.throw('Invalid input');
            expect(()=>{movieTheater.reservation('a',1)}).to.throw('Invalid input');
            expect(()=>{movieTheater.reservation(null,1)}).to.throw('Invalid input');
            expect(()=>{movieTheater.reservation(undefined,1)}).to.throw('Invalid input');

            expect(()=>{movieTheater.reservation([],'a')}).to.throw('Invalid input');
            expect(()=>{movieTheater.reservation([],[])}).to.throw('Invalid input');
            expect(()=>{movieTheater.reservation([],null)}).to.throw('Invalid input');
            expect(()=>{movieTheater.reservation([],undefined)}).to.throw('Invalid input');

        })
        it('return message for valid inputs',()=>{
            expect(movieTheater.reservation([{rowNumber: 1,freeSeats: 7}, {rowNumber: 2,freeSeats: 5}],1)).to.equal(2)
            expect(movieTheater.reservation([{rowNumber: 1,freeSeats: 5}, {rowNumber: 2,freeSeats: 4}],5)).to.equal(1)
            expect(movieTheater.reservation([{rowNumber: 1,freeSeats: 5}, {rowNumber: 2,freeSeats: 5}],5)).to.equal(2)
        })
    })
})