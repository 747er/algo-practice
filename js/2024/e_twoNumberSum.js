const arr = [1,2,3,4,5,-1,12];
const sum = 6;

// Two number sum [naive - O(n^2)]
const result = [];
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === sum) {
            result.push(arr[i])
            result.push(arr[j])
        }
    }
}
console.log(result);

// Two number sum (hash map - O(n)) 
const hash = {};
for (num of arr) {
    const diff = sum - num;
    if (diff in hash) {
        console.log([diff, num])
        return [diff, num]
    }
    hash[num] = true;
}