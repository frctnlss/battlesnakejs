const Moves = require('../moves');

class AvoidHead {
  constructor(position, snakes) {
    this.position = position;
    this.snakes = snakes;
  }

  avoid() {
    let currentLength;
    const snakesMap = this.snakes.reduce(this.reduceSnake(currentLength), []);
    
    const notMove = [];
    for (const snake of snakesMap) {
      this.badMove(notMove, snake);
    }

    return notMove;
  }

  reduceSnake = currentLength => (agg, snake) => {
      if (this.isMySnake(snake)) {
        currentLength = snake.length;
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
    if (currentLength <= snake.length) {
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
    return partPosition.x - 1 == this.position.x + 1 && partPosition.y == this.position.y ;
  }

  isLeft(partPosition) {
    return partPosition.x + 1 == this.position.x -1 && partPosition.y == this.position.y;
  }

  isAbove(partPosition) {
    return partPosition.y - 1 == this.position.y + 1 && partPosition.x == this.position.x;
  }

  isBelow(partPosition) {
    return partPosition.y + 1 == this.position.y -1 && partPosition.x == this.position.x;
  }
}

module.exports = AvoidHead;