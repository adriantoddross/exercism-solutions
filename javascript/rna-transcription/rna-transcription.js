export const toRna = (DNASequence) => {
  let RNASequence = "";

  for (let index = 0; index < DNASequence.length; index++) {
    switch (DNASequence[index]) {
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
