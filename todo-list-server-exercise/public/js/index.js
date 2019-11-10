let todos = '';

const $input = document.querySelector('.content');
const $todos = document.querySelector('.todos');

const render = (data) => {
  todos = data;
  let html = '';
  todos.forEach((todo) => {
    html += `
    <li id="${todo.id}">
      <label>
        <input type="checkbox" class="check" ${todo.completed ? 'checked' : todo}>
        <span class="content">${todo.content}</span>
      </label>
      <button class="remove">X</button>
    </li>
    `;
  });
  $todos.innerHTML = html;
};

const getTodo = (url, f) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();
  xhr.onreadystatechange = () => {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200){
      f(JSON.parse(xhr.response));
    } else {
      throw new Error(xhr.status);
    }
  };
};

const post = (url, f, payload) => {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify(payload));
  xhr.onreadystatechange = () => {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200){
      f(JSON.parse(xhr.response));
    } else {
      throw new Error(xhr.status);
    }
  };
};

const del = (url, f, payload) => {
  const xhr = new XMLHttpRequest();
  xhr.open('DELETE', url);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify(payload));
  xhr.onreadystatechange = () => {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200){
      f(JSON.parse(xhr.response));
    } else {
      throw new Error(xhr.status);
    }
  };
};

const patch = (url, f, payload) => {
  const xhr = new XMLHttpRequest();
  xhr.open('PATCH', url);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify(payload));
  xhr.onreadystatechange = () => {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200){
      f(JSON.parse(xhr.response));
    } else {
      throw new Error(xhr.status);
    }
  };
};

const addTodo = ({ target, keyCode }) => {
  const content = $input.value.trim();
  if (keyCode !== 13 || content === '') return;
  target.value = '';
  const maxId = todos.length ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;
  post('/todos', render, { id: maxId, content, completed: false });
};

const removeTodo = ({ target }) => {
  if (!target.classList.contains('remove')) return;
  const id = +target.parentNode.id;
  del(`/todos/${id}`, render);
};

const checkTodo = ({ target }) => {
  const id = +target.parentNode.parentNode.id;
  const completed = !todos.find((todo) => todo.id === +id).completed;
  patch(`/todos/${id}`, render, { completed });
};

window.onload = () => {
  getTodo('/todos', render);
};

$input.onkeyup = (e) => {
  addTodo(e);
};

$todos.onclick = (e) => {
  removeTodo(e);
}

$todos.onchange = (e) => {
  checkTodo(e);
}