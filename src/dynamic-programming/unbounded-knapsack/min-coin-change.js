const minCoinChangeBruteForce = (denominations, total) => {
    const minCoinChange = (denominations, total, index) => {
        if (total === 0) return 0;
        if (total < 0 || index >= denominations.length) return Number.MAX_VALUE;
        let withIndex = Number.MAX_VALUE;
        let withoutIndex = Number.MAX_VALUE;
        if (denominations[index] <= total) {
            res = minCoinChange(denominations, total - denominations[index], index);
            if (res !== Number.MAX_VALUE) withIndex = res + 1;
        }
        withoutIndex = minCoinChange(denominations, total, index + 1);
        return Math.min(withIndex, withoutIndex);
    }
    const result = minCoinChange(denominations, total, 0);
    return result === Number.MAX_VALUE ? -1 : result;
}

const minCoinChangeMemoization = (denominations, total) => {
    const dp = [];
    const minCoinChange = (denominations, total, index) => {
        if (total === 0) return 0;
        if (total < 0 || index >= denominations.length) return Number.MAX_VALUE;
        dp[index] = dp[index] || [];
        if (dp[index][total] !== undefined) return dp[index][total];
        let withIndex = Number.MAX_VALUE;
        let withoutIndex = Number.MAX_VALUE;
        if (denominations[index] <= total) {
            let res = minCoinChange(denominations, total - denominations[index], index);
            if (res !== Number.MAX_VALUE) withIndex = res + 1;
        }
        withoutIndex = minCoinChange(denominations, total, index + 1);
        return Math.min(withIndex, withoutIndex);
    }
    const result = minCoinChange(denominations, total, 0);
    return result === Number.MAX_VALUE ? -1 : result;
}

const minCoinChangeBottomUp = (denominations, total) => {
    const size = denominations.length;
    const dp = new Array(size).fill(Number.MAX_VALUE).map(() => new Array(total + 1).fill(Number.MAX_VALUE));
    for (let i = 0; i < size; i++) dp[i][0] = 0;
    for (let i = 0; i < size; i++) {
        for (let t = 0; t <= total; t++) {
            if (i > 0) dp[i][t] = dp[i - 1][t];
            if (denominations[i] <= t) dp[i][t] = Math.min(dp[i][t], dp[i][t - denominations[i]] + 1);
        }
    }
    return dp[size - 1][total] !== Number.MAX_VALUE ? dp[size - 1][total] : -1;
}