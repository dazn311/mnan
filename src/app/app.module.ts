import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { TablesComponent } from './companents/tables/tables.component';
import { CategoriesComponent } from './companents/categories/categories.component';
import { AuthComponent } from './companents/auth/auth.component';
import { EditTaskComponent } from './companents/edit-task/edit-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TablesComponent,
    CategoriesComponent,
    AuthComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
