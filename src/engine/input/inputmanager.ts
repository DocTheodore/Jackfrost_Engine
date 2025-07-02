export class InputManager {
    private static keys = new Set<string>();
    private static keyDown = new Set<string>();
    private static keyUp = new Set<string>();

    private constructor() {} // CLASSE ESTATICA

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
    static isPressed(key: string): boolean {
        return this.keys.has(key);
    }

    static wasTapped(key: string): boolean {
        return this.keyDown.has(key);
    }

    static wasReleased(key: string): boolean {
        return this.keyUp.has(key);
    }

    // Reset de tecla
    static lateUpdate() {
        this.keyDown.clear();
        this.keyUp.clear();
    }
}