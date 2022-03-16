export default (input: Array<string>): Array<number> => {
  const modifiedInput = input.map((userActivityInfo: string) => {
    const [userId, action, time] = userActivityInfo.split(" ");
    return {
      userId,
      action,
      time,
    };
  });
  const userActivityInfoMap: { [key: string]: Array<string> } = {};
  modifiedInput.forEach(
    (userActivity: { userId: string; action: string; time: string }) => {
      const { userId, action, time } = userActivity;
      userActivityInfoMap[userId] = userActivityInfoMap[userId]
        ? [...userActivityInfoMap[userId], time]
        : [time];
    }
  );

  const modifiedUserActivityInfo: Array<{
    numberOfLogins: number;
    averageSessionUsage: number;
  }> = [];

  Object.keys(userActivityInfoMap).forEach((key) => {
    const sessionTimings = userActivityInfoMap[key]
      .filter((v, i) => i % 2 === 0)
      .map((time: string, i: number) => {
        return parseInt(userActivityInfoMap[key][i * 2 + 1]) - parseInt(time);
      });
    const averageSessionTiming =
      sessionTimings.reduce((c, p) => c + p, 0) / sessionTimings.length;
    modifiedUserActivityInfo.push({
      numberOfLogins: ~~(userActivityInfoMap[key].length / 2),
      averageSessionUsage: averageSessionTiming,
    });
  });

  modifiedUserActivityInfo.sort((a, b) => {
    return b.numberOfLogins - a.numberOfLogins;
  });
  return modifiedUserActivityInfo
    .map((m) => m.averageSessionUsage)
    .slice(0, 10);
};
