import kthLargestElementArray from "../kth-largest-element-array";

describe("kth largest element within the array", () => {
  it("simple input", () => {
    expect(kthLargestElementArray([3, 2, 1, 5, 6, 4], 2)).toBe(5);
    expect(kthLargestElementArray([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4);
  });
});
