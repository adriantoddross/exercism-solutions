export const gigasecond = (date) => {
  /*
  A gigasecond is 1 billion seconds

  Pseudocode:
  Init dateAfterGigasecond variable with function argument
  Add miliseconds to a Date object as shown below: https://stackoverflow.com/questions/7687884/add-10-seconds-to-a-date/7687926
    let timeObject = new Date();
    let milliseconds= 10 * 1000; // 10 seconds = 10000 milliseconds
    timeObject = new Date(timeObject.getTime() + milliseconds);
  Return dateAfterGigasecond
  */

  const gigasecond = 1e9;
  const dateAfterGigasecond = new Date(date.getTime() + gigasecond * 1000);
  console.log({ date: date, dateAfterGigasecond });
  return dateAfterGigasecond;
};
