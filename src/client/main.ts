import { GameLoop } from "./core/gameloop.js";
import { GameTime } from "./core/gametime.js";
import { __sendLoginData, debbugNet } from "./netcode/network.js";
import { selectedColor } from "./web/selectcolor.js";

const gameloop = GameLoop;
const gametime = GameTime;

// Funções do HTML
window.sendNameFromInput = function() {
    const name = (document.getElementById('playerNameBox') as HTMLInputElement).value || '';
    const idRegister = document.getElementById('login');
    const myName = document.getElementById('playerName');
    console.log(name, selectedColor);
    __sendLoginData({name: name, color:selectedColor||0});
    if(myName && idRegister) {
        myName.innerText = name;
        idRegister.style.visibility = 'hidden';
    }
}

// Funções de loop
function Update(dt: number) {
    gametime.Update();
    //console.log(dt, gametime.delta);
    debbugNet();
}

gameloop.Start(Update);