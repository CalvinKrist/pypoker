import { ColyseusTestServer, boot } from "@colyseus/testing";
import {gameServer} from "../backend/serverConfig";
import {PokerRoom} from "../backend/PokerRoom";
import { READY } from "../messages/readystate";
import { raise } from "../messages/playeraction";
import {Gamestate} from "../backend/PokerRoom";

console.warn = function() {}

class Game {
  room: PokerRoom;
  clients: any;

  constructor(room: PokerRoom, clients: any) {
    this.room = room;
    this.clients = clients;
  }

  async ready() {
    for(let client of this.clients) {
      client.send("ready", READY);
      const [ c, message ] = await this.room.waitForMessage("ready");
    }
  }
}

async function createRoomWithClients(colyseus: ColyseusTestServer, num_clients: number) {
  const room = await colyseus.createRoom("poker", {}) as PokerRoom;
  let clients = [];
  for(let i = 0; i < num_clients; i++) {
    clients.push(await colyseus.connectTo(room));
  }

  return new Game(room, clients)
}

describe("testing your Colyseus app", () => {
    let colyseus: ColyseusTestServer;
  
    beforeAll(async () => colyseus = await boot(gameServer));
    afterAll(async () => await colyseus.shutdown());
  
    beforeEach(async () => await colyseus.cleanup());
  
    it("server starts in Preround state", async() => {
      const room = await colyseus.createRoom("poker", {}) as PokerRoom;
  
      expect(room.gameState).toEqual(Gamestate.Preround);
    });

    it("clients can connect and remove in Preflop state", async() => {
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

    it("clients can connect and remove in Endgame state", async() => {
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

    it("when every player readys up the game starts", async() => {
      const num_client_cases = [2, 3, 6];
      for(let num_clients of num_client_cases) {

        const room = await colyseus.createRoom("poker", {}) as PokerRoom;
        let clients = [];
        for(let i = 0; i < num_clients; i++) {
          expect(room.gameState).toEqual(Gamestate.Preround);
          clients.push(await colyseus.connectTo(room));
        }
        expect(room.gameState).toEqual(Gamestate.Preround);

        for(let client of clients) {
          expect(room.gameState).toEqual(Gamestate.Preround);
          client.send("ready", READY);
          const [ c, message ] = await room.waitForMessage("ready");
        }
      }
    });

    it("2/3 players: when the round starts, player 0 is the dealer and has the turn", async() => {
      let num_client_cases = [2, 3];
      for(let num_clients of num_client_cases) { 
        let game = await createRoomWithClients(colyseus, num_clients);
        await game.ready();

        expect(game.room.state.player_map.get(game.clients[0].sessionId).isTurn).toBeTruthy();
        expect(game.room.state.player_map.get(game.clients[0].sessionId).isDealer).toBeTruthy();
      }
    });

    it("when the round starts, player 0 is the dealer and does not have the turn", async() => {
      let num_clients = 4;
      
      let game = await createRoomWithClients(colyseus, num_clients);
      await game.ready();

      expect(game.room.state.player_map.get(game.clients[0].sessionId).isDealer).toBeTruthy();
      expect(game.room.state.player_map.get(game.clients[0].sessionId).isTurn).toBeFalsy();
    });

    it("when a player folds they leave the round and their turn ends", async() => {
      let num_client_cases = [2];
      for(let num_clients of num_client_cases) {        
        let game = await createRoomWithClients(colyseus, num_clients);
        await game.ready();

        game.clients[0].send("fold", {});
        const [ c, message ] = await game.room.waitForMessage("fold");

        expect(game.room.state.player_map.get(game.clients[0].sessionId).isTurn).toBeFalsy();
        expect(game.room.state.player_map.get(game.clients[0].sessionId).inRound).toBeFalsy();
      }
    });

    it("when a player folds play moves to the next player", async() => {
      let num_clients = 4;
      let game = await createRoomWithClients(colyseus, num_clients);
      await game.ready();

      expect(game.room.state.player_map.get(game.clients[3].sessionId).isTurn).toBeTruthy();

      game.clients[3].send("fold", {});
      let [ c, message ] = await game.room.waitForMessage("fold");

      expect(game.room.state.player_map.get(game.clients[3].sessionId).isTurn).toBeFalsy();
      expect(game.room.state.player_map.get(game.clients[3].sessionId).inRound).toBeFalsy();
      expect(game.room.state.player_map.get(game.clients[0].sessionId).isTurn).toBeTruthy();   
    });

    it("when a player folds and the next player is skipped, play moves to the next player still", async() => {
      let num_clients = 4;
      let game = await createRoomWithClients(colyseus, num_clients);
      await game.ready();

      game.room.state.player_map.get(game.clients[0].sessionId).inRound = false;

      game.clients[3].send("fold", {});
      let [ c, message ] = await game.room.waitForMessage("fold");

      expect(game.room.state.player_map.get(game.clients[3].sessionId).isTurn).toBeFalsy();
      expect(game.room.state.player_map.get(game.clients[3].sessionId).inRound).toBeFalsy();
      expect(game.room.state.player_map.get(game.clients[0].sessionId).isTurn).toBeFalsy();
      expect(game.room.state.player_map.get(game.clients[1].sessionId).isTurn).toBeTruthy();
    });

    it("when a new round ends and everyone readys up, we start a new round", async() => {
      let num_clients = 3;
      
      let game = await createRoomWithClients(colyseus, num_clients);
      await game.ready();

      game.clients[0].send("fold", {});
      let [ c, message ] = await game.room.waitForMessage("fold");
      game.clients[1].send("fold", {});
      [ c, message ] = await game.room.waitForMessage("fold");

      expect(game.room.gameState).toEqual(Gamestate.EndGame);

      for(let client of game.clients) {
        client.send("ready", READY);
        const [ c, message ] = await game.room.waitForMessage("ready");
      }

      expect(game.room.gameState).toEqual(Gamestate.Preflop);
    });

    it("when a new round starts, the dealer position moves", async() => {
      let num_clients = 3;
      
      let game = await createRoomWithClients(colyseus, num_clients);
      await game.ready();

      expect(game.room.state.player_map.get(game.clients[0].sessionId).isDealer).toBeTruthy();

      game.clients[0].send("fold", {});
      let [ c, message ] = await game.room.waitForMessage("fold");
      game.clients[1].send("fold", {});
      [ c, message ] = await game.room.waitForMessage("fold");

      for(let client of game.clients) {
        client.send("ready", READY);
        const [ c, message ] = await game.room.waitForMessage("ready");
      }

      expect(game.room.state.player_map.get(game.clients[0].sessionId).isDealer).toBeFalsy();
      expect(game.room.state.player_map.get(game.clients[1].sessionId).isDealer).toBeTruthy();
    });

    it("when a new round starts and a player folds, play moves to the next player", async() => {
      let num_clients = 3;
      
      let game = await createRoomWithClients(colyseus, num_clients);
      await game.ready();

      game.clients[0].send("fold", {});
      let [ c, message ] = await game.room.waitForMessage("fold");
      game.clients[1].send("fold", {});
      [ c, message ] = await game.room.waitForMessage("fold");

      for(let client of game.clients) {
        client.send("ready", READY);
        const [ c, message ] = await game.room.waitForMessage("ready");
      }

      expect(game.room.state.player_map.get(game.clients[1].sessionId).isTurn).toBeTruthy();

      game.clients[1].send("fold", {});
      [ c, message ] = await game.room.waitForMessage("fold");

      expect(game.room.state.player_map.get(game.clients[1].sessionId).isTurn).toBeFalsy();
      expect(game.room.state.player_map.get(game.clients[1].sessionId).inRound).toBeFalsy();
      expect(game.room.state.player_map.get(game.clients[2].sessionId).isTurn).toBeTruthy();
    });

    it("when a player raises, they put money in the pot", async() => {
      let num_clients = 3;
      
      let game = await createRoomWithClients(colyseus, num_clients);
      await game.ready();
      let room = game.room;
      let clients = game.clients;

      let startingBB = room.state.player_map.get(clients[0].sessionId).bb;
      let startingPot =  room.state.pot;
      let startingBet = room.currentBet;
      let lastRaise = room.lastRaise;

      let raiseAmt = 10;

      clients[0].send("raise", raise(raiseAmt));
      let [ c, message ] = await room.waitForMessage("raise");

      expect(room.state.player_map.get(clients[0].sessionId).bb).toEqual(startingBB - raiseAmt);
      expect(room.state.pot).toEqual(startingPot + raiseAmt);
      expect(room.currentBet).toEqual(raiseAmt);
      expect(room.lastRaise).toEqual(raiseAmt - startingBet);
    });

    it("when a player calls a raise, they put money in the pot", async() => {
      let num_clients = 3;
      
      let game = await createRoomWithClients(colyseus, num_clients);
      await game.ready();
      let room = game.room;
      let clients = game.clients;

      let startingBB = room.state.player_map.get(clients[1].sessionId).bb;
      let startingBet = room.state.player_map.get(clients[1].sessionId).currentBet;

      let raiseAmt = 10;

      clients[0].send("raise", raise(raiseAmt));
      let [ c, message ] = await room.waitForMessage("raise");

      let startingPot =  room.state.pot;

      clients[1].send("call", {});
      [ c, message ] = await room.waitForMessage("call");

      expect(room.state.player_map.get(clients[1].sessionId).bb).toEqual(startingBB - raiseAmt + startingBet);
      expect(room.state.pot).toEqual(startingPot + raiseAmt - startingBet);
    });

    it("when a player joins mid-round, they sit left of the dealer", async() => {
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

    it("when players call it all the way, then the players must show their hands", async() => {
      let num_clients = 2;
      
      let game = await createRoomWithClients(colyseus, num_clients);
      await game.ready();
      let room = game.room;
      let clients = game.clients;

      for(let i = 0; i < 4; i++) {
        for(let client of clients) {
          client.send("call", {});
          let [ c, message ] = await room.waitForMessage("call");
        }
      }

      for(let player of room.state.player_map.values()) {
        expect(player.shouldShowHand).toBeTruthy();
      }
    });

    it("when players fold, then the players don't need to their hands", async() => {
      let num_clients = 2;
      
      let game = await createRoomWithClients(colyseus, num_clients);
      await game.ready();
      let room = game.room;
      let clients = game.clients;

      for(let i = 0; i < 3; i++) {
        for(let client of clients) {
          client.send("call", {});
          let [ c, message ] = await room.waitForMessage("call");
        }
      }

      clients[0].send("fold", {});
      let [ c, message ] = await room.waitForMessage("fold");

      expect(room.gameState).toEqual(Gamestate.EndGame);

      for(let player of room.state.player_map.values()) {
        expect(player.shouldShowHand).toBeFalsy();
      }
    });

    describe("Minimum raising rules are correct", () => {
      it("test case 1", async() => {
        let num_clients = 2;
        
        let game = await createRoomWithClients(colyseus, num_clients);
        await game.ready();
        let room = game.room;
        let clients = game.clients;
  
        
      });
    });
    
  });
