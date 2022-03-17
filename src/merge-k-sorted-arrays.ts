export default (lists: Array<Array<number>>): Array<number> => {
  let result: Array<number> = [...lists[0]];
  let counter = 1;
  while (counter < lists.length) {
    result = merge2SortedArrays(result, lists[counter]);
    counter++;
  }
  return result;
};

function merge2SortedArrays(nums1: number[], nums2: number[]): Array<number> {
  const result: Array<number> = [];
  let m = nums1.length - 1;
  let n = nums2.length - 1;
  while (m >= 0 || n >= 0) {
    if (m < 0) {
      result.unshift(nums2[n--]);
    } else if (n < 0) {
      result.unshift(nums1[m--]);
    } else {
      if (nums1[m] > nums2[n]) {
        result.unshift(nums1[m--]);
      } else {
        result.unshift(nums2[n--]);
      }
    }
  }
  return result;
}
