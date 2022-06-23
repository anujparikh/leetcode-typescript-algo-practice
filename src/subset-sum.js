const canPartitionWithBasicSolution = function(num, sum) {
  const canPartitionWithBasic = (num, currentIndex, sum) => {
    if (sum === 0) {
        return true;
    }
    if (currentIndex > num.length) return false;
    if (currentIndex < num.length && num[currentIndex] <= sum) {
      const withCurrentIndex = canPartitionWithBasic(num, currentIndex + 1, sum - num[currentIndex]);
      if (withCurrentIndex) return true;
    }
    return canPartitionWithBasic(num, currentIndex + 1, sum);
  }
  return canPartitionWithBasic(num, 0, sum);
};

const canPartitionWithMemoization = function (num, sum) {
  const dp = [];
  const canPartition = (currentIndex, sum) => {
    if (sum === 0) {
        return true;
    }
    if (currentIndex > num.length) return false;
    dp[currentIndex] = dp[currentIndex] || [];
    if (dp[currentIndex][sum]) {
      return dp[currentIndex][sum];
    }
    let withCurrentIndex = false;
    if (currentIndex < num.length && num[currentIndex] <= sum) {
      withCurrentIndex = canPartition(currentIndex + 1, sum - num[currentIndex]);
      if (withCurrentIndex) return true;
    }
    dp[currentIndex][sum] = withCurrentIndex || canPartition(currentIndex + 1, sum);
    return dp[currentIndex][sum];
  }
  return canPartition(0, sum);
};

const canPartitionWithDP = function (num, sum) {
  const n = num.length;
  const dp = Array(n).fill(false).map((n => Array(sum + 1).fill(false)));
  for (let i = 0; i < n; i++) dp[i][0] = true;
  for (let s = 1; s <= sum; s++) dp[0][s] = num[0] === s;

  for (let i = 1; i < num.length; i++) {
    for (let s = 1; s <= sum; s++) {
      if (dp[i - 1][s]) {
        dp[i][s] = dp[i - 1][s];
      } else if (s >= num[i]){
        dp[i][s] = dp[i - 1][s - num[i]]
      }
    }
  }

  return dp[n - 1][sum]
};


console.log(`Can partitioning be done: ---> ${canPartition([1, 2, 3, 4], 6)}`);
console.log(`Can partitioning be done: ---> ${canPartition([1, 2, 7, 1, 5], 10)}`);
console.log(`Can partitioning be done: ---> ${canPartition([1, 3, 4, 8], 6)}`);
console.log(`Can partitioning be done: ---> ${canPartition([1, 6, 2, 5, 7], 45)}`);
console.log(`Can partitioning be done: ---> ${canPartition([1, 7, 34, 21, 78], 62)}`);