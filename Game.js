import {Card } from './Cards.js';
import {Player } from './Player.js';

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}


class Game {
    constructor(player_names_lists, card_info) {
        this.players = []
        this.deck = []
        //will break if playerlist is empty but idc
        this.curr_player_ind = 0
        for (i = 0; i < player_names_lists.length; i++) {
            //add player & deal out diffuse
            this.players.push(new Player(player_names_lists[i]));
            this.players[i].addCard(new Card(card_info.DIFFUSE.name, card_info.DIFFUSE.img));

        }
        for (var type in num_cards) {
            for (var i = 0; i < num_cards[type]; i++) {
                this.deck.push(new Card(card_info[type].name, card_info[type].img))
            }
        }
        //shuffle cards w/out explodes
        shuffle(this.deck)
        //deal out cards
        for (var i = 0; i < 14; i++) {
            for (var player in this.players) {
                this.draw(player);
            }
        }
        //add explodes
        for (var i = 0; i < player_names_lists.length; i++) {
            this.deck.push(new Card(card_info.DEATH.name, card_info.DEATH.img))
        }
        //reshuffle
        shuffle(this.deck)

    }

    //draws card for player
    draw(player) {
        var card = this.deck.pop()
        player.cards.push(card)
    }

    turn() {
        //player does any cards they want

        // draw card for 

        this.go_to_next_player();
    }


    
    go_to_next_player() {

        function cycle_curr_player_index(){
            if (this.curr_player_ind + 1 >= this.players.length) {
                this.curr_player_ind = 0;
            } else {
                this.curr_player_ind += 1;
            }
        }

        do {
            cycle_curr_player_index()
        } while (this.players[this.curr_player_ind].alive != true)
    }


}

//Usage: make a card_info object

const card_info = {
    ATTACK: {name: 'attack', img: 'idk', num: 4},
    NORMIE1: {name: 'melon', img: 'idk', num: 4},
    NORMIE2: {name: 'taco', img: 'idk', num: 4},
    NORMIE3: {name: 'something', img: 'idk', num: 4},
    NORMIE4: {name: 'another', img: 'idk', num: 4},
    NORMIE5: {name: 'jchowmanyarether', img: 'idk', num: 4},
    DIFFUSE: {name: 'diffuse', img: 'idk', num: 4},
    DEATH: {name: 'attack', img: 'idk', num: 4},
    FAVOR: {name: 'attack', img: 'idk', num: 4},
    NOPE: {name: 'attack', img: 'idk', num: 4},
    FUTURE: {name: 'attack', img: 'idk', num: 4},
    SHUFFLE: {name: 'attack', img: 'idk', num: 4},
    SKIP: {name: 'attack', img: 'idk', num: 4}
}


const namelist = ["Kill", "Me"]
game = new Game(namelist, card_info)