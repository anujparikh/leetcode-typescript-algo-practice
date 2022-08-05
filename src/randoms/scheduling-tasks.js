/**
 * https://leetcode.com/problems/task-scheduler/
 */
const Heap = require("./collections/heap"); //http://www.collectionsjs.com
const schedule_tasks = function (tasks, k) {
  let totalInterval = 0;
  const frequencyMap = {};
  for (let i = 0; i < tasks.length; i++) {
    frequencyMap[tasks[i]] = (frequencyMap[tasks[i]] || 0) + 1;
  }
  const compareFunction = (a, b) => a[1] - b[1];
  const maxHeap = new Heap([], null, compareFunction);
  const queue = [];
  const keys = Object.keys(frequencyMap);
  for (let i = 0; i < keys.length; i++) {
    maxHeap.push([keys[i], frequencyMap[keys[i]]]);
  }
  while (maxHeap.length > 0) {
    let counter = k + 1;
    while (counter > 0 && maxHeap.length > 0) {
      totalInterval++;
      let [char, freq] = maxHeap.pop();
      if (freq > 1) {
        queue.push([char, freq - 1]);
      }
      counter--;
    }
    while (queue.length > 0) {
      let [char, freq] = queue.shift();
      maxHeap.push([char, freq]);
    }
    if (maxHeap.length > 0) {
      totalInterval += counter;
    }
  }

  return totalInterval;
};

console.log(
  `Minimum intervals needed to execute all tasks: ${schedule_tasks(
    ["a", "a", "a", "b", "c", "c"],
    2
  )}`
);
console.log(
  `Minimum intervals needed to execute all tasks: ${schedule_tasks(
    ["a", "a", "a"],
    3
  )}`
);
console.log(
  `Minimum intervals needed to execute all tasks: ${schedule_tasks(
    ["a", "b", "a"],
    3
  )}`
);
