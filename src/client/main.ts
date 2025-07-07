import { GameLoop } from '../engine/index.js';
import { io } from 'socket.io-client';

export const socket = io();

console.log("Olá Mundo");

const Update = (dt: number) => {
    console.log('teste', dt);
}

GameLoop.Start(Update);