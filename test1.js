function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// 인스턴스의 생성
const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle2);

console.log(circle1.getDiameter());
console.log(circle2.getDiameter());


const circle3 = Circle(15);

console.log(circle3);

// 일반 함수 Circle내의 this는 전역 객체를 가리킨다.
console.log(radius);