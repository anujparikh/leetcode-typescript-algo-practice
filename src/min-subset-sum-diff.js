const minSubsetSumDiff = (num) => {
    const dp = [];
    const totalSum = num.reduce((p, c) => p + c, 0);
    const nearestSum = ~~(totalSum / 2);
    const findPartition = (currentIndex, sum) => {
        const withCurrentIndex = findPartition(currentIndex + 1, sum - num[currentIndex]);
        const withoutCurrentIndex = findPartition(currentIndex + 1, sum);
        dp[currentIndex] = dp[currentIndex] || [];
        dp[currentIndex][sum] = Math.abs(sum - withCurrentIndex) > Math.abs(sum - withoutCurrentIndex) ? withoutCurrentIndex : withCurrentIndex;
        return dp[currentIndex][sum];
    }
    const nearestTotal = findPartition(0, nearestSum);
    return totalSum - nearestTotal - nearestTotal;
}