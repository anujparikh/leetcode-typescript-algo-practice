import removeDuplicatesFromArray from "../randoms/remove-duplicates-from-array";

describe("Remove Duplicates from Sorted Array", () => {
  it("simple input", () => {
    expect(removeDuplicatesFromArray([1, 1, 2])).toBe(2);
    expect(removeDuplicatesFromArray([1, 1, 2, 3, 4, 5, 5])).toBe(5);
    expect(removeDuplicatesFromArray([1, 1, 1, 1, 1, 1])).toBe(1);
  });

  it("simple input with leading 0s", () => {
    expect(removeDuplicatesFromArray([0, 0, 2, 3, 4, 4, 4, 5, 6])).toBe(6);
    expect(removeDuplicatesFromArray([1])).toBe(1);
  });

  it("simple input with negative numbers", () => {
    expect(
      removeDuplicatesFromArray([-6, -3, -2, -1, -1, -1, 0, 0, 2, 3, 5, 6])
    ).toBe(9);
  });
});
