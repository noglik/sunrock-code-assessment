// since we start sequence from 1 and 2(not from classic 0), return does not include first distance
export const getDistPerSecond = (distance: number, first = 1, second = 2, sum = 3): Array<number> =>
  sum >= distance
    ? [sum]
    : [sum, ...getDistPerSecond(distance, second, first + second, sum + first + second)];

export const getFraction = (min: number, mid: number, max: number) => (mid - min) / (max - min);

export const calculateTimeFromDistance = (distance: number) => {
  // handle edge cases, when distance < 3
  if (distance < 3) {
    return distance <= 1 ? distance : 1 + getFraction(1, distance, 3);
  }

  const dist = getDistPerSecond(distance);
  const fullSeconds = dist.length;

  if (distance === dist[fullSeconds - 1]) return fullSeconds + 1;

  const fraction = getFraction(dist[fullSeconds - 2], distance, dist[fullSeconds - 1]);

  return fullSeconds + fraction;
};
