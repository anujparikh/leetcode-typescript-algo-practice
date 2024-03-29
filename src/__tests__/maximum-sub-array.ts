import maximumSubArray, { maximumSubArraySimple } from "../randoms/maximum-sub-array";

describe(" Maximum SubArray", () => {
  it("simple input", () => {
    expect(maximumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
    expect(maximumSubArray([-2, 1])).toBe(1);
    expect(maximumSubArray([1])).toBe(1);
    expect(maximumSubArray([-1, -1, -2, -3, -1, 1, -5])).toBe(1);
    expect(maximumSubArray([8, -19, 5, -4, 20])).toBe(21);
  });

  it("negative input", () => {
    expect(maximumSubArray([-1, -1, -2, -3, -5])).toBe(-1);
  });

  it("simple input simple algo", () => {
    expect(maximumSubArraySimple([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
    expect(maximumSubArraySimple([-2, 1])).toBe(1);
    expect(maximumSubArraySimple([1])).toBe(1);
    expect(maximumSubArraySimple([-1, -1, -2, -3, -1, 1, -5])).toBe(1);
    expect(maximumSubArraySimple([8, -19, 5, -4, 20])).toBe(21);
  });

  it("negative input simple algo", () => {
    expect(maximumSubArraySimple([-1, -1, -2, -3, -5])).toBe(-1);
  });
});
