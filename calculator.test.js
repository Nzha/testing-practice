import calculator from "./calculator";

test('2 + 2 = 4', () => {
  expect(calculator.add(2,2)).toBe(4);
})

test('-2 + 2 = 0', () => {
  expect(calculator.add(-2,2)).toBe(0);
})

test('0.25 + 0.5 = 0.75', () => {
  expect(calculator.add(0.25,0.5)).toBe(0.75);
})

test('2 - 2 = 0', () => {
  expect(calculator.sub(2,2)).toBe(0);
})

test('2 * 2 = 4', () => {
  expect(calculator.mul(2,2)).toBe(4);
})

test('2 / 2 = 1', () => {
  expect(calculator.div(2,2)).toBe(1);
})