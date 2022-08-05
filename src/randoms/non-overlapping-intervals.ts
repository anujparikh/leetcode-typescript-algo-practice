/**
 * https://leetcode.com/problems/non-overlapping-intervals/
 */
function eraseOverlapIntervals(intervals: number[][]): number {
  let sortedIntervals = intervals.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    return a[1] - b[1];
  });
  let noOfRemovedIntervals = 0;
  let previousEnd = sortedIntervals[0][1];
  let j = 1;
  while (j < sortedIntervals.length) {
    if (sortedIntervals[j][0] >= previousEnd) {
      previousEnd = sortedIntervals[j][1];
    } else {
      noOfRemovedIntervals++;
      previousEnd = Math.min(sortedIntervals[j][1], previousEnd);
    }
    j++;
  }
  return noOfRemovedIntervals;
}
