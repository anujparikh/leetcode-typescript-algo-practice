/**
 * https://leetcode.com/problems/find-right-interval/
 */
const Heap = require("collections/heap");
class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

const find_next_interval = function (intervals) {
  let result = new Array(intervals.length);
  const minHeapIntervals = new Heap(
    [],
    null,
    (a, b) => b[0].start - a[0].start
  );
  let counter = 0;
  while (counter < intervals.length) {
    minHeapIntervals.push([intervals[counter], counter]);
    counter++;
  }

  while (minHeapIntervals.length !== 0) {
    if (minHeapIntervals.length === 1) {
      const [currentInterval, index] = minHeapIntervals.pop();
      result[index] = -1;
    } else {
      const [currentInterval, index] = minHeapIntervals.pop();
      const [nextInterval, nextIndex] = minHeapIntervals.peek();
      if (currentInterval.end <= nextInterval.start) {
        result[index] = nextIndex;
      } else {
        result[index] = -1;
      }
    }
  }
  return result;
};

result = find_next_interval([
  new Interval(2, 3),
  new Interval(3, 4),
  new Interval(5, 6),
]);
console.log(`Next interval indices are: ${result}`);

result = find_next_interval([
  new Interval(3, 4),
  new Interval(1, 5),
  new Interval(4, 6),
]);
console.log(`Next interval indices are: ${result}`);
