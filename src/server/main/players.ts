import { PlayerData } from "../types/playertypes";
import { MAX_PLAYERS } from "./config";

const players = new Map();
const idPool = Array.from({ length: MAX_PLAYERS }, (_, i) => i + 1);

export function assignPlayerId() {
  console.log(idPool);
  return idPool.shift();
}

export function releasePlayerId(id:number) {
  if (typeof id === 'number' && !idPool.includes(id)) {
    idPool.push(id);
    idPool.sort((a, b) => a - b);
  }
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

export function playerCount() {
    return getAllPlayers().length;
}