import { Server, Socket } from "socket.io";
import { ServerTime } from "./settings/servertime.js";
export interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
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