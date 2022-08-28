const maxRibbonCutsBruteForce = (total, ribbonLengths) => {
    const maxRibbonCuts = (total, ribbonLengths, index) => {
        if (total === 0) return 0;
        if (index >= ribbonLengths.length || ribbonLengths.length === 0) return Number.MIN_VALUE;
        let withIndex = Number.MIN_VALUE;
        if (ribbonLengths[index] <= total) {
            const result = maxRibbonCuts(total - ribbonLengths[index], ribbonLengths, index);
            if (result !== Number.MIN_VALUE) {
                withIndex = result + 1;
            }
        }
        const withoutIndex = maxRibbonCuts(total, ribbonLengths, index + 1);
        return Math.max(withIndex, withoutIndex);
    }
    const result = maxRibbonCuts(total, ribbonLengths, 0);
    return result === Number.MIN_VALUE ? -1 : result;
}

const maxRibbonCutsMemoization = (total, ribbonLengths) => {
    const dp = [];
    const maxRibbonCuts = (total, ribbonLengths, index) => {

        if (total === 0) return 0;
        if (index >= ribbonLengths.length || ribbonLengths.length === 0) return Number.MIN_VALUE;

        dp[index] = dp[index] || [];
        if (dp[index][total] !== undefined) return dp[index][total];
        let withIndex = Number.MIN_VALUE;
        let withoutIndex = Number.MIN_VALUE;

        if (ribbonLengths[index] <= total) {
            const result = maxRibbonCuts(total - ribbonLengths[index], ribbonLengths, index);
            if (result !== Number.MIN_VALUE) {
                withIndex = result + 1;
            }
        }

        withoutIndex = maxRibbonCuts(total, ribbonLengths, index + 1);
        return Math.max(withIndex, withoutIndex);
    }
    const result = maxRibbonCuts(total, ribbonLengths, 0);
    return result === Number.MIN_VALUE ? -1 : result;
}

const maxRibbonCutsBottomUp = (total, ribbonLengths) => {
    const size = ribbonLengths.length;
    const dp = new Array(size).fill(Number.MIN_VALUE).map(() => new Array(total + 1).fill(Number.MIN_VALUE));
    for (let i = 0; i < size; i++) dp[i][0] = 0;
    for (let i = 0; i < size; i++) {
        for (let t = 0; t <= total; t++) {
            if (i > 0) dp[i][t] = dp[i - 1][t]
            if (ribbonLengths[i] <= t && dp[i][t - ribbonLengths[i]] != Number.MIN_VALUE) dp[i][t] = Math.max(dp[i][t], dp[i][t - ribbonLengths[i]] + 1)
        }
    }
    return dp[size - 1][total] == Number.MIN_VALUE ? -1 : dp[size - 1][total];
}