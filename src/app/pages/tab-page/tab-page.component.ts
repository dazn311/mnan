import {AfterViewInit, Component, OnInit} from '@angular/core';
import {DataTablesService} from '../../sevice/data-tables.service';

@Component({
  selector: 'app-tab-page',
  templateUrl: './tab-page.component.html',
  styleUrls: ['./tab-page.component.css']
})
export class TabPageComponent implements OnInit, AfterViewInit {

  isEditPage = false;
  isMobile = false;

  constructor(private dataTabServer: DataTablesService) {
  }

  ngOnInit(): void {
    this.isMobile = this.dataTabServer.isMobile;
  }

  ngAfterViewInit(): void {

  }

}
