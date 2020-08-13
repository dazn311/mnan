import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Task } from '../model/Task';

@Injectable({
  providedIn: 'root'
})
export class DataTablesService {
  tasks: Task[];
  // tasks = [{'id': 3, 'task': 'my task', 'text': 'string', 'date': 4566454, 'folder': 'current',  'userID': 5}];
  constructor(private http: HttpClient) { }

 async getTables(){
    await this.http.get<Task[]>('http://zagotorvki.phplocal/api/index.php')
      .subscribe(respons => {

        this.tasks.concat(respons);
        console.log('this.tasks 1: ',this.tasks);
      });
    console.log('this.tabs: ',this.tasks);
    return this.tasks;

  }


}
