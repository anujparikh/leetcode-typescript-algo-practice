const countSubSetBruteForce = (nums, s) => {
    const countSubSet = (nums, sum, index) => {
        if (sum === 0) return 1;
        if (sum < 0 || index >= nums.length || nums.length === 0) {
            return 0;
        }
        let withNumber = 0;
        let withoutNumber = 0;
        if (nums[index] <= sum) {
            withNumber = countSubSet(nums, sum - nums[index], index + 1);
        }
        withoutNumber = countSubSet(nums, sum, index + 1);
        return withNumber + withoutNumber;
    }
    return countSubSet(nums, s, 0);
}