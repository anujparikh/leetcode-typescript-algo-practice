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

const maxProfitBottomUp = function (profits, weights, capacity) {
    const size = weights.length;
    if (capacity <= 0 || size === 0 || profits.length != size) return 0;
    const dp = (new Array(size).fill(0)).map(() => new Array(capacity + 1).fill(0));
    for (let c = 0; c <= capacity; c++) {
        if (weights[0] <= c) dp[0][c] = profits[0];
    }
    for (let i = 1; i < size; i++) {
        for (let c = 1; c <= capacity; c++) {
            let profit1 = 0;
            if (weights[i] <= c) {
                profit1 = dp[i - 1][c - weights[i]] + profits[i];
            }
            const profit2 = dp[i - 1][c];
            dp[i][c] = Math.max(profit1, profit2);
        }
    }
    return dp[size - 1][capacity];
}