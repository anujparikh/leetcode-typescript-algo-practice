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

const minimumDiffFromSumBottomUp = (nums) => {
    if (nums.length === 0) return 0;
    const size = nums.length;
    const total = nums.reduce((a, b) => a + b, 0);
    const halfTotal = ~~(total / 2);
    const dp = new Array(size).fill(false).map(() => new Array(halfTotal + 1).fill(false));

    for (let i = 0; i < size; i++) dp[i][0] = true;
    for (let s = 0; s <= halfTotal; s++) {
        dp[0][s] = nums[0] === s;
    }

    for (let i = 1; i < size; i++) {
        for (let s = 1; s <= halfTotal; s++) {
            if (dp[i - 1][s]) {
                dp[i][s] = dp[i - 1][s];
            } else if (nums[i] <= s) {
                dp[i][s] = dp[i - 1][s - nums[i]];
            }
        }
    }

    let sum1 = 0;
    for (let i = halfTotal; i >= 0; i--) {
        if (dp[size - 1][i] === true) {
            sum1 = i;
            break;
        }
    }
    const sum2 = total - sum1;
    return Math.abs(sum2 - sum1);
}