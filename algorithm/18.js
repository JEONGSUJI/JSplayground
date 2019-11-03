function digitSum(n) {
  if (n <= 100000000) {
    n += '';
    const digit = n.split('');
    console.log(digit);

    return digit.reduce((pre, cur) => {
      pre += cur * 1;
      return pre;
    }, 0);
  }
  return false;
}

console.log(digitSum(123)); // 6
console.log(digitSum(987)); // 24
console.log(digitSum(100000001)); // false
