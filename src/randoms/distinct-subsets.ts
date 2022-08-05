/**
 * https://leetcode.com/problems/subsets/
 * @param nums
 * @returns
 */
function subsets(nums: number[]): number[][] {
  let subsets: Array<Array<number>> = [[]];
  for (let i = 0; i < nums.length; i++) {
    const size = subsets.length;
    for (let j = 0; j < size; j++) {
      const subset = [...subsets[j], nums[i]];
      subsets = [...subsets, subset];
    }
  }
  return subsets;
}
