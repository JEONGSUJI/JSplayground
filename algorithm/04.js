function numPY(s) {
  const regexpP = /p/gi;
  const regexpY = /y/gi;
  const regexp = /[py]+/gi;

  // const resultP = s.match(regexpP).length;
  // const resultY = s.match(regexpY).length;

  const result = regexp.test(s);

  if (result) {
    return true;
  } else {
    // if (s.match(regexpP).length === s.match(regexpY).length) return true;
  }
}

console.log(numPY('pPoooyY')); // true
console.log(numPY('Pyy')); // false
console.log(numPY('ab')); // true
console.log(numPY('')); // true
console.log(numPY()); // true
