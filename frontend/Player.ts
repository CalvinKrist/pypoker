import { Room } from "colyseus.js";
import { ErrorMessage } from "../messages/error"

export interface Player {
    updateState(newState: any): void;
    onStateChanges(changes: any): void;
    setUserId(userId: string): void;
    setRoom(room: Room): void;
    onServerError(error: ErrorMessage): void;
}
