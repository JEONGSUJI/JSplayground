var result = '';

for (var i = 5; i > 0; i--){
  for (var j = 1; j <= i; j++) result += '*';
  result += '\n';
}

console.log(result);