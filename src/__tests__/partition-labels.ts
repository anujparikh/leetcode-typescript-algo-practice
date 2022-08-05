import partitionLabels from "../randoms/partition-labels";

describe("recommendation search engine", () => {
  it("simple input", () => {
    expect(partitionLabels("ababcbacadefegdehijhklij")).toEqual([9, 7, 8]);
  });
});
