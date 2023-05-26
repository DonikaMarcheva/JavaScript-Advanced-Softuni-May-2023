function deckOfCards(cards){
    let res=[];

    for (const card of cards) {
        let face=card.substring(0,card.length-1);
        let suit=card.substring(card.length-1);
        let cardResult;
        try {
            cardResult=playingCards(face,suit);
            res.push(cardResult);
        } catch (error) {
            res=[`Invalid card: ${card}`];
        }
    }
    console.log(res.join(' '));
    function playingCards(face, suit) {
        if (face !== face.toUpperCase() || suit !== suit.toUpperCase()) {
            throw new Error
        }
        let faceArr = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let suitObj = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663'
        }
        if (!faceArr.includes(face) || !suitObj[suit]) {
            throw new Error
        }
        return {
            face,
            suit,
            toString() {
                return `${this.face}${suitObj[this.suit]}`;
            }
        }
    }
}
deckOfCards(['AS', '10D', 'KH', '2C'] );
deckOfCards(['5S', '3D', 'QD', '1C'] );
