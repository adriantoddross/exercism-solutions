export const decodedValue = (resistors) => {
  const colors = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
  ];

  const getResistorValue = (index) => colors.indexOf(resistors[index]);
  
  return getResistorValue(0) * 10 + getResistorValue(1);
};
