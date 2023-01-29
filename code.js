class Card {
    constructor(value, suit) {
        this.suit = suit;
        this.value = value;
    }
}
// create a deck with the suit and values using for loops 
class Deck {
    constructor() {
        this.cards = [];
        let suits = ['hearts', 'diamonds', 'clubs', 'spades'];
        for (let suit of suits) {
            for (let value = 1; value <= 13; value++) {
                this.cards.push(new Card(suit, value));
            }
        }
    }

    shuffledeck() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    dealdeck() {
        return this.cards.pop();
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.deck = new Deck();
        this.deck.shuffledeck();
    }

    play() {
        return this.deck.dealdeck();
    }
}

function play(player1, player2) {
    let player1Score = 0;
    let player2Score = 0;
    while (player1.deck.cards.length > 0 && player2.deck.cards.length > 0) {
        let card1 = player1.play();
        let card2 = player2.play();
        if (card1.value > card2.value) {
            player1Score++;
        } else if (card1.value < card2.value) {
            player2Score++;
        }
    }
    if (player1Score > player2Score) {
        console.log(`${player1.name} wins with ${player1Score} points!`);
    } else if (player2Score > player1Score) {
        console.log(`${player2.name} wins with ${player2Score} points!`);
    } else {
        console.log("It's a tie!");
    }
}

let player1 = new Player("Player 1");
let player2 = new Player("Player 2");
play(player1, player2);