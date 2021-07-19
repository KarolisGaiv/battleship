import "../styles/main.scss";
import { initiateGame, attack } from "./game";

initiateGame();

// Selectors and event listeners
const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
  square.addEventListener("click", () => {
    square.classList.add("-test");
    attack(square.id);
  });
});
