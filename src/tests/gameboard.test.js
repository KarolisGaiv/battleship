import { expect, test } from "@jest/globals";
import Gameboard from "../app/gameboard";

describe("Gameboard placeShip functionality", () => {
  let gameBoard = Gameboard();
  gameBoard.placeShip(3, [1, 2, 3]);
  expect(gameBoard.shipsArray.length).toBeGreaterThan(0);
});

describe("Gameboard receive attack funcionality", () => {
  let gameBoard;

  beforeEach(() => {
    gameBoard = Gameboard();
    gameBoard.placeShip(3, [1, 2, 3]);
  });

  test("receive attack but miss to hit ship", () => {
    let squareToHit = 4;
    gameBoard.receiveAttack(squareToHit);
    function checkArray() {
      if (gameBoard.missedShots.includes(squareToHit)) {
        return true;
      }
      return false;
    }
    const checkResult = checkArray();
    expect(checkResult).toBe(true);
    expect(gameBoard.missedShots.length).toBeGreaterThan(0);
  });

  test("receive attack and hit ship", () => {
    let squareToHit = 3;
    gameBoard.receiveAttack(squareToHit);
    expect(gameBoard.missedShots.length).toBe(0);
  });
});
