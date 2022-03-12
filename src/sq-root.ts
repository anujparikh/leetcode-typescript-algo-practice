/**
 * https://leetcode.com/problems/sqrtx/
 */
export default (x: number): number => {
  if (x <= 1) return x;
  let high: number = x;
  let low: number = 1;
  while (low <= high) {
    let mid = ~~((low + high) / 2);
    let square = mid * mid;
    if (square === x) {
      return ~~mid;
    } else if (square > x) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ~~high;
};
