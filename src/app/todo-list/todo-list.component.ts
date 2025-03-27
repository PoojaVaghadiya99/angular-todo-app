import { Component } from '@angular/core';
import { Todo, TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  todos: Todo[] = [];

  constructor(private todoService: TodoService, private router: Router) {}

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  editTodo(todoId: number) {
    console.log('Navigating to edit:', todoId); // Debugging
    this.router.navigate(['/todos/edit', todoId]);
  }
  

  completeTodo(todoId: number) {
    this.todoService.completeTodo(todoId);
  }
}
