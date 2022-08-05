import singleNumber from "../randoms/single-number";

describe(" Single Number", () => {
  it("simple input", () => {
    expect(singleNumber([2, 2, 1])).toBe(1);
    expect(singleNumber([4, 2, 1, 2, 1])).toBe(4);
    expect(singleNumber([1])).toBe(1);
  });
});
