import { ColyseusTestServer } from "@colyseus/testing";
import { PokerRoom } from "../backend/PokerRoom";
import { READY } from "../messages/readystate";

class Game {
    room: PokerRoom;
    clients: any;

    constructor(room: PokerRoom, clients: any) {
        this.room = room;
        this.clients = clients;
    }

    async ready() {
        for (let client of this.clients) {
            client.send("ready", READY);
            const [c, message] = await this.room.waitForMessage("ready");
        }
    }

    async action(client_idx: number, action: string, message: any) {
        this.clients[client_idx].send(action, message);
        return await this.room.waitForMessage(action);
    }

    getPlayer(i: number) {
        return this.room.state.player_map.get(this.clients[i].sessionId);
    }
}

export async function createRoomWithClients(colyseus: ColyseusTestServer, num_clients: number) {
    const room = await colyseus.createRoom("poker", {}) as PokerRoom;
    let clients = [];
    for (let i = 0; i < num_clients; i++) {
        clients.push(await colyseus.connectTo(room));
    }

    return new Game(room, clients)
}
