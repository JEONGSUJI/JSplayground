function sumDivisor(num) {
  const result = [];
  for (let i = 1; i <= num; i++) {
    if (Number.isInteger(num / i)) {
      result.push(i);
      result.push(num / i);
    }
  }

  const divisor = result.reduce((pre, cur, i, self) => {
    if (self.indexOf(cur) === i) pre.push(cur);
    return pre;
  }, []);

  return divisor.reduce((pre, cur) => {
    pre += cur;
    return pre;
  }, 0);
}

console.log(sumDivisor(12)); // 28
