/**
 * Given an integer x, return true if x is palindrome integer.
 * An integer is a palindrome when it reads the same backward as forward.
 * For example, 121 is a palindrome while 123 is not.
 * @param x
 * @returns
 */
export default (x: number): boolean => {
  const original = x;
  if (x <= 0) return false;
  let reverse = 0;
  while (x > 0) {
    reverse = reverse * 10 + (x % 10);
    x = ~~(x / 10);
  }
  return original === reverse;
};
