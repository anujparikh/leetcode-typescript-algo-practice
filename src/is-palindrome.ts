/**
 * Given an integer x, return true if x is palindrome integer.
 * An integer is a palindrome when it reads the same backward as forward.
 * For example, 121 is a palindrome while 123 is not.
 * @param x
 * @returns
 */
function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  if (x === 0) return true;
  let reverse = "";
  const original = x;
  while (x > 0) {
    reverse += x % 10;
    x = ~~(x / 10);
  }
  return reverse === `${original}`;
}
