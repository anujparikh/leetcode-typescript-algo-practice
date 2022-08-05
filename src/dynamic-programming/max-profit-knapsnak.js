const solveKnapsackBrutForce = function (profits, weights, capacity) {
    let maxProfit = 0;
    if (capacity <= 0 || weights.length === 0) return maxProfit;
    for (let i = 0; i < weights.length; i++) {
        if (weights[i] <= capacity) {
            let currentProfit = profits[i] + solveKnapsack(profits.slice(i + 1), weights.slice(i + 1), capacity - weights[i]);
            maxProfit = Math.max(currentProfit, maxProfit);
        }
    }
    return maxProfit;
};