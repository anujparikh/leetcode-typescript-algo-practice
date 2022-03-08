export default (input: Array<string>): Array<string> => {
  const output: Array<string> = [];
  input.forEach((times) => {
    const [start, end] = times.split(",").map((i) => new Date(i));
    const minutes: Array<string> = [
      ...Array((end.getTime() - start.getTime()) / 1000 / 60).keys(),
    ].map((i, k) => {
      return `minutes: ${new Date(start.getTime() + k * 60 * 1000)}`;
    });
    output.push(...minutes);
  });
  return output;
};
