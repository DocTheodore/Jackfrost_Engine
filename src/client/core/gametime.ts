export class GameTime {
    private static _delta = 0;
    private static _last = performance.now();

    private constructor() {} // Novas instancia bloqueadas

    static Update() {
        const now = performance.now();
        this._delta = Math.min((now - this._last) / 1000, 0.1);
        this._last = now;
    }

    static get delta():number {
        return this._delta;
    }

    static get now():number {
        return performance.now();
    }
}