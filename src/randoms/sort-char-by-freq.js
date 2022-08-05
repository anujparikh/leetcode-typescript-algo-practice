/**
 * https://leetcode.com/problems/sort-characters-by-frequency/
 */
const Heap = require('./collections/heap'); //http://www.collectionsjs.com

const sort_character_by_frequency = function(str) {
  const frequencyMap = {};
  let output = "";

  for (let i = 0; i < str.length; i++) {
    frequencyMap[str[i]] = (frequencyMap[str[i]] || 0) + 1;
  }

  const maxHeap = new Heap([], null, (a, b) => {
    return frequencyMap[a] - frequencyMap[b];
  });
  const keys = Object.keys(frequencyMap);

  for (let i = 0; i < keys.length; i++) {
    maxHeap.push(keys[i]);
  }

  while (maxHeap.length !== 0) {
    const current = maxHeap.pop();
    for (let i = 0; i < frequencyMap[current]; i++) {
      output = `${output}${current}`;
    }
  }

  return output;
};


console.log(`String after sorting characters by frequency: ${sort_character_by_frequency("Programming")}`)
console.log(`String after sorting characters by frequency: ${sort_character_by_frequency("abcbab")}`)
