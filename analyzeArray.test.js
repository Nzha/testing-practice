import analyzeArray from './analyzeArray';

test('[1, 4, 8] is {average: 4.3, min: 1, max: 8, length: 3}', () => {
  expect(analyzeArray([1, 4, 8])).toEqual({
    average: 4.3,
    min: 1,
    max: 8,
    length: 3,
  });
});

test('[1,8,3,4,2,6] is {average: 4, min: 1, max: 8, length: 6}', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('[1,8,3,4,2,"6"] returns error message', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, '6'])).toBe(
    'Array must include only numbers'
  );
});

test('[] returns error message', () => {
  expect(analyzeArray([])).toBe(
    'Array is empty'
  );
});
