import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  todo = new BehaviorSubject<Todo>(null);

  constructor() {}

  addTodo(text: string) {
    let state: any[] =
      JSON.parse(localStorage.getItem('minimal-todos-angular')) || [];

    let newTodo = new Todo(text);
    newTodo.id = String(state.length + 1);
    state.push(newTodo);

    localStorage.setItem('minimal-todos-angular',JSON.stringify(state));

    this.todo.next(newTodo);
  }
}
