/**
 * @param {string} instructions
 * @return {boolean}
 */
let degreeFacing = 1;

var isRobotBounded = function (instructions) {
  let xDistance = 0;
  let yDistance = 0;

  let degreeMap = [0, 90, 180, 270];

  let position = {
    0: 0,
    90: 0,
    180: 0,
    270: 0,
  };

  for (let i = 0; i < instructions.length; i++) {
    console.log("instructions[i]: ", instructions[i]);
    console.log("degreeFacing: ", degreeFacing);

    if (instructions[i] === "G") {
      position[degreeMap[degreeFacing]] += 1;
    }

    if (instructions[i] === "L") {
      console.log("it is L");
      degreeFacing = degreeFacing + 1;
      if (degreeFacing < 0) {
        degreeFacing = 270;
      }
      if (degreeFacing > 3) {
        degreeFacing = 0;
      }
      console.log("degreeFacing::::::", degreeFacing);
    }
    if (instructions[i] === "R") {
      degreeFacing = degreeFacing - 1;
      if (degreeFacing > 3) {
        degreeFacing = 0;
      }
      if (degreeFacing < 0) {
        degreeFacing = 270;
      }
    }
  }
};

isRobotBounded("GGLLGG");

var isRobotBounded = function (instructions) {
  let [x, y] = [0, 0];
  let dd = [
    [0, 1],
    [-1, 0],
    [0, -1],
    [1, 0],
  ];
  let direction = 0;
  for (let ins of instructions.repeat(4)) {
    let [dx, dy] = dd[direction];
    if (ins == "G") {
      [x, y] = [x + dx, y + dy];
    } else if (ins == "L") {
      direction = (4 + direction + 1) % 4;
    } else {
      direction = (4 + direction - 1) % 4;
    }
  }
  return x == 0 && y == 0;
};
