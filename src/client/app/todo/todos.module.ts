import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodosComponent} from './todos.component';
import {TodoService} from './todo.service';
import {TodosResolve} from './todos.resolve.service';

@NgModule({
  imports: [CommonModule],
  declarations: [TodosComponent],
  exports: [TodosComponent],
  providers: [
    TodoService,
    TodosResolve
  ]
})

export class TodosModule { }
