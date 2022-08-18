const rodCuttingBruteForce = (lengths, prices, n) => {
    const rodCutting = (lengths, prices, n, index) => {
        if (lengths.length !== prices.length || n <= 0 || index >= lengths.length) {
            return 0;
        }
        let withIndex = 0;
        if (lengths[index] <= n) {
            withIndex = prices[index] + rodCutting(lengths, prices, n - lengths[index], index);
        }
        const withoutIndex = rodCutting(lengths, prices, n, index + 1);
        return Math.max(withIndex, withoutIndex);
    }
    return rodCutting(lengths, prices, n, 0);
}

const rodCuttingMemoization = (lengths, prices, n) => {
    const dp = [];
    const rodCutting = (lengths, prices, n, index) => {
        if (lengths.length !== prices.length || n <= 0 || index >= lengths.length) {
            return 0;
        }
        dp[index] = dp[index] || [];
        if (dp[index][n] !== undefined) {
            return dp[index][n];
        }
        let withIndex = 0;
        if (lengths[index] <= n) {
            withIndex = prices[index] + rodCutting(lengths, prices, n - lengths[index], index);
        }
        const withoutIndex = rodCutting(lengths, prices, n, index + 1);
        dp[index][n] = Math.max(withIndex, withoutIndex);
        return dp[index][n];
    }
    return rodCutting(lengths, prices, n, 0);
}