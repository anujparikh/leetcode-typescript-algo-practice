/**
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.
 * Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums.
 * More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result.
 * It does not matter what you leave beyond the first k elements.
 * Return k after placing the final result in the first k slots of nums.
 *
 * Input: nums = [3,2,2,3], val = 3
 * Output: 2, nums = [2,2,_,_]
 */
export default (nums: number[], val: number): number => {
  if (nums.length === 0) return 0;
  let resultArrayLength = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[resultArrayLength] = nums[i];
      resultArrayLength++;
    }
  }
  return resultArrayLength;
};
