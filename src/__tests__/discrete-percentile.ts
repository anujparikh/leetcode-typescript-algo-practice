import discretePercentile from "../discrete-percentile";

describe("get number from percentile", () => {
  it("simple input", () => {
    expect(discretePercentile([50, 20, 80], 0)).toBe(20);
    expect(discretePercentile([1, 2, 3], 100)).toBe(3);
    expect(discretePercentile([1, 2, 3], 50)).toBe(2);
    expect(discretePercentile([1, 2, 3], 0)).toBe(1);
    expect(discretePercentile([1, 1, 1, 1], 1)).toBe(1);
    expect(discretePercentile([1, 1, 1, 1], 100)).toBe(1);
    expect(discretePercentile([1, 1, 1, 1], 50)).toBe(1);
    expect(discretePercentile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 50)).toBe(5);
    expect(discretePercentile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 100)).toBe(10);
    expect(discretePercentile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 90)).toBe(9);
  });
});
