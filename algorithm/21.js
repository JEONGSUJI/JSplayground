function adder(x, y) {
  if (x === y) return x;

  let result = 0;
  for (let i = 0; i <= Math.abs(y) - Math.abs(x); i++) {
    console.log(x + i);
    result += x + i;
  }
  return result;
}

console.log(adder(3, 5)); // 12
console.log(adder(-3, -5)); // 12
console.log(adder(3, 3)); // 12
