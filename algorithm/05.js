function toWeirdCase(s) {
  let string = s.split(' ');
  console.log(string);
  
  string = string.map((even, i) =>
    i % 2 ? even.toLowerCase() : even.toUpperCase()
  );

  return string.toString().replace(/,/g, '');
}

console.log(toWeirdCase('hello world')); // 'HeLlO WoRlD'
console.log(toWeirdCase('my name is lee')); // 'My NaMe Is LeE'
