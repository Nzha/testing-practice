const onlyNumbers = (arr) => {
  return arr.every((el) => {
    return typeof el === 'number';
  });
};

const analyzeArray = (arr) => {
  if (!onlyNumbers(arr)) return 'Array must include only numbers';
  let result = {};
  let average = arr.reduce((a, b) => a + b, 0) / arr.length;
  result.average = Math.round(average * 10) / 10;
  result.min = Math.min(...arr);
  result.max = Math.max(...arr);
  result.length = arr.length;
  return result;
};

export default analyzeArray;

const testArray = analyzeArray([1, 8, 3, 4, 2, '6']);

console.log(testArray);
