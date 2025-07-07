import { GameLoop } from '../engine/index.js';
try {
    export const socket = io();
}
catch (err) {
    console.log(err);
}
console.log("Olá Mundo");
const Update = (dt) => {
    console.log('teste', dt);
};
GameLoop.Start(Update);
