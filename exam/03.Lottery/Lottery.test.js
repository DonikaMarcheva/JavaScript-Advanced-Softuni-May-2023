const lottery=require('./Lottery');
const {expect} = require('chai');

describe('Tests...',()=>{
    describe('buyLotteryTicket()',()=>{
        it('throw an error for buy===false',()=>{
            expect(()=>{lottery.buyLotteryTicket(1,1,false)}).to.throw(Error,'Unable to buy lottery ticket!');
        })
        it('throw an error for invalid parameters',()=>{
            expect(()=>{lottery.buyLotteryTicket(-1,1,true)}).to.throw(Error,'Invalid input!');
            expect(()=>{lottery.buyLotteryTicket(0,1,true)}).to.throw(Error,'Invalid input!');
            
            expect(()=>{lottery.buyLotteryTicket(1,0,true)}).to.throw(Error,'Invalid input!');
            expect(()=>{lottery.buyLotteryTicket(1,-1,true)}).to.throw(Error,'Invalid input!');
            
            expect(()=>{lottery.buyLotteryTicket('a',1,true)}).to.throw(Error,'Invalid input!');
            expect(()=>{lottery.buyLotteryTicket([],1,true)}).to.throw(Error,'Invalid input!');
            expect(()=>{lottery.buyLotteryTicket(null,1,true)}).to.throw(Error,'Invalid input!');
            expect(()=>{lottery.buyLotteryTicket(undefined,1,true)}).to.throw(Error,'Invalid input!');

            expect(()=>{lottery.buyLotteryTicket(1,'a',true)}).to.throw(Error,'Invalid input!');
            expect(()=>{lottery.buyLotteryTicket(1,[],true)}).to.throw(Error,'Invalid input!');
            expect(()=>{lottery.buyLotteryTicket(1,null,true)}).to.throw(Error,'Invalid input!');
            expect(()=>{lottery.buyLotteryTicket(1,undefined,true)}).to.throw(Error,'Invalid input!');

            expect(()=>{lottery.buyLotteryTicket(1,1,1)}).to.throw(Error,'Invalid input!');
            expect(()=>{lottery.buyLotteryTicket(1,1,'a')}).to.throw(Error,'Invalid input!');
            expect(()=>{lottery.buyLotteryTicket(1,1,null)}).to.throw(Error,'Invalid input!');
            expect(()=>{lottery.buyLotteryTicket(1,1,undefined)}).to.throw(Error,'Invalid input!');
        })
        it('returns message for valid inputs',()=>{
            expect(lottery.buyLotteryTicket(1,2,true)).to.equal('You bought 2 tickets for 2$.')
            expect(lottery.buyLotteryTicket(1.5,2,true)).to.equal('You bought 2 tickets for 3$.')
        })
    })
    describe('checkTicket(ticketNumbers, luckyNumbers)',()=>{
        it('throw an error for invalid inputs',()=>{
            expect(()=>{lottery.checkTicket(1,[1,1,1,1,1,1])}).to.throw(Error,'Invalid input!');
            expect(()=>{lottery.checkTicket('a',[1,1,1,1,1,1])}).to.throw(Error,'Invalid input!');
            expect(()=>{lottery.checkTicket([],[1,1,1,1,1,1])}).to.throw(Error,'Invalid input!');
            expect(()=>{lottery.checkTicket(null,[1,1,1,1,1,1])}).to.throw(Error,'Invalid input!');
            expect(()=>{lottery.checkTicket(undefined,[1,1,1,1,1,1])}).to.throw(Error,'Invalid input!');
            expect(()=>{lottery.checkTicket([1,1,1,1,1,],[1,1,1,1,1,1])}).to.throw(Error,'Invalid input!');
            expect(()=>{lottery.checkTicket([1,1,1,1,1,1,1],[1,1,1,1,1,1])}).to.throw(Error,'Invalid input!');

            expect(()=>{lottery.checkTicket([1,1,1,1,1,1],1)}).to.throw(Error,'Invalid input!');
            expect(()=>{lottery.checkTicket([1,1,1,1,1,1],'a')}).to.throw(Error,'Invalid input!');
            expect(()=>{lottery.checkTicket([1,1,1,1,1,1],[])}).to.throw(Error,'Invalid input!');
            expect(()=>{lottery.checkTicket([1,1,1,1,1,1],null)}).to.throw(Error,'Invalid input!');
            expect(()=>{lottery.checkTicket([1,1,1,1,1,1],undefined)}).to.throw(Error,'Invalid input!');
            expect(()=>{lottery.checkTicket([1,1,1,1,1,1],[1,1,1,1,1])}).to.throw(Error,'Invalid input!');
            expect(()=>{lottery.checkTicket([1,1,1,1,1,1],[1,1,1,1,1,1,1])}).to.throw(Error,'Invalid input!');
        })
        it('returns message for all numbers matched',()=>{
            expect(lottery.checkTicket([1,2,3,4,5,6],[1,2,3,4,5,6])).to.equal('You win the JACKPOT!!!')
        })
        it('return message if 3 or more numbers matched',()=>{
            expect(lottery.checkTicket([1,2,3,1,1,1],[1,2,3,4,5,6])).to.equal('Congratulations you win, check your reward!')
            expect(lottery.checkTicket([1,2,3,4,1,1],[1,2,3,4,5,6])).to.equal('Congratulations you win, check your reward!')
            expect(lottery.checkTicket([1,2,3,4,5,1],[1,2,3,4,5,6])).to.equal('Congratulations you win, check your reward!')

        })
    })
    describe('secondChance()',()=>{
        it('throw an error for invalid input data',()=>{
            expect(()=>{lottery.secondChance('a',[])}).to.throw(Error,`Invalid input!`);
            expect(()=>{lottery.secondChance([],[])}).to.throw(Error,`Invalid input!`);
            expect(()=>{lottery.secondChance(null,[])}).to.throw(Error,`Invalid input!`);
            expect(()=>{lottery.secondChance(undefined,[])}).to.throw(Error,`Invalid input!`);

            expect(()=>{lottery.secondChance(1,1)}).to.throw(Error,`Invalid input!`);
            expect(()=>{lottery.secondChance(1,'a')}).to.throw(Error,`Invalid input!`);
            expect(()=>{lottery.secondChance(1,null)}).to.throw(Error,`Invalid input!`);
            expect(()=>{lottery.secondChance(1,undefined)}).to.throw(Error,`Invalid input!`);

        })
    })
    //...............TODO
})