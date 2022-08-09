const canPartitionBruteForce = (nums) => {
    const halfSum = (nums.reduce((a, b) => a + b, 0)) / 2;
    const canPartition = (nums, sum, index) => {
        if (sum === 0) return true;
        if (sum < 0 || index >= nums.length) return false;
        let withNumber = false;
        let withoutNumber = false;
        if (nums[index] <= sum) {
            withNumber = canPartition(nums, sum - nums[index], index + 1);
        }
        withoutNumber = canPartition(nums, sum, index + 1);
        return withNumber || withoutNumber;
    }
    return canPartition(nums, halfSum, 0);
}

const canPartitionMemoization = (nums) => {
    const halfSum = (nums.reduce((a, b) => a + b, 0)) / 2;
    const dp = [];
    const canPartition = (nums, sum, index) => {
        if (sum === 0) return true;
        if (sum < 0 || index >= nums.length) return false;
        if (!dp[index]) dp[index] = [];
        if (dp[index][sum]) return dp[index][sum];
        let withNumber = false;
        let withoutNumber = false;
        if (nums[index] <= sum) {
            withNumber = canPartition(nums, sum - nums[index], index + 1);
        }
        withoutNumber = canPartition(nums, sum, index + 1);
        dp[index][sum] = withNumber || withoutNumber;
        return withNumber || withoutNumber;
    }
    return canPartition(nums, halfSum, 0);
}