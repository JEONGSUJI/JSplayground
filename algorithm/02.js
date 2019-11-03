function getCount8() {
  let count8 = 0;
  for (let i = 0; i <= 10000; i++){
    const strI = String(i);
    for (let j = 0; j < strI.length; j++){
      if (strI.charAt(j) === String(8)) count8 += 1;
    }
  }
  return count8;
}

console.log(getCount8()); // 4000