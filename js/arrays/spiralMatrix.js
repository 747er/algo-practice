const matrix = [
  [1, "e", 2, 3, "a"],
  [4, "f", 5, 6, "b"],
  [7, "g", 8, 9, "c"],
  [10, "h", 11, 12, "d"],
];

// 96,7
var spiralOrder = function (matrix) {
  const res = [];
  while (matrix.length) {
    res.push(...matrix.shift());
    console.log(matrix);
    for (const m of matrix) {
      let val = m.pop();
      console.log(val);
      if (val) res.push(val);
      m.reverse();
    }
    matrix.reverse();
  }
  return res;
};

//  45/9
var spiralOrder = function (matrix) {
  if (matrix.length === 0) return [];
  if (matrix[0].length === 0) return [];

  let result = [];
  // ADD FIRST ROW
  result = result.concat(matrix.shift());

  // ADD LAST COL
  for (let i = 0; i < matrix.length - 1; i++) {
    result.push(matrix[i].pop());
  }

  // ADD LAST ROW
  const lastRow = matrix.pop();
  if (lastRow) result = result.concat(lastRow.reverse());

  // ADD FIRST COL
  for (let i = matrix.length - 1; i >= 0; i--) {
    if (matrix[i].length) result.push(matrix[i].shift());
  }

  return result.concat(spiralOrder(matrix));
};

// 96, 29
var spiralOrder = function (matrix) {
  const spiral = [];
  let dir = 0;
  let top = 0,
    bottom = matrix.length - 1,
    left = 0,
    right = matrix[0].length - 1;
  while (left <= right && top <= bottom) {
    if (dir == 0) {
      for (let i = left; i <= right; i++) {
        spiral.push(matrix[top][i]);
      }
      dir++;
      top++;
    } else if (dir == 1) {
      for (let i = top; i <= bottom; i++) {
        spiral.push(matrix[i][right]);
      }
      dir++;
      right--;
    } else if (dir === 2) {
      for (let i = right; i >= left; i--) {
        spiral.push(matrix[bottom][i]);
      }
      dir++;
      bottom--;
    } else if (dir == 3) {
      for (let i = bottom; i >= top; i--) {
        spiral.push(matrix[i][left]);
      }
      dir++;
      left++;
    }
    dir = dir % 4;
  }
  return spiral;
};

console.log(spiralOrder(matrix));
