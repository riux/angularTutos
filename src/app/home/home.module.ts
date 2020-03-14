import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { CuadroComponent } from './components/cuadro/cuadro.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { IndexComponent } from './pages/index/index.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { AnimateComponent } from './components/animate/animate.component';




@NgModule({
  declarations: [
    HomeLayoutComponent,
    CuadroComponent,
    EmpresaComponent,
    IndexComponent,
    AboutComponent,
    ContactComponent,
    AnimateComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class HomeModule { }
