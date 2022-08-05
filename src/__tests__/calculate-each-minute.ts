import calculateEachMinute from "../randoms/calculate-each-minute";

describe("Calculate each minute between times", () => {
  it("simple input", () => {
    const input: Array<string> = [
      "2019-01-01 13:05:00,2019-01-01 13:08:00",
      "2019-01-01 13:58:00,2019-01-01 14:03:00",
    ];
    expect(calculateEachMinute(input)).toEqual([
      "minutes: Tue Jan 01 2019 13:05:00 GMT-0600 (Central Standard Time)",
      "minutes: Tue Jan 01 2019 13:06:00 GMT-0600 (Central Standard Time)",
      "minutes: Tue Jan 01 2019 13:07:00 GMT-0600 (Central Standard Time)",
      "minutes: Tue Jan 01 2019 13:58:00 GMT-0600 (Central Standard Time)",
      "minutes: Tue Jan 01 2019 13:59:00 GMT-0600 (Central Standard Time)",
      "minutes: Tue Jan 01 2019 14:00:00 GMT-0600 (Central Standard Time)",
      "minutes: Tue Jan 01 2019 14:01:00 GMT-0600 (Central Standard Time)",
      "minutes: Tue Jan 01 2019 14:02:00 GMT-0600 (Central Standard Time)",
    ]);
  });
});
