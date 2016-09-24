import { Component } from '@angular/core';
import * as moment from 'moment/moment';

@Component({
  moduleId: module.id,
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  get todayDate(): string {
    return moment().format('MMMM DD, YYYY');
  }

  todos = {
    'todo': [
      {
        id: 1,
        title: 'Design TODO app with MEAN stack',
        ago: '3d ago',
        created: '20160918',
        dueDate: '',
        tags: ['design']
      },
      {
        id: 2,
        title: 'Build HTML/CSS for the template',
        ago: '2d ago',
        created: '20160920',
        dueDate: '',
        tags: []
      },
      {
        id: 3,
        title: 'Implement Component and data service',
        ago: '1d ago',
        created: '20160901',
        dueDate: '',
        tags: []
      }
    ],
    'progress': [
      {
        id: 5,
        title: 'Implement Component and data service',
        ago: '1d ago',
        created: '20160919',
        dueDate: '',
        tags: []
      }
    ],
    'done': []
  };

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

