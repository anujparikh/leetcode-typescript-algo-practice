// needs to be tested through debugger
import subsets from "../subsets";

describe("Subsets", () => {
  it("simple input", () => {
    expect(subsets([1, 2, 3, 4])).toBe([]);
  });
});
