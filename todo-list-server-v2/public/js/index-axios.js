let todos = [];

// DOMs
const $todos = document.querySelector('.todos');
const $input = document.querySelector('.input-todo');
const $completeAll = document.querySelector('#ck-complete-all');
const $clearCompleted = document.querySelector('.clear-completed > .btn');
// const $completedTodos = document.querySelector('.completed-todos');
// const $activeTodos = document.querySelector('.active-todos');
const $nav = document.querySelector('.nav');
const $navState = document.querySelector('.nav-state');

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

  // $completedTodos.textContent = todos.filter((todo) => todo.completed).length;
  // $activeTodos.textContent = todos.filter((todo) => !todo.completed).length;
};

const getTodos = () => {
  // 서버로부터 todos 취득
  console.log('getTodos');
  axios.get('/todos')
    .then((res) => { todos = res.data; })
    .then(render)
    .catch((err) => console.error(err));
  // todos.sort((todo1, todo2) => todo2.id - todo1.id);
};

window.onload = getTodos;

// addTodo

const generateId = () => (todos.length ? Math.max(...(todos.map((todo) => todo.id))) + 1 : 1);

const addTodo = (content) => {
  axios.post('/todos', { id: generateId(), content, completed: false })
    .then((res) => { todos = res.data; })
    .then(console.log)
    .then(render)
    .catch((err) => console.error(err));
};

$input.onkeyup = ({ target, keyCode }) => {
  const content = target.value.trim();
  if (content === '' || keyCode !== 13) return;
  target.value = '';
  addTodo(content);
};

// checkTodo

const toggleCompleted = (id) => {
  const completed = !todos.find((todo) => todo.id === +id).completed;
  // console.log('[toggleCompleted]', todos);
  axios.patch(`/todos/${id}`, { completed })
    .then((res) => { todos = res.data; })
    .then(render)
    .catch((err) => console.error(err));
};

$todos.onchange = ({ target }) => {
  toggleCompleted(target.parentNode.id);
};

const removeTodo = (id) => {
  // console.log('[removeTodo]', todos);
  axios.delete(`/todos/${id}`)
    .then((res) => { todos = res.data; })
    .then(render)
    .catch((err) => console.error(err));
};

$todos.onclick = ({ target }) => {
  if (!target.classList.contains('remove-todo')) return;
  removeTodo(target.parentNode.id);
};

const completeAll = (completed) => {
  todos = todos.map((todo) => ({ ...todo, completed }));
  console.log('[completeAll]', todos);
  render();
};

$completeAll.onclick = ({ target }) => {
  completeAll(target.checked);
};

const removeCompletedAll = () => {
  todos = todos.filter((todo) => (!todo.completed));
  console.log('[removeCompletedAll]', todos);
  render();
};

$clearCompleted.onclick = () => {
  removeCompletedAll();
};

$nav.onclick = ({ target }) => {
  if (target.classList.contains('nav')) return;
  [...$nav.children].forEach(($navItem) => {
    $navItem.classList.toggle('active', $navItem === target);
  });
  $navState.textContent = target.id;
};
