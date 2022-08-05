const maxProfitKnapsack = (profits, weights, capacity) => {
  if (capacity <= 0 || weights.length == 0 || weights.length != profits.length)
    return 0;
  const dp = Array(profits.length)
    .fill(0)
    .map((n) => Array(capacity + 1).fill(0));
  for (let c = 0; c <= capacity; c++) {
    if (weights[0] <= c) {
      dp[0][c] = profits[0];
    }
  }
  for (let i = 1; i < weights.length; i++) {
    for (let j = 1; j <= capacity; j++) {
      let profitWithItem = 0;
      let profitWithoutItem = 0;
      if (weights[i] <= j) {
        profitWithItem = profits[i] + dp[i - 1][j - weights[i]];
      }
      profitWithoutItem = dp[i - 1][j];
      dp[i][j] = Math.max(profitWithItem, profitWithoutItem);
    }
  }

  return dp[weights.length - 1][capacity];
};
