import { Component, Directive, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../models/todo';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {


  todos:Todo[] = [];
  todoForm = new FormGroup({
    title : new FormControl('',[Validators.required,Validators.maxLength(300),Validators.minLength(5)])
  });

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    JSON.parse(localStorage.getItem('minimal-todos-angular'))? null: localStorage.setItem('minimal-todos-angular',JSON.stringify(this.todos));
  }


  createTodo(){
    this.dataService.addTodo(this.todoForm.value.title);
    this.todoForm.patchValue({
      title:''
    });
  }


}
