import addBinary from "../randoms/add-binary";

describe(" Add Binary", () => {
  it("simple input", () => {
    expect(addBinary("100", "100")).toBe("1000");
    expect(addBinary("100", "1")).toBe("101");
    expect(addBinary("1010", "1011")).toBe("10101");
  });
});
