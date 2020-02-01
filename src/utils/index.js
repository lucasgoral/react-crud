export const strToArray = str => {
  const newArray = str.split(",").map(item => item.trim()).filter(element => element
  );
  console.log(newArray)
  console.log('----')
  return newArray;
};