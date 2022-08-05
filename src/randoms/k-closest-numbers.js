/**
 * https://leetcode.com/problems/find-k-closest-elements/
 */
const Heap = require("./collections/heap"); //http://www.collectionsjs.com

const find_closest_elements = function (arr, K, X) {
  const result = [];
  const compareFunction = (a, b) => {
    const distanceA = Math.abs(X - a);
    const distanceB = Math.abs(X - b);
    return distanceB - distanceA;
  };
  const minHeap = new Heap([], null, compareFunction);
  for (let i = 0; i < arr.length; i++) {
    minHeap.push(arr[i]);
  }
  for (let i = 0; i < K && minHeap.length !== 0; i++) {
    result.push(minHeap.pop());
  }
  return result;
};

console.log(
  `'K' closest numbers to 'X' are: ${find_closest_elements(
    [5, 6, 7, 8, 9],
    3,
    7
  )}`
);
console.log(
  `'K' closest numbers to 'X' are: ${find_closest_elements(
    [2, 4, 5, 6, 9],
    3,
    6
  )}`
);
console.log(
  `'K' closest numbers to 'X' are: ${find_closest_elements(
    [2, 4, 5, 6, 9],
    3,
    10
  )}`
);
