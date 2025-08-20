// server/index.ts
import express from "express";
import path from "path";
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
const __dirname = path.dirname(new URL(import.meta.url).pathname);

app.use(express.static("public"));
app.use('/build', express.static(path.join(__dirname, '../../../build')));
app.use('/node_modules', express.static(path.join(__dirname, '../../node_modules')));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
    console.log("Página carregada");
});

registerSocketEvents(io);

servertime.Start((delta, tick) => {
  //io.emit("serverTick", tick);
});

try{
  server.listen(SERVER_PORT, () => {
    console.clear();
    console.log(`Servidor rodando em http://${getLocalIpAddress()}:${SERVER_PORT}`);
  });
} catch (error) {
  console.error("Erro ao iniciar o servidor:", error);
}