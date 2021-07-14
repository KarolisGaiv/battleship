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

  // function checkForGameOver(ships, gameStatus) {
  //   for (let i = 0; i < ships.length; i++) {
  //     if (ships[i].isShipBeenHit.length === ships[i].shipLenght) {
  //       return !gameStatus;
  //     }
  //   }
  // }

  const gameBoard = {
    isGameOver: false,
    shipsArray: [],
    missedShots: [],
    placeShip(length, coords) {
      const ship = Ship(length, coords);
      this.shipsArray.push(ship);
    },
    receiveAttack(squareToHit) {
      const targetShip = findShip(squareToHit, this.shipsArray);
      if (targetShip) {
        targetShip.hit(squareToHit);
      } else {
        this.missedShots.push(squareToHit);
      }
    },
  };

  return gameBoard;
}

export default Gameboard;
