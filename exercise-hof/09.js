let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function getMaxId() {
  const idNum = todos.map((todo) => todo.id);
  return Math.max(...idNum);
}

console.log(getMaxId());