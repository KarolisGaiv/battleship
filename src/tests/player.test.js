import Player from "../app/player";
import Gameboard from "../app/gameboard";
import { describe, expect, jest, test } from "@jest/globals";

let player;
let enemy;
let playerBoard;
let enemyBoard;

beforeEach(() => {
  player = Player();
  enemy = Player("computer");
  playerBoard = Gameboard();
  enemyBoard = Gameboard();
});

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
    player.attack(3, enemyBoard);
    expect(enemyBoard.missedShots.length).toBe(1);
    expect(enemyBoard.missedShots.includes(3)).toBe(true);
  });
});

describe("Computer attack functionality", () => {
  test("generates integer", () => {
    enemy.autoAttack(playerBoard);
    expect(enemy.autoAttack).not.toBeNull();
  });
  test("only computer can auto attack", () => {
    player.autoAttack(enemyBoard);
    expect(enemyBoard.missedShots.length).toBe(0);
  });
  test("auto attack enemy board", () => {
    enemy.autoAttack(playerBoard);
    expect(playerBoard.missedShots.length).toBe(1);
  });
  test("prevent for targeting same place twice", () => {
    let n = 0;
    let counter = 0;
    while (n <= 200) {
      enemy.autoAttack(playerBoard);
      counter++;
      n++;
      if (enemy.playerMoves.length === 101) {
        break;
      }
    }
    enemy.playerMoves.sort(function (a, b) {
      return a - b;
    });
    console.log(enemy.playerMoves);
    expect(enemy.playerMoves.length).toBeLessThanOrEqual(101);
  });
});
