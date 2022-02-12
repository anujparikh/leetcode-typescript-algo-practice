import strStrMethod from "../strStr-method";

describe("Implement strStr()", () => {
  it("simple input", () => {
    expect(strStrMethod("aaabac", "aba")).toBe(2);
    expect(strStrMethod("aaabac", "abc")).toBe(-1);
    expect(strStrMethod("aaaaa", "bba")).toBe(-1);
    expect(strStrMethod("", "")).toBe(0);
  });

  it("complex input", () => {
    expect(strStrMethod("aaaaaaaaaaaaaac", "ac")).toBe(13);
  });
});
