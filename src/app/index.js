import "../styles/main.scss"
import Ship from "./ship"

document.querySelector(".test").innerHTML = "Hi There!"

document.querySelector("button").addEventListener("click", () => {
    const newShip = Ship(3)
    console.log(newShip);
})
