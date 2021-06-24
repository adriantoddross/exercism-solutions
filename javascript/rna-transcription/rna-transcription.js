export const toRna = (strand) => {
  let transcription = "";

  for (let index = 0; index < strand.length; index++) {
    switch (strand[index]) {
      case "G":
        transcription += "C";
        break;

      case "C":
        transcription += "G";
        break;

      case "T":
        transcription += "A";
        break;

      case "A":
        transcription += "U";
        break;

      default:
        break;
    }
  }
  return transcription;
};
