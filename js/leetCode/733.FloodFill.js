let { expect } = require("chai");
/**
 * @param {number[][]} grid
 * @return {number}
 */

var maxAreaOfIsland = function (grid) {
  let maxArea = 0;
  let rowLength = grid[0].length;

  const findArea = (row, col, size) => {
    if (
      col >= rowLength ||
      col < 0 ||
      row >= grid.length ||
      row < 0 ||
      grid[row][col] !== 1
    ) {
      return 0;
    }

    grid[row][col] = 0;

    return (
      1 +
      findArea(row, col + 1) +
      findArea(row, col - 1) +
      findArea(row + 1, col) +
      findArea(row - 1, col)
    );
  };

  for (row = 0; row < grid.length; row++) {
    for (col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === 1) {
        maxArea = Math.max(maxArea, findArea(row, col, 0));
      }
    }
  }

  return maxArea;
};

let simpleGrid = [[0, 1, 1]];
let simpleGridTwo = [
  [0, 1, 1],
  [0, 1, 0],
];
let simpleGridThree = [
  [0, 1, 1],
  [1, 1, 0],
];
let simpleGridFour = [
  [0, 0, 1],
  [1, 0, 1],
  [1, 1, 1],
];

// let grid1 = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]

expect(maxAreaOfIsland).to.exist;
expect(maxAreaOfIsland(simpleGrid)).to.equal(2);
expect(maxAreaOfIsland(simpleGridTwo)).to.equal(3);
expect(maxAreaOfIsland(simpleGridThree)).to.equal(4);
expect(maxAreaOfIsland(simpleGridFour)).to.equal(6);
// expect(maxAreaOfIsland(grid1)).to.equal(6)
