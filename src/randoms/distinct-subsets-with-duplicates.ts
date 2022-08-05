/**
 * https://leetcode.com/problems/subsets-ii/
 * @param nums
 * @returns
 */
function subsetsWithDuplicateInput(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  let subsets: Array<Array<number>> = [[]];
  let endIndex = 0;
  let startIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    startIndex = 0;
    if (i > 0 && nums[i] === nums[i - 1]) {
      startIndex = endIndex + 1;
    }
    endIndex = subsets.length - 1;
    for (let j = startIndex; j < endIndex + 1; j++) {
      const subset = [...subsets[j], nums[i]];
      subsets = [...subsets, subset];
    }
  }
  return subsets;
}
