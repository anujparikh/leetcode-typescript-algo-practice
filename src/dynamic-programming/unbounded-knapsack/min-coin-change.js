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