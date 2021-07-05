const Moves = require('./moves');

module.exports = function (notMove, desiredMoves, id) {
  
  console.log({notMove, desiredMoves, id});

  for (const move of Object.values(desiredMoves)) {
    if (notMove.indexOf(move) == -1) {

      console.log({move, id});

      return move;
    }
  }
  for (const move of Object.values(Moves)) {
    if (notMove.indexOf(move) == -1) {

      console.log({move, id});

      return move;
    }
  }
}