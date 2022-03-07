/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 * A subarray is a contiguous part of an array.
 *
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 *
 */
export default (nums: number[]): number => {
  let maxSum = nums[0];
  const dp = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = nums[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);
    maxSum = Math.max(maxSum, dp[i]);
  }
  return maxSum;
};

export const maximumSubArraySimple = (nums: number[]): number => {
  let maxSum = Number.MIN_SAFE_INTEGER;
  let currentSum = 0;
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    maxSum = Math.max(currentSum, maxSum);
    if (currentSum < 0) {
      currentSum = 0;
    }
  }
  return maxSum;
};
