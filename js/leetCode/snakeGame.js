var expect = require("chai").expect;

class SnakeGame {
  constructor(w, h, food) {
    this.width = w;
    this.height = h;
    this.snake = [0, 0];
    this.snakeLength = 0;
    this.foodArray = food;
    this.foodIndex = 0;

    return this.snakeLength;
  }

  move(direction) {
    // (ROW, COL)
    switch (direction) {
      case "U":
        this.snake[0] -= 1;
        break;
      case "R":
        this.snake[1] += 1;
        break;
      case "D":
        this.snake[0] += 1;
        break;
      case "L":
        this.snake[1] -= 1;
    }

    if (
      this.snake[0] == this.height ||
      this.snake[0] < 0 ||
      this.snake[1] == this.width ||
      this.snake[1] < 0
    )
      return -1;

    if (
      this.foodIndex < this.foodArray.length &&
      this.snake[0] === this.foodArray[this.foodIndex][0] &&
      this.snake[1] === this.foodArray[this.foodIndex][1]
    ) {
      this.snakeLength++;
      this.foodIndex++;
    }

    return this.snakeLength;
  }
}

// ["SnakeGame","move","move","move","move","move","move","move","move","move","move","move","move","move","move","move"]
// [[3,3,[[2,0],[0,0],[0,2],[0,1],[2,2],[0,1]]],
// ["D"],["D"],["R"],["U"],["U"],["L"],["D"],["R"],["R"],["U"],["L"],["L"],["D"],["R"],["U"]]
// ["SnakeGame","move","move","move","move","move","move","move","move","move","move","move","move","move","move","move"]
// ["D"],["D"],["R"],["U"],["U"],["L"],["D"],["R"],["R"],["U"],["L"],["L"],["D"],["R"],["U"]]

sg3 = new SnakeGame(3, 3, [
  [2, 0],
  [0, 0],
  [0, 2],
  [0, 1],
  [2, 2],
  [0, 1],
]);
expect(sg3.move("D")).to.equal(0);
expect(sg3.move("D")).to.equal(1);
expect(sg3.move("R")).to.equal(1);
expect(sg3.move("U")).to.equal(1);
expect(sg3.move("U")).to.equal(1);
expect(sg3.move("L")).to.equal(2);
expect(sg3.move("D")).to.equal(2);
expect(sg3.move("R")).to.equal(2);
expect(sg3.move("R")).to.equal(2);
expect(sg3.move("U")).to.equal(3);
expect(sg3.move("L")).to.equal(4);
expect(sg3.move("L")).to.equal(4);
expect(sg3.move("D")).to.equal(4);
expect(sg3.move("R")).to.equal(4);
// SNAKE RUNS INTO SELF
expect(sg3.move("U")).to.equal(-1);

// [null,0,1,1,1,1,2,2,2,2,3,4,4,4,4,4]
// [null,0,1,1,1,1,2,2,2,2,3,4,4,4,4,-1]

sg2 = new SnakeGame(2, 1, [[0, 1]]);
expect(sg2.move("R")).to.equal(1);
expect(sg2.snake).to.deep.equal([0, 1]);
expect(sg2.move("R")).to.equal(-1);

snakeGame = new SnakeGame(3, 2, [
  [1, 2],
  [0, 1],
  [2, 2],
]);

expect(snakeGame).to.have.property("snake");
expect(snakeGame).to.have.property("snakeLength");
expect(snakeGame.snakeLength).to.equal(0);
expect(snakeGame.foodArray[snakeGame.foodIndex]).to.deep.equal([1, 2]);

expect(snakeGame.snake).to.be.an("array");
expect(snakeGame.snake).to.deep.equal([0, 0]);

expect(snakeGame.move("R")).to.equal(0);
expect(snakeGame.snake).to.deep.equal([0, 1]);

expect(snakeGame.move("D")).to.equal(0);
expect(snakeGame.snake).to.deep.equal([1, 1]);

expect(snakeGame.move("R")).to.equal(1);
expect(snakeGame.snake).to.deep.equal([1, 2]);
expect(snakeGame.foodArray[snakeGame.foodIndex]).to.deep.equal([0, 1]);

expect(snakeGame.move("U")).to.equal(1);
expect(snakeGame.snake).to.deep.equal([0, 2]);

expect(snakeGame.move("L")).to.equal(2);
expect(snakeGame.snake).to.deep.equal([0, 1]);

expect(snakeGame.move("L")).to.equal(2);
expect(snakeGame.snake).to.deep.equal([0, 0]);

expect(snakeGame.move("U")).to.equal(-1);
