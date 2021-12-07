const { expect } = require("chai");

const input = [
  [
    [9, 10.5],
    [12, 13],
    [16, 18],
  ],
  [9, 20],
];
const input2 = [
  [
    [10, 11.5],
    [12.5, 14.5],
    [14.5, 15],
    [16, 17],
  ],
  [10, 18.5],
];
const expected = [
  [11.5, 12],
  [15, 16],
  [18, 18.5],
];

function convertArrOfArrToMins(arr) {
  return arr.map((time) => {
    return [time[0] * 60, time[1] * 60];
  });
}

function convertArrOfArrToFloat(arr) {
  return arr.map((time) => {
    return [time[0] / 60, time[1] / 60];
  });
}

function determineFreeTime(appointments, duration) {
  let freedom = [];
  for (let index = 0; index < appointments.length - 1; index++) {
    let nextAppointment = appointments[index + 1][0];
    let appointmentEnd = appointments[index][1];
    if (nextAppointment - appointmentEnd >= duration) {
      freedom.push([appointmentEnd, nextAppointment]);
    }
  }
  return freedom;
}

function findMeeting(p1, p2, duration) {
  let p1Busy = convertArrOfArrToMins(p1[0]);
  let p2Busy = convertArrOfArrToMins(p2[0]);
  let p1Avail = convertArrOfArrToMins([p1[1]]);
  let p2Avail = convertArrOfArrToMins([p2[1]]);

  p1Busy.unshift([0, p1Avail[0][0]]);
  p1Busy.push([p1Avail[0][1], 60 * 24]);
  p2Busy.unshift([0, p2Avail[0][0]]);
  p2Busy.push([p2Avail[0][1], 60 * 24]);

  // const earliestTime = Math.max(p1Avail[0][0], p2Avail[0][0])
  // const latestTime =  Math.min(p1Avail[0][1] - duration, p2Avail[0][1] - duration)
  // let p1FreeBlocks = determineFreeTime(p1Busy)
  // let p2FreeBlocks = determineFreeTime(p2Busy)

  let allBusyBlocks = [...p1Busy, ...p2Busy].sort((a, b) => a[0] - b[0]);
  // console.log(convertArrOfArrToFloat(allBusyBlocks))

  let result = determineFreeTime(allBusyBlocks, duration);
  return result;
}

let result = findMeeting(input, input2, 30);

// console.log(result)
// console.log(expected)
// console.log(convertArrOfArrToFloat(result))
// console.log(convertArrOfArrToMins(expected))

// expect(result).to.deep.equal(convertArrOfArrToMins(expected))
