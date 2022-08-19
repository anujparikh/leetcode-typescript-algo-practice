const coinChangeBruteForce = (denominations, total) => {
    const coinChange = (denominations, total, index) => {
        if (total === 0) return 1;
        if (denominations.length === 0 || index >= denominations.length) return 0;
        let withIndex = 0;
        let withoutIndex = 0;
        if (denominations[index] <= total) {
            withIndex = coinChange(denominations, total - denominations[index], index);
        }
        withoutIndex = coinChange(denominations, total, index + 1);
        return withIndex + withoutIndex;
    }
    return coinChange(denominations, total, 0);
}

const coinChangeMemoization = (denominations, total) => {
    const dp = [];
    const coinChange = (denominations, total, index) => {
        dp[index] = dp[index] || [];
        if (dp[index][total] !== undefined) return dp[index][total];
        if (total === 0) return 1;
        if (denominations.length === 0 || index >= denominations.length) return 0;
        let withIndex = 0;
        let withoutIndex = 0;
        if (denominations[index] <= total) {
            withIndex = coinChange(denominations, total - denominations[index], index);
        }
        withoutIndex = coinChange(denominations, total, index + 1);
        dp[index][total] = withIndex + withoutIndex;
        return dp[index][total]
    }
    return coinChange(denominations, total, 0);
}

const coinChangeBottomUp = (denominations, total) => {
    const size = denominations.length;
    if (size === 0) return 0;
    if (total === 0) return 1;
    const dp = new Array(size).fill(0).map(() => Array(total + 1).fill(0));
    for (let i = 0; i < size; i++) {
        dp[i][0] = 1;
    }
    for (let t = 1; t <= total; t++) {
        dp[0][t] = denominations[0] === t ? 1 : 0;
    }
    for (let i = 0; i < size; i++) {
        for (let t = 1; t <= total; t++) {
            let withIndex = 0;
            let withoutIndex = 0;
            if (denominations[i] <= t) {
                withIndex = dp[i][t - denominations[i]];
            }
            if (i > 0) {
                withoutIndex = dp[i - 1][t];
            }
            dp[i][t] = withIndex + withoutIndex;
        }
    }
    return dp[size - 1][total];
}