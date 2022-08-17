const maxProfitKnapSackBruteForce = (profits, weights, capacity) => {
    const maxProfit = (profits, weights, capacity, index) => {
        if (capacity <= 0 || index >= weights.length || weights.length === 0) return 0;
        let withItem = 0;
        if (weights[index] <= capacity) {
            withItem = profits[index] + maxProfit(profits, weights, capacity - weights[index], index);
        }
        const withoutItem = maxProfit(profits, weights, capacity, index + 1);
        return Math.max(withItem, withoutItem);
    }
    return maxProfit(profits, weights, capacity, 0);
}

const maxProfitKnapSackMemoization = (profits, weights, capacity) => {
    const dp = [];
    const maxProfit = (profits, weights, capacity, index) => {
        if (capacity <= 0 || index >= weights.length || weights.length === 0) return 0;
        dp[index] = dp[index] || [];
        if (dp[index][capacity] !== undefined) return dp[index][capacity];
        let withItem = 0;
        if (weights[index] <= capacity) {
            withItem = profits[index] + maxProfit(profits, weights, capacity - weights[index], index);
        }
        const withoutItem = maxProfit(profits, weights, capacity, index + 1);
        dp[index][capacity] = Math.max(withItem, withoutItem);
        return dp[index][capacity]
    }
    return maxProfit(profits, weights, capacity, 0);
}

const maxProfitKnapSackBottomUp = (profits, weights, capacity) => {
    const size = weights.length;
    const dp = new Array(size).fill(0).map(() => new Array(capacity + 1).fill(0));
    for (let i = 0; i < size; i++) {
        dp[i][0] = 0;
    }
    for (let i = 1; i < size; i++) {
        for (let c = 1; c <= capacity; c++) {
            let withItem = 0;
            if (weights[i] <= c) {
                withItem = profits[i] + dp[i][c - weights[i]];
            }
            const withoutItem = dp[i - 1][c];
            dp[i][c] = Math.max(withItem, withoutItem);
        }
    }
    return dp[size - 1][capacity];
}