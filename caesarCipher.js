const caesarCipher = (str, shift) => {
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';

  str.split('').forEach((char) => {
    let charIndex = alphabet.indexOf(char.toUpperCase());

    // If char is not a letter, add char to result, else add ciphered char in upper or lowercase
    if (charIndex === -1) {
      result += char;
    } else {
      let cipheredIndex = (charIndex + shift) % 26;
      result +=
        char === char.toUpperCase()
          ? alphabet[cipheredIndex]
          : alphabet[cipheredIndex].toLowerCase();
    }
  });
  return result;
};

console.log(caesarCipher('Ac! d!', 1));

export default caesarCipher;
