import {Component, OnInit} from '@angular/core';
import {DataTablesService} from '../../sevice/data-tables.service';
import {Task} from '../../model/Task';
import {async} from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  tablesPro: Promise<Task[]>;
  tables: Task[];

  constructor(public dataTableService: DataTablesService) {
  }

  ngOnInit():void  {
     this.getTables ();

  }

  getTables (): void {
    this.tablesPro = this.dataTableService.getTables();
    setTimeout(() => {this.tables = this.dataTableService.tasks;}, 5000);
  }

}
