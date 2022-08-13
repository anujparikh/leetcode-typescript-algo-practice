const countSubSetBruteForce = (nums, s) => {
    const countSubSet = (nums, sum, index) => {
        if (sum === 0) return 1;
        if (sum < 0 || index >= nums.length || nums.length === 0) {
            return 0;
        }
        let withNumber = 0;
        let withoutNumber = 0;
        if (nums[index] <= sum) {
            withNumber = countSubSet(nums, sum - nums[index], index + 1);
        }
        withoutNumber = countSubSet(nums, sum, index + 1);
        return withNumber + withoutNumber;
    }
    return countSubSet(nums, s, 0);
}

const countSubSetMemoization = (nums, s) => {
    const dp = [];
    const countSubSet = (nums, sum, index) => {
        dp[index] = dp[index] || [];
        if (dp[index][sum] !== undefined) return dp[index][sum];
        if (sum === 0) return 1;
        if (sum < 0 || index >= nums.length || nums.length === 0) {
            return 0;
        }
        let withNumber = 0;
        let withoutNumber = 0;
        if (nums[index] <= sum) {
            withNumber = countSubSet(nums, sum - nums[index], index + 1);
        }
        withoutNumber = countSubSet(nums, sum, index + 1);
        dp[index][sum] = withNumber + withoutNumber;
        return dp[index][sum];
    }
    return countSubSet(nums, s, 0);
}