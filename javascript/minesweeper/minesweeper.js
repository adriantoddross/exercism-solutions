"use strict";

// Doing research at https://www.javascripttutorial.net/javascript-multidimensional-array/
// Solution to study and comment out: https://exercism.io/tracks/javascript/exercises/minesweeper/solutions/2767c0b9384942a19c412c7f89e5a1d0

// export const annotate = (input) => {
//   if (input.length <= 1) return input;
//   if (!input.includes("*") && !input.includes(" ")) return input;
// };

export const annotate = (input) => {
  console.log("starting input", input);
  for (let col = 0; col < input.length; col++) {
    // Open a for loop; let col = 0, increment col while it is less than board length
    let result = []; // Create an empty array called result

    for (let row = 0; row < input[col].length; row++) {
      // Create a nested for loop; let row = 0, increment row while it is less than column length
      let range = []; // Create an empty array called range

      for (let j = -1; j < 2; j++) {
        // Create a 2nd nested for loop; j = -1, increment j while j is less than 2

        for (let i = -1; i < 2; i++) {
          // Create a 3rd nested for loop; let i = -1, increment i while i is less than 2
          if (input[col + j] != undefined) {
            // If the column index is NOT undefined...
            if (input[col + j][row + i] != undefined) {
              // nested if statement
              // and if the board position is NOT undefined add it to the range array
              range.push(input[col + j][row + i]);
            } else range.push("-"); // else add a hypen
          } else range.push("-"); // end of outer if statment
        }
      }
      // Now that we've formatted the board, check for mines

      range.join("").match(/\*/g)
        ? result.push(range.join("").match(/\*/g).length)
        : result.push(0);

      console.table(range);
    }

    input[col] = input[col].split("");
    for (let row = 0; row < input[col].length; row++) {
      if (input[col][row] !== "*" && result[row] !== 0)
        input[col][row] = String(result[row]);
    }
    input[col] = input[col].join("");
  }
  console.log("final input", input);
  return input;
};
