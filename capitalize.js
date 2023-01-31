const capitalize = (str) => {
  if (!str) return 'Empty value';
  if (typeof str !== 'string') return 'Value is not a string';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default capitalize;
