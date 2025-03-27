import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService, Todo } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  todoForm: FormGroup;
  isEditMode: boolean = false;
  todoId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService
  ) {
    this.todoForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEditMode = true;
        this.todoId = +id;
        const existingTodo = this.todoService.getTodoById(this.todoId);
        if (existingTodo) {
          this.todoForm.patchValue(existingTodo);
        }
      }
    });
  }

  onSubmit() {
    if (this.isEditMode) {
      this.todoService.updateTodo({ id: this.todoId!, ...this.todoForm.value, completed: false });
    } else {
      const newTodo: Todo = {
        id: Math.floor(Math.random() * 1000),
        ...this.todoForm.value,
        completed: false
      };
      this.todoService.addTodo(newTodo);
    }
    this.router.navigate(['/todos']);
  }
}
