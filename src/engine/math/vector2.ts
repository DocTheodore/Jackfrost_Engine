export class Vect2 {
    constructor(public x:number = 0, public y:number = 0) {
        this.x = x;
        this.y = y;
    }

    clone(): Vect2 {
        return new Vect2(this.x, this.y);
    }

    add(other: Vect2): void {
        this.x += other.x;
        this.y += other.y;
    }

    subtract(other: Vect2): void {
        this.x -= other.x;
        this.y -= other.y;
    }

    scale(s:number):void {
        this.x *= s;
        this.y *= s;
    }

    magn(): number {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }

    norm(): Vect2 {
        const magn = this.magn();
        if(magn === 0) return new Vect2(0, 0);

        const newVec = this.clone();
        newVec.scale(magn)
        return newVec;
    }
}