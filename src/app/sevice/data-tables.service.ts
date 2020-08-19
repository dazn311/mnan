import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Task} from '../model/Task';
import {Category} from '../model/Category';
import {Observable, Subject, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

export type TaskIn = {
  id: number,
  task: string,
  text: string,
  date: number,
  folder: string,
  user_id: number
};


@Injectable({providedIn: 'root'})
export class DataTablesService {
  isMobile = false;
  tasks: Task[] = [];
  taskSubject = new Subject<Task[]>();
  selectedCategorySub = new Subject<string>();
  currentTask: Task;

  categories: Category[] = []; // Todo добавить заполнение категорий.

  constructor(private http: HttpClient) {
  }


  fillTablesByCategory(category: string): void {
    if (category === ''){
      this.taskSubject.next(this.tasks);
    } else {
      this.taskSubject.next(this.tasks.filter(c => c.folder === category));
    }

  }

  // 16.08.20
  fetchTables(): Observable<Task[]> {
    let params = new HttpParams();
    params = params.append('limit', '50');
    return this.http.get<Task[]>('http://zagotorvki.phplocal/api/index.php', {
      params,
      observe: 'response'
    })
      .pipe(map(response => {
        return response.body;
      }), catchError(err => {
        console.log('fetch error', err.message);
        return throwError(err);
      }));
  }

  putChangeTaskToDB(t: Task, method: string): Observable<any> {
    let params = new HttpParams();

    params = params.append('method', method);
    params = params.append('id', t.id.toString());
    params = params.append('task', t.task);
    params = params.append('text', t.text);
    params = params.append('folder', t.folder);
    return this.http.get('http://zagotorvki.phplocal/api/index.php', {
      params
    });
  }

  updateLocalData(task: Task): void {
    const newTask = this.tasks.map(t => {
      if (t.id == task.id) {
        return t = task;
      }
      return t;
    });
    this.taskSubject.next(newTask);
    this.tasks = newTask;
  }


  getTabByID(id: number): Task[] {
    return this.tasks.filter(task => task.id === +id);

  }

  detectMob(): void {
    this.isMobile = ((window.innerWidth <= 450) && (window.innerHeight <= 860));
  }


}
