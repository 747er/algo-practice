const { expect } = require("chai");

function exist(board, word) {
  if (board.length === 0) return false;
  function hasWord(i, j, w) {
    if (w === word.length) {
      return true;
    } else if (visited.has(`${i}|${j}`) || board[i]?.[j] !== word[w]) {
      return false;
    }

    visited.add(`${i}|${j}`);

    const neighbourCoords = [
      [i + 1, j],
      [i - 1, j],
      [i, j + 1],
      [i, j - 1],
    ];
    for (const [x, y] of neighbourCoords) if (hasWord(x, y, w + 1)) return true;

    visited.delete(`${i}|${j}`);

    return false;
  }

  const visited = new Set();

  for (let i = 0; i < board.length; ++i)
    for (let j = 0; j < board[0].length; ++j) if (hasWord(i, j, 0)) return true;

  return false;
}

const board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
const word = "ABCCED";
const result = true;

expect(exist(board, word)).to.equal(result);
