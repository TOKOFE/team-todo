import { Component } from '@angular/core';
import * as moment from 'moment/moment';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  todos: any = {};

  get todayDate(): string {
    return moment().format('MMMM DD, YYYY');
  }

  constructor(public router: Router, public route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data.forEach((data: any) => {
      this.todos = data.todos;
    });
  }

  addTask(type? = 'todo'): void {
    let task = {
      id: 4,
      title: 'New Added title',
      ago: 'now',
      created: '20160921',
      dueDate: '',
      tags: []
    };

    this.todos[type].push(task);
  }

  getAgo(d: string): string {
    return moment(d, 'YYYYMMDD').fromNow();
  }

  allowDrop(event: any): void {
    event.preventDefault();
  }

  drag(event: any, type: string, taskId: number): void {
    event.dataTransfer.setData('type', type);
    event.dataTransfer.setData('id', taskId);
  }

  drop(event, targetType: string): void {
    event.preventDefault();
    let taskId: number = +event.dataTransfer.getData('id');
    let srcType = event.dataTransfer.getData('type');
    let srcTasks = this.todos[srcType];
    let theIndex = 0;

    srcTasks.forEach((task, idx) => {
      if (task.id === taskId) {
        theIndex = idx;
        return false;
      }
    });

    this.todos[targetType].push(this.todos[srcType].splice(theIndex, 1)[0]);
  }
}

