import { Component } from '@angular/core';

interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  todos: Todo[] = [
    { id: 1, content: 'HTML', completed: true },
    { id: 2, content: 'CSS', completed: false },
    { id: 3, content: 'JavaScript', completed: true }
  ];

  removeTodo(id){
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  content = '';

  addtodo(){
    const content = this.content;
    console.log(content);
    this.content = '';
    
    this.todos = [...this.todos, { id: 999, content, completed: true }];
  }

  toggleCompleted(id: number){
    this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed : !todo.completed} : todo);
  }

}
