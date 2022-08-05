// @ts-nocheck
/**
 * https://leetcode.com/problems/implement-queue-using-stacks/
 */
class MyQueue {
  stack1: Array<number>;
  stack2: Array<number>;
  firstElement: number;

  constructor() {
    this.stack1 = [];
    this.stack2 = [];
    this.firstElement = null;
  }

  push(x: number): void {
    if (this.stack1.length === 0) {
      this.firstElement = x;
    }
    this.stack1.push(x);
  }

  pop(): number {
    while (this.stack1.length !== 1) {
      this.stack2.push(this.stack1.pop());
    }
    const result = this.stack1.pop();
    while (this.stack2.length !== 0) {
      const poppedElement = this.stack2.pop();
      this.stack1.push(poppedElement);
      if (this.stack1.length === 1) {
        this.firstElement = poppedElement;
      }
    }
    return result;
  }

  peek(): number {
    return this.firstElement;
  }

  empty(): boolean {
    return this.stack1.length === 0;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
