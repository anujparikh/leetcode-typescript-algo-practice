const staircaseRecursion = (stepNumber) => {
    if (stepNumber === 0) return 1;
    if (stepNumber === 1) return 1;
    if (stepNumber === 2) return 2;

    const take1Step = staircaseRecursion(stepNumber - 1);
    const take2Step = staircaseRecursion(stepNumber - 2);
    const take3Step = staircaseRecursion(stepNumber - 3);

    return take1Step + take2Step + take3Step;
}

const staircaseMemoization = (n) => {
    const dp = [];
    const staircase = (stepNumber) => {
        if (n === 0) return 1;
        if (n === 1) return 1;
        if (n === 2) return 2;

        if (dp[stepNumber] !== undefined) return dp[stepNumber];

        const take1Step = staircase(stepNumber - 1);
        const take2Step = staircase(stepNumber - 2);
        const take3Step = staircase(stepNumber - 3);
        dp[stepNumber] = take1Step + take2Step + take3Step;
        return dp[stepNumber];
    }
    return staircase(n);
}