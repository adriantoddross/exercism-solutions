"use strict";

// Doing research at https://www.javascripttutorial.net/javascript-multidimensional-array/
// Solution to study and comment out: https://exercism.io/tracks/javascript/exercises/minesweeper/solutions/2767c0b9384942a19c412c7f89e5a1d0

export const annotate = (input) => {
  if (input.length <= 1) return input;
  if (!input.includes("*") && !input.includes(" ")) return input;
};
