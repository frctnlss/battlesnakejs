const Moves = require('../moves')

class AvoidWall {
  constructor(position, board) {
    this.position = position,
    this.board = board
  }

  avoid() {
    let notMove = [];
    if (this.isTop()) {
      notMove.push(Moves.up);
    } 
    if (this.isLeft()) {
      notMove.push(Moves.left);
    }
    if (this.isBottom()) {
      notMove.push(Moves.down);
    }
    if (this.isRight()) { //up
      notMove.push(Moves.right);
    }
    return notMove;
  }

  isTop() {
    return this.position.y == this.board.yMax;
  }

  isLeft() {
    return this.position.x == this.board.xMin;
  }

  isBottom() {
    return this.position.y == this.board.yMin;
  }

  isRight() {
    return this.position.x == this.board.xMax;
  }
}

module.exports = AvoidWall;