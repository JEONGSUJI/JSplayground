var x = 1;
var y = 2;

var c = y;
y = x;
x = c;

console.log(x, y);

// if 문을 삼항연산자로 바꿔보기

var x = 2;

var result = x % 2 ? '홀수' : '짝수';

console.log(result);


//for 문을 사용하여 1~10까지 찍기

for(var i = 1; i<= 10; i++){
  console.log(i);
}

// for 문을 사용하여 1부터 10중에 홀수만 찍기
for(var i = 1; i<= 10; i++){
  if(i%2===1) console.log(i);
}

// for 문을 사용하여 1부터 10중에 3의 배수만 찍기
for(var i = 1; i<= 10; i++){
  if(i%3===0) console.log(i);
}

// for 문을 사용하여 2의 배수이면서 3의 배수만 찍기
for(var i = 1; i<= 10; i++){
  if(i%2===0 && i%3===0) {
     console.log(i);
  }
}

// for 문을 사용하여 10부터 1까지 거꾸로 찍기
for (var i = 10; i > 0 ; i--){
  console.log(i);
}

// for 문을 사용하여 10부터 1까지 거꾸로에서 짝수만 찍기

for (var i = 10; i > 0 ; i--){
  if(i%2===0)
  console.log(i);
}
