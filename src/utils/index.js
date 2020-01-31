export const strToArray = str => {
  const newArray = str.split(",");
  newArray.map(item => item.trim());
  return newArray;
};