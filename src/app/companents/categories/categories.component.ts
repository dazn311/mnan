import { Component, OnInit } from '@angular/core';
import {Task} from '../../model/Task';
import {DataTablesService} from '../../sevice/data-tables.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  tmpArr: Task[] = [];
  folders: string[] = [];
  loading = false;
  isVisibleFolderList = false;
  selectedCategory = '';
  constructor(private dataService: DataTablesService) { }

  ngOnInit(): void {
    this.dataService.taskSubject.subscribe(tasks => this.loadFolderList(tasks)); // this.dataSource.data = tasks);
    this.dataService.selectedCategorySub.subscribe(sc => this.selectedCategory = sc);

    this.loadFolderList(this.tmpArr);
  }

  loadFolderList(t): void {
    console.log('loadFolder func');
    this.tmpArr = t;
    // this.tmpArr = this.dataService.tasks;

    // if (this.tmpArr) {
    if (this.tmpArr.length > 0) {
      this.tmpArr.map(item => {
        if (item.folder !== '' && !this.folders.includes(item.folder)) {
          this.folders.push(item.folder);
        }
      });
    }

  }

  // loadFolderList(): void {
  //   setTimeout(() => { this.tmpArr = this.dataService.tasks;
  //        if (this.tmpArr.length) {
  //         this.tmpArr.map( item => {
  //           if (item.folder !== '' && !this.folders.includes(item.folder)) {
  //             this.folders.push(item.folder);
  //           }
  //         });
  //       }else {
  //         this.loadFolderList();
  //       }
  //   }, 5500);
  // }

  toggleVisibleFolderList(): void {
    this.isVisibleFolderList = !this.isVisibleFolderList;
  }

  showTaskByCategories(f: string): void {
    if (f === '') {
      this.selectedCategory = 'all';
    } else {
      this.selectedCategory = f;
    }

    this.dataService.fillTablesByCategory(f);
  }


}
