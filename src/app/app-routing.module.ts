import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';

const routes: Routes = [
  { path: 'todos', component: TodoListComponent },
  { path: 'todos/new', component: TodoFormComponent },  
  { path: 'todos/edit/:id', component: TodoFormComponent },  
  { path: '', redirectTo: '/todos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
