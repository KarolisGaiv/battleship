import "../styles/main.scss";
import { initiateGame } from "./game";

initiateGame();

// Selectors and event listeners
const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
  square.addEventListener("click", () => {
    square.classList.add("-test");
    console.log(square.id);
  });
});
