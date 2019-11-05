// (()=> {})
let todos = [];
let navState = 'all'; // 'all', 'active', 'completed

// Doms
const $todos = document.querySelector('.todos');
const $input = document.querySelector('.input-todo');
const $nav = document.querySelector('.nav');
const $completed = document.querySelector('.completed-todos');
const $active = document.querySelector('.active-todos');

// 1. 데이터 가져오기
const getTodos = () => {
  // 1) 가져오려면 서버의 url을 알아야한다.
  todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'JavaScript', completed: false }
  ];
  todos.sort((todo1, todo2) => todo2.id - todo1.id);
  console.log('[getTodos]', todos);
};


// 2. html을 만드는 함수 만들기
const render = () => {
  let html = '';

  const _todos = todos.filter(({ completed }) => (navState === 'all' ? true : (navState === 'active' ? !completed : completed)));
  // navState

  _todos.forEach(({ id, content, completed }) => {
    html += `
    <li id="my${id}" class="todo-item">
      <input class="checkbox" type="checkbox" id="ck-${id}" ${completed ? 'checked' : ''}>
      <label for="ck-myId">${content}</label>
      <i class="remove-todo far fa-times-circle"></i>
    </li>
    `;
  });
  
  $todos.innerHTML = html;

  $completed.textContent = todos.filter((todo) => todo.completed).length;
  $active.textContent = todos.filter((todo) => !todo.completed).length;
};


// 3. add Todo
const generateId = () => (todos.length ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1);

const addTodo = (content) => {
  todos = [{ id: generateId(), content, completed: false }, ...todos];
};

// 4. changeNav

const changeNav = (id) => {
  // 자식을 모두 가져오기
  [...$nav.children].forEach(($navItem) => {
    // if ($navItem.id === id) $navItem.classList.add('active');
    // else $navItem.classList.remove('active');

    $navItem.classList.toggle('active', $navItem.id === +id);
    // $navItem.classList.toggle('active');
  });

  // 현재 클릭된 상태를 id로 갖도록 하자
  navState = id;
  console.log('[changeNav]', navState);
};

const toggleCompleted = (id) => {
  todos = todos.map((todo) => (todo.id === +id ? { ...todo, completed: !todo.completed } : todo));
};

const removeTodo = (id) => {
  todos = todos.filter((todo) => todo.id !== +id);
};

// Events
window.onload = () => {
  getTodos();
  render();
};

$input.onkeyup = ({ target, keyCode }) => {
  const content = target.value.trim();
  if (keyCode !== 13 || content === '') return;
  addTodo(content);
  target.value = '';
  render();
};

$nav.onclick = ({ target }) => {
  if (target.classList.contains('nav')) return;
  changeNav(target.id);
  render();
};

// 왜 todos에 거나요? 동적으로 생성되기 때문에 check에 걸 수 없다.
// change event를 발생 시키는 애들은 checked 프로퍼티를 갖고 있다.
$todos.onchange = ({ target }) => {
  toggleCompleted(target.parentNode.id);
  render();
};


$todos.onclick = ({ target }) => {
  if (target.classList.contains('remove-todo')) return;
  removeTodo(target.parentNode.id);
  render();
};
// Tab Event Handler