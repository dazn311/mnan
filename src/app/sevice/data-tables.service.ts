import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Task} from '../model/Task';
import {Category} from '../model/Category';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTablesService {
  tasks: Task[];
  loadingTask: boolean = false;
  taskByCategoriesList: Task[] = [];
  taskSubject = new Subject<Task[]>();
  selectedCategorySub = new Subject<string>();
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
    this.http.get<Task[]>('http://zagotorvki.phplocal/api/index.php')
      .subscribe(respons => {
        this.tasks = respons;
        this.loadingTask = false;
      });
    return this.tasks;

  }

  getTablesByCategory(category: string): Task[] {
    if (category === ''){
      return this.tasks;
    }
    this.taskByCategoriesList = this.tasks.filter( c =>  c.folder === category );
    console.log('this.taskByCategoriesList', this.taskByCategoriesList );
    return this.taskByCategoriesList;

  }


}
