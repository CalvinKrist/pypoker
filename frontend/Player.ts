import { Room } from "colyseus.js";
import { ErrorMessage } from "../messages/error"

export interface Player {
    updateState(newState);
    onStateChanges(changes);
    setUserId(userId: string);
    setRoom(room: Room);
    onServerError(error: ErrorMessage);
}
