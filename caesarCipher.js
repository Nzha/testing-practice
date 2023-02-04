const caesarCipher = (str, shift) => {
  let alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  let result = '';

  str.split('').forEach((char) => {
    let charIndex = alphabet.findIndex(
      (el) => el.toUpperCase() === char.toUpperCase()
    );

    // If char is not a letter, add char to result, else add ciphered char
    if (charIndex === -1) {
      result += char;
    } else if (char === char.toUpperCase()) {
      result += alphabet[(charIndex + shift) % 26];
    } else {
      result += alphabet[(charIndex + shift) % 26].toLowerCase();
    }
  });
  return result;
};

console.log(caesarCipher('Ac! d!', 1));

export default caesarCipher;
