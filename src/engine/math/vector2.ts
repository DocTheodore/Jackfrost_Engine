export class Vect2 {
    constructor(public x:number = 0, public y:number = 0) {}

    // Retorno do Vetor
    toString(): string {
        return `(${this.x}, ${this.y})`;
    }

    clone(): Vect2 {
        return new Vect2(this.x, this.y);
    }

    equals(other: Vect2): boolean {
        return this.x === other.x && this.y === other.y;
    }

    // Operações no Vetor
    add(other: Vect2): void {
        this.x += other.x;
        this.y += other.y;
    }

    sub(other: Vect2): void {
        this.x -= other.x;
        this.y -= other.y;
    }

    scale(s:number):void {
        this.x *= s;
        this.y *= s;
    }

    // Funções vetoriais
    dot(other: Vect2): number {
        return this.x * other.x + this.y * other.y;
    } 

    magn(): number {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }

    norm(): Vect2 {
        const m = this.magn();
        return m === 0 ? new Vect2(0, 0) : new Vect2(this.x / m, this.y / m);
    }

    distanceTo(other: Vect2): number {
        return Math.sqrt((this.x - other.x)**2 + (this.y - other.y)**2);
    }

    // Operações imutaveis
    addNew(other: Vect2): Vect2 {
        return new Vect2(this.x + other.x, this.y + other.y);
    }

    subNew(other: Vect2): Vect2 {
        return new Vect2(this.x - other.x, this.y - other.y);
    }

    scaleNew(s: number): Vect2 {
        return new Vect2(this.x * s, this.y * s);
    }
}