const ChristmasMovies = require('./02. Christmas Movies_Resources');
const { expect } = require('chai');

describe('Tests....', () => {
    describe('constructor', () => {
        it('should return empty array, empty obj and empty arr', () => {
            let christmas = new ChristmasMovies();
            expect(christmas.movieCollection).to.deep.equal([]);
            expect(christmas.watched).to.deep.equal({});
            expect(christmas.actors).to.deep.equal([]);
            expect(christmas).to.be.instanceOf(ChristmasMovies);
        })
    })
    describe('buyMovie()', () => {
        it('return message for adding non -existing movie to movieCollection and unique actor', () => {
            let christmas = new ChristmasMovies();
            expect(christmas.buyMovie('a', ['a', 'b'])).to.equal('You just got a to your collection in which a, b are taking part!');
            expect(christmas.buyMovie('b', ['a', 'b'])).to.equal('You just got b to your collection in which a, b are taking part!');
        })
        it('return message for adding non -existing movie to movieCollection and not an unique actor', () => {
            let christmas = new ChristmasMovies();
            expect(christmas.buyMovie('a', ['a', 'a'])).to.equal('You just got a to your collection in which a are taking part!');
            expect(christmas.buyMovie('b', ['b', 'b'])).to.equal('You just got b to your collection in which b are taking part!');
        })
        it('throw an error for adding existing movie to movieCollection', () => {
            let christmas = new ChristmasMovies();
            christmas.movieCollection.push({ name: 'a' });
            expect(() => { christmas.buyMovie('a', ['a', 'b']) }).to.throw(Error, 'You already own a in your collection!')
        })
    })
    describe('discardMovie()', () => {
        it('throw an error if movieName parameter is not in the movieCollection', () => {
            let christmas = new ChristmasMovies();
            christmas.movieCollection.push({ name: 'a' });
            expect(() => { christmas.discardMovie('b') }).to.throw(Error, 'b is not at your collection!');
        })
        it('throw an error if movieName parameter is not in the watched', () => {
            let christmas = new ChristmasMovies();
            christmas.movieCollection.push({ name: 'a' });
            christmas.watched = { b: 1 };
            expect(() => { christmas.discardMovie('a') }).to.throw(Error, 'a is not watched!');
        })
        it('return message if movie is in watched and movieCollection', () => {
            let christmas = new ChristmasMovies();
            christmas.movieCollection.push({ name: 'a' });
            christmas.watched = { a: 1 };
            expect(christmas.discardMovie('a')).to.equal('You just threw away a!')
        })
    })
    describe('watchMovie()', () => {
        it('return message for adding the movie if it exist in movieCollection', () => {
            let christmas = new ChristmasMovies();
            christmas.movieCollection.push({ name: 'a' });
            christmas.watchMovie('a');
            expect(christmas.watched).to.deep.equal({ 'a': 1 });
        })
        it('return message for adding the movie if it exist in movieCollection and watched', () => {
            let christmas = new ChristmasMovies();
            christmas.movieCollection.push({ name: 'a' });
            christmas.watched = { a: 1 };
            christmas.watchMovie('a');
            expect(christmas.watched).to.deep.equal({ 'a': 2 });
        })
        it('throw an error for adding the movie if it doesn"t exist in movieCollection', () => {
            let christmas = new ChristmasMovies();
            christmas.movieCollection.push({ name: 'a' });
            expect(() => { christmas.watchMovie('b') }).to.throw(Error, 'No such movie in your collection!');
        })
    })
    describe('favouriteMovie()', () => {
        it('return message for favourite movie if watched is not empty', () => {
            let christmas = new ChristmasMovies();
            christmas.movieCollection.push({ name: 'a' });
            christmas.watchMovie('a')
            christmas.movieCollection.push({ name: 'b' });
            christmas.watchMovie('b')
            christmas.watchMovie('b')
            expect(christmas.favouriteMovie()).to.equal('Your favourite movie is b and you have watched it 2 times!');
        })
        it('throw an error if watched is not empty', () => {
            let christmas = new ChristmasMovies();
            christmas.movieCollection.push({ name: 'a' });
            expect(() => { christmas.favouriteMovie() }).to.throw(Error, 'You have not watched a movie yet this year!');
        })
    })
    describe('mostStarredActors()', () => {
        it('throw an error if there is no movie in the movieCollecion', () => {
            let christmas = new ChristmasMovies();
            expect(() => { christmas.mostStarredActor() }).to.throw(Error, 'You have not watched a movie yet this year!');
        })
    })
    ////!!!!-not passing judge
    it('return message for mostStarredActor if movieCollection is not empty', () => {
        let christmas = new ChristmasMovies();
        christmas.movieCollection.push({ name: 'a', actors: ['b', 'c'] });
        christmas.movieCollection.push({ name: 'b', actors: ['b', 'c'] });
        expect(christmas.mostStarredActor()).to.equal('The most starred actor is b and starred in 2 movies!');
    })
    it('return message ', () => {
        let christmas = new ChristmasMovies();
        // christmas.movieCollection.push({name:'a',actors:['b','c']});
        christmas.buyMovie('a', ['b'])
        christmas.buyMovie('b', ['b', 'c'])
        expect(christmas.mostStarredActor()).to.equal('The most starred actor is b and starred in 2 movies!');
    })
})