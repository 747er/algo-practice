

import React, { Component, useState, useEffect } from "react";

function wrapper(array) {
  return array.join("|");
}

function getInitialBoard() {
  return {
    squares: [
      [110, 5, 112, 113, 114],
      [210, 211, 5, 213, 214],
      [310, 311, 3, 313, 314],
      [410, 411, 412, 5, 414],
      [5, 1, 512, 3, 3],
      [610, 4, 1, 613, 614],
      [710, 1, 2, 713, 714],
      [810, 1, 2, 1, 1],
      [1, 1, 2, 2, 2],
      [4, 1, 4, 4, 1014],
    ],
  };
}

function generateNewSquares(firstChoice, secondChoice, board) {
  const [firstY, firstX, firstVal] = firstChoice;
  const [secondY, secondX, secondVal] = secondChoice;

  board.squares[firstY][firstX] = secondVal;
  board.squares[secondY][secondX] = firstVal;

  return board.squares;
}

function Board() {
  const [board, setBoard] = useState(getInitialBoard());
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);
  const [highlightIndex, setHighlightIndex] = useState(null);

  let handleClick = (y, x) => {
    if (firstChoice === null) {
      setFirstChoice([y, x, board.squares[y][x]]);
      return;
    }
    setSecondChoice([y, x, board.squares[y][x]]);
    setHighlightIndex(null);
  };

  useEffect(() => {
    if (firstChoice !== null && secondChoice !== null) {
      setBoard({
        squares: generateNewSquares(firstChoice, secondChoice, board),
      });
      clearState();
    }
  }, [firstChoice, secondChoice]);

  function clearState() {
    setFirstChoice(null);
    setSecondChoice(null);
    return true;
  }

  console.log("before render");

  return (
    <div>
      <div className="board-title">CANDY CRUSH</div>
      {board.squares.map((row, rowIndex) => (
        <div className="board-row" key={rowIndex}>
          <div className="board-row" key={rowIndex} value={rowIndex}>
            {row.map((square, colIndex) => (
              <div
                className={`board-square ${
                  firstChoice &&
                  wrapper([firstChoice[0], firstChoice[1]]) ===
                    wrapper([rowIndex, colIndex])
                    ? "highlight"
                    : ""
                }`}
                key={wrapper([rowIndex, colIndex])}
                onClick={() => handleClick(rowIndex, colIndex)}
              >
                {square}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Board;
