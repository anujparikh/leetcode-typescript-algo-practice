/**
 * https://leetcode.com/problems/number-of-1-bits/
 * @param n
 * @returns
 */
function hammingWeight(n: number): number {
  let numberStr = n.toString(2);
  let result = 0;
  for (let i = 0; i < numberStr.length; i++) {
    if (numberStr[i] === "1") result++;
  }
  return result;
}
