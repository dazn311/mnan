import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {DataTablesService} from '../../sevice/data-tables.service';
import {Task} from '../../model/Task';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit, AfterViewInit {
  // поля для таблицы (те, что отображают данные из задачи - должны совпадать с названиями переменных класса)
   displayedColumns: string[] = ['color', 'tast', 'text', 'folder', 'date', 'delete'];
   dataSource: MatTableDataSource<Task>; // контейнер - источник данных для таблицы
  @Input()
  tables: Task[] = [];
  // ссылки на компаненты в таблице
  @ViewChild(MatPaginator, {static: false}) private paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) private sort: MatSort;
  loading = false;
  LoadingMessage = 'Loading ...';
  selectedRow = '';
  selectedCategory = '';
  isEditingTablesCell = false;
  constructor(public dataTableService: DataTablesService) {
  }

  ngOnInit(): void {

    this.getTables(); // Todo перенести функцию в компанент логин
    // this.dataTableService.taskSubject.subscribe(tasks => this.tables = tasks);
    this.dataTableService.taskSubject.subscribe(tasks => this.dataSource.data = tasks);
    this.dataTableService.selectedCategorySub.subscribe(sc => this.selectedCategory = sc);

  }

  ngAfterViewInit(): void {
    this.dataSource = new MatTableDataSource();

    this.addTableObjects();
  }

  private addTableObjects(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  getTables(): void {
    this.tables = this.dataTableService.getTables();
    if (this.tables.length > 0) {
      this.loading = false;
    } else {
      this.loading = true;
      this.updateTables();
    }
  }

  updateTables(): void {
    if (this.tables.length == 0) {
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
    console.log('this.dataSource', this.dataSource);
    this.addTableObjects();

    this.dataSource.sortingDataAccessor = (task, colName) => {
      console.log('colName', colName);
      // по каким полям выполнять сортировку для каждого столбца
      switch (colName) {
        case 'task': {
          return task.task ? task.task : null;
        }
        case 'text': {
          return task.text ? task.text : null;
        }
        case 'date': {
          return task.date ? task.date : null;
        }
      }
    };

  }


  // в зависимости от статуса задачи - вернуть цвет названия
  private getPriorityColor(task: Task): string {

    // цвет завершенной задачи
    if (task.folder === 'current') {
      return '#F8F9FA'; // TODO вынести цвета в константы (magic strings, magic numbers)
    }

    if (task.folder === 'work' ) {
      return '#F4C5C8';
    }

    return '#fff'; // TODO вынести цвета в константы (magic strings, magic numbers)

  }



}

