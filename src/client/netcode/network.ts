declare const io:any;

console.log("teste em tempo real");

const socket:any = io();

// =============================
// Funções de Envio
// =============================

socket.emit("hello");

// =============================
// Funções Recebidas
// =============================

socket.on("noArg", () => {console.log("Nenhum argumento")});