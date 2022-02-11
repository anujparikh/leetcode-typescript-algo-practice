import removeElement from "../remove-element";

describe("Remove Duplicates from Sorted Array", () => {
  it("simple input", () => {
    expect(removeElement([3, 2, 2, 3], 3)).toBe(2);
    expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toBe(5);
  });

  it("empty input", () => {
    expect(removeElement([], 3)).toBe(0);
  });

  it("val not present input", () => {
    expect(removeElement([1, 2, 3, 4, 5, 6, 7, 7, 8], 9)).toBe(9);
  });

  it("repeat input", () => {
    expect(removeElement([1, 1, 1, 1, 1], 1)).toBe(0);
  });
});
