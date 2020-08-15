import {Component, OnInit} from '@angular/core';
import {DataTablesService} from '../../sevice/data-tables.service';
import {Task} from '../../model/Task';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  // поля для таблицы (те, что отображают данные из задачи - должны совпадать с названиями переменных класса)
  private displayedColumns: string[] = ['tast', 'text', 'folder', 'date', 'delete'];
  private dataSource: MatTableDataSource<Task>; // контейнер - источник данных для таблицы


  tables: Task[] = [];
  loading = false;
  LoadingMessage = 'Loading ...';
  selectedRow = '';
  selectedCategory = '';
  isEditingTablesCell = false;
  constructor(public dataTableService: DataTablesService) {
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
    this.getTables();
    this.dataTableService.taskSubject.subscribe(task => this.tables = task);
    this.dataTableService.selectedCategorySub.subscribe(sc => this.selectedCategory = sc);
  }

  getTables(): void {
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
        this.refreshTable();
        this.updateTables();
      }, 5000);
    }else {
      this.loading = false;
    }
  } // end updetaTables

  // показывает задачи с применением всех текущий условий (категория, поиск, фильтры и пр.)
  private refreshTable(): void {
    this.dataSource.data = this.tables; // обновить источник данных (т.к. данные массива tasks обновились)
  }


  // в зависимости от статуса задачи - вернуть цвет названия
  private getPriorityColor(task: Task) {

    // цвет завершенной задачи
    if (task.completed) {
      return '#F8F9FA'; // TODO вынести цвета в константы (magic strings, magic numbers)
    }

    if (task.priority && task.priority.color) {
      return task.priority.color;
    }

    return '#fff'; // TODO вынести цвета в константы (magic strings, magic numbers)

  }



}

