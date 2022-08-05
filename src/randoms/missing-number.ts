export default (nums: number[]): number => {
  const isPresentArray: Array<boolean> = new Array(nums.length);
  nums.forEach((num) => {
    if (num !== 0) {
      isPresentArray[num - 1] = true;
    }
  });
  for (
    let left = 0, right = isPresentArray.length - 1;
    left <= right;
    left++, right--
  ) {
    if (!isPresentArray[left]) {
      return left + 1;
    }
    if (!isPresentArray[right]) {
      return right + 1;
    }
  }
  return 0;
};
