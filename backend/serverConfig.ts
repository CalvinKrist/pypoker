import http from "http";
import express from "express";
import cors from "cors";
import {Server} from "colyseus";
import {monitor} from "@colyseus/monitor";

import {PokerRoom} from "./PokerRoom";
import {join} from "path";

const port = Number(process.env.PORT || 2567);
const app = express()

const staticPath = join(__dirname, '../public');
console.log(`Using static path '${staticPath}'`);
app.use(express.static(staticPath));

app.use(cors());
app.use(express.json())

const server = http.createServer(app);
const gameServer = new Server({
    server,
});

// register our PokerRoom
gameServer.define('poker', PokerRoom);

export {gameServer};
