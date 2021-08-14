var connectSticks = function (sticks) {
  if (sticks.length === 1) {
    return 0;
  }

  sticks.sort((a, b) => a - b);

  let sum = [],
    result = 0;

  while (sticks.length || sum.length > 1) {
    let cur = 0;
    console.log(sum);

    for (let i = 0; i < 2; i++) {
      console.log("i: ", i);
      if (sticks[0] && (sum[0] === undefined || sticks[0] < sum[0])) {
        cur += sticks[0];
        sticks.shift();
      } else {
        cur += sum[0];
        sum.shift();
      }
    }

    sum.push(cur);
    result += cur;
  }
  return result;
};

// var connectSticks = function (sticks) {
//   sticks.sort((a, b) => a - b);

//   let bigStick = sticks[0];
//   let cost = 0;

//   for (let i = 1; i < sticks.length; i++) {
//     bigStick = bigStick + sticks[i];
//     cost += bigStick;
//   }

//   return cost;
// };

console.log(
  connectSticks([3354, 4316, 3259, 4904, 4598, 474, 3166, 6322, 8080, 9009])
);
console.log(151646);
