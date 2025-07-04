import { GameTime } from "./gametime";
export class GameLoop {
    constructor() { } // CLASSE ESTATICA
    // Loop principal do jogo
    static Start(callback) {
        this._running = true;
        const loop = () => {
            if (!this._running)
                return;
            GameTime.Update();
            callback(GameTime.delta);
            requestAnimationFrame(loop);
        };
        loop();
    }
    static Stop() {
        this._running = false;
    }
}
GameLoop._running = false;
