function getDayName(a, b) {
  const date = `${new Date(2016, a - 1, b)}`;
  return date.substring(0, 3);
}

console.log(getDayName(5, 24));