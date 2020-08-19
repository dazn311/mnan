import {AfterViewInit, Component, OnInit} from '@angular/core';
import {DataTablesService} from '../../sevice/data-tables.service';
import {Task} from 'src/app/model/Task';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-tab-mob',
  templateUrl: './tab-mob.component.html',
  styleUrls: ['./tab-mob.component.css']
})
export class TabMobComponent implements OnInit, AfterViewInit {
  form: FormGroup;
  tables: Task[] = [];
  currentTask: Task = {id: 0, task: '33', text: '333', date: 232323, folder: 'current', userID: 0};
  showModal = false;
  modalStatus = 'view';
  modalStatusTitle = 'Просмотр';
  loading = false;
  LoadingMessage = 'Loading ...';
  errorFetch = '';


  constructor(public dataTableService: DataTablesService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      inTask: new FormControl(''),
      inText: new FormControl(''),
      newText: new FormControl('')
    });
    this.fetchTables();
  }

  ngAfterViewInit(): void {
    this.dataTableService.detectMob();
    this.dataTableService.taskSubject.subscribe(ts => this.tables = ts);
  }

  fetchTables(): void {
    this.loading = true;
    this.dataTableService.fetchTables()
      .subscribe(tasksRes => {
        if (tasksRes == null) {
          this.errorFetch = 'Error: not loading from DB';
        } else {
          // this.tables = tasksRes;
          this.dataTableService.taskSubject.next(tasksRes);
          this.dataTableService.tasks = tasksRes;
        }
        console.log('completed fetch tasksRes', tasksRes);
      }, error => {
        this.errorFetch = error.message;
        console.log('error.message fetch', this.errorFetch);
      }, () => {
        this.loading = false;
        console.log('completed fetch');
      });
  }

  setChangeTask(): void {
    switch (this.modalStatus) {
      case 'edit':
        this.currentTask.text = this.form.value.inText;
        this.saveEditedTask('e');
        break;
      case 'create':
        this.currentTask.text = this.form.value.newText;
        this.currentTask.folder = 'current';
        this.currentTask.date = Date.now();
        this.saveEditedTask('c');
        break;
      default:
        break;
    }

  }

  saveEditedTask(method: string): void {
    this.currentTask.task = this.form.value.inTask;
    this.dataTableService.putChangeTaskToDB(this.currentTask, method)
      .subscribe(res => {
        console.log('res', res);
        if (method === 'e') {
          this.dataTableService.updateLocalData(this.currentTask);
          console.log('save currentask', this.currentTask);
        }
        this.clockModal();
      });
  }


  setCurrTask(t): void {
    console.log('setCurrTask', t);
    this.currentTask = t;
    console.log('this.setCurrTask', this.currentTask);
    this.dataTableService.currentTask = t;
    this.showModal = true;
  }

  clockModal(): void {
    this.showModal = false;
  }

  toggleRadio(v: string): void {
    this.modalStatus = v;
    switch (v) {
      case 'view':
        this.modalStatusTitle = 'Просмотр заметки';
        break;
      case 'edit':
        this.modalStatusTitle = 'Редактировать заметку';
        break;
      case 'create':
        this.modalStatusTitle = 'Добавить новую заметку';
        break;
      default:
        break;
    }
    console.log(v);
  }
}
