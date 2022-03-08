import calculateEachMinute from "../calculate-each-minute";

describe("Calculate each minute between times", () => {
  it("simple input", () => {
    const input: Array<string> = [
      "2019-01-01 13:05:00,2019-01-01 13:08:00",
      "2019-01-01 13:58:00,2019-01-01 14:03:00",
    ];
    expect(calculateEachMinute(input)).toEqual([
      "apple, 2",
      "google, 1",
      "amazon, 1",
    ]);
  });
});
