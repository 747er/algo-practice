// Smallest Difference - Optimized Loop
const smallestDiff = (arrayOne, arrayTwo) => {
    arrayOne.sort((a, b) => a - b);
    arrayTwo.sort((a, b) => a - b);

    let smallestPair = [];
    let smallestDiff = Infinity;
    let idx1 = 0;
    let idx2 = 0;

    while (idx1 < arrayOne.length && idx2 < arrayTwo.length) {
        const num1 = arrayOne[idx1];
        const num2 = arrayTwo[idx2];
        const diff = Math.abs(num1 - num2);

        if (num1 > num2) {
            idx2++
        } else {
            idx1++
        }

        if (diff < smallestDiff) {
            smallestDiff = diff;
            smallestPair = [num1, num2]
        }
    }

    return smallestPair
}

// Smallest Difference Double loop
const smallestDiffDouble = (arrayOne, arrayTwo) => {
    arrayOne.sort((a,b) => a - b);
    arrayTwo.sort((a,b) => a - b);

    let lowestDiff = Infinity;
    let result = [];

    for (let i = 0; i < arrayOne.length; i++) {
        let lIdx = 0;
        let rIdx = arrayTwo.length - 1;

        while (lIdx < rIdx) {
            let lDiff = Math.abs(arrayOne[i] - arrayTwo[lIdx]);
            let rDiff = Math.abs(arrayOne[i] - arrayTwo[rIdx]);

            if (lDiff > rDiff) {
                if (rDiff < lowestDiff) {
                    lowestDiff = rDiff;
                    result = [arrayOne[i], arrayTwo[rIdx]]
                }
                lIdx++
            } else {
                if (lDiff < lowestDiff) {
                    lowestDiff = lDiff;
                    result = [arrayOne[i], arrayTwo[lIdx]]
                }
                rIdx--
            }
        }
    }

    return result;
}

const arr1 = [-1, 5, 10, 20, 28, 3];
const arr2 = [26, 134, 135, 15, 17];

const result = smallestDiff(arr1, arr2);
console.log(result);