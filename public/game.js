const socket = io();
socket.on('connect', () => {
    console.log('Conectado ao servidor via Socket.IO!');
});

console.log("Aplicação do cliente iniciado");