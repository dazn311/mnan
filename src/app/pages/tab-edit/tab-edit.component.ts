import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {DataTablesService} from '../../sevice/data-tables.service';
import {Task} from '../../model/Task';

@Component({
  selector: 'app-tab-edit',
  templateUrl: './tab-edit.component.html',
  styleUrls: ['./tab-edit.component.css']
})
export class TabEditComponent implements OnInit {

  tastNew: Task;

  constructor(private route: ActivatedRoute, private dataTabService: DataTablesService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log('params.id', params.id);
      this.tastNew = this.dataTabService.getTabByID(+params.id)[0];
    });

    // this.tastNew = this.dataTabService.currentTask;
  }

}
