export class InputManager {
    constructor() { } // CLASSE ESTATICA
    // Inicia os eventos
    static initialize() {
        window.addEventListener('keydown', e => {
            this.keys.add(e.key);
            this.keyDown.add(e.key);
        });
        window.addEventListener('keyup', e => {
            this.keys.delete(e.key);
            this.keyUp.add(e.key);
        });
    }
    // Checagem de tecla
    static isPressed(key) {
        return this.keys.has(key);
    }
    static wasTapped(key) {
        return this.keyDown.has(key);
    }
    static wasReleased(key) {
        return this.keyUp.has(key);
    }
    // Reset de tecla
    static lateUpdate() {
        this.keyDown.clear();
        this.keyUp.clear();
    }
}
InputManager.keys = new Set();
InputManager.keyDown = new Set();
InputManager.keyUp = new Set();
