const Heap = require("./collections/heap"); //http://www.collectionsjs.com

const find_k_largest_numbers = function (nums, k) {
  let minHeap = new Heap([], null, (a, b) => b - a);
  for (let i = 0; i < k; i++) {
    minHeap.push(nums[i]);
  }
  for (let i = k; i < nums.length; i++) {
    if (minHeap.peek() < nums[i]) {
      minHeap.pop();
      minHeap.push(nums[i]);
    }
  }
  return minHeap.toArray();
};

console.log(
  `Here are the top K numbers: ${find_k_largest_numbers(
    [3, 1, 5, 12, 2, 11],
    3
  )}`
);
console.log(
  `Here are the top K numbers: ${find_k_largest_numbers(
    [5, 12, 11, -1, 12],
    3
  )}`
);
