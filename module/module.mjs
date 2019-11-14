export const pi = Math.PI;

export function square(x) {
  return x * x;
}

export class Person {
  constructor(name) {
    this.name = name;
  }
}

// 이렇게 쓰는게 일반적이다.
// export { pi, square, Person };

// 하나만 export 할 때는 export default를 적어주고, 하나는 이름이 없어도 된다.
// 이 경우는 변수는 export 못한다.