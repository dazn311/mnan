import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Task} from '../model/Task';
import {Category} from '../model/Category';
import {Observable, Subject, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DataTablesService {
  tasks: Task[] = [];
  // loadingTask = false;
  taskByCategoriesList: Task[] = [];
  taskSubject = new Subject<Task[]>();
  selectedCategorySub = new Subject<string>();

  categories: Category[] = []; // Todo добавить заполнение категорий.

  constructor(private http: HttpClient) {
  }


  fillTablesByCategory(category: string): void {
    if (category === ''){
      this.taskByCategoriesList = this.tasks;
    } else {
      this.taskByCategoriesList = this.tasks.filter( c =>  c.folder === category );
    }
    // console.log('this.taskByCategoriesList', this.taskByCategoriesList );
    this.selectedCategorySub.next(category);
    this.taskSubject.next(this.taskByCategoriesList);

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

  // fetchTablesOld(): Promise<any> {
  //   return fetch('http://zagotorvki.phplocal/api/index.php');
  //
  // }

}
