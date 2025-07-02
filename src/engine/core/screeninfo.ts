import { TILE_SIZE } from "../../shared/contants";

export class ScreenInfo {
    static width = window.innerWidth;
    static height = window.innerHeight;
    static TileX = Math.floor(this.width / TILE_SIZE);
    static TileY = Math.floor(this.height / TILE_SIZE);

    private constructor() {} // CLASSE ESTATICA

    // Pega o tamanho atual da tela em pixel e tiles
    static Update() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.TileX = Math.floor(this.width / TILE_SIZE);
        this.TileY = Math.floor(this.height / TILE_SIZE);
    }
}