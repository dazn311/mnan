import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'mnan';
  isEditPage: boolean = false;
  isSideNavCloded = true;

  constructor() {}


  ngOnInit(): void {

  }


  sideNavVisibleToggle() {
    this.isSideNavCloded = !this.isSideNavCloded;
  }
}
