const Moves = require('../moves');
const Movement = require('../movement');

class AvoidHead {
  constructor(position, snakes) {
    this.position = position;
    this.currentLength = 0;
    this.snakes = snakes;
  }

  avoid() {
    const snakesMap = this.snakes.reduce(this.reduceSnake, []);
    const notMove = [];
    for (const snake of snakesMap) {
      this.badMove(notMove, snake);
    }
    return notMove;
  }

  reduceSnake = (agg, snake) => {
    if (this.isMySnake(snake)) {
      this.currentLength = snake.length;
      return agg;
    }
    agg.push({
      head: snake.head,
      length: snake.length
    });
    return agg;
  }

  isMySnake(snake) {
    return snake.head.x == this.position.x && snake.head.y == this.position.y;
  }

  badMove(notMove, snake) {
    if (this.currentLength <= snake.length) {
      if (this.isRight(snake.head)) {
        notMove.push(Moves.right);
      }
      if (this.isLeft(snake.head)) {
        notMove.push(Moves.left);
      }
      if (this.isAbove(snake.head)) {
        notMove.push(Moves.up);
      }
      if (this.isBelow(snake.head)) {
        notMove.push(Moves.down);
      }
    }
  }

  isRight(partPosition) {
    const newPosition = Movement.right(this.position);
    return this.isEqual(newPosition, Movement.up(partPosition)) || this.isEqual(newPosition, Movement.down(partPosition)) || this.isEqual(newPosition, Movement.left(partPosition));
  }

  isLeft(partPosition) {
    const newPosition = Movement.left(this.position);
    return this.isEqual(newPosition, Movement.up(partPosition)) || this.isEqual(newPosition, Movement.down(partPosition)) || this.isEqual(newPosition, Movement.right(partPosition));
  }

  isAbove(partPosition) {
    const newPosition = Movement.up(this.position);
    return this.isEqual(newPosition, Movement.right(partPosition)) || this.isEqual(newPosition, Movement.down(partPosition)) || this.isEqual(newPosition, Movement.left(partPosition));
  }

  isBelow(partPosition) {
    const newPosition = Movement.down(this.position);
    return this.isEqual(newPosition, Movement.up(partPosition)) || this.isEqual(newPosition, Movement.right(partPosition)) || this.isEqual(newPosition, Movement.left(partPosition));
  }

  isEqual(position1, position2) {
    return position1.x == position2.x && position1.y == position2.y;
  }
}

module.exports = AvoidHead;