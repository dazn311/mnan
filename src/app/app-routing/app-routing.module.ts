import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthPageComponent} from '../pages/auth-page/auth-page.component';
import {TabPageComponent} from '../pages/tab-page/tab-page.component';
import {TabEditComponent} from '../pages/tab-edit/tab-edit.component';
import {CreateTabPageComponent} from '../pages/create-tab-page/create-tab-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'tab', pathMatch: 'full'},
  {path: 'auth', component: AuthPageComponent},
  {path: 'create-tab', component: CreateTabPageComponent},
  {path: 'tab', component: TabPageComponent},
  {path: 'tab/:id', component: TabEditComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
