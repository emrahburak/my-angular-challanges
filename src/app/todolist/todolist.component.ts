import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  todoList: any[] = [];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.todoList = JSON.parse(localStorage.getItem('minimal-todos-angular'));
    this.dataService.todo.subscribe((todo) => {
      if (todo != null) {
        console.log('todo list ', todo);
        this.todoList.push(todo);
      }
    });

    this.dataService.testSubject.subscribe(test => {
      console.log(test);
    });
  }

  deleteTodo({_id}:any){
    this.dataService.removeTodo(_id);
  }
}
