const allWaysToEvaluateExpression = (input) => {
  let result = [];

  if (!input.includes("+") && !input.includes("-") && !input.includes("*")) {
    result.push(parseInt(input));
  } else {
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      if (isNaN(char)) {
        let leftHalf = allWaysToEvaluateExpression(input.substring(0, i));
        let rightHalf = allWaysToEvaluateExpression(input.substring(i + 1));
        for (let l = 0; l < leftHalf.length; l++) {
          for (let r = 0; r < rightHalf.length; r++) {
            let part1 = leftHalf[l];
            let part2 = rightHalf[r];
            if (char === "+") {
              result.push(part1 + part2);
            } else if (char === "-") {
              result.push(part1 - part2);
            } else if (char === "*") {
              result.push(part1 * part2);
            }
          }
        }
      }
    }
  }

  return result;
};
