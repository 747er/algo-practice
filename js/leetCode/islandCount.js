// let rows;
// let column;
// let map;
// let hasSolution;

// const isValid = (x, y) => x >= 0 && y >= 0 && x < rows && y < columns;

// const scnaIsalnd = (x, y) => {
//   if (map[x][y] === "0") {
//     return;
//   }

//   if (map[x][y] === "1") {
//     map[x][y] = "0";
//   }

//   if (isValid(x - 1, y) && map[x - 1][y] === "1") {
//     scnaIsalnd(x - 1, y);
//   }
//   if (isValid(x, y - 1) && map[x][y - 1] === "1") {
//     scnaIsalnd(x, y - 1);
//   }
//   if (isValid(x + 1, y) && map[x + 1][y] === "1") {
//     scnaIsalnd(x + 1, y);
//   }
//   if (isValid(x, y + 1) && map[x][y + 1] === "1") {
//     scnaIsalnd(x, y + 1);
//   }
// };

// var numIslands = function (grid) {
//   map = grid;
//   rows = grid.length;
//   columns = grid[0].length;
//   let result = 0;

//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < columns; j++) {
//       if (map[i][j] === "1") {
//         result++;
//         scnaIsalnd(i, j);
//       }
//     }
//   }
//   return result;
// };

const findIslands = (grid, i, j) => {
  if (!grid?.[i]?.[j] || grid[i][j] === "0") {
    return;
  }

  grid[i][j] = "0";

  findIslands(grid, i + 1, j);
  findIslands(grid, i - 1, j);
  findIslands(grid, i, j - 1);
  findIslands(grid, i, j + 1);
};

var numIslands = function (grid) {
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        count++;
        findIslands(grid, i, j);
      }
    }
  }
  return count;
};
