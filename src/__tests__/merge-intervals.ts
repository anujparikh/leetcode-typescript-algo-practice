import mergeIntervals from "../randoms/merge-intervals";
import { Interval } from "../randoms/utils";

describe("Merge Intervals", () => {
  it("Simple input", () => {
    let merged_intervals = mergeIntervals([
      new Interval(1, 4),
      new Interval(2, 5),
      new Interval(7, 9),
    ]);
    let result = "";
    for (let i = 0; i < merged_intervals.length; i++) {
      result += merged_intervals[i].get_interval() + " ";
    }
    console.log(`Merged intervals: ${result}`);

    merged_intervals = mergeIntervals([
      new Interval(6, 7),
      new Interval(2, 4),
      new Interval(5, 9),
    ]);
    result = "";
    for (let i = 0; i < merged_intervals.length; i++) {
      result += merged_intervals[i].get_interval() + " ";
    }
    console.log(`Merged intervals: ${result}`);

    merged_intervals = mergeIntervals([
      new Interval(1, 4),
      new Interval(2, 6),
      new Interval(3, 5),
    ]);
    result = "";
    for (let i = 0; i < merged_intervals.length; i++) {
      result += merged_intervals[i].get_interval() + " ";
    }
    console.log(`Merged intervals: ${result}`);
  });
});
