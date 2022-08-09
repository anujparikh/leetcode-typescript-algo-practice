const canPartitionBruteForce = (nums) => {
    const totalSum = nums.reduce((a, b) => a + b, 0);
    if (totalSum % 2 !== 0) return false;
    const halfSum = totalSum / 2;
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
    const totalSum = nums.reduce((a, b) => a + b, 0);
    if (totalSum % 2 !== 0) return false;
    const halfSum = totalSum / 2;
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

const canPartitionBottomUp = (nums) => {
    const totalSum = nums.reduce((a, b) => a + b, 0);
    if (totalSum % 2 !== 0) return false;
    const halfSum = totalSum / 2;
    const size = nums.length;
    const dp = new Array(size).fill(false).map(() => new Array(halfSum + 1).fill(false));
    for (let i = 0; i < size; i++) dp[i][0] = true;
    for (let s = 1; s <= halfSum; s++) {
        dp[0][s] = nums[0] === s;
    }
    for (let i = 1; i < size; i++) {
        for (let s = 1; s <= halfSum; s++) {
            if (dp[i - 1][s]) {
                dp[i][s] = dp[i - 1][s];
            } else if (nums[i] <= s) {
                dp[i][s] = dp[i - 1][s - nums[i]]
            }
        }
    }
    return dp[size - 1][halfSum];
}