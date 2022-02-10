/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 */
export default (s: string): boolean => {
  const stack = [];
  const mapping: any = {
    "{": "}",
    "(": ")",
    "[": "]",
  };
  const mappingOtherway: any = {
    "}": "{",
    ")": "(",
    "]": "[",
  };
  for (let i = 0; i < s.length; i++) {
    if (mappingOtherway[s[i]]) {
      const a = stack.pop();
      const b = mappingOtherway[s[i]];
      if (a !== b) return false;
    }
    if (mapping[s[i]]) stack.push(s[i]);
  }
  return stack.length === 0;
};
