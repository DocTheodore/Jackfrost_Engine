import { PlayerData } from "../../server/types/playertypes.js";

declare const io:any;
const socket:any = io();

console.log("Abrindo conexão");
// =============================
// Variaveis
// =============================
export const Netdata = {
    myId: "",
    serverTick: 0,
};
export const localData = {
    name: "",
}

// =============================
// Funções de Envio
// =============================

export const debbugNet = () => {
    socket.emit("hello");
}

// =============================
// Funções Recebidas
// =============================
socket.on("connection", () => {
    console.log("Servidor encontrado");
});
socket.on("login", (acepted:boolean, clientId:string, currentPlayers:Array<PlayerData>) => {
    if(!acepted) {
        alert("Conexão recusada");
        return
    }
    console.log(`Conectado como [${clientId}]`)
    console.log(`Jogadores conectados: `, currentPlayers);
    Netdata.myId = clientId;
})

socket.on("noArg", () => {console.log("Nenhum argumento")});

socket.on("serverTick", (tick:number) => {
    Netdata.serverTick = tick;
    //console.log(`tick atual do servidor: ${tick} `);
});