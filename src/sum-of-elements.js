/**
 * Sum of Elements
 */
const Heap = require("./collections/heap"); //http://www.collectionsjs.com
const find_sum_of_elements = function (nums, k1, k2) {
  let output = 0;
  const minHeap = new Heap(nums, null, (a, b) => b - a);
  let counter = 1;
  while (minHeap.length > 0) {
    if (counter > k1 && counter < k2) {
      output += minHeap.pop();
    } else {
      minHeap.pop();
    }
    counter++;
  }
  return output;
};

console.log(
  `Sum of all numbers between k1 and k2 smallest numbers: ${find_sum_of_elements(
    [1, 3, 12, 5, 15, 11],
    3,
    6
  )}`
);
console.log(
  `Sum of all numbers between k1 and k2 smallest numbers: ${find_sum_of_elements(
    [3, 5, 8, 7],
    1,
    4
  )}`
);
