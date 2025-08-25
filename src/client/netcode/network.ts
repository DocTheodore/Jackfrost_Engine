import { PlayerData } from "../../server/types/playertypes.js";
import { setSelectedColor, resetSelectedColor } from "../web/selectcolor.js";

declare const io: any;
let socket: any = io();

// Função de conexão
const connectSocket = () => {
    socket = io();

    // Quando o socket se conecta
    socket.on("connect", () => {
        console.log("Conexão estabelecida");
    });

    // Se houver erro de conexão
    socket.on("connect_error", (error: any) => {
        console.error("Erro de conexão:", error);
        setTimeout(connectSocket, 1000);
    });
};
connectSocket();

// =============================
// Variaveis
// =============================
export const Netdata = {
    myId: "",
    serverTick: 0,
};
export const localData = {
    name: "",
};

// =============================
// Funções de Envio
// =============================
export const debbugNet = () => {
    //socket.emit("hello");
}

export function __sendLoginData(data: {name: string, color: number}) {
    socket.emit("sendLoginData", data);
}

function __clientAcepted() {
    socket.emit("clientAcepted");
}

// =============================
// Funções Recebidas
// =============================
socket.on("connection", () => {
    console.log("Servidor encontrado");
});

socket.on("login", (acepted: boolean, clientId: string, currentPlayers: Array<PlayerData>) => {
    if (!acepted) {
        alert("Conexão recusada");
        return;
    }
    console.log(`Conectado como [${clientId}]`);
    console.log(`Jogadores conectados: `, currentPlayers);
    Netdata.myId = clientId;

    __clientAcepted();
});

socket.on("availableColors", (unavailableColors: number[]) => {
    console.log("Cores indisponiveis:", unavailableColors);

    // Reset
    resetSelectedColor();
    
    // Marcar cores indisponíveis
    document.querySelectorAll(".playerColorBox").forEach((el) => {
        el.classList.remove("unavailable");
    });

    unavailableColors.forEach((colorId) => {
        const el = document.getElementById(`pc_${colorId}`);
        if (el) el.classList.add("unavailable");
    });

    // Pegar a primeira cor disponível
    const firstAvailable = Array.from(document.querySelectorAll(".playerColorBox"))
        .map((el) => Number(el.id.replace(/^pc_/, "")))
        .sort((a, b) => a - b)
        .find((id) => !unavailableColors.includes(id));

    if (firstAvailable !== undefined) {
        setSelectedColor(firstAvailable);
        console.log("Cor selecionada automaticamente:", firstAvailable);
    }
});

socket.on("noArg", () => {console.log("Nenhum argumento")});

socket.on("serverTick", (tick: number) => {
    Netdata.serverTick = tick;
    //console.log(`tick atual do servidor: ${tick}`);
});
