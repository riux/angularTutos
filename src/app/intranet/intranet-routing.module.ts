import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntranetLayoutComponent } from './intranet-layout/intranet-layout.component';

import { IndexComponent } from './pages/index/index.component';
import { UsersComponent } from './pages/users/users.component';


const routes: Routes = [
  {
    path: '',
    component: IntranetLayoutComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'users', component: UsersComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class IntranetRoutingModule { }
