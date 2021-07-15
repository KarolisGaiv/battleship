import Gameboard from "./gameboard";

function Player(name, type = "human") {
  const player = {
    startGame() {
      const playerBoard = Gameboard();
      return playerBoard;
    },
    attack(square, enemyBoard) {
      enemyBoard.receiveAttack(square);
    },
  };

  return player;
}

export default Player;
