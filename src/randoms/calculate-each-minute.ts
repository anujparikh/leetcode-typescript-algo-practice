export default (input: Array<string>): Array<string> => {
  const output: Array<string> = [];
  input.forEach((times) => {
    const [start, end] = times.split(",").map((i) => new Date(i));
    const minutes: Array<string> = [
      ...Array((end.getTime() - start.getTime()) / 1000 / 60).keys(),
    ].map((i) => {
      return `minutes: ${new Date(start.getTime() + i * 60 * 1000)}`;
    });
    output.push(...minutes);
  });
  return output;
};
