import http from "http";
import express from "express";
import cors from "cors";
import {Server} from "colyseus";
import {monitor} from "@colyseus/monitor";
import {PokerRoom} from "./PokerRoom";
import {join} from "path";


const app = express()

const staticPath = join(__dirname, '../public');
console.log(`Using static path '${staticPath}'`);
app.use(express.static(staticPath));

app.use(cors());
app.use(express.json())

const INDEX = "/dist/index.html";
app.use((req, res) => {
    if(req.url == "/" || req.url == "") {
        res.sendFile(INDEX, { root:  __dirname})
    } else {
        res.sendFile(req.url, { root:  "backend/dist"})
    }
})

// register colyseus monitor AFTER registering your room handlers
app.use("/colyseus", monitor());

const server = http.createServer(app);
const gameServer = new Server({
    server,
});

// register our PokerRoom
gameServer.define('poker', PokerRoom);

export {gameServer};
