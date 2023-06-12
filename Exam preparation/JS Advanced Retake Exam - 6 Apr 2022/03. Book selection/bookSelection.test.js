const {bookSelection}=require('./bookSelection');
const {expect} = require('chai');

describe('Tests...',()=>{
    describe('isGenreSuitable (genre, age)',()=>{
        it('return message for genre is equal to "Thriller" or "Horror" and the value of age is less or equal to 12,',()=>{
            expect(bookSelection.isGenreSuitable('Thriller',10)).to.equal('Books with Thriller genre are not suitable for kids at 10 age')
            expect(bookSelection.isGenreSuitable('Thriller',12)).to.equal('Books with Thriller genre are not suitable for kids at 12 age')
            expect(bookSelection.isGenreSuitable('Horror',10)).to.equal('Books with Horror genre are not suitable for kids at 10 age')
            expect(bookSelection.isGenreSuitable('Horror',12)).to.equal('Books with Horror genre are not suitable for kids at 12 age')
        })
        it('return message for other than "Thriller" or "Horror" genre and different age',()=>{
            expect(bookSelection.isGenreSuitable('a',1)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('a',100)).to.equal('Those books are suitable');
        })
    })
    describe('isItAffordable (price, budget)',()=>{
        it('throw an error if the price and budget are not a number',()=>{
            expect(()=>{bookSelection.isItAffordable('a',1)}).to.throw('Invalid input');
            expect(()=>{bookSelection.isItAffordable(null,1)}).to.throw('Invalid input');
            expect(()=>{bookSelection.isItAffordable(undefined,1)}).to.throw('Invalid input');
            expect(()=>{bookSelection.isItAffordable(1,'a')}).to.throw('Invalid input');
            expect(()=>{bookSelection.isItAffordable(1,null)}).to.throw('Invalid input');
            expect(()=>{bookSelection.isItAffordable(1,undefined)}).to.throw('Invalid input');
        })
        it('return message for price-budget<0',()=>{
            expect(bookSelection.isItAffordable(2,1)).to.equal(`You don't have enough money`);
        })
        it('return message for price-budget>=0',()=>{
            expect(bookSelection.isItAffordable(2,2)).to.equal('Book bought. You have 0$ left')
            expect(bookSelection.isItAffordable(1,2)).to.equal('Book bought. You have 1$ left')
        })
    })
    describe('suitableTitles (books, wantedGenre)',()=>{
        it('throw an error if books parameter is not an array and the wantedGenre is not a string',()=>{
            expect(()=>{bookSelection.suitableTitles(1,'a')}).to.throw('Invalid input');
            expect(()=>{bookSelection.suitableTitles('a','a')}).to.throw('Invalid input');
            expect(()=>{bookSelection.suitableTitles(null,'a')}).to.throw('Invalid input');
            expect(()=>{bookSelection.suitableTitles(undefined,'a')}).to.throw('Invalid input');

            expect(()=>{bookSelection.suitableTitles([],1)}).to.throw('Invalid input');
            expect(()=>{bookSelection.suitableTitles([],[])}).to.throw('Invalid input');
            expect(()=>{bookSelection.suitableTitles([],null)}).to.throw('Invalid input');
            expect(()=>{bookSelection.suitableTitles([],undefined)}).to.throw('Invalid input');
        })
        it('return the changed array of book titles',()=>{
            expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], "Thriller"))
            .to.deep.equal(["The Da Vinci Code"]);
        })
    })
})

