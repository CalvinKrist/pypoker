# Description

PyPoker is a web-based game of no-limit Texas Hold'em. It can be used to play against other humans, or against bots.

### How to Use
1. Ensure npm is installed
2. Run `npm start`
3. Go to `localhost:1234` to play
3. Run backend tests with `npm test`

### Tech stack

* **backend**: uses [Colyseus](https://www.colyseus.io/) to create a stateful, NodeJS-based backend. The most important file in the backend is [PokerRoom.ts](./backend/PokerRoom.ts). This runs all the game logic.
* **frontend**: uses [Colyseus](https://www.colyseus.io/) to connect to the backend. Robots just use Typescript, while the human graphics display uses [Phaser 3](https://phaser.io/phaser3) to render the game.
