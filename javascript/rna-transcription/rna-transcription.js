export const toRna = (DNASequence) => {
  /*
  approach 1:
    const RNAstrand =  '';
    open for loop
      switch statement: when case is met, add nucleotide to RNAStrand, break by default
        cases:
          G -> C
          C -> G
          T -> A
          A -> U
      end switch statement
    end for loop
    return RNAstrand

    approach 2:
      convert string to array
      use forEach or .map to iterate thru string w/ switch statement
      convert array to string & return

    approach 3:
      for of loop or a while loop (since we don't need an index)
  */

  let RNASequence = "";

  for (let i = 0; i < DNASequence.length; i++) {
    switch (DNASequence[i]) {
      case "G":
        RNASequence += "C";
        break;

      case "C":
        RNASequence += "G";
        break;

      case "T":
        RNASequence += "A";
        break;

      case "A":
        RNASequence += "U";
        break;

      default:
        break;
    }
  }
  return RNASequence;
};
