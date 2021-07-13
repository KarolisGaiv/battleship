import Ship from "../app/ship";

function Gameboard(shipCoordinates) {
  const gameBoard = {
    placeShip() {
      const ship = Ship(2, shipCoordinates);
    },
  };

  return gameBoard;
}

export default Gameboard;
