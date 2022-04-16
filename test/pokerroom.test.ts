import { ColyseusTestServer, boot } from "@colyseus/testing";
import { gameServer } from "../backend/serverConfig";
import { PokerRoom } from "../backend/PokerRoom";
import { RAISE } from "../messages/playeraction";
import { READY } from "../messages/readystate";
import { raise } from "../messages/playeraction";
import { Gamestate } from "../backend/PokerRoom";
import { createRoomWithClients } from "./utils";

console.warn = function () { }

describe("testing PokerRoom", () => {
  let colyseus: ColyseusTestServer;

  beforeAll(async () => colyseus = await boot(gameServer));
  afterAll(async () => await colyseus.shutdown());

  beforeEach(async () => await colyseus.cleanup());

  it("server starts in Preround state", async () => {
    const room = await colyseus.createRoom("poker", {}) as PokerRoom;

    expect(room.gameState).toEqual(Gamestate.Preround);
  });

  it("clients can connect and remove in Preflop state", async () => {
    const room = await colyseus.createRoom("poker", {}) as PokerRoom;

    let client1 = await colyseus.connectTo(room);
    expect(room.state.player_map.has(client1.sessionId)).toBeTruthy();

    const client2 = await colyseus.connectTo(room);
    expect(room.state.player_map.has(client2.sessionId)).toBeTruthy();

    client1.leave();
    await room.waitForNextPatch();

    expect(room.state.player_map.has(client1.sessionId)).toBeFalsy();

    client1 = await colyseus.connectTo(room);
    expect(room.state.player_map.has(client1.sessionId)).toBeTruthy();
  });

  it("clients can connect and remove in Endgame state", async () => {
    const room = await colyseus.createRoom("poker", {}) as PokerRoom;
    room.gameState = Gamestate.EndGame;

    let client1 = await colyseus.connectTo(room);
    expect(room.state.player_map.has(client1.sessionId)).toBeTruthy();

    const client2 = await colyseus.connectTo(room);
    expect(room.state.player_map.has(client2.sessionId)).toBeTruthy();

    client1.leave();
    await room.waitForNextPatch();

    expect(room.state.player_map.has(client1.sessionId)).toBeFalsy();

    client1 = await colyseus.connectTo(room);
    expect(room.state.player_map.has(client1.sessionId)).toBeTruthy();
  });

  it("when every player readys up the game starts", async () => {
    const num_client_cases = [2, 3, 6];
    for (let num_clients of num_client_cases) {

      const room = await colyseus.createRoom("poker", {}) as PokerRoom;
      let clients = [];
      for (let i = 0; i < num_clients; i++) {
        expect(room.gameState).toEqual(Gamestate.Preround);
        clients.push(await colyseus.connectTo(room));
      }
      expect(room.gameState).toEqual(Gamestate.Preround);

      for (let client of clients) {
        expect(room.gameState).toEqual(Gamestate.Preround);
        client.send("ready", READY);
        const [c, message] = await room.waitForMessage("ready");
      }
    }
  });

  it("2/3 players: when the round starts, player 0 is the dealer and has the turn", async () => {
    let num_client_cases = [2, 3];
    for (let num_clients of num_client_cases) {
      let game = await createRoomWithClients(colyseus, num_clients);
      await game.ready();

      expect(game.getPlayer(0).isTurn).toBeTruthy();
      expect(game.getPlayer(0).isDealer).toBeTruthy();
    }
  });

  it("4/5/6 players: when the round starts, player 0 is the dealer and does not have the turn", async () => {
    let num_clients = 4;

    let game = await createRoomWithClients(colyseus, num_clients);
    await game.ready();

    expect(game.getPlayer(0).isDealer).toBeTruthy();
    expect(game.getPlayer(0).isTurn).toBeFalsy();
  });

  it("when a player folds they leave the round and their turn ends", async () => {
    let num_client_cases = [2];
    for (let num_clients of num_client_cases) {
      let game = await createRoomWithClients(colyseus, num_clients);
      await game.ready();

      const [c, message] = await game.action(0, "fold", {});

      expect(game.getPlayer(0).isTurn).toBeFalsy();
      expect(game.getPlayer(0).inRound).toBeFalsy();
    }
  });

  it("when a player folds play moves to the next player", async () => {
    let num_clients = 4;
    let game = await createRoomWithClients(colyseus, num_clients);
    await game.ready();

    expect(game.getPlayer(3).isTurn).toBeTruthy();

    const [c, message] = await game.action(3, "fold", {});

    expect(game.getPlayer(3).isTurn).toBeFalsy();
    expect(game.getPlayer(3).inRound).toBeFalsy();
    expect(game.getPlayer(0).isTurn).toBeTruthy();
  });

  it("when a player folds and the next player is skipped, play moves to the next player still", async () => {
    let num_clients = 4;
    let game = await createRoomWithClients(colyseus, num_clients);
    await game.ready();

    game.room.state.player_map.get(game.clients[0].sessionId).inRound = false;

    const [c, message] = await game.action(3, "fold", {});

    expect(game.getPlayer(3).isTurn).toBeFalsy();
    expect(game.getPlayer(3).inRound).toBeFalsy();
    expect(game.getPlayer(0).isTurn).toBeFalsy();
    expect(game.getPlayer(1).isTurn).toBeTruthy();
  });

  it("when a new round ends and everyone readys up, we start a new round", async () => {
    let num_clients = 3;

    let game = await createRoomWithClients(colyseus, num_clients);
    await game.ready();

    let [c, message] = await game.action(0, "fold", {});
    [c, message] = await game.action(1, "fold", {});

    expect(game.room.gameState).toEqual(Gamestate.EndGame);

    await game.ready();

    expect(game.room.gameState).toEqual(Gamestate.Preflop);
  });

  it("when a new round starts, the dealer position moves", async () => {
    let num_clients = 3;

    let game = await createRoomWithClients(colyseus, num_clients);
    await game.ready();

    expect(game.getPlayer(0).isDealer).toBeTruthy();

    let [c, message] = await game.action(0, "fold", {});
    [c, message] = await game.action(1, "fold", {});

    for (let client of game.clients) {
      client.send("ready", READY);
      const [c, message] = await game.room.waitForMessage("ready");
    }

    expect(game.getPlayer(0).isDealer).toBeFalsy();
    expect(game.getPlayer(1).isDealer).toBeTruthy();
  });

  it("when a new round starts and a player folds, play moves to the next player", async () => {
    let num_clients = 3;

    let game = await createRoomWithClients(colyseus, num_clients);
    await game.ready();

    let [c, message] = await game.action(0, "fold", {});
    [c, message] = await game.action(1, "fold", {});

    await game.ready();

    expect(game.getPlayer(1).isTurn).toBeTruthy();

    [c, message] = await game.action(1, "fold", {});

    expect(game.getPlayer(1).isTurn).toBeFalsy();
    expect(game.getPlayer(1).inRound).toBeFalsy();
    expect(game.getPlayer(2).isTurn).toBeTruthy();
  });

  it("when a player raises, they put money in the pot", async () => {
    let num_clients = 3;

    let game = await createRoomWithClients(colyseus, num_clients);
    await game.ready();
    let room = game.room;
    let clients = game.clients;

    let startingBB = room.state.player_map.get(clients[0].sessionId).bb;
    let startingPot = room.state.pot;
    let startingBet = room.currentBet;
    let lastRaise = room.lastRaise;

    let raiseAmt = 10;

    let [c, message] = await game.action(0, "raise", raise(raiseAmt));

    expect(game.getPlayer(0).bb).toEqual(startingBB - raiseAmt);
    expect(game.getPlayer(0).lastAction).toEqual(RAISE);
    expect(room.state.pot).toEqual(startingPot + raiseAmt);
    expect(room.currentBet).toEqual(raiseAmt);
    expect(room.lastRaise).toEqual(raiseAmt - startingBet);
  });

  it("when a player calls a raise, they put money in the pot", async () => {
    let num_clients = 3;

    let game = await createRoomWithClients(colyseus, num_clients);
    await game.ready();
    let room = game.room;
    let clients = game.clients;

    let startingBB = game.getPlayer(1).bb;
    let startingBet = game.getPlayer(1).currentBet;

    let raiseAmt = 10;

    let [c, message] = await game.action(0, "raise", raise(raiseAmt));

    let startingPot = room.state.pot;

    [c, message] = await game.action(1, "call", {});

    expect(game.getPlayer(1).bb).toEqual(startingBB - raiseAmt + startingBet);
    expect(room.state.pot).toEqual(startingPot + raiseAmt - startingBet);
  });

  it("when a player calls a bet of more chips than they have, they go all in", async () => {
    let num_clients = 3;

    let game = await createRoomWithClients(colyseus, num_clients);
    await game.ready();
    let room = game.room;
    let clients = game.clients;

    game.getPlayer(1).bb = 20;
    game.getPlayer(0).bb = 40;

    let [c, message] = await game.action(0, "raise", raise(40));

    expect(game.getPlayer(1).isTurn).toBeTruthy();
    [c, message] = await game.action(1, "call", {});

    expect(game.getPlayer(1).bb).toEqual(0);
    expect(room.state.pot).toEqual(1.5 + 40 + 20);
    expect(game.getPlayer(1).isTurn).toBeFalsy();
  });

  it("when a player joins mid-round, they sit left of the dealer", async () => {
    let num_clients = 3;

    let game = await createRoomWithClients(colyseus, num_clients);
    await game.ready();
    let room = game.room;
    let clients = game.clients;

    let newClient = await colyseus.connectTo(room);

    expect(room.state.player_map.get(newClient.sessionId).inRound).toBeFalsy();

    let newPlayerPos = room.state.player_order.indexOf(newClient.sessionId);
    let rightPlayerIndex = (newPlayerPos - 1 + room.state.player_order.length) % room.state.player_order.length;
    let rightPlayer = room.state.player_map.get(room.state.player_order[rightPlayerIndex]);

    expect(rightPlayer.isDealer).toBeTruthy();
  });

  it("when players call it all the way, then the players must show their hands", async () => {
    let num_clients = 3;

    let game = await createRoomWithClients(colyseus, num_clients);
    await game.ready();
    let room = game.room;
    let clients = game.clients;

    await game.action(0, "call", {})
    await game.action(1, "call", {})
    await game.action(2, "fold", {})

    for (let i = 0; i < 3; i++) {
      await game.action(1, "call", {})
      await game.action(0, "call", {})
    }

    
    expect(game.getPlayer(0).shouldShowHand).toBeTruthy();
    expect(game.getPlayer(1).shouldShowHand).toBeTruthy();
    expect(game.getPlayer(2).shouldShowHand).toBeFalsy();
  });

  it("when players fold, then the players don't need to their hands", async () => {
    let num_clients = 2;

    let game = await createRoomWithClients(colyseus, num_clients);
    await game.ready();
    let room = game.room;
    let clients = game.clients;

    for (let i = 0; i < 3; i++) {
      for (let client of clients) {
        client.send("call", {});
        let [c, message] = await room.waitForMessage("call");
      }
    }

    let [c, message] = await game.action(0, "fold", {});

    expect(room.gameState).toEqual(Gamestate.EndGame);

    for (let player of room.state.player_map.values()) {
      expect(player.shouldShowHand).toBeFalsy();
    }
  });

  it("in a 2-player game, the dealer is the SB and the other player is the BB", async () => {
    let num_clients = 2;

    let game = await createRoomWithClients(colyseus, num_clients);

    let startingBB = game.getPlayer(0).bb;

    await game.ready();
    let room = game.room;

    expect(game.getPlayer(0).isDealer).toBeTruthy();
    expect(game.getPlayer(0).bb).toEqual(startingBB - 0.5);
    expect(game.getPlayer(0).currentBet).toEqual(0.5);
    expect(game.getPlayer(1).bb).toEqual(startingBB - 1);
    expect(game.getPlayer(1).currentBet).toEqual(1);
    expect(room.state.pot).toEqual(1.5);
  });

  it("when the player who will be sb/bb/other are  >=1.5/2/1 bb when the round ends, they remain in the game", async () => {
    let num_clients = 3;

    let game = await createRoomWithClients(colyseus, num_clients);
    await game.ready();
    let room = game.room;
    let clients = game.clients;

    game.getPlayer(0).bb = 1.5; // is button: will become sb
    game.getPlayer(1).bb = 2.0; // is sb: will become bb
    game.getPlayer(2).bb = 1.0; // is bb: will become button
    room.state.pot = 0;

    await game.action(0, "call", {})
    await game.action(1, "call", {})
    await game.action(2, "call", {})
    for (let i = 0; i < 4; i++) {
      await game.action(1, "call", {})
      await game.action(2, "call", {})
      await game.action(0, "call", {})
    }

    expect(room.gameState).toEqual(Gamestate.EndGame);
    
    expect(room.state.player_map.has(game.getPlayer(0).id)).toBeTruthy();
    expect(room.state.player_map.has(game.getPlayer(1).id)).toBeTruthy();
    expect(room.state.player_map.has(game.getPlayer(2).id)).toBeTruthy();
  });

  it("when the player would be kicked but wins a pot, they stay in the game", async () => {
    let num_clients = 3;

    let game = await createRoomWithClients(colyseus, num_clients);
    await game.ready();
    let room = game.room;
    let clients = game.clients;

    game.getPlayer(0).bb = 1; // is button: will become sb
    game.getPlayer(1).bb = 2.0; // is sb: will become bb
    game.getPlayer(2).bb = 0; // is bb: will become button
    room.state.pot = 10;

    await game.action(0, "call", {})
    await game.action(1, "call", {})
    await game.action(2, "call", {})
    for (let i = 0; i < 4; i++) {
      await game.action(1, "call", {})
      await game.action(2, "call", {})
      await game.action(0, "call", {})
    }

    expect(1).toEqual(2);
  });

  it("when the player who will be sb/bb/other are < 1.5/2/1 bb when the round ends, they are kicked from the game", async () => {
    let num_clients = 3;

    let game = await createRoomWithClients(colyseus, num_clients);
    await game.ready();
    let room = game.room;
    let clients = game.clients;

    game.getPlayer(0).bb = 1.4; // is button: will become sb
    game.getPlayer(1).bb = 1.9; // is sb: will become bb
    game.getPlayer(2).bb = 0.9; // is bb: will become button
    room.state.pot = 0;

    await game.action(0, "call", {})
    await game.action(1, "call", {})
    await game.action(2, "call", {})
    for (let i = 0; i < 4; i++) {
      await game.action(1, "call", {})
      await game.action(2, "call", {})
      await game.action(0, "call", {})
    }

    expect(room.gameState).toEqual(Gamestate.EndGame);
    
    expect(room.state.player_map.has(game.getPlayer(0).id)).toBeFalsy();
    expect(room.state.player_map.has(game.getPlayer(1).id)).toBeFalsy();
    expect(room.state.player_map.has(game.getPlayer(2).id)).toBeFalsy();
    expect(room.state.numSpectators).toEqual(3);
  });
});
