/**
 * https://leetcode.com/problems/plus-one/submissions/
 */
export default (digits: number[]): number[] => {
  let i = digits.length - 1;
  let carry = 0;
  while (i >= 0) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    } else {
      carry = 1;
      digits[i] = 0;
    }
    i--;
  }
  if (carry === 1) {
    digits.unshift(1);
  }
  return digits;
};
