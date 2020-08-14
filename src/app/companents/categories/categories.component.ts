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
  isVisibleFolderList:boolean = false;
  constructor(private dataService: DataTablesService) { }

  ngOnInit(): void {
    this.loadFolderList();
  }
  loadFolderList():void{
    setTimeout(() => { this.tmpArr = this.dataService.tasks;
        if (this.tmpArr.length) {
          this.tmpArr.map( item => {
            if (item.folder !== '' && !this.folders.includes(item.folder)) {
              this.folders.push(item.folder);
            }
          });
        }else {
          this.loadFolderList();
        }
    }, 5500);}

  toggleVisibleFolderList():void {
    this.isVisibleFolderList = !this.isVisibleFolderList;
  }

  showTaskByCategories(f: string):void {
    this.dataService.fillTablesByCategory(f);
  }
}
