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

const countSubSetBottomUp = (nums, sum) => {
    const size = nums.length;
    if (size === 0) return 0;
    if (sum === 0) return 1;
    const dp = new Array(size).fill(0).map(() => new Array(sum + 1).fill(0));
    for (let i = 0; i < size; i++) {
        dp[i][0] = 1;
    }
    for (let s = 1; s <= sum; s++) {
        dp[0][s] = nums[0] === s ? 1 : 0;
    }

    for (let i = 1; i < size; i++) {
        for (let s = 1; s <= sum; s++) {
            dp[i][s] = dp[i - 1][s] + (nums[i] <= s ? dp[i - 1][s - nums[i]] : 0);
        }
    }

    return dp[size - 1][sum];
}