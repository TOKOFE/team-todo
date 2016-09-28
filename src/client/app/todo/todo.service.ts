import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class TodoService {

  getTodos(): Observable<any> {
    return Observable.of({
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
    });
  }
}
