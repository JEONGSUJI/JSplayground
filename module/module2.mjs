import { pi, square, Person } from './module.mjs';

// 모두 가져올 때
// import * as lib from './module.mjs';

// 식별자를 바꿀 때
// import { pi as PI, square as sq, Person as P } from './lib.mjs';

// 하나만 가져올 때
// import name from './module.mjs';

console.log(pi);
console.log(square(10));
console.log(new Person('Lee'));