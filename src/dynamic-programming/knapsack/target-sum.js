const targetSumBruteForce = (nums, sum) => {
    if (sum === 0) return 1;
    if (nums.length === 0) return 0;

    const targetSum = (nums, target, index, currentSum) => {
        if (index < 0 && target === currentSum) return 1;
        if (index < 0) return 0;
        const postiveNumber = targetSum(nums, target, index - 1, currentSum + nums[index]);
        const negativeNumber = targetSum(nums, target, index - 1, currentSum - nums[index]);
        return postiveNumber + negativeNumber;
    }
    return targetSum(nums, sum, nums.length - 1, 0);

    // if (sum === 0) return 1;
    // if (nums.length === 0) return 0;

    // const targetSum = (nums, sum, index) => {
    //     if (sum === 0) return 1;
    //     if (index >= nums.length) return 0;

    //     let postiveNumber = targetSum(nums, sum - nums[index], index + 1);
    //     let negativeNumber = targetSum(nums, sum + nums[index], index + 1);
    //     return postiveNumber + negativeNumber;
    // }

    // return targetSum(nums, sum, 0);
}