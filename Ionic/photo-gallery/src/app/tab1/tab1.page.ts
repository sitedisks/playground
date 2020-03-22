import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers: [TodoService]
})
export class Tab1Page implements OnInit {

  todos: Todo[] = [];
  constructor(private todoSvc: TodoService) { }

  public ngOnInit() {
    this.todoSvc.getAllTodos().subscribe(
      (todos) => { this.todos = todos; }
    );
  }
}
