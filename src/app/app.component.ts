import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Task} from './model/Task';

import { TablesComponent} from './companents/tables/tables.component';
import { CategoriesComponent} from './companents/categories/categories.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'mnan';

  constructor(private http: HttpClient) {}


  ngOnInit(): void {
    this.http.get('http://zagotorvki.phplocal/api/index.php')
      .subscribe(respons => {
        console.log(respons);
      });
  }
}
