import { error } from "console";

export class GameTime {
    private static _delta = 0;
    private static _last = performance.now();
    private static _scale = 1;

    private constructor() {} // CLASSE ESTATICA
    
    static update() {
        const now = performance.now();
        this._delta = Math.min((now - this._last) / 1000, 0.1);
        this._last = now;
    }

    // Delta do tempo para calculo de update
    static get delta(): number {
        return this._delta * this._scale;
    }
    static get rawDelta(): number {
        return this._delta;
    }

    // Tempo continuo do jogo
    static get now(): number {
        return performance.now();
    }

    // Escala de tempo do jogo (só o server deve controlar)
    static set TimeScale(value: number) {
        this._scale = value;
    }
    static get TimeScale(): number {
        return this._scale;
    }
}