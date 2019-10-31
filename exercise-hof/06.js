// Object.assign(target, source);
// 열거할 수 있는 하나 이상의 출처 객체로부터 대상 객체로 속성을 복사할 때 사용한다.
// 대상 객체: target을 반환한다. sources : 하나 이상의 출처 객체

let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function toggleCompletedById(id) {
  todos = todos.filter((todo) => id === todo.id ? Object.assign(todo , {completed : !todo.completed}) : todo);
}

toggleCompletedById(2);

console.log(todos);