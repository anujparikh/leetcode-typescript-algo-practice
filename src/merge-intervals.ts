export class Interval {
  start: number;
  end: number;
  constructor(start: number, end: number) {
    this.start = start;
    this.end = end;
  }

  get_interval() {
    return "[" + this.start + ", " + this.end + "]";
  }
}

export default function (intervals: Array<Interval>) {
  const merged: Array<Interval> = [];

  intervals.sort((a, b) => a.start - b.start);

  let counter = 1;
  let start = intervals[0].start;
  let end = intervals[0].end;

  while (counter < intervals.length) {
    if (intervals[counter].start <= end) {
      end = Math.max(end, intervals[counter].end);
    } else {
      merged.push(new Interval(start, end));
      start = intervals[counter].start;
      end = intervals[counter].end;
    }
    counter++;
  }
  merged.push(new Interval(start, end));

  return merged;
}
