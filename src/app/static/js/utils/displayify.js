function displayify(str) {
  return str
    .toLowerCase()
    .split('_')
    .map(s =>
      s[0].toUpperCase()
       + s.slice(1))
    .join(' ');
}

export default displayify;
