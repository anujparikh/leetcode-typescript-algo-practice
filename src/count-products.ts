export default (input: Array<string>): Array<string> => {
  const output: Array<string> = [];
  const companyMap: { [key: string]: number } = {};
  input.forEach((i) => {
    const [product, company] = i.split(",").map((a) => a.trim());
    companyMap[company] = (companyMap[company] || 0) + 1;
  });
  Object.keys(companyMap).forEach((company) =>
    output.push(`${company}, ${companyMap[company]}`)
  );
  return output;
};
