import {Injectable} from '@angular/core';
import {Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {TodoService} from './todo.service';

@Injectable()
export class TodosResolve implements Resolve<any> {

  constructor(public router: Router, public todoService: TodoService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.todoService.getTodos();
  };

}
