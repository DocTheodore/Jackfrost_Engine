import { PlayerData } from "../types/playertypes";

const players = new Map<string, PlayerData>(); // key = ip

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