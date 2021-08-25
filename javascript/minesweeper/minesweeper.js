"use strict";

// Doing research at https://www.javascripttutorial.net/javascript-multidimensional-array/
// Solution to study and comment out: https://exercism.io/tracks/javascript/exercises/minesweeper/solutions/2767c0b9384942a19c412c7f89e5a1d0

// export const annotate = (input) => {
//   if (input.length <= 1) return input;
//   if (!input.includes("*") && !input.includes(" ")) return input;
// };

export const annotate = (input) => {
  for (let col = 0; col < input.length; col++) {
    let result = [];
    for (let row = 0; row < input[col].length; row++) {
      let range = [];

      for (let j = -1; j < 2; j++) {
        for (let i = -1; i < 2; i++) {
          if (input[col + j] != undefined) {
            if (input[col + j][row + i] != undefined) {
              range.push(input[col + j][row + i]);
            } else range.push("-");
          } else range.push("-");
        }
      }
      range.join("").match(/\*/g)
        ? result.push(range.join("").match(/\*/g).length)
        : result.push(0);
    }

    input[col] = input[col].split("");
    for (let row = 0; row < input[col].length; row++) {
      if (input[col][row] !== "*" && result[row] !== 0)
        input[col][row] = String(result[row]);
    }
    input[col] = input[col].join("");
  }
  return input;
};
