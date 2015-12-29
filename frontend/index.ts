import {Client, Room} from "colyseus.js";
import {GameState} from "../state/GameState";
import { renderer } from "./game";

document.addEventListener('DOMContentLoaded', async () => {
    const client = new Client('ws://localhost:2567');

    const room: Room<GameState> = await client.joinOrCreate<GameState>("poker");
    renderer.scenes[0].setUserId(room.sessionId);
    renderer.scenes[0].setRoom(room);

    room.onStateChange((newState: GameState) => {
        renderer.scenes[0].updateState(newState);
    });
});
