import {ArraySchema, Schema, type} from "@colyseus/schema";
import {Card} from "./Card";

export class Deck extends Schema {
    @type([Card])
    cards: Card[];

    constructor() {
        super();
        this.reset();
    }

    deal() {
        return this.cards.pop();
    }

    reset() {
        this.cards = new ArraySchema<Card>();

        let suits = [0, 1, 2, 3];
        let vals = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        for(var suit of suits) {
            for(var val of vals) {
                this.cards.push(new Card(val, suit));
            }
        }

        // Implementation of Durstenfeld shuffle
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
}
