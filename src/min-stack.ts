class MinStack {
  stack: number[];
  monoStack: number[];

  constructor(stack = [], monoStack = []) {
    this.stack = stack;
    this.monoStack = monoStack;
  }

  push(val: number): void {
    if (
      this.monoStack.length === 0 ||
      val <= this.monoStack[this.monoStack.length - 1]
    ) {
      this.monoStack.push(val);
    }
    this.stack.push(val);
  }

  pop(): void {
    if (
      this.stack[this.stack.length - 1] ===
      this.monoStack[this.monoStack.length - 1]
    ) {
      this.monoStack.pop();
    }
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.monoStack[this.monoStack.length - 1];
  }
}
