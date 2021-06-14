export const gigasecond = (date) => {
  const gigasecond = 1e9; // 1,000,000
  const dateAfterGigasecond = new Date(date.getTime() + gigasecond * 1000); // Add a million seconds in milliseconds to a given date
  console.log({ date: date, dateAfterGigasecond });
  return dateAfterGigasecond;
};
