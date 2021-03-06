import Ship from "../app/ship";

function Gameboard() {
  function findShip(squareToHit, shipsArray) {
    // Iterate through all ships in gameBoard
    for (let i = 0; i < shipsArray.length; i++) {
      // If provided coordinate exist in specific ship coordinates, return that ship obj
      if (shipsArray[i].shipPosition.includes(squareToHit)) {
        return shipsArray[i];
      }
    }
  }

  const gameBoard = {
    isGameOver: false,
    shipsArray: [],
    missedShots: [],
    placeShip(length, coords) {
      const ship = Ship(length, coords);
      this.shipsArray.push(ship);
    },
    receiveAttack(squareToHit) {
      let target = parseInt(squareToHit);
      // Find ship to be hit
      const targetShip = findShip(target, this.shipsArray);
      if (targetShip) {
        targetShip.hit(target);
      } else {
        this.missedShots.push(target);
      }
    },
    // checkForGameOver(placedShips) {
    //   const isAllShipsDestroyed = placedShips.every((ship) => {
    //     ship.isSunk();
    //     return ship.isDestroyed;
    //   });
    //   if (isAllShipsDestroyed) {
    //     this.isGameOver = !this.isGameOver;
    //   }
    //   return this.isGameOver;
    // },
  };

  return gameBoard;
}

export default Gameboard;
