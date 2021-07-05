const Moves = require('../moves');
const Movements = require('../movements');

class AvoidClosure {
  constructor(position, snakes) {
    this.position = position;
    this.body = snakes.flatMap(function (snake) {
      return snake.body;
    })
  }

  avoid(currentBadMoves) {
    const availableMoves = Object.values(Moves).filter(move => currentBadMoves.indexOf(move) == -1);
    const notMove = [];
    for (const move of availableMoves) {
      
    }
    return notMove.concat(currentBadMoves);
  }
}

module.exports = AvoidClosure;