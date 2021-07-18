import Player from "./player";
import Gameboard from "./gameboard";

function initiateGame() {
  const user = Player();
  const computer = Player("computer");
  const userGameboard = Gameboard();
  const computerGameboard = Gameboard();
  userGameboard.placeShip(2, [3, 4]);
  userGameboard.placeShip(3, [53, 54, 55]);
  userGameboard.placeShip(4, [34, 35, 36, 37]);
  userGameboard.placeShip(2, [10, 11]);
  userGameboard.placeShip(2, [83, 84]);
  computerGameboard.placeShip(2, [0, 1]);
  computerGameboard.placeShip(3, [7, 8, 9]);
  computerGameboard.placeShip(4, [15, 16, 17, 18]);
  computerGameboard.placeShip(2, [22, 23]);
  computerGameboard.placeShip(2, [4, 3]);
  createGameboard(user, userGameboard);
  createGameboard(computer, computerGameboard);
}

function createGameboard(player, playerGameboard) {
  // Create gameboard container
  const gameBoardWrapper = document.createElement("div");
  gameBoardWrapper.className = "gameBoard-wrapper";
  document.querySelector(".content").appendChild(gameBoardWrapper);

  // Create and add squares to gameboard container
  const playerType = player.type;
  let n = 0;
  while (n < 100) {
    const square = document.createElement("div");
    square.className = "square";
    square.setAttribute("id", `${n}-${playerType}`);
    gameBoardWrapper.appendChild(square);
    n++;
  }
  populatePlayerShips(playerType, playerGameboard);
}

function populatePlayerShips(playerType, playerGameboard) {
  let playerShips = playerGameboard.shipsArray;
  console.log(playerShips);

  playerShips.forEach((ship) => {
    const shipCordinates = ship.shipPosition;
    console.log(shipCordinates);
    shipCordinates.forEach((cordinate) => {
      let squareToPopulate = document.getElementById(
        `${cordinate}-${playerType}`
      );
      squareToPopulate.classList.add("-ship");
    });
  });
}

export { initiateGame };
