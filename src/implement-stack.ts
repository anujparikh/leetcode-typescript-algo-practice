// @ts-nocheck
/**
 * https://leetcode.com/problems/implement-stack-using-queues/
 */
class MyStack {
  queue1: Array<number | undefined>;
  queue2: Array<number | undefined>;
  topElement: number | null | undefined;

  constructor() {
    this.queue1 = [];
    this.queue2 = [];
    this.topElement = null;
  }

  push(x: number): void {
    this.queue1 = [...this.queue1, x];
    this.topElement = x;
  }

  pop(): number {
    let counter = 0;
    while (this.queue1.length !== 1) {
      this.queue2.push(this.queue1.shift());
    }
    const result = this.queue1[0];
    this.queue1 = [];
    counter = 0;
    while (this.queue2.length !== 0) {
      this.topElement = this.queue2[0];
      this.queue1.push(this.queue2.shift());
    }
    this.queue2 = [];
    return result;
  }

  top(): number {
    return this.topElement;
  }

  empty(): boolean {
    return this.queue1.length === 0;
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
