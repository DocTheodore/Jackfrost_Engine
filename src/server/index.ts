// server.ts
import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import { createServer } from "http";
import { Server } from "socket.io";

import type { 
  ServerToClientEvents,
  ClientToServerEvents,
  InterServerEvents,
  SocketData
} from "./server";

import { ServerTime } from "./settings/servertime.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = createServer(app);

// 🔹 Cria Socket.IO conectado ao mesmo server
const io = new Server<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData
>(server);

const servertime = ServerTime

servertime.Start((delta, time) => {
  io.emit("serverTick", servertime.tick);
})

io.on("connection", (socket) => {
  console.log("Novo cliente conectado: ", socket.id);

  socket.emit("noArg");
  socket.emit("withAck", "Teste", (e) => {
    console.log("Ack recebido:", e);
  });
  socket.emit("basicEmit", 4, "4", Buffer.from([3]));

  io.emit("noArg");
  io.to("room").emit("basicEmit", 5, "5", Buffer.from([7]));

  socket.on("hello", () => {
    console.log("hello ", socket.id);
    console.log("basicEmit", ServerTime.tick, "tick atual", Buffer.from([0]));
  });
});

// Configurações do Express
app.use('/build', express.static(path.join(__dirname, '../../build')));
app.use('/node_modules', express.static(path.join(__dirname, '../../node_modules')));

app.get("/", (req:any, res:any) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
  console.log("Página carregada");
});

server.listen(3000, () => {
  console.clear();
  console.log("Servidor rodando em http://localhost:3000");
});
