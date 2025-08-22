export class IdPool {
    private pool: Set<number>;

    constructor(length: number) {
        this.pool = new Set(Array.from({ length }, (_, i) => i));
    }

    assignId(): number | undefined {
        // Busca o menor ID disponível manualmente
        let minId: number | undefined = undefined;

        for (const id of this.pool) {
            if (minId === undefined || id < minId) {
                minId = id;
            }
        }

        if (minId !== undefined) {
            this.pool.delete(minId);
        }

        return minId;
    }

    releaseId(id: number) {
        this.pool.add(id);
    }

    getArray() {
        return Array.from(this.pool);
    }
}