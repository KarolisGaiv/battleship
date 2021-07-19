import Player from "./player";
import Gameboard from "./gameboard";

let user;
let computer;
let currentPlayer;
let userGameboard;
let computerGameboard;

function initiateGame() {
  user = Player();
  computer = Player("computer");
  userGameboard = Gameboard();
  computerGameboard = Gameboard();
  userGameboard.placeShip(2, [3, 4]);
  // userGameboard.placeShip(3, [53, 54, 55]);
  // userGameboard.placeShip(4, [34, 35, 36, 37]);
  // userGameboard.placeShip(2, [10, 11]);
  // userGameboard.placeShip(2, [83, 84]);
  // computerGameboard.placeShip(2, [0, 1]);
  computerGameboard.placeShip(3, [7, 8, 9]);
  // computerGameboard.placeShip(4, [91, 92, 93, 94]);
  // computerGameboard.placeShip(2, [54, 55]);
  computerGameboard.placeShip(2, [4, 3]);
  createGameboard(user, userGameboard);
  createGameboard(computer, computerGameboard);
  currentPlayer = user;
  console.log(computerGameboard);
}

function createGameboard(player, playerGameboard) {
  const playerType = player.type;
  // Create gameboard container
  const gameBoardWrapper = document.createElement("div");
  gameBoardWrapper.className = `gameBoard-${playerType}`;
  document.querySelector(".content").appendChild(gameBoardWrapper);

  // Create and add squares to gameboard container
  let n = 0;
  while (n < 100) {
    const square = document.createElement("div");
    square.className = "square";
    square.setAttribute("id", n);
    gameBoardWrapper.appendChild(square);
    n++;
  }
  populatePlayerShips(playerType, playerGameboard);
}

function populatePlayerShips(playerType, playerGameboard) {
  let playerShips = playerGameboard.shipsArray;
  let gameBoard;

  if (playerType === "human") {
    gameBoard = document.querySelector(".gameBoard-human");
  } else {
    gameBoard = document.querySelector(".gameBoard-computer");
  }

  if (playerType === "human") {
    playerShips.forEach((ship) => {
      const shipCordinates = ship.shipPosition;
      shipCordinates.forEach((cordinate) => {
        let squareToPopulate = gameBoard.children[cordinate];
        squareToPopulate.classList.add("-ship");
      });
    });
  }
}

function attack(square) {
  user.attack(square, computerGameboard);
  currentPlayer = computer;
  computer.autoAttack(userGameboard);
  currentPlayer = user;
  checkForGameOver(userGameboard);
  checkForGameOver(computerGameboard);
}

function checkForGameOver(gameboard) {
  let shipsArray = gameboard.shipsArray;
  let isGameOver = false;

  shipsArray.every((ship) => {
    ship.isDestroyed ? (isGameOver = !isGameOver) : null;
  });

  if (isGameOver) {
    gameboard.isGameOver = true;
    alert("Game over");
  }
}

export { initiateGame, attack };
