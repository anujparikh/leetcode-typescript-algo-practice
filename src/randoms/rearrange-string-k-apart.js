const Heap = require("./collections/heap"); //http://www.collectionsjs.com
const reorganize_string = function (str, k) {
  const frequencyMap = {};
  const resultArray = [];
  for (let i = 0; i < str.length; i++) {
    frequencyMap[str[i]] = (frequencyMap[str[i]] || 0) + 1;
  }
  const compareFunction = (a, b) => a[1] - b[1];
  const maxHeap = new Heap([], null, compareFunction);
  const keys = Object.keys(frequencyMap);
  for (let i = 0; i < keys.length; i++) {
    maxHeap.push([keys[i], frequencyMap[keys[i]]]);
  }
  let previous = [];
  while (maxHeap.length > 0) {
    let [char, freq] = maxHeap.pop();
    resultArray.push(char);
    freq--;
    previous.push([char, freq]);
    if (previous.length === k) {
      [char, freq] = previous.shift();
      if (freq > 0) {
        maxHeap.push([char, freq]);
      }
    }
  }
  return resultArray.length === str.length ? resultArray.join("") : "";
};

console.log(`Reorganized string: ${reorganize_string("Programmingm", 3)}`);
console.log(`Reorganized string: ${reorganize_string("mmpp", 2)}`);
console.log(`Reorganized string: ${reorganize_string("aab", 2)}`);
console.log(`Reorganized string: ${reorganize_string("aapa", 3)}`);
