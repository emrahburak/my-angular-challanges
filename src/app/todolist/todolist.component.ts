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
    // this.todoList = JSON.parse(localStorage.getItem('minimal-todos-angular'));
    this.dataService.todos.subscribe((todos) => {
        this.todoList = todos;
      }
    );
  }

  deleteTodo({_id}:any){
    this.dataService.removeTodo(_id);
  }
}
