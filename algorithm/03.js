function alphaString46(s) {
  const regexp = /^\d{4,6}$/g;
  return regexp.test(s);
}

console.log(alphaString46('1234')); // true
console.log(alphaString46('9014')); // true
console.log(alphaString46('723')); // false
console.log(alphaString46('a234')); // false
console.log(alphaString46('')); // false
console.log(alphaString46()); // false
