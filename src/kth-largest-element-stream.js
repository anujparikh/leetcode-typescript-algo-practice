/**
 * https://leetcode.com/problems/kth-largest-element-in-a-stream/
 */
const Heap = require("./collections/heap"); //http://www.collectionsjs.com

class KthLargestNumberInStream {
  constructor(nums, k) {
    this.k = k;
    this.minHeap = new Heap(nums, null, (a, b) => b - a);
  }

  add(num) {
    this.minHeap.push(num);
    while (this.minHeap.length > this.k) {
      this.minHeap.pop();
    }
    return this.minHeap.peek();
  }
}

kthLargestNumber = new KthLargestNumberInStream([3, 1, 5, 12, 2, 11], 4);
console.log(`4th largest number is: ${kthLargestNumber.add(6)}`);
console.log(`4th largest number is: ${kthLargestNumber.add(13)}`);
console.log(`4th largest number is: ${kthLargestNumber.add(4)}`);
