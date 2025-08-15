// server/index.ts
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { getLocalIpAddress } from "../utils/ipaddress.js";
import { servertime } from "../utils/servertime.js";
import { registerSocketEvents } from "./socket.js";
import { MAX_PLAYERS, SERVER_PORT } from "./config.js";

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.static("public"));

registerSocketEvents(io);

servertime.start((delta, tick) => {
  io.emit("serverTick", tick);
});

server.listen(SERVER_PORT, () => {
  console.clear();
  console.log(`Servidor rodando em http://${getLocalIpAddress()}:${SERVER_PORT}`);
});