import {ArraySchema, Schema, type} from "@colyseus/schema";
import {Card} from "./Card";

export class Player extends Schema  {
    
    @type("boolean")
    private ready: boolean;

    @type("boolean")
    isDealer: boolean;

    @type("boolean")
    isTurn: boolean;

    @type("boolean")
    inRound: boolean;

    @type("number")
    bb: number;

    @type("number")
    currentBet: number;

    @type("string")
    public readonly id: string;

    @type([Card])
    hand: Card[];

    constructor(id: string, ready: boolean) {
        super();

        this.ready = ready;
        this.id= id;
        this.hand = new ArraySchema<Card>();
        this.isDealer = false;
        this.isTurn = false;
        this.bb = 0;
        this.inRound = false;
        this.currentBet = 0;
    }

    public get isReady(): boolean {
        return this.ready
    }
    public set isReady(isReady: boolean) {
        this.ready = isReady;
    }
}
