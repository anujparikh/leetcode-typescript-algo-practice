const noOfDistinctWords = (input: string): number => {
  const distinctWords = new Set();
  let i = 0;
  while (i < input.length) {
    if (
      input.charCodeAt(i) < "0".charCodeAt(0) ||
      input.charCodeAt(i) > "9".charCodeAt(0)
    ) {
      i++;
    } else {
      let j = i;
      while (
        input.charCodeAt(j) >= "0".charCodeAt(0) &&
        input.charCodeAt(j) <= "9".charCodeAt(0) &&
        j < input.length
      ) {
        j++;
      }
      distinctWords.add(input.substring(i, j));
      i = j;
    }
  }
  return distinctWords.size;
};
