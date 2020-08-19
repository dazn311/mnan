import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {QuillModule} from 'ngx-quill';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    QuillModule.forRoot({
      modules: {
        syntax: false,
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],
          [{'size': ['small', false, 'large', 'huge']}],
          [{'color': []}, {'background': []}],
          [{'font': []}],
          [{'align': []}],
        ]
      }
    })
  ],
  exports: [
    HttpClientModule,
    QuillModule
  ]
})

export class SharedModule {
}


