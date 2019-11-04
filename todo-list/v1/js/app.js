let todos = [];
const $input = document.querySelector('.input-todo');
const $todos = document.querySelector('.todos');
const $completeAll = document.querySelector('.complete-all');
const $completeTodo = document.querySelector('.clear-completed > .btn');
const $checkTodo = document.querySelector('.completed-todos');
const $noCheckTodo = document.querySelector('.active-todos');

const render = () => {
  let html = '';
  todos.forEach((todo) => {
    html += `
    <li id="${todo.id}" class="todo-item">
      <input class="checkbox" type="checkbox" id="ck-${todo.id}" ${todo.completed ? 'checked' : ''}>
      <label for="ck-${todo.id}"> ${todo.content} </label>
      <i class="remove-todo far fa-times-circle"></i>
    </li>`;
  });
  $todos.innerHTML = html;
  $checkTodo.innerHTML = [todos.filter((todo) => todo.completed === true)].length;
  $noCheckTodo.innerHTML = [todos.filter((todo) => todo.completed === false)].length;
  console.log(todos.filter((todo) => todo.completed === false));
  console.log([todos.filter((todo) => todo.completed === false)].length);
};


const getTodo = () => {
  todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'JavaScript', completed: false }
  ];
  render();
};

const addTodo = (e) => {
  if (e.keyCode !== 13 || $input.value.trim() === '') return;
  console.log(Math.max(todos.filter((todo) => todo.id)));
  const maxId = todos.length ? Math.max(...(todos.map((todo) => todo.id))) + 1 : 1;
  todos = [...todos, { id: maxId, content: `${$input.value}`, completed: false }];
  render();
};

const removeTodo = (e) => {
  if (!e.target.classList.contains('remove-todo')) return;
  todos = todos.filter((todo) => todo.id !== +e.target.parentNode.id);
  render();
};

const checkTodo = (e) => {
  todos = todos.map((todo) => (todo.id === +e.target.parentNode.id ? Object.assign(todo, { completed: !todo.completed }) : todo));
  render();
};

const allClick = (e) => {
  if (!e.target.classList.contains('.complete-all')) return;
  console.log('click');
  render();
  // todos = todos.map((todo) => (Object.assign(todo, { completed: !todo.completed })));
};

const clearTodo = (e) => {
  if (!e.target.classList.contains('btn')) return;
  todos = todos.filter((todo) => todo.completed === false);
  render();
};

// event
window.onload = getTodo;
$input.onkeyup = addTodo;
$todos.onclick = removeTodo;
$todos.onchange = checkTodo;

$completeAll.onclick = allClick;
$completeTodo.onclick = clearTodo;