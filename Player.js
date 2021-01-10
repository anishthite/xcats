export class Player {
    constructor() {
        this.cards = []
        this.cardsdrawn = 1;
        this.alive = true;
    }

    addCard(card) {
        this.cards.push(card);
    }

}