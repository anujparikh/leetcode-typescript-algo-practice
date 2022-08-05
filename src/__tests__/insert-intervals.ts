import insertIntervals from "../randoms/insert-intervals";
import { Interval } from "../randoms/utils";

describe("Insert Intervals", () => {
  it("Simple input", () => {
    let merged_intervals = insertIntervals(
      [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)],
      new Interval(4, 6)
    );
    let result = "";
    for (let i = 0; i < merged_intervals.length; i++) {
      result += merged_intervals[i].get_interval() + " ";
    }
    console.log(`Inserted and merged intervals: ${result}`);

    merged_intervals = insertIntervals(
      [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)],
      new Interval(4, 10)
    );
    result = "";
    for (let i = 0; i < merged_intervals.length; i++) {
      result += merged_intervals[i].get_interval() + " ";
    }
    console.log(`Inserted and merged intervals: ${result}`);

    merged_intervals = insertIntervals(
      [new Interval(2, 3), new Interval(5, 7)],
      new Interval(1, 4)
    );
    result = "";
    for (let i = 0; i < merged_intervals.length; i++) {
      result += merged_intervals[i].get_interval() + " ";
    }
    console.log(`Inserted and merged intervals: ${result}`);
  });
});
