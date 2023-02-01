import reverse from './reverse';

test('reverse string with lower case', () => {
  expect(reverse('hello')).toBe('olleh');
});

test('reverse string with upper case', () => {
  expect(reverse('Hello')).toBe('olleH');
});

test('reverse string with empty space', () => {
  expect(reverse('hello world')).toBe('dlrow olleh');
});

test('reverse string with numbers', () => {
  expect(reverse('12345')).toBe('54321');
});

test('incorrect value', () => {
  expect(reverse(12345)).toBe('Incorrect value');
});

