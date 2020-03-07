import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    HomeComponent,
    MainNavComponent,
    NosotrosComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule
  ]
})
export class PagesModule { }
