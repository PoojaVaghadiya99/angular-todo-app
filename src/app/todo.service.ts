import { Injectable } from '@angular/core';


export interface Todo {
title: any;
  id: number;
  description: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];

  getTodos() {
    return this.todos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  getTodoById(id: number): Todo | undefined {
    return this.todos.find(todo => todo.id === id);
  }
  
  updateTodo(updatedTodo: Todo) {
    const index = this.todos.findIndex(todo => todo.id === updatedTodo.id);
    if (index !== -1) {
      this.todos[index] = updatedTodo;
    }
  }

  completeTodo(id: number) {
    const todo = this.getTodoById(id);
    if (todo) {
      todo.completed = true;
    }
  }
}
