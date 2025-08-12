export class GameLoop {
    private static _callback: (dt:number) => void;
    private static _lastTime = performance.now();

    static Start(callback: (dt:number) => void) {
        this._callback = callback;
        this._lastTime = performance.now();
        requestAnimationFrame(this._loop.bind(this));
    }

    private static _loop(currentTime: number) {
        const delta = (currentTime - this._lastTime) / 1000;
        this._lastTime = currentTime;

        if(this._callback) {
            this._callback(delta);
        }

        requestAnimationFrame(this._loop.bind(this));
    }
}