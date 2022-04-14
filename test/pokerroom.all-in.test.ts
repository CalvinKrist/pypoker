import { ColyseusTestServer, boot } from "@colyseus/testing";
import { gameServer } from "../backend/serverConfig";
import { ALL_IN } from "../messages/playeraction";
import { raise } from "../messages/playeraction";
import { Gamestate } from "../backend/PokerRoom";
import { createRoomWithClients } from "./utils";

console.warn = function () { }

describe("Test all-in is correct", () => {
    let colyseus: ColyseusTestServer;

    beforeAll(async () => colyseus = await boot(gameServer));
    afterAll(async () => await colyseus.shutdown());

    beforeEach(async () => await colyseus.cleanup());

    it("while all-ining, players show their cards", async () => {
        let num_clients = 2;

        let game = await createRoomWithClients(colyseus, num_clients);
        await game.ready();
        let room = game.room;
        let clients = game.clients;

        await game.action(0, "raise", raise(game.getPlayer(0).bb + game.getPlayer(0).currentBet));
        await game.action(1, "call", {});

        while(room.gameState != Gamestate.Flop && room.gameState != Gamestate.Turn) {}
        expect(game.getPlayer(0).shouldShowHand).toBeTruthy();
        expect(game.getPlayer(1).shouldShowHand).toBeTruthy();
    });
});
