export class ServerTime {
    private static _delta = 0;
    private static _time = 0
    private static _last = performance.now();

    private static readonly TICK_RATE = 60;
    private static readonly TICK_INTERVAL = 1000 / this.TICK_RATE;

    private static _running = false;

    private constructor() {} // Novas instancia bloqueadas

    static Start(loop: (delta:number, time: number) => void) {
        if (this._running) return;
        this._running = true;

        let nextTick = performance.now();
        const run = () => {
            if(!this._running) return;

            const now = performance.now();
            this._delta = (now - this._last) / 1000;
            this._time += this._delta;
            this._last = now;

            loop(this._delta, this._time);

            nextTick += this.TICK_INTERVAL;
            const delay = Math.max(0, nextTick - performance.now());

            setTimeout(run, delay);
        };

        this._last = performance.now();
        nextTick += this._last + this.TICK_INTERVAL;
        setTimeout(run, this.TICK_INTERVAL);
    }

    static Stop() {
        this._running = false;
    }

    static get delta():number {
        return this._delta;
    }

    static get time():number {
        return this._time;
    }

    static get tick(): number {
        return Math.floor(this._time * this.TICK_RATE);
    }
}