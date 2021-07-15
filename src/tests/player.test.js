import Player from "../app/player";
import Gameboard from "../app/gameboard";
import { describe, expect, jest, test } from "@jest/globals";

const player = Player();
const enemy = Player("computer");
const playerBoard = Gameboard();
const enemyGameboard = Gameboard();

describe("player type", () => {
  test("player is human", () => {
    expect(player.type).toBe("human");
  });

  test("player is computer", () => {
    expect(enemy.type).toBe("computer");
  });
});

describe("Player attack functionality", () => {
  test("attack funcionality", () => {
    player.attack(3, enemyGameboard);
    expect(enemyGameboard.missedShots.length).toBe(1);
    expect(enemyGameboard.missedShots.includes(3)).toBe(true);
  });
});
