import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFound404Component } from './components/not-found404/not-found404.component';
import { ProjectLayoutComponent } from './layouts/project-layout/project-layout.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { MenuListItemComponent } from './components/menu-list-item/menu-list-item.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFound404Component,
    ProjectLayoutComponent,
    MenuListItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class CoreModule { }
