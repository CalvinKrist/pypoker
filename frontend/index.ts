import {Client, Room} from "colyseus.js";
import {GameState} from "../state/GameState";
import { renderer } from "./game";

document.addEventListener('DOMContentLoaded', async () => {
    const client = new Client('ws://localhost:2567');

    const room: Room<GameState> = await client.joinOrCreate<GameState>("poker");
    renderer.scenes[0].setUserId(room.sessionId);
    renderer.scenes[0].setRoom(room);

    room.onStateChange((newState: GameState) => {
        //console.log(newState);
        //renderer.scenes[0].updateState(newState);
    });
    room.state.onChange = (changes) => {
        renderer.scenes[0].onStateChanges(changes);
    };

    room.onMessage("update-state", (state) => {
        state.player_map = new Map(Object.entries(state.player_map))
        renderer.scenes[0].updateState(state);        
    });

});
