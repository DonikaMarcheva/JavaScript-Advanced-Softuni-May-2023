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

console.log(playingCards('A', 'S').toString())
console.log(playingCards('1', 'C').toString())
