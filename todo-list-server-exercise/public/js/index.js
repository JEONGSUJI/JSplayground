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

const getTodos = (url, f) => {
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

window.onload = () => {
  getTodos('/todos', render);
};