import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-create-tab-page',
  templateUrl: './create-tab-page.component.html',
  styleUrls: ['./create-tab-page.component.css']
})
export class CreateTabPageComponent implements OnInit {
  byPassedHTMLString = 'new task';

  constructor() {
  }

  ngOnInit(): void {
  }

}
