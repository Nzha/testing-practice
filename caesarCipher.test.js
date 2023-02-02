import caesarCipher from './caesarCipher';

test('Caesar cipher alphabet', () => {
  expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 1)).toBe(
    'bcdefghijklmnopqrstuvwxyza'
  );
});
