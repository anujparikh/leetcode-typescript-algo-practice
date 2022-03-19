import maxProfit from "../max-profit";

describe("calculate max profit for share", () => {
  it("simple input", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
    expect(maxProfit([7, 6, 5, 4, 3, 2, 1])).toBe(0);
  });
});
