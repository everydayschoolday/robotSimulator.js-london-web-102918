class Robot {
  //your solution here
  constructor() {
    this.coordinates = [0, 0]
    this.bearing = 'north'
  }

  setCoordinates(x, y) {
    ;(this.coordinates[0] = x), (this.coordinates[1] = y)
  }

  setBearing(bearing) {
    let acceptable_bearings = ['north', 'south', 'east', 'west']
    if (acceptable_bearings.includes(bearing.toLowerCase())) {
      this.bearing = bearing
    } else {
      throw new Error('Invalid Robot Bearing')
    }
  }

  place(location) {
    this.setCoordinates(location['x'], location['y'])
    this.setBearing(location['direction'])
  }

  turnRight() {
    switch (this.bearing) {
      case 'north':
        this.setBearing('east')
        break
      case 'south':
        this.setBearing('west')
        break
      case 'east':
        this.setBearing('south')
        break
      case 'west':
        this.setBearing('north')
        break
    }
  }

  turnLeft() {
    switch (this.bearing) {
      case 'north':
        this.setBearing('west')
        break
      case 'south':
        this.setBearing('east')
        break
      case 'east':
        this.setBearing('north')
        break
      case 'west':
        this.setBearing('south')
        break
    }
  }

  advance() {
    switch (this.bearing) {
      case 'north':
        this.coordinates[1]++
        break
      case 'south':
        this.coordinates[1]--
        break
      case 'east':
        this.coordinates[0]++
        break
      case 'west':
        this.coordinates[0]--
        break
    }
  }
  translateInstructions(instruction) {
    for (const step of instruction) {
      switch (step) {
        case 'L':
          this.turnLeft()
          break
        case 'R':
          this.turnRight()
          break
        case 'A':
          this.advance()
          break
      }
      console.log(step)
    }
  }
}
