// @ts-nocheck
/**
 * https://leetcode.com/problems/employee-free-time/
 */
class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  get_interval() {
    return "[" + this.start + ", " + this.end + "]";
  }
}

const find_employee_free_time = function (schedule) {
  let result = [];
  let mergedSchedule = [];
  let counter = 0;
  while (counter < schedule.length) {
    let innerCounter = 0;
    while (innerCounter < schedule[counter].length) {
      mergedSchedule.push(schedule[counter][innerCounter]);
      innerCounter++;
    }
    counter++;
  }
  mergedSchedule.sort((a, b) => a.start - b.start);

  for (let i = 0, j = 1; j < mergedSchedule.length; i++, j++) {
    if (mergedSchedule[i].end < mergedSchedule[j].start) {
      result.push(new Interval(mergedSchedule[i].end, mergedSchedule[j].start));
    }
  }

  return result;
};

input = [
  [new Interval(1, 3), new Interval(5, 6)],
  [new Interval(2, 3), new Interval(6, 8)],
];
intervals = find_employee_free_time(input);
result = "Free intervals: ";
for (i = 0; i < intervals.length; i++) result += intervals[i].get_interval();
console.log(result);

input = [
  [new Interval(1, 3), new Interval(9, 12)],
  [new Interval(2, 4)],
  [new Interval(6, 8)],
];
intervals = find_employee_free_time(input);
result = "Free intervals: ";
for (i = 0; i < intervals.length; i++) result += intervals[i].get_interval();
console.log(result);

input = [
  [new Interval(1, 3)],
  [new Interval(2, 4)],
  [new Interval(3, 5), new Interval(7, 9)],
];
intervals = find_employee_free_time(input);
result = "Free intervals: ";
for (i = 0; i < intervals.length; i++) result += intervals[i].get_interval();
console.log(result);
