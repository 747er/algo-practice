var highFive = function (items) {
  let studentScores = {};

  items.forEach(function (item, index) {
    if (item[0] in studentScores) {
      studentScores[item[0]].push(item[1]);
    } else {
      studentScores[item[0]] = [item[1]];
    }
  });

  const getAverage = (res, student) => {
    const topFive = studentScores[student]
      .sort((a, b) => b - a)
      .reduce((total, curr, i) => {
        if (i < 5) total += curr;
        return total;
      });
    res.push([student, Math.floor(topFive / 5)]);
    return res;
  };
  return Object.keys(studentScores).reduce(getAverage, []);
};

let result = highFive([
  [1, 100],
  [7, 100],
  [1, 100],
  [7, 100],
  [1, 100],
  [7, 100],
  [1, 100],
  [7, 100],
  [1, 100],
  [7, 100],
]);
console.log(result);
