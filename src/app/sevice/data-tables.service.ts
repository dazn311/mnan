import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Task} from '../model/Task';
import {Category} from '../model/Category';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class DataTablesService {
  tasks: Task[] = [];
  loadingTask = false;
  taskByCategoriesList: Task[] = [];
  taskSubject = new Subject<Task[]>();
  selectedCategorySub = new Subject<string>();

  categories: Category[] = []; // Todo добавить заполнение категорий.

  constructor(private http: HttpClient) {
  }

  // fillTables(): void {
  //   this.taskSubject.next(this.tasks);
  // }

  fillTablesByCategory(category: string): void {
    if (category === ''){
      this.taskByCategoriesList = this.tasks;
    } else {
      this.taskByCategoriesList = this.tasks.filter( c =>  c.folder === category );
    }
    console.log('this.taskByCategoriesList', this.taskByCategoriesList );
    this.selectedCategorySub.next(category);
    this.taskSubject.next(this.taskByCategoriesList);

  }

  getTables(): Task[] {
    this.loadingTask = true;
    // tslint:disable-next-line:no-unused-expression
    this.http.get<Task[]>('http://zagotorvki.phplocal/api/index.php')
      .pipe()
      .subscribe(respons => {
        this.tasks = respons;
        this.loadingTask = false;
        console.log('respons', respons);
      });
    return this.tasks;
  }

  // getTables(): Task[] {
  //   this.loadingTask = true;
  //   // tslint:disable-next-line:no-unused-expression
  //   fetch('http://zagotorvki.phplocal/api/index.php')
  //      .then( respons => respons.json())
  //      .then(resJson => this.tasks = resJson)
  //     .catch(error => console.log('error', error));
  //   return this.tasks;
  // }

  getTablesByCategory(category: string): Task[] {
    if (category === ''){
      return this.tasks;
    }
    this.taskByCategoriesList = this.tasks.filter( c =>  c.folder === category );
    console.log('this.taskByCategoriesList', this.taskByCategoriesList );
    return this.taskByCategoriesList;

  }


}
