import Player from "./player";
import Gameboard from "./gameboard";

function initiateGame() {
  const user = Player();
  const computer = Player("computer");
  const userGameboard = Gameboard();
  const computerGameboard = Gameboard();
  console.log(userGameboard);
  userGameboard.placeShip(2, [3, 4]);
  userGameboard.placeShip(3, [15, 16, 17]);
  userGameboard.placeShip(4, [20, 21, 22, 23]);
  userGameboard.placeShip(2, [10, 11]);
  userGameboard.placeShip(2, [17, 18]);
  computerGameboard.placeShip(2, [0, 1]);
  computerGameboard.placeShip(3, [7, 8, 9]);
  computerGameboard.placeShip(4, [15, 16, 17, 18]);
  computerGameboard.placeShip(2, [22, 23]);
  computerGameboard.placeShip(2, [4, 3]);
  console.log(computerGameboard);
  createGameboard();
}

function createGameboard() {
  const gameBoardWrapper = document.createElement("div");
  gameBoardWrapper.className = "gameBoard-wrapper";
  document.querySelector(".content").appendChild(gameBoardWrapper);

  // Create and add squares to gameboard
  let n = 0;
  while (n < 100) {
    const square = document.createElement("div");
    square.className = "square";
    square.setAttribute("id", n);
    gameBoardWrapper.appendChild(square);
    n++;
  }
}

export { initiateGame };
