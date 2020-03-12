import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnsComponent } from './components/btns/btns.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    BtnsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    BtnsComponent
  ]
})
export class SharedModule { }
