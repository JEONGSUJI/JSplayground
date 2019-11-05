let todos = [];

const $todos = document.querySelector('.todos');
const $input = document.querySelector('.input-todo');

// 0. render 하기

const render = () => {
  let html = '';

  todos.forEach((todo) => {
    html += `
    <li id="${todo.id}" class="todo-item">
      <input class="checkbox" type="checkbox" id="ck-${todo.id}" ${todo.completed ? 'checked' : ''}>
      <label for="ck-${todo.id}">${todo.content}</label>
      <i class="remove-todo far fa-times-circle"></i>
    </li>`;
  });

  $todos.innerHTML = html;
};

// 1. 서버로부터 데이터 가져오기
const getTodos = () => {
  todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'JavaScript', completed: false }
  ];
  // +1. 추가구현) 아이디가 큰 순서대로 렌더하기
  todos.sort((todo1, todo2) => todo2.id - todo1.id);
};

window.onload = () => {
  getTodos();
  render();
};

// 2. 입력 시 데이터 추가하기

const generateId = () => (todos.length ? Math.max(...(todos.map((todo) => todo.id))) + 1 : 1);

const addTodos = (content) => {
  todos = [{ id: generateId(), content, completed: false }, ...todos];
  console.log('[addTodo]', todos);
};

$input.onkeyup = ({ target, keyCode }) => {
  const content = target.value.trim();
  if (content === '' || keyCode !== 13) return;
  target.value = '';
  addTodos(content);
  render();
};

// 3. remove 버튼 click 시 지우기

const removeTodo = (id) => {
  todos = todos.filter((todo) => todo.id !== +id);
};

$todos.onclick = ({ target }) => {
  if (!target.classList.contains('remove-todo')) return;
  removeTodo(target.parentNode.id);
  render();
};

// 4. check 클릭 시 completed 변경하기

const toggleCompleted = (id) => {
  todos = todos.map((todo) => (todo.id === +id ? {...todo, completed: !todo.completed } : todo));
};

$todos.onchange = ({ target }) => {
  toggleCompleted(target.parentNode.id);
  render();
};

// +2. 추가구현) 전체 선택 구현하기
// +3. 추가구현) 체크된 숫자 표시하고 클릭 시 지워지는 버튼
// +4. 추가구현) 체크되지 않은 숫자 표시하기