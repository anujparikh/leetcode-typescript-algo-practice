import validParentheses from "../valid-parentheses";

describe("Valid Parentheses", () => {
  it("simple input", () => {
    expect(validParentheses("()")).toBeTruthy();
    expect(validParentheses("({})")).toBeTruthy();
    expect(validParentheses("({}){}()[]")).toBeTruthy();
    expect(validParentheses("((})")).toBeFalsy();
  });

  it("empty input", () => {
    expect(validParentheses("")).toBeTruthy();
  });

  it("weird input", () => {
    expect(validParentheses("}{)(][")).toBeFalsy();
  });
});
