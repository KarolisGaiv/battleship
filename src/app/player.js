import Gameboard from "./gameboard";

function Player(type = "human") {
  const player = {
    playerGameboard: {},
    playerMoves: [],
    type: type != "human" ? (type = "computer") : (type = "human"),
    startGame() {
      const playerBoard = Gameboard();
      this.playerGameboard = playerBoard;
    },
    attack(square, enemyBoard) {
      enemyBoard.receiveAttack(square);
    },
    autoAttack(targetBoard) {
      if (this.type != "human") {
        const choice = Math.floor(Math.random() * 26);
        // Check if same move has not been made already
        if (!this.playerMoves.includes(choice)) {
          targetBoard.receiveAttack(choice);
          this.playerMoves.push(choice);
        }
        return choice;
      }
      return;
    },
  };

  return player;
}

export default Player;
