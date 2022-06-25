const noOfSubsetsWithSumBruteForce = (num, sum) => {
  const canPartition = (currentIndex, sum) => {
    if (sum === 0) {
      return 1;
    }
    if (currentIndex >= num.length || sum < 0) return 0;
    let sumWithCurrentIndex = 0;
    if (num[currentIndex] <= sum) {
      sumWithCurrentIndex = canPartition(
        currentIndex + 1,
        sum - num[currentIndex]
      );
    }
    const sumWithoutCurrentIndex = canPartition(currentIndex + 1, sum);
    return sumWithCurrentIndex + sumWithoutCurrentIndex;
  };

  return canPartition(0, sum);
};

const noOfSubsetsWithSumDP = (num, sum) => {
  const n = num.length;
  const dp = Array(n)
    .fill(0)
    .map(() => Array(sum + 1).fill(0));

  for (let i = 0; i < n; i++) dp[i][0] = 1;
  for (let s = 1; s <= sum; s++) dp[0][s] = num[0] === s ? 1 : 0;

  for (let i = 1; i < n; i++) {
    for (let s = 1; s <= sum; s++) {
      // exclude the number
      dp[i][s] = dp[i - 1][s];
      // include the number, if it does not exceed the sum
      if (s >= num[i]) {
        dp[i][s] += dp[i - 1][s - num[i]];
      }
    }
  }

  return dp[n - 1][sum];
};
