const express = require('express');
const Board = require('./board');
const Move = require('./move');
const Avoid = require('./avoid');
const TowardsFood = require('./towardsFood');
const app = express();
app.use(express.json());

app.get('/', function (req, res) {
  res.json({
    apiversion: "1"
  });
})

app.post('/start', function (req, res) {
  res.json();
})

app.post('/move', function (req, res) {
  const id = req.body.you.id.substr(-4);
  const head = req.body.you.head;
  const board = Board(req.body.board);
  const food = req.body.board.food;

  const towardsFood = new TowardsFood(head, food);

  res.json({
    move: Move(
        Avoid(head, board, req.body.board.snakes),
        towardsFood.towards()
      )
  });
})

app.post('/end', function (req, res) {
  res.json();
})

app.listen(443);