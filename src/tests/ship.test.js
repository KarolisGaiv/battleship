import { expect, test } from "@jest/globals";
import Ship from "../app/ship";

describe.skip("Ship Factory", () => {
  describe("properties", () => {
    test("Ship length is assigned to new ship objet", () => {
      let newShipLength = 5;
      let possitionArray = [2, 3, 4];
      const myNewShip = Ship(newShipLength, possitionArray);
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

  describe("hit function", () => {
    let newShip;
    let possitionArray = [2, 3, 4];
    beforeEach(() => {
      newShip = Ship(4, possitionArray);
    });

    test("no hits", () => {
      expect(newShip.isShipBeenHit.length).toBe(0);
    });

    test("ship was not hit", () => {
      newShip.hit(1);
      expect(newShip.isShipBeenHit).toHaveLength(0);
    });

    test("ship was hit and is damaged", () => {
      newShip.hit(3);
      expect(newShip.isShipBeenHit).toHaveLength(1);
    });

    test("ship was succesfully hit more than once", () => {
      newShip.hit(3);
      newShip.hit(1);
      newShip.hit(4);
      expect(newShip.isShipBeenHit).toHaveLength(2);
    });
  });

  describe("isSunk functionality", () => {
    let newShip;
    let possitionArray = [2, 3, 4, 5];
    beforeEach(() => {
      newShip = Ship(4, possitionArray);
    });

    test("ship is alive", () => {
      expect(newShip.isDestroyed).toBe(false);
    });

    test("ship is hit but not destroyed", () => {
      newShip.hit(3);
      newShip.isSunk();
      expect(newShip.isDestroyed).toBe(false);
    });

    test("ship is hit and destroyed", () => {
      newShip.hit(3);
      newShip.hit(4);
      newShip.hit(2);
      newShip.hit(5);
      newShip.isSunk();
      expect(newShip.isDestroyed).toBe(true);
    });
  });
});
