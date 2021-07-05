const AvoidWall = require('./avoidWall');
const AvoidBody = require('./avoidBody');
const AvoidHead = require('./avoidHead');

module.exports = function (position, board, snakes) {
  const notMove = [];
  snakes.forEach(function (snake) {
    const body = new AvoidBody(position, snake.body);
    notMove.push(body.avoid());
  })
  
  const head = new AvoidHead(position, snakes);
  notMove.push(head.avoid());

  const wall = new AvoidWall(position, board);
  notMove.push(wall.avoid());

  return notMove.flat();
}