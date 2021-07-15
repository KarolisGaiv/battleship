import Gameboard from "./gameboard";

function Player(type = "human") {
  const player = {
    type,
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
