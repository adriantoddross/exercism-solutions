export const steps = (number) => {
  if (number <= 0) {
    throw new Error("Only positive numbers are allowed");
  }

  /*
  Cant solve with normal function, need n to be reduced indefinitely
  Solve with recursion and a base case; but how to keep track of count w/ recursive function?
  Solve with a while loop (while num > 1)

  Create w/ let variable to hold count
  Create variable w/ let that copies value of n
  If n = 1, return count
  Open while loop
    while n > 1...
    count++;
      if n is odd: 3n + 1
      if n is even:  n / 2
  Close while loop
  */

  let steps = 0;
  let n = number;

  while (n > 1) {
    steps++;

    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
  }

  return steps;
};
