import { GameTime } from "./gametime";

export class GameLoop {
    private static _running = false;

    private constructor() {} // CLASSE ESTATICA

    // Loop principal do jogo
    static Start(callback: (dt: number) => void) {
        this._running = true;

        const loop = () => {
            if(!this._running) return;

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