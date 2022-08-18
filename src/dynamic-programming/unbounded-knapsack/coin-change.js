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