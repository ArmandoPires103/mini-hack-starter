export function districtToBorough(district) {
  const manhattan = [1, 2, 3, 4, 5, 6];
  const bronx = [7, 8, 9, 10, 11, 12];
  const brooklyn = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 32];
  const queens = [24, 25, 26, 27, 28, 29, 30];
  const statenIsland = 31;

  if (manhattan.includes(+district)) {
    return `Manhattan`;
  } else if (bronx.includes(+district)) {
    return `Bronx`;
  } else if (brooklyn.includes(+district)) {
    return "Brooklyn";
  } else if (queens.includes(+district)) {
    return "Queens";
  } else {
    return "Staten Island";
  }
}
