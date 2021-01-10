export class Player {
    constructor() {
        this.cards = []
        this.cardsdrawn = 1;
    }

    addCard(card) {
        this.cards.push(card);
    }

}