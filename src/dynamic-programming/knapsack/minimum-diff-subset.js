const minimumDiffSubSetBruteForce = (nums) => {
    const minimumDiffFromSumRecursive = (nums, index, sum1, sum2) => {
        if (index === nums.length) return Math.abs(sum1 - sum2);
        const diff1 = minimumDiffFromSumRecursive(nums, index + 1, sum1 + nums[index], sum2);
        const diff2 = minimumDiffFromSumRecursive(nums, index + 1, sum1, sum2 + nums[index]);
        return Math.min(diff1, diff2);
    }
    return minimumDiffFromSumRecursive(nums, 0, 0, 0);
}

const minimumDiffFromSumMemoization = (nums) => {
    const dp = [];
    const minimumDiffFromSumRecursive = (nums, index, sum1, sum2) => {
        if (index === nums.length) return Math.abs(sum1 - sum2);
        dp[sum1] = dp[sum1] || [];
        if (dp[sum1][index]) return dp[sum1][index];
        const diff1 = minimumDiffFromSumRecursive(nums, index + 1, sum1 + nums[index], sum2);
        const diff2 = minimumDiffFromSumRecursive(nums, index + 1, sum1, sum2 + nums[index]);
        dp[sum1][index] = Math.min(diff1, diff2);
        return dp[sum1][index];
    }
    return minimumDiffFromSumRecursive(nums, 0, 0, 0);
}