/**
 * https://leetcode.com/problems/sliding-window-median/
 */
const Heap = require("./collections/heap"); //http://www.collectionsjs.com

class SlidingWindowMedian {
  constructor() {
    this.maxHeap = new Heap([], null, (a, b) => a - b);
    this.minHeap = new Heap([], null, (a, b) => b - a);
  }

  find_sliding_window_median(nums, k) {
    result = [];
    if (k === 1) {
      return nums;
    }

    for (let i = 0; i < nums.length; i++) {
      this.maxHeap.push(nums[i]);
      this.minHeap.push(this.maxHeap.pop());
      if (this.maxHeap.length < this.minHeap.length) {
        this.maxHeap.push(this.minHeap.pop());
      }
      if (i - k + 1 >= 0) {
        result.push(this.getMedianFromHeaps());
        if (nums[i - k + 1] <= this.maxHeap.peek()) {
          this.maxHeap.delete(nums[i - k + 1]);
        } else {
          this.minHeap.delete(nums[i - k + 1]);
        }
        this.getBalanceHeaps();
      }
    }
    return result;
  }

  getBalanceHeaps() {
    if (this.maxHeap.length - 1 > this.minHeap.length) {
      this.minHeap.push(this.maxHeap.pop());
    } else if (this.maxHeap.length < this.minHeap.length) {
      this.maxHeap.push(this.minHeap.pop());
    }
  }

  getMedianFromHeaps() {
    if (this.maxHeap.length === this.minHeap.length) {
      return (this.maxHeap.peek() + this.minHeap.peek()) / 2.0;
    }
    return this.maxHeap.peek();
  }
}

var slidingWindowMedian = new SlidingWindowMedian();
result = slidingWindowMedian.find_sliding_window_median([1, 2, -1, 3, 5], 2);

console.log(`Sliding window medians are: ${result}`);

slidingWindowMedian = new SlidingWindowMedian();
result = slidingWindowMedian.find_sliding_window_median([1, 2, -1, 3, 5], 3);
console.log(`Sliding window medians are: ${result}`);
