console.log('star를 찍기 전 123을 이어붙이는 방법 학습');

var star = '';

for (var i = 1; i <= 3; i++){
  console.log(i);
  star += i;
}

console.log(star);


console.log('이중 for문을 사용해서 정사각형 찍기');
// var result2;
// for (var a = 1; a <= 5; a++){
//   result2 = "";
//   for (var b = 1; b <= 5; b++){
//     result2 += '*';
//   }  
//   console.log(result2);
// }

var result2 ="";
for (var a = 1; a <= 5; a++){
  for (var b = 1; b <= 5; b++){
    result2 += '*';
  }  
  result2 += '\n';
}
console.log(result2);

console.log('이중 for문을 사용해서 별찍기');

// var result3;
// for (var c = 1; c <= 5; c++){
//   result3 = "";
//   for (var d = 1; d <= c; d++){
//     result3 += "*";
//   }
//   console.log(result3); 
// }

var result3 = "";
for (var c = 1; c <= 5; c++){
  for (var d = 1; d <= c; d++){
    result3 += "*";
  }
  result3 += '\n';
  console.log(result3); 
}
console.log(result3); 



console.log('이중 for문을 사용해서 거꾸로 별찍기');
for (var e = 5; e >= 1; e--){
  var result4 = "";
  for (var f = 1; f <= e; f++){
    result4 += '*'
  }
  console.log(result4);
}


console.log('이중 for문을 사용해서 정삼각형 별찍기');

var result5;

for (var g = 5; g >= 1; g -= 2){
  result5 = "";
  for(var h = 1; h<=g; h++){
    result5 += '*';
  }
  console.log(result5);  
}
