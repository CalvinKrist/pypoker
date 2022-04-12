import { Bot } from "./Bot";
import { READY } from "../messages/readystate";
import { raise } from "../messages/playeraction";


export class RandomBot extends Bot {
    isTurn: boolean;

    constructor() {
        super();

    }

    updateState(newState: any) {
        super.updateState(newState);

        if(!this.state.player_map[this.id].ready) {
            this.room.send("ready", READY);
        }

        if(this.isTurn != this.state.player_map[this.id].isTurn) {
            this.isTurn = this.state.player_map[this.id].isTurn;

            if(this.isTurn) {
                // Randomly select fold, call, or all-in
                let choice = Math.floor(Math.random() * 3);

                if(choice == 0) {
                    this.log("FOLDING")
                    this.room.send("fold", {});
                } else if(choice == 1) {
                    this.log("CALLING")
                    this.room.send("call", {});
                } else if(choice == 2) {
                    this.log("GOING ALL IN")
                    this.room.send("raise", raise(this.state.player_map[this.id].bb));
                }
            }
        }
    }
    onStateChanges(changes: any) {
        super.onStateChanges(changes);
    }

}
