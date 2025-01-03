const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 10, 12]

let arrayIdx = 0;
let sequenceIdx = 0;

while (sequenceIdx < sequence.length && arrayIdx < array.length) {
    if (array[arrayIdx] === sequence[sequenceIdx]) {
        sequenceIdx++
    }
    arrayIdx++
}

console.log(sequenceIdx === sequence.length - 1);
return sequenceIdx === sequence.length