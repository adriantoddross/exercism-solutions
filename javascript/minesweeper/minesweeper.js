"use strict";

export const annotate = (input) => {
  if (input.length <= 1) return input;
  if (!input.includes("*") && !input.includes(" ")) return input;

  // handling mine surrounded by spaces
  // when looping through a row, stop at empty space
  // count the number of mines from the beginning of string to empty space
  // count the number of mines from end of string to empty space
  // Replace the space with the sum of those numbers
};
