const subsetSumBottomUp = (nums, sum) => {
    if (nums.length === 0 || sum === 0) return false;
    const size = nums.length;
    const dp = new Array(size).fill(false).map(() => new Array(sum + 1).fill(false));

    for (let i = 0; i < size; i++) dp[i][0] = true;
    for (let s = 0; s <= sum; s++) {
        dp[0][s] = nums[0] === s;
    }

    for (let i = 1; i < size; i++) {
        for (let s = 1; s <= sum; s++) {
            if (dp[i - 1][s]) {
                dp[i][s] = dp[i - 1][s];
            } else if (nums[i] <= s) {
                dp[i][s] = dp[i - 1][s - nums[i]]
            }
        }
    }

    return dp[size - 1][sum];
}