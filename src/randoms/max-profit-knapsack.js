let solveKnapsack = function (profits, weights, capacity) {
  const dp = [];
  let knapsackRecursive = (profits, weights, capacity, currentIndex) => {
    if (capacity <= 0 || currentIndex >= weights.length) return 0;
    dp[currentIndex] = dp[currentIndex] || [];
    if (dp[currentIndex] && dp[currentIndex][capacity]) {
      return dp[currentIndex][capacity];
    }
    let profitWithItem = 0;
    if (weights[currentIndex] <= capacity) {
      profitWithItem =
        profits[currentIndex] +
        knapsackRecursive(
          profits,
          weights,
          capacity - weights[currentIndex],
          currentIndex + 1
        );
    }
    const profitWithoutItem = knapsackRecursive(
      profits,
      weights,
      capacity,
      currentIndex + 1
    );
    dp[currentIndex][capacity] = Math.max(profitWithItem, profitWithoutItem);
    return Math.max(profitWithItem, profitWithoutItem);
  };
  return knapsackRecursive(profits, weights, capacity, 0);
};

var profits = [1, 6, 10, 16];
var weights = [1, 2, 3, 5];
console.log(
  `Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`
);
console.log(
  `Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`
);
