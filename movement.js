class Movement {
  static up = position => ({
    x: position.x,
    y: position.y + 1
  })

  static down = position => ({
    x: position.x,
    y: position.y - 1
  })

  static left = position => ({
    x: position.x - 1,
    y: position.y
  })

  static right = position => ({
    x: position.x + 1,
    y: position.y
  })
}

module.exports = Movement;