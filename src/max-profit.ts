export default (prices: number[]): number => {
  let maxProfit = 0;
  let currentWindowProfit = 0;
  let counter = 0;
  let buyDay = 0;
  while (counter < prices.length) {
    currentWindowProfit = prices[counter] - prices[buyDay];
    maxProfit = Math.max(currentWindowProfit, maxProfit);
    if (currentWindowProfit <= 0) {
      buyDay = counter;
    }
    counter++;
  }
  return maxProfit;
};
