import isPalindrome from "../is-palindrome";

describe("is palindrome", () => {
  it("simple input", () => {
    expect(isPalindrome(11)).toBeTruthy();
    expect(isPalindrome(111)).toBeTruthy();
    expect(isPalindrome(123321)).toBeTruthy();
    expect(isPalindrome(1221)).toBeTruthy();
    expect(isPalindrome(1)).toBeTruthy();
    expect(isPalindrome(20)).toBeFalsy();
    expect(isPalindrome(13321)).toBeFalsy();
    expect(isPalindrome(13331)).toBeTruthy();
    expect(isPalindrome(0)).toBeFalsy();
  });
});
