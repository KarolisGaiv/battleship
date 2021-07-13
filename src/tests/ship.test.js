import { expect, test } from "@jest/globals";
import Ship from "../app/ship";

describe("Ship Factory properties", () => {
  test("Ship length is assigned to new ship objet", () => {
    let newShipLength = 5;
    const myNewShip = Ship(newShipLength);
    expect(myNewShip.shipLength).toBe(newShipLength);
  });

  test("New ship is created with isDestroyed - false", () => {
    const myNewShip = Ship(4);
    expect(myNewShip.isDestroyed).toBe(false);
  });

  test("New ship has no damaged spots", () => {
    const newShip = Ship(3);
    expect(newShip.isShipBeenHit.length).toBe(0);
  });
});
