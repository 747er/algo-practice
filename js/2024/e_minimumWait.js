const minimumWaitingTime = (queries) => {
  queries.sort((a, b) => a - b);
  let waitingTime = 0;

  for (let idx = 0; idx < queries.length; idx++) {
    const queriesLeft = queries.length - 1 - idx;
    console.log(queriesLeft);
    waitingTime = waitingTime + queries[idx] * queriesLeft;
  }

  return waitingTime;
};

const minimumWaitingTime2 = (queries) => {
  queries.sort((a, b) => a - b);

  let totalWait = 0;
  let currentWait = 0;

  for (let i = 0; i < queries.length; i++) {
    totalWait += currentWait;
    currentWait += queries[i];
  }

  return totalWait;
}

const queries = [3, 2, 1, 2, 6];
const result = minimumWaitingTime(queries);
console.log(result);
