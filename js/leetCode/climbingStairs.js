const climbingStairs = function (numberOfStairs) {
  let previous = 0;
  let current = 1;

  for (let index = 1; index <= numberOfStairs; index += 1) {
    current += previous;
    previous = current - previous;
  }
  return current;
};
