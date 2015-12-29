import {Client, Delayed, Room} from "colyseus";
import {GameState} from "../state/GameState";
import {Player} from "../state/Player";
import {ReadyState} from "../messages/readystate";

enum Gamestate {
    Preround,  // round hasn't started yet
    Preflop,
    Flop,
    Turn,
    River
  }

export class PokerRoom extends Room<GameState> {
    gameState: Gamestate;

    constructor() {
        super();
        this.maxClients = 6;
        this.gameState = Gamestate.Preround;
    }

    private allPlayersReady(): boolean {
        for (const player of this.state.player_map.values()) {
            if (!player.isReady) {
                return false;
            }
        }
        return true;
    }

    private transitionState(nextState: Gamestate) {
        if(this.gameState == Gamestate.Preround && nextState == Gamestate.Preflop) {
            this.state.running = true;
            this.state.player_map.get(this.state.player_order[0]).isDealer = true;
            for(let [player_id, player] of this.state.player_map.entries()) {
                player.hand.push(this.state.deck.deal());
                player.hand.push(this.state.deck.deal());
                player.bb = 150;
            }

            // Put out blinds
            this.state.pot += 1.5;
            let dealer = Array.from(this.state.player_map.values()).filter(player => player.isDealer)[0];
            let dealer_index = this.state.player_order.indexOf(dealer.id);
            if (this.state.player_order.length == 2) {
                // In heads-up poker, dealer is SB and the other player is BB
                dealer.bb -= 0.5;
                let bb_id = this.state.player_order[(dealer_index + 1) % this.state.player_order.length];
                this.state.player_map.get(bb_id).bb -= 1;
            } else {
                let sb_id = this.state.player_order[(dealer_index + 1) % this.state.player_order.length];
                let bb_id = this.state.player_order[(dealer_index + 2) % this.state.player_order.length];
                this.state.player_map.get(sb_id).bb -= 0.5;
                this.state.player_map.get(bb_id).bb -= 1;
            }

            // Set the current player's turn
            let offset = this.state.player_order.length == 2 ? 0 : 3;
            let starting_player_id = this.state.player_order[(dealer_index + offset) % this.state.player_order.length];
            this.state.player_map.get(starting_player_id).isTurn = true;
        }
    }

    onCreate(options: any) {
        this.setState(new GameState());

        this.onMessage("ready", (client, message: ReadyState) => {
            if (this.state.player_map.has(client.id)) {
                this.state.player_map.get(client.id).isReady = message.isReady;
            }

            if (this.allPlayersReady() && this.clients.length > 1) {
                this.transitionState(Gamestate.Preflop);
            }
        });
    }

    onJoin(client: Client, options: any) {
        let player = new Player(client.id, false);
        this.state.player_map.set(client.id, player);

        if(!this.state.running) {
            this.state.player_order.push(player.id);
        } else {
            for(let i = 0; i < this.state.player_order.length; i++) {
                if(this.state.player_map.get(this.state.player_order[i]).isDealer) {
                    // Splice doesn't insert the value on the ArraySchema (although the function exists and doesn't throw an error)
                    // so we create a temporary array instead
                    let t = Array.from(this.state.player_order);
                    t.splice(1, 0, player.id)
                    this.state.player_order = t;
                }
            }
            player.hand.push(this.state.deck.deal());
            player.hand.push(this.state.deck.deal());
            player.bb = 150;  // TODO: set this to the same as the small stack
        }
    }

    onLeave(client: Client, consented: boolean) {
        this.state.player_map.delete(client.id);
        for(let i = 0; i < this.state.player_order.length; i++) {
            if(this.state.player_order[i] == client.id) {
                this.state.player_order.splice(i, 1);
            }
        }
    }

    onDispose() {
    }
}
