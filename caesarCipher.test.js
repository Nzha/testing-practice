import caesarCipher from './caesarCipher';

test('Caesar cipher with shift 1', () => {
  expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 1)).toBe(
    'bcdefghijklmnopqrstuvwxyza'
  );
});


test('Caesar cipher with space', () => {
  expect(caesarCipher('defend the east wall of the castle', 1)).toBe(
    'efgfoe uif fbtu xbmm pg uif dbtumf'
  );
});

test('Caesar cipher with shift 23', () => {
  expect(caesarCipher('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG', 23)).toBe(
    'QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD'
  );
});

test('Caesar cipher with punctuation', () => {
  expect(caesarCipher('Start!', 1)).toBe(
    'Tubsu!'
  );
});
