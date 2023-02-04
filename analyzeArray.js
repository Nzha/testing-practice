const analyzeArray = (arr) => {
  let result = {};
  let average = arr.reduce((a, b) => a + b, 0) / arr.length;
  result.average = Math.round(average * 10) / 10;

  let min = arr[0];
  let max = arr[0];
  arr.forEach((el) => {
    if (el < min) min = el;
    if (el > max) max = el;
  });
  result.min = min;
  result.max = max;

  result.length = arr.length;

  return result;
};

export default analyzeArray;

const testArray = analyzeArray([1, 8, 3, 4, 2, 6]);

console.log(testArray);
