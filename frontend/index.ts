import {Client, Room} from "colyseus.js";
import {GameState} from "../state/GameState";
import { renderer } from "./game";

document.addEventListener('DOMContentLoaded', async () => {
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

        //console.log(newState)

        renderer.scenes[0].updateState(newState);
    });

});
