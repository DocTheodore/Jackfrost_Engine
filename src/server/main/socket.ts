import { Server, Socket } from "socket.io";
import { MAX_PLAYERS } from "./config.js";
import { playerCount, addPlayer, getAllPlayers, removePlayer, assignPlayerId, releasePlayerId, unavailableColors } from "./players.js";
import { PlayerData } from "../types/playertypes.js";
import { selectedColor } from "../../client/web/selectcolor.js";

// Broadcast de dados para todos os jogadores (io)
// Envio de dados para um jogadores especifico (socket)

export function registerSocketEvents(io: Server) {
    io.on("connection", (socket: Socket) => {
        console.log(`Nova conexão: ${socket.id}\n`);

        // =============================
        // Regras de conexão
        // =============================
        // Limite de jogadores
        if(playerCount() >= MAX_PLAYERS) {
            socket.emit("serverFull");
            socket.disconnect();
            return;
        }
        const clientId = assignPlayerId();
        if(!clientId) {
            socket.emit("serverFull");
            socket.disconnect();
            return;
        }

        // =============================
        // Configurações do jogador atual
        // =============================
        const clientIp = socket.request.socket.remoteAddress?.replace(/^::ffff:/, "") ?? "unknown";

        const currentPlayer: PlayerData = {
            socketId: socket.id,
            ipAddress: clientIp,
            playerId: clientId,
            playerName: ''
        }
        addPlayer(currentPlayer);

        console.log(`Jogadores atuais:`, getAllPlayers());
        console.log(`IP do jogador atual: ${clientIp}\n`);

        // =============================
        // Metodos de rede
        // =============================

        // Informações iniciais do jogador
        socket.emit("login", true, socket.id, getAllPlayers());

        // Evento de teste
        socket.on("hello", () => {
            console.log(`Hello do jogador ${currentPlayer.playerId}\n`);
        });

        // =============================
        // Em caso de desconexão
        // =============================
        socket.on("disconnect", () => {
            console.log(`Jogador ${currentPlayer.playerId} [${clientIp}] desconectado\n`);
            removePlayer(clientIp);
            releasePlayerId(clientId);
        });

        socket.on("clientAcepted", () => {
            console.log("Cliente confirmou a conexão");
            socket.emit("availableColors", unavailableColors);
        });

        socket.on("sendLoginData", (data:{name:string, color:number}) => {
            currentPlayer.playerName = data.name;
            unavailableColors.push(data.color);
            console.log(`\n\nJogadores atuais:`, getAllPlayers());
            io.emit("availableColors", unavailableColors);
        });
    });
}