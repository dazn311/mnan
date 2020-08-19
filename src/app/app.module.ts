import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { TablesComponent } from './companents/tables/tables.component';
import { CategoriesComponent } from './companents/categories/categories.component';
import { AuthComponent } from './companents/auth/auth.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {AuthPageComponent} from './pages/auth-page/auth-page.component';
import {TabPageComponent} from './pages/tab-page/tab-page.component';
import {TabEditComponent} from './pages/tab-edit/tab-edit.component';
import {TabPageMobComponent} from './pages/tab-page-mob/tab-page-mob.component';
import {TabMobComponent} from './companents/tab-mob/tab-mob.component';
import {HeaderComponent} from './companents/header/header.component';
import {CreateTabPageComponent} from './pages/create-tab-page/create-tab-page.component';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    TablesComponent,
    CategoriesComponent,
    AuthComponent,
    AuthPageComponent,
    TabPageComponent,
    TabEditComponent,
    TabPageMobComponent,
    TabMobComponent,
    HeaderComponent,
    CreateTabPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
