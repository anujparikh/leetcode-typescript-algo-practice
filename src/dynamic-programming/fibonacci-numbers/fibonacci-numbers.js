const fibonacciNumbersRecursion = (number) => {
    if (number < 2) return 1;
    return fibonacciNumbersRecursion(number - 1) + fibonacciNumbersRecursion(number - 2);
}

const fibonnaciNumbersMemoization = (number) => {
    const dp = [];
    const fibonacciNumbers = (number) => {
        if (number < 2) return 1;
        if (dp[number] !== undefined) return dp[number];

        dp[number] = fibonnaciNumbersMemoization(number - 1) + fibonnaciNumbersMemoization(number - 2);
        return dp[number];
    }
    return fibonacciNumbers(number);
}

const fibonacciNumbersBottomUp = (number) => {
    const dp = [0, 1];
    for (let i = 2; i <= number; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[number];
}