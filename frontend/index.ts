import {Client, Room} from "colyseus.js";
import {GameState} from "../state/GameState";
import { createGame } from "./game";

document.addEventListener('DOMContentLoaded', async () => {
    

});
async function joinRoom(renderer) {
    const client = new Client('ws://localhost:2567');

    const room: Room<GameState> = await client.joinOrCreate<GameState>("poker");
    renderer.scenes[0].setUserId(room.sessionId);
    renderer.scenes[0].setRoom(room);

    room.state.onChange = (changes) => {
        renderer.scenes[0].onStateChanges(changes);
    };

    room.onMessage("state-update", (newState) => {
        newState.player_map = new Map(Object.entries(newState.player_map));
        newState.player_map["$items"] = newState.player_map;
        newState.winners["$items"] = newState.winners;
        newState.player_order["$items"] = newState.player_order;
        newState.board["$items"] = newState.board;

        for(let player of newState.player_map.values()) {
            player.hand["$items"] = player.hand;
        }

        renderer.scenes[0].updateState(newState);
    });
}

function startGame() {
    const element = document.getElementById('game-modes');
    element.remove(); 
    
    let renderer = createGame();
    joinRoom(renderer);
}
window.startGame = startGame; // typescript shows an error here but it can be ignored
