import {Component, OnInit} from '@angular/core';
import {DataTablesService} from './sevice/data-tables.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'mnan';
  isSideNavCloded = true;

  constructor(private dataTabServer: DataTablesService) {
  }


  ngOnInit(): void {
    this.dataTabServer.detectMob();
  }


}
