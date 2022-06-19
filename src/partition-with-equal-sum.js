const partitionWithEqualSum = (nums) => {
    const pairWithSum = (nums, sum, currentIndex) => {
        if (sum === 0) return true;
        if (nums.length === 0 || currentIndex >= nums.length) return false;
        if (nums[currentIndex] <= sum) {
            if (pairWithSum(nums, sum - nums[currentIndex], currentIndex + 1)) return true;
        }
        return pairWithSum(nums, sum, currentIndex + 1);
    }

    const totalSum = nums.reduce((previous, current) => current + previous, 0);
    if (totalSum % 2 !== 0) return false;
    return pairWithSum(nums, totalSum/2, 0);
}

const partitionWithEqualSumDP = (nums) => {
    const dp = [];
    const pairWithSum = (nums, sum, currentIndex) => {
        dp[currentIndex] = dp[currentIndex] || [];
        if (sum === 0) return true;
        if (nums.length === 0 || currentIndex >= nums.length) return false;
        if (dp[currentIndex] && !dp[currentIndex][sum]) {
            if (nums[currentIndex] <= sum && pairWithSum(nums, sum - nums[currentIndex], currentIndex + 1)) {
                dp[currentIndex][sum] = true;
                return true;
            }
            dp[currentIndex][sum] = pairWithSum(nums, sum, currentIndex + 1);
        }
        return dp[currentIndex][sum];
    }
    const totalSum = nums.reduce((previous, current) => current + previous, 0);
    if (totalSum % 2 !== 0) return false;
    return pairWithSum(nums, totalSum/2, 0);
}

const partitionWithEqualSumDPBottomUp = (nums) => {
    const totalSum = nums.reduce((previous, current) => current + previous, 0);
    if (totalSum % 2 !== 0) return false;
    const sum = totalSum / 2;
    const dp = new Array(nums.length).fill(true).map((n) => new Array(sum + 1).fill(true));

    for (let i = 1; i <= sum; i++) {
        dp[0][i] = nums[0] === i;
    }

    for (let i = 1; i < nums.length; i++) {
        for (let j = 1; j <= sum; j++) {
            if (dp[i - 1][j]) { // case where sum < nums[i]
                dp[i][j] = dp[i - 1][j];
            } else if (sum >= nums[i]) {
                dp[i][j] = dp[i - 1][j - nums[i]];
            }
        }
    }
    return dp[nums.length - 1][sum];
}