/**
 * Returns time needed to pass given distance, using fibonacci sequence for
 * traveled distance calculation.
 */
export const calculateTimeFromDistance = (distance: number) => {
  let seconds = 0;
  let traveledDistance = 0;

  let first = 0;
  let second = 1;

  while (traveledDistance < distance) {
    traveledDistance += second;
    seconds++;

    const next = first + second;
    first = second;
    second = next;
  }

  return seconds;
};

