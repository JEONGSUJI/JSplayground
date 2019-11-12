let todos = [];

const ajax = (() => {
  const req = (method, url, payload) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.setRequestHeader('content-type', 'application/json');
      xhr.send(JSON.stringify(payload));
      xhr.onload = () => {
        if (xhr.status === 200 || xhr.status === 201) {
          resolve(JSON.parse(xhr.response));
        }
      };
      xhr.onerror = () => {
        reject(new Error(xhr.status));
      };
    });
  };
  return {
    get(url) {
      return req('GET', url);
    },
    post(url, payload) {
      return req('POST', url, payload);
    },
    patch(url, payload) {
      return req('PATCH', url, payload);
    },
    delete(url) {
      return req('DELETE', url);
    }
  };
})();

// ajax.get('/todos')
//   .then(todos => Math.max(...todos.map((todo)=> todo.id)))
//   .then(id => ajax.delete(`/todos/${id}`))
//  promise를 가지고 있는 promise를 리턴하지 않고 promise를 받는데면 그냥 promise만 리턴해준다.
//   .then(console.log)
//   .catch(err => console.log(err));

(async() => {
  // then에 썼던 거는 안에 있어야 순서가 보장된다
  let todos = await ajax.get('/todos');
  const id = Math.max(...todos.map((todo)=> todo.id));
  todos = await ajax.delete(`/todos/${id}`);
  console.log(todos);
})();

// 콜백으로 하면 콜백헬이 된다. 만들어보기