import Player from "./player";
import Gameboard from "./gameboard";

function initiateGame() {
  const user = Player();
  const computer = Player("computer");
  user.startGame();
  computer.startGame();
  console.log(user);
  user.playerGameboard.placeShip(2, [3, 4]);
  user.playerGameboard.placeShip(3, [15, 16, 17]);
  user.playerGameboard.placeShip(4, [20, 21, 22, 23]);
  user.playerGameboard.placeShip(2, [10, 11]);
  user.playerGameboard.placeShip(2, [17, 18]);
  computer.playerGameboard.placeShip(2, [0, 1]);
  computer.playerGameboard.placeShip(3, [7, 8, 9]);
  computer.playerGameboard.placeShip(4, [15, 16, 17, 18]);
  computer.playerGameboard.placeShip(2, [22, 23]);
  computer.playerGameboard.placeShip(2, [4, 3]);
  console.log(user);
}

export { initiateGame };
