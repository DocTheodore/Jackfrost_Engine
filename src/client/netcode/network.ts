declare const io:any;

console.log("teste em tempo real");

const socket:any = io();

// =============================
// Funções de Envio
// =============================

export const debbugNet = () => {
    socket.emit("hello");
}

// =============================
// Funções Recebidas
// =============================

socket.on("noArg", () => {console.log("Nenhum argumento")});
socket.on("serverTick", (tick:number) => console.log(`tick atual do servidor: ${tick} `));