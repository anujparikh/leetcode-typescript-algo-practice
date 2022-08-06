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