// Input: room = [[1,1,1,1,1,0,1,1],[1,1,1,1,1,0,1,1],[1,0,1,1,1,1,1,1],[0,0,0,1,0,0,0,0],[1,1,1,1,1,1,1,1]], row = 1, col = 3
// Output: Robot cleaned all rooms.
// Explanation: All grids in the room are marked by either 0 or 1.
// 0 means the cell is blocked, while 1 means the cell is accessible.
// The robot initially starts at the position of row=1, col=3.
// From the top left corner, its position is one row below and three columns right.

class Robot {
  constructor(position, room) {
    this.position = position;
    this.room = room;
    this.directionIndex = 0;
  }

  directionArray = [0, 1, 2, 3];
  directionLabels = {
    0: "North",
    1: "East",
    2: "South",
    3: "West",
  };

  move() {}

  turnLeft() {
    this.directionIndex = (this.directionIndex + 3) % 4;
  }

  turnRight() {
    this.directionIndex = (this.directionIndex + 1) % 4;
  }

  clean() {}

  sayDirection() {
    return this.directionLabels[this.directionIndex];
  }
}

let robot = new Robot();
robot.turnLeft();
robot.turnLeft();
robot.turnLeft();
robot.turnLeft();
robot.turnLeft();
robot.turnLeft();
robot.turnRight();
robot.turnRight();

//   robot.turnLeft();

console.log(robot.sayDirection());

// Robot logic
// if 1,
// clean, move forward
// if on clean space, turn left

const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
const visited = new Set();
