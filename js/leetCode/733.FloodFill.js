const { expect } = require("chai");

var floodFill = function (image, sr, sc, newColor) {
  const squareShouldBeFilled = (y, x, oldColor) => {
    if (oldColor === newColor) return false;
    if (y < 0 || y > image.length - 1 || image[y][x] !== oldColor) return false;
    if (x < 0 || x > image[0].length - 1 || image[y][x] !== oldColor)
      return false;

    return true;
  };
  const fillColor = (y, x, oldColor) => {
    image[y][x] = newColor;

    //     // UP
    if (squareShouldBeFilled(y - 1, x, oldColor)) {
      fillColor(y - 1, x, oldColor);
    }
    //     // DOWN
    if (squareShouldBeFilled(y + 1, x, oldColor)) {
      fillColor(y + 1, x, oldColor);
    }
    //     // RIGHT
    if (squareShouldBeFilled(y, x + 1, oldColor)) {
      fillColor(y, x + 1, oldColor);
    }
    //     // LEFT
    if (squareShouldBeFilled(y, x - 1, oldColor)) {
      fillColor(y, x - 1, oldColor);
    }
  };
  fillColor(sr, sc, image[sr][sc]);

  return image;
};

// expect(floodFill([[1]], 0, 0, 2)).to.deep.equal([[2]])

// We'll get here
// expect(floodFill([[0,0,0],[0,0,0]], 0, 0, 2)).to.deep.equal([[2,2,2],[2,2,2]])
expect(
  floodFill(
    [
      [0, 0, 0],
      [0, 1, 1],
    ],
    1,
    1,
    1
  )
).to.deep.equal([
  [2, 2, 2],
  [2, 2, 2],
]);

// [[0,0,0],[0,1,1]]
// 1
// 1
// 1

// 2 2 0
// 0 0 0

// 1, 1, 1
// 1, 1, 0
// 1, 0, 1

// Starting at [SR,SC] [Y,X]
// Eval 4 directions (N, E, S, W)
//// IF value == value
////// value = new value
////// eval 4 directions

// Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, newColor = 2
// Output: [[2,2,2],[2,2,2]]
// floodFill([[0,0,0],[0,0,0]], 0, 0, 2)

expect(true).to.equal(true);
