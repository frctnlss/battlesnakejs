class Movements {
  up = position => {
    x: position.x,
    y: position.y + 1
  }

  down = position => {
    x: position.x,
    y: position.y - 1
  }

  left = position => {
    x: position.x - 1,
    y: position.y
  }

  right = position => {
    x: position.x + 1,
    y: position.y
  }
}

module.exports = Movements;