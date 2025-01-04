// naive
// function nonConstructibleChange(coins) {
//     if (!coins.length) 
//         return 1;
//   coins = coins.sort((a, b) => a - b);
//   let sum = coins[0];
//   let idx = 0;

//   while (sum >= coins[idx] && coins[idx] != sum + coins[0]) {
//     sum += coins[idx];
//     idx++;
//   }

//   let result = sum;

//   return result;
// }

// with for
function nonConstructibleChange(coins) {
    coins = coins.sort((a,b) => a - b);
    let maxChange = 0;

    for (coin of coins) {
        if (coin > maxChange + 1) {
            return maxChange + 1;
        } 
        maxChange += coin;
    }

    return maxChange + 1;
}

//   const coins = [5, 7, 1, 1, 2, 3, 22];
// const coins = [5, 7, 1, 1, 2, 3, 22];
// const coins = [1, 5, 1, 1, 1, 10, 15, 20, 100];
// const coins = [];
const coins = [87];
const result = nonConstructibleChange(coins);
console.log(result);