/**
 * https://leetcode.com/problems/subsets-ii/
 * @param nums
 * @returns
 */
function subsetsWithDuplicateInput(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  let subsets: Array<Array<number>> = [[]];
  let previous = null;
  let previousSubSet: Array<Array<number>> = [];
  for (let i = 0; i < nums.length; i++) {
    let currentSubSet = [];
    if (previous !== nums[i]) {
      const size = subsets.length;
      for (let j = 0; j < size; j++) {
        const subset = [...subsets[j], nums[i]];
        subsets = [...subsets, subset];
        currentSubSet.push(subset);
      }
    } else {
      const size = previousSubSet.length;
      for (let j = 0; j < size; j++) {
        const subset = [...previousSubSet[j], nums[i]];
        subsets = [...subsets, subset];
        currentSubSet.push(subset);
      }
    }
    previous = nums[i];
    previousSubSet = currentSubSet;
  }
  return subsets;
}
