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

const rodCuttingBottomUp = (lengths, prices, n) => {
    const size = prices.length;
    const dp = new Array(size).fill(0).map(() => new Array(n + 1).fill(0));
    for (let i = 0; i < size; i++) {
        dp[i][0] = 0;
    }
    for (let i = 0; i < size; i++) {
        for (let s = 1; s <= n; s++) {
            let withIndex = 0;
            let withoutIndex = 0;
            if (lengths[i] <= s) {
                withIndex = prices[i] + dp[i][s - lengths[i]];
            }
            i > 0 && (withoutIndex = dp[i - 1][s]);
            dp[i][s] = Math.max(withIndex, withoutIndex);
        }
    }
    return dp[size - 1][n];
}