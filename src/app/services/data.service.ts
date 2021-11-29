import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  todo = new BehaviorSubject<Todo>(null);
  testSubject = new BehaviorSubject<any[]>([]);

  constructor() {}

  addTodo(text: string) {
    let state: any[] = this.getState()

    let newTodo = new Todo(text);
    newTodo.id = String(state.length + 1);
    state.push(newTodo);

    this.setState(state);

    this.testSubject.next(state);

    this.todo.next(newTodo);
  }

  removeTodo(id:string){
    let state:any[] = this.getState();
    let newState = state.filter(x => x._id !== id);
    this.setState(newState);

    this.todo.next(null);
    this.testSubject.next(newState);
  }


  getState():string[]{
    return JSON.parse(localStorage.getItem('minimal-todos-angular')) || [];
  }

  setState(state:any){
    localStorage.setItem('minimal-todos-angular',JSON.stringify(state));
  }
}
