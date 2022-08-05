const Heap = require("./collections/heap"); //http://www.collectionsjs.com

const find_Kth_smallest = function (lists, k) {
  const minHeap = new Heap(null, null, (a, b) => b[0] - a[0]);
  for (let i = 0; i < lists.length; i++) {
    minHeap.push([lists[i][0], 0, lists[i]]);
  }
  while (minHeap.length > 0) {
    k--;
    const [current, index, list] = minHeap.pop();
    if (k === 0) return current;
    if (list.length > index + 1) {
      minHeap.push([list[index + 1], index + 1, list]);
    }
  }
  return -1;
};
