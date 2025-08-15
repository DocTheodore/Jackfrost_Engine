import { PlayerData } from "./playertypes.js";

export interface ServerToClientEvents {
  login: (acepted:boolean, clientId:string, currentPlayers:Array<PlayerData>) => void;
  serverTick: (d: number) => void;
}

export interface ClientToServerEvents {
  hello: () => void;
  tester: () => void;
}

export interface InterServerEvents {
  ping: () => void;
}

export interface SocketData {
  name: string;
  age: number;
}
