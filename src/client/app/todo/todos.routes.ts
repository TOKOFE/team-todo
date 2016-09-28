import { Route } from '@angular/router';
import { TodosComponent } from './index';
import {TodosResolve} from './todos.resolve.service';

export const TodosRoutes: Route[] = [
  {
    path: 'todo',
    component: TodosComponent,
    resolve: {
      todos: TodosResolve
    }
  }
];
