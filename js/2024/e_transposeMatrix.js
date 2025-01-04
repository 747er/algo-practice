// naive - nothing changes because transpose happens twice
// const transposeMatrix = (matrix) => {
//     const outterLen = matrix.length - 1;
//     const innerLen = matrix[0].length - 1;

//     let outterIdx = 0;

//     while (outterIdx <= outterLen) {
//         let innerIdx = 0;
//         while (innerIdx <= innerLen) {
//             const originVal = matrix[outterIdx][innerIdx];
//             const destinationVal = matrix[innerIdx][outterIdx];

//             console.log(originVal);

//             matrix[outterIdx][innerIdx] = destinationVal;
//             matrix[innerIdx][outterIdx] = originVal

//             innerIdx++;
//         }
//         outterIdx++
//     }

//     console.log(matrix);
//     return matrix
// }

// only works when outter and inner match
// const transposeMatrix = (matrix) => {
//     const outterLen = matrix.length;
//     const innerLen = matrix[0].length;

//     let outterIdx = 0;
//     const outputArray = [];

//     while (outterIdx < outterLen) {
//         outputArray.push(new Array(outterLen));
//         let innerIdx = 0;
        
//         while (innerIdx < innerLen) {
//             outputArray[outterIdx][innerIdx] = matrix[innerIdx][outterIdx];
//             innerIdx++;
//         }
//         outterIdx++
//     }

//     return outputArray
// }

// O(w * h)
const transposeMatrix = (matrix) => {
    const height = matrix.length;
    const width = matrix[0].length
    const transposed = new Array(width).fill(null).map(_ => new Array());

    for (let row = 0; row < height; row++) {
        for(let col = 0; col < width; col++) {
            transposed[col][row] = matrix[row][col];
        }
    }

    return transposed
}

const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

transposeMatrix(matrix);