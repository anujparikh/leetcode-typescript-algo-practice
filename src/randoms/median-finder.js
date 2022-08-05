const Heap = require("./collections/heap"); //http://www.collectionsjs.com
class MedianOfAStream {
  constructor() {
    this.maxHeap = new Heap([], null, (a, b) => a - b); // containing first half of numbers
    this.minHeap = new Heap([], null, (a, b) => b - a); // containing second half of numbers
  }

  insert_num(num) {
    this.maxHeap.push(num);
    this.minHeap.push(this.maxHeap.pop());
    if (this.maxHeap.length < this.minHeap.length) {
      this.maxHeap.push(this.minHeap.pop());
    }
  }

  find_median(self) {
    if (this.maxHeap.length === this.minHeap.length) {
      return (this.maxHeap.peek() + this.minHeap.peek()) / 2.0;
    }
    return this.maxHeap.peek();
  }
}

var medianOfAStream = new MedianOfAStream();
medianOfAStream.insert_num(3);
medianOfAStream.insert_num(1);
console.log(`The median is: ${medianOfAStream.find_median()}`);
medianOfAStream.insert_num(5);
console.log(`The median is: ${medianOfAStream.find_median()}`);
medianOfAStream.insert_num(4);
console.log(`The median is: ${medianOfAStream.find_median()}`);
