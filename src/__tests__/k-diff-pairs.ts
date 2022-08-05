import kDiffPairs from "../randoms/k-diff-pairs";

describe(" K-diff Pairs in an Array", () => {
  it("simple input", () => {
    expect(kDiffPairs([3, 1, 4, 1, 5], 2)).toBe(2);
    expect(kDiffPairs([1, 3, 4, 1, 5], 2)).toBe(2);
    expect(kDiffPairs([1, 2, 3, 4, 5], 1)).toBe(4);
  });

  it("expected difference to be 0", () => {
    expect(kDiffPairs([1, 3, 1, 5, 4], 0)).toBe(1);
    expect(kDiffPairs([1, 3, 1, 6, 6, 5, 3], 0)).toBe(3);
  });

  it("having negative number as input", () => {
    expect(kDiffPairs([-13, -4, -2, 2, 11], 9)).toBe(2);
  });

  it("simple input with repeatative numbers", () => {
    expect(kDiffPairs([1, 2, 4, 4, 3, 3, 0, 9, 2, 3], 3)).toBe(2);
    expect(kDiffPairs([1, 1, 1, 1, 1, 1], 0)).toBe(1);
  });
});
