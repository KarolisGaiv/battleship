import { expect, test } from "@jest/globals";
import GameBoard from "../app/gameboard";
import Ship from "../app/ship";

test.skip("place ship at coordinates", () => {
  let shipCoordinates = [1, 2, 3];
  const mock = jest.fn(shipCoordinates);
  //   const newShip = Ship(3, shipCoordinates);
  //   const gameboard = GameBoard(shipCoordinates);
  //   const placeShip = gameboard.placeShip();
  const gameBoard = GameBoard(shipCoordinates);

  expect(mock).toBeCalledWith(shipCoordinates);
});
