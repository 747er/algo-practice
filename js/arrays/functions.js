// ES6 ARRAY FOR
const order = "fieodq";
let orderMap = {};

// Note that Array.entries() returns an iterator, which is what allows it to work in the for-of loop; don't confuse this with Object.entries(), which returns an array of key-value pairs.
for (const [i, value] of order.split("").entries()) {
  console.log(value);
  orderMap[i] = value;
}

// console.log(orderMap);

const order = "fieodq";
let orderMap = {};

for (let i = 0; i < order.length; i++) {
  orderMap[order[i]] = i;
}

console.log(orderMap);
