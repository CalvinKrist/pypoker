import {gameServer} from "./serverConfig";

const port = Number(process.env.PORT || 2567);

gameServer.listen(port);
console.log(`Listening on ws://localhost:${port}`)

export {gameServer};
