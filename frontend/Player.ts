import { Room } from "colyseus.js";

export interface Player {
    updateState(newState);
    onStateChanges(changes);
    setUserId(userId: string);
    setRoom(room: Room);
}
