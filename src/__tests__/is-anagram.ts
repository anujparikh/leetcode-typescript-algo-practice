import isAnagram from "../is-anagram";

describe("check if the strings are anagram", () => {
  it("simple input", () => {
    expect(isAnagram("hellothere", "therehello")).toBeTruthy();
    expect(isAnagram("india", "aidin")).toBeTruthy();
    expect(isAnagram("hellothere", "hello there")).toBeFalsy();
    expect(isAnagram("india", "innia")).toBeFalsy();
  });
});
