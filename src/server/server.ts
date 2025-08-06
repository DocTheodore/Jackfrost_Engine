import { Server, Socket } from "socket.io";
export interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
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

const io = new Server<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData
>();

io.on("connect", (socket) => {
  socket.emit("noArg");
  socket.emit("withAck", "Teste", (e)=>{
    console.log(e);
  });
  socket.emit("basicEmit", 4, "4", Buffer.from([3]));
  
  io.emit("noArg");
  
  io.to("room").emit("basicEmit", 5, "5", Buffer.from([7]));

  socket.on("hello", () => {
    console.log("hello ", socket.id);
  })
});

io.serverSideEmit("ping");

io.on("ping", () => {
  console.log("pong");
});

