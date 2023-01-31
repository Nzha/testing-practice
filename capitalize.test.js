import capitalize from './capitalize';

test('First letter not capitalized', () => {
  expect(capitalize('my first test')).toBe('My first test');
});

test('Capitalized first letter changing to lowercase', () => {
  expect(capitalize('My first test')).toBe('My first test');
});

test('Empty value', () => {
  expect(capitalize()).toBe('Empty value');
});

test('Incorrect value', () => {
  expect(capitalize(123)).toBe('Value is not a string');
});
