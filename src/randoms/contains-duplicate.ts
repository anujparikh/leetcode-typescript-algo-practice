/**
 * https://leetcode.com/problems/contains-duplicate/
 * @param nums
 * @returns
 */
function containsDuplicate(nums: number[]): boolean {
  return nums.length === new Set(nums).size ? false : true;
}
