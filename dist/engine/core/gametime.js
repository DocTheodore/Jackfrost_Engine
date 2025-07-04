export class GameTime {
    constructor() { } // CLASSE ESTATICA
    static Update() {
        const now = performance.now();
        this._delta = Math.min((now - this._last) / 1000, 0.1);
        this._last = now;
    }
    // Delta do tempo para calculo de update
    static get delta() {
        return this._delta * this._scale;
    }
    static get rawDelta() {
        return this._delta;
    }
    // Tempo continuo do jogo
    static get now() {
        return performance.now();
    }
    // Escala de tempo do jogo (só o server deve controlar)
    static set TimeScale(value) {
        this._scale = value;
    }
    static get TimeScale() {
        return this._scale;
    }
}
GameTime._delta = 0;
GameTime._last = performance.now();
GameTime._scale = 1;
