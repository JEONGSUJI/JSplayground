let todos = [];

// DOMs
const $todos = document.querySelector('.todos');
const $input = document.querySelector('.input-todo');
const $completeAll = document.querySelector('#ck-complete-all');
const $clearCompleted = document.querySelector('.clear-completed > .btn');
const $completedTodos = document.querySelector('.completed-todos');
const $activeTodos = document.querySelector('.active-todos');

const getTodos = () => {
  // 서버로부터 todos 취득
  todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'JavaScript', completed: false }
  ];
  todos.sort((todo1, todo2) => todo2.id - todo1.id);
};

const render = () => {
  let html = '';

  todos.forEach(({ id, content, completed }) => {
    html += `
    <li id="${id}" class="todo-item">
      <input class="checkbox" type="checkbox" id="ck-${id}" ${completed ? 'checked' : ''}>
      <label for="ck-${id}">${content}</label>
      <i class="remove-todo far fa-times-circle"></i>
    </li>`;
  });

  $todos.innerHTML = html;

  $completedTodos.textContent = todos.filter(todo => todo.completed).length;
  $activeTodos.textContent = todos.filter(todo => !todo.completed).length;
};

const addTodo = (content) => {
  // { id : 100, content: content, completed:false}
  todos = [{ id: generateId(), content, completed: false }, ...todos];
  console.log('[addTodo]', todos);
};

const toggleCompleted = (id) => {
  todos = todos.map((todo) => (todo.id === +id ? { ...todo, completed: !todo.completed } : todo));
  console.log('[toggleCompleted]', todos);
};

const generateId = () => (todos.length ? Math.max(...(todos.map(todo => todo.id))) + 1 : 1);

const removeTodo = (id) => {
  todos = todos.filter((todo) => todo.id !== +id);
  console.log('[removeTodo]', todos);
};

const completeAll = (completed) => {
  todos = todos.map( (todo) => ({ ...todo, completed });
  console.log('[completeAll]', todos);  
};

const removeCompletedAll = () => {
  todos = todos.filter(todo => (!todo.completed));
  console.log('[removeCompletedAll]', todos);  
}

// Event

window.onload = () => {
  getTodos();
  render();
};

$input.onkeyup = ({ target, keyCode }) => {
  const content = target.value.trim();
  if (content === '' || keyCode !== 13) return;
  target.value = '';
  addTodo(content);
  render();
};

$todos.onchange = ({ target }) => {
  toggleCompleted(target.parentNode.id);
  render();
};

$todos.onclick = ({ target }) => {
  if (!target.classList.contains('remove-todo')) return;
  // console.log(target.parentNode.id);
  removeTodo(target.parentNode.id);
  render();
};

$completeAll.onclick = ({ target }) => {
  // console.log(target.checked);
  completeAll(target.checked);
  render();
};

$clearCompleted.onclick = ({ target }) => {
  removeCompletedAll();
  render();
}