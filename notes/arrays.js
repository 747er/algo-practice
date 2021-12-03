const numbers = [10, 20, 30, 40, 50];
const numbersWithNegatives = [-10, 20, 30, -40, -50];
const peopleArray = [
  { first: "John", last: "Smith" },
  { first: "Sally", last: "Doe" },
];

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
