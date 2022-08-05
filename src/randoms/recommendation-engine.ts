export default (input: Array<string>, k: number): Array<string> => {
  const frequencyMap: { [key: string]: number } = {};
  const uniqueSearches: Array<string> = [];
  input.forEach((i) => {
    frequencyMap[i] = (frequencyMap[i] || 0) + 1;
    if (frequencyMap[i] === 1) {
      uniqueSearches.push(i);
    }
  });
  uniqueSearches.sort((a, b) => {
    const diff = frequencyMap[b] - frequencyMap[a];
    if (diff !== 0) return diff;
    return a.localeCompare(b);
  });
  return uniqueSearches.slice(0, k);
};
