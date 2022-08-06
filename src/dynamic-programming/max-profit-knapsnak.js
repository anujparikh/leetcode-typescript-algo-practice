const maxProfitBrutForceRecursion = function (profits, weights, capacity) {
    const maxProfitRecursive = (profits, weights, capacity, index) => {
        if (capacity <= 0 || index >= weights.length) return 0;
        let profit1 = 0;
        let profit2 = 0;
        if (weights[index] <= capacity) {
            profit1 = profits[index] + maxProfitRecursive(profits, weights, capacity - weights[index], index + 1);
        }
        profit2 = maxProfitRecursive(profits, weights, capacity, index + 1);
        return Math.max(profit1, profit2);
    }
    return maxProfitRecursive(profits, weights, capacity, 0);
};

const maxProfitMemoization = function (profits, weights, capacity) {
    const dp = [];
    const maxProfitRecursive = (profits, weights, capacity, index) => {
        if (capacity <= 0 || index >= weights.length) return 0;
        dp[capacity] = dp[capacity] || [];
        if (dp[capacity][index]) return dp[capacity][index];
        let profit1 = 0;
        if (weights[index] <= capacity) {
            profit1 = profits[index] + maxProfitRecursive(profits, weights, capacity - weights[index], index + 1);
        }
        const profit2 = maxProfitRecursive(profits, weights, capacity, index + 1);
        return Math.max(profit1, profit2);
    }
    return maxProfitRecursive(profits, weights, capacity, 0);
}