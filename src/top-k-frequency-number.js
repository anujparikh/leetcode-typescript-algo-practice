/**
 * https://leetcode.com/problems/top-k-frequent-elements/
 */
const Heap = require('./collections/heap'); //http://www.collectionsjs.com

const find_k_frequent_numbers = function(nums, k) {
  topNumbers = [];
  const frequencyMap = {};
  for (let i = 0; i < nums.length; i++) {
    frequencyMap[nums[i]] = (frequencyMap[nums[i]] || 0) + 1;
  }

  const maxFreqeuncyHeap = new Heap([], null, (a, b) => {
    return frequencyMap[a] - frequencyMap[b];
  });

  const keys = Object.keys(frequencyMap);

  for (let i = 0; i < keys.length; i++) {
    maxFreqeuncyHeap.push(keys[i]);
  }

  for (let i = 0; i < k; i++) {
    topNumbers.push(maxFreqeuncyHeap.pop());
  }

  return topNumbers;
};


console.log(`Here are the K frequent numbers: ${find_k_frequent_numbers([1, 3, 5, 12, 11, 12, 11], 2)}`)
console.log(`Here are the K frequent numbers: ${find_k_frequent_numbers([5, 12, 11, 3, 11], 2)}`)
console.log(`Here are the K frequent numbers: ${find_k_frequent_numbers([1, 2, 1, 1, 2, 3, 3, 4, 4, 4], 2)}`)
