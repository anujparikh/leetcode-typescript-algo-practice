import equalSides from "../equal-sides";

describe(" Maximum SubArray", () => {
  it("simple input", () => {
    expect(equalSides([5, 4, 3, 1, 8, 9])).toBe(4);
    expect(equalSides([4, 5, 6, 7])).toBe(4);
    expect(equalSides([3, 4, 5, 2])).toBe(0);
    expect(equalSides([1, 1, 1, 1, 2, 3])).toBe(1);
    expect(equalSides([])).toBe(0);
    expect(equalSides([8, 7, 9, 4])).toBe(2);
  });
});
