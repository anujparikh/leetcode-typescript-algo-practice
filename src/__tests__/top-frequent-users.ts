import topFrequentUsers from "../randoms/top-frequent-users";

describe("Top 10 frequent user average session timings", () => {
  it("simple input", () => {
    const input: Array<string> = [
      "u1 login 1628518000",
      "u1 logout 1628518020",
      "u2 login 1628518000",
      "u2 logout 1628518040",
      "u1 login 1628518040",
      "u1 logout 1628518100",
      "u3 login 1628518000",
      "u3 logout 1628518090",
    ];
    expect(topFrequentUsers(input)).toStrictEqual([40, 40, 90]);
  });
});
