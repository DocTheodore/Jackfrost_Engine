import { GameLoop } from "./core/gameloop.js";
import { GameTime } from "./core/gametime.js";
import { debbugNet } from "./netcode/network.js";

const gameloop = GameLoop;
const gametime = GameTime;

// Funções do HTML
window.sendNameFromInput = function() {
    const name = (document.getElementById('playerNameBox') as HTMLInputElement).value || '';
    console.log(name);
}

// Funções de loop
function Update(dt: number) {
    gametime.Update();
    //console.log(dt, gametime.delta);
    debbugNet();
}

GameLoop.Start(Update);