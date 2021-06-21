const ONE_BILLION = 1_000_000_000_000;

export const gigasecond = (startDate) => {
  const GIGASECOND = ONE_BILLION;
  return new Date(startDate.getTime() + GIGASECOND);
};
