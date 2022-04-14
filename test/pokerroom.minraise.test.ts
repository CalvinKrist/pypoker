import { ColyseusTestServer, boot } from "@colyseus/testing";
import { gameServer } from "../backend/serverConfig";
import { ALL_IN } from "../messages/playeraction";
import { raise } from "../messages/playeraction";
import { Gamestate } from "../backend/PokerRoom";
import { createRoomWithClients } from "./utils";

console.warn = function () { }

describe("Minimum raising rules are correct", () => {
    let colyseus: ColyseusTestServer;

    beforeAll(async () => colyseus = await boot(gameServer));
    afterAll(async () => await colyseus.shutdown());

    beforeEach(async () => await colyseus.cleanup());

    it("test min-raise on 2-bet preflop", async () => {
        let num_clients = 3;

        let game = await createRoomWithClients(colyseus, num_clients);
        await game.ready();
        let room = game.room;
        let clients = game.clients;

        // Assert that the first client cannot bet less than 2bb
        let raises = [0.1, 1, 1.5, 1.9]
        for (let amount of raises) {
            expect(game.getPlayer(0).isDealer).toBeTruthy();
            expect(game.getPlayer(0).isTurn).toBeTruthy();

            let bb = game.getPlayer(0).bb;
            await game.action(0, "raise", raise(amount));

            expect(game.getPlayer(0).isTurn).toBeTruthy();
            expect(game.getPlayer(0).bb).toEqual(bb);
            expect(room.state.pot).toEqual(1.5);
        }

        // Assert that min-raise to 2bb works
        await game.action(0, "raise", raise(2));
        expect(room.state.pot).toEqual(3.5);
        expect(game.getPlayer(0).isTurn).toBeFalsy();
    });

    it("when sb min-bets they loose 1.5 bb more", async () => {
        let num_clients = 2;

        let game = await createRoomWithClients(colyseus, num_clients);
        await game.ready();
        let room = game.room;
        let clients = game.clients;

        let bb = game.getPlayer(0).bb;

        // Assert that min-raise to 2bb works
        await game.action(0, "raise", raise(2));
        expect(room.state.pot).toEqual(3);
        expect(game.getPlayer(0).bb).toEqual(bb - 1.5);
    });

    it("test min-raise 1-bet post-flop", async () => {
        let num_clients = 3;

        let game = await createRoomWithClients(colyseus, num_clients);
        await game.ready();
        let room = game.room;
        let clients = game.clients;

        await game.action(0, "call", {});
        await game.action(1, "call", {});
        await game.action(2, "call", {});

        expect(room.gameState).toEqual(Gamestate.Flop);

        // Assert that the first client cannot bet less than 1bb
        let raises = [0.1, 0.5, 0.9]
        for (let amount of raises) {
            expect(game.getPlayer(1).isTurn).toBeTruthy();

            let bb = game.getPlayer(1).bb;
            await game.action(1, "raise", raise(amount));

            expect(game.getPlayer(1).isTurn).toBeTruthy();
            expect(game.getPlayer(1).bb).toEqual(bb);
            expect(room.state.pot).toEqual(3);
        }

        // Assert that min-raise to 1bb works
        let chipsBeforeBet = game.getPlayer(1).bb;
        await game.action(1, "raise", raise(1));
        expect(room.state.pot).toEqual(4);
        expect(game.getPlayer(1).isTurn).toBeFalsy();
        expect(game.getPlayer(1).bb).toEqual(chipsBeforeBet - 1);
    });

    it("test min-raise 2-bet post-flop", async () => {
        let num_clients = 3;

        let game = await createRoomWithClients(colyseus, num_clients);
        await game.ready();
        let room = game.room;
        let clients = game.clients;

        await game.action(0, "call", {});
        await game.action(1, "call", {});
        await game.action(2, "call", {});

        expect(room.gameState).toEqual(Gamestate.Flop);

        await game.action(1, "raise", raise(1));

        // Assert that the second player cannot bet less than 2bb
        let raises = [0.1, 1, 1.5, 1.9]
        for (let amount of raises) {
            expect(game.getPlayer(2).isTurn).toBeTruthy();

            let bb = game.getPlayer(2).bb;
            await game.action(2, "raise", raise(amount));

            expect(game.getPlayer(2).isTurn).toBeTruthy();
            expect(game.getPlayer(2).bb).toEqual(bb);
            expect(room.state.pot).toEqual(4);
        }

        // Assert that min-raise to 2bb works
        let chipsBeforeBet = game.getPlayer(2).bb;
        await game.action(2, "raise", raise(2));
        expect(game.getPlayer(2).isTurn).toBeFalsy();
        expect(room.state.pot).toEqual(6);
        expect(game.getPlayer(2).bb).toEqual(chipsBeforeBet - 1);
    });

    it("test min-raise on 3-bet preflop", async () => {
        let num_clients = 3;

        let game = await createRoomWithClients(colyseus, num_clients);
        let statingChips = game.getPlayer(1).bb;
        await game.ready();
        let room = game.room;
        let clients = game.clients;

        // Assert that if someone raises by 5 (to a total bet of 6),
        // the next min-bet is 11 (5 * 2 + bb)
        await game.action(0, "raise", raise(6));
        expect(room.state.pot).toEqual(7.5);

        let raises = [2, 3, 8, 10, 10.9]
        for (let amount of raises) {
            expect(game.getPlayer(1).isTurn).toBeTruthy();

            let bb = game.getPlayer(1).bb;
            await game.action(1, "raise", raise(amount));

            expect(game.getPlayer(1).isTurn).toBeTruthy();
            expect(game.getPlayer(1).bb).toEqual(bb);
            expect(room.state.pot).toEqual(7.5);
        }

        // Assert that min-raise to 11bb works
        await game.action(1, "raise", raise(11));
        expect(room.state.pot).toEqual(18);
        expect(game.getPlayer(1).isTurn).toBeFalsy();
        expect(game.getPlayer(1).currentBet).toEqual(11);
        expect(game.getPlayer(1).bb).toEqual(statingChips - 11);
    });

    it("assert player can all-in even if chips < minBet", async () => {
        let num_clients = 3;

        let game = await createRoomWithClients(colyseus, num_clients);
        let statingChips = game.getPlayer(1).bb;
        await game.ready();
        let room = game.room;
        let clients = game.clients;

        // If someone raises by 5 (to a total bet of 6),
        // the next min-bet is 11 (5 * 2 + bb)
        await game.action(0, "raise", raise(6));
        expect(room.state.pot).toEqual(7.5);

        // Player 1 has less than the min-bet
        game.getPlayer(1).bb = 10;
        game.getPlayer(1).currentBet = 1;

        // Assert player 1 can't bet with less than all their chips
        await game.action(1, "raise", raise(10));
        expect(room.state.pot).toEqual(7.5);
        expect(game.getPlayer(1).bb).toEqual(10);
        expect(game.getPlayer(1).isTurn).toBeTruthy();

        await game.action(1, "raise", raise(11));
        expect(room.state.pot).toEqual(17.5);
        expect(game.getPlayer(1).bb).toEqual(0);
        expect(game.getPlayer(1).isTurn).toBeFalsy();
        expect(game.getPlayer(1).lastAction).toEqual(ALL_IN);
    });

    it("assert a player can't bet more chips than they have", async () => {
        let num_clients = 3;

        let game = await createRoomWithClients(colyseus, num_clients);
        let statingChips = game.getPlayer(1).bb;
        await game.ready();
        let room = game.room;
        let clients = game.clients;

        game.getPlayer(0).currentBet = 1;
        let chipsBeforeBet = game.getPlayer(0).bb

        // Try to bet one more chip than we have
        await game.action(0, "raise", raise(chipsBeforeBet + 2));
        expect(room.state.pot).toEqual(1.5);
        expect(game.getPlayer(0).bb).toEqual(chipsBeforeBet);
        expect(game.getPlayer(0).isTurn).toBeTruthy();

        await game.action(0, "raise", raise(chipsBeforeBet + 1));
        expect(game.getPlayer(0).bb).toEqual(0);
        expect(room.state.pot).toEqual(1.5 + chipsBeforeBet);
        expect(game.getPlayer(0).isTurn).toBeFalsy();
    });

});
