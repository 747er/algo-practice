import React, { useState, setState } from "react";

class Game {
  constructor() {
    this.board = [Array(3).fill("?"), Array(3).fill("?"), Array(3).fill("?")];
  }
  isWinner() {
    for (let i = 0; i < this.board.length; i++) {
      if (
        this.board[0][i] != "?" &&
        this.board[0][i] === this.board[1][i] &&
        this.board[1][i] === this.board[2][i]
      ) {
        console.log("TTT!");
        return true;
      }
      if (
        this.board[i][0] != "?" &&
        this.board[i][0] === this.board[i][1] &&
        this.board[i][1] === this.board[i][2]
      ) {
        console.log("TTT!!");
        return true;
      }
    }

    if (
      this.board[0][0] !== "?" &&
      this.board[0][0] === this.board[1][1] &&
      this.board[1][1] === this.board[2][2]
    ) {
      console.log("D1Winner!");
      return true;
    }

    if (
      this.board[0][2] !== "?" &&
      this.board[0][2] === this.board[1][1] &&
      this.board[1][1] === this.board[2][0]
    ) {
      console.log("D2Winner!");
      console.log(this.board[2][0]);
      console.log(this.board[1][1]);
      console.log(this.board[2][0]);
      return true;
    }

    console.log("checking 2");

    return false;
  }
}

export default function TTT() {
  const [game, setGame] = useState(new Game());
  const [board, setBoard] = useState(game.board);
  const [turn, setTurn] = useState("X");
  const [gameOver, setGameOver] = useState(false);

  const handleClick = function (y, x) {
    if (gameOver) return;
    if (board[y][x] !== "?") return;
    board[y][x] = turn;
    setBoard(board);
    setTurn(turn === "X" ? "O" : "X");
    console.log("checking");
    if (game.isWinner()) {
      console.log("WINNER!");
      setGameOver(true);
    }
  };

  const handleReset = function () {
    setGame(new Game());
    setBoard(game.board);
    setTurn("X");
    setGameOver(false);
  };

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <div id="board">
        {game.board.map((row, yIdx) => {
          return row.map((square, xIdx) => {
            return (
              <div
                onClick={() => handleClick(yIdx, xIdx)}
                className="board-square"
                key={`${xIdx}|${yIdx}`}
              >
                {game.board[yIdx][xIdx]}
              </div>
            );
          });
        })}
      </div>
      <div onClick={() => handleReset()}>Reset</div>
    </div>
  );
}
