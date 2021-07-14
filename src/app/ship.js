const Ship = (shipLength, coordinatesArr) => {
  const ship = {
    shipLength,
    isDestroyed: false,
    shipPosition: coordinatesArr,
    isShipBeenHit: [],
    hit(square) {
      if (this.shipPosition.includes(square)) {
        this.isShipBeenHit.push(true);
        if (shipLength === this.isShipBeenHit.length) {
          this.isSunk();
        }
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
