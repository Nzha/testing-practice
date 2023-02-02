const caesarCipher = (str, shift) => {
  let alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'J',
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
  let cipheredTxt = '';

  str.split('').forEach((strLetter) => {
    for (let i = 0; i < alphabet.length; i++) {
      if (strLetter === alphabet[i]) {
        cipheredTxt += alphabet[i + shift];
      }
    }
  });
  return cipheredTxt;
};

console.log(caesarCipher('Z', 1))

export default caesarCipher;
