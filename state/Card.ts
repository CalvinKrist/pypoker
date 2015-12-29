import {Schema, type} from "@colyseus/schema";

const SPADE = 0;
const CLUB = 1;
const DIAMOIND = 2;
const HEART = 3;

export class Card extends Schema {
    @type("number")
    value: number;

    @type("number")
    suit: number;

    constructor(value: number, suit: number) {
        super();
        this.value = value;
        this.suit = suit;
    }
}
