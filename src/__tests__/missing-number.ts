import missingNumber from "../missing-number";

describe("Missing Number", () => {
  it("simple input", () => {
    expect(missingNumber([4, 3, 5, 0, 1])).toBe(2);
    expect(missingNumber([3, 0, 1])).toBe(2);
    expect(missingNumber([0, 1])).toBe(2);
    expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8);
    expect(missingNumber([1])).toBe(0);
  });
});
