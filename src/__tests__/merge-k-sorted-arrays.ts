import mergeKSortedArrays from "../randoms/merge-k-sorted-arrays";

describe("merge k sorted arrays", () => {
  it("simple input", () => {
    expect(
      mergeKSortedArrays([
        [1, 2, 3],
        [2, 3, 4],
        [5, 6, 7],
        [1, 4, 5, 9, 10],
      ])
    ).toStrictEqual([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 9, 10]);
  });
});
