import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class DataService  {
  todos = new BehaviorSubject<any[]>(this.getState());

  constructor() {
  }



  addTodo(text: string) {

    let state: any[] = this.getState()

    let newTodo = new Todo(text);
    newTodo.id = String(Date.now());
    state.push(newTodo);

    this.setState(state);


    this.todos.next(state);
  }

  removeTodo(id:string){
    let state:any[] = this.getState();
    let newState = state.filter(x => x._id !== id);
    this.setState(newState);

    this.todos.next(newState);
  }


  getState():string[]{
    return JSON.parse(localStorage.getItem('minimal-todos-angular')) || [];
  }

  setState(state:any){
    localStorage.setItem('minimal-todos-angular',JSON.stringify(state));
  }
}
