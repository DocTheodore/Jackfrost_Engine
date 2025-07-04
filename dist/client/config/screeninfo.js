var _a;
import { TILE_SIZE } from "../../shared/contants";
export class ScreenInfo {
    constructor() { } // CLASSE ESTATICA
    // Pega o tamanho atual da tela em pixel e tiles
    static Update() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.TileX = Math.floor(this.width / TILE_SIZE);
        this.TileY = Math.floor(this.height / TILE_SIZE);
    }
}
_a = ScreenInfo;
ScreenInfo.width = window.innerWidth;
ScreenInfo.height = window.innerHeight;
ScreenInfo.TileX = Math.floor(_a.width / TILE_SIZE);
ScreenInfo.TileY = Math.floor(_a.height / TILE_SIZE);
