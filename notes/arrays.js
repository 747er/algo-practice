const numbers = [10, 20, 30, 40, 50];
const numbersWithNegatives = [-10, 20, 30, -40, -50];
const peopleArray = [
  { first: "John", last: "Smith" },
  { first: "Sally", last: "Doe" },
];
const names = ["John", "Sally", "Peter"];

// FILTER
let filtered = numbers.filter((num) => num > 20);
console.log(filtered);

// CHAIN FILTER
let chainFiltered = numbers.filter((num) => num > 20).filter((num) => num < 50);
console.log(chainFiltered);

// FILTER OBJECT
const people = [{ name: "John" }, { name: "Ann" }];
const jPeople = people.filter((p) => p.name.startsWith("J"));
console.log(jPeople);

// FILTER OBJECT with Destructuring
const jPeopleD = people.filter(({ name }) => name.startsWith("J"));
console.log(jPeople);

// SLICE
const middleNumbers = numbers.slice(1, numbers.length - 1);
console.log(middleNumbers);

// MAP
const numsRaised = numbers.map((num) => num * 10);
console.log(numsRaised);

const numsRaisedObj = numbers.map((num) => ({ value: num * 10 }));
console.log(numsRaisedObj);

// FILTER MAP CHAIN
const filterAndMap = numbersWithNegatives
  .filter((num) => num > 0)
  .map((num) => num * 10);
console.log(filterAndMap);

// MAP OBJ
concatName = peopleArray.map((person) => `${person.first} ${person.last}`);
console.log(concatName);

const addFullname = peopleArray.map((p) => ({
  ...p,
  fullName: `${p.first} ${p.last}`,
}));
console.log(addFullname);
console.log(addFullname[0]);

// JOIN
console.log(names.join(" "));

// Reverse
numbers.reverse();

// Reverse complicated, demoing
let flipped = [];
for (const number of numbers) {
  flipped = [number, ...flipped];
}

console.log(numbers);
console.log(flipped);

// ReduceRight
let rrNumbers = [10, 20, 30, 40, 50];
numbers.reduceRight((agg, number) => [...agg, number], []);
console.log(numbers);

// Reduce example
let groups = [
  [3, 2],
  [2, 5],
  [3, 7],
];
groups.reduce((agg, curr) => {
  for (let i = 0; i < curr[0]; i++) {
    agg.push(curr[1]);
  }
  return agg;
}, []);

console.log(groups);

// Reduce example DESTRUCTURE
let rdGroups = [
  [3, 2],
  [2, 5],
  [3, 7],
];
rdGroups.reduce((agg, { count, value }) => {
  for (let i = 0; i < count; i++) {
    agg.push(value);
  }
  return agg;
}, []);

console.log(rdGroups);

// REDUCE DESTRUCTURE FILL
let rdfGroups = [
  [3, 2],
  [2, 5],
  [3, 7],
];
rdfGroups.reduce(
  (agg, { count, value }) => [...agg, ...Array(count).fill(value)],
  []
);

console.log(rdfGroups);

// LOOKUP
let lookupNumbers = [12, 15, 12, 2, 6, 6, 2, 12];
const lookup = {};

for (const number of lookupNumbers) {
  // Does it exist? If not, 0
  lookup[number] = (lookup[number] ?? 0) + 1;
}
console.log(lookup);

// LOOKUP OBJ
lookupObj = lookupNumbers.reduce(
  (agg, curr) => ({
    ...lookup,
    [curr]: (lookup[curr] ?? 0) + 1,
  }),
  {}
);

console.log(lookupObj);

// LOOKUP MIN MAX
lookupMM = lookupNumbers.reduce(
  (agg, curr) => ({
    max: Math.max(agg.max, curr),
    min: Math.min(agg.min, curr),
  }),
  {
    max: -Infinity,
    min: Infinity,
  }
);

console.log(lookupMM);

// TRANSPOSE
// 1,2  => 1,3
// 3,4  => 2,4
for (let i = 0; i < matrix.length; i++) {
  for (let j = i; j < matrix[0].length; j++) {
    let temp = matrix[i][j];
    matrix[i][j] = matrix[j][i];
    matrix[j][i] = temp;
  }
}

// REVERSE
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[0].length / 2; j++) {
    let temp = matrix[i][j];
    matrix[i][j] = matrix[i][matrix[0].length - j - 1];
    matrix[i][matrix[0].length - j - 1] = temp;
  }
}
return matrix;
