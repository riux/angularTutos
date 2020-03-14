import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnsComponent } from './components/btns/btns.component';
import { MaterialModule } from '../material.module';
import { ResaltarDirective } from './directives/resaltar.directive';



@NgModule({
  declarations: [
    BtnsComponent,
    ResaltarDirective
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    BtnsComponent,
    ResaltarDirective
  ]
})
export class SharedModule { }
