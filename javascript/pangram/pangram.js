// Filter the string input down to an array of letters A-Z using .match, then create a Set of unique characters and check if the length is 26.

export const isPangram = (string) =>
  new Set(string.match(/[A-Za-z]/g)).size === 26;
