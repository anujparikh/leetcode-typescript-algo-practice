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