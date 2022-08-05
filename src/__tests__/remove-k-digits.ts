import removeKDigits from "../randoms/remove-k-digits";

describe("Remove K Digits", () => {
  it("simple input", () => {
    expect(removeKDigits("1432219", 3)).toBe("1219");
    expect(removeKDigits("10200", 1)).toBe("200");
    expect(removeKDigits("10", 2)).toBe("0");
  });

  it("failed input", () => {
    expect(removeKDigits("9", 1)).toBe("0");
    expect(removeKDigits("112", 1)).toBe("11");
  });
});
