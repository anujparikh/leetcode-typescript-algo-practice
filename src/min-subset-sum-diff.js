const minSubsetSumDiff = (num) => {
    const dp = [];
    const totalSum = num.reduce((p, c) => p + c, 0);
    const nearestSum = ~~(totalSum / 2);
    const findPartition = (currentIndex, sum) => {
        if (sum <= 0 || currentIndex >= num.length) {
            return 0;
        }
        dp[currentIndex] = dp[currentIndex] || [];

        if (dp[currentIndex][sum]) return dp[currentIndex][sum];

        let withCurrentIndex = Infinity;
        if (num[currentIndex] <= sum) {
        withCurrentIndex = num[currentIndex] + findPartition(currentIndex + 1, sum - num[currentIndex]);
        }
        const withoutCurrentIndex = findPartition(currentIndex + 1, sum);

        dp[currentIndex][sum] = Math.abs(sum - withCurrentIndex) > Math.abs(sum - withoutCurrentIndex) ? withoutCurrentIndex : withCurrentIndex;
        return dp[currentIndex][sum];
    }
    const nearestTotal = findPartition(0, nearestSum);
    return totalSum - nearestTotal - nearestTotal;
}

const minSubsetSumDiffWithBottomUp = (num) => {
    const totalSum = num.reduce((p, c) => p + c, 0);
    const nearestSum = ~~(totalSum / 2);
    const n = num.length;
    const dp = Array(n).fill(0).map((n) => Array(nearestSum + 1).fill(0));

    for (let i = 0; i < n; i++) {
        dp[i][0] = 0;
    }

    for (let s = 0; s <= nearestSum; s++) {
        dp[0][s] = num[0] <= s ? num[0] : 0;
    }

    for (let i = 1; i < n; i++) {
        for (let s = 1; s <= nearestSum; s++) {
            let withCurrentIndex = Infinity;
            let withoutCurrentIndex = Infinity;
            if (num[i] <= s) {
                withCurrentIndex = num[i] + dp[i - 1][s - num[i]];
            }
            withoutCurrentIndex = dp[i - 1][s];
            dp[i][s] =  Math.abs(nearestSum - withCurrentIndex) > Math.abs(nearestSum - withoutCurrentIndex) ? withoutCurrentIndex : withCurrentIndex;
        }
    }
    const nearestTotal = dp[n - 1][nearestSum];
    return totalSum - nearestTotal - nearestTotal;
}