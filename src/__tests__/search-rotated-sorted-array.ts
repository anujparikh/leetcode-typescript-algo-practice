import searchRotatedSortedArray from "../search-rotated-sorted-array";

describe("Search in Rotated Sorted Array", () => {
  it("simple input", () => {
    expect(searchRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
    expect(searchRotatedSortedArray([6, 7, 0, 1, 2, 3, 4, 5], 3)).toBe(5);
    expect(searchRotatedSortedArray([6, 7, 0, 1, 2, 4, 5], 3)).toBe(-1);
    expect(searchRotatedSortedArray([6], 6)).toBe(0);
  });
});
