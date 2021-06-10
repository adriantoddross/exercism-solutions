export const steps = (number) => {
  if (number <= 0) {
    throw new Error("Only positive numbers are allowed");
  }

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
