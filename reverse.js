const reverse = (str) => {
  if (typeof str !== 'string') return 'Incorrect value';
  return str.split('').reverse().join('');
};

console.log(reverse('hello'));

export default reverse;