import recommendationEngine from "../recommendation-engine";

describe("recommendation search engine", () => {
  it("simple input", () => {
    const input = [
      "roku",
      "influences",
      "is",
      "world",
      "stream",
      "roku",
      "world",
      "stream",
      "data",
      "stream",
    ];
    expect(recommendationEngine(input, 3)).toEqual(["stream", "roku", "world"]);
    expect(recommendationEngine(input, 4)).toEqual([
      "stream",
      "roku",
      "world",
      "data",
    ]);
  });
  it("repeated input", () => {
    const input = [
      "roku",
      "hbomax",
      "alpha",
      "hbomax",
      "roku",
      "roku",
      "stream",
      "alpha",
    ];
    expect(recommendationEngine(input, 3)).toEqual(["roku", "alpha", "hbomax"]);
  });
});
