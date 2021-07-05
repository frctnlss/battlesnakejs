const Moves = require('./moves');

module.exports = function (notMove, desiredMoves) {
  
  console.log({notMove, desiredMoves});

  for (const move of Object.values(desiredMoves)) {
    if (notMove.indexOf(move) == -1) {

      console.log({move});

      return move;
    }
  }
  for (const move of Object.values(Moves)) {
    if (notMove.indexOf(move) == -1) {

      console.log({move});

      return move;
    }
  }
}