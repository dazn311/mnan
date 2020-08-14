import {Component, OnInit} from '@angular/core';
import {DataTablesService} from '../../sevice/data-tables.service';
import {Task} from '../../model/Task';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  tables: Task[] = [];
  loading = false;
  LoadingMessage = 'Loading ...';
  constructor(public dataTableService: DataTablesService) {
  }

  ngOnInit() {
     this.getTables();
     this.dataTableService.taskSubject.subscribe(task => this.tables = task);
  }

  getTables(){
    this.tables = this.dataTableService.getTables();
    if (this.tables !== undefined){
      this.loading = false;
    } else {
      this.loading = true;
      this.updateTables();
    }
  }

  updateTables():void {
    if (this.tables === undefined){
      this.LoadingMessage = 'Loading ...wait 5s';
      setTimeout(() => {
        this.loading = false;
        this.tables = this.dataTableService.getTablesByCategory('');
        this.updateTables();
        }, 5000);
    }else {
      this.loading = false;
    }
  }
}   //  end class
