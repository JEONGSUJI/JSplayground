function waterMelon(n) {
  const repeat = '수박'.repeat(n / 2);
  return n % 2 ? `${repeat}수` : repeat;
}

console.log('n이 3인 경우: ' + waterMelon(3));
console.log('n이 4인 경우: ' + waterMelon(4));
