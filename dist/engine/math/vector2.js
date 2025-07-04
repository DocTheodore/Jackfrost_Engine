export class Vect2 {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    // Retorno do Vetor
    toString() {
        return `(${this.x}, ${this.y})`;
    }
    clone() {
        return new Vect2(this.x, this.y);
    }
    equals(other) {
        return this.x === other.x && this.y === other.y;
    }
    // Operações no Vetor
    add(other) {
        this.x += other.x;
        this.y += other.y;
    }
    sub(other) {
        this.x -= other.x;
        this.y -= other.y;
    }
    scale(s) {
        this.x *= s;
        this.y *= s;
    }
    // Funções vetoriais
    dot(other) {
        return this.x * other.x + this.y * other.y;
    }
    magn() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
    norm() {
        const m = this.magn();
        return m === 0 ? new Vect2(0, 0) : new Vect2(this.x / m, this.y / m);
    }
    distanceTo(other) {
        return Math.sqrt((this.x - other.x) ** 2 + (this.y - other.y) ** 2);
    }
    // Operações imutaveis
    addNew(other) {
        return new Vect2(this.x + other.x, this.y + other.y);
    }
    subNew(other) {
        return new Vect2(this.x - other.x, this.y - other.y);
    }
    scaleNew(s) {
        return new Vect2(this.x * s, this.y * s);
    }
}
