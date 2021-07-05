const Moves = require('./moves');

class TowardsFood {
  constructor(position, food) {
    this.position = position;
    this.food = food;
  }

  towards() {
    let closestDistance;
    const closestFood = this.food.reduce(this.reduceFood(closestDistance), {});

    const moves = [];

    if (this.isRight(closestFood)) {
      moves.push(Moves.right);
    }
    if (this.isLeft(closestFood)) {
      moves.push(Moves.left);
    }
    if (this.isAbove(closestFood)) {
      moves.push(Moves.up);
    }
    if (this.isBelow(closestFood)) {
      moves.push(Moves.down);
    }

    return moves;
  }
  
  reduceFood = closestDistance => (currentClosest, foodPosition, index) => {
    if (index == 0) {
      closestDistance = this.distance(foodPosition);
      return foodPosition;
    }

    const currentDistance = this.distance(foodPosition);
    if (currentClosest < closestDistance) {
      closestDistance = currentDistance;
      return foodPosition;
    }
    return currentClosest;
  }

  distance = foodPosition => Math.sqrt(Math.pow(this.position.x - foodPosition.x, 2) + Math.pow(this.position.y - foodPosition.y, 2))

  isRight(closestFood) {
    return this.position.x - closestFood.x < 0;
  }

  isLeft(closestFood) {
    return this.position.x - closestFood.x > 0;
  }

  isAbove(closestFood) {
    return this.position.y - closestFood.y < 0;
  }

  isBelow(closestFood) {
    return this.position.y - closestFood.y > 0;
  }
}

module.exports = TowardsFood;