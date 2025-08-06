declare const io:any;

console.log("teste de servidor");

const socket = io();

socket.emit("hello");