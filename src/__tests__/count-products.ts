import countProducts from "../count-products";

describe("count product per company", () => {
  it("simple input", () => {
    const input: Array<string> = [
      "iphone, apple",
      "macbook pro, apple",
      "pixel, google",
      "fire tv, amazon",
    ];
    expect(countProducts(input)).toEqual([
      "apple, 2",
      "google, 1",
      "amazon, 1",
    ]);
  });
});
