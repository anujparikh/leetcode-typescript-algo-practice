const Heap = require('./collections/heap'); //http://www.collectionsjs.com
const find_smallest_range = function(lists) {
  let currentMaxNumber = -Infinity;
  let rangeStart = 0;
  let rangeEnd = Infinity;
  const minHeap = new Heap(null, null, (a, b) => b[0] - a[0]);
  for (let i = 0; i < lists.length; i++) {
    const currentNumber = lists[i][0];
    minHeap.push([currentNumber, 0, lists[i]]);
    currentMaxNumber = Math.max(currentMaxNumber, currentNumber);
  }
  while (minHeap.length === lists.length) {
    const [num, currentIndex, list] = minHeap.pop();
    if (rangeEnd - rangeStart > currentMaxNumber - num) {
      rangeStart = num;
      rangeEnd = currentMaxNumber;
    }
    if (currentIndex + 1 < list.length) {
      minHeap.push([list[currentIndex + 1], currentIndex + 1, list]);
      currentMaxNumber = Math.max(currentMaxNumber, list[currentIndex + 1]);
    }
  }
  return [rangeStart, rangeEnd];
};


console.log(`Smallest range is: ${find_smallest_range([[1, 5, 8], [4, 12], [7, 8, 10]])}`)
