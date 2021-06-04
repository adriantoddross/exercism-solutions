export const steps = (number) => {
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
      n = Math.pow(n, 3) + 1;
    }
  }

  if (n === 1) {
    return steps;
  }
};
