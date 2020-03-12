import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProjectLayoutComponent } from './core/layouts/project-layout/project-layout.component';
import { allRoutes } from './core/routes/all-routes';

const routes: Routes = [
  {
    path: '',
    component: ProjectLayoutComponent,
    children: allRoutes
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
