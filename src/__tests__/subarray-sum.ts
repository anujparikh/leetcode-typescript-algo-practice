import subarraySum from "../randoms/subarray-sum";

describe(" K-diff Pairs in an Array", () => {
  it("simple input", () => {
    expect(subarraySum([1, 1, 1], 2)).toBe(2);
    expect(subarraySum([1, 2, 3], 3)).toBe(2);
    expect(subarraySum([1, 2, 3, 4, 5], 15)).toBe(1);
  });

  it("complex input", () => {
    expect(subarraySum([1, 1, 1, 2, 1, 1], 2)).toBe(4);
    expect(subarraySum([1, 2, 3, 4, 3], 3)).toBe(3);
  });

  it("out of range input", () => {
    expect(subarraySum([1, 1, 1, 2, 1, 1], 20)).toBe(0);
  });

  it("negative number input", () => {
    expect(subarraySum([-3, -4, -5, -2, -7], -9)).toBe(2);
  });

  it("1 number input", () => {
    expect(subarraySum([1], 0)).toBe(0);
  });
});
