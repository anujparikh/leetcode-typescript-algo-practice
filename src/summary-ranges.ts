/**
 * https://leetcode.com/problems/summary-ranges/
 * @param nums
 * @returns
 */
function summaryRanges(nums: number[]): string[] {
  const result: Array<string> = [];

  let a = 0;
  let b = 0;

  while (b < nums.length) {
    if (nums[b + 1] - nums[b] === 1) {
      b++;
    } else {
      result.push(a === b ? `${nums[a]}` : `${nums[a]}->${nums[b]}`);
      b++;
      a = b;
    }
  }

  return result;
}
