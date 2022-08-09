const canPartitionBruteForce = (nums) => {
    const halfSum = (nums.reduce((a, b) => a + b, 0)) / 2;
    const canPartition = (nums, sum, index) => {
        if (sum === 0) return true;
        if (sum < 0 || index >= nums.length) return false;
        let withNumber = false;
        let withoutNumber = false;
        if (nums[index] <= sum) {
            withNumber = canPartition(nums, sum - nums[index], index + 1);
        }
        withoutNumber = canPartition(nums, sum, index + 1);
        return withNumber || withoutNumber;
    }
    return canPartition(nums, halfSum, 0);
}