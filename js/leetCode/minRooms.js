// Given an array of meeting time intervals intervals
//  where intervals[i] = [starti, endi], return the
// minimum number of conference rooms required.

// WRONG WAY
// var minMeetingRooms = function(intervals) {
//     if (!intervals.length) return 0
//     if (intervals.length === 1) return 1

//     let rooms = 1;

//     intervals = intervals.sort(function(a,b) {
//         return a[0] - b[0]
//     })

//     for (let i = 1; i < intervals.length; i++) {
//         console.log(intervals[i][1])
//         if (intervals[i - 1][1] > intervals[i][1]) {
//             rooms += 1
//         }
//     }

//     return rooms
// };

var minMeetingRooms = function (intervals) {
  if (!intervals || intervals.length < 1) {
    return 0;
  }
  let rooms = 0;
  let end = 0;

  const starts = intervals.map((a) => a[0]).sort((a, b) => a - b);
  const ends = intervals.map((a) => a[1]).sort((a, b) => a - b);

  console.log(starts);
  console.log(ends);

  for (let i = 0; i < intervals.length; i++) {
    if (starts[i] < ends[end]) {
      console.log(starts[i]);
      console.log("is less than");
      console.log(ends[end]);
      rooms++;
    } else {
      console.log(starts[i]);
      console.log("is more than");
      console.log(ends[end]);
      end++;
    }
  }
  return rooms;
};

intervals = [
  [0, 30],
  [5, 10],
  [5, 11],
  [15, 20],
  [35, 40],
];
console.log(minMeetingRooms(intervals));
