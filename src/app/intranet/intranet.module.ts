import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntranetRoutingModule } from './intranet-routing.module';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { IntranetLayoutComponent } from './intranet-layout/intranet-layout.component';
import { IndexComponent } from './pages/index/index.component';
import { UsersComponent } from './pages/users/users.component';


@NgModule({
  declarations: [
    ButtonsComponent,
    IntranetLayoutComponent,
    IndexComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    IntranetRoutingModule
  ]
})
export class IntranetModule { }
