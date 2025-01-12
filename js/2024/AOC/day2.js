const fs = require('fs');
const rawData = fs.readFileSync('js/2024/AOC/day-02-input.txt', 'utf8');

const parsedData = rawData.split('\n').map((str) => {
  return str.split(' ').map(Number);
})

let safeReports = 0;

// parsedData.map((report) => {
//     let idx = 1;
//     const expectedSign = Math.sign(report[1] - report[0])
//     while (idx < report.length) {
//         // 3,1,2
//         if (report[idx-1] >= report[idx] && report[idx+1] >= report[idx]) {
//             return false;
//         }

//         if (Math.abs(report[idx-1] - report[idx]) > 3 || Math.abs(report[idx-1] - report[idx]) < 1) {
//             return false;
//         }

//         const delta = report[idx] - report[idx-1]
        
//         // if (Math.sign(delta) != expectedSign) { return false }
//         if (Math.abs(delta) < 1) { return false }
//         if (Math.abs(delta) > 3) { return false }

//         idx++
//     }
//     safeReports+=1
// })

// console.log(safeReports);




function partOne(report) {
    const expectedSign = Math.sign(report[1] - report[0])
    let wrongCount = 0;

    for (let n = 1; n < report.length; n++) {
        const a = report[n - 1]
        const b = report[n]
    
        const delta = b - a
        
        if (Math.sign(delta) != expectedSign) { 
            wrongCount++;
            if (wrongCount > 1) {
                return false 
            } else {
                continue;
            }
        }
        
        if (Math.abs(delta) < 1) { 
            wrongCount++;
            if (wrongCount > 1) {
                return false 
            } else {
                continue;
            }
        }
        if (Math.abs(delta) > 3) { 
            wrongCount++;
            if (wrongCount > 1) {
                return false 
            } else {
                continue;
            }
        }
    }

    return true
}

const levelDifference = (a, b) => a - b;
const partTwo = (reports) => {
    const safeReports = reports.filter((report) =>
      report.some((_, problemDampener) => {
        const dampenedReport = report.filter(
          (_, levelIndex) => problemDampener !== levelIndex,
        );
  
        const tolerableLevels = dampenedReport
          .slice(1)
          .map((level, index) => {
            const [currLevel, adjLevel] = [level, dampenedReport[index]];
            return levelDifference(currLevel, adjLevel);
          });
        const allLevelsIncreasing = tolerableLevels.every(
          (levelDifference) => new Set([1, 2, 3]).has(levelDifference),
        );
        const allLevelsDecreasing = tolerableLevels.every(
          (levelDifference) => new Set([-1, -2, -3]).has(levelDifference),
        );
        return allLevelsIncreasing || allLevelsDecreasing;
      }),
    );
  
    return safeReports.length;
  };

// let totalSafe = 0;
// for (const report of parsedData) { if (isSafe(report)) { totalSafe += 1 } }
// console.log(totalSafe);

let resp = partTwo(parsedData);
console.log(resp);
