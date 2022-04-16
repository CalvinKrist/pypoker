import { Client, Room } from "colyseus.js";
import { GameState } from "../state/GameState";
const {createGame} = require("./game");
import { Player } from "./Player";
import { RandomBot } from "./RandomBot";
import { ErrorMessage } from "../messages/error"

async function joinRoom(playerPromise: Promise<Player>) {
    var HOST = location.origin.replace(/^http/, 'ws');
    console.log("Client connecting on " + HOST)
    const client = new Client(HOST);

    // Need to wait before we join the room, or we may miss the
    // first message with our updateed state
    let player: Player = await playerPromise;

    const room: Room = await client.joinOrCreate<GameState>("poker");
    player.setUserId(room.sessionId);
    player.setRoom(room);

    room.state.onChange = (changes: any) => {
        player.onStateChanges(changes);
    };

    room.onMessage("state-update", (newState: any) => {
        console.log(newState);
        console.log(JSON.stringify(newState));
        player.updateState(newState);
    });

    room.onMessage("error", (errorMessage: ErrorMessage) => {
        player.onServerError(errorMessage);
    });
}

function startRandomBot() {
    let element = document.getElementById('game-modes');
    element.remove();

    element = document.getElementById('canvas');
    element.remove();

    joinRoom(new Promise((resolve, reject) => {
        resolve(new RandomBot());
    }));
}

function startGame() {
    const element = document.getElementById('game-modes');
    element.remove();

    let renderer = createGame();
    // The scene is not ready yet, so we need to use a 
    // promise for the player intead
    joinRoom(new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(renderer.scenes[0]);
        }, 300);
    }));
}

declare global {
    interface Window { 
        startGame: any; 
        startRandomBot: any;
    }
}

console.log("in my index!!!")
window.startGame = startGame;
window.startRandomBot = startRandomBot;
