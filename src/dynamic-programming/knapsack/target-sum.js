const targetSumBruteForce = (nums, sum) => {
    if (sum === 0) return 1;
    if (nums.length === 0) return 0;

    const targetSum = (nums, target, index, currentSum) => {
        if (index < 0 && target === currentSum) return 1;
        if (index < 0) return 0;
        const postiveNumber = targetSum(nums, target, index - 1, currentSum + nums[index]);
        const negativeNumber = targetSum(nums, target, index - 1, currentSum - nums[index]);
        return postiveNumber + negativeNumber;
    }
    return targetSum(nums, sum, nums.length - 1, 0);
}

const targetSumBottomUp = (nums, sum) => {
    // Sum(s1) - Sum(s2) = S
    // Sum(s1) + Sum(s2) = Sum(num)
    // Sum(s1) - Sum(s2) + Sum(s1) + Sum(s2) = S + Sum(num)
    // 2 * Sum(s1) =  S + Sum(num)
    // Sum(s1) = (S + Sum(num)) / 2
    let totalSum = nums.reducec((a, b) => a + b, 0);
    if (totalSum < s || (s + totalSum) % 2 !== 0) return 0;
    const countSubsets = (nums, requiredSum) => {
        const size = nums.length;
        const dp = new Array(size).fill(0).map(() => new Array(s + 1).fill(0));

        for (let i = 0; i < size; i++) {
            dp[i][0] = 1;
        }
        for (let s = 1; s <= requiredSum; s++) {
            dp[0][s] = nums[0] === s ? 1 : 0;
        }

        for (let i = 1; i < size; i++) {
            for (let s = 1; s <= requiredSum; s++) {
                dp[i][s] = dp[i - 1][s] + (nums[i] <= s ? dp[i - 1][s - nums[i]] : 0);
            }
        }

        return dp[size - 1][requiredSum];
    }
    return countSubsets(nums, (s + totalSum) / 2);
}