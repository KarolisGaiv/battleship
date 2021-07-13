const Ship = (shipLength) => {
  const ship = {
    shipLength,
    isDestroyed: false,
    shipPosition: [3, 4, 5, 6],
    isShipBeenHit: [],
    hit(square) {
      if (this.shipPosition.includes(square)) {
        this.isShipBeenHit.push(true);
      }
    },
    isSunk() {
      if (shipLength === this.isShipBeenHit.length) {
        this.isDestroyed = true;
        return this.isDestroyed;
      }
      return this.isDestroyed;
    },
  };

  return ship;
};

export default Ship;
