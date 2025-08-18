// server/index.ts
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { getLocalIpAddress } from "../utils/ipaddress.js";
import { ServerTime } from "../utils/servertime.js";
import { registerSocketEvents } from "./socket.js";
import { MAX_PLAYERS, SERVER_PORT } from "./config.js";

const app = express();
const server = createServer(app);
const servertime = ServerTime;
const io = new Server(server);

app.use(express.static("public"));

registerSocketEvents(io);

servertime.Start((delta, tick) => {
  io.emit("serverTick", tick);
});

server.listen(SERVER_PORT, () => {
  console.clear();
  console.log(`Servidor rodando em http://${getLocalIpAddress()}:${SERVER_PORT}`);
});