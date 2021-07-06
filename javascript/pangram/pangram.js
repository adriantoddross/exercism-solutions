/*
  Approaches
    1. Regex group/range to find letters a-z, case insensitive; return .search()
    2. Create a Set of all characters in input string (filtered by regex) in and check if length === 26: https://stackoverflow.com/questions/32557299/javascript-pangram-regex
      2.1 Use.match() to filter non alphabetic characters, then check if length === 26
*/

export const isPangram = () => {
  throw new Error("Remove this statement and implement this function");
};
