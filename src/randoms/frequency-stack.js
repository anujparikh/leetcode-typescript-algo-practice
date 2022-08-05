/**
 * https://leetcode.com/problems/maximum-frequency-stack/
 */
const Heap = require("./collections/heap"); //http://www.collectionsjs.com

class Element {
  constructor(number, frequency, seqNumber) {
    this.number = number;
    this.frequency = frequency;
    this.seqNumber = seqNumber;
  }

  compare(other) {
    if (this.frequency !== other.frequency) {
      return this.frequency - other.frequency;
    }
    return this.seqNumber - other.seqNumber;
  }
}
class FrequencyStack {
  constructor() {
    this.maxHeap = new Heap([], null, (a, b) => a.compare(b));
    this.frequencyMap = {};
    this.currentSequence = 0;
  }

  push(num) {
    this.frequencyMap[num] = (this.frequencyMap[num] || 0) + 1;
    const currentElement = new Element(
      num,
      this.frequencyMap[num],
      this.currentSequence
    );
    this.maxHeap.push(currentElement);
    this.currentSequence++;
  }

  pop() {
    const poppedNumber = this.maxHeap.pop().number;
    if (this.frequencyMap[poppedNumber] > 1) {
      this.frequencyMap[poppedNumber]--;
    } else if (this.frequencyMap[poppedNumber] === 1) {
      delete this.frequencyMap[poppedNumber];
    }
    return poppedNumber;
  }
}

var frequencyStack = new FrequencyStack();
frequencyStack.push(1);
frequencyStack.push(2);
frequencyStack.push(3);
frequencyStack.push(2);
frequencyStack.push(1);
frequencyStack.push(2);
frequencyStack.push(5);
console.log(frequencyStack.pop());
console.log(frequencyStack.pop());
console.log(frequencyStack.pop());
