const Moves = require('../moves');

class AvoidBody {
  constructor(position, body) {
    this.position = position;
    this.body = body;
  }

  avoid() {
    const notMove = [];
    for (const bodyPosition of this.body) {
      this.badMove(notMove, bodyPosition);
    }
    return notMove;
  }

  badMove(notMove, bodyPosition) {
    if (this.isRight(bodyPosition)) {
      notMove.push(Moves.right);
    } 
    if (this.isLeft(bodyPosition)) {
      notMove.push(Moves.left);
    }
    if (this.isAbove(bodyPosition)) {
      notMove.push(Moves.up);
    }
    if (this.isBelow(bodyPosition)) {
      notMove.push(Moves.down);
    }
  }

  isRight(partPosition) {
    return partPosition.x == this.position.x + 1 && partPosition.y == this.position.y;
  }

  isLeft(partPosition) {
    return partPosition.x == this.position.x -1 && partPosition.y == this.position.y;
  }

  isAbove(partPosition) {
    return partPosition.y == this.position.y + 1 && partPosition.x == this.position.x;
  }

  isBelow(partPosition) {
    return partPosition.y == this.position.y -1 && partPosition.x == this.position.x;
  }
}

module.exports = AvoidBody;