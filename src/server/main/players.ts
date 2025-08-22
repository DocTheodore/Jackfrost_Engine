import { PlayerData } from "../types/playertypes.js";
import { IdPool } from "../utils/idHandler.js";
import { MAX_PLAYERS } from "./config.js";

const players = new Map();
const playerIdPool = new IdPool(MAX_PLAYERS);
const colorIdPool = new IdPool(MAX_PLAYERS);

export function assignPlayerId() {
  console.log(playerIdPool);
  colorIdPool.assignId();
  return playerIdPool.assignId();
}

export function releasePlayerId(id:number) {
  playerIdPool.releaseId(id);
  colorIdPool.releaseId(id);
}

export function addPlayer(player: PlayerData) {
  players.set(player.ipAddress, player);
}

export function removePlayer(ipAddress: string) {
  players.delete(ipAddress);
}

export function getPlayer(ipAddress: string) {
  return players.get(ipAddress);
}

export function getAllPlayers() {
  return Array.from(players.values());
}

export function getAllColors() {
    return colorIdPool.getArray();
}

export function playerCount() {
  return getAllPlayers().length;
}