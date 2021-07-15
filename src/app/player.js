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
    autoAttack(targetBoard) {
      if (this.type != "human") {
        const choice = Math.floor(Math.random() * 25) + 1;
        targetBoard.receiveAttack(choice);
        return choice;
      }
      return;
    },
  };

  return player;
}

export default Player;
