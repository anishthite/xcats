

//TODO: replace strvalues with images





export class Card {
    constructor(cardtype, image) {
        this.cardtype = cardtype;
        this.image = image;
    }


}

class ActionCard extends Card {
    constructor(cardtype, image, action) {
        super(cardtype, image);
        this.action = action;
    }
}

//attack cards
function attack(player1, player2) {
    player1.cardsdrawn = 0;
    player2.cardsdrawn = 2;
}

//nope

//skip cards
function skip(player) {
    player.cardsdrawn = 0;
}

// shuffle cards: I'm too lazy, use the shuffle from Game.js



//see the fut cards
function future(player1) {


}