/**
 * https://leetcode.com/problems/happy-number/
 * @param n
 * @returns
 */
function isHappy(n: number): boolean {
  const set = new Set<number>();

  while (n !== 1) {
    if (set.has(n)) {
      return false;
    }
    set.add(n);
    n = sumOfSquareOfDigits(n);
  }

  return true;
}

const sumOfSquareOfDigits = (input: number): number => {
  let result = 0;
  while (input > 0) {
    result += Math.pow(input % 10, 2);
    input = ~~(input / 10);
  }
  return result;
};
