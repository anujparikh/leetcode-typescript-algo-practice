import nthFibonacciNumber, {
  nthFibonacciNumberWithoutExtraSpace,
} from "../nth-fibonacci-number";

describe("Nth Fibonacci number", () => {
  it("simple input", () => {
    expect(nthFibonacciNumber(10)).toBe(55);
    expect(nthFibonacciNumber(4)).toBe(3);
    expect(nthFibonacciNumber(25)).toBe(75025);
  });

  it("simple input with no extra space test", () => {
    expect(nthFibonacciNumberWithoutExtraSpace(10)).toBe(55);
    expect(nthFibonacciNumberWithoutExtraSpace(4)).toBe(3);
    expect(nthFibonacciNumberWithoutExtraSpace(25)).toBe(75025);
  });
});
