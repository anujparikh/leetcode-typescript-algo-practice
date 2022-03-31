//@ts-nocheck
const Heap = require("./collections/heap"); //http://www.collectionsjs.com
class Job {
  constructor(start, end, cpu_load) {
    this.start = start;
    this.end = end;
    this.cpu_load = cpu_load;
  }
}

const find_max_cpu_load = function (jobs) {
  jobs.sort((a, b) => a.start - b.start);

  const minHeap = new Heap([], null, (a, b) => b.end - a.end);

  let currentLoad = 0;
  let maxLoad = 0;
  for (let i = 0; i < jobs.length; i++) {
    while (minHeap.length > 0 && minHeap.peek().end <= jobs[i].start) {
      const popedJob = minHeap.pop();
      currentLoad -= popedJob.cpu_load;
    }
    minHeap.push(jobs[i]);
    currentLoad += jobs[i].cpu_load;

    maxLoad = Math.max(currentLoad, maxLoad);
  }

  return maxLoad;
};

console.log(
  `Maximum CPU load at any time: ${find_max_cpu_load([
    new Job(1, 4, 3),
    new Job(2, 5, 4),
    new Job(7, 9, 6),
  ])}`
);
console.log(
  `Maximum CPU load at any time: ${find_max_cpu_load([
    new Job(6, 7, 10),
    new Job(2, 4, 11),
    new Job(8, 12, 15),
  ])}`
);
console.log(
  `"Maximum CPU load at any time: ${find_max_cpu_load([
    new Job(1, 4, 2),
    new Job(2, 4, 1),
    new Job(3, 6, 5),
  ])}`
);
