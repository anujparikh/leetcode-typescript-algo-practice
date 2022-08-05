import searchInsertPosition from "../randoms/search-insert-position";

describe(" Search Insert Position", () => {
  it("simple input", () => {
    expect(searchInsertPosition([1, 3, 5, 6], 5)).toBe(2);
    expect(searchInsertPosition([1, 3, 5, 6], 2)).toBe(1);
    expect(searchInsertPosition([1, 3, 5, 6], 7)).toBe(4);
  });

  it("negative value inputs", () => {
    expect(searchInsertPosition([-10, -7, -6, -4, 2, 3, 5], 4)).toBe(6);
  });
});
