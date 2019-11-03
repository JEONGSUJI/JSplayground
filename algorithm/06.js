function hideNumbers(str) {
  const hide = str.length - 4;
  const num = [...str.slice(0, hide)].fill('*');
  const show = [str.slice(-4)];
  return [...num, ...show].toString().replace(/,/g, '');
}

console.log(hideNumbers('01033334444')); // *******4444
console.log(hideNumbers('027778888')); // *****8888
