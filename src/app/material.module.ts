import { NgModule } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [

  ],
  exports: [
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    LayoutModule,
  ],
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    LayoutModule,
  ]
})
export class MaterialModule {

}
