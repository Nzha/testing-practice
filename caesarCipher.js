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
    console.log(strLetter);
    console.log(shift);
    let strLetterIndex = alphabet.findIndex((el) => el.toUpperCase() === strLetter.toUpperCase());
    console.log(strLetterIndex)

    cipheredTxt += alphabet[(strLetterIndex + shift) % 26];
  });
  return cipheredTxt;
};

console.log(caesarCipher('aB', 1));

export default caesarCipher;
