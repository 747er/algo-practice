wrapper = (array) => array.join("|");

let hashObj = {};
hashObj[wrapper([1, 2])] = "true";
console.log(hashObj[wrapper([1, 2])]);

let hashMap = new Map();
hashMap.set(wrapper([1, 2]), "true");
console.log(hashMap.get(wrapper([1, 2])));
