const noOfSubsetsWithSumBruteForce = (num, sum) => {
  const canPartition = (currentIndex, sum) => {
    if (sum === 0) {
      return 1;
    }
    if (currentIndex >= num.length || sum < 0) return 0;
    let sumWithCurrentIndex = 0;
    if (num[currentIndex] <= sum) {
      sumWithCurrentIndex = canPartition(
        currentIndex + 1,
        sum - num[currentIndex]
      );
    }
    const sumWithoutCurrentIndex = canPartition(currentIndex + 1, sum);
    return sumWithCurrentIndex + sumWithoutCurrentIndex;
  };

  return canPartition(0, sum);
};
