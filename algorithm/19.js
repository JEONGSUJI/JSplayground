function isHarshad(n) {
  const arrayN = String(n).split('');
  console.log(arrayN);

  const addN = arrayN.reduce((pre, cur) => {
    pre += cur * 1;
    return pre;
  }, 0);

  return Number.isInteger(n / addN);
}

console.log(isHarshad(10)); // true
console.log(isHarshad(12)); // true
console.log(isHarshad(18)); // true
console.log(isHarshad(11)); // false
console.log(isHarshad(13)); // false
