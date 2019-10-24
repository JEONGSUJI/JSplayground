let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function toggleCompletedAll() {
  todos = todos.map((todo) => Object.assign(todo, { completed: true }));
}

toggleCompletedAll();

console.log(todos);